import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
const API_KEY = "AIzaSyDBtZZsASIYVyQiLgik32sfZeJjd2X8IPQ";


const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });
let prompt = "I have cold and flu, give me ayurvedic medicine for it.";
const result = await model.generateContent(prompt);
const response = await result.response;
const text = await response.text();
console.log(text);

      