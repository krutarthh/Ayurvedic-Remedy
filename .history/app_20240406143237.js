import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
const API_KEY = "AIzaSyDBtZZsASIYVyQiLgik32sfZeJjd2X8IPQ";


const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });


user_input=document.getElementById("user_input");
answer_area=document.getElementById("answer");

async function generateText(prompt) {
    ;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
}



      