(() => {
  "use strict";

  const RADIO_ENCONTRADO_KM = 100;
  // Puntaje: cada intento vale (puntos por cercanía) × (factor de la ronda). El puntaje del día es el mejor intento.
  const FACTOR_RONDA = [1, 0.85, 0.7, 0.55, 0.4];
  const RONDAS = FACTOR_RONDA.length;
  const ESCALA_KM = 1500;
  const INICIO = new Date(2026, 10, 18); // desafío #1 (meses base 0)

  // ---------- Desafío del día ----------
  function mulberry32(a) {
    return () => {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mezclar(lista, semilla) {
    const rnd = mulberry32(semilla);
    const idx = [...lista];
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  }
  const fechaDelDia = (n) => { const f = new Date(INICIO); f.setDate(f.getDate() + n - 1); return f; };

  // Curva semanal: lunes y martes fácil, miércoles a viernes medio, sábado y domingo difícil.
  const DIFICULTAD_POR_DIA_SEMANA = [3, 1, 1, 2, 2, 2, 3]; // índice = getDay() (0 = domingo)
  const NOMBRE_DIFICULTAD = { 1: "Fácil", 2: "Medio", 3: "Difícil" };
  // Días fijados a mano (el #1 se jugó antes de que existiera la curva).
  const FIJOS = { 1: "Nueva Orleans, EE. UU." };

  // Recorre los días desde el #1: cada día toma el próximo lugar de su dificultad, sin repetir hasta agotar el grupo.
  function lugarDelDia(numero) {
    const grupos = { 1: [], 2: [], 3: [] };
    LUGARES.forEach((l, i) => grupos[l.dificultad].push(i));
    const fijos = Object.fromEntries(Object.entries(FIJOS).map(([d, nombre]) => [d, LUGARES.findIndex((l) => l.nombre === nombre)]));
    const yaFijados = new Set(Object.values(fijos));
    const colas = { 1: [], 2: [], 3: [] }, vueltas = { 1: 0, 2: 0, 3: 0 };
    const recientes = []; // últimos lugares jugados, para no repetirlos al empezar una vuelta nueva
    let elegido = 0;
    for (let d = 1; d <= numero; d++) {
      if (fijos[d] >= 0) elegido = fijos[d];
      else {
        const k = DIFICULTAD_POR_DIA_SEMANA[fechaDelDia(d).getDay()];
        if (!colas[k].length) {
          const disponibles = vueltas[k] === 0 ? grupos[k].filter((i) => !yaFijados.has(i)) : grupos[k];
          const nueva = mezclar(disponibles, 20261118 + 1000 * k + vueltas[k]++);
          const ultimos = new Set(recientes.slice(-14));
          colas[k] = [...nueva.filter((i) => !ultimos.has(i)), ...nueva.filter((i) => ultimos.has(i))];
        }
        elegido = colas[k].shift();
      }
      recientes.push(elegido);
    }
    return LUGARES[elegido];
  }
  function numeroDeHoy() {
    const forzado = parseInt(new URLSearchParams(location.search).get("dia"), 10);
    if (forzado > 0) return forzado;
    const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    return Math.max(0, Math.round((hoy - INICIO) / 864e5)) + 1;
  }
  const numero = numeroDeHoy();
  const lugar = lugarDelDia(numero);

  // ---------- Geografía ----------
  const rad = (g) => (g * Math.PI) / 180;
  function distanciaKm(a, b) {
    const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
    return 2 * 6371 * Math.asin(Math.sqrt(h));
  }
  // Rumbo de brújula (loxodrómico): "hacia el oeste" significa lo que uno espera mirando un mapa.
  function rumbo(a, b) {
    let dLon = rad(b.lon - a.lon);
    if (Math.abs(dLon) > Math.PI) dLon -= Math.sign(dLon) * 2 * Math.PI;
    const dPsi = Math.log(Math.tan(Math.PI / 4 + rad(b.lat) / 2) / Math.tan(Math.PI / 4 + rad(a.lat) / 2));
    return ((Math.atan2(dLon, dPsi) * 180) / Math.PI + 360) % 360;
  }
  const PUNTOS_CARDINALES = ["el norte", "el noreste", "el este", "el sureste", "el sur", "el suroeste", "el oeste", "el noroeste"];
  const cardinal = (b) => PUNTOS_CARDINALES[Math.round(b / 45) % 8];
  function temperatura(km) {
    if (km <= RADIO_ENCONTRADO_KM) return "ok";
    if (km <= 500) return "caliente";
    if (km <= 2000) return "tibio";
    return "frio";
  }
  const EMOJI = { frio: "🟦", tibio: "🟨", caliente: "🟥", ok: "🟩" };
  const ETIQUETA = { frio: "Frío", tibio: "Tibio", caliente: "Caliente", ok: "¡Encontrado!" };
  const km = (n) => Math.round(n).toLocaleString("es-AR");
  const puntosCercania = (d) => d <= RADIO_ENCONTRADO_KM ? 1000 : 1000 * Math.exp(-(d - RADIO_ENCONTRADO_KM) / ESCALA_KM);
  const puntosIntento = (it, i) => Math.round(puntosCercania(it.dist) * FACTOR_RONDA[i]);
  const mejorPuntaje = () => Math.max(0, ...estado.intentos.map(puntosIntento));
  const factorTexto = (i) => "×" + FACTOR_RONDA[i].toLocaleString("es-AR");

  function circulo(centro, radioKm, pasos = 64) {
    const coords = [];
    const d = radioKm / 6371;
    for (let i = 0; i <= pasos; i++) {
      const brg = (2 * Math.PI * i) / pasos;
      const lat1 = rad(centro.lat), lon1 = rad(centro.lon);
      const lat2 = Math.asin(Math.sin(lat1) * Math.cos(d) + Math.cos(lat1) * Math.sin(d) * Math.cos(brg));
      const lon2 = lon1 + Math.atan2(Math.sin(brg) * Math.sin(d) * Math.cos(lat1), Math.cos(d) - Math.sin(lat1) * Math.sin(lat2));
      coords.push([(lon2 * 180) / Math.PI, (lat2 * 180) / Math.PI]);
    }
    return { type: "Feature", geometry: { type: "Polygon", coordinates: [coords] } };
  }

  // ---------- Estado (se guarda por día) ----------
  const CLAVE = `escondite-v2-dia-${numero}`;
  let estado = { intentos: [], terminado: false, encontrado: false };
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE));
    if (guardado && Array.isArray(guardado.intentos)) estado = guardado;
  } catch (_) {}
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (_) {} };

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);
  const fecha = fechaDelDia(numero);
  const puntitos = "●".repeat(lugar.dificultad) + "○".repeat(3 - lugar.dificultad);
  $("dia").innerHTML = `#${numero} · ${fecha.toLocaleDateString("es-AR", { day: "numeric", month: "short" })}
    · <span class="nivel n${lugar.dificultad}">${puntitos} ${NOMBRE_DIFICULTAD[lugar.dificultad]}</span>`;

  // ---------- Mapa ----------
  const map = new maplibregl.Map({
    container: "mapa",
    style: {
      version: 8,
      projection: { type: "globe" },
      sources: {
        sat: {
          type: "raster",
          tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
          tileSize: 256, maxzoom: 19,
          attribution: "Imágenes © Esri, Maxar, Earthstar Geographics"
        }
      },
      layers: [
        { id: "fondo", type: "background", paint: { "background-color": "#070b16" } },
        { id: "sat", type: "raster", source: "sat" }
      ]
    },
    center: [-40, 10], zoom: 1.4, minZoom: 0.8, maxZoom: 7,
    attributionControl: { compact: true }
  });
  window._mapa = map; // usado por las pruebas automáticas
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();

  // El panel tapa parte del globo: corremos el centro visual. Sólo si cambia, para no cortar animaciones.
  function ajustarPadding() {
    if (map.isMoving()) return;
    const panel = $("panel");
    const p = window.innerWidth <= 640
      ? { top: 0, left: 0, right: 0, bottom: panel.offsetHeight }
      : { top: 0, bottom: 0, right: 0, left: panel.offsetWidth + 16 };
    const actual = map.getPadding();
    if (["top", "bottom", "left", "right"].some((k) => Math.abs(actual[k] - p[k]) > 2)) map.setPadding(p);
  }
  map.on("moveend", ajustarPadding);
  window.addEventListener("resize", ajustarPadding);

  function crearPin(clase, texto) {
    const el = document.createElement("div");
    el.className = `pin ${clase}`;
    el.textContent = texto;
    return el;
  }

  let mapaListo = false;
  let pendiente = null; // { lat, lon, marker }
  map.on("click", (e) => {
    if (estado.terminado) return;
    const { lat, lng } = e.lngLat;
    if (!pendiente) {
      pendiente = { marker: new maplibregl.Marker({ element: crearPin("pendiente", estado.intentos.length + 1) }).setLngLat([lng, lat]).addTo(map) };
    } else {
      pendiente.marker.setLngLat([lng, lat]);
    }
    pendiente.lat = lat; pendiente.lon = lng;
    $("arriesgar").disabled = false;
    $("ayuda").textContent = "¿Ahí? Podés mover el pin tocando otro lugar.";
  });

  function dibujarIntento(intento, i) {
    new maplibregl.Marker({ element: crearPin(temperatura(intento.dist), i + 1) })
      .setLngLat([intento.lon, intento.lat]).addTo(map);
  }

  // ---------- Render ----------
  function render() {
    const n = estado.intentos.length;
    const pistasVisibles = estado.terminado ? RONDAS : Math.min(n + 1, RONDAS);

    $("rondas").innerHTML = Array.from({ length: RONDAS }, (_, i) => {
      const it = estado.intentos[i];
      const clase = it ? temperatura(it.dist) : (i === n && !estado.terminado ? "actual" : "");
      return `<div class="ronda ${clase}"></div>`;
    }).join("");

    $("pistas").innerHTML = lugar.pistas.slice(0, pistasVisibles).map((p, i) =>
      `<li class="pista ${i === pistasVisibles - 1 && !estado.terminado ? "nueva" : ""}"><span class="n">${i + 1}</span><span>${p}</span></li>`
    ).join("");

    const ultimo = estado.intentos[n - 1];
    const fb = $("feedback");
    if (ultimo && !estado.terminado) {
      fb.hidden = false;
      fb.innerHTML = `<span class="flecha" style="transform: rotate(${ultimo.rumbo}deg)">⬆</span>
        <span><b>${ETIQUETA[temperatura(ultimo.dist)]}:</b> estás a ${km(ultimo.dist)} km. Probá hacia ${cardinal(ultimo.rumbo)}.
        <span class="pts">Ese intento: ${puntosIntento(ultimo, n - 1)} pts · tu mejor: ${mejorPuntaje()} pts</span></span>`;
    } else fb.hidden = true;

    $("acciones").hidden = estado.terminado;
    $("final").hidden = !estado.terminado;
    if (!estado.terminado) {
      $("arriesgar").textContent = `${n === RONDAS - 1 ? "Último intento" : "Arriesgar acá"} · vale ${factorTexto(n)}`;
      if (!pendiente) $("ayuda").textContent = "Tocá el globo para marcar dónde creés que estoy.";
    } else {
      $("final-titulo").textContent = estado.encontrado ? `¡Me encontraste en la ronda ${n}!` : "No me encontraste, pero sumaste";
      $("final-lugar").textContent = estado.encontrado
        ? `Estaba en ${lugar.nombre.replace(/\.$/, "")}.`
        : `Estaba en ${lugar.nombre.replace(/\.$/, "")}. Tu intento más cercano quedó a ${km(Math.min(...estado.intentos.map((x) => x.dist)))} km.`;
      $("final-puntos").textContent = `${mejorPuntaje()} pts`;
      $("final-detalle").innerHTML = estado.intentos.map((x, i) =>
        `<span>R${i + 1}: ${km(x.dist)} km ${factorTexto(i)} = <b>${puntosIntento(x, i)}</b></span>`).join("");
      $("final-emojis").textContent = estado.intentos.map((x) => EMOJI[temperatura(x.dist)]).join("");
      $("panel").scrollTop = 0;
    }
    requestAnimationFrame(ajustarPadding);
  }

  function revelar(animar) {
    const objetivo = { lat: lugar.lat, lon: lugar.lon };
    const agregar = () => {
      if (map.getSource("zona")) return;
      map.addSource("zona", { type: "geojson", data: circulo(objetivo, RADIO_ENCONTRADO_KM) });
      map.addLayer({ id: "zona-relleno", type: "fill", source: "zona", paint: { "fill-color": "#3ddc84", "fill-opacity": 0.25 } });
      map.addLayer({ id: "zona-borde", type: "line", source: "zona", paint: { "line-color": "#3ddc84", "line-width": 2 } });
      map.addSource("lineas", {
        type: "geojson",
        data: { type: "FeatureCollection", features: estado.intentos.map((x) => ({
          type: "Feature", geometry: { type: "LineString", coordinates: [[x.lon, x.lat], [objetivo.lon, objetivo.lat]] }
        })) }
      });
      map.addLayer({ id: "lineas", type: "line", source: "lineas", paint: { "line-color": "#ffffff", "line-width": 1.5, "line-dasharray": [2, 2], "line-opacity": 0.7 } });
      new maplibregl.Marker({ element: crearPin("objetivo", "★") }).setLngLat([objetivo.lon, objetivo.lat]).addTo(map);
    };
    if (mapaListo) agregar(); else map.once("load", agregar);
    const destino = { center: [objetivo.lon, objetivo.lat], zoom: 3.2 };
    animar ? map.flyTo({ ...destino, duration: 2200 }) : map.jumpTo(destino);
  }

  $("arriesgar").addEventListener("click", () => {
    if (!pendiente || estado.terminado) return;
    const objetivo = { lat: lugar.lat, lon: lugar.lon };
    const intento = {
      lat: pendiente.lat, lon: pendiente.lon,
      dist: distanciaKm(pendiente, objetivo),
      rumbo: rumbo(pendiente, objetivo)
    };
    pendiente.marker.remove(); pendiente = null;
    $("arriesgar").disabled = true;
    estado.intentos.push(intento);
    dibujarIntento(intento, estado.intentos.length - 1);
    if (intento.dist <= RADIO_ENCONTRADO_KM) { estado.encontrado = true; estado.terminado = true; }
    else if (estado.intentos.length >= RONDAS) estado.terminado = true;
    guardar();
    render();
    if (estado.terminado) revelar(true);
  });

  $("compartir").addEventListener("click", async () => {
    const n = estado.intentos.length;
    const linea = `${mejorPuntaje()} pts` + (estado.encontrado ? ` · encontrado en la ronda ${n}` : ` · más cerca: ${km(Math.min(...estado.intentos.map((x) => x.dist)))} km`);
    const url = location.protocol.startsWith("http") ? `\n${location.origin}${location.pathname}` : "";
    const texto = `Escondite #${numero} 🌍\n${estado.intentos.map((x) => EMOJI[temperatura(x.dist)]).join("")} ${linea}${url}`;
    try {
      if (navigator.share && matchMedia("(pointer: coarse)").matches) { await navigator.share({ text: texto }); return; }
      await navigator.clipboard.writeText(texto);
      $("copiado").hidden = false;
    } catch (_) {}
  });

  // ---------- Inicio ----------
  map.on("load", () => {
    mapaListo = true;
    estado.intentos.forEach(dibujarIntento);
    if (estado.terminado) revelar(false);
  });
  render();
})();
