import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
const API_KEY = "AIzaSyDBtZZsASIYVyQiLgik32sfZeJjd2X8IPQ";


const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });



user_input.addEventListener("keyup", async (event) => {
    if (event.key === "Enter") {
        const question = user_input.value;
        const answer = await generateText(question);
        answer_area.textContent = answer;
    }
});
async function generateText(prompt) {
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
}



      