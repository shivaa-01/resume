
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let letters = "01".split("");
let fontSize = 10;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#003300";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);

// Typing effect for ">>> SHIVAA PRESENTS <<<" with perfect pacing
const fullText = ">>> SHIVAA   PRESENTS <<<";
let idx = 0;

function typeFullText() {
  const target = document.getElementById("presenter");
  if (idx < fullText.length) {
    const span = document.createElement("span");
    span.textContent = fullText.charAt(idx);
    span.style.color = "#00ffee";
    span.style.fontWeight = "bold";
    target.appendChild(span);
    const sound = document.getElementById("typingAudio");
    if (sound && fullText[idx] !== " ") sound.play();

    // Adjust timing: faster for symbols, slower for words
    let delay = 180;
    if (fullText[idx] === " " || fullText[idx] === ">") delay = 100;
    if (fullText[idx] === "<") delay = 100;
    if (fullText[idx] === "L" || fullText[idx] === "P") delay = 260;

    idx++;
    setTimeout(typeFullText, delay);
  } else {
    target.innerHTML += "<span class='cursor'>|</span>";
  }
}
typeFullText();
