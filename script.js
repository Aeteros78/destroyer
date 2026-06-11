// --- БАЗА ДАННЫХ МОНСТРОВ ---
const monsterDatabase = [
    { name: "Лесной волк", str: 15, hp: 100, arm: 25, chapter: 1 },
    { name: "Степной волк", str: 22, hp: 220, arm: 45, chapter: 1 },
    { name: "Горный волк", str: 50, hp: 300, arm: 50, chapter: 1 },
    { name: "Оборотень", str: 60, hp: 500, arm: 80, chapter: 1 },
    { name: "Орк", str: 90, hp: 800, arm: 125, chapter: 2 },
    { name: "Орк рубака", str: 105, hp: 1100, arm: 150, chapter: 2 },
    { name: "Вождь орков", str: 120, hp: 1300, arm: 175, chapter: 2 },
    { name: "Горный тролль", str: 140, hp: 1500, arm: 195, chapter: 2 },
    { name: "Разлагающийся зомби", str: 190, hp: 1800, arm: 240, chapter: 3 },
    { name: "Ядовитый зомби", str: 240, hp: 2200, arm: 315, chapter: 3 },
    { name: "Зомби драугр", str: 300, hp: 2350, arm: 370, chapter: 3 },
    { name: "Вампир", str: 320, hp: 2500, arm: 400, chapter: 3 },
    { name: "Злобная гончая", str: 360, hp: 3500, arm: 490, chapter: 4 },
    { name: "Гончая пламени", str: 380, hp: 4000, arm: 550, chapter: 4 },
    { name: "Адская гончая", str: 400, hp: 5000, arm: 600, chapter: 4 },
    { name: "Цербер", str: 450, hp: 5500, arm: 600, chapter: 4 },
    { name: "Большая кобра", str: 550, hp: 5800, arm: 720, chapter: 5 },
    { name: "Песочный змей", str: 550, hp: 6000, arm: 780, chapter: 5 },
    { name: "Морской змей", str: 600, hp: 6500, arm: 850, chapter: 5 },
    { name: "Медуза Горгона", str: 630, hp: 7200, arm: 900, chapter: 5 },
    { name: "Скелет воина", str: 700, hp: 7500, arm: 1000, chapter: 6 },
    { name: "Скелет командир", str: 760, hp: 8000, arm: 1070, chapter: 6 },
    { name: "Король скелетов", str: 830, hp: 8500, arm: 1150, chapter: 6 },
    { name: "Некромант", str: 880, hp: 9000, arm: 1220, chapter: 6 },
    { name: "Глиняный голем", str: 930, hp: 10000, arm: 1300, chapter: 7 },
    { name: "Каменный голем", str: 1020, hp: 10000, arm: 1380, chapter: 7 },
    { name: "Гигантский голем", str: 1030, hp: 11000, arm: 1450, chapter: 7 },
    { name: "Циклоп", str: 1100, hp: 11500, arm: 1500, chapter: 7 },
    { name: "Огромная саламандра", str: 1450, hp: 10000, arm: 1700, chapter: 8 },
    { name: "Ядовитая саламандра", str: 1480, hp: 11000, arm: 1800, chapter: 8 },
    { name: "Огненная саламандра", str: 1500, hp: 12000, arm: 1900, chapter: 8 },
    { name: "Гидра", str: 1500, hp: 13500, arm: 2000, chapter: 8 },
    { name: "Злобоглаз", str: 1550, hp: 15000, arm: 2100, chapter: 9 },
    { name: "Злое око", str: 1700, hp: 16000, arm: 2200, chapter: 9 },
    { name: "Ужас из глубин", str: 1700, hp: 17000, arm: 2300, chapter: 9 },
    { name: "Ночной кошмар", str: 1700, hp: 18000, arm: 2400, chapter: 9 },
    { name: "Призрак", str: 2000, hp: 16000, arm: 2500, chapter: 10 },
    { name: "Приведение", str: 2100, hp: 17000, arm: 2650, chapter: 10 },
    { name: "Злой дух", str: 2100, hp: 18000, arm: 2700, chapter: 10 },
    { name: "Ифрит", str: 2100, hp: 20000, arm: 2750, chapter: 10 },
    { name: "Минотавр командир", str: 2150, hp: 20000, arm: 2900, chapter: 11 },
    { name: "Элитный минотавр", str: 2300, hp: 21000, arm: 3000, chapter: 11 },
    { name: "Король минотавров", str: 2300, hp: 22000, arm: 3100, chapter: 11 },
    { name: "Древняя мантикора", str: 2380, hp: 22500, arm: 3200, chapter: 11 },
    { name: "Василиск", str: 2400, hp: 23000, arm: 3300, chapter: 12 },
    { name: "Большой Василиск", str: 2450, hp: 23500, arm: 3350, chapter: 12 },
    { name: "Древний василиск", str: 2500, hp: 24000, arm: 3400, chapter: 12 },
    { name: "Виверна", str: 2550, hp: 30000, arm: 3600, chapter: 12 },
    { name: "Элементаль огня", str: 2650, hp: 31000, arm: 3850, chapter: 13 },
    { name: "Элементаль лавы", str: 2700, hp: 31500, arm: 3900, chapter: 13 },
    { name: "Элементаль магмы", str: 2750, hp: 32000, arm: 4000, chapter: 13 },
    { name: "Феникс", str: 2800, hp: 33000, arm: 4050, chapter: 13 },
    { name: "Инфернал", str: 2850, hp: 36000, arm: 4150, chapter: 14 },
    { name: "Большой Инфернал", str: 2950, hp: 37000, arm: 4250, chapter: 14 },
    { name: "Древний инфернал", str: 2975, hp: 38500, arm: 4300, chapter: 14 },
    { name: "Владыка бездны", str: 3000, hp: 40000, arm: 4400, chapter: 14 },
    { name: "Великан", str: 3100, hp: 41000, arm: 4500, chapter: 15 },
    { name: "Великан солдат", str: 3120, hp: 42000, arm: 4550, chapter: 15 },
    { name: "Вождь великанов", str: 3140, hp: 44000, arm: 4600, chapter: 15 },
    { name: "Гигант", str: 3200, hp: 45000, arm: 4650, chapter: 15 },
    { name: "Костяной дракон", str: 3180, hp: 46000, arm: 4750, chapter: 16 },
    { name: "Дракон скелет", str: 3200, hp: 47000, arm: 4800, chapter: 16 },
    { name: "Мертвый дракон", str: 3240, hp: 48000, arm: 4800, chapter: 16 },
    { name: "Темный властелин", str: 3300, hp: 50000, arm: 5000, chapter: 16 },
    { name: "Слуга Бездны", str: 4000, hp: 45000, arm: 5300, chapter: 17 },
    { name: "Око Бездны", str: 4000, hp: 48000, arm: 5350, chapter: 17 },
    { name: "Дитя Бездны", str: 4050, hp: 50000, arm: 5400, chapter: 17 },
    { name: "Повелитель Бездны", str: 4100, hp: 55000, arm: 5450, chapter: 17 },
    { name: "Пожиратель", str: 4200, hp: 57000, arm: 5500, chapter: 18 },
    { name: "Уничтожитель", str: 4250, hp: 58000, arm: 5500, chapter: 18 },
    { name: "Джаггернаут", str: 4300, hp: 59000, arm: 5800, chapter: 18 },
    { name: "Древний ужас", str: 6000, hp: 90000, arm: 8000, chapter: 18 },
    { name: "Гиганты Ётунхейма", str: 4800, hp: 63000, arm: 6250, chapter: 19 },
    { name: "Ётунские воины", str: 5000, hp: 65000, arm: 6500, chapter: 19 },
    { name: "Ётуны Берсерки!", str: 5200, hp: 68000, arm: 6700, chapter: 19 },
    { name: "Фенрир", str: 5500, hp: 70000, arm: 7000, chapter: 19 },
    { name: "Огненные Великаны", str: 5800, hp: 73000, arm: 7200, chapter: 20 },
    { name: "Магма Великаны", str: 6000, hp: 75000, arm: 7400, chapter: 20 },
    { name: "Великан Сурт", str: 6200, hp: 78000, arm: 7500, chapter: 20 },
    { name: "Хель", str: 6400, hp: 80000, arm: 7500, chapter: 20 },
    { name: "Бессмертный Титан", str: 6500, hp: 80000, arm: 7500, chapter: 999 }
];

// --- СОСТОЯНИЕ ИГРЫ ---
let player = {
    name: "Герой",
    str: 1, hp: 1, maxHp: 1, arm: 1,
    gold: 0, silver: 0, diamond: 0,
    exp: 0, mythril: 0, bravery: 0,
    monsterIndex: 0,
    titanLevel: 1,
    isTitanBattle: false,
    currentHp: 1
};

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
        const parsed = JSON.parse(saved);
        player = { ...player, ...parsed };
    }
}

function resetGame() {
    if (confirm("Удалить весь прогресс?")) {
        localStorage.removeItem('rpg_player_save');
        location.reload();
    }
}

// --- ФУНКЦИИ ЭКРАНОВ ---
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function updateUI() {
    document.getElementById('val-str').innerText = player.str;
    document.getElementById('val-hp').innerText = Math.ceil(player.hp);
    document.getElementById('val-arm').innerText = player.arm;
    document.getElementById('val-gold').innerText = player.gold;
    document.getElementById('val-silver').innerText = player.silver;
    document.getElementById('val-diamond').innerText = player.diamond;
}

function train() {
    player.str += 15; player.hp += 30; player.maxHp += 30; player.arm += 15;
    updateUI(); saveGame();
}

// --- БОЙ (ГЛАВНЫЙ) ---
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
    currentBattleMonster = {
        name: `Бессмертный Титан (Ур. ${lvl})`,
        str: 6500 + (lvl - 1) * 600,
        hp: 80000 + (lvl - 1) * 7000,
        arm: 7500 + (lvl - 1) * 300,
        chapter: 999,
        currentHp: 80000 + (lvl - 1) * 7000
    };
    player.currentHp = player.hp;
    showScreen('screen-battle');
    updateBattleUI();
}

function updateBattleUI() {
    const m = currentBattleMonster;
    document.getElementById('battle-location').innerText = m.chapter === 999 ? "Бездна" : `Глава ${m.chapter}`;
    document.getElementById('battle-monster-name').innerText = m.name;
    document.getElementById('m-str').innerText = m.str;
    document.getElementById('m-hp').innerText = Math.ceil(m.currentHp);
    document.getElementById('m-arm').innerText = m.arm;
    document.getElementById('m-hp-fill').style.width = `${(m.currentHp / m.hp) * 100}%`;
    document.getElementById('h-str').innerText = player.str;
    document.getElementById('h-hp').innerText = Math.ceil(player.currentHp);
    document.getElementById('h-arm').innerText = player.arm;
    document.getElementById('h-hp-fill').style.width = `${(player.currentHp / player.maxHp) * 100}%`;
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
            alert(`Титан повержен! Он перерождается на уровень ${player.titanLevel}!`);
            prepareTitanBattle();
        } else {
            const m = currentBattleMonster;
            let goldEarned = m.chapter >= 13 ? 100 : (1 + Math.floor(player.monsterIndex * 0.5));
            let expEarned = calculateExp(player.monsterIndex);
            let mythrilEarned = m.chapter >= 13 ? 1 : 0;
            player.gold += goldEarned; player.exp += expEarned; player.mythril += mythrilEarned;
            player.monsterIndex++;
            document.getElementById('r-gold').innerText = goldEarned;
            document.getElementById('r-exp').innerText = expEarned;
            document.getElementById('r-mythril').innerText = mythrilEarned;
            showScreen('screen-victory');
            saveGame();
        }
    } else {
        showScreen('screen-defeat');
    }
}

function calculateExp(index) {
    const seq = [100, 500, 1000, 2000, 4000];
    return seq[index] || (4000 * Math.pow(2, index - 4));
}

// --- АРЕНА ---
function startArena() {
    arenaWave = 1;
    player.isArenaMode = true;
    startNextArenaWave();
}

function startNextArenaWave() {
    if (arenaWave > maxArenaWaves) {
        // Награда после 15 волн
        let bigGold = 500; // Пример награды
        let bigExp = 2000;
        player.gold += bigGold;
        player.exp += bigExp;
        alert(`Арена завершена! Вы получили ${bigGold} золота и ${bigExp} опыта!`);
        player.isArenaMode = false;
        saveGame();
        showScreen('screen-main');
        updateUI();
        return;
    }

    // ВАЖНО: Выбираем только из тех монстров, которых игрок УЖЕ прошел в боссах
    // Если monsterIndex = 5, значит доступны монстры с 0 по 4.
    let availableMonsters = monsterDatabase.slice(0, player.monsterIndex);
    
    // Если игрок еще ничего не прошел, даем ему первого лесного волка
    if (availableMonsters.length === 0) {
        availableMonsters = [monsterDatabase[0]];
    }

    const baseMonster = availableMonsters[Math.floor(Math.random() * availableMonsters.length)];
    const diff = 1 + (arenaWave * 0.2);

    currentBattleMonster = {
        name: baseMonster.name + (arenaWave % 5 === 0 ? " (БОСС АРЕНЫ)" : ""),
        str: Math.floor(baseMonster.str * diff),
        hp: Math.floor(baseMonster.hp * diff),
        arm: Math.floor(baseMonster.arm * diff),
        currentHp: Math.floor(baseMonster.hp * diff),
        isBoss: (arenaWave % 5 === 0)
    };

    arenaPlayerHp = player.hp;
    document.getElementById('arena-wave-text').innerText = `Волна: ${arenaWave}/15`;
    showScreen('screen-arena');
    updateArenaUI();
}

function updateArenaUI() {
    const m = currentBattleMonster;
    document.getElementById('arena-m-name').innerText = m.name;
    document.getElementById('arena-m-str').innerText = m.str;
    document.getElementById('arena-m-hp').innerText = Math.ceil(m.currentHp);
    document.getElementById('arena-m-arm').innerText = m.arm;
    document.getElementById('arena-m-hp-fill').style.width = `${(m.currentHp / m.hp) * 100}%`;
    document.getElementById('arena-h-str').innerText = player.str;
    document.getElementById('arena-h-hp').innerText = Math.ceil(arenaPlayerHp);
    document.getElementById('arena-h-arm').innerText = player.arm;
    document.getElementById('arena-h-hp-fill').style.width = `${(arenaPlayerHp / player.hp) * 100}%`;
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
        alert("Вы проиграли на Арене!");
        player.isArenaMode = false;
        showScreen('screen-main');
        saveGame();
    } else if (currentBattleMonster.currentHp <= 0) {
        // Награда за волну
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
}

function exitArena() {
    if (confirm("Выйти с арены?")) {
        player.isArenaMode = false;
        showScreen('screen-main');
    }
}

function claimDefeatReward() {
    player.exp += calculateExp(player.monsterIndex);
    player.currentHp = player.hp;
    showScreen('screen-main');
    saveGame();
    updateUI();
}

loadGame();
updateUI();