document.addEventListener("DOMContentLoaded", main);

function main() {
    const input = document.getElementById('input-name');
    const addBtn = document.getElementById('add-btn');
    const listItem = document.getElementById('name-list');

    addBtn.addEventListener('click', function () {
        if (input.value) {
            const li = document.createElement('li');

            const randomColor = getRandomColor();
            li.style.color = randomColor;
            li.style.backgroundColor = lightenColor(randomColor, 40);

            li.innerText = input.value;
            li.addEventListener('click', function () {
            li.remove();
            });

            listItem.appendChild(li);
            input.value = '';
        }
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function lightenColor(color, percent) {
    let num = parseInt(color.slice(1), 16),
        amt = Math.round(2.55 * percent),
        r = (num >> 16) + amt,
        g = (num >> 8 & 0x00FF) + amt,
        b = (num & 0x0000FF) + amt;
    return `rgb(${Math.min(r, 255)}, ${Math.min(g, 255)}, ${Math.min(b, 255)})`;
}
