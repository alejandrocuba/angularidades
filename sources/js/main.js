const container = document.querySelector('main');
const particleCount = 110;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');

    const size = Math.random() * 8 + 2; // particles between 2px and 8px
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 7 + 8;
    const xMove = Math.random() * 100 - 50;
    const yMove = Math.random() * 100 - 50;
    const opacityStart = (Math.random() * 0.5 + 0.5).toFixed(2);
    const opacityMid = (Math.random() * 0.3 + 0.7).toFixed(2);
    const opacityHigh = (Math.random() * 0.2 + 0.8).toFixed(2);
    const initialBlur = `${(size / 6).toFixed(1)}px`;

    particle.classList.add('particle');
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${yPos}%`;
    particle.style.left = `${xPos}%`;
    particle.style.setProperty('--duration', `${duration}s`);
    particle.style.setProperty('--x-move', xMove);
    particle.style.setProperty('--y-move', yMove);
    particle.style.setProperty('--opacity-start', opacityStart);
    particle.style.setProperty('--opacity-mid', opacityMid);
    particle.style.setProperty('--opacity-high', opacityHigh);
    particle.style.setProperty('--initial-blur', initialBlur);
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);
}
