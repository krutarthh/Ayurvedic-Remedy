import { GoogleGenerativeAI } from "@google/generative-ai";

// api call to get the model
const API_KEY = "AIzaSyDBtZZsASIYVyQiLgik32sfZeJjd2X8IPQ";


const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// fetchign the elements
const user_input = document.getElementById("user_input");
const answer_area = document.getElementById("answer");
const send_button = document.getElementById("Send");
// redirect from enter action to the clicking the button.
user_input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        send_button.click();
    }
});

// on click event to get the answer from the model
send_button.addEventListener("click", async () => {
    const question = user_input.value;
    const answer = await generateText(question + "give me a ayurvedic remedy, the answer should be short and specific, behave like a chatbot. if your response has a product i can buy give me the name and url to buy.");

    const filtered_answer = answer.replace(/\*/g, '');
    const typingSpeed = 28;
    const answerText = filtered_answer;
    let index = 0;
    function typeAnswer() {
        if (index < answerText.length) {
            answer_area.textContent += answerText.charAt(index);
            index++;
            setTimeout(typeAnswer, typingSpeed);
        }
    }

    typeAnswer(); 
});

// function to get the answer from the model
async function generateText(prompt) {
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
}



      