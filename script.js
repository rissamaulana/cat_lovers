function startClock() {
    setInterval(() => {
        const now = new Date();
        document.getElementById("clock").innerHTML =
            "⏰ " + now.toLocaleTimeString();
    }, 1000);
}

function toggleDesc(card) {
    const desc = card.querySelector(".desc");
    desc.style.display = desc.style.display === "block" ? "none" : "block";
}

/* Animasi CTA Button */
window.addEventListener("load", () => {
    const buttons = document.querySelectorAll(".cta-btn");
    buttons.forEach((btn, i) => {
        btn.style.opacity = 0;
        btn.style.transform = "translateY(20px)";
        setTimeout(() => {
            btn.style.transition = "all 0.6s ease";
            btn.style.opacity = 1;
            btn.style.transform = "translateY(0)";
        }, 300 + i * 200);
    });
});
