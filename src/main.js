console.log("main.js loaded");

const generateBtn = document.getElementById("generateBtn");
const inputBox = document.getElementById("inputBox"); // make sure input has id="inputBox"
const prosecutionBox = document.getElementById("prosecution-output");
const defenseBox = document.getElementById("defense-output");

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

  // show placeholders while loading
  prosecutionBox.innerHTML = `<div style="color: #999;">🧠 Generating Prosecution...</div>`;
  defenseBox.innerHTML = `<div style="color: #999;">🧠 Generating Defense...</div>`;

  try {
    const response = await fetch("https://jolly-llm.onrender.com/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    const output = data.output;

    // extract arguments using markdown-style markers
    const prosecutionMatch = output.match(/\*\*Prosecution'?s Argument\*\*([\s\S]*?)\*\*Defense'?s Argument\*\*/i);
    const defenseMatch = output.match(/\*\*Defense'?s Argument\*\*([\s\S]*)/i);

    const prosecutionText = prosecutionMatch ? prosecutionMatch[1].trim() : "Prosecution argument not found.";
    const defenseText = defenseMatch ? defenseMatch[1].trim() : "Defense argument not found.";

    typeOut(prosecutionText, prosecutionBox);
    typeOut(defenseText, defenseBox);
  } catch (err) {
    prosecutionBox.innerHTML = `<div style="color: red;">⚠️ Error: ${err.message}</div>`;
    defenseBox.innerHTML = "";
    console.error("Fetch error:", err);
  }
});
