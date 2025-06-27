console.log("main.js loaded");

const generateBtn = document.getElementById("generateBtn");
const inputBox = document.getElementById("inputPrompt");
const outputArea = document.getElementById("output");
const typeOut = (text, element) => {
  element.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 10); 
};

generateBtn.addEventListener("click", async () => {
  const prompt = inputBox.value.trim();
  if (!prompt) return;

  outputArea.innerHTML = `<div style="color: #999;">🧠 Generating arguments...</div>`;

  try {
    const response = await fetch("https://jolly-llm.onrender.com/api/generate", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    // 🟨 Typewriter effect replaces direct innerText assignment
    typeOut(data.output, outputArea);
  } catch (err) {
    outputArea.innerHTML = `<div style="color: red;">⚠️ Error: ${err.message}</div>`;
    console.error(err);
  }
});

