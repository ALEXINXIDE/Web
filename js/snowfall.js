const snowfall = document.querySelector('.snowfall');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowfall.appendChild(snowflake);

    // Position the snowflake randomly
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Random duration between 5s and 8s

    // Remove snowflake after animation ends
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Create snowflakes at intervals
setInterval(createSnowflake, 300);
