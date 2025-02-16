function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value;
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));