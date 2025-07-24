function showHearts() {
  const container = document.getElementById("heart-container");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}
