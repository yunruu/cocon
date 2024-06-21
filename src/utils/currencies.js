export const currencies = {
    EUR: 'EUR',
    GBP: 'GBP',
    TRY: 'TRY',
    SGD: 'SGD',
}

export const currenciesSymbol = {
    EUR: '€',
    GBP: '£',
    TRY: '₺',
    SGD: 'S$',
}

export const exchangeRates = {
    EUR: 1,
    GBP: 0.85,
    TRY: 35,
    SGD: 1.45,
}

export const convert = (fromCurrency, toCurrency, amount) => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    return ((amount / fromRate) * toRate).toFixed(2);
};

export const getCurrencySymbol = (currency) => {
    return currenciesSymbol[currency];
}