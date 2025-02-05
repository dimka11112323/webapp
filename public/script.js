// Функція для отримання даних з Binance API
async function getBinanceData(symbol) {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    const data = await response.json();
    return data.price;
}

// Функція для оновлення цін на сторінці
async function updatePrices() {
    const bnbPrice = await getBinanceData("BNBBUSD"); // Замініть на потрібну пару
    document.getElementById("bnb-price").textContent = bnbPrice;

    const btcPrice = await getBinanceData("BTCBUSD"); // Замініть на потрібну пару
    document.getElementById("btc-price").textContent = btcPrice;

    // Оновіть ціни для інших криптовалют тут
}

// Оновлюємо ціни кожні 2 секунди
setInterval(updatePrices, 2000);

// Оновлюємо ціни при завантаженні сторінки
updatePrices();
