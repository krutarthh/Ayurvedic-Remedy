import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(AIzaSyDBtZZsASIYVyQiLgik32sfZeJjd2X8IPQ);

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);
}

run();