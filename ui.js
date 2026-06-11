// --- ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ---

function updateUI() {
    document.getElementById('val-str').innerText = player.str;
    document.getElementById('val-hp').innerText = Math.ceil(player.hp);
    document.getElementById('val-arm').innerText = player.arm;
    document.getElementById('val-gold').innerText = player.gold;
    document.getElementById('val-silver').innerText = player.silver;
    document.getElementById('val-diamond').innerText = player.diamond;
}

function updateBattleUI() {
    const m = currentBattleMonster;
    document.getElementById('battle-location').innerText = m.chapter === 999 ? "Бездна" : `Глава ${m.chapter}`;
    document.getElementById('battle-monster-name').innerText = m.name;
    document.getElementById('m-str').innerText = m.str;
    document.getElementById('m-hp').innerText = Math.ceil(m.currentHp);
    document.getElementById('m-arm').innerText = m.arm;
    document.getElementById('m-hp-fill').style.width = `${Math.max(0, (m.currentHp / m.hp) * 100)}%`;

    document.getElementById('h-str').innerText = player.str;
    document.getElementById('h-hp').innerText = Math.ceil(player.currentHp);
    document.getElementById('h-arm').innerText = player.arm;
    document.getElementById('h-hp-fill').style.width = `${Math.max(0, (player.currentHp / player.maxHp) * 100)}%`;
}

function updateArenaUI() {
    const m = currentBattleMonster;
    document.getElementById('arena-m-name').innerText = m.name;
    document.getElementById('arena-m-str').innerText = m.str;
    document.getElementById('arena-m-hp').innerText = Math.ceil(m.currentHp);
    document.getElementById('arena-m-arm').innerText = m.arm;
    document.getElementById('arena-m-hp-fill').style.width = `${Math.max(0, (m.currentHp / m.hp) * 100)}%`;

    document.getElementById('arena-h-str').innerText = player.str;
    document.getElementById('arena-h-hp').innerText = Math.ceil(arenaPlayerHp);
    document.getElementById('arena-h-arm').innerText = player.arm;
    document.getElementById('arena-h-hp-fill').style.width = `${Math.max(0, (arenaPlayerHp / player.hp) * 100)}%`;
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
}

// --- УПРАВЛЕНИЕ ПОПАПАМИ ---

function showVictoryPopup(gold, exp, mythril) {
    showScreen('screen-main');
    document.getElementById('r-gold').innerText = gold;
    document.getElementById('r-exp').innerText = exp;
    
    const pop = document.getElementById('pop-victory');
    pop.style.display = 'flex';
}

function showDefeatPopup() {
    showScreen('screen-main');
    const pop = document.getElementById('pop-defeat');
    pop.style.display = 'flex';
}

function closePopup() {
    document.getElementById('pop-victory').style.display = 'none';
    document.getElementById('pop-defeat').style.display = 'none';
    document.getElementById('pop-exit').style.display = 'none';
    updateUI();
}

// --- ИНИЦИАЛИЗАЦИЯ ---
window.onload = () => {
    loadGame();
    updateUI();
};