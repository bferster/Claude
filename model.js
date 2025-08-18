
	var model="";
	
	var options=[
		{ intent:110, category:"Task Specific", description:"Low information compliment",
				information:  "Teacher compliments student response. This includes when a teacher says correct to an incorrect response. This type of feedback has low impact on student learning, low transfer to other tasks, and provides low information to students about their thinking",
				definitions:[ "Acknowledges but does not engage with response: Teacher acknowledges student’s contribution, but moves on.",
								"Acknowledges but does not engage with response: Teacher accepts the answer as correct without further probing, or expresses a generic compliment.",
								"Acknowledges but does not engage with response: Accepts the answer as correct without further probing, or expresses a generic compliment.",
								"Acknowledges but does not engage with response: Other students in the group wouldn’t learn from this response.",
								"Acknowledges but does not engage with response: Acknowledges that student was close to the correct answer, but does not provide additional feedback.",
								"Acknowledges but does not engage with response: Teacher acknowledges a student contribution not related to the question or text.",
								"Acknowledges but does not engage with response: Teacher restates student response",
								"Treats partial understandings as valid interpretations of text: Teacher acknowledges partial understandings as valid interpretations of the text or valid answers to a question",
								"Treats partial understandings as valid interpretations of text: Affirms that an answer is not incorrect, despite it being partially correct or incomplete.",
								"Recognizes student background knowledge without a connection to text or task: Teacher recognizes students’ past experiences and background knowledge, but does not make a connection to enhance understanding of  the text or task.",
								"Recognizes student background knowledge without a connection to text or task: Teacher provides a generic remark that a student is a resource for others due to their background knowledge, even though the student’s answer may be wrong or irrelevant background knowledge was shared.",
								"Recognizes or repeats a correct student response with no information: Teacher recognizes or repeats student CORRECT response"],
				examples:[  
					"Good job.", 
					"Correct.", 
					"Nice work." ,
					"Teacher repeats student’s response without elaboration."] 	
				},
				{intent:120, category:"Task Specific", description:"Try again",
				information: "Teacher identifies student response as incorrect and prompts for the next attempt without giving specific guidance about how to correct the misunderstanding This type of feedback has low impact on student learning, low transfer to other tasks, and provides low information to students about their thinking. The teacher is doing the thinking for the students.",
				definitions:["Prompts to try again without direction or additional support: Teacher asks students to try again.",
								"Repeats or restates the discussion or their own question without additional support: Teacher repeats or restates the discussion question.",
								"Repeats or restates the discussion or their own question without additional support: Teacher repeats or restates their own question. Different than a suggestion because the teacher has NOT explained why tells students through question or statement",
								"Prompts student to state or restate a response: Teacher prompts the student to state or restate their response."],
				examples:[  
					"Not quite, try again." ,
					"Almost… can anyone else answer?", 
					"Read the question again."]
				},
				{intent:130, category:"Task Specific", description:"Low information correction",
				information: "Teacher identifies student response as incorrect by providing the correct response, but the teacher does not indicate what thinking or understanding is necessary to reach the correct answer. This type of feedback has low impact on student learning, low transfer to other tasks, and provides low information to students about their thinking.",
				definitions:["Acknowledges partial understanding as incomplete: Teacher acknowledges that the response is partially correct and may even correct the response, but does not (a) indicate WHY the answer is incorrect/incomplete and/or (b) engage students in the process.",
								"Acknowledges partial understanding as incomplete: Teacher Combines answers from several students to create a composite answer, so that no one is technically wrong.",
								"Attempts to correct by involving other students to support: Teacher asks student(s) to contribute to an answer.",
								"Attempts to correct by involving other students to support: Teacher asks students to comment on each other’s responses in an effort to correct the response.",
								"Attempts to correct by involving other students to support: Pairs or groups students for support, without providing feedback, further clarification or suggestions.",
								"Simply corrects without engaging the student: Teacher simply provides the correct answer or corrected information but does not (a) indicate WHY the answer is incorrect/incomplete and/or (b) engage students in the process."],
				examples:[  
					"No, the answer is photosynthesis.", 
					"Actually, it’s 12."] 
				},
				{intent:140, category:"Task Specific", description:"Tangential story or instruction",
				information: "Teacher asks students questions or tells a story tangentially related to the topic, but not relevant to the question or text. This may be in an effort to learn more about a student and can lead to confusion among students connecting these comments to their response, question, or the text.",
				definitions:["Tangential instruction without purposeful connection to question or text: Teacher asks follow up questions about a topic that isn’t directly relevant to the question or text."],
				examples:[  
					"That reminds me of my trip to the zoo",
					"Asking about a student’s weekend during a reading task."]
				},
				{intent:150, category:"Task Specific", description:"Low information question or statement",
				information: "Teacher asks questions or provides statements that do not contain any specific information related to the student responses, text, or question.",
				definitions:["Low information question or statement: Teacher asks a generic or vague check for understanding, i.e., one that does not get at the student's deeper understanding.",
								"Low information question or statement: Teacher provides a statement/instruction with low information (vague actions for students).",
								"Low information question or statement: Teacher provides a low information purpose statement (vague objective for the lesson)."],
				examples:[  
					"Does everyone understand?",
					"Pay attention.",
					"We’re going to dig deeper into this."]
				},
				{intent:210, category:"Explain & Clarify", description:"Teacher explanations of text, question, responses, and purpose of the group",
				information: "Teacher explains the text or question with or without reference to the text. The teacher prompts students tothink about why their response is incorrect without engaging students with the text. The teacher explains the purpose for the small group lesson. What the teacher is doing the thinking and not sharing the thinking so the student is not given a reason why or purpose underlying the teacher’s explanation or prompt.",
				definitions:["Provides explanation of the question without a reference to the text: Teacher provides non-text support for students to understand the question. E.g., teacher may build background knowledge, schema, or explain other elements necessary to understanding the question.",
								"Provides explanation of the question with a reference to the text (e.g., vocabulary, key word, type of question): Teacher provides non-text support for students to understand the question. E.g., teacher may build background knowledge, schema, or explain other elements necessary to understanding the question.",
								"Provides explanation of the question with a reference to the text (e.g., vocabulary, key word, type of question): Teacher provides non-text support for students to understand the question. E.g., teacher may build background knowledge, schema, or explain other elements necessary to understanding the question.",
								"Provides explanation of the question with a reference to the text (e.g., vocabulary, key word, type of question): Teacher explains the prompt by defining terms in the question.",
								"Teacher provides non-text support for students to understand the question. E.g., teacher may build background knowledge, schema, or explain other elements necessary to understanding the question: Teacher asks a question or makes a statement with the purpose of increasing student understanding of why their response is incorrect or incomplete, but it does not  require the use of text. It could be building background knowledge without text evidence.",
								"Teacher provides non-text support for students to understand the question. E.g., teacher may build background knowledge, schema, or explain other elements necessary to understanding the question: Teacher asks a general question to summarize an instructional moment and/or engages in a specific check for understanding.",
								"Provides support for students to understand the text: Teacher explains the meaning of a passage without engaging students in the process.",
								"Provides support for students to understand the text: Asks a question or provides a direction with the purpose of increasing student understanding of the text, but does not provide a suggestion or clear next step.",
								"Provides support for students to understand the text: Asks a question that helps students connect the text to their past experiences or background knowledge."], 
				examples:[  
					"This word means ___.",
					"The question is really asking you to compare two things.", 
					"The purpose of our group today is to practice identifying themes."]
				},					
			{intent:220, category:"Explain & Clarify", description:"Sets purpose for learning in small group",
				information: "Teacher sets reason for small group learning. Teacher goes beyond a vague or broad objective.",
				definitions:[ "Sets purpose for group: Teacher explains why students are engaging in the task or communicates the thinking objective. Explanation elaborates more than just restating the question"],
				examples:[  
					"We’re practicing how to use evidence because it helps us explain our thinking.", 
					"Today we’re focusing on making connections between events."]
			},
			{intent:230, category:"Explain & Clarify", description:"Clarifying student thinking",
				information: "Teacher probes for more information about how a student reached their answer/ This begins to draw out the source of student understanding or misunderstanding. For example, this can help a teacher determine whether misunderstanding was a result of (1) misunderstanding the question, (2) misunderstanding the text, (3) missing a foundational skill, and/or (4) misapplying background knowledge.",
				definitions:[ "Probes student thinking without judgment: Teacher asks questions to understand student reasoning or probe their thinking process without making evaluative statements"],
				examples:[  
					"What in the text makes you think that?", 
					"Can you explain how you figured that out?"]			
			},
			{intent:310, category:"Value", description:"Values student thinking",
				information: "Teacher expresses value for a specific element of a student’s response that is related to a reading or thinking skill (This teacher move begins to increase the impact on student learning by highlighting a student’s specific thinking strategy and supports students in being able to apply and transfer this thinking to other tasks. In essence, value is akin to perspective taking the teacher sees the response from the student perspective and values what they are working on. It needs to be supportive of high-quality and complete responses. The teacher works toward meeting students where they are with their emergent thinking",
				definitions:[ "Affirms student by recognizing their perspective: Teacher affirms student for their use of text, a specific thinking strategy, specific background knowledge, or a skill related to reading the text. Requires recognizing specific skills, not generic praise",
							  "Affirms student by recognizing their perspective: Teacher reflects back previous student response to take on their perspective."],
				examples:[ "Nice job using evidence to back up your idea.",  
							"You really explained your reasoning clearly."]  
			},
			{intent:410, category:"Concern & Suggestion", description:"Identifies specific concern with student response",
					information: "Teacher shares a specific concern with a portion of a student response. This teacher move begins to increase the impact on student learning by bringing to attention a student’s specific thinking strategy that led to misunderstanding and supports students in being able to apply stronger thinking to other tasks.",
					definitions:[ "Expresses a concern about student’s understanding of the question: Teacher explicitly tells the student WHY their understanding of the question is incorrect, e.g., identifies a specific thinking process that leads to misunderstanding the question.",
									"Expresses a concern about student response: Teacher explicitly tells the student WHY their response is incorrect.",
									"Expresses concern about student comprehension of the text: Teacher explicitly tells the student WHY their understanding of the text is incorrect"],
				examples:[ "I see you’re focusing only on one detail, but the question asked for the main idea.",
							"That explanation mixes up cause and effect."]
			},
			{ intent:420, category:"Concern & Suggestion", description:" Provides a suggestion (action step) for how to improve student response",
					information: "Teacher shares suggestions for how to think through a more complete understanding. This teacher move begins to increase the impact on student learning by suggesting a new or stronger thinking strategy and supports students in being able to apply and transfer this thinking to other tasks. Whenever we code for 'suggestion,' there must be a clear action step.",
					definitions:[ "Provides suggestion (action step) to improve student understanding of the question: Teacher provides a strategy or clear action step to improve student understanding of the question.",
									"Provides suggestion for student response: Teacher provides a strategy or action step for improving student response.",
									"Provides suggestion for student response: Sometimes stated as a question",
									"Provides suggestion for student response: Student doing thinking work",
									"Provides suggestion for student comprehension of the text: Teacher provides a strategy or clear action step to improve student understanding of the text."],
					examples:[ "Try looking back at the second paragraph for evidence.",
						   		"Use transition words to make your answer clearer."]
			},				
			{ intent:430, category:"Concern & Suggestion", description:"Identifies a concern and provides a suggestion",
				information: "Teacher provides both a concern and suggestion.",
				definitions:[ "Provides concern & suggestion for question",
								"Provides concern & suggestion for student response: Teacher explicitly tells the student WHY their understanding of the text is incorrect AND provides a strategy or clear action step to improve student understanding of the text.",
								"Provides concern & suggestion for student comprehension: Teacher explicitly tells the student WHY their understanding of the text is incorrect AND provides a strategy or clear action step to improve student understanding of the text."],
				examples:[ "Your answer only explains what happened, not why. Try adding a sentence that shows the cause.",
							"That’s a partial idea — you’ll need to use evidence from the text to make it stronger"]
			},				
			{ intent:510, category:" Learning Beyond Task", description:"Metacognition",
					information: "Awareness of one’s own thought processes to plan, monitor, adjust, and reflect on learning actions, outcomes, and experiences. How has your thinking changed from your first answer to your answer now?",
					definitions:[ "Highlights a thinking strategy that students used: Teacher introduces or explains a thinking strategy.",
									"Highlights a thinking strategy that students used: Teacher identifies the type of thinking a student used and thinking actions.",
									"Highlights a thinking strategy that students used: Teacher highlights a thinking strategy that students used."
								],
					examples:[  
						"How did you figure that out?", 
						"What strategy worked best for you here?" ]
			},
			{ intent:520, category:" Learning Beyond Task", description:"Transfer",
					information: "Apply learning to over time to different contexts, with different materials and/or purposes",
					definitions:[ "Prompts students to transfer (e.g., What did you learn today that will help you next time you're answering questions from the text?): Teacher asks students a question that prompts them to think about applying the strategies or knowledge learned in the lesson to future comprehension of questions or reading tasks."],
					examples:[  
						"What will you do next time you’re answering a question like this?", 
						"How could you use this strategy in science class?"]
			},
			{ intent:530, category:" Learning Beyond Task", description:"Generalization",
					information: "Uses past learning to engage in current situation",
					definitions:[ "Prompts students to reflect: Teacher asks students to think back to the beginning of activity and identify the growth of their knowledge, thinking, or understanding",
								  "Prompts students to reflect: Ask students about how prior experiences supported their learning in this lesson."],
					examples:[  
						"How does this connect to what we learned last week?",
						"Think about when we read ___—how is this similar?"]
			}
		];

	var prompt={
		tokens: 4096,
		role: "user",
		system: "You are a middle-school English responding to a to middle school student.",
		remark: "",
		model: model,
		temperature: .5,
		objective: "Classify a teacher’s remark into the single option that best matches its intent. Output only the option ID (e.g., 230). Do not explain your choice ",
		instructions : `1. Read the teacher’s <remark> carefully.
						2. Determine the main intent of the remark (what the teacher is trying to do). Ignore filler or polite words.  
						3. Compare it to <options> (using the categories, descriptions, definitions, and examples in each one).  
						4. Apply <key distinguishers>, <disambiguation hierarchy>, add <default rule>.   
						<key distinguishers>
							- "Correction" requires the teacher to indicate something the student said is wrong
							- "Suggestion" requires the teacher to indicate a clear, actionable next step
							- "Concern" requires explicit teacher's explanation of WHY something is problematic
							- "Value" requires recognition of a specific skill or strategy (not just "good job")
						</key distinguishers>		
						<disambiguation hierarchy>			
							When multiple [options] seem possible, apply these rules in order:
								1. Explicit judgment of correctness → 100-series  
								2. Adds new info/explanation → 200-series  
								3. Probes reasoning, no judgment → 230  
								4. Identifies reasoning problem → 410  
								5. Suggestion for improvement → 420  
								6. Concern + Suggestion together → 430  
								7. Metacognition/transfer beyond task → 500-series 
						</disambiguation hierarchy>	
						<default rule>  
							If ambiguous between correction and probing, choose 230.
						<default rule>  		
					`,
		options: options
		};

	