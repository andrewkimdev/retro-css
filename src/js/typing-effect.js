function runTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  const text = typingElement.innerText;
  const typingDelay = 100;

  typingElement.innerText = '';
  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingEl, delay) {
  setTimeout(() => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingEl.textContent += text.charAt(i);
      }, delay * i);
    }}, 800);
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
