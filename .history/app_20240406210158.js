import { GoogleGenerativeAI } from "@google/generative-ai";


const API_KEY = "AIzaSyDBtZZsASIYVyQiLgik32sfZeJjd2X8IPQ";


const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });


const user_input = document.getElementById("user_input");
const answer_area = document.getElementById("answer");
const send_button = document.getElementById("Send");

user_input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        send_button.click();
    }
});

send_button.addEventListener("click", async () => {
    const question = user_input.value;
    const answer = await generateText(question + "give me a ayurvedic remidy, the answer should be short and specific behave like a chatbot dont format your answers just give simple text answers.");
    console.log(answer);
    const filtered_answer = answer.replace(/\*/g, '');
    console.log(filtered_answer);
    answer_area.textContent = filtered_answer;
});

async function generateText(prompt) {
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
}



      