// --- СОСТОЯНИЕ ИГРЫ ---
const player = {
    str: 1,
    hp: 1,
    arm: 1,
    gold: 100,
    silver: 50,
    diamond: 5
};

// --- ФУНКЦИИ УПРАВЛЕНИЯ ЭКРАНОМ ---

/**
 * Переключает видимость экранов
 * @param {string} screenId - ID элемента, который нужно показать
 */
function showScreen(screenId) {
    // Находим все элементы с классом 'screen'
    const screens = document.querySelectorAll('.screen');
    
    // Скрываем их все
    screens.forEach(s => s.classList.remove('active'));

    // Показываем нужный
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// --- ФУНКЦИИ ИГРОВОЙ ЛОГИКИ ---

/**
 * Обновляет все текстовые значения в HTML, основываясь на объекте player
 */
function updateUI() {
    // Параметры героя
    document.getElementById('val-str').innerText = player.str;
    document.getElementById('val-hp').innerText = player.hp;
    document.getElementById('val-arm').innerText = player.arm;

    // Валюта
    document.getElementById('val-gold').innerText = player.gold;
    document.getElementById('val-silver').innerText = player.silver;
    document.getElementById('val-diamond').innerText = player.diamond;
}

/**
 * Логика тренировки персонажа
 */
function train() {
    player.str += 1;
    player.hp += 2;
    player.arm += 1;
    
    updateUI();
    alert("Вы потренировались! Параметры повышены.");
}

// --- ЗАПУСК ---

// Вызываем обновление интерфейса сразу при загрузке страницы
updateUI();