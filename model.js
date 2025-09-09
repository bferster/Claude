
	var model="";
	
	var options10s=[
		{ intent:110, category:"Task Specific", description:"Low information compliment",
				information:  "Teacher compliments student response.",
				definitions:[
					"Acknowledges but does not engage with response", 
					"Teacher acknowledges student’s contribution, but moves on.",
					"Teacher accepts the answer as correct without further probing.",
					"Teacher expresses a generic compliment.",
					"Other students in the group wouldn’t learn from this response.",
					"Teacher acknowledges that student was close to the correct answer, but does not provide additional feedback.",
					"Teacher restates student response",
					"Teacher affirms that an answer is not incorrect, despite it being partially correct or incomplete."],
				examples:[  
					"Good job.", 
					"Correct.", 
					"Nice work." ] 	
				},
		{intent:120, category:"Task Specific", description:"Try again",
				information: "Teacher identifies student response as incorrect and prompts for the next attempt without giving specific guidance about how to correct the misunderstanding. The teacher is doing the thinking for the student.",
				definitions:[	
					"Teacher asks students to try again without direction or additional support.",
					"Teacher repeats or restates the discussion question.",
							"Teacher asks the student to state or restate their response."],
				examples:[  
					"Not quite, try again." ,
					"Almost… can anyone else answer?", 
					"Read the question again."]
				},
		{intent:130, category:"Task Specific", description:"Low information correction",
				information: "Teacher identifies student response as incorrect by providing the correct response, but the teacher does not indicate what thinking or understanding is necessary to reach the correct answer.",
				definitions:[	
					"Teacher acknowledges partial understanding as incomplete", 
					"Teacher does not indicate WHY the answer is incorrect/incomplete",
					"Teacher Combines answers from several students to create a composite answer, so that no one is technically wrong.",
					"Teacher asks student(s) to contribute to an answer.",
					"Teacher asks students to comment on each other’s responses in an effort to correct the response.",
					"Teacher pairs or groups students for support, without providing feedback, further clarification or suggestions."],
				examples:[  
					"That is partly correct",
					"That is not totally correct",
					"No, the answer is photosynthesis.", 
					"Actually, it’s 12."] 
				},
		{intent:140, category:"Task Specific", description:"Tangential story or instruction",
				information: "Teacher asks students questions or tells a story tangentially related to the topic, but not relevant to the question or text. This may be in an effort to learn more about a student and can lead to confusion among students connecting these comments to their response, question, or the text.",
				definitions:[
					"Tangential instruction without purposeful connection to question or text: Teacher asks follow up questions about a topic that isn’t directly relevant to the question or text."],
				examples:[  
					"That reminds me of my trip to the zoo",
					"Asking about a student’s weekend during a reading task."]
				},
		{intent:150, category:"Task Specific", description:"Low information question or statement",
				information: "Teacher asks questions or provides statements that do not contain any specific information.",
				definitions:[	
					"Teacher asks a generic or vague check for understanding",
					"Teacher provides a statement/instruction with vague actions for students.",
					"Teacher provides a statement/instruction with vague actions for lesson."],
					examples:[  
					"Does everyone understand?",
					"Pay attention.",
					"We’re going to dig deeper into this."]
				},
				

				
		{intent:210, category:"Explain & Clarify", description:"Teacher explanations of text, question, responses, and purpose of the group",
				information: "Teacher explains the text or question with or without reference to the text. The teacher prompts students to think about why their response is incorrect without engaging students with the text. The teacher explains the purpose for the small group lesson. What the teacher is doing the thinking and not sharing the thinking so the student is not given a reason why or purpose underlying the teacher’s explanation or prompt.",
				definitions:["Provides explanation of the question without a reference to the text", 
					"Teacher provides non-text support for students to understand the question.",					
					"Teacher may build background knowledge, schema, or explain other elements necessary to understanding the question.",
					"Teacher explains the prompt by defining terms in the question.",
					"Teacher asks a question or makes a statement with the purpose of increasing student understanding of why their response is incorrect or incomplete, but it does not  require the use of text. It could be building background knowledge without text evidence.",
					"Teacher may build background knowledge, schema, or explain other elements necessary to understanding the question: Teacher asks a general question to summarize an instructional moment and/or engages in a specific check for understanding.",
					"Teacher explains the meaning of a passage without engaging students in the process.",
					"Teacher asks a question or provides a direction with the purpose of increasing student understanding of the text, but does not provide a suggestion or clear next step.",
					"Teacher asks a question that helps students connect the text to their past experiences or background knowledge."], 
				examples:[  
					"This word means machine.",
					"The question is really asking you to compare two things.", 
					"The purpose of our group today is to practice identifying themes."]
				},					
		{intent:220, category:"Explain & Clarify", description:"Sets purpose for learning in small group",
				information: "Teacher sets reason for small group learning. Teacher goes beyond a vague or broad objective.",
				definitions:[
					"Teacher Sets purpose for group",
					"Teacher explains why students are engaging in the task or communicates the thinking objective.",
					"Teacher elaborates more than just restating the question"],
				examples:[  
					"We’re practicing how to use evidence because it helps us explain our thinking.", 
					"Today we’re focusing on making connections between events."]
			},
		{intent:230, category:"Explain & Clarify", description:"Clarifying student thinking",
				information: "Teacher probes for more information about how a student reached their answer/ This begins to draw out the source of student understanding or misunderstanding. For example, this can help a teacher determine whether misunderstanding was a result of (1) misunderstanding the question, (2) misunderstanding the text, (3) missing a foundational skill, and/or (4) misapplying background knowledge.",
				definitions:[ 
					"Teacher probes student thinking without judgment",
					"Teacher asks questions to understand student reasoning",
					"Teacher probes their thinking process without making evaluative statements"],
				examples:[  
					"What in the text makes you think that?", 
					"Can you explain how you figured that out?"]			
			},



		{intent:310, category:"Value", description:"Values student thinking",
				information: "Teacher expresses value for a specific element of a student’s response that is related to a reading or thinking skill. Tis is not generic praise. Remark needs to be supportive of high-quality and complete responses. The teacher works toward meeting students where they are with their emergent thinking",
				definitions:[ 
					"Affirms student by recognizing their perspective",
					"Teacher affirms student for their use of text",
					"Teacher affirms student for a specific thinking strategy.",
					"Teacher affirms student for some specific background knowledge", 
					"Teacher affirms student by recognizing their perspective"], 
				examples:[ 
					"Nice job using evidence to back up your idea.",  
					"You really explained your reasoning clearly."]  
			},


		{intent:410, category:"Concern & Suggestion", description:"Identifies specific concern with student response",
				information: "Teacher shares a specific concern with a portion of a student response. This brings to attention a student’s specific thinking strategy that led to misunderstanding and supports students in being able to apply stronger thinking to other tasks.",
				definitions:[ 
					"Teacher expresses a concern about student’s understanding of the question",
					"Teacher explicitly tells the student WHY their understanding of the question is incorrect",
					"Teacher identifies a specific thinking process that leads to misunderstanding the question.",
					"Teacher explicitly tells the student WHY their response is incorrect.",
					"Expresses concern about student comprehension of the text",
					"Teacher explicitly tells the student WHY their understanding of the text is incorrect"],
				examples:[ 
					"I see you’re focusing only on one detail, but the question asked for the main idea.",
					"That explanation mixes up cause and effect."]
			},
			
		{ intent:420, category:"Concern & Suggestion", description:"Provides a suggestion  for how to improve student response",
				information: "Teacher shares suggestions for how to think through a more complete understanding.",
				definitions:[ 
					"Provides suggestion to improve student understanding of the question.",
					"Teacher provides a strategy or clear action step to improve student understanding of the question.",
					"Provides suggestion for student response,",
					"Teacher provides a strategy or action step for improving student response.",
					"Teacher provides a strategy or clear action step to improve student understanding of the text."],
					examples:[ 
						"Try looking back at the second paragraph for evidence.",
						"Use transition words to make your answer clearer."]
			},				
		{ intent:430, category:"Concern & Suggestion", description:"Identifies a concern and provides a suggestion",
				information: "Teacher provides both a concern and suggestion.",
				definitions:[ 
					"Teacher explicitly tells the student WHY their understanding of the text is incorrect AND provides a strategy or clear action step to improve student understanding of the text."],
				examples:[ 
					"Your answer only explains what happened, not why. Try adding a sentence that shows the cause.",
					"That’s a partial idea — you’ll need to use evidence from the text to make it stronger"]
			},				




		{ intent:510, category:"Learning Beyond Current Task", description:"Metacognition",
					information:"Awareness of one’s own thought processes to plan, monitor, adjust, and reflect on learning actions, outcomes, and experiences.",
					definitions:[ 	
						"Teacher highlights a thinking strategy that students used.",
						"Teacher introduces or explains a thinking strategy.",
						"Teacher identifies the type of thinking a student used and thinking actions."	],
					examples:[  
						"How did you figure that out?", 
						"How has your thinking changed from your first answer to your answer now?",
						"What strategy worked best for you here?" ]
				},
			{ intent:520, category:"Learning Beyond Task", description:"Transfer",
					information:"Apply learning to over time to different contexts, with different materials and/or purposes",
					definitions:[ 	
						"Teacher prompts students to transfer what they've learned.", 
						"Teacher asks students a question that prompts them to think about applying the strategies or knowledge learned in the lesson to future comprehension of questions or reading tasks."	],
					examples:[  
						"What will you do next time you’re answering a question like this?",
						"What did you learn today that will help you next time you're answering questions from the text?",
						"How could you use this strategy in science class?"	]
				},
			{ intent:530, category:"Learning Beyond Task", description:"Generalization",
					information:"Uses past learning in current situation",
					definitions:[ 	
						"Teacher prompts students to reflect", 
						"Teacher asks students to think back to the beginning of activity and identify the growth of their knowledge, thinking, or understanding",
						"Teacher asks students about how prior experiences supported their learning in this lesson."	],
					examples:[  
						"How does this connect to what we learned last week?",
						"Think about when we read about such and such, how is this similar?"	]
				}
		];


	var options100s=[
		{ intent:100, category:"Task Specific", description:"Low information compliment",
				information:  "Teacher compliments student response.",
				definitions:[
					"Acknowledges but does not engage with response", 
					"Teacher acknowledges student’s contribution, but moves on.",
					"Teacher accepts the answer as correct without further probing.",
					"Teacher expresses a generic compliment.",
					"Other students in the group wouldn’t learn from this response.",
					"Teacher acknowledges that student was close to the correct answer, but does not provide additional feedback.",
					"Teacher restates student response",
					"Teacher affirms that an answer is not incorrect, despite it being partially correct or incomplete.",
					"Teacher asks students to try again without direction or additional support.",
					"Teacher repeats or restates the discussion question.",
					"Teacher asks the student to state or restate their response.",
					"Teacher acknowledges partial understanding as incomplete", 
					"Teacher does not indicate WHY the answer is incorrect/incomplete",
					"Teacher Combines answers from several students to create a composite answer, so that no one is technically wrong.",
					"Teacher asks student(s) to contribute to an answer.",
					"Teacher asks students to comment on each other’s responses in an effort to correct the response.",
					"Teacher pairs or groups students for support, without providing feedback, further clarification or suggestions.",
					"Teacher asks tangential instruction without purposeful connection to question or text",
					"Teacher asks follow up questions about a topic that isn’t directly relevant to the question or text.",
					"Teacher asks a generic or vague check for understanding",
					"Teacher provides a statement/instruction with vague actions for students.",
					"Teacher provides a statement/instruction with vague actions for lesson.",
				],
				examples:[  
					"Good job.", 
					"Correct.", 
					"Not quite, try again." ,
					"Almost… can anyone else answer?", 
					"Nice work.", 	
					"Read the question again.",
					"That is partly correct",
					"That is not totally correct",
					"No, the answer is photosynthesis.", 
					"Actually, it’s 12.",
					"That reminds me of my trip to the zoo",
					"Asking about a student’s weekend during a reading task.",
 					"Does everyone understand?",
					"Pay attention.",
					"We’re going to dig deeper into this."
					],
				},
				
		{intent:200, category:"Explain & Clarify", description:"Teacher explanations of text, question, responses, and purpose of the group",
				information: "Teacher explains the text or question with or without reference to the text. The teacher prompts students to think about why their response is incorrect without engaging students with the text. The teacher explains the purpose for the small group lesson.",
				definitions:["Provides explanation of the question without a reference to the text", 
					"Teacher may build background knowledge, schema, or explain other elements necessary to understanding the question.",
					"Teacher explains the prompt by defining terms in the question.",
					"Teacher asks a question or makes a statement with the purpose of increasing student understanding of why their response is incorrect or incomplete, but it does not  require the use of text. It could be building background knowledge without text evidence.",
					"Teacher may build background knowledge, schema, or explain other elements necessary to understanding the question: Teacher asks a general question to summarize an instructional moment and/or engages in a specific check for understanding.",
					"Teacher explains the meaning of a passage without engaging students in the process.",
					"Teacher asks a question or provides a direction with the purpose of increasing student understanding of the text, but does not provide a suggestion or clear next step.",
					"Teacher asks a question that helps students connect the text to their past experiences or background knowledge.",
					"Teacher Sets purpose for group",
					"Teacher explains why students are engaging in the task or communicates the thinking objective.",
					"Teacher elaborates more than just restating the question",
					"Teacher probes student thinking without judgment",
					"Teacher asks question to understand student reasoning",
					"Teacher probes their thinking process without making evaluative statements",
					], 
				examples:[  
					"This word means machine.",
					"The question is really asking you to compare two things.", 
					"The purpose of our group today is to practice identifying themes.",
					"We’re practicing how to use evidence because it helps us explain our thinking.", 
					"Today we’re focusing on making connections between events.",
					"What in the text makes you think that?",
					"Can you explain how you figured that out?"
					],
				},	

		{intent:300, category:"Value", description:"Values student thinking",
				information: "Teacher expresses value for a specific element of a student’s response that is related to a reading or thinking skill. This is not generic praise. Remark needs to be supportive of high-quality and complete responses. The teacher works toward meeting students where they are with their emergent thinking",
				definitions:[ 
					"Affirms student by recognizing their perspective",
					"Teacher affirms student for their use of text",
					"Teacher affirms student for a specific thinking strategy.",
					"Teacher affirms student for some specific background knowledge", 
					"Teacher affirms student by recognizing their perspective"], 
				examples:[ 
					"Nice job using evidence to back up your idea.",  
					"You really explained your reasoning clearly."]  
			},



		{intent:400, category:"Concern & Suggestion", description:"Identifies specific concern with student response. Provides a suggestion  for how to improve student response",
				information: "Teacher shares a specific concern with a portion of a student response. This brings to attention a student’s specific thinking strategy that led to misunderstanding and supports students in being able to apply stronger thinking to other tasks. Teacher shares suggestions for how to think through a more complete understanding.",
				definitions:[ 
					"Teacher expresses a concern about student’s understanding of the question",
					"Teacher explicitly tells the student WHY their understanding of the question is incorrect",
					"Teacher identifies a specific thinking process that leads to misunderstanding the question.",
					"Teacher explicitly tells the student WHY their response is incorrect.",
					"Expresses concern about student comprehension of the text",
					"Teacher explicitly tells the student WHY their understanding of the text is incorrect",
					"Provides suggestion to improve student understanding of the question.",
					"Teacher provides a strategy or clear action step to improve student understanding of the question.",
					"Provides suggestion for student response,",
					"Teacher provides a strategy or action step for improving student response.",
					"Teacher provides a strategy or clear action step to improve student understanding of the text.",
					"Teacher explicitly tells the student WHY their understanding of the text is incorrect AND provides a strategy or clear action step to improve student understanding of the text."
					],
				examples:[ 
					"I see you’re focusing only on one detail, but the question asked for the main idea.",
					"That explanation mixes up cause and effect.",
					"Try looking back at the second paragraph for evidence.",
					"Use transition words to make your answer clearer.",
					"Try looking back at the second paragraph for evidence.",
					"Use transition words to make your answer clearer.",
					"Your answer only explains what happened, not why. Try adding a sentence that shows the cause.",
					]
			},
			


		{ intent:500, category:"Learning Beyond Current Task", description:"Metacognition, transfer, and generalization",
					information:"Awareness of one’s own thought processes to plan, monitor, adjust, and reflect on learning actions, outcomes, and experiences.",
					definitions:[ 	
						"Teacher highlights a thinking strategy that students used.",
						"Teacher introduces or explains a thinking strategy.",
						"Teacher identifies the type of thinking a student used and thinking actions.",
						"Teacher asks students to transfer what they've learned.", 
						"Teacher asks students a question that prompts them to think about applying the strategies or knowledge learned in the lesson to future comprehension of questions or reading tasks.",
						"Teacher prompts students to reflect", 
						"Teacher asks students to think back to the beginning of activity and identify the growth of their knowledge, thinking, or understanding",
						"Teacher asks students about how prior experiences supported their learning in this lesson."
						],
					examples:[  
						"How did you figure that out?", 
						"How has your thinking changed from your first answer to your answer now?",
						"What strategy worked best for you here?",
						"What will you do next time you’re answering a question like this?",
						"What did you learn today that will help you next time you're answering questions from the text?",
						"How could you use this strategy in science class?",
						"How does this connect to what we learned last week?",
						"Think about when we read about such and such, how is this similar?"
						]
 				}
			];

	var options100s2=[ 
		{
		"intent": 100,
		"category": "Task Specific",
		"description": "Low-information compliment or vague response",
		"information": "Teacher acknowledges or responds to a student without providing meaningful feedback or advancing thinking.",
		"definitions": [
			"Generic or vague compliment (e.g., 'Good job').",
			"Acknowledges a response without probing further.",
			"Accepts an answer as correct without explanation.",
			"Restates or repeats the student response or question.",
			"Acknowledges partial/incomplete answer without clarifying why.",
			"Asks students to try again without support or direction.",
			"Provides vague instructions or checks for understanding.",
			"Shifts to unrelated or tangential discussion."
			],
		"examples": [
			"Good job.",
			"Correct.",
			"Not quite, try again.",
			"Almost… can anyone else answer?",
			"Nice work.",
			"Read the question again.",
			"That is partly correct.",
			"That is not totally correct.",
			"No, the answer is photosynthesis.",
			"Actually, it’s 12.",
			"That reminds me of my trip to the zoo.",
			"Does everyone understand?",
			"Pay attention.",
			"We’re going to dig deeper into this."
			]
		},
		{
		"intent": 200,
		"category": "Clarify",
		"description": "Teacher asks student a question to understand thinking or knowledge.",
		"definitions": [
			"Asks clarifying questions to probe reasoning or thinking."],
		"examples": [
			"What in the text makes you think that?",
			"Can you explain how you figured that out?"
			]
		},
		{
		"intent": 300,
		"category": "Value",
		"description": "Affirms and values student thinking",
		"information": "Teacher affirms a specific element of a student’s response (use of text, strategy, reasoning, or perspective) to highlight quality thinking.",
		"definitions": [
			"Affirms a student’s perspective or reasoning.",
			"Recognizes effective use of text evidence.",
			"Acknowledges use of a specific thinking strategy.",
			"Values relevant background knowledge applied to task."
			],
		"examples": [
			"Nice job using evidence to back up your idea.",
			"You really explained your reasoning clearly."
			]
		},
		{
		"intent": 400,
		"category": "Concern & Suggestion",
		"description": "Identifies concern and provides targeted suggestion",
		"information": "Teacher points out a specific misunderstanding or gap in a student’s response and offers a strategy, clarification, or next step to improve understanding.",
		"definitions": [
			"Explains why a student’s answer is incorrect or incomplete.",
			"Identifies a flawed thinking process or misconception.",
			"Highlights misunderstanding of question or text.",
			"Provides a concrete suggestion to revise or improve.",
			"Offers a strategy or clear action step for improvement."
			],
		"examples": [
			"I see you’re focusing only on one detail, but the question asked for the main idea.",
			"That explanation mixes up cause and effect.",
			"Try looking back at the second paragraph for evidence.",
			"Use transition words to make your answer clearer.",
			"Your answer only explains what happened, not why. Try adding a sentence that shows the cause."
			]
		},
		{
		"intent": 500,
		"category": "Learning Beyond Current Task",
		"description": "Metacognition, transfer, and reflection",
		"information": "Teacher prompts students to reflect on their own thinking, identify strategies, or apply learning beyond the immediate task.",
		"definitions": [
			"Highlights or introduces a thinking strategy.",
			"Asks students to reflect on how they solved a problem.",
			"Encourages transfer of learning to new tasks or subjects.",
			"Prompts reflection on growth in knowledge or skills.",
			"Connects current learning to prior experiences or future use."
			],
		"examples": [
			"How did you figure that out?",
			"How has your thinking changed from your first answer?",
			"What strategy worked best for you here?",
			"What will you do next time you’re answering a question like this?",
			"What did you learn today that will help you next time?",
			"How could you use this strategy in science class?",
			"How does this connect to what we learned last week?"
			]
		}
	];

	var options=[ 
		{
		intent: 100,
		category: "Low Impact",
		title:"Teacher says a statement that has low impact on student learning.",
		description: "Teacher statement is incorrect, vague, simply repeats the student's response or doesn't build on the meaning of the student's response. A teacher might give a compliment to an incorrect student response or a correction with out referencing how the student got to the incorrect response. A teacher may also give a compliment to a correct response without providing any reference to their thinking process.  This type of feedback has low impact on student learning, low transfer to other tasks, and provides low information to students about their thinking.  This doesn't enhance student thinking or understanding of the text or task.",
		definitions: [
			"Teacher acknowledges but does not engage with response.", 
			"Teacher restates student response.",
			"Teacher acknowledges that student was “close” to the correct answer, but does not provide additional feedback.",
			"Teacher acknowledges a student contribution not related to the question or text.",
			"Teacher treats partial understandings as valid interpretations of text.",
			"Teacher asks or repeats a correct student response with no information.",
			"Teacher asks to re-read or re-try without direction or additional support.",
			"Teacher provides a low information correction.",
			"Teacher provides a low information check for understanding."
			],
		"examples": [
			"Nice job.",
			"That's correct.",
			"This is what you said: _____.",
			"You’re close, but not quite there.",
			"I appreciate all of you guys volunteered to read.",
			"You weren't exactly wrong.",
			"Equipment is a great word. Did anybody else put equipment.",
			"I want you to read over that for a minute and see if anything sticks out.",
			"The question asks: _____.",
			"Can you re-read the question.",
			"Can you read your response again.",
			"She never learned to read and write.",
			"Does that make sense?"
			]	
		},
		{
		intent: 200,
		category: "Clarify",
		title:"Teacher asks clarifying question",
		description:"Teacher probes for more information about how a student reached their answer. This begins to draw out the source of student understanding or misunderstanding.This can help a teacher determine whether misunderstanding was a result of (1) misunderstanding the question, (2) misunderstanding the text, (3) missing a foundational skill, and/or (4) misapplying background knowledge.",
		definitions: [
			"Teacher asks a follow-up question to help students elaborate on their response without an explicit reference to the text/question.",
			"Teacher asks a follow-up question to help students elaborate their response in relationship to the text or image.",
			"Teacher asks students to clarify what necessary criteria they have included in their response and/or what is still missing fro mtheir response.",
			"Teacher asks  about prior knowledge."	
			],
		"examples": [
			"Why do you say that.",
			"Can you tell me more",
			"How did you get that answer", 
			"What in the text makes you think that",
			"What do you mean by ___",
			"What did you see in the image that makes you say that.",
			"What qualities do you already have in your response.",
			"What are you missing from your answer.",
			"What do you know about how this person used literacy in her work.",
			"What facts do you know about this: ___"
			]
					},
		{
		intent: 300,
		category: "Reflect",
		title:"Teacher reflects on student thinking",
		description: "Teacher restates or summarizes student thinking in attempt to understand or support student comprehension.",
		definitions: [
			"Teacher repeats, restates, praises, or summarizes student thinking and teacher reflects the understanding back to the student for confirmation.  Reflect remarks usually start with the word: 'you.'",
			"Teacher recognizes that students are using background knowledge from personal expereinces or class content to inform their response.",
			],
		examples: [
			"You identified how she used literacy.",
			"You identified evidence of the literacy tool of symbolism.",
			"You are making a connection between knitting and abiity to produce.",
			"You're noticing lots of details in the portrait.",
			"You’re bringing in your background experiences.",
			"You're drawing on your prior learning.",
			"You are applying your past knowledge"
			]
		},
		{
		intent: 400,
		category: "Cultivate",
		title: "Teacher supports student thinking to achieve learning goal",
		description: "Teacher prompts students to find new information or strategies that move toward the next learning goal.  Teachers may provide examples and information, model specific analytical skills, examine details, and redirect thinking. Teachers will direct students to use learning resources such as fact sheets, word walls, vocab cards, etc.  Teachers may also ask specific questions to direct student looking when redirecting them back to the text or image.",
		definitions: [
			"Explore: Teachers prompt students to connect ideas, question assumptions, look more closely, view from new perspectives, and draw on prior knowledge. Exploration deepens and broadens responses, fosters curiosity, and leads students beyond initial thinking.",
			"Redirect: When responses contain errors or tangents, teachers use redirect prompts to refocus on the learning goal.  Teacher may explicitly tell the student WHY their understanding of the text is incorrect and provide a strategy or clear action step to improve understanding.",
			"Analyze: When answers lack reasoning, teachers prompt analysis. These prompts invite students to examine details, verify facts, generate new questions, or compare ideas with prior learning. Teachers may provide resources (e.g., maps, timelines, fact sheets) or sentence frames using connectors such as because, however, unless, or even so.",
			"Teacher asks students to use resources such as fact sheets, vocab cards, etc. to enhance their response.",
			"Teacher asks students to use sentence frames to make their responses more complete",
			"Teacher asks students to annotate or circle in the text or image.",
			"Synthesize: When ideas are numerous or complex, teachers prompt synthesis. Students organize thinking into frameworks that reveal trends, concepts, or larger questions. Teachers look for cohesive responses."				
			],
		examples: [
			"What other questions do you have.", 
			"Tell me more about how this connects to: ____",
			"What details here show ...communicatin: ____",
			"Let's look again to find more evidence.",
			"What else can you tell me about: ____",
			"Let’s focus on what we know.",
			"Let’s move in a different direction",
			"Let’s compare: _____",
			"Let’s weigh the pros and cons.",
			"Let's look at the fact cards to learn more.",
			"Can you read the definitions of literacy and symbolism on the vocab cards.",
			"Let's use the vocab cards to understand the definitions of literacy and symbolism.",
			"Let’s use the sentence frame on the board to make a more complete response to the question.",
			"Let’s circle the details that she used to communicate ideas about her life."
			]
		},
		{
		intent:"Extend",
		category: "Task Specific",
		title: "Teacher prompts student for metacognition for thinking",
		description: "The teacher asks students to think about and explain their thinking. These prompts promote metacognition. The student is being asked to think about how they would apply what they learned here to another activity, or to think about how their response changed from the beginning to the end, Prompt students to summarize, generalize, or transfer their learning to new contexts and tasks.",
		definitions: [
			"The teacher asks students to think about and explain their thinking. These prompts promote metacognition. The student is being asked to think about how they would apply what they learned here to another activity, or to think about how their response changed from the beginning to the end, Prompt students to summarize, generalize, or transfer their learning to new contexts and tasks.", 
			"Summarize: Teacher asks student to take all of what student said and shorten it to 1 or 2 sentences.",
			"Teacher asks student to analyze how answer changed from their first response to the final response following feedback.",
			"Transfer: Teacher asks student to explain how you will apply the strategies and processes used in this activity to learning process in another activity."
			],
		examples: [
			"Summarize by putting it all together in a sentence or two.",
			"Explain how your answer changed from when we started to now.",
			"Explain what you did to improve your answer.",
			"How did your answer change.",
			"Explain what you can do next time you get a question like this."
			]
		}];


		
	var prompt={
		tokens: 4096,
		role: "user",
		system: "You are classifying a middle-school teacher's [remark] by their primary instructional intent.",
		remark: "",
		model: model,
		temperature: 0,
		objective: "Classify the teacher’s [remark] into the single option from [options] whose intent best matches the teacher’s PRIMARY purpose in this utterance.",
		instructions :`FOLLOW THESE STEPS EXACTLY:
						1. Normalize the [remark]: trim whitespace, collapse repeated spaces, remove filler tokens at sentence starts (e.g., "um", "okay") without changing meaning.
						2. Read the entire remark and identify the single PRIMARY intent (what the teacher is trying to accomplish now). Ignore polite fillers or side comments.
						3. Compare the remark to the option definitions in [options] and select the best match.
						4. If two options are equally plausible, use the disambiguation_hierarchy to pick the higher-priority option.
						6. If you cannot map the remark to any option, output "0".
			KEY_DISTINGUISHERS:
				• Explicit correction + WHY or strategy → 400  
				• Explains meaning, probes reasoning, "What in the text…" → 200  
				• Reflection/transfer/metacognition → 500  
				• Praise tied to specific strategy/evidence → 300  
				• Generic/short praise, vague check, restating → 100
			DISAMBIGUATION_HIERARCY:
				1. 400 — Cultivate
				2. 200 — Clarify
				3. 500 — Extend
				4. 300 — Reflect
				5. 100 — Low Impact
			DEFAULT:
				If teacher say's thank you → 100.`,
		options: `OPTIONS:

			100 - LOW IMPACT
			Description: Vague, generic responses that don't advance learning
			Key patterns: Simple acknowledgments, restating student's word, compliments 
			Examples: "Nice job" | "That's correct" | "You're close" | "Does that make sense?" | "Re-read that" | Student, you said: ____

			200 - CLARIFY  
			Description: Asks for more information about what the student said. Remark MUST be a question.
			Key patterns: Questions about how/why student thinks something, requests for elaboration
			Examples: "Why do you say that?" | "How did you get that?" | "What in the text makes you think that?"

			300 - REFLECT
			Description: Restates/summarizes student thinking (often starts with "You...")
			Key patterns: Acknowledging student reasoning, recognizing their connections/background knowledge
			Examples: "You identified evidence of..." | "You're making a connection..." | "You're bringing in background knowledge"

			400 - CULTIVATE
			Description: Provides information or gives direction to actively guide toward learning goals with strategies, corrections + explanations, or resource use
			Key patterns: Explicit redirection with reasoning, prompts to use tools, strategic next steps
			Examples: "Let's look for more evidence" | "Use the vocab cards" | "Let's focus on what we know"

			420 - REDIRECT
			Description: Teacher explicitly tell the student WHY their understanding of the text is incorrect and provide a strategy or clear action step to improve understanding.
			Key patterns: Identifies and explains an incorrect response or misunderstanding
			Examples: "Your information is incorrect" | "You have a misunderstanding" | "The question is asking for something else"

			500 - EXTEND
			Description: Promotes metacognition - thinking about thinking, summarizing, or transferring learning
			Key patterns: Asks about thinking process changes, application to new contexts, summarizing
			Examples: "How did your answer change?" | "Summarize in one sentence" | "What would you do next time?"
			`
		};

