/* DJI Lito 1 — мобилен наръчник
 * Реконструиран и разширен. Използва класовете и CSS променливите от style.css.
 * Без външни зависимости. Чеклистът се пази в localStorage.
 */
(function () {
  "use strict";

  /* ---------- SVG диаграми ---------- */
  var svgCap =
    '<svg class="diagram" viewBox="0 0 420 200" role="img" aria-label="Сваляне на капачето">' +
    '<rect x="150" y="60" width="120" height="80" rx="14" fill="#2b3947" stroke="#3da5ff" stroke-width="2"/>' +
    '<rect x="120" y="80" width="34" height="44" rx="7" fill="#ffb02e" stroke="#fff" stroke-width="1.5"/>' +
    '<line x1="137" y1="130" x2="137" y2="160" stroke="#27c093" stroke-width="3"/>' +
    '<polygon points="131,156 143,156 137,168" fill="#27c093"/>' +
    '<text x="148" y="180" fill="#27c093" font-size="12">1) долната закопчалка надолу</text>' +
    '<line x1="118" y1="100" x2="80" y2="100" stroke="#3da5ff" stroke-width="3"/>' +
    '<polygon points="84,94 84,106 72,100" fill="#3da5ff"/>' +
    '<text x="16" y="90" fill="#3da5ff" font-size="12">2) издърпай напред</text>' +
    '</svg>';

  var svgWings =
    '<svg class="diagram" viewBox="0 0 460 220" role="img" aria-label="Отваряне на крилата">' +
    '<rect x="200" y="90" width="60" height="50" rx="10" fill="#2b3947" stroke="#3da5ff" stroke-width="2"/>' +
    '<g stroke="#27c093" stroke-width="6" stroke-linecap="round"><line x1="205" y1="95" x2="140" y2="70"/><line x1="255" y1="95" x2="320" y2="70"/></g>' +
    '<g stroke="#3da5ff" stroke-width="6" stroke-linecap="round"><line x1="205" y1="135" x2="140" y2="165"/><line x1="255" y1="135" x2="320" y2="165"/></g>' +
    '<g fill="#cfd8e3"><circle cx="135" cy="68" r="8"/><circle cx="325" cy="68" r="8"/><circle cx="135" cy="167" r="8"/><circle cx="325" cy="167" r="8"/></g>' +
    '<text x="118" y="50" fill="#27c093" font-size="12">1) предни — навън и надолу</text>' +
    '<text x="118" y="200" fill="#3da5ff" font-size="12">2) задни — навън</text>' +
    '</svg>';

  var svgCsc =
    '<svg class="diagram" viewBox="0 0 420 175" role="img" aria-label="CSC старт на моторите">' +
    '<text x="60" y="20" fill="#9aa7b4" font-size="13">CSC: двата стика навътре за старт на моторите</text>' +
    '<circle cx="130" cy="100" r="45" fill="#0c1017" stroke="#3da5ff" stroke-width="2"/><circle cx="130" cy="100" r="9" fill="#3da5ff"/>' +
    '<line x1="130" y1="100" x2="160" y2="125" stroke="#3da5ff" stroke-width="3"/><polygon points="152,118 162,128 148,128" fill="#3da5ff"/>' +
    '<circle cx="290" cy="100" r="45" fill="#0c1017" stroke="#27c093" stroke-width="2"/><circle cx="290" cy="100" r="9" fill="#27c093"/>' +
    '<line x1="290" y1="100" x2="260" y2="125" stroke="#27c093" stroke-width="3"/><polygon points="268,118 258,128 272,128" fill="#27c093"/>' +
    '</svg>';

  var svgController =
    '<svg class="diagram" viewBox="0 0 420 200" role="img" aria-label="Дистанционно">' +
    '<rect x="120" y="70" width="180" height="80" rx="14" fill="#2b3947" stroke="#9aa7b4" stroke-width="2"/>' +
    '<line x1="150" y1="70" x2="140" y2="40" stroke="#9aa7b4" stroke-width="3"/><line x1="270" y1="70" x2="280" y2="40" stroke="#9aa7b4" stroke-width="3"/>' +
    '<text x="104" y="34" fill="#9aa7b4" font-size="11">антени</text>' +
    '<circle cx="160" cy="112" r="14" fill="#0c1017" stroke="#3da5ff" stroke-width="2"/>' +
    '<circle cx="260" cy="112" r="14" fill="#0c1017" stroke="#27c093" stroke-width="2"/>' +
    '<rect x="137" y="54" width="22" height="10" rx="3" fill="#3da5ff"/><text x="120" y="48" fill="#3da5ff" font-size="10">наклон</text>' +
    '<rect x="263" y="54" width="22" height="10" rx="3" fill="#27c093"/><text x="288" y="48" fill="#27c093" font-size="10">zoom</text>' +
    '<rect x="196" y="100" width="30" height="22" rx="4" fill="#ffb02e"/><text x="188" y="138" fill="#ffb02e" font-size="10">снимка / видео</text>' +
    '</svg>';

  /* ---------- Данни за стъпките ---------- */
  var STEPS = [
    {
      id: "cap", emoji: "📷", tab: "Капаче", title: "Сваляне на капачето", hue: 35,
      blocks: [
        { type: "diagram", svg: svgCap },
        { type: "tip", html: "Махни капачето (предпазителя на гимбала) <b>преди всеки полет</b> — иначе пречи на самодиагностиката и на движението на камерата." },
        { type: "warn", html: "⚠️ Не дърпай настрани — гимбалът е крехък. Слагай капачето обратно при прибиране в чанта." },
        { type: "check", title: "Стъпки", items: ["Хвани дрона стабилно", "Натисни долната закопчалка надолу", "Издърпай капачето напред, без усукване"] }
      ]
    },
    {
      id: "wings", emoji: "🦋", tab: "Крила", title: "Отваряне на крилата", hue: 205,
      blocks: [
        { type: "diagram", svg: svgWings },
        { type: "tip", html: "Редът е важен: <b>първо предните</b> рамена (навън и надолу), после задните настрани." },
        { type: "check", title: "Стъпки", items: ["Разгъни двете предни рамена", "Разгъни двете задни рамена", "Провери, че и 4-те са докрай отворени"] },
        { type: "tip", html: "💡 Разгъването на <b>дясното задно рамо</b> включва дрона автоматично (може да се смени от DJI Fly)." }
      ]
    },
    {
      id: "power", emoji: "🔋", tab: "Включване", title: "Включване и зареждане", hue: 140,
      blocks: [
        { type: "check", title: "Как се включва", items: ["Авто: разгъни дясното задно рамо", "Ръчно: натисни веднъж, после задръж ~2 сек", "Заряд: натисни веднъж — светят индикаторите"] },
        { type: "tip", html: "<b>Зареждане:</b> официално зарядно в USB-C порта. Не се зарежда при включен дрон. Зареди напълно дрон, дистанционно и телефон." },
        { type: "warn", html: "⚠️ Нов дрон може да не се включи при разгъване, докато не го активираш веднъж." }
      ]
    },
    {
      id: "rc", emoji: "🎮", tab: "Дистанционно", title: "Дистанционно + DJI Fly", hue: 260,
      blocks: [
        { type: "check", title: "Подготовка", items: ["Завий джойстиците на местата им", "Инсталирай DJI Fly (за RC-N3 — на телефона)", "RC-N3: издърпай държача и свържи кабела", "Android: избери „само зареждане“ при USB запитване", "Включи дистанционното; изправи антените"] },
        { type: "tip", html: "🔗 Комплектите идват свързани. Повторно: DJI Fly → камера → „Connect to Aircraft“, задръж бутона на дрона 4+ сек." }
      ]
    },
    {
      id: "activate", emoji: "✅", tab: "Активация", title: "Активация и фърмуер", hue: 170,
      blocks: [
        { type: "check", title: "Стъпки", items: ["Включи дрон и дистанционно", "Следвай стъпките за активация в DJI Fly (нужен интернет)", "Обнови фърмуера при подкана"] },
        { type: "warn", html: "⛔ По време на ъпдейт не спирай тока и не затваряй DJI Fly. След ъпдейт дронът се изключва — включи го пак." }
      ]
    },
    {
      id: "safety", emoji: "🛡️", tab: "Безопасност", title: "Настройки за безопасност", hue: 8,
      blocks: [
        { type: "check", title: "Преди да летиш", items: ["Obstacle Avoidance: „Brake“ или „Bypass“", "RTH височина над най-високото препятствие", "Провери GEO зони и местните закони"] },
        { type: "warn", html: "⚠️ В Sport (S) режим избягването на препятствия се изключва автоматично." }
      ]
    },
    {
      id: "preflight", emoji: "📋", tab: "Чеклист", title: "Чеклист преди полет", hue: 48,
      blocks: [
        { type: "check", title: "Финална проверка", items: ["Капачето е свалено", "Батерия и витла здраво монтирани; 4-те рамена отворени", "Дрон, дистанционно, телефон — заредени", "Гимбал и камера работят", "GPS (GNSS) сигнал е наред"] },
        { type: "tip", html: "🛰️ Излитай на открито. Изчакай гласовото „Home Point updated“ след излитане." }
      ]
    },
    {
      id: "takeoff", emoji: "🛫", tab: "Излитане", title: "Излитане — стъпка по стъпка", hue: 212,
      blocks: [
        { type: "tip", html: "<b>Преди да натиснеш каквото и да е:</b> равна твърда повърхност, на открито, GPS наред, отдръпни се на 2–3 м." },
        { type: "check", title: "Вариант А: Автоматично (за начало)", items: ["DJI Fly → изглед на камерата", "Натисни бутона за излитане (стрелка нагоре)", "Натисни и задръж ~2 сек за потвърждение", "Дронът виси на ~1,2 м — поеми стиковете"] },
        { type: "diagram", svg: svgCsc },
        { type: "check", title: "Вариант Б: Ръчно (CSC)", items: ["Двата стика навътре едновременно — старт на моторите", "Пусни стиковете — въртят се бавно", "Бутни левия стик плавно нагоре — отлепя се", "На 1–2 м върни левия стик в центъра"] },
        { type: "warn", html: "⚠️ За начинаещ автоматичното излитане е по-безопасно." }
      ]
    },
    {
      id: "controls", emoji: "🕹️", tab: "Управление", title: "Управление със стиковете (Mode 2)", hue: 282,
      blocks: [
        { type: "tip", html: "Пуснеш ли стиковете, те се връщат в центъра и дронът виси неподвижно." },
        {
          type: "sticks",
          left: { label: "ЛЯВ СТИК · височина + завъртане", color: "#2f7dd1", rows: [
            { dir: "↑", text: "Изкачва се" }, { dir: "↓", text: "Слиза" },
            { dir: "←", text: "Завърта се на място наляво" }, { dir: "→", text: "Завърта се на място надясно" }
          ] },
          right: { label: "ДЕСЕН СТИК · посока на движение", color: "#1f9d6b", rows: [
            { dir: "↑", text: "Лети напред" }, { dir: "↓", text: "Лети назад" },
            { dir: "←", text: "Лети настрани наляво" }, { dir: "→", text: "Лети настрани надясно" }
          ] },
          tip: "💡 Бутай стиковете малко и плавно. Първите полети — само нагоре/надолу и леко напред/назад."
        }
      ]
    },
    {
      id: "camera", emoji: "🎥", tab: "Камера", title: "Камера по време на полет", hue: 322,
      blocks: [
        { type: "diagram", svg: svgController },
        { type: "check", title: "Управление на камерата", items: ["Ляво колелце — наклон нагоре/надолу", "Дясно колелце — цифров zoom", "Бутон снимка / бутон запис", "C1 / C2 (отзад) — програмируеми бутони"] }
      ]
    },
    {
      id: "modes", emoji: "⚡", tab: "Режими", title: "Полетни режими", hue: 45,
      blocks: [
        { type: "tip", html: "<b>Cine</b> — най-бавен и плавен (за първи полети). <b>Normal</b> — до ~12 м/с. <b>Sport (S)</b> — до ~18 м/с, рязко." },
        { type: "warn", html: "⚠️ В Sport избягването на препятствия се изключва. Започни в Cine или Normal." }
      ]
    },
    {
      id: "landing", emoji: "🛬", tab: "Кацане", title: "Кацане", hue: 190,
      blocks: [
        { type: "check", title: "Автоматично", items: ["Докарай дрона над равно чисто място", "Натисни иконата за кацане и задръж", "Дронът слиза сам и спира моторите"] },
        { type: "check", title: "Ръчно", items: ["Докарай дрона над мястото с десния стик", "Дръпни левия стик надолу — слиза плавно", "Задръж левия стик надолу до спиране на моторите"] },
        { type: "tip", html: "🆘 <b>RTH:</b> задръж бутона RTH → дронът се връща сам и каца. Използвай при изгубена ориентация или слаб сигнал." }
      ]
    },
    {
      id: "firstflight", emoji: "🧭", tab: "Първи полет", title: "Първи полет — мини план", hue: 158,
      blocks: [
        { type: "check", title: "Стъпки за упражнение", items: ["Автоматично излитане → виси на 1,2 м", "Само ляв стик нагоре/надолу", "Само ляв стик ляво/дясно — завъртане", "Само десен стик леко напред/назад/настрани", "Дръж дрона близо и ниско (3–5 м), без вятър", "Автоматично кацане"] }
      ]
    },
    {
      id: "photos", emoji: "📸", tab: "Снимки", title: "Снимки и видео", hue: 300,
      blocks: [
        { type: "check", title: "Основи", items: ["Сложи microSD карта (Lito 1 пише само на нея)", "Снимки до 48 MP (JPEG/DNG RAW)", "Видео до 4K 60fps; забавен каданс до 100fps"] },
        { type: "tip", html: "📸 За остри кадри: изчакай дронът да виси стабилно и натисни плавно." }
      ]
    },
    {
      id: "smart", emoji: "🤖", tab: "Авто режими", title: "Интелигентни режими", hue: 250,
      blocks: [
        { type: "check", title: "Какво предлага", items: ["FocusTrack — Spotlight, POI, ActiveTrack", "QuickShots — Rocket, Circle, Helix, Boomerang, Asteroid", "MasterShots, Hyperlapse, Slow motion, Panorama"] },
        { type: "tip", html: "ℹ️ Waypoint Flight е само за Lito X1, не за Lito 1." }
      ]
    },
    {
      id: "rth", emoji: "🏠", tab: "Връщане", title: "Връщане у дома (RTH)", hue: 128,
      blocks: [
        { type: "check", title: "Три начина", items: ["Активно RTH: задръж бутона/иконата RTH", "Ниска батерия: дронът тръгва сам към Home Point", "Failsafe: при загуба на сигнал над 6 сек се връща сам"] },
        { type: "warn", html: "⚠️ RTH височината трябва да е над всички препятствия по пътя към дома." }
      ]
    },
    {
      id: "after", emoji: "📦", tab: "След полет", title: "След полет и прибиране", hue: 20,
      blocks: [
        { type: "check", title: "Стъпки", items: ["Сваляне на файлове: QuickTransfer или USB-C/четец", "Изключи дрона (задръж ~2 сек)", "Сложи капачето обратно", "Сгъни раменете и прибери (не притискай витлата)"] },
        { type: "tip", html: "✅ Дълго съхранение: зареждай напълно на всеки 3 месеца. ⛔ Дронът не е водоустойчив." }
      ]
    }
  ];

  /* ---------- Тема по hue ---------- */
  function theme(h) {
    return {
      "--step-color": "hsl(" + h + " 72% 56%)",
      "--step-bg": "hsl(" + h + " 85% 93%)",
      "--step-border": "hsl(" + h + " 40% 26%)",
      "--step-shadow": "hsla(" + h + ", 72%, 50%, 0.28)",
      "--step-check-bg": "hsla(" + h + ", 72%, 50%, 0.16)",
      "--step-button-shadow": "hsla(" + h + ", 72%, 45%, 0.45)",
      "--quick-border": "hsla(" + h + ", 72%, 55%, 0.5)",
      "--quick-bg": "hsla(" + h + ", 72%, 50%, 0.14)"
    };
  }

  /* ---------- Помощни ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function storeKey(stepId, i) { return "dji-lito-check:" + stepId + ":" + i; }
  function isChecked(stepId, i) {
    try { return localStorage.getItem(storeKey(stepId, i)) === "1"; } catch (e) { return false; }
  }
  function setChecked(stepId, i, val) {
    try { localStorage.setItem(storeKey(stepId, i), val ? "1" : "0"); } catch (e) {}
  }

  var current = 0;
  var app = document.getElementById("app");

  /* ---------- Рендер на блок ---------- */
  function renderBlock(step, block) {
    if (block.type === "diagram") {
      var d = el("div");
      d.innerHTML = block.svg;
      return d.firstChild;
    }
    if (block.type === "tip") return el("div", "tip-box", block.html);
    if (block.type === "warn") return el("div", "warning-box", block.html);
    if (block.type === "check") {
      var wrap = el("div");
      if (block.title) wrap.appendChild(el("div", "checklist-title", block.title));
      block.items.forEach(function (item, idx) {
        var globalIdx = step._checkBase++;
        var done = isChecked(step.id, globalIdx);
        var btn = el("button", "check-item" + (done ? " is-done" : ""));
        btn.type = "button";
        btn.setAttribute("aria-pressed", done ? "true" : "false");
        btn.innerHTML =
          '<span class="checkbox-visual">' + (done ? "✓" : "") + "</span>" +
          '<span class="check-text">' + item + "</span>";
        btn.addEventListener("click", function () {
          var nowDone = !btn.classList.contains("is-done");
          btn.classList.toggle("is-done", nowDone);
          btn.setAttribute("aria-pressed", nowDone ? "true" : "false");
          btn.querySelector(".checkbox-visual").textContent = nowDone ? "✓" : "";
          setChecked(step.id, globalIdx, nowDone);
        });
        wrap.appendChild(btn);
      });
      return wrap;
    }
    if (block.type === "sticks") {
      var grid = el("div", "sticks-grid");
      [block.left, block.right].forEach(function (s) {
        var card = el("div", "stick-card");
        card.style.setProperty("--stick-color", s.color);
        card.appendChild(el("div", "stick-label", s.label));
        s.rows.forEach(function (r) {
          var row = el("div", "stick-row");
          row.innerHTML =
            '<span class="stick-direction">' + r.dir + "</span><span>" + r.text + "</span>";
          card.appendChild(row);
        });
        grid.appendChild(card);
      });
      var container = el("div");
      container.appendChild(grid);
      if (block.tip) container.appendChild(el("div", "stick-tip", block.tip));
      return container;
    }
    return el("div");
  }

  /* ---------- Пълен рендер ---------- */
  function render() {
    var step = STEPS[current];
    step._checkBase = 0; // нулиране на брояча за стабилни localStorage ключове
    var t = theme(step.hue);

    app.innerHTML = "";
    var shell = el("div", "app-shell");

    // Header
    var header = el("header", "app-header");
    header.appendChild(el("div", "header-icon", "🚁"));
    header.appendChild(el("h1", "app-title", "DJI Lito 1"));
    header.appendChild(el("div", "app-subtitle", "Наръчник"));
    shell.appendChild(header);

    // Tabs
    var tabs = el("nav", "step-tabs");
    tabs.setAttribute("aria-label", "Стъпки");
    STEPS.forEach(function (s, i) {
      var tab = el("button", "step-tab" + (i === current ? " is-active" : ""));
      tab.type = "button";
      tab.innerHTML = '<span>' + s.emoji + "</span><span>" + s.tab + "</span>";
      if (i === current) tab.style.background = theme(s.hue)["--step-color"];
      tab.addEventListener("click", function () { go(i); });
      tabs.appendChild(tab);
    });
    shell.appendChild(tabs);

    // Page content
    var page = el("div", "page-content");
    var card = el("article", "main-card");
    Object.keys(t).forEach(function (k) { card.style.setProperty(k, t[k]); });

    var ch = el("div", "card-header");
    ch.appendChild(el("div", "card-watermark", step.emoji));
    ch.appendChild(el("div", "step-kicker", "Стъпка " + (current + 1) + " от " + STEPS.length));
    ch.appendChild(el("h2", "step-title", step.title));
    card.appendChild(ch);

    var track = el("div", "progress-track");
    var bar = el("div", "progress-bar");
    bar.style.setProperty("--progress", Math.round(((current + 1) / STEPS.length) * 100) + "%");
    track.appendChild(bar);
    card.appendChild(track);

    var content = el("div", "card-content");
    step.blocks.forEach(function (b) { content.appendChild(renderBlock(step, b)); });

    // Navigation
    var nav = el("div", "navigation");
    var back = el("button", "nav-button nav-back", "← Назад");
    back.type = "button";
    back.disabled = current === 0;
    back.addEventListener("click", function () { go(current - 1); });
    var next = el("button", "nav-button nav-next is-ready", current === STEPS.length - 1 ? "Готово ✓" : "Напред →");
    next.type = "button";
    next.addEventListener("click", function () { if (current < STEPS.length - 1) go(current + 1); });
    nav.appendChild(back);
    nav.appendChild(next);
    content.appendChild(nav);

    card.appendChild(content);
    page.appendChild(card);

    // Quick nav
    var quick = el("div", "quick-nav");
    quick.appendChild(el("div", "quick-nav-title", "Бързо меню"));
    var list = el("div", "quick-list");
    STEPS.forEach(function (s, i) {
      var q = el("button", "quick-step" + (i === current ? " is-active" : ""));
      q.type = "button";
      if (i === current) {
        var qt = theme(s.hue);
        q.style.setProperty("--quick-border", qt["--quick-border"]);
        q.style.setProperty("--quick-bg", qt["--quick-bg"]);
      }
      q.innerHTML =
        '<span class="quick-emoji">' + s.emoji + '</span><span class="quick-label">' + (i + 1) + ". " + s.title + "</span>";
      q.addEventListener("click", function () { go(i); });
      list.appendChild(q);
    });
    quick.appendChild(list);
    page.appendChild(quick);

    shell.appendChild(page);
    app.appendChild(shell);
  }

  function go(i) {
    if (i < 0 || i >= STEPS.length) return;
    current = i;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    try { localStorage.setItem("dji-lito-step", String(i)); } catch (e) {}
  }

  // Възстанови последна стъпка
  try {
    var saved = parseInt(localStorage.getItem("dji-lito-step"), 10);
    if (!isNaN(saved) && saved >= 0 && saved < STEPS.length) current = saved;
  } catch (e) {}

  render();
})();

/* PWA / offline support */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function (error) {
      console.warn("Service Worker registration failed:", error);
    });
  });
}
