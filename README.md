# DJI Lito 1 · мобилен наръчник

Статична страница без React, npm или build стъпки. Подходяща е за GitHub Pages.

## Качване в GitHub Pages

1. Създай ново public repository в GitHub.
2. Качи всички файлове от тази папка в основната директория на repository-то.
3. Отвори **Settings → Pages**.
4. Под **Build and deployment** избери **Deploy from a branch**.
5. Избери branch **main**, папка **/(root)** и натисни **Save**.
6. След публикуването адресът обикновено е:
   `https://USERNAME.github.io/REPOSITORY/`

## Отваряне като приложение на телефон

- iPhone/Safari: Share → Add to Home Screen.
- Android/Chrome: менюто ⋮ → Add to Home screen / Install app.

Чеклистът се пази автоматично на устройството чрез `localStorage`. След първото отваряне страницата може да работи и офлайн чрез service worker.
