
let coins = 1000;
let squad = [];
const players = [
    { name: "Lionel Messi", cost: 300 },
    { name: "Erling Haaland", cost: 350 },
    { name: "Kylian Mbappe", cost: 400 },
    { name: "Cristiano Ronaldo", cost: 280 },
    { name: "Vinicius Jr.", cost: 320 }
];

function updateCoins() {
    document.getElementById('coin-count').innerText = coins;
}

function renderMarket() {
    const marketList = document.getElementById('market-list');
    marketList.innerHTML = '';
    players.forEach((p, index) => {
        const li = document.createElement('li');
        li.textContent = `${p.name} - ${p.cost} koin`;
        const btn = document.createElement('button');
        btn.textContent = "Beli";
        btn.onclick = () => buyPlayer(index);
        li.appendChild(btn);
        marketList.appendChild(li);
    });
}

function renderSquad() {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = '';
    squad.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.name;
        teamList.appendChild(li);
    });
}

function buyPlayer(index) {
    const player = players[index];
    if (coins >= player.cost) {
        coins -= player.cost;
        squad.push(player);
        updateCoins();
        renderSquad();
    } else {
        alert("Koin tidak cukup!");
    }
}

function simulateMatch() {
    if (squad.length < 3) {
        document.getElementById('result').innerText = "Butuh minimal 3 pemain untuk main UCL!";
        return;
    }
    const outcome = ["Menang besar!", "Kalah tipis...", "Imbang 1-1", "Menang dramatis!"];
    const result = outcome[Math.floor(Math.random() * outcome.length)];
    document.getElementById('result').innerText = `Hasil pertandingan UCL: ${result}`;
}

window.onload = () => {
    updateCoins();
    renderMarket();
    renderSquad();
};
