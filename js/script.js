window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function scrollToProj() {
  document.getElementById("projetos").scrollIntoView({
    behavior: "smooth"
  });
}

function abrirProjeto(nome) {
  const links = {
    barbearia: "projetos/yagorsbarber/index.html",
    loja: "projetos/loja/index.html",
    lancheria: "projetos/lancheria/index.html"
  };

  window.open(links[nome], "_blank");
}

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffcc";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

const reveals = document.querySelectorAll(".reveal");

function mostrarScroll() {
  const alturaTela = window.innerHeight;

  reveals.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", mostrarScroll);

// RESPONSIVO
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelectorAll(".card").forEach(card => {
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
});