import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
      const API_KEY = "AIzaSyDBtZZsASIYVyQiLgik32sfZeJjd2X8IPQ";

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY);

      // ...

      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const prompt = "Write a story about a magic backpack.";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);