document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.28),
        rgba(255,255,255,.08) 70%)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.background = "rgba(255,255,255,.09)";
    });
});
