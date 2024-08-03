
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('fireworks-container');

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        const size = Math.random() * 10 + 5;
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.backgroundColor = getRandomColor();
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function launchFireworks() {
        setInterval(createFirework, 200);
    }

    launchFireworks();
});