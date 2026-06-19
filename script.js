"use strict";

const batteryDiagram = `
  <svg class="diagram" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Диаграма за изваждане на батерията">
    <rect width="320" height="200" fill="#1a1a2e" rx="12"/>
    <rect x="90" y="60" width="140" height="80" rx="10" fill="#2a2a4a" stroke="#4a4a7a" stroke-width="2"/>
    <rect x="110" y="75" width="100" height="50" rx="6" fill="#0d1117" stroke="#1a73e8" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="112" y="77" width="96" height="46" rx="5" fill="#1a73e8"/>
    <rect x="120" y="84" width="80" height="10" rx="3" fill="#4a9eff" opacity="0.6"/>
    <circle cx="130" cy="102" r="4" fill="#00ff88"/>
    <circle cx="143" cy="102" r="4" fill="#00ff88"/>
    <circle cx="156" cy="102" r="4" fill="#ffc107"/>
    <circle cx="169" cy="102" r="4" fill="#444"/>
    <rect x="195" y="88" width="18" height="24" rx="4" fill="#ff6b35" stroke="#ff9a6c" stroke-width="1.5"/>
    <text x="204" y="104" text-anchor="middle" fill="white" font-size="10" font-weight="bold">R</text>
    <line x1="204" y1="116" x2="204" y2="130" stroke="#ff6b35" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="204,136 199,126 209,126" fill="#ff6b35"/>
    <text x="204" y="152" text-anchor="middle" fill="#ff9a6c" font-size="10">Натисни</text>
    <line x1="108" y1="100" x2="70" y2="100" stroke="#4a9eff" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="62,100 74,94 74,106" fill="#4a9eff"/>
    <text x="66" y="120" text-anchor="middle" fill="#4a9eff" font-size="10">Извади</text>
    <text x="160" y="50" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="11">Тяло на дрона</text>
    <text x="160" y="170" text-anchor="middle" fill="#1a73e8" font-size="11" font-weight="bold">Батерия (Intelligent Flight Battery)</text>
  </svg>`;

const armsDiagram = `
  <svg class="diagram" viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Диаграма за разгъване на крилата">
    <rect width="320" height="210" fill="#1a1a2e" rx="12"/>
    <text x="80" y="22" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="10" font-weight="700">СГЪНАТО</text>
    <rect x="55" y="30" width="50" height="35" rx="6" fill="#2a2a4a" stroke="#4a4a7a" stroke-width="1.5"/>
    <rect x="42" y="38" width="13" height="38" rx="4" fill="#555" stroke="#777"/>
    <rect x="105" y="38" width="13" height="38" rx="4" fill="#555" stroke="#777"/>
    <rect x="42" y="22" width="13" height="20" rx="4" fill="#888" stroke="#aaa"/>
    <rect x="105" y="22" width="13" height="20" rx="4" fill="#888" stroke="#aaa"/>
    <circle cx="48" cy="76" r="5" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="3,2"/>
    <circle cx="112" cy="76" r="5" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="3,2"/>
    <circle cx="48" cy="22" r="5" fill="none" stroke="#888" stroke-width="1.5" stroke-dasharray="3,2"/>
    <circle cx="112" cy="22" r="5" fill="none" stroke="#888" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="148" y1="105" x2="172" y2="105" stroke="#00ff88" stroke-width="3" stroke-linecap="round"/>
    <polygon points="180,105 168,99 168,111" fill="#00ff88"/>
    <text x="240" y="22" text-anchor="middle" fill="#00ff88" font-size="10" font-weight="700">РАЗГЪНАТО ✓</text>
    <rect x="215" y="80" width="50" height="35" rx="6" fill="#2a2a4a" stroke="#00ff88" stroke-width="1.5"/>
    <line x1="215" y1="88" x2="183" y2="60" stroke="#4a9eff" stroke-width="8" stroke-linecap="round"/>
    <line x1="265" y1="88" x2="297" y2="60" stroke="#4a9eff" stroke-width="8" stroke-linecap="round"/>
    <line x1="215" y1="107" x2="183" y2="145" stroke="#888" stroke-width="8" stroke-linecap="round"/>
    <line x1="265" y1="107" x2="297" y2="145" stroke="#888" stroke-width="8" stroke-linecap="round"/>
    <circle cx="183" cy="60" r="14" fill="none" stroke="#4a9eff" stroke-width="1.5" opacity="0.7"/>
    <circle cx="297" cy="60" r="14" fill="none" stroke="#4a9eff" stroke-width="1.5" opacity="0.7"/>
    <circle cx="183" cy="145" r="14" fill="none" stroke="#888" stroke-width="1.5" opacity="0.7"/>
    <circle cx="297" cy="145" r="14" fill="none" stroke="#888" stroke-width="1.5" opacity="0.7"/>
    <circle cx="183" cy="60" r="5" fill="#4a9eff"/>
    <circle cx="297" cy="60" r="5" fill="#4a9eff"/>
    <circle cx="183" cy="145" r="5" fill="#888"/>
    <circle cx="297" cy="145" r="5" fill="#888"/>
    <text x="183" y="185" text-anchor="middle" fill="#4a9eff" font-size="9">1. Предни крила</text>
    <text x="297" y="185" text-anchor="middle" fill="#4a9eff" font-size="9">1. Предни крила</text>
    <text x="183" y="198" text-anchor="middle" fill="#888" font-size="9">2. Задни крила</text>
    <text x="297" y="198" text-anchor="middle" fill="#888" font-size="9">2. Задни крила</text>
  </svg>`;

const steps = [
  {
    id: "charge",
    emoji: "🔋",
    title: "Зареди батерията",
    subtitle: "Преди всичко",
    color: "#1a73e8",
    bg: "#e8f0fe",
    tip: "Свържи USB-C кабела директно към дрона. Не вадиш батерията! LED индикаторите мигат, което означава, че се зарежда. При 30W зарядно: около 1 час.",
    warning: null,
    checks: ["USB-C кабел в дрона", "Дронът е ИЗКЛЮЧЕН", "LED-овете мигат последователно"]
  },
  {
    id: "battery",
    emoji: "🪫",
    title: "Вади/слага батерията",
    subtitle: "Когато е нужно",
    color: "#1565c0",
    bg: "#e3f2fd",
    diagram: batteryDiagram,
    tip: "1. Натисни и задръж бутона за освобождаване, оранжевият отстрани на слота. 2. Плъзни батерията напред и навън. 3. За поставяне я плъзни обратно, докато чуеш „клик“.",
    warning: "⚠️ Никога не вади батерията, докато дронът е включен!",
    checks: ["Дронът е ИЗКЛЮЧЕН", "Натисни Release бутона", "Плъзни напред, докато излезе", "За поставяне: чакай „клик“"]
  },
  {
    id: "arms",
    emoji: "🦅",
    title: "Опъни крилата",
    subtitle: "Разгъване",
    color: "#0288d1",
    bg: "#e1f5fe",
    diagram: armsDiagram,
    tip: "Редът е важен! Първо предните крила, сините на схемата. Издърпай ги напред и надолу, докато щракнат. После задните крила: назад и надолу. Трябва да чуеш ясно „клик“ за всяко крило.",
    warning: null,
    checks: ["Предно ляво крило: клик ✓", "Предно дясно крило: клик ✓", "Задно ляво крило: клик ✓", "Задно дясно крило: клик ✓"]
  },
  {
    id: "app",
    emoji: "📲",
    title: "Свали DJI Fly",
    subtitle: "Приложението",
    color: "#0f9d58",
    bg: "#e6f4ea",
    tip: "Инсталирай DJI Fly. Влез в профила си или създай нов. Свържи контролера с телефона чрез USB кабел или го сдвои според модела на контролера.",
    warning: null,
    checks: ["DJI Fly е инсталиран", "Профилът е създаден", "Телефонът е свързан с контролера"]
  },
  {
    id: "unpack",
    emoji: "📦",
    title: "Разопакови дрона",
    subtitle: "Подготовка",
    color: "#f57c00",
    bg: "#fff3e0",
    tip: "Свали предпазителя на гимбала, пластмасовата скоба отпред на дрона. Освободи го внимателно и го издърпай напред. Без това гимбалът не може да се движи свободно.",
    warning: "⚠️ Никога не включвай или не лети с поставен предпазител на гимбала!",
    checks: ["Предпазителят на гимбала е СВАЛЕН", "Гимбалът се движи свободно"]
  },
  {
    id: "location",
    emoji: "🌍",
    title: "Избери място",
    subtitle: "Локация",
    color: "#7b1fa2",
    bg: "#f3e5f5",
    tip: "Избери широко открито място, далеч от хора, дървета, кабели и сгради. Провери разрешените зони, времето и силата на вятъра преди полета.",
    warning: "⚠️ Провери актуалните местни правила и ограничения за полети, преди да излетиш.",
    checks: ["Открито пространство", "Няма хора наблизо", "Няма забранена зона", "Вятърът е слаб и постоянен"]
  },
  {
    id: "power",
    emoji: "🔌",
    title: "Включи всичко",
    subtitle: "Power ON",
    color: "#c62828",
    bg: "#ffebee",
    tip: "1. Натисни веднъж бутона на батерията, за да видиш нивото. 2. Натисни отново и задръж, за да включиш дрона. 3. Включи контролера по същия начин. 4. Отвори DJI Fly.",
    warning: null,
    checks: ["Дронът е включен", "Контролерът е включен", "DJI Fly е отворен", "Приложението показва готовност за полет"]
  },
  {
    id: "takeoff",
    emoji: "🛫",
    title: "Излитане",
    subtitle: "Първи полет",
    color: "#00838f",
    bg: "#e0f7fa",
    tip: "Следвай проверката преди полет в DJI Fly. Използвай автоматичното излитане и изчакай дронът да се стабилизира на малка височина, преди да го движиш.",
    warning: null,
    checks: ["Проверката преди полет е завършена", "Гимбалът се движи свободно", "Приложението показва Ready to Go"]
  },
  {
    id: "controls",
    emoji: "🕹️",
    title: "Контролите",
    subtitle: "Mode 2 (стандарт)",
    color: "#4527a0",
    bg: "#ede7f6",
    tip: null,
    warning: null,
    sticks: true,
    checks: []
  },
  {
    id: "landing",
    emoji: "🏠",
    title: "Кацане",
    subtitle: "Завръщане",
    color: "#2e7d32",
    bg: "#e8f5e9",
    tip: "Използвай Return to Home само когато маршрутът е свободен и височината за връщане е зададена правилно. Можеш и да кацнеш ръчно или чрез бутона за кацане в DJI Fly.",
    warning: "⚠️ При ниска батерия не отлагай кацането!",
    checks: ["Има свободно място под дрона", "Хората са на безопасно разстояние", "Изчаках моторите да спрат"]
  }
];

const sticks = [
  {
    label: "ЛЯВ СТИК",
    color: "#4527a0",
    items: [
      ["↑", "Качване нагоре"],
      ["↓", "Слизане надолу"],
      ["←", "Завъртане наляво (Yaw)"],
      ["→", "Завъртане надясно (Yaw)"]
    ]
  },
  {
    label: "ДЕСЕН СТИК",
    color: "#c62828",
    items: [
      ["↑", "Напред"],
      ["↓", "Назад"],
      ["←", "Наляво"],
      ["→", "Надясно"]
    ]
  }
];

const storageKey = "dji-lito-guide-state-v1";
const app = document.querySelector("#app");

let activeIndex = 0;
let checked = loadCheckedState();

function loadCheckedState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (error) {
    console.warn("Неуспешно зареждане на чеклиста:", error);
    return {};
  }
}

function saveCheckedState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(checked));
  } catch (error) {
    console.warn("Неуспешно запазване на чеклиста:", error);
  }
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function isStepComplete(step) {
  return step.checks.length === 0 || step.checks.every((_, index) => checked[`${step.id}-${index}`]);
}

function renderSticksGuide() {
  const cards = sticks.map((stick) => `
    <section class="stick-card" style="--stick-color: ${stick.color}">
      <div class="stick-label">${stick.label}</div>
      ${stick.items.map(([direction, action]) => `
        <div class="stick-row">
          <span class="stick-direction">${direction}</span>
          <span>${action}</span>
        </div>`).join("")}
    </section>`).join("");

  return `
    <div class="sticks-guide">
      <div class="sticks-grid">${cards}</div>
      <div class="stick-tip">💡 <strong>Съвет:</strong> Първите движения да са бавни, ниско и на широко открито място.</div>
    </div>`;
}

function renderChecklist(step) {
  if (!step.checks.length) return "";

  return `
    <section class="checklist" aria-label="Чеклист за ${step.title}">
      <div class="checklist-title">✓ Чеклист</div>
      ${step.checks.map((text, index) => {
        const key = `${step.id}-${index}`;
        const done = Boolean(checked[key]);

        return `
          <button
            class="check-item${done ? " is-done" : ""}"
            type="button"
            data-check-index="${index}"
            aria-pressed="${done}"
          >
            <span class="checkbox-visual" aria-hidden="true">${done ? "✓" : ""}</span>
            <span class="check-text">${text}</span>
          </button>`;
      }).join("")}
    </section>`;
}

function render() {
  const step = steps[activeIndex];
  const complete = isStepComplete(step);
  const isLast = activeIndex === steps.length - 1;
  const progress = ((activeIndex + 1) / steps.length) * 100;

  app.innerHTML = `
    <div class="app-shell" style="
      --step-color: ${step.color};
      --step-bg: ${step.bg};
      --step-border: ${hexToRgba(step.color, 0.27)};
      --step-shadow: ${hexToRgba(step.color, 0.13)};
      --step-check-bg: ${hexToRgba(step.color, 0.13)};
      --step-button-shadow: ${hexToRgba(step.color, 0.4)};
      --progress: ${progress}%;
    ">
      <header class="app-header">
        <div class="header-icon">🚁</div>
        <h1 class="app-title">DJI Lito 1</h1>
        <div class="app-subtitle">Наръчник за начинаещи</div>
      </header>

      <nav class="step-tabs" aria-label="Стъпки">
        ${steps.map((item, index) => `
          <button
            class="step-tab${activeIndex === index ? " is-active" : ""}"
            type="button"
            data-step-index="${index}"
            aria-label="Стъпка ${index + 1}: ${item.title}"
            aria-current="${activeIndex === index ? "step" : "false"}"
            style="${activeIndex === index
              ? `background:${item.color}; border-color:${item.color}; box-shadow:0 4px 16px ${hexToRgba(item.color, 0.33)};`
              : ""}"
          >
            <span>${item.emoji}</span><span>${index + 1}</span>
          </button>`).join("")}
      </nav>

      <div class="page-content">
        <article class="main-card">
          <header class="card-header">
            <div class="card-watermark" aria-hidden="true">${step.emoji}</div>
            <div class="step-kicker">Стъпка ${activeIndex + 1} от ${steps.length} · ${step.subtitle}</div>
            <h2 class="step-title">${step.emoji} ${step.title}</h2>
          </header>

          <div class="progress-track" aria-hidden="true">
            <div class="progress-bar"></div>
          </div>

          <div class="card-content">
            ${step.diagram || ""}
            ${step.tip ? `<div class="tip-box">${step.tip}</div>` : ""}
            ${step.sticks ? renderSticksGuide() : ""}
            ${step.warning ? `<div class="warning-box">${step.warning}</div>` : ""}
            ${renderChecklist(step)}
          </div>
        </article>

        <div class="navigation">
          <button class="nav-button nav-back" type="button" data-action="previous" ${activeIndex === 0 ? "disabled" : ""}>← Назад</button>
          <button class="nav-button nav-next${complete ? " is-ready" : ""}" type="button" data-action="next" ${isLast ? "disabled" : ""}>
            ${isLast ? "🎉 Готово!" : "Напред →"}
          </button>
        </div>

        <nav class="quick-nav" aria-label="Всички стъпки">
          <div class="quick-nav-title">Всички стъпки</div>
          <div class="quick-list">
            ${steps.map((item, index) => `
              <button
                class="quick-step${activeIndex === index ? " is-active" : ""}"
                type="button"
                data-step-index="${index}"
                style="--quick-bg:${hexToRgba(item.color, 0.13)}; --quick-border:${hexToRgba(item.color, 0.27)};"
              >
                <span class="quick-emoji">${item.emoji}</span>
                <span class="quick-label">${index + 1}. ${item.title}</span>
              </button>`).join("")}
          </div>
        </nav>
      </div>
    </div>`;

  bindEvents();
  scrollActiveTabIntoView();
}

function bindEvents() {
  document.querySelectorAll("[data-step-index]").forEach((button) => {
    button.addEventListener("click", () => {
      activeIndex = Number(button.dataset.stepIndex);
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-check-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = steps[activeIndex];
      const index = Number(button.dataset.checkIndex);
      const key = `${step.id}-${index}`;
      checked[key] = !checked[key];
      saveCheckedState();
      render();
    });
  });

  const previousButton = document.querySelector('[data-action="previous"]');
  const nextButton = document.querySelector('[data-action="next"]');

  previousButton?.addEventListener("click", () => {
    activeIndex = Math.max(0, activeIndex - 1);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  nextButton?.addEventListener("click", () => {
    const step = steps[activeIndex];
    if (!isStepComplete(step)) return;

    activeIndex = Math.min(steps.length - 1, activeIndex + 1);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function scrollActiveTabIntoView() {
  const activeTab = document.querySelector(".step-tab.is-active");
  activeTab?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

render();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker registration failed:", error);
    });
  });
}
