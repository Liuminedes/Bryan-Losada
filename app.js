/* ══════════════════════════════════════════════════
   KIA ADVISOR LANDING — app.js
═══════════════════════════════════════════════════ */

// ─── DATA ─────────────────────────────────────────
const WA_NUMBER = "573005792210";

const WA_OPTIONS = [
  { icon:"🚗", label:"Cotizar un vehículo",               msg:"¡Hola Bryan! Me gustaría cotizar un vehículo KIA. ¿Me puedes ayudar?" },
  { icon:"💳", label:"Opciones de financiación",           msg:"¡Hola Bryan! Quiero información sobre las opciones de financiación y cuotas disponibles." },
  { icon:"💰", label:"Compra de contado",                  msg:"¡Hola Bryan! Estoy interesado/a en comprar un KIA de contado. ¿Qué beneficios hay?" },
  { icon:"🛡️", label:"Garantías y posventa",               msg:"¡Hola Bryan! Quiero información sobre la garantía de 7 años / 150.000 km de KIA." },
  { icon:"📦", label:"Disponibilidad y entrega inmediata", msg:"¡Hola Bryan! ¿Qué modelos tienen disponibles para entrega inmediata?" },
  { icon:"🏎️", label:"Hablar directamente con Bryan",      msg:"¡Hola Bryan Losada! Quisiera hablar contigo sobre los vehículos KIA." },
];

const VEHICLES = [
  {
    name:"Kia Picanto", year:"2026", category:"Automóvil", tag:"Gasolina", price:58990000,
    img:"https://cdn.kia.com.co/Home_PICANTO_2151954d8e.png",
    description:"El compañero perfecto para la ciudad. Ágil, eficiente y lleno de tecnología.",
    specs:{ Motor:"1.0L / 1.2L", Potencia:"66 – 84 hp", Transmisión:"Manual / Automática", Combustible:"Gasolina", Tracción:"Delantera", Carrocería:"Hatchback", Puertas:"5", Airbags:"6" }
  },
  {
    name:"Kia Soluto", year:"2026", category:"Automóvil", tag:"Gasolina", price:69990000,
    img:"https://cdn.kia.com.co/Kia_Soluto_c8cb068fa6.webp",
    description:"Sedán compacto con diseño moderno y gran espacio interior para toda la familia.",
    specs:{ Motor:"1.4L", Potencia:"100 hp", Transmisión:"Manual / Automática", Combustible:"Gasolina", Tracción:"Delantera", Carrocería:"Sedán", Puertas:"4", Airbags:"6" }
  },
  {
    name:"Kia K3 Sedán", year:"2026", category:"Automóvil", tag:"Gasolina", price:80990000,
    img:"https://cdn.kia.com.co/Kia_K3_general_24ab8b257a.png",
    description:"El all-new K3, elegante y tecnológico. Diseñado para liderar en su segmento.",
    specs:{ Motor:"1.5L Turbo", Potencia:"158 hp", Transmisión:"Automática CVT", Combustible:"Gasolina", Tracción:"Delantera", Carrocería:"Sedán", Puertas:"4", Airbags:"6" }
  },
  {
    name:"Kia K3 Cross", year:"2026", category:"Crossover", tag:"Gasolina", price:81990000,
    img:"https://cdn.kia.com.co/Home_K3_CROSS_d433f3dea9.png",
    description:"La versatilidad de un crossover con la eficiencia de un sedán. Lo mejor de dos mundos.",
    specs:{ Motor:"1.5L Turbo", Potencia:"158 hp", Transmisión:"Automática CVT", Combustible:"Gasolina", Tracción:"Delantera", Carrocería:"Crossover", Puertas:"4", Airbags:"6" }
  },
  {
    name:"Kia Sonet", year:"2026", category:"SUV", tag:"Gasolina", price:89990000,
    img:"https://cdn.kia.com.co/Nueva_Sonet_Plata029_c9e475c6eb.png",
    description:"SUV compacto con personalidad. Tecnología avanzada en formato urbano perfecto.",
    specs:{ Motor:"1.5L", Potencia:"115 hp", Transmisión:"Manual / Automática", Combustible:"Gasolina", Tracción:"Delantera", Carrocería:"SUV Compacto", Puertas:"5", Airbags:"6" }
  },
  {
    name:"Kia Stonic", year:"2026", category:"SUV", tag:"Híbrido", price:92990000,
    img:"https://cdn.kia.com.co/Minuatura_nueva_stonic_b12460b5f8.png",
    description:"SUV urbano con tecnología híbrida 48V. Ahora disponible con caja automática.",
    specs:{ Motor:"1.0L Turbo + 48V HEV", Potencia:"120 hp", Transmisión:"Automática DCT", Combustible:"Híbrido 48V", Tracción:"Delantera", Carrocería:"SUV Compacto", Puertas:"5", Airbags:"6" }
  },
  {
    name:"Kia Seltos", year:"2026", category:"SUV", tag:"Gasolina", price:109990000,
    img:"https://cdn.kia.com.co/Seltos_dd569d37c9.png",
    description:"SUV mediano con estilo dinámico y tecnología de punta. Equipamiento completo.",
    specs:{ Motor:"1.6L", Potencia:"121 hp", Transmisión:"Manual / Automática", Combustible:"Gasolina", Tracción:"4x2", Carrocería:"SUV Mediano", Puertas:"5", Airbags:"6" }
  },
  {
    name:"Kia EV3", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:119990000,
    img:"https://cdn.kia.com.co/Foto_para_home_Photoroom_8d33e77119.png",
    description:"World Car of the Year 2025. El eléctrico compacto más premiado del mundo.",
    specs:{ Motor:"Eléctrico 215 hp", Autonomía:"Hasta 555 km", Transmisión:"Automática (1 vel)", Combustible:"Eléctrico", Batería:"64.2 – 88.1 kWh", Carrocería:"SUV Compacto EV", Carga:"CCS 1", Airbags:"6" }
  },
  {
    name:"Kia Niro Híbrido", year:"2026", category:"Híbrido", tag:"Híbrido", price:120990000,
    img:"https://cdn.kia.com.co/Home_NIRO_c51d7b4bb1.png",
    description:"La elección inteligente. SUV híbrido con el balance perfecto entre eficiencia y confort.",
    specs:{ Motor:"1.6L + Motor Eléctrico", Potencia:"141 hp (comb.)", Transmisión:"Automática DCT", Combustible:"Híbrido", Tracción:"Delantera", Carrocería:"SUV Compacto", Puertas:"5", Airbags:"6" }
  },
  {
    name:"Kia Sportage", year:"2026", category:"SUV", tag:"Gasolina", price:128990000,
    img:"https://cdn.kia.com.co/New_Sportage_Gray_para_miniatura_f2975e922a.png",
    description:"El SUV más icónico de KIA. Diseño audaz y gran equipamiento en cada versión.",
    specs:{ Motor:"2.0L / 1.6T Híbrido", Potencia:"149 – 230 hp", Transmisión:"Automática", Combustible:"Gasolina / Híbrido", Tracción:"4x2 / AWD", Carrocería:"SUV Mediano", Puertas:"5", Airbags:"6+" }
  },
  {
    name:"Kia K4", year:"2026", category:"Automóvil", tag:"Gasolina", price:137990000,
    img:"https://cdn.kia.com.co/K4_Gris_Claro_010_355b7547e6.png",
    description:"Sedán premium con diseño inspirado en los EV. Tecnología de vanguardia en cada detalle.",
    specs:{ Motor:"2.0L Atmosférico", Potencia:"147 hp", Transmisión:"Automática 6 vel", Combustible:"Gasolina", Tracción:"Delantera", Carrocería:"Sedán Compacto", Puertas:"4", Airbags:"6+" }
  },
  {
    name:"Kia EV5", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:154990000,
    img:"https://cdn.kia.com.co/Kia_EV_5_lateral_fb7c94e710.png",
    description:"SUV eléctrico mediano con espacio premium y autonomía superior para la familia.",
    specs:{ Motor:"Eléctrico 204 hp", Autonomía:"Hasta 450 km", Transmisión:"Automática (1 vel)", Combustible:"Eléctrico", Batería:"64.2 – 88.1 kWh", Carrocería:"SUV Mediano EV", Carga:"CCS 1 / AC", Airbags:"6+" }
  },
  {
    name:"Kia Sorento", year:"2026", category:"SUV", tag:"Gasolina", price:220990000,
    img:"https://cdn.kia.com.co/SORENTO_8836ba88a7.png",
    description:"SUV familiar de 7 puestos con tecnología premium y presencia imponente en la vía.",
    specs:{ Motor:"2.2L Diésel / 1.6T HEV", Potencia:"202 – 230 hp", Transmisión:"Automática 8 vel", Combustible:"Diésel / Híbrido", Tracción:"AWD", Carrocería:"SUV Grande (7 pax)", Puertas:"5", Airbags:"6+" }
  },
  {
    name:"Kia Tasman", year:"2026", category:"Pick-Up", tag:"Diésel", price:229990000,
    img:"https://cdn.kia.com.co/Tasman_pincipal_9272625581.png",
    description:"La primera pick-up de KIA. Robusta, capaz y moderna. Explora una nueva dimensión.",
    specs:{ Motor:"2.2L Turbo Diésel", Potencia:"202 hp", Transmisión:"Automática 8 vel", Combustible:"Diésel", Tracción:"4WD", Carrocería:"Pick-Up", Puertas:"4", Airbags:"6+" }
  },
  {
    name:"Kia EV6", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:251990000,
    img:"https://cdn.kia.com.co/EV_6_Nueva_version_1_656166bcae.png",
    description:"El crossover eléctrico más deportivo de KIA. Diseño audaz y rendimiento excepcional.",
    specs:{ Motor:"Eléctrico 229 – 325 hp", Autonomía:"Hasta 528 km", Transmisión:"Automática (1 vel)", Combustible:"Eléctrico", Batería:"77.4 kWh", Carrocería:"Crossover EV", Carga:"800V Ultra-Fast", Airbags:"7" }
  },
  {
    name:"Kia Carnival Híbrida", year:"2026", category:"Híbrido", tag:"Híbrido", price:269990000,
    img:"https://cdn.kia.com.co/34_deep_chroma_Azul_b75244520a.png",
    description:"Minivan premium de 8 pasajeros con tecnología híbrida. Confort y eficiencia en grande.",
    specs:{ Motor:"1.6T + Motor Eléctrico HEV", Potencia:"245 hp (comb.)", Transmisión:"Automática 6 vel", Combustible:"Híbrido", Tracción:"Delantera", Carrocería:"Van (8 pax)", Puertas:"5", Airbags:"6+" }
  },
  {
    name:"Kia EV9", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:360990000,
    img:"https://cdn.kia.com.co/Kia_EV_9_general_b926b62dd0.png",
    description:"El SUV eléctrico de lujo para 7 pasajeros. La cima de la línea KIA en Colombia.",
    specs:{ Motor:"Eléctrico 160 – 379 hp", Autonomía:"Hasta 563 km", Transmisión:"Automática (1 vel)", Combustible:"Eléctrico", Batería:"99.8 kWh", Carrocería:"SUV Grande EV (7 pax)", Carga:"800V Ultra-Fast", Airbags:"7+" }
  },
];

// ─── HELPERS ──────────────────────────────────────
function fp(n) {
  return "$" + (n / 1_000_000).toFixed(0) + "M";
}

// ─── THEME TOGGLE ─────────────────────────────────
const html = document.documentElement;
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

// ─── FILTER + RENDER CARDS ────────────────────────
let activeCategory = "Todos";

function renderCards(category) {
  const grid = document.getElementById("vehicleGrid");
  const list = category === "Todos" ? VEHICLES : VEHICLES.filter(v => v.category === category);

  grid.innerHTML = list.map((v, i) => `
    <div class="vehicle-card" onclick="openVehicleModal(${VEHICLES.indexOf(v)})">
      <div class="card-tag tag-${v.tag.replace(/\s/g,'-')}">${v.tag}</div>
      <div class="card-img-wrap">
        <img src="${v.img}" alt="${v.name}" loading="lazy" onerror="this.style.display='none'"/>
      </div>
      <div class="card-body">
        <div class="card-meta">${v.category} · ${v.year}</div>
        <div class="card-name">${v.name}</div>
        <div class="card-desc">${v.description}</div>
        <div class="card-footer-row">
          <div>
            <div class="card-price-label">Desde</div>
            <div class="card-price">${fp(v.price)}</div>
          </div>
          <button class="card-cta">Ver ficha</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Filter bar
document.getElementById("filterBar").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  renderCards(activeCategory);
});

// Initial render
renderCards("Todos");

// ─── VEHICLE MODAL ────────────────────────────────
const vehicleModal    = document.getElementById("vehicleModal");
const vehicleModalBox = document.getElementById("vehicleModalBox");

function openVehicleModal(idx) {
  const v = VEHICLES[idx];
  document.getElementById("mSub").textContent   = `${v.category} · ${v.year}`;
  document.getElementById("mTitle").textContent  = v.name;
  document.getElementById("mImg").src            = v.img;
  document.getElementById("mImg").alt            = v.name;
  document.getElementById("mDesc").textContent   = v.description;
  document.getElementById("mPrice").textContent  = fp(v.price);

  // Tag
  const tagEl = document.getElementById("mTag");
  tagEl.className = `modal-tag tag-${v.tag.replace(/\s/g,'-')}`;
  tagEl.textContent = v.tag;

  // Specs
  const specsEl = document.getElementById("mSpecs");
  specsEl.innerHTML = Object.entries(v.specs).map(([k, val]) => `
    <div class="spec-cell">
      <div class="spec-key">${k}</div>
      <div class="spec-val">${val}</div>
    </div>
  `).join("");

  // WA button
  document.getElementById("mWaBtn").onclick = () => {
    const msg = `¡Hola Bryan! Estoy interesado/a en el ${v.name} ${v.year} (desde ${fp(v.price)}). ¿Me puedes ayudar?`;
    openWa(msg);
  };

  vehicleModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeVehicleModal(e) {
  if (e.target === vehicleModal) closeVehicleModalDirect();
}
function closeVehicleModalDirect() {
  vehicleModal.classList.remove("open");
  document.body.style.overflow = "";
}

// ─── WA MENU MODAL ────────────────────────────────
const waModal = document.getElementById("waModal");

function openWa(prefillMsg) {
  // Build options
  const container = document.getElementById("waOptions");
  container.innerHTML = WA_OPTIONS.map(o => `
    <button class="wa-option" onclick="sendWa('${escapeMsg(prefillMsg || o.msg)}')">
      <span class="wa-option-icon">${o.icon}</span>
      <span>${o.label}</span>
      <span class="wa-option-arrow">›</span>
    </button>
  `).join("");

  // If there's a prefill, replace first option label
  if (prefillMsg) {
    // keep all standard options but clicking any → sends prefill
    container.innerHTML = WA_OPTIONS.map(o => `
      <button class="wa-option" onclick="sendWa('${escapeMsg(o.msg)}')">
        <span class="wa-option-icon">${o.icon}</span>
        <span>${o.label}</span>
        <span class="wa-option-arrow">›</span>
      </button>
    `).join("");
  }

  waModal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Close vehicle modal if open
  vehicleModal.classList.remove("open");
}

function escapeMsg(msg) {
  return (msg || "").replace(/'/g, "\\'").replace(/\n/g, " ");
}

function sendWa(msg) {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  closeWaModalDirect();
}

function closeWaModal(e) {
  if (e.target === waModal) closeWaModalDirect();
}
function closeWaModalDirect() {
  waModal.classList.remove("open");
  document.body.style.overflow = "";
}

// ─── ESC KEY ──────────────────────────────────────
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeVehicleModalDirect();
    closeWaModalDirect();
  }
});
