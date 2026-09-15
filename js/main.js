// ===== NAVBAR SCROLL STATE =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.pageYOffset > 80);
});

// ===== BUTTON RIPPLE EFFECT =====
document.querySelectorAll('.btn-book-wash, .btn-book-nav').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(rippleStyle);

// ===== CONTACT ICONS HOVER =====
document.querySelectorAll('.contact-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function () { this.style.transform = 'translateY(-3px) scale(1.1)'; });
    icon.addEventListener('mouseleave', function () { this.style.transform = 'translateY(0) scale(1)'; });
});

// ===== HIGHLIGHT TODAY IN HOURS TABLE =====
document.addEventListener('DOMContentLoaded', () => {
    const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = dayNames[new Date().getDay()];
    const row = document.querySelector(`.hours-row[data-day="${today}"]`);
    if (row) row.classList.add('today');
});
