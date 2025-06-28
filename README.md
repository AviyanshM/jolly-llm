# ⚖️ Jolly LLM - Retro Legal Argument Simulator

**Jolly LLM** is a retro-styled AI courtroom simulator that generates both Prosecution and Defense arguments for any real-world legal or ethical prompt.

Built in 24 hours at the **Pixel Palettes Hackathon** by team **Prison Breakers**, the app blends pixel aesthetics, fast LLMs, and theatrical court logic into a one-of-a-kind experience.

---

## 🎮 Live Demo

🟢 **Frontend** (Netlify):  
👉 [https://jolly-llm-pixel.netlify.app](https://jolly-llm-pixel.netlify.app)

🟢 **Backend API** (Render):  
👉 [https://jolly-llm.onrender.com/api/generate](https://jolly-llm.onrender.com/api/generate)

🔧 **GitHub Repo**:  
👉 [https://github.com/EmperorsReign05/jolly-llm](https://github.com/EmperorsReign05/jolly-llm)

---

## 🧠 How It Works

1. User enters a case-like prompt (e.g., "A student was caught cheating in an entrance exam").
2. The system sends it to an LLM (via Groq API using LLaMA 3).
3. The backend returns detailed arguments for both:
   - 🟥 **Prosecution**
   - 🟩 **Defense**
4. Text is animated in retro typewriter style, with glowing pixel borders and terminal UI.

---

## 💡 Use Cases

- 🧑‍🎓 Law & ethics education
- 🧠 Debate prep
- ⚖️ Thought experiments
- 🎮 Fun & theatrical roleplay with AI

---

## 🛠 Tech Stack

- **Frontend**: Vite, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **LLM**: Groq API (LLaMA 3)
- **Deployment**: Netlify (frontend), Render (backend)
- **Styling**: Press Start 2P font, pixel court visuals, typewriter effects

---

## 📦 Local Development

```bash
# Clone the repo
git clone https://github.com/EmperorsReign05/jolly-llm
cd jolly-llm

# Install backend deps
npm install

# Run backend
node server.js

# In another terminal, run frontend
npm run dev
