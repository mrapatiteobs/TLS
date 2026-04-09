// Keeping the same sophisticated tilt logic from the previous rewrite.
// It feels high-tech but subtle, matching the soft-futurism aesthetic.

document.querySelectorAll('.hub-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Subtle tilt effect (increase denominator for subtler tilt)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15; // Denominator 15 for soft tilt
        const rotateY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
    });
});
