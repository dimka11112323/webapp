// Функція для отримання даних з API Binance
async function getBinanceData(symbol) {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    const data = await response.json();
    return data.price;
}

// Функція для оновлення цін на сторінці
async function updatePrices() {
    const btcPrice = await getBinanceData("BTCBUSD");
    document.getElementById("btc-price").textContent = "$" + btcPrice;

    const ethPrice = await getBinanceData("ETHBUSD");
    document.getElementById("eth-price").textContent = "$" + ethPrice;

    // Додайте оновлення цін для інших криптовалют тут
}

// Оновлюємо ціни кожні 2 секунди
setInterval(updatePrices, 2000);

// Оновлюємо ціни при завантаженні сторінки
updatePrices();
