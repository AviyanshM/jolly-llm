import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function getArguments(casePrompt) {
  const response = await openai.createChatCompletion({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: "You're a legal expert simulating both sides of a courtroom case." },
      { role: "user", content: casePrompt },
    ],
  });
  return response.data.choices[0].message.content;
}
