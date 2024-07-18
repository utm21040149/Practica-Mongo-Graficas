const ratings = {};

function guardarCalificacion() {
    const selectedGame = document.getElementById('gameSelect').value;
    const rating = parseInt(document.getElementById('ratingInput').value);

    if (isNaN(rating) || rating < 1 || rating > 5) {
        alert('Ingresa una calificación válida (entre 1 y 5).');
        return;
    }

    ratings[selectedGame] = rating;
    document.getElementById('currentRating').textContent = rating;
}



const canvas = document.getElementById('scoreChart');
const ctx = canvas.getContext('2d');

const scores = [8, 6, 9, 7, 5];
function drawChart() {
    const barWidth = 40;
    const barSpacing = 20;
    const startX = 20;
    const baseY = canvas.height - 20;

    ctx.fillStyle = 'blue';

    for (let i = 0; i < scores.length; i++) {
        const x = startX + i * (barWidth + barSpacing);
        const height = scores[i] * 20; 
        ctx.fillRect(x, baseY - height, barWidth, height);
    }
}

drawChart();


