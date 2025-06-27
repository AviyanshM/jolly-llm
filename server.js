import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-70b-8192",

        messages: [
          {
            role: "system",
            content:
              "You are a legal expert simulating both sides of a courtroom case. Provide separate arguments for the prosecution and the defense."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ output: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Groq error:", error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data?.error?.message || "Unknown error"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
