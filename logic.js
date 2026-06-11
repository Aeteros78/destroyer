// --- БАЗА ДАННЫХ МОНСТРОВ ---
// (Предполагается, что массив monsterDatabase загружен из data.js)

// --- СОСТОЯНИЕ ИГРЫ ---
let player = {}; 
let currentBattleMonster = null;
let arenaWave = 1;
let arenaPlayerHp = 0;
const maxArenaWaves = 15;

// --- СИСТЕМА СОХРАНЕНИЯ ---
function saveGame() {
    localStorage.setItem('rpg_player_save', JSON.stringify(player));
}

function loadGame() {
    const saved = localStorage.getItem('rpg_player_save');
    if (saved) {
        player = JSON.parse(saved);
    } else {
        player = { ...initialPlayerState };
    }
}

function resetGame() {
    if (confirm("Вы уверены, что хотите удалить ВЕСЬ прогресс?")) {
        localStorage.removeItem('rpg_player_save');
        location.reload();
    }
}

// --- ЛОГИКА БОЯ (ГЛАВНЫЙ РЕЖИМ) ---

function startBattle() {
    if (player.monsterIndex >= monsterDatabase.length) {
        player.isTitanBattle = true;
    }

    if (player.isTitanBattle) {
        prepareTitanBattle();
    } else {
        const monsterData = monsterDatabase[player.monsterIndex];
        currentBattleMonster = { ...monsterData, currentHp: monsterData.hp };
        player.currentHp = player.hp;
        showScreen('screen-battle');
        updateBattleUI();
    }
}

function prepareTitanBattle() {
    const lvl = player.titanLevel;
    const tHp = 80000 + (lvl - 1) * 7000;
    currentBattleMonster = {
        name: `Бессмертный Титан (Ур. ${lvl})`,
        str: 6500 + (lvl - 1) * 600,
        hp: tHp,
        arm: 7500 + (lvl - 1) * 300,
        chapter: 999,
        currentHp: tHp
    };
    player.currentHp = player.hp;
    showScreen('screen-battle');
    updateBattleUI();
}

function performAttack() {
    let pDamage = Math.max(10, player.str - currentBattleMonster.arm);
    if (currentBattleMonster.name.includes("Дракон")) pDamage = 8893;

    currentBattleMonster.currentHp -= pDamage;

    if (currentBattleMonster.currentHp > 0) {
        let mDamage = Math.max(5, currentBattleMonster.str - player.arm);
        if (currentBattleMonster.name.includes("Дракон")) mDamage = 2303;
        player.currentHp -= mDamage;
    }

    updateBattleUI();

    if (player.currentHp <= 0) endBattle(false);
    else if (currentBattleMonster.currentHp <= 0) endBattle(true);
}

function endBattle(isVictory) {
    if (isVictory) {
        if (player.isTitanBattle) {
            player.titanLevel++;
            player.str += 500;
            player.mythril += 1;
            alert(`Титан повержен! Уровень: ${player.titanLevel}`);
            prepareTitanBattle();
        } else {
            const m = currentBattleMonster;
            let goldEarned = m.chapter >= 13 ? 100 : (1 + Math.floor(player.monsterIndex * 0.5));
            let expEarned = calculateExp(player.monsterIndex);
            let mythrilEarned = m.chapter >= 13 ? 1 : 0;

            player.gold += goldEarned;
            player.exp += expEarned;
            player.mythril += mythrilEarned;
            player.monsterIndex++;

            showVictoryPopup(goldEarned, expEarned, mythrilEarned);
            saveGame();
        }
    } else {
        showDefeatPopup();
    }
}

function calculateExp(index) {
    const seq = [100, 500, 1000, 2000, 4000];
    return seq[index] || (4000 * Math.pow(2, index - 4));
}

// --- ЛОГИКА АРЕНЫ ---

function startArena() {
    arenaWave = 1;
    player.isArenaMode = true;
    // Здоровье устанавливается ОДИН раз при входе на арену
    arenaPlayerHp = player.hp; 
    startNextArenaWave();
}

function startNextArenaWave() {
    if (arenaWave > maxArenaWaves) {
        player.gold += 1000;
        player.exp += 5000;
        alert("Арена завершена! Вы получили 1000 золота и 5000 опыта!");
        player.isArenaMode = false;
        saveGame();
        showScreen('screen-main');
        updateUI();
        return;
    }

    let availableMonsters = monsterDatabase.slice(0, Math.max(1, player.monsterIndex));
    const baseMonster = availableMonsters[Math.floor(Math.random() * availableMonsters.length)];
    const diff = 1 + (arenaWave * 0.2);

    currentBattleMonster = {
        name: baseMonster.name + (arenaWave % 5 === 0 ? " (БОСС)" : ""),
        str: Math.floor(baseMonster.str * diff),
        hp: Math.floor(baseMonster.hp * diff),
        arm: Math.floor(baseMonster.arm * diff),
        currentHp: Math.floor(baseMonster.hp * diff),
        isBoss: (arenaWave % 5 === 0)
    };

    document.getElementById('arena-wave-text').innerText = `Волна: ${arenaWave}/15`;
    showScreen('screen-arena');
    updateArenaUI();
}

function arenaAttack() {
    let pDamage = Math.max(10, player.str - currentBattleMonster.arm);
    currentBattleMonster.currentHp -= pDamage;

    if (currentBattleMonster.currentHp > 0) {
        let mDamage = Math.max(5, currentBattleMonster.str - player.arm);
        arenaPlayerHp -= mDamage;
    }

    updateArenaUI();

    if (arenaPlayerHp <= 0) {
        alert("Вы пали на Арене!");
        player.isArenaMode = false;
        showScreen('screen-main');
        saveGame();
    } else if (currentBattleMonster.currentHp <= 0) {
        handleArenaVictory();
    }
}

// Функция 10 ударов
function arenaFastAttack() {
    for (let i = 0; i < 10; i++) {
        let pDamage = Math.max(10, player.str - currentBattleMonster.arm);
        currentBattleMonster.currentHp -= pDamage;

        if (currentBattleMonster.currentHp > 0) {
            let mDamage = Math.max(5, currentBattleMonster.str - player.arm);
            arenaPlayerHp -= mDamage;
        }
        if (arenaPlayerHp <= 0 || currentBattleMonster.currentHp <= 0) break;
    }

    updateArenaUI();

    if (arenaPlayerHp <= 0) {
        alert("Вы пали на Арене!");
        player.isArenaMode = false;
        showScreen('screen-main');
        saveGame();
    } else if (currentBattleMonster.currentHp <= 0) {
        handleArenaVictory();
    }
}

function handleArenaVictory() {
    let silverBase = currentBattleMonster.isBoss ? 100 : 50;
    let expBase = currentBattleMonster.isBoss ? 100 : 50;
    
    let silverEarned = Math.floor(silverBase * (1 + (arenaWave * 0.1)));
    let expEarned = Math.floor(expBase * (1 + (arenaWave * 0.1)));

    player.silver += silverEarned;
    player.exp += expEarned;
    arenaWave++;
    saveGame();
    startNextArenaWave();
}

function exitArena() {
    // Вызываем игровой попап вместо системного confirm
    const pop = document.getElementById('pop-exit');
    pop.style.display = 'flex';
}

// Функция, вызываемая из попапа "Выход"
function confirmArenaExit() {
    player.isArenaMode = false;
    showScreen('screen-main');
    saveGame();
    closePopup();
}

// --- ПРОЧЕЕ ---
function train() {
    player.str += 15; player.hp += 30; player.maxHp += 30; player.arm += 15;
    updateUI(); saveGame();
}

function claimDefeatReward() {
    player.exp += calculateExp(player.monsterIndex);
    player.currentHp = player.hp;
    showScreen('screen-main');
    saveGame();
    updateUI();
}