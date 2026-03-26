/* ══════════════════════════════════════════════════
   KIA ADVISOR LANDING — app.js
═══════════════════════════════════════════════════ */

const WA_NUMBER = "573005792210";

// ─── OPCIONES GENERALES DE WHATSAPP ───────────────
const WA_OPTIONS = [
  { icon:"🚗", label:"Cotizar un vehículo",               msg:"¡Hola Bryan! Me gustaría cotizar un vehículo KIA. ¿Me puedes ayudar?" },
  { icon:"💳", label:"Opciones de financiación",           msg:"¡Hola Bryan! Quiero información sobre las opciones de financiación y cuotas disponibles para un KIA." },
  { icon:"💰", label:"Compra de contado",                  msg:"¡Hola Bryan! Estoy interesado/a en comprar un KIA de contado. ¿Qué beneficios y descuentos hay disponibles?" },
  { icon:"🛡️", label:"Garantías y posventa",               msg:"¡Hola Bryan! Quiero saber más sobre la garantía de 7 años / 150.000 km que ofrece KIA." },
  { icon:"📦", label:"Disponibilidad y entrega inmediata", msg:"¡Hola Bryan! ¿Qué modelos KIA tienen disponibles para entrega inmediata?" },
  { icon:"🏎️", label:"Hablar directamente con Bryan",      msg:"¡Hola Bryan Losada! Quisiera hablar contigo directamente sobre los vehículos KIA disponibles." },
];

// ─── FUNCIÓN: MENSAJE WA PERSONALIZADO POR VEHÍCULO ─
function buildVehicleWaMsg(v) {
  const precio = fp(v.price);
  const lineas = [
    `¡Hola Bryan! 👋`,
    ``,
    `Estoy interesado/a en el *${v.name} ${v.year}* y me gustaría recibir una cotización personalizada.`,
    ``,
    `📋 *Información del vehículo:*`,
    `• Modelo: ${v.name} ${v.year}`,
    `• Categoría: ${v.category}`,
    `• Tipo: ${v.tag}`,
    `• Precio de lista desde: *${precio}*`,
    ``,
    `💬 Me gustaría conocer:`,
    `• Precio final con descuentos`,
    `• Opciones de financiación y cuotas`,
    `• Colores y versiones disponibles`,
    `• Tiempo de entrega`,
    ``,
    `¡Quedo atento/a a tu respuesta! 🏎️`,
  ];
  return lineas.join("\n");
}

// ─── CATÁLOGO DE VEHÍCULOS ─────────────────────────
const VEHICLES = [
  {
    name:"Kia Picanto", year:"2026", category:"Automóvil", tag:"Gasolina", price:58990000,
    img:"https://cdn.kia.com.co/Home_PICANTO_2151954d8e.png",
    description:"El compañero perfecto para la ciudad. Ágil, eficiente y cargado de tecnología moderna. Ideal para quienes buscan movilidad inteligente sin renunciar al estilo.",
    specs:{
      "Motor":           "1.0L / 1.2L MPI",
      "Potencia":        "66 – 84 hp",
      "Torque":          "96 – 120 Nm",
      "Transmisión":     "Manual 5 vel / Automática CVT",
      "Combustible":     "Gasolina",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "Hatchback 5 puertas",
      "Largo × Ancho":   "3.595 × 1.595 mm",
      "Altura":          "1.485 mm",
      "Peso":            "970 – 1.020 kg",
      "Capacidad baúl":  "255 litros",
      "Tanque":          "35 litros",
      "Airbags":         "6 airbags",
      "Frenos":          "Discos delanteros / Tambor traseros",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Soluto", year:"2026", category:"Automóvil", tag:"Gasolina", price:69990000,
    img:"https://cdn.kia.com.co/Kia_Soluto_c8cb068fa6.webp",
    description:"Sedán compacto con líneas elegantes y un interior sorprendentemente espacioso. La combinación perfecta de diseño, comodidad y eficiencia para toda la familia.",
    specs:{
      "Motor":           "1.4L MPI DOHC",
      "Potencia":        "100 hp a 6.000 rpm",
      "Torque":          "132 Nm a 4.000 rpm",
      "Transmisión":     "Manual 6 vel / Automática 4 vel",
      "Combustible":     "Gasolina",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "Sedán 4 puertas",
      "Largo × Ancho":   "4.400 × 1.700 mm",
      "Altura":          "1.455 mm",
      "Peso":            "1.085 – 1.115 kg",
      "Capacidad baúl":  "475 litros",
      "Tanque":          "45 litros",
      "Airbags":         "6 airbags",
      "Frenos":          "Discos ventilados delanteros / Tambor traseros",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia K3 Sedán", year:"2026", category:"Automóvil", tag:"Gasolina", price:80990000,
    img:"https://cdn.kia.com.co/Kia_K3_general_24ab8b257a.png",
    description:"El all-new K3 redefine el sedán compacto. Con pantalla dual de 10.25\" y diseño inspirado en los EV de KIA, es el más tecnológico de su segmento.",
    specs:{
      "Motor":           "1.5L Turbo GDi",
      "Potencia":        "158 hp a 5.500 rpm",
      "Torque":          "253 Nm a 1.500 – 4.500 rpm",
      "Transmisión":     "Automática CVT 7 vel IVT",
      "Combustible":     "Gasolina",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "Sedán 4 puertas",
      "Largo × Ancho":   "4.620 × 1.800 mm",
      "Altura":          "1.425 mm",
      "Capacidad baúl":  "502 litros",
      "Tanque":          "50 litros",
      "Pantalla":        "Doble pantalla 10.25\"",
      "Airbags":         "6 airbags + curtina",
      "Frenos":          "Discos ventilados 4 ruedas",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia K3 Cross", year:"2026", category:"Crossover", tag:"Gasolina", price:81990000,
    img:"https://cdn.kia.com.co/Home_K3_CROSS_d433f3dea9.png",
    description:"La versatilidad de un crossover con la eficiencia de un sedán. Mayor altura al piso, rieles en techo y un carácter aventurero que lo diferencia del K3 convencional.",
    specs:{
      "Motor":           "1.5L Turbo GDi",
      "Potencia":        "158 hp a 5.500 rpm",
      "Torque":          "253 Nm a 1.500 – 4.500 rpm",
      "Transmisión":     "Automática CVT 7 vel IVT",
      "Combustible":     "Gasolina",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "Crossover / Hatchback alto",
      "Largo × Ancho":   "4.620 × 1.800 mm",
      "Altura":          "1.485 mm (+60 mm vs K3)",
      "Guard. al suelo": "175 mm",
      "Tanque":          "50 litros",
      "Airbags":         "6 airbags + curtina",
      "Rieles de techo": "Sí",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Sonet", year:"2026", category:"SUV", tag:"Gasolina", price:89990000,
    img:"https://cdn.kia.com.co/Nueva_Sonet_Plata029_c9e475c6eb.png",
    description:"SUV compacto con personalidad audaz y tecnología de clase superior. Pantalla táctil de 10.25\", asistentes de conducción ADAS y acabados premium en un formato urbano ideal.",
    specs:{
      "Motor":           "1.5L MPI",
      "Potencia":        "115 hp a 6.300 rpm",
      "Torque":          "144 Nm a 4.500 rpm",
      "Transmisión":     "Manual 6 vel / Automática IVT",
      "Combustible":     "Gasolina",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "SUV Compacto 5 puertas",
      "Largo × Ancho":   "3.995 × 1.790 mm",
      "Altura":          "1.642 mm",
      "Guard. al suelo": "200 mm",
      "Capacidad baúl":  "392 litros",
      "Tanque":          "45 litros",
      "Pantalla":        "10.25\" táctil",
      "ADAS":            "FCA, LKA, BCW, RCCA",
      "Airbags":         "6 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Stonic", year:"2026", category:"SUV", tag:"Híbrido", price:92990000,
    img:"https://cdn.kia.com.co/Minuatura_nueva_stonic_b12460b5f8.png",
    description:"El SUV urbano con sistema híbrido suave de 48V. Ahora disponible con caja automática DCT de 7 velocidades. Mayor eficiencia, conducción más suave y tecnología de punta.",
    specs:{
      "Motor":           "1.0L T-GDi + Motor eléctrico 48V",
      "Potencia":        "120 hp a 6.000 rpm",
      "Torque":          "172 Nm a 1.500 – 4.000 rpm",
      "Transmisión":     "Automática DCT 7 vel",
      "Combustible":     "Híbrido suave 48V (MHEV)",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "SUV Compacto 5 puertas",
      "Largo × Ancho":   "4.140 × 1.760 mm",
      "Altura":          "1.520 mm",
      "Guard. al suelo": "171 mm",
      "Capacidad baúl":  "352 litros",
      "Tanque":          "45 litros",
      "Pantalla":        "10.25\" + Cluster digital",
      "ADAS":            "FCA, LKA, HBA, BCW",
      "Airbags":         "6 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Seltos", year:"2026", category:"SUV", tag:"Gasolina", price:109990000,
    img:"https://cdn.kia.com.co/Seltos_dd569d37c9.png",
    description:"SUV mediano que combina un frontal poderoso con un interior premium y tecnología ADAS completa. Disponible en versiones Emotion, Vibrant y Zenith con modos de terreno.",
    specs:{
      "Motor":           "1.6L MPI DOHC",
      "Potencia":        "121 hp a 6.300 rpm",
      "Torque":          "151 Nm a 4.200 rpm",
      "Transmisión":     "Manual 6 vel / Automática 6 vel",
      "Combustible":     "Gasolina",
      "Tracción":        "Delantera FWD 4×2",
      "Carrocería":      "SUV Mediano 5 puertas",
      "Largo × Ancho":   "4.315 × 1.800 mm",
      "Altura":          "1.620 mm",
      "Guard. al suelo": "190 mm",
      "Capacidad baúl":  "433 litros",
      "Tanque":          "50 litros",
      "Pantalla":        "10.25\" + Cluster 10.25\"",
      "Modos terreno":   "Normal / Barro / Arena (Zenith)",
      "Airbags":         "6 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia EV3", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:119990000,
    img:"https://cdn.kia.com.co/Foto_para_home_Photoroom_8d33e77119.png",
    description:"World Car of the Year 2025. El SUV eléctrico compacto más premiado del planeta. Con hasta 555 km de autonomía, carga ultra-rápida y tecnología de los EV más avanzados de KIA.",
    specs:{
      "Motor eléctrico":  "215 hp (160 kW)",
      "Torque":           "310 Nm",
      "Autonomía WLTP":   "Hasta 555 km (Wind)",
      "Batería Light":    "64.2 kWh / 400 km",
      "Batería Wind":     "88.1 kWh / 555 km",
      "Carga rápida DC":  "100 kW (CCS 1) — 10→80% en ~35 min",
      "Carga AC":         "11 kW (Tipo 2)",
      "Transmisión":      "Automática 1 velocidad",
      "Tracción":         "Delantera FWD",
      "Carrocería":       "SUV Compacto 5 puertas",
      "Largo × Ancho":    "4.300 × 1.850 mm",
      "Guard. al suelo":  "179 mm",
      "Capacidad baúl":   "460 litros",
      "V2L (carga ext.)": "Sí — hasta 3.6 kW",
      "Airbags":          "6 airbags + curtina",
      "Garantía":         "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Niro Híbrido", year:"2026", category:"Híbrido", tag:"Híbrido", price:120990000,
    img:"https://cdn.kia.com.co/Home_NIRO_c51d7b4bb1.png",
    description:"El SUV híbrido de elección racional. Sistema HEV con motor 1.6L + eléctrico en tándem. Consumo récord de segmento, diseño bicolor y tecnología ADAS de serie.",
    specs:{
      "Motor gasolina":  "1.6L GDi — 105 hp",
      "Motor eléctrico": "Motor MG — 44 hp",
      "Potencia total":  "141 hp combinados",
      "Torque total":    "265 Nm combinados",
      "Transmisión":     "Automática DCT 6 vel",
      "Combustible":     "Híbrido completo (HEV)",
      "Batería HV":      "1.32 kWh Li-Polímero",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "SUV Compacto 5 puertas",
      "Largo × Ancho":   "4.420 × 1.825 mm",
      "Capacidad baúl":  "451 litros",
      "Tanque":          "45 litros",
      "Consumo aprox.":  "18 – 20 km/l",
      "Airbags":         "6 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Sportage", year:"2026", category:"SUV", tag:"Gasolina", price:128990000,
    img:"https://cdn.kia.com.co/New_Sportage_Gray_para_miniatura_f2975e922a.png",
    description:"El SUV más icónico y vendido de KIA renovado completamente. Diseño exterior rompedor, cabina digitalizada con pantalla curva de 12.3\" y disponible en versión híbrida AWD.",
    specs:{
      "Motor gasolina":  "2.0L MPI — 149 hp",
      "Motor híbrido":   "1.6L T-GDi HEV — 230 hp",
      "Torque":          "179 – 350 Nm",
      "Transmisión":     "Automática 6 / 6 vel DCT",
      "Combustible":     "Gasolina / Híbrido (HEV)",
      "Tracción":        "FWD 4×2 / AWD (híbrido)",
      "Carrocería":      "SUV Mediano 5 puertas",
      "Largo × Ancho":   "4.515 × 1.865 mm",
      "Altura":          "1.685 mm",
      "Guard. al suelo": "181 mm",
      "Capacidad baúl":  "540 litros",
      "Pantalla":        "12.3\" curva panorámica",
      "ADAS":            "FCA, LKA, SCC, BCW, RCCA, HDA",
      "Airbags":         "6 airbags + cortina",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia K4", year:"2026", category:"Automóvil", tag:"Gasolina", price:137990000,
    img:"https://cdn.kia.com.co/K4_Gris_Claro_010_355b7547e6.png",
    description:"El sedán del futuro, hoy. Comparte plataforma con el Niro pero con motor 2.0L atmosférico, cabina minimalista y pantalla dual curva de 12.3\". Rival directo del Corolla y Mazda 3.",
    specs:{
      "Motor":           "2.0L MPI DOHC",
      "Potencia":        "147 hp a 6.200 rpm",
      "Torque":          "179 Nm a 4.500 rpm",
      "Transmisión":     "Automática 6 velocidades",
      "Combustible":     "Gasolina",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "Sedán Compacto 4 puertas",
      "Largo × Ancho":   "4.620 × 1.800 mm",
      "Altura":          "1.435 mm",
      "Capacidad baúl":  "502 litros",
      "Tanque":          "50 litros",
      "Pantalla":        "12.3\" dual curva + HUD",
      "ADAS":            "FCA, LKA, SCC, BCW, RCCW",
      "Airbags":         "6 airbags + curtina",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia EV5", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:154990000,
    img:"https://cdn.kia.com.co/Kia_EV_5_lateral_fb7c94e710.png",
    description:"SUV eléctrico mediano diseñado para la familia moderna. Amplio espacio para 5 pasajeros, techo panorámico de serie, V2L para cargar dispositivos y hasta 450 km de autonomía.",
    specs:{
      "Motor eléctrico":  "204 hp (150 kW)",
      "Torque":           "255 Nm",
      "Autonomía WLTP":   "Hasta 450 km",
      "Batería Light":    "64.2 kWh",
      "Batería Wind":     "88.1 kWh",
      "Carga rápida DC":  "100 kW — 10→80% en ~40 min",
      "Carga AC":         "11 kW",
      "Transmisión":      "Automática 1 velocidad",
      "Tracción":         "Delantera FWD",
      "Carrocería":       "SUV Mediano 5 puertas",
      "Largo × Ancho":    "4.615 × 1.875 mm",
      "Capacidad baúl":   "558 litros",
      "Techo panorámico": "De serie",
      "V2L":              "Sí — 3.6 kW",
      "Airbags":          "6 airbags + curtina",
      "Garantía":         "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Sorento", year:"2026", category:"SUV", tag:"Gasolina", price:220990000,
    img:"https://cdn.kia.com.co/SORENTO_8836ba88a7.png",
    description:"El SUV familiar de referencia en KIA. 7 pasajeros en 3 filas, tracción AWD, sistema de sonido Meridian y un paquete ADAS entre los más completos del mercado colombiano.",
    specs:{
      "Motor diésel":    "2.2L CRDi — 202 hp",
      "Motor híbrido":   "1.6L T-GDi HEV — 230 hp",
      "Torque":          "441 – 350 Nm",
      "Transmisión":     "Automática 8 velocidades",
      "Combustible":     "Diésel / Híbrido (HEV)",
      "Tracción":        "AWD inteligente",
      "Carrocería":      "SUV Grande 5 puertas — 7 pax",
      "Largo × Ancho":   "4.810 × 1.900 mm",
      "Altura":          "1.700 mm",
      "Capacidad baúl":  "175 – 616 litros",
      "Tanque":          "67 litros",
      "Pantalla":        "12.3\" + Cluster 12.3\"",
      "Sonido":          "Meridian 12 parlantes",
      "ADAS":            "FCA, LKA, SCC, BCW, HDA, AEB, FHCA",
      "Airbags":         "7 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Tasman", year:"2026", category:"Pick-Up", tag:"Diésel", price:229990000,
    img:"https://cdn.kia.com.co/Tasman_pincipal_9272625581.png",
    description:"La primera pick-up de KIA conquista Colombia. Construcción ladder frame, tracción 4WD con bloqueo de diferencial, platón de acero galvanizado y tecnología ADAS de SUV premium.",
    specs:{
      "Motor":           "2.2L CRDi Turbo Diésel",
      "Potencia":        "202 hp a 3.800 rpm",
      "Torque":          "441 Nm a 1.750 – 2.750 rpm",
      "Transmisión":     "Automática 8 velocidades",
      "Combustible":     "Diésel",
      "Tracción":        "4WD — Hi/Lo + bloqueo diferencial",
      "Carrocería":      "Pick-Up doble cabina",
      "Largo × Ancho":   "5.270 × 1.930 mm",
      "Altura":          "1.855 mm",
      "Guard. al suelo": "228 mm",
      "Platón":          "1.470 × 1.135 mm",
      "Carga útil":      "900 kg",
      "Capacidad arrastre": "3.500 kg",
      "Pantalla":        "12.3\" dual",
      "Airbags":         "6 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia EV6", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:251990000,
    img:"https://cdn.kia.com.co/EV_6_Nueva_version_1_656166bcae.png",
    description:"El crossover eléctrico más deportivo y premiado de KIA. Arquitectura 800V para carga ultra-rápida, aceleración 0-100 en 5.1s, diseño GT Line y plataforma E-GMP de última generación.",
    specs:{
      "Motor GT Line":   "229 hp (168 kW) RWD",
      "Motor AWD":       "325 hp (239 kW) AWD",
      "Torque":          "350 – 605 Nm",
      "0 – 100 km/h":    "5.1 s (AWD)",
      "Velocidad máx.":  "185 km/h",
      "Autonomía WLTP":  "Hasta 528 km (RWD)",
      "Batería":         "77.4 kWh",
      "Carga rápida":    "800V — 18 min (10→80%) a 240 kW",
      "Carga AC":        "11 kW",
      "Tracción":        "RWD / AWD",
      "Carrocería":      "Crossover EV 5 puertas",
      "Largo × Ancho":   "4.695 × 1.890 mm",
      "V2L":             "Sí — 3.6 kW",
      "Pantalla":        "12\" + Cluster 12\"",
      "Airbags":         "7 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia Carnival Híbrida", year:"2026", category:"Híbrido", tag:"Híbrido", price:269990000,
    img:"https://cdn.kia.com.co/34_deep_chroma_Azul_b75244520a.png",
    description:"La minivan premium más completa de KIA, ahora con tecnología híbrida. 8 pasajeros en configuración ejecutiva, puertas eléctricas corredizas, sonido Bose y autonomía mejorada.",
    specs:{
      "Motor gasolina":  "1.6L T-GDi — 180 hp",
      "Motor eléctrico": "90 hp",
      "Potencia total":  "245 hp combinados",
      "Torque total":    "350 Nm combinados",
      "Transmisión":     "Automática 6 velocidades",
      "Combustible":     "Híbrido completo (HEV)",
      "Batería HV":      "1.49 kWh Li-Polímero",
      "Tracción":        "Delantera FWD",
      "Carrocería":      "Minivan 5 puertas — 8 pax",
      "Largo × Ancho":   "5.155 × 1.995 mm",
      "Altura":          "1.755 mm",
      "Puertas traseras":"Corredizas eléctricas",
      "Sonido":          "Bose 12 parlantes",
      "Pantalla":        "12.3\" + Cluster 12.3\"",
      "Airbags":         "7 airbags",
      "Garantía":        "7 años o 150.000 km",
    }
  },
  {
    name:"Kia EV9", year:"2026", category:"Eléctrico", tag:"Eléctrico", price:360990000,
    img:"https://cdn.kia.com.co/Kia_EV_9_general_b926b62dd0.png",
    description:"La cima absoluta de la línea KIA. SUV eléctrico de 7 pasajeros con arquitectura 800V, 563 km de autonomía, diseño de cabina del futuro y el paquete tecnológico más avanzado jamás ofrecido en Colombia.",
    specs:{
      "Motor RWD":        "160 hp (115 kW)",
      "Motor AWD":        "379 hp (279 kW)",
      "Torque":           "350 – 700 Nm",
      "0 – 100 km/h":     "5.3 s (AWD)",
      "Autonomía WLTP":   "Hasta 563 km (RWD)",
      "Batería":          "99.8 kWh",
      "Carga rápida":     "800V — 24 min (10→80%) a 240 kW",
      "Carga AC":         "11 kW",
      "Tracción":         "RWD / AWD",
      "Carrocería":       "SUV Grande EV — 7 pax (3 filas)",
      "Largo × Ancho":    "5.010 × 1.980 mm",
      "Altura":           "1.755 mm",
      "Capacidad baúl":   "333 – 2.318 litros",
      "V2L / V2H / V2G":  "Sí — 3.68 kW",
      "Pantalla":         "12\" + Cluster 12\" + HUD AR",
      "Sonido":           "Meridian 14 parlantes",
      "Airbags":          "7 airbags + cortina",
      "Garantía":         "7 años o 150.000 km",
    }
  },
];

// ─── HELPERS ──────────────────────────────────────
function fp(n) {
  return "$" + (n / 1_000_000).toFixed(0) + "M";
}

// ─── THEME TOGGLE ─────────────────────────────────
const html = document.documentElement;
document.getElementById("themeToggle").addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

// ─── FILTER + RENDER CARDS ────────────────────────
let activeCategory = "Todos";

function renderCards(category) {
  const grid = document.getElementById("vehicleGrid");
  const list = category === "Todos" ? VEHICLES : VEHICLES.filter(v => v.category === category);

  grid.innerHTML = list.map(v => `
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

document.getElementById("filterBar").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  renderCards(activeCategory);
});

renderCards("Todos");

// ─── VEHICLE MODAL ────────────────────────────────
const vehicleModal = document.getElementById("vehicleModal");

function openVehicleModal(idx) {
  const v = VEHICLES[idx];

  document.getElementById("mSub").textContent  = `${v.category} · ${v.year}`;
  document.getElementById("mTitle").textContent = v.name;
  document.getElementById("mImg").src           = v.img;
  document.getElementById("mImg").alt           = v.name;
  document.getElementById("mDesc").textContent  = v.description;
  document.getElementById("mPrice").textContent = fp(v.price);

  const tagEl = document.getElementById("mTag");
  tagEl.className   = `modal-tag tag-${v.tag.replace(/\s/g,'-')}`;
  tagEl.textContent = v.tag;

  // Specs completas
  document.getElementById("mSpecs").innerHTML = Object.entries(v.specs).map(([k, val]) => `
    <div class="spec-cell">
      <div class="spec-key">${k}</div>
      <div class="spec-val">${val}</div>
    </div>
  `).join("");

  // Botón WA con mensaje personalizado para este vehículo
  document.getElementById("mWaBtn").onclick = () => {
    openWaWithVehicle(v);
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

// ─── WA: abrir con vehículo específico ────────────
// Muestra el sheet con un primer botón destacado para cotizar ESE vehículo
// + las opciones generales debajo
function openWaWithVehicle(v) {
  const vehicleMsg = buildVehicleWaMsg(v);

  const container = document.getElementById("waOptions");
  container.innerHTML = `
    <!-- Opción destacada: cotizar este vehículo -->
    <button class="wa-option wa-option-highlight" onclick="sendWa('${escapeMsg(vehicleMsg)}')">
      <span class="wa-option-icon">🚗</span>
      <div class="wa-option-text">
        <span class="wa-option-label">Cotizar el ${v.name} ${v.year}</span>
        <span class="wa-option-sub">Precio desde ${fp(v.price)} · Mensaje pre-armado</span>
      </div>
      <span class="wa-option-arrow">›</span>
    </button>
    <div class="wa-divider">o elige otra consulta</div>
    ${WA_OPTIONS.map(o => `
      <button class="wa-option" onclick="sendWa('${escapeMsg(o.msg)}')">
        <span class="wa-option-icon">${o.icon}</span>
        <span>${o.label}</span>
        <span class="wa-option-arrow">›</span>
      </button>
    `).join("")}
  `;

  document.getElementById("waModal").classList.add("open");
  document.body.style.overflow = "hidden";
  vehicleModal.classList.remove("open");
}

// ─── WA: abrir menú general (sin vehículo) ────────
function openWa(prefillMsg) {
  const container = document.getElementById("waOptions");
  container.innerHTML = WA_OPTIONS.map(o => `
    <button class="wa-option" onclick="sendWa('${escapeMsg(prefillMsg || o.msg)}')">
      <span class="wa-option-icon">${o.icon}</span>
      <span>${o.label}</span>
      <span class="wa-option-arrow">›</span>
    </button>
  `).join("");

  document.getElementById("waModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function escapeMsg(msg) {
  return (msg || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
}

// ─── FLUJO NOMBRE → WHATSAPP ──────────────────────
// pendingMsg guarda el mensaje hasta que el usuario confirme su nombre
let pendingMsg = "";

// Llamado desde los botones de opciones WA y de cotización de vehículo
// En vez de abrir WA directo, abre el modal de nombre
function sendWa(msg) {
  // Restaurar saltos de línea
  pendingMsg = (msg || "").replace(/\\n/g, "\n");

  // Cerrar sheets anteriores
  document.getElementById("waModal").classList.remove("open");

  // Abrir modal de nombre
  document.getElementById("nameModal").classList.add("open");
  document.body.style.overflow = "hidden";

  // Focus al input con pequeño delay para animación
  setTimeout(() => {
    const inp = document.getElementById("nameInput");
    inp.value = "";
    inp.focus();
  }, 120);
}

// Confirmar nombre y disparar WhatsApp
function confirmName(skip) {
  const rawName = document.getElementById("nameInput").value.trim();
  const name    = (!skip && rawName.length > 0) ? rawName : null;

  // Inyectar nombre en el mensaje
  let finalMsg = pendingMsg;
  if (name) {
    // Reemplaza el saludo genérico por uno personalizado
    finalMsg = finalMsg
      .replace("¡Hola Bryan! 👋", `¡Hola Bryan! 👋 Soy *${name}*`)
      .replace("¡Hola Bryan!", `¡Hola Bryan! Soy *${name}*`);

    // Si el mensaje no tiene ese patrón (opciones genéricas), lo prepend
    if (!finalMsg.includes(name)) {
      finalMsg = `Mi nombre es *${name}*.\n\n` + finalMsg;
    }
  }

  closeNameModalDirect();
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(finalMsg)}`, "_blank");
}

function closeNameModal(e) {
  if (e.target === document.getElementById("nameModal")) closeNameModalDirect();
}
function closeNameModalDirect() {
  document.getElementById("nameModal").classList.remove("open");
  document.body.style.overflow = "";
  pendingMsg = "";
}

function closeWaModal(e) {
  if (e.target === document.getElementById("waModal")) closeWaModalDirect();
}
function closeWaModalDirect() {
  document.getElementById("waModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeVehicleModalDirect();
    closeWaModalDirect();
    closeNameModalDirect();
  }
});