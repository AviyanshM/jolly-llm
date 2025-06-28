console.log("main.js loaded");

const inputBox = document.getElementById("inputBox");
const generateBtn = document.getElementById("generateBtn");
const outputArea = document.getElementById("output");

function typeOut(text, element) {
  element.innerText = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 10);
}

generateBtn.addEventListener("click", async () => {
  const prompt = inputBox.value.trim();
  if (!prompt) return;

  outputArea.innerHTML = `<div style="color: #999;">🧠 Generating arguments...</div>`;

  try {
    const response = await fetch("https://jolly-llm.onrender.com/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    let cleanedOutput = data.output
      .replace(/\*\*Prosecution'?s Argument\*\*/gi, "🟥 Prosecution:")
      .replace(/\*\*Defense'?s Argument\*\*/gi, "🟩 Defense:")
      .replace(/\*\*Verdict\*\*/gi, "⚖️ Verdict:");

    typeOut(cleanedOutput.trim(), outputArea);
  } catch (err) {
    outputArea.innerHTML = `<div style="color: red;">⚠️ Error: ${err.message}</div>`;
    console.error("Fetch error:", err);
  }
});
