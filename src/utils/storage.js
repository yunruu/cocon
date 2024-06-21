const APP_KEY = 'cocon-app-key';

export const saveToStorage = (key, value) => {
    if (!key || !value) {
        return;
    }
    const fullKey = APP_KEY + key;
    localStorage.setItem(fullKey, JSON.stringify(value));
}

export const getFromStorage = (key) => {
    if (!key) {
        return null;
    }
    const fullKey = APP_KEY + key;
    return JSON.parse(localStorage.getItem(fullKey));
}

export const removeFromStorage = (key) => {
    if (!key) {
        return;
    }
    const fullKey = APP_KEY + key;
    localStorage.removeItem(fullKey);
}