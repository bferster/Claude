const https = require('https');
const OpenAI = require("openai");

////////////////////////////////////////////////////////////////////////////////////////////////
// CLAUDE API
/////////////////////////////////////////////////////////////////////////////////////////////////

class ClaudeAPI {
	constructor(apiKey, options = {}) {
		if (!apiKey)  throw new Error('API key is required');
		this.apiKey = apiKey;
		this.baseURL='api.anthropic.com';
		this.version='2023-06-01';
		this.timeout=30000;
		}

 async makeRequest(endpoint, data = {}, method = 'POST') {
    return new Promise((resolve, reject) => {
      const postData = JSON.stringify(data);
      
      const options = {
        hostname: this.baseURL,
        path: endpoint,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
          'x-api-key': this.apiKey,
          'anthropic-version': this.version,
          'User-Agent': 'claude-nodejs-client/1.0.0'
        }
      };

      const req = https.request(options, (res) => {
        	let responseData = '';
        	res.on('data', (chunk) => { responseData += chunk;
        		});
        
        res.on('end', () =>{
			try {
				const parsedData = JSON.parse(responseData);
				if (res.statusCode >= 200 && res.statusCode < 300) 	resolve(parsedData);
				else   												reject(new Error(`API Error ${res.statusCode}: ${parsedData.error?.message || 'Unknown error'}`));
				} catch (parseError) {
			reject(new Error(`Failed to parse response: ${parseError.message}`));
			}
			});
    	});

      req.on('error', (error) => {
        reject(new Error(`Request failed: ${error.message}`));
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.setTimeout(this.timeout);
      req.write(postData);
      req.end();
    });
  }

 async createMessage(options) {
	const {
      model = 'claude-3-haiku-20240307',
      messages,
      max_tokens = 4096,
      system,
      temperature,
      stop_sequences
    } = options;

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages array is required');
    }

    const payload = {
      model,
      messages,
      max_tokens
    };

    if (system) payload.system = system;
    if (temperature !== undefined) payload.temperature = temperature;
    if (stop_sequences) payload.stop_sequences = stop_sequences;
    return this.makeRequest('/v1/messages', payload);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
// ACCESS API VIA EXPRESS
/////////////////////////////////////////////////////////////////////////////////////////////////

	const express = require('express');										// Use express module
	const cors = require('cors');											// Enable CORS
	const app=express();													// Alloc expreess
	const port = 3000;														// Set port
	app.use(cors());
	app.use(express.json());												// Use JSON
	
	app.post('/api', (req, res) => {									// HANDLE POST
 		Chat(req.body)													
	.then((r)=>{res.send({R:r})})
		});

	app.get('/api', (req, res) => {										// HANDLE GET
 		res.send({a:'GET request received successfully!'});
		});

	app.listen(port, () => {
    	console.log(`Server listening at ${port}`);
		});

/////////////////////////////////////////////////////////////////////////////////////////////////
// CHAT API ACCESS
/////////////////////////////////////////////////////////////////////////////////////////////////

	const claude = new ClaudeAPI(process.env.ANTHROPIC_API_KEY);
	const openAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY} );

	async function Chat(d) {

		if (d.model.match(/gpt/i)) {
		    try {
   				const response = await openAI.chat.completions.create({
      			model: d.model,
	//     		reasoning_effort:"low",
				max_completion_tokens: d.tokens,
  				messages: [
						{ role: "system", content: d.system },
						{ role: "user", content: d.content },
						{ role: "user", content: d.remark } ]
					});
   				console.log("ChatGPT:",response.choices[0].message.content);
				console.log("Usage info:", response.usage);
				return response.choices[0].message.content;
  				} catch (error) { console.error("Error calling OpenAI API:", error); }
			}
		else{
			try {
				const response = await claude.createMessage({
					model: d.model,
					max_tokens: d.tokens,
					temperature: 0.5,
					messages: [{ 
						role: d.role, 
						content: [	{ type: "text", text: d.content, cache_control: {type: "ephemeral" } },
									{ type: "text",text: d.remark } ]
								}],
					system: [	{ type: "text", text: d.system, cache_control: {type: "ephemeral" } } ]
					});
				console.log('Claude:', response.content[0].text);
				console.log('Usage:', response.usage);
				return response.content[0].text;
			} catch (error) { console.error('Claude Error:', error.message); }
		}
	}

////////////////////////////////////////////////////////////////////////////////////////////////
// HELPERS 
/////////////////////////////////////////////////////////////////////////////////////////////////

		
	function trace(msg, p1, p2, p3, p4)																// CONSOLE 
	{
		if (p4 != undefined)
			console.log(msg,p1,p2,p3,p4);
		else if (p3 != undefined)
			console.log(msg,p1,p2,p3);
		else if (p2 != undefined)
			console.log(msg,p1,p2);
		else if (p1 != undefined)
			console.log(msg,p1);
		else
			console.log(msg);
	}

	


