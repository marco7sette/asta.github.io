// ============================================================
// Asta del Mobile — React SPA  v31 (GitHub preview build)
// ============================================================
// Nota: le immagini del Genio (base64) sono sostituite con
// URL placeholder per mantenere il file sotto 1 MB e garantire
// la syntax highlight nel viewer di GitHub.
// Per il build completo usare asta_v30.jsx (con base64 inline).
// ============================================================

import React, { useMemo, useState, useEffect, useRef, useContext, createContext, useCallback } from "react";

const IMGS = {
  "hero":         "https://www.astadelmobile.it/Images/GalleryHP/2-divani-e-poltrone.webp",
  "tile_cucina":  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "tile_living":  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  "tile_notte":   "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  "tile_bagno":   "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  "stock1":       "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80",
  "stock2":       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  "stock3":       "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  "stock4":       "https://images.unsplash.com/photo-1617104678098-de229db51175?w=700&q=80",
  "stock5":       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
  "c_cucina_mod": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  "c_cucina_lin": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "c_cucina_iso": "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&q=80",
  "c_cucina_cla": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
  "c_cucina_ang": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&q=80",
  "c_cucina_pen": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=700&q=80",
  "c_div_lin":    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  "c_div_ang":    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&q=80",
  "c_div_rel":    "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=700&q=80",
  "c_div_let":    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80",
  "c_div_pe2":    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80",
  "c_zg_parete":  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=700&q=80",
  "c_zg_madia":   "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  "c_tav_all":    "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=700&q=80",
  "c_tav_des":    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80",
  "c_tav_mar":    "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=700&q=80",
  "c_tav_rot":    "https://images.unsplash.com/photo-1617104678098-de229db51175?w=700&q=80",
  "c_sed_1":      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=700&q=80",
  "c_sed_2":      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=700&q=80",
  "c_sed_3":      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=700&q=80",
  "c_sed_4":      "https://images.unsplash.com/photo-1503602642458-232111445657?w=700&q=80",
  "c_let_1":      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
  "c_ill_1":      "https://images.unsplash.com/photo-1513506003901-1e6a35f5edcc?w=700&q=80",
  "c_comp_1":     "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&q=80",
  "c_comp_2":     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80",
  "proj1":        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "proj2":        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  "proj3":        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
  "proj4":        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80",
  "proj5":        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  "proj6":        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&q=80",
  "srv_rilievo":  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
  "srv_prog":     "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=700&q=80",
  "srv_consegna": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  "srv_montaggio":"https://www.romanobranchetti.it/img/falegnameria5s-new.jpg",
  "srv_finanz":   "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
  "loghi":        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "amb_cucina":   "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  "amb_soggiorno":"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  "amb_camera":   "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
  "amb_camerette":"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  "amb_bagno":    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80",
  "amb_complementi":"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&q=80",
  "promo1":       "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  "promo2":       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  "promo3":       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
  "promo4":       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "promo5":       "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=700&q=80",
  "promo6":       "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&q=80",
  "promo7":       "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80",
  "promo8":       "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80",
  "logo_supplier":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=60",
  "logo_asta":    "https://www.astadelmobile.it/Images/logo-asta-nero-web.png",
  "faq_costo_casa":   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "faq_costo_cucina": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  "faq_durata":       "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
  "faq_laminato":     "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&q=80",
  "amb_divani":       "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
  "amb_tavoli":       "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80",
  "amb_illuminazione":"https://images.unsplash.com/photo-1513506003901-1e6a35f5edcc?w=800&q=80",
  "amb_camerette":    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "genio":            "https://www.astadelmobile.it/Images/genio.png",
  "genio2":           "https://www.astadelmobile.it/Images/genio2.png",
  "genio3":           "https://www.astadelmobile.it/Images/genio3.png",
  "genioPromo":       "https://www.astadelmobile.it/Images/genioPromo.png",
};

function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w < 640, isTablet: w < 1024, w };
}

// FASCE: verde=Media, blu=Alta, viola=Lux
const TIERS = {
  media: { label:"Prodotti Selezionati", color:"#27ae60", bg:"#eafaf1" },
  alta:  { label:"Prodotti dell'Atelier",  color:"#2980b9", bg:"#dbeeff" },
  lux:   { label:"Prodotti Esclusivi",   color:"#7d3c98", bg:"#f3e8ff" },
  gold:  { label:"Prodotti Artigianali",  color:"#e0bf3a", bg:"#fefce8",
            gradient:"#e0bf3a",
            textColor:"#ffffff" }
};

const SUPPLIERS = {
  cucine:       ["Home Cucine","Aran Cucine","Mobilturi","Ciao Cucine","Net Cucine","IMAB"],
  soggiorno:    ["GSG Mobili","HOMES","MISTRAL","Santa Lucia Mobili","ORME","Colombini"],
  giornoNotte:  ["GSG Mobili","HOMES","MISTRAL","Santa Lucia Mobili","San Martino Mobili","ORME","Colombini","IMAB"],
  bagni:        ["COMPAB","SAVINI"],
  divaniLetti:  ["SAMOA","EGO ITALIANO","CRIVELLARO","TANCREDI","COTTA","Sarmog","Savini"],
  materassi:    ["SUPREMA","MTA GROUP"],
  lettiFerro:   ["ALES (Florentia Bed)"],
  tavoliSedie:  ["ZAMAGNA","LA SEGGIOLA","TEMPESTA"],
  complementi:  ["CICIRIELLO","BIZZOTTO","Ambienti Glamour"],
  illuminazione:["LODES","IDEAL LUX","PERENZ"]
};

const BRAND_TIER = {
  "Net Cucine":"media", Mobilturi:"media", "Home Cucine":"media",
  "Aran Cucine":"alta", "Ciao Cucine":"media", IMAB:"media",
  "GSG Mobili":"media", HOMES:"media", MISTRAL:"media",
  "Santa Lucia Mobili":"media", "San Martino Mobili":"media",
  ORME:"lux", Colombini:"media", COMPAB:"alta", SAVINI:"media",
  SAMOA:"alta", "EGO ITALIANO":"lux", CRIVELLARO:"media",
  TANCREDI:"media", COTTA:"media", SUPREMA:"media", "MTA GROUP":"media", "Sarmog":"media", "Savini":"media", "TANCREDI":"alta", "COTTA":"alta",
  "ALES (Florentia Bed)":"lux", ZAMAGNA:"alta", "LA SEGGIOLA":"media",
  TEMPESTA:"media", CICIRIELLO:"media", BIZZOTTO:"lux",
  "Ambienti Glamour":"lux", LODES:"lux", "IDEAL LUX":"media", PERENZ:"media"
};

// ─── BRAND → LOGO URL ─────────────────────
const BRAND_LOGO_MAP = {
  "Net Cucine":        "https://www.coreaarredamenti.it/wp-content/uploads/2020/09/anteprima.jpg",
  "Aran Cucine":       "https://www.confimprese.it/wp-content/uploads/2018/09/Logo_AranCucine_antracite-1.jpg",
  "Santa Lucia":       "https://www.progettocasaid.it/wp-content/uploads/2018/01/logo-santalucia-mobili-progetto-casa-id.jpg",
  "Santa Lucia Mobili":"https://www.progettocasaid.it/wp-content/uploads/2018/01/logo-santalucia-mobili-progetto-casa-id.jpg",
  "CRIVELLARO":        "https://bianchi-casa.it/wp-content/uploads/Crivellaro.svg",
  "CRIVELLARO salotti":"https://bianchi-casa.it/wp-content/uploads/Crivellaro.svg",
  "Ideal Lux":         "https://arredamentibrambilla.com/images/brambilla/grafica/loghiaziende/white/ideallux.png",
  "IDEAL LUX":         "https://arredamentibrambilla.com/images/brambilla/grafica/loghiaziende/white/ideallux.png",
  "Zamagna":           "https://www.rinascimentomobili.it/media/magedelight/shopbyattribute/attributelogo/zamagna.jpeg",
  "ZAMAGNA":           "https://www.rinascimentomobili.it/media/magedelight/shopbyattribute/attributelogo/zamagna.jpeg",
  "Florentia Bed":     "https://www.negriarredamento.com/pub/brand/Brand_111_big.jpg",
  "ALES (Florentia Bed)":"https://www.negriarredamento.com/pub/brand/Brand_111_big.jpg",
  "MISTRAL":           "https://marchiarredamenti.it/wp-content/uploads/2024/11/logo_mistral-1.webp",
  "LODES":             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9ZsF4ExF-HT0MS3dIw4UXZlnEVI3DDSF6Q&s",
  "Perenz":            "https://infinity.perenz.it/infinity/dms/PerenzStore2023/Gallery/perenz-illumina-logo.png",
  "PERENZ":            "https://infinity.perenz.it/infinity/dms/PerenzStore2023/Gallery/perenz-illumina-logo.png",
  "Ciao Cucine":       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OgPhZtV8WCr62t9eciyvZ2YcGPUxendMhw&s",
  "La Seggiola":       "https://yt3.googleusercontent.com/ytc/AIdro_kiIhOePwJ3_r2Dlfv-vN7eXnbRyncozFkorHJJ4Nf43A=s900-c-k-c0x00ffffff-no-rj",
  "LA SEGGIOLA":       "https://yt3.googleusercontent.com/ytc/AIdro_kiIhOePwJ3_r2Dlfv-vN7eXnbRyncozFkorHJJ4Nf43A=s900-c-k-c0x00ffffff-no-rj",
  "Mobilturi":         "https://www.mobilturi.it/wp-content/uploads/2019/07/cropped-mobilturi-logo-2-e1566285998294.png",
  "GSG Mobili":        "https://www.arredamentibuzzanca.com/wp-content/uploads/2015/04/logo-giessegi2.jpg",
  "ORME":              "https://www.ormedesign.it/wp-content/themes/orme/images/logo.png",
  "SAMOA":             "https://www.progettocasaid.it/wp-content/uploads/2018/01/logo-samoa-divani-e-imbottiti-progetto-casa-id.jpg",
  "EGO ITALIANO":      "https://www.egoitaliano.com/wp-content/uploads/2019/03/logo-ego.png",
  "Colombini":         "https://www.pignoloni.it/wp-content/uploads/2018/08/logo-colombini-pignoloni.jpg",
  "Bizzotto":          "https://magazine.bizzotto.com/wp-content/uploads/2021/08/bizzotto.png",
  "BIZZOTTO":          "https://magazine.bizzotto.com/wp-content/uploads/2021/08/bizzotto.png",
  "IMAB":              "https://www.imab.com/wp-content/themes/wordpress-bootstrap-master/images/logo-IMAB-group-spa.png",
  "EGO ITALIANO":      "https://www.egoitaliano.com/wp-content/uploads/2019/03/logo-ego.png",
  "Home Cucine":       "https://play-lh.googleusercontent.com/90sFpiwb0enrybneYd3vbmQ6CpBJcqMZlCY4odslIEtK9du04olQ9QbXfQQc5SD07TA",
  "Sarmog":            "https://www.eurobrico.com/media/0qndxwzc/progetto-senza-titolo-2026-01-05t123136080.png",
  "TANCREDI":          "https://www.tancredisalotti.it/images/Immagini_Sito/logo_completo_nero.png",
  "Tancredi":          "https://www.tancredisalotti.it/images/Immagini_Sito/logo_completo_nero.png",
  "COTTA":             "https://cotta.li/wp-content/uploads/2020/02/cropped-Logo-COTTA-RGB-0_0_0-1.jpg",
  "Cotta":             "https://cotta.li/wp-content/uploads/2020/02/cropped-Logo-COTTA-RGB-0_0_0-1.jpg",
  "San Martino Mobili":"https://www.smartino.it/wp-content/themes/smartino25/images/logo.png",
  "SUPREMA":           "https://www.supremasrl.it/logo/LOGO-SUPREMA.png",
  "Suprema":           "https://www.supremasrl.it/logo/LOGO-SUPREMA.png",
  "Savini":            "https://www.savinisrl.it/wp-content/uploads/2023/05/savini-srl-logo.png",
  "SAVINI":            "https://www.savinisrl.it/wp-content/uploads/2023/05/savini-srl-logo.png",
};

// ─── BRAND → CATEGORIA PRINCIPALE ─────────
// (per assegnare brand coerente con il prodotto)
const BRAND_BY_CATEGORY = {
  "Cucine":       ["Home Cucine","Aran Cucine","Mobilturi","Ciao Cucine","Net Cucine","IMAB"],
  "Divani":       ["SAMOA","EGO ITALIANO","CRIVELLARO","TANCREDI","COTTA","Florentia Bed","MISTRAL"],
  "Soggiorno":    ["GSG Mobili","MISTRAL","Santa Lucia Mobili","HOMES","ORME","Colombini"],
  "Zona Giorno":  ["GSG Mobili","MISTRAL","Santa Lucia Mobili","ORME","Colombini","IMAB"],
  "Zona Notte":   ["GSG Mobili","Santa Lucia Mobili","ORME","Colombini","IMAB","Florentia Bed"],
  "Tavoli & Sedie":["Zamagna","La Seggiola"],
  "Bagni":        ["IMAB"],
  "Materassi":    ["IMAB"],
  "Camerette":    ["Colombini","IMAB"],
  "Complementi":  ["Bizzotto","EGO ITALIANO","Sarmog","Savini"],
  "Illuminazione":["LODES","Ideal Lux","Perenz"],
};

function getBrandForProduct(category, id) {
  const pool = BRAND_BY_CATEGORY[category] || Object.keys(BRAND_LOGO_MAP);
  return pool[id % pool.length];
}

const AMBIENTI = [
  { name:"Cucina", key:"cucina", img:IMGS.tile_cucina,
    categories:[{ name:"Cucine", subs:["Lineari","Angolari","Con isola","Classiche","Moderne"], brands:SUPPLIERS.cucine }]
  },
  { name:"Living", key:"living", img:IMGS.tile_living,
    categories:[
      { name:"Soggiorno",      subs:["Pareti TV","Madie","Librerie","Soggiorni completi"], brands:SUPPLIERS.soggiorno },
      { name:"Zona Giorno",    subs:["Pareti TV","Madie","Librerie","Soggiorni completi"], brands:SUPPLIERS.giornoNotte },
      { name:"Divani",         subs:["Lineari","Angolari","Relax","Divani letto"],         brands:SUPPLIERS.divaniLetti },
      { name:"Tavoli & Sedie", subs:["Tavoli allungabili","Sedie","Tavoli design"],        brands:SUPPLIERS.tavoliSedie },
      { name:"Illuminazione",  subs:["Sospensioni","Plafoniere","Applique","Lampade"],     brands:SUPPLIERS.illuminazione },
      { name:"Complementi",    subs:["Outdoor","Decor","Tappeti","Consolle"],              brands:SUPPLIERS.complementi }
    ]
  },
  { name:"Notte", key:"notte", img:IMGS.tile_notte,
    categories:[
      { name:"Zona Notte", subs:["Letti","Armadi","Comodini","Camere complete"], brands:SUPPLIERS.giornoNotte },
      { name:"Letti",      subs:["Imbottiti","Contenitore","Ferro battuto"],     brands:[...SUPPLIERS.divaniLetti,...SUPPLIERS.lettiFerro] },
      { name:"Materassi",  subs:["Memory","Molle","Ibridi"],                     brands:SUPPLIERS.materassi }
    ]
  },
  { name:"Bagno", key:"bagno", img:IMGS.tile_bagno,
    categories:[{ name:"Bagni", subs:["Mobili bagno","Lavabi","Specchi","Colonne"], brands:SUPPLIERS.bagni }]
  }
];

const CATALOG_AMBS = [
  { key:"cucina",       label:"Cucina",         row:1, img:"https://www.astadelmobile.it/Images/hp-cucine-4.webp" },
  { key:"soggiorno",    label:"Soggiorno",      row:1, img:"https://www.astadelmobile.it/Images/hpzona-giorno.webp" },
  { key:"divani",        label:"Divani",          row:1, img:"https://www.astadelmobile.it/Images/hp-divani.webp" },
  { key:"camera",       label:"Camera",         row:1, img:"https://www.astadelmobile.it/Images/hp-zona-notte-2.webp" },
  { key:"bagno",        label:"Bagno",          row:1, img:"https://www.astadelmobile.it/Images/hp-bagno.webp" },
  { key:"tavoliSedie",  label:"Tavoli & Sedie", row:2, img:"https://www.astadelmobile.it/Images/hp-tavolo-2.webp" },
  { key:"materassi",    label:"Materassi",      row:2, img:"https://media.adeo.com/mkp/b33a5d51fb917a02be9f1253037ca59f/media.jpeg" },
  { key:"camerette",    label:"Camerette",      row:2, img:"https://www.astadelmobile.it/Images/hp-camerette-3.jpg" },
  { key:"complementi",  label:"Complementi",   row:2, img:"https://www.astadelmobile.it/Images/hp-complementi-2.webp" },
  { key:"illuminazione",label:"Illuminazione",  row:2, img:"https://www.ideal-lux.com/assets/products/loc/_webp1k/434392/345291_LOC001_WAVES-3_SP_BIANCO.webp" },
];

const AMB_TO_CATEGORY = {
  cucina:"Cucine", soggiorno:"Soggiorno", divani:"Divani", camera:"Zona Notte",
  camerette:"Camerette", bagno:"Bagni", complementi:"Complementi",
  tavoliSedie:"Tavoli & Sedie", materassi:"Materassi", illuminazione:"Illuminazione",
};

const euro = n => `€${Number(n).toLocaleString("it-IT")}`;
function pickTier(brand) { return TIERS[BRAND_TIER[brand] || "media"]; }
function brandsSorted() {
  const s = new Set();
  Object.values(SUPPLIERS).forEach(a => a.forEach(x => s.add(x)));
  return [...s].sort((a,b) => a.localeCompare(b));
}

const IMG_POOL = {
  "Cucine":        [IMGS.c_cucina_mod,IMGS.c_cucina_lin,IMGS.c_cucina_iso,IMGS.c_cucina_cla,IMGS.c_cucina_ang,IMGS.c_cucina_pen],
  "Divani":        [IMGS.c_div_lin,IMGS.c_div_ang,IMGS.c_div_rel,IMGS.c_div_let,IMGS.c_div_pe2],
  "Zona Giorno":   [IMGS.c_zg_parete,IMGS.c_zg_madia],
  "Tavoli & Sedie":[IMGS.c_tav_all,IMGS.c_tav_des,IMGS.c_tav_mar,IMGS.c_tav_rot],
  "Zona Notte":    [IMGS.c_let_1,IMGS.c_cucina_lin],
  "Letti":         [IMGS.c_let_1],
  "Materassi":     [IMGS.c_let_1],
  "Bagni":         [IMGS.tile_bagno],
  "Illuminazione": [IMGS.c_ill_1,IMGS.c_comp_1],
  "Complementi":   [IMGS.c_comp_1,IMGS.c_comp_2],
};
// Build external image URL from astadelmobile.it
// Pattern: https://www.astadelmobile.it/Images/<descriptor>-<slug>.jpg
// Products already have imgUrl set; this is a fallback helper
const BASE_IMG = "https://www.astadelmobile.it/Images/";
function getProductImg(category, idx) {
  return (IMG_POOL[category] || IMG_POOL["Cucine"])[idx % (IMG_POOL[category]||IMG_POOL["Cucine"]).length];
}

const DISC = [18,25,22,30,15,20,28,12,17,23,27,32,20,15,10,25,18];
const REAL_PRODUCTS = [
  // CUCINE (con immagini reali da astadelmobile.it)
  {id:201,ambiente:"Cucina",category:"Cucine",subcategory:"Con isola",    name:"Bellagio",    brand:"Aran Cucine", price:"€4.890", oldPrice:"€8.150", discount:40, desc:"Rivive il fascino delle tradizioni familiari, con forza materica e personalizzazione totale.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-bellagio-industriale-metallo.webp",availability:"standard"},
  {id:202,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Bijou",       brand:"Aran Cucine", price:"€5.290", oldPrice:"€8.800", discount:40, desc:"Eleganza in vetro bianco lucido, ante in forte spessore con sistema gola.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-Bijou-vetro-bianco-lucido.webp",availability:"standard"},
  {id:203,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Penelope",    brand:"Aran Cucine", price:"€4.690", oldPrice:"€7.800", discount:40, desc:"Qualità costante, design all'avanguardia. Finiture vastissime tra colori e legni.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-penelope-aran-cucine-finachi-in-acciaio.webp",availability:"standard"},
  {id:204,ambiente:"Cucina",category:"Cucine",subcategory:"Classiche",    name:"Ylenia",      brand:"Aran Cucine", price:"€5.490", oldPrice:"€9.150", discount:40, desc:"Country moderno, stile che si rinnova con tinte accattivanti shabby chic.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-ylenia-aran-cucine-shabby-chic.webp",availability:"standard"},
  {id:205,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Volare",      brand:"Aran Cucine", price:"€6.190", oldPrice:"€10.300", discount:40, desc:"Linee tondeggianti e design curvo per cucine di carattere.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-volare-aran-cucine-linee-tondeggianti.webp",availability:"standard"},
  {id:206,ambiente:"Cucina",category:"Cucine",subcategory:"Con isola",    name:"Erika",       brand:"Aran Cucine", price:"€7.490", oldPrice:"€12.490", discount:40, desc:"Cucina con living integrato, composizione living-cucina in unico ambiente.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-erika-aran-cucine-con-living.webp",availability:"standard"},
  {id:207,ambiente:"Cucina",category:"Cucine",subcategory:"Lineari",      name:"Compass",     brand:"Net Cucine",  price:"€3.890", oldPrice:"€6.490", discount:40, desc:"Modello classico lineare con tavolo snack, pratico ed elegante.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-compass-modello-classico-lineare-tavolo-snack.webp",availability:"standard"},
  {id:208,ambiente:"Cucina",category:"Cucine",subcategory:"Lineari",      name:"Sense",       brand:"Net Cucine",  price:"€4.290", oldPrice:"€7.150", discount:40, desc:"Con penisola e tavolo collegato, perfetta per ambienti aperti.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-sense-con-penisola-e-tavolo-collegasto.webp",availability:"standard"},
  {id:209,ambiente:"Cucina",category:"Cucine",subcategory:"Lineari",      name:"Alexandra",   brand:"Net Cucine",  price:"€3.490", oldPrice:"€5.820", discount:40, desc:"Bianca lineare, pura e luminosa. Totalmente ammortizzata.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-alexandra-bianca-lineare.webp",availability:"standard"},
  {id:210,ambiente:"Cucina",category:"Cucine",subcategory:"Lineari",      name:"Jacquelyn",   brand:"Net Cucine",  price:"€3.690", oldPrice:"€6.150", discount:40, desc:"Bianca e bordeaux, contrasto raffinato per cucine di stile.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-jacquelyn-lineare-bordeaux-bianco.webp",availability:"standard"},
  {id:211,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"James",       brand:"Net Cucine",  price:"€4.490", oldPrice:"€7.490", discount:40, desc:"Cucina componibile in marna opaco, elegante e contemporanea.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/james-cucina-componibile-marna-opaco.webp",availability:"standard"},
  {id:212,ambiente:"Cucina",category:"Cucine",subcategory:"Con isola",    name:"Metrica",     brand:"Net Cucine",  price:"€5.890", oldPrice:"€9.820", discount:40, desc:"Con isola e bancone snack, massima funzionalità in design moderno.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-metrica-isola-bancone-snack.webp",availability:"standard"},
  {id:213,ambiente:"Cucina",category:"Cucine",subcategory:"Con isola",    name:"Divina",      brand:"Net Cucine",  price:"€6.290", oldPrice:"€10.490", discount:40, desc:"A isola con tavolo a sbalzo, una composizione unica per spazi ampi.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-divina-a-iscola-e-tavolo-a-sbalzo.webp",availability:"standard"},
  {id:214,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Caprera",     brand:"Ciao Cucine", price:"€4.090", oldPrice:"€6.820", discount:40, desc:"In rovere mielato, calda e naturale, perfetta per l'abitare contemporaneo.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-caprera-rovere-mielato.webp",availability:"standard"},
  {id:215,ambiente:"Cucina",category:"Cucine",subcategory:"Classiche",    name:"Trendy",      brand:"Ciao Cucine", price:"€3.890", oldPrice:"€6.490", discount:40, desc:"Con vetrina, abbina funzionalità e gusto classico moderno.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-trendy-vetrina.webp",availability:"standard"},
  {id:216,ambiente:"Cucina",category:"Cucine",subcategory:"Con isola",    name:"Chic",        brand:"Ciao Cucine", price:"€5.490", oldPrice:"€9.150", discount:40, desc:"Con penisola, design raffinato per cucine dal carattere deciso.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-chic-penisola.webp",availability:"standard"},
  {id:217,ambiente:"Cucina",category:"Cucine",subcategory:"Lineari",      name:"Clara",       brand:"Home Cucine", price:"€3.290", oldPrice:"€5.490", discount:40, desc:"Essenziale e funzionale, ideale per ogni tipo di ambiente.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-clara.webp",availability:"standard"},
  {id:218,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Epoka",       brand:"Home Cucine", price:"€3.690", oldPrice:"€6.150", discount:40, desc:"Bianca opaca, un classico intramontabile in chiave contemporanea.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-epoka-bianca.webp",availability:"standard"},
  {id:219,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Metropolitan",brand:"Home Cucine", price:"€4.290", oldPrice:"€7.150", discount:40, desc:"Lineare verde marino, per cucine dallo stile urbano e contemporaneo.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-metropolitan-lineare-verdemarino.webp",availability:"standard"},
  {id:220,ambiente:"Cucina",category:"Cucine",subcategory:"Con isola",    name:"Next",        brand:"Mobilturi",   price:"€5.990", oldPrice:"€9.990", discount:40, desc:"A isola, massima funzionalità e design pulito per grandi spazi.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/next-cucina-isola.webp",availability:"standard"},
  {id:221,ambiente:"Cucina",category:"Cucine",subcategory:"Lineari",      name:"City",        brand:"Mobilturi",   price:"€3.490", oldPrice:"€5.820", discount:40, desc:"Essenziale ed efficiente, pensata per le esigenze della vita quotidiana.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-city.webp",availability:"standard"},
  {id:222,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Mood",        brand:"Mobilturi",   price:"€4.890", oldPrice:"€8.150", discount:40, desc:"Noce bruciato e verde muschio opaco: un connubio di colori naturali.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-mood-noce-bruciato_verde-muschio-opaco.webp",availability:"standard"},
  {id:223,ambiente:"Cucina",category:"Cucine",subcategory:"Classiche",    name:"Old",         brand:"IMAB",        price:"€4.190", oldPrice:"€6.990", discount:40, desc:"Stile vintage rivisitato, per chi ama l'arredamento con carattere.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-old.webp",availability:"standard"},
  {id:224,ambiente:"Cucina",category:"Cucine",subcategory:"Moderne",      name:"Style",       brand:"IMAB",        price:"€4.490", oldPrice:"€7.490", discount:40, desc:"Design moderno e versatile, disponibile in varie finiture e colori.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-style.webp",availability:"standard"},
  {id:225,ambiente:"Cucina",category:"Cucine",subcategory:"Con isola",    name:"Cucina Jane", brand:"Net Cucine",  price:"€5.390", oldPrice:"€8.990", discount:40, desc:"A isola con banco snack, funzionale e di design.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-jane-isola-banco-snack.webp",availability:"standard"},
  {id:226,ambiente:"Cucina",category:"Cucine",subcategory:"Angolari",     name:"Manhattan",   brand:"Aran Cucine", price:"€5.890", oldPrice:"€9.820", discount:40, desc:"Angolare con piano lavoro, massima capacità contenitiva.", mode:"preventivo",imgUrl:"https://www.astadelmobile.it/Images/cucina-manhattan-angolare-con-piano-lavoro.webp",availability:"standard"},
  // DIVANI (con prezzo)
  {id:301,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Estro",    price:"\u20ac1.250",desc:"Relax moderno con movimento fluido",           mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/camera-matrimoniale-estro.webp",availability:"standard"},
  {id:302,ambiente:"Divani",category:"Divani",subcategory:"Lineari",    name:"Fred",     price:"\u20ac1.948",desc:"Comfort dinamico e configurazioni su misura",   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/divano-fred-sedute-relax-elettriche.webp",availability:"standard"},
  {id:303,ambiente:"Divani",category:"Divani",subcategory:"Lineari",    name:"Lovely",brand:"CRIVELLARO",   price:"\u20ac1.150",desc:"Eleganza morbida dal gusto intramontabile",     mode:"acquisto",availability:"standard"},
  {id:304,ambiente:"Divani",category:"Divani",subcategory:"Relax",      name:"Elettra",brand:"TANCREDI",  price:"\u20ac3.290",desc:"Pelle spessorata, comfort regolabile",          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/divano-in-pelle-elettra.webp",availability:"standard"},
  {id:305,ambiente:"Divani",category:"Divani",subcategory:"Lineari",    name:"Show",     price:"\u20ac1.158",desc:"Minimalismo elegante per ogni tipo di spazio",  mode:"acquisto",availability:"standard"},
  {id:306,ambiente:"Divani",category:"Divani",subcategory:"Lineari",    name:"Ergo",     price:"\u20ac530",  desc:"Comfort modulare per il living contemporaneo",  mode:"acquisto",availability:"standard"},
  {id:307,ambiente:"Divani",category:"Divani",subcategory:"Angolari",   name:"Sensei",brand:"SAMOA",   price:"\u20ac2.480",desc:"Minimalismo elegante per il living moderno",     mode:"acquisto",availability:"standard"},
  {id:308,ambiente:"Divani",category:"Divani",subcategory:"Lineari",    name:"Brad",brand:"SAMOA",     price:"\u20ac680",  desc:"Profondit\u00e0 ridotta, comfort a tutto spazio",    mode:"acquisto",availability:"standard"},
  {id:309,ambiente:"Divani",category:"Divani",subcategory:"Angolari",   name:"Malibu",brand:"TANCREDI",   price:"\u20ac1.650",desc:"Funzionalit\u00e0 e comfort integrati",              mode:"acquisto",availability:"standard"},
  {id:310,ambiente:"Divani",category:"Divani",subcategory:"Divani letto",name:"Sirio",brand:"COTTA",    price:"\u20ac1.990",desc:"Divano letto, comfort sempre pronto",            mode:"acquisto",availability:"standard"},
  // ZONA GIORNO (con prezzo)
  {id:331,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Soggiorno Tris",  price:"\u20ac1.880",desc:"Studio dei volumi e finiture per atmosfera sobria",        mode:"acquisto",availability:"standard"},
  {id:332,ambiente:"Living",category:"Zona Giorno",subcategory:"Madie",     name:"Madia Oval",      price:"\u20ac680",  desc:"Contenitore moderno per zona giorno o ingresso",          mode:"acquisto",availability:"standard"},
  {id:333,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Soggiorno Warm",  price:"\u20ac1.650",desc:"Integra living e home office in un'unica soluzione",       mode:"acquisto",availability:"standard"},
  {id:334,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Soggiorno Omega", price:"\u20ac1.720",desc:"Altezze variabili e inclinazioni per ritmo dinamico",      mode:"acquisto",availability:"standard"},
  {id:335,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Soggiorno Lak",   price:"\u20ac1.390",desc:"Moderno con elementi spatolati bronzo e quercia",          mode:"acquisto",availability:"standard"},
  {id:336,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Parete Gospel",   price:"\u20ac2.990",desc:"Ampio vano TV e molti spazi libreria",                    mode:"acquisto",availability:"standard"},
  {id:337,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Parete Dolcevita", price:"\u20ac2.990",desc:"Design moderno con dettagli ricercati",                  mode:"acquisto",availability:"standard"},
  {id:338,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Soggiorno Metiz",  price:"\u20ac1.080",desc:"Linee semplici per ambienti con forme essenziali",         mode:"acquisto",availability:"standard"},
  {id:339,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Soggiorno Snake",  price:"\u20ac1.480",desc:"Minimal con panca a sbalzo e stile sobrio",               mode:"acquisto",availability:"standard"},
  {id:340,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Parete Kios",      price:"\u20ac1.980",desc:"Librerie con telaio in alluminio laccato",                mode:"acquisto",availability:"standard"},
  {id:341,ambiente:"Living",category:"Zona Giorno",subcategory:"Madie",     name:"Madia Corner",     price:"\u20ac1.048",desc:"Madia in finitura beton dal design unico",                mode:"acquisto",availability:"standard"},
  {id:342,ambiente:"Living",category:"Zona Giorno",subcategory:"Librerie",  name:"Madia Artek",      price:"\u20ac878",  desc:"Forza espressiva dell'acacia massello",                  mode:"acquisto",availability:"standard"},
  {id:343,ambiente:"Living",category:"Zona Giorno",subcategory:"Madie",     name:"Madia Asia",       price:"\u20ac578",  desc:"Madia moderna a doppia finitura con spirito energico",   mode:"acquisto",availability:"standard"},
  {id:344,ambiente:"Living",category:"Zona Giorno",subcategory:"Pareti TV", name:"Soggiorno Matrix",  price:"\u20ac2.450",desc:"30 colori disponibili, laccatura priva di solventi",       mode:"acquisto",availability:"standard"},
  {id:345,ambiente:"Living",category:"Zona Giorno",subcategory:"Librerie",  name:"Libreria Eneas",    price:"\u20ac788",  desc:"Design naturale in legno acacia con forma unica",         mode:"acquisto",availability:"standard"},
  {id:346,ambiente:"Living",category:"Zona Giorno",subcategory:"Librerie",  name:"Libreria Osbert",   price:"\u20ac698",  desc:"Moderna in acciaio e legno, solida e versatile",          mode:"acquisto",availability:"standard"},
  {id:347,ambiente:"Living",category:"Zona Giorno",subcategory:"Librerie",  name:"Libreria Oskar",    price:"\u20ac788",  desc:"Libreria industrial in acciaio e legno",                  mode:"acquisto",availability:"standard"},
  {id:348,ambiente:"Living",category:"Zona Giorno",subcategory:"Sale pranzo",name:"Anastasia",        price:"\u20ac475",  desc:"Gusto classico in legno laccato bianco opaco",            mode:"acquisto",availability:"standard"},
  {id:349,ambiente:"Living",category:"Zona Giorno",subcategory:"Sale pranzo",name:"Infinity",         price:"\u20ac388",  desc:"Coniuga gusti estetici moderni con necessit\u00e0 quotidiane", mode:"acquisto",availability:"standard"},
  {id:350,ambiente:"Living",category:"Zona Giorno",subcategory:"Sale pranzo",name:"Arezzo",           price:"\u20ac1.654",desc:"Tradizione artigiana veneta con estetica moderna",         mode:"acquisto",availability:"standard"},
  // TAVOLI & SEDIE (con prezzo)
  {id:351,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli fissi",    name:"Aqua",         price:"\u20ac2.490",desc:"Tavolo allungabile in vetro martellato",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-aqua-vetro-martellato-fume-trasparente.webp",availability:"online"},
  {id:352,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Vela",         price:"\u20ac68",   desc:"Sedia in polipropilene colorato",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-vela-monoscocca-colorata.webp",availability:"online"},
  {id:353,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Maya",         price:"\u20ac110",  desc:"Sedia imbottita per living",                        mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-imbottita-maja.webp",availability:"online"},
  {id:354,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Filo",         price:"\u20ac69",   desc:"Sedia impilabile in polipropilene colorato",        mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-filo-monoscocca-colorata.webp",availability:"online"},
  {id:355,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Yvette",       price:"\u20ac148",  desc:"Rivestimento Soft Touch e struttura metallo",       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-yvette.webp",availability:"online"},
  {id:356,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sgabelli",        name:"Kala",         price:"\u20ac110",  desc:"Sgabello imbottito girevole",                       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sgabello-kala-imbottito.webp",availability:"online"},
  {id:357,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sgabelli",        name:"Bistrot plus", price:"\u20ac94",   desc:"Sgabello fisso in polipropilene, 8 colori",         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sgabello-bistrot-plus-copertina.webp",availability:"online"},
  {id:358,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli fissi",    name:"Diamante",     price:"\u20ac838",  desc:"Un tavolo, infinite combinazioni",                  mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-diamant-struttura-corten-e-piano-vetroceramica.webp",availability:"online"},
  {id:359,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli fissi",    name:"Zeus",         price:"\u20ac1.990",desc:"Tavolo fisso con piano in vetro o gres",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-zeus-fisso.webp",availability:"online"},
  {id:360,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Alba",         price:"\u20ac108",  desc:"Design sinuoso e comfort avvolgente in boucl\u00e9",     mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-imbottita-alba.webp",availability:"online"},
  {id:361,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Soft",         price:"\u20ac145",  desc:"Poltroncina con linee morbide e carattere deciso",  mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-soft-marrone.webp",availability:"online"},
  {id:362,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Colors",       price:"\u20ac138",  desc:"Sedia imbottita in tessuto idrorepellente",         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-color-beige-grigio-nero.webp",availability:"online"},
  {id:363,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Tempo",        price:"\u20ac69",   desc:"Sedia pratica pensata per l'uso quotidiano",        mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-tempo-monoscocca-colorata.webp",availability:"online"},
  {id:364,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Claire",       price:"\u20ac79",   desc:"Sedia imbottita con struttura tubolare",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-claire-imbottita.webp",availability:"online"},
  {id:365,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Orbit",      price:"\u20ac998",  desc:"Tavolo ovale allungabile",                          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-orbit-chiuso-con-cucina.webp",availability:"online"},
  {id:367,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Vogue",      price:"\u20ac1.750",desc:"Gres porcellanato e struttura scultorea",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-vogue.webp",availability:"online"},
  {id:368,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Nimbus",     price:"\u20ac890",  desc:"Tavolo rettangolare allungabile 6-10 posti",        mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-nimbus-aperto.webp",availability:"online"},
  {id:369,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Twin",       price:"\u20ac1.090",desc:"Tavolo rettangolare allungabile",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-twin-nero.webp",availability:"online"},
  {id:370,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Roller",     price:"\u20ac1.100",desc:"Tavolo tondo allungabile",                          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-rotondo-roller.webp",availability:"online"},
  {id:371,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Modus",      price:"\u20ac698",  desc:"Tavolo rettangolare allungabile",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/modus-tavolo-marmo-nero-opaco.webp",availability:"online"},
  {id:372,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Velvet",       price:"\u20ac128",  desc:"Poltroncina con morbidezza visiva e comfort",       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/poltroncina-velvet-ecopelle-soft-touch.webp",availability:"online"},
  {id:373,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sgabelli",        name:"Soft plus",    price:"\u20ac258",  desc:"Comfort regolabile dal segno contemporaneo",        mode:"acquisto",availability:"online"},
  {id:375,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Pulse",      price:"\u20ac460",  desc:"Linee pulite, funzionalit\u00e0 quotidiana",             mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-pulse-new.webp",availability:"online"},
  {id:376,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Foresta",    price:"\u20ac838",  desc:"Tavolo allungabile rettangolare",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-foresta-rovere.webp",availability:"online"},
  {id:377,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Kala sedia",   price:"\u20ac79",   desc:"Sedia imbottita con struttura in metallo",          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-kala-imbottita.webp",availability:"online"},
  {id:378,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Elly",         price:"\u20ac89",   desc:"Scocca polipropilene e struttura legno",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-elly-gambe-legno-trasparente.webp",availability:"online"},
  {id:379,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Cognac",       price:"\u20ac96",   desc:"Sedia imbottita con struttura rivestita",           mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-cognac-ecopelle-beige-copertina.webp",availability:"online"},
  {id:380,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sgabelli",        name:"Oliver",       price:"\u20ac95",   desc:"Sgabello regolabile in altezza",                    mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sgabello-oliver-marrone.webp",availability:"online"},
  {id:381,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Lume",       price:"\u20ac688",  desc:"Tavolo rettangolare allungabile",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/lume-tavolo-marmo-grigio-lucido.webp",availability:"online"},
  {id:382,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Giove",      price:"\u20ac768",  desc:"Tavolo rettangolare allungabile",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-giove-rovere.webp",availability:"online"},
  {id:383,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Magika",     price:"\u20ac680",  desc:"Da consolle a tavolo in pochi gesti",               mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-consolle-magika.webp",availability:"online"},
  {id:384,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sgabelli",        name:"Claire sgab.", price:"\u20ac110",  desc:"Sgabello girevole imbottito",                       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sgabello-claire-imbottito.webp",availability:"online"},
  {id:385,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Auro",         price:"\u20ac108",  desc:"Sedia imbottita a schienale alto",                  mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-imbottita-auro-2.webp",availability:"online"},
  {id:386,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Echo",         price:"\u20ac118",  desc:"Dettagli sartoriali e comfort quotidiano",          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-poltroncina-echo.webp",availability:"online"},
  {id:387,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Arluna",       price:"\u20ac85",   desc:"Comfort e stile in equilibrio naturale",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-arluna.webp",availability:"online"},
  {id:388,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Aden",       price:"\u20ac958",  desc:"Gres ceramica e struttura design",                  mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-aden.webp.webp",availability:"online"},
  {id:389,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Riviera",      price:"\u20ac69",   desc:"Sedia in polipropilene colorata",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-riviera-polipropilene-copertina.webp",availability:"online"},
  {id:391,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sgabelli",        name:"Riviera plus", price:"\u20ac86",   desc:"Sgabello in polipropilene fisso",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sgabello-riviera-plus-copertina.webp",availability:"online"},
  {id:392,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Bistrot",      price:"\u20ac78",   desc:"Sedia in polipropilene colorata",                   mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-bistrot-polipropilene-copertina.webp",availability:"online"},
  {id:394,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Mia",          price:"\u20ac79",   desc:"Sedia imbottita in ecopelle",                       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-mia-ecopelle-beige-copertina.webp",availability:"online"},
  {id:395,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Sky",          price:"\u20ac115",  desc:"Sedia imbottita struttura metallo",                 mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-sky-copertina.webp",availability:"online"},
  {id:396,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Metal",        price:"\u20ac88",   desc:"Sedia industrial in metallo",                       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-metal-copertina.webp",availability:"online"},
  {id:397,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Cross",        price:"\u20ac108",  desc:"Sedia in legno con seduta in paglia di vienna",     mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-cross-legno-bianco-copertina.webp",availability:"online"},
  {id:398,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Tavoli allungabili",name:"Akira",      price:"\u20ac648",  desc:"Tavolo rettangolare allungabile in legno",          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/tavolo-akira.webp",availability:"online"},
  {id:399,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Nice",         price:"\u20ac79",   desc:"Linee leggere, pensata per dentro e fuori",         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-nice-polipropilene-outdoor.webp",availability:"online"},
  {id:400,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Jenny",        price:"\u20ac88",   desc:"Sedia interamente rivestita in ecopelle",           mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-jenny-ecopelle-copertina.webp",availability:"online"},
  {id:402,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Tokyo",        price:"\u20ac65",   desc:"Sedia imbottita con struttura tubolare",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-tokyo-in-cucina.webp",availability:"online"},
  {id:403,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Nonnina",      price:"\u20ac36",   desc:"Sedia in legno impagliata classica",                mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-nonnina-copertina.webp",availability:"online"},
  {id:405,ambiente:"Living",category:"Tavoli & Sedie",subcategory:"Sedie",           name:"Campagnola",   price:"\u20ac56",   desc:"Sedia in legno impagliata",                         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/sedia-campagnola-legno-copertina.webp",availability:"online"},
  // ZONA NOTTE (con prezzo)
  {id:406,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Aura",       price:"\u20ac2.690",desc:"Armadio integrato a zona studio e letto contenitore",     mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:407,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Blow",       price:"\u20ac1.780",desc:"Letto matrimoniale con testiera scorrevole e libreria",   mode:"acquisto",availability:"standard"},
  {id:408,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Thesy",      price:"\u20ac2.690",desc:"Elegante con armadio scorrevole e letto imbottito",        mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/thesy-camera-matrimoniale.webp",availability:"standard"},
  {id:409,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Joker",      price:"\u20ac1.098",desc:"Letto matrimoniale imbottito sfoderabile",                 mode:"acquisto",availability:"standard"},
  {id:410,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Eleonora",   price:"\u20ac798",  desc:"Letto imbottito con testiera capitonn\u00e9 e box",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/letto-eleonora-con-box-contenitore.webp",availability:"standard",brand:"CRIVELLARO"},
  {id:411,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Aria",       price:"\u20ac1.780",desc:"Moderna con armadio battente e letto contenitore",         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/camera-matrimoniale-aria.webp",availability:"standard"},
  {id:412,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Fly",        price:"\u20ac2.990",desc:"Letto imbottito e armadio scorrevole maxi",                mode:"acquisto",availability:"standard"},
  {id:413,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Krono",      price:"\u20ac1.290",desc:"Armadio a ponte matrimoniale, contenimento ottimizzato",  mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/armadio-krono.webp",availability:"standard"},
  {id:414,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Sirio",      price:"\u20ac1.298",desc:"Letto imbottito con testiera a cuscini e contenitore",    mode:"acquisto",availability:"standard"},
  {id:415,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Tom",        price:"\u20ac1.318",desc:"Armadio ante battenti per ambienti contemporanei",         mode:"acquisto",availability:"standard"},
  {id:416,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Colormat",   price:"\u20ac1.748",desc:"Armadio scorrevole personalizzabile per colori",           mode:"acquisto",availability:"standard"},
  {id:417,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Joy",        price:"\u20ac1.930",desc:"Armadio scorrevole e letto contenitore moderni",           mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:418,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Estro",      price:"\u20ac1.750",desc:"Armadio modulabile e letto imbottito contenitore",         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/camera-matrimoniale-estro.webp",availability:"standard"},
  {id:419,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Arizona",    price:"\u20ac1.848",desc:"Armadio componibile con cabina angolare e zona studio",   mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:420,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Teorema",    price:"\u20ac2.980",desc:"Linee essenziali con elementi coordinati",                 mode:"acquisto",availability:"standard",brand:"San Martino Mobili"},
  {id:421,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"New Togo",   price:"\u20ac2.280",desc:"Armadio battente e letto contenitore moderni",             mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/camera-matrimoniale-con-letto-contenitore-new-togo.webp",availability:"standard"},
  {id:422,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Clio",       price:"\u20ac2.680",desc:"Geometrie moderne e colori a contrasto",                   mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:423,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Job",        price:"\u20ac1.798",desc:"Zona studio integrata per armadio funzionale",             mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/armadio-job.webp",availability:"standard"},
  {id:424,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Ring",       price:"\u20ac698",  desc:"Letto imbottito con testiera trapuntata e box",            mode:"acquisto",availability:"standard",brand:"CRIVELLARO"},
  {id:425,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Morgana",    price:"\u20ac678",  desc:"Letto imbottito con testiera ricurva e contenitore",      mode:"acquisto",availability:"standard",brand:"CRIVELLARO"},
  {id:426,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Zante",      price:"\u20ac2.260",desc:"Camera laccata opaca, essenziale e sostenibile",           mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/camera-matrimoniale-composta-da-armadio-como-comodini-zante.webp",availability:"standard"},
  {id:427,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Rest",       price:"\u20ac1.398",desc:"Armadio scorrevole due ante maxi dal design pulito",       mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:428,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Fly armadio",price:"\u20ac1.340",desc:"Armadio scorrevole 2 ante maxi personalizzabile",          mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:429,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Dorian",     price:"\u20ac1.798",desc:"Armadio scorrevole 2 ante maxi con cassettiera",           mode:"acquisto",availability:"standard",brand:"ORME"},
  {id:430,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Vento",      price:"\u20ac1.728",desc:"Armadio battente con ante in legno e specchio fum\u00e9",      mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/armadio-vento.webp",availability:"standard"},
  {id:431,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Game",       price:"\u20ac2.128",desc:"Armadio scorrevole 4 ante con specchi centrali",          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/armadio-game.webp",availability:"standard"},
  {id:432,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Dior",       price:"\u20ac598",  desc:"Letto imbottito con testiera trapuntata e box",            mode:"acquisto",availability:"standard",brand:"CRIVELLARO"},
  {id:433,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Cleo",       price:"\u20ac648",  desc:"Letto imbottito con testiera trapuntata e box",            mode:"acquisto",availability:"standard",brand:"CRIVELLARO"},
  {id:434,ambiente:"Notte",category:"Zona Notte",subcategory:"Armadi",          name:"Stream",     price:"\u20ac1.890",desc:"Armadio battente con vano porta TV integrato",             mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:435,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Life",       price:"\u20ac2.180",desc:"Camera con letto contenitore e armadio battente",          mode:"acquisto",availability:"standard",brand:"IMAB"},
  {id:436,ambiente:"Notte",category:"Zona Notte",subcategory:"Camere complete",name:"Denise",     price:"\u20ac3.570",desc:"Laccato opaco, dettagli scenografici, letto escluso",       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/camera-denise.webp",availability:"standard"},
  {id:437,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Edge",       price:"\u20ac798",  desc:"Letto singolo di design",                                  mode:"acquisto",availability:"standard",brand:"SAMOA"},
  {id:438,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Rift",       price:"\u20ac698",  desc:"Letto imbottito con box contenitore",                      mode:"acquisto",availability:"standard",brand:"SAMOA"},
  {id:439,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Blossom",    price:"\u20ac848",  desc:"Letto imbottito da singolo a king size",                   mode:"acquisto",availability:"standard",brand:"SAMOA"},
  {id:440,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Cubo",       price:"\u20ac1.080",desc:"Letto imbottito con secondo estraibile",                   mode:"acquisto",availability:"standard",brand:"SAMOA"},
  {id:441,ambiente:"Notte",category:"Zona Notte",subcategory:"Letti",           name:"Combo",      price:"\u20ac798",  desc:"Letto imbottito con secondo letto estraibile",             mode:"acquisto",availability:"standard",brand:"CRIVELLARO"},
  {id:443,ambiente:"Materassi",category:"Materassi",subcategory:"Molle",       name:"Kids",       price:"\u20ac428",  desc:"Materasso a doppia rigidit\u00e0 per bambini e ragazzi",        mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/kids-materasso.webp",availability:"standard",brand:"SUPREMA"},
  {id:444,ambiente:"Materassi",category:"Materassi",subcategory:"Memory",       name:"Bio natura", price:"\u20ac528",  desc:"Materasso naturale con memory foam bio e molle",           mode:"acquisto",availability:"standard",brand:"SUPREMA"},
  {id:445,ambiente:"Materassi",category:"Materassi",subcategory:"Memory",       name:"Suspiria",   price:"\u20ac580",  desc:"Memory foam con supporto anatomico e alta traspirabilit\u00e0",mode:"acquisto",availability:"standard",brand:"SUPREMA"},
  {id:446,ambiente:"Materassi",category:"Materassi",subcategory:"Molle",   name:"Antiacaro", brand:"SUPREMA",price:"€248",oldPrice:"€390",discount:36,desc:"Materasso a molle Bonnel con trattamento antiacaro",                       mode:"acquisto",availability:"standard"},
  {id:447,ambiente:"Materassi",category:"Materassi",subcategory:"Molle",   name:"New Box",   brand:"SUPREMA",price:"€158",oldPrice:"€248",discount:36,desc:"Materasso a doppia rigidità per bambini, ragazzi e letti matrimoniali",    mode:"acquisto",availability:"standard"},
  // CAMERETTE
  {id:480,ambiente:"Camerette",category:"Camerette",subcategory:"Soppalcate",   name:"Slide",    brand:"Colombini",price:"€2.718",oldPrice:"€4.490",discount:39,desc:"Camera soppalcata ad angolo con tre letti, soluzione completa salvaspazio.",  imgUrl:"https://www.astadelmobile.it/Images/cameretta-slide-fianco-azzurro.webp",  mode:"preventivo",availability:"standard"},
  {id:481,ambiente:"Camerette",category:"Camerette",subcategory:"A ponte",      name:"Primo",    brand:"Colombini",price:"€1.100",oldPrice:"€1.790",discount:39,desc:"Cameretta a ponte con due letti, pratica e funzionale per fratelli.",          imgUrl:"https://www.astadelmobile.it/Images/cameretta-primo-avio-verde-acido.webp", mode:"acquisto",availability:"standard"},
  {id:482,ambiente:"Camerette",category:"Camerette",subcategory:"Componibili",  name:"Lunar",    brand:"Colombini",price:"€1.988",oldPrice:"€3.290",discount:40,desc:"Camera componibile a misura, modulabile e personalizzabile.",                   imgUrl:"https://www.astadelmobile.it/Images/cameretta-lunar.webp", mode:"acquisto",availability:"standard"},
  {id:483,ambiente:"Camerette",category:"Camerette",subcategory:"Soppalcate",   name:"Molly",    brand:"Colombini",price:"€2.340",oldPrice:"€3.890",discount:40,desc:"Camera soppalcata ad angolo a ponte con due letti e zona studio integrata.",    imgUrl:"https://www.astadelmobile.it/Images/cameretta-molly-mattone--cielo.webp", mode:"acquisto",availability:"standard"},
  {id:484,ambiente:"Camerette",category:"Camerette",subcategory:"A ponte",      name:"Cover",    brand:"Colombini",price:"€2.038",oldPrice:"€3.390",discount:40,desc:"Camera a ponte con due letti, design contemporaneo e spazio ottimizzato.",      imgUrl:"https://www.astadelmobile.it/Images/cameretta-cover.webp", mode:"acquisto",availability:"standard"},
  {id:485,ambiente:"Camerette",category:"Camerette",subcategory:"Con studio",   name:"Giulia",   brand:"Colombini",price:"€2.268",oldPrice:"€3.790",discount:40,desc:"Camera con zona studio integrata, perfetta per ragazzi in età scolastica.",     imgUrl:"https://www.astadelmobile.it/Images/cameretta-giulia.webp",  mode:"acquisto",availability:"standard"},
  {id:486,ambiente:"Camerette",category:"Camerette",subcategory:"Componibili",  name:"Love",     brand:"Colombini",price:"€2.990",oldPrice:"€4.890",discount:39,desc:"Camera classica componibile, elegante e funzionale per bambini e ragazzi.",     imgUrl:"https://www.astadelmobile.it/Images/cameretta-love.webp", mode:"acquisto",availability:"standard"},
  {id:487,ambiente:"Camerette",category:"Camerette",subcategory:"Soppalcate",   name:"Pisolo",   brand:"Colombini",price:"€958",  oldPrice:"€1.590",discount:40,desc:"Camera a soppalco con tre letti, soluzione ideale per spazi ridotti.",          imgUrl:"https://www.astadelmobile.it/Images/cameretta-pisolo-grigio-verde.webp",  mode:"acquisto",availability:"standard"},
  {id:488,ambiente:"Camerette",category:"Camerette",subcategory:"A ponte",      name:"Matteo",   brand:"Colombini",price:"€1.890",oldPrice:"€3.190",discount:41,desc:"Camera a ponte con due letti, scrivania e sedia escluse.",                      imgUrl:"https://www.astadelmobile.it/Images/cameretta-matteo.webp", mode:"acquisto",availability:"standard"},
  {id:489,ambiente:"Camerette",category:"Camerette",subcategory:"Soppalcate",   name:"Dotto",    brand:"Colombini",price:"€1.090",oldPrice:"€1.790",discount:39,desc:"Cameretta a soppalco con tre letti, funzionale e compatta.",                     imgUrl:"https://www.astadelmobile.it/Images/cameretta-dotto-ocean-talco-verde-papua.webp",   mode:"acquisto",availability:"standard"},
  // SOGGIORNI / PARETI ATTREZZATE
  {id:490,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Soggiorno Fides",  brand:"GSG Mobili",price:"€1.650",oldPrice:"€2.750",discount:40,desc:"Parete giorno con gioco armonioso di volumi pieni e vani a giorno che alternano spazi chiusi e aperti.",imgUrl:"https://www.astadelmobile.it/Images/parete-giorno-fides-asta-del-mobile.webp",  mode:"acquisto",availability:"standard"},
  {id:491,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Parete Ebe",       brand:"GSG Mobili",price:"€1.590",oldPrice:"€2.650",discount:40,desc:"Soluzione moderna e dinamica per l'area living, con moduli chiusi e vani a giorno.",                      imgUrl:"https://www.astadelmobile.it/Images/parete-giorno-ebe.webp",       mode:"acquisto",availability:"standard"},
  {id:492,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Parete Vertigo",   brand:"GSG Mobili",price:"€1.490",oldPrice:"€2.490",discount:40,desc:"Combina design moderno e funzionalità con elementi sospesi e base porta TV.",                              imgUrl:"https://www.astadelmobile.it/Images/parete-giorno-vertigo.webp",   mode:"acquisto",availability:"standard"},
  {id:493,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Soggiorno Opi",    brand:"HOMES",     price:"€1.350",oldPrice:"€2.250",discount:40,desc:"Composizione sospesa dal design essenziale, moduli chiusi e vani aperti con ritmo geometrico bilanciato.",  imgUrl:"https://www.astadelmobile.it/Images/parete-giorno-opi.webp",   mode:"acquisto",availability:"standard"},
  {id:494,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Parete Nox",       brand:"HOMES",     price:"€980",  oldPrice:"€1.650",discount:41,desc:"Soluzione elegante e funzionale per il living contemporaneo con vano porta TV integrato.",                  imgUrl:"https://www.astadelmobile.it/Images/parete-giorno-nox.webp",       mode:"acquisto",availability:"standard"},
  {id:495,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Comp. Eris",       brand:"MISTRAL",   price:"€1.590",oldPrice:"€2.650",discount:40,desc:"Composizione parete giorno angolare dal design equilibrato, integra estetica e funzionalità.",              imgUrl:"https://www.astadelmobile.it/Images/parete-giorno-eris.webp",mode:"acquisto",availability:"standard"},
  {id:496,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Parete Venus",     brand:"MISTRAL",   price:"€1.580",oldPrice:"€2.650",discount:40,desc:"Combina libreria a spalla e zona TV in un'unica struttura compatta che ottimizza lo spazio.",               imgUrl:"https://www.astadelmobile.it/Images/zonagiorno-venus.webp", mode:"acquisto",availability:"standard"},
  {id:497,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Soggiorno Haiko",  brand:"Colombini", price:"€1.290",oldPrice:"€2.150",discount:40,desc:"Arredo soggiorno elegante e funzionale, ogni dettaglio per un living raffinato.",                           imgUrl:"https://www.astadelmobile.it/Images/haiko-parete-soggiorno.webp", mode:"acquisto",availability:"standard"},
  {id:498,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Parete Zafiro",    brand:"Colombini", price:"€848",  oldPrice:"€1.420",discount:40,desc:"Linee pulite con grigio opaco e finiture legno per un soggiorno con elementi sospesi eleganti.",             imgUrl:"https://www.astadelmobile.it/Images/zafiro-parete-soggiorno-finitura-grigio-catania-oak.webp",           mode:"acquisto",availability:"standard"},
  {id:499,ambiente:"Soggiorno",category:"Soggiorno",subcategory:"Pareti TV",  name:"Parete Alpha",     brand:"GSG Mobili",price:"€1.930",oldPrice:"€3.220",discount:40,desc:"Si distingue per la libreria inclinata che movimenta la parete e crea un ritmo visivo originale.",          imgUrl:"https://www.astadelmobile.it/Images/zona-giorno-alpha-copertina.webp",    mode:"acquisto",availability:"standard"},
  // COMPLEMENTI (con prezzo)
  {id:446,ambiente:"Living",category:"Complementi",subcategory:"Ingressi",  name:"Galaxy",         price:"\u20ac420",  desc:"Combina specchio e appendiabiti in design ovale",     mode:"acquisto",availability:"standard",brand:"Savini"},
  {id:447,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Colonna 1 anta", price:"\u20ac118",  desc:"Colonna a una anta in pronta consegna",               mode:"acquisto",availability:"standard",brand:"Savini"},
  {id:448,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Cassettiera 6C", price:"\u20ac185",  desc:"6 cassetti con guide a rulli scorrevoli",              mode:"acquisto",availability:"standard",brand:"Sarmog"},
  {id:449,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Madia 2A-4C",    price:"\u20ac198",  desc:"Madia 2 ante 4 cassetti",                             mode:"acquisto",availability:"standard",brand:"Sarmog"},
  {id:450,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Mobile bianco",  price:"\u20ac135",  desc:"Mobile 2 ante 1 cassetto",                            mode:"acquisto",availability:"standard",brand:"Sarmog"},
  {id:451,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Cassettiera 4C", price:"\u20ac145",  desc:"Mobile di servizio 4 cassetti",                       mode:"acquisto",availability:"standard",brand:"Sarmog"},
  {id:452,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Serv. 4C-2A",    price:"\u20ac188",  desc:"Madia 4 cassetti e ante",                             mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/452-colonna-bagno-2-ante-1-cassetto-copertina.webp",availability:"standard"},
  {id:453,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Colonna 2A",     price:"\u20ac160",  desc:"Mobile verticale 2 ante e 1 cassetto",                mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/323-colonna-bagno-3-ante-1-cassetto-copertina.webp",availability:"standard"},
  {id:454,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Colonna 3A",     price:"\u20ac195",  desc:"Mobile di servizio 3 ante e 1 cassetto",              mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-lavanderia-copertina.webp",availability:"standard"},
  {id:455,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Mobiletto 1A",   price:"\u20ac80",   desc:"1 anta e 1 cassetto",                                 mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/222-mobile-bagno-1-anta-1-cassetto-copertina.webp",availability:"standard"},
  {id:456,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Cassettiera 6Cb",price:"\u20ac145",  desc:"6 cassetti con guide a rulli scorrevoli",              mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/771-6-cassetti-cemento-copertina.webp",availability:"standard"},
  {id:457,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Colonna specchio",price:"\u20ac138", desc:"Colonna con anta a specchio",                          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/744-colonna-1-anta-specchio-copertina.webp",availability:"standard"},
  {id:458,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Armadio 2A",     price:"\u20ac170",  desc:"Mobile contenitore a due ante",                       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/168-mobile-2-ante-copertina.webp",availability:"standard"},
  {id:459,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Mobile verticale",price:"\u20ac145", desc:"Mobile con vani a giorno",                             mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/Db371k-libreria-cemento-copertina.webp",availability:"standard"},
  {id:460,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Armadio scorr.", price:"\u20ac198",  desc:"A due ante, una a specchio",                          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/798spk-mobile-2-ante-aperto-copertina.webp",availability:"standard"},
  {id:461,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Serv. 3A push",  price:"\u20ac218",  desc:"Madia 3 ante push-pull",                              mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/7073k-mobile-3-ante-copertina.webp",availability:"standard"},
  {id:462,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Cassettiera 3C", price:"\u20ac120",  desc:"3 cassetti su ruote",                                 mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/Db733-cassettiera-noce-copertina.webp",availability:"standard"},
  {id:463,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Madia 4A",       price:"\u20ac198",  desc:"Madia quattro ante in 8 combinazioni finiture",       mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/7034k-mobile-4-ante-noce-copertina.webp",availability:"standard"},
  {id:464,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Colonna giorno", price:"\u20ac120",  desc:"Colonna a giorno in tre finiture",                    mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/Db381k-colonna-noce-copertina.webp",availability:"standard"},
  {id:465,ambiente:"Living",category:"Complementi",subcategory:"Multiuso",  name:"Armadio 3A",     price:"\u20ac178",  desc:"Armadio a 3 ante battenti",                           mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/Db374k-mobile-noce-copertina.webp",availability:"standard"},
  {id:466,ambiente:"Living",category:"Complementi",subcategory:"Tv",        name:"Linea porta TV",  price:"\u20ac528",  desc:"Design pulito e geometrie decise per il porta TV",     mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/linea-porta-tv-copertina.webp",availability:"standard"},
  {id:467,ambiente:"Living",category:"Complementi",subcategory:"Ingressi",  name:"Barnie",          price:"\u20ac558",  desc:"Mobile ingresso con specchio e appendiabiti",          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/ingresso-barnie-copertina.webp",availability:"standard"},
  // BAGNI (con prezzo \u2014 solo offerta esclusiva)
  {id:468,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Egle",   price:"\u20ac990",  oldPrice:"\u20ac1.590",discount:38,desc:"Frontale cannettato, ampia personalizzazione cromatica",  mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-egle.webp",availability:"standard"},
  {id:469,ambiente:"Bagno",category:"Bagni",subcategory:"A terra",  name:"Kos",    price:"\u20ac388",  oldPrice:"\u20ac778",  discount:50,desc:"Soluzione a terra completa, pratica e immediata",          mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-kos.webp",availability:"standard"},
  {id:470,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Strip",  price:"\u20ac1.090",oldPrice:"\u20ac1.962",discount:44,desc:"Geometrie pulite e colori materici per bagno moderno",      mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-strip-mattone-copertina.webp",availability:"standard"},
  {id:471,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Luxor",  price:"\u20ac1.080",oldPrice:"\u20ac1.890",discount:43,desc:"Texture elegante, dettagli raffinati e massimo comfort",     mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-luxor-taupe-copertina.webp",availability:"standard"},
  {id:472,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Moon",   price:"\u20ac498",  oldPrice:"\u20ac990",  discount:50,desc:"Due cassettoni e specchiera sospesi",                      mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/moon-bagno-sospeso.webp",availability:"standard"},
  {id:473,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Tratto", price:"\u20ac568",  oldPrice:"\u20ac1.020",discount:44,desc:"Linee leggere per un bagno moderno e luminoso",             mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-tratto-blu-mare-copertina.webp",availability:"standard"},
  {id:474,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Duo",    price:"\u20ac1.390",oldPrice:"\u20ac2.100",discount:34,desc:"Volumi curvi e doppia postazione",                         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-duo.webp",availability:"standard"},
  {id:475,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Yari",   price:"\u20ac730",  oldPrice:"\u20ac1.295",discount:44,desc:"Frontale bugnato per equilibrio senza tempo",               mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-yari.webp",availability:"standard"},
  {id:476,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Aria",   price:"\u20ac318",  oldPrice:"\u20ac480",  discount:34,desc:"Soluzione sospesa semplice e funzionale",                  mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/camera-matrimoniale-aria.webp",availability:"standard"},
  {id:477,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Adam",   price:"\u20ac1.690",oldPrice:"\u20ac2.450",discount:31,desc:"Apertura a gola in laminato noce fiammato",                 mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-adam.webp",availability:"standard"},
  {id:478,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Alma",   price:"\u20ac438",  oldPrice:"\u20ac940",  discount:53,desc:"Soluzione sospesa funzionale per vari contesti",            mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-alma.webp",availability:"standard"},
  {id:479,ambiente:"Bagno",category:"Bagni",subcategory:"Sospesi",  name:"Tetris", price:"\u20ac1.490",oldPrice:"\u20ac1.980",discount:25,desc:"Doppio lavabo in mineralmarmo, ottimizza lo spazio",         mode:"acquisto",imgUrl:"https://www.astadelmobile.it/Images/bagno-tetris.webp",availability:"standard"},
  // ILLUMINAZIONE
  {id:501,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Sospensioni",name:"Pendul Globe",   brand:"IDEAL LUX",price:"\u20ac189",desc:"Sospensione a sfera in vetro soffiato, diffusore opalino per luce soffusa.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/432679/258775_EMO001_HULAHOOP_SP_D061.webp",mode:"acquisto",availability:"online"},
  {id:502,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Sospensioni",name:"Ring Cord",      brand:"IDEAL LUX",price:"\u20ac145",desc:"Sospensione circolare in metallo nero opaco, per tavoli da pranzo.",imgUrl:"https://www.ideal-lux.com/assets/products/ins/_webp1k/435949/371702_INS001_LOOK_SP1_SQUARE_D60_H400_OTTONE.webp",mode:"acquisto",availability:"online"},
  {id:503,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Sospensioni",name:"Cono Bistrot",   brand:"IDEAL LUX",price:"\u20ac220",desc:"Cono in metallo con finitura ottone spazzolato, design scandinavo.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/431451/321042_EMO001_FLAM_SP_FUME.webp",mode:"acquisto",availability:"online"},
  {id:504,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Sospensioni",name:"Cluster 3",      brand:"LODES",    price:"\u20ac310",desc:"Gruppo da 3 sfere in vetro, cavo regolabile, resa cromatica 90+.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/433197/223230_EMO001_HALO_PL_D60_4000K.webp",mode:"acquisto",availability:"online"},
  {id:505,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Sospensioni",name:"Onda Piatta",    brand:"LODES",    price:"\u20ac265",desc:"Diffusore piatto in policarbonato bianco, luce LED integrata 3000K.",imgUrl:"https://www.ideal-lux.com/assets/products/loc/_webp1k/433595/352688_LOC001_TUBIX_SP_D100.webp",mode:"acquisto",availability:"online"},
  {id:506,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Sospensioni",name:"Dome Loft",      brand:"IDEAL LUX",price:"\u20ac178",desc:"Paralume in alluminio spazzolato, ottima per ambienti loft.",imgUrl:"https://www.ideal-lux.com/assets/products/ins/_webp1k/435576/269382_INS001_FRAME_SP_RETTANGOLO_NERO.webp",mode:"acquisto",availability:"online"},
  {id:507,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Plafoniere",  name:"Disco LED 40",  brand:"PERENZ",   price:"\u20ac129",desc:"Plafoniera rotonda LED 40cm, 3000K, dimmerabile, IP20.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/432679/258775_EMO001_HULAHOOP_SP_D061.webp",mode:"acquisto",availability:"online"},
  {id:508,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Plafoniere",  name:"Woody Round",   brand:"PERENZ",   price:"\u20ac215",desc:"Plafoniera con cornice in legno rovere naturale, LED 24W.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/431451/321042_EMO001_FLAM_SP_FUME.webp",mode:"acquisto",availability:"online"},
  {id:509,ambiente:"Illuminazione",category:"Illuminazione",subcategory:"Applique",    name:"Arrow Wall",    brand:"IDEAL LUX",price:"\u20ac89", desc:"Braccio orientabile in metallo nero, testa cilindrica GU10.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/432679/258775_EMO001_HULAHOOP_SP_D061.webp",mode:"acquisto",availability:"online"},
];

// ─── IMMAGINI REALI DA ASTADELMOBILE.IT ───────
const ADM = "https://www.astadelmobile.it/Images/";
// ─── IMMAGINI PRODOTTI (imgUrl esplicita) ────────────────────────────
const PRODUCT_IMGS = {
  "Lovely": "https://www.astadelmobile.it/Images/divano-lovely.webp",
  "Elettra": "https://www.astadelmobile.it/Images/divano-in-pelle-elettra.webp",
  "Show": "https://www.astadelmobile.it/Images/divano-show-lineare.webp",
  "Ergo": "https://www.astadelmobile.it/Images/divano-e-poltrona-ergo.webp",
  "Sensei": "https://www.astadelmobile.it/Images/divano-angolare-sensei-cuscini-piuma.webp",
  "Brad": "https://www.astadelmobile.it/Images/divano-due-posti-brad-sfoderabile.webp",
  "Malibu": "https://www.astadelmobile.it/Images/divano-penisola-con-letto-estraibile-malibu.webp",
  "Sirio": "https://www.astadelmobile.it/Images/letto-sirio.webp",
  "Aura": "https://www.astadelmobile.it/Images/camera-aura.webp",
  "Blow": "https://www.astadelmobile.it/Images/letto-blow.webp",
  "Joker": "https://www.astadelmobile.it/Images/letto-matrimoniale-joker.webp",
  "Fly": "https://www.astadelmobile.it/Images/camera-fly.webp",
  "Tom": "https://www.astadelmobile.it/Images/armadio-tom.webp",
  "Colormat": "https://www.astadelmobile.it/Images/armadio-colormatt.webp",
  "Joy": "https://www.astadelmobile.it/Images/camera-matrimoniale-completa-joy.webp",
  "Arizona": "https://www.astadelmobile.it/Images/armadio-arizona.webp",
  "Teorema": "https://www.astadelmobile.it/Images/camera-letto-teorema.webp",
  "Clio": "https://www.astadelmobile.it/Images/camera-matrimoniale-clio.webp",
  "Ring": "https://www.astadelmobile.it/Images/letto-ring.webp",
  "Morgana": "https://www.astadelmobile.it/Images/letto-morgana.webp",
  "Rest": "https://www.astadelmobile.it/Images/armadio-rest.webp",
  "Fly armadio": "https://www.astadelmobile.it/Images/armadio-fly-ante-scorrevoli.webp",
  "Dorian": "https://www.astadelmobile.it/Images/armadio-dorian.webp",
  "Dior": "https://www.astadelmobile.it/Images/letto-dior.webp",
  "Cleo": "https://www.astadelmobile.it/Images/letto-cleo.webp",
  "Stream": "https://www.astadelmobile.it/Images/armadio-stream-con-vano-porta-tv.webp",
  "Life": "https://www.astadelmobile.it/Images/life-camera-matrimoniale.webp",
  "Edge": "https://www.astadelmobile.it/Images/letto-cameretta-edge.webp",
  "Rift": "https://www.astadelmobile.it/Images/letto-cameretta-RIFT-copertina.webp",
  "Blossom": "https://www.astadelmobile.it/Images/letto-cameretta-blossom.webp",
  "Cubo": "https://www.astadelmobile.it/Images/letto-cameretta-cubo-copertina.webp",
  "Combo": "https://www.astadelmobile.it/Images/letto-cameretta-combo.webp",
  "Bio natura": "https://www.astadelmobile.it/Images/materasso-bionatura-matrimoniale-canapa-lino.webp",
  "Suspiria": "https://www.astadelmobile.it/Images/materasso-suspiria-memory-sfoderabile-lavabile.webp",
  "Antiacaro": "https://www.astadelmobile.it/Images/materasso-antiacaro-sfoderabile.webp",
  "New Box": "https://www.astadelmobile.it/Images/newbox-singolo-sfoderabile.webp",
  "Galaxy": "https://www.astadelmobile.it/Images/ingresso-galaxy-copertina.webp",
  "Colonna 1 anta": "https://www.astadelmobile.it/Images/colonna-1-anta-copertina.webp",
  "Cassettiera 6C": "https://www.astadelmobile.it/Images/781-6-cassetti-copertina.webp",
  "Madia 2A-4C": "https://www.astadelmobile.it/Images/779-2-ante-4-cassetti-noce-stelvio-copertina.webp",
  "Mobile bianco": "https://www.astadelmobile.it/Images/775-2-ante-4-cassetti-cemento-copertina.webp",
  "Cassettiera 4C": "https://www.astadelmobile.it/Images/774-4-cassetti-noce-copertina.webp",
  "Bellagio": "https://www.astadelmobile.it/Images/cucina-bellagio-industriale-metallo.webp",
  "Bijou": "https://www.astadelmobile.it/Images/cucina-Bijou-vetro-bianco-lucido.webp",
  "Penelope": "https://www.astadelmobile.it/Images/cucina-penelope-aran-cucine-finachi-in-acciaio.webp",
  "Ylenia": "https://www.astadelmobile.it/Images/cucina-ylenia-aran-cucine-shabby-chic.webp",
  "Volare": "https://www.astadelmobile.it/Images/cucina-volare-aran-cucine-linee-tondeggianti.webp",
  "Erika": "https://www.astadelmobile.it/Images/cucina-erika-aran-cucine-con-living.webp",
  "Compass": "https://www.astadelmobile.it/Images/cucina-compass-modello-classico-lineare-tavolo-snack.webp",
  "Sense": "https://www.astadelmobile.it/Images/cucina-sense-con-penisola-e-tavolo-collegasto.webp",
  "Alexandra": "https://www.astadelmobile.it/Images/cucina-alexandra-bianca-lineare.webp",
  "Jacquelyn": "https://www.astadelmobile.it/Images/cucina-jacquelyn-lineare-bordeaux-bianco.webp",
  "James": "https://www.astadelmobile.it/Images/james-cucina-componibile-marna-opaco.webp",
  "Metrica": "https://www.astadelmobile.it/Images/cucina-metrica-isola-bancone-snack.webp",
  "Divina": "https://www.astadelmobile.it/Images/cucina-divina-a-iscola-e-tavolo-a-sbalzo.webp",
  "Caprera": "https://www.astadelmobile.it/Images/cucina-caprera-rovere-mielato.webp",
  "Trendy": "https://www.astadelmobile.it/Images/cucina-trendy-vetrina.webp",
  "Chic": "https://www.astadelmobile.it/Images/cucina-chic-penisola.webp",
  "Clara": "https://www.astadelmobile.it/Images/cucina-clara.webp",
  "Epoka": "https://www.astadelmobile.it/Images/cucina-epoka-bianca.webp",
  "Metropolitan": "https://www.astadelmobile.it/Images/cucina-metropolitan-lineare-verdemarino.webp",
  "Next": "https://www.astadelmobile.it/Images/next-cucina-isola.webp",
  "City": "https://www.astadelmobile.it/Images/cucina-city.webp",
  "Mood": "https://www.astadelmobile.it/Images/cucina-mood-noce-bruciato_verde-muschio-opaco.webp",
  "Old": "https://www.astadelmobile.it/Images/cucina-old.webp",
  "Style": "https://www.astadelmobile.it/Images/cucina-style.webp",
  "Cucina Jane": "https://www.astadelmobile.it/Images/cucina-jane-isola-banco-snack.webp",
  "Manhattan": "https://www.astadelmobile.it/Images/cucina-manhattan-angolare-con-piano-lavoro.webp",
  "Fred": "https://www.astadelmobile.it/Images/divano-fred-sedute-relax-elettriche.webp",
  "Estro": "https://www.astadelmobile.it/Images/camera-matrimoniale-estro.webp",
  "Thesy": "https://www.astadelmobile.it/Images/thesy-camera-matrimoniale.webp",
  "Eleonora": "https://www.astadelmobile.it/Images/letto-eleonora-con-box-contenitore.webp",
  "Aria": "https://www.astadelmobile.it/Images/camera-matrimoniale-aria.webp",
  "Krono": "https://www.astadelmobile.it/Images/armadio-krono.webp",
  "New Togo": "https://www.astadelmobile.it/Images/camera-matrimoniale-con-letto-contenitore-new-togo.webp",
  "Job": "https://www.astadelmobile.it/Images/armadio-job.webp",
  "Zante": "https://www.astadelmobile.it/Images/camera-matrimoniale-composta-da-armadio-como-comodini-zante.webp",
  "Vento": "https://www.astadelmobile.it/Images/armadio-vento.webp",
  "Game": "https://www.astadelmobile.it/Images/armadio-game.webp",
  "Denise": "https://www.astadelmobile.it/Images/camera-denise.webp",
  "Egle": "https://www.astadelmobile.it/Images/bagno-egle.webp",
  "Kos": "https://www.astadelmobile.it/Images/bagno-kos.webp",
  "Strip": "https://www.astadelmobile.it/Images/bagno-strip-mattone-copertina.webp",
  "Luxor": "https://www.astadelmobile.it/Images/bagno-luxor-taupe-copertina.webp",
  "Moon": "https://www.astadelmobile.it/Images/moon-bagno-sospeso.webp",
  "Tratto": "https://www.astadelmobile.it/Images/bagno-tratto-blu-mare-copertina.webp",
  "Duo": "https://www.astadelmobile.it/Images/bagno-duo.webp",
  "Yari": "https://www.astadelmobile.it/Images/bagno-yari.webp",
  "Adam": "https://www.astadelmobile.it/Images/bagno-adam.webp",
  "Alma": "https://www.astadelmobile.it/Images/bagno-alma.webp",
  "Tetris": "https://www.astadelmobile.it/Images/bagno-tetris.webp",
  "Aqua": "https://www.astadelmobile.it/Images/tavolo-aqua-vetro-martellato-fume-trasparente.webp",
  "Vela": "https://www.astadelmobile.it/Images/sedia-vela-monoscocca-colorata.webp",
  "Maya": "https://www.astadelmobile.it/Images/sedia-imbottita-maja.webp",
  "Filo": "https://www.astadelmobile.it/Images/sedia-filo-monoscocca-colorata.webp",
  "Yvette": "https://www.astadelmobile.it/Images/sedia-yvette.webp",
  "Kala": "https://www.astadelmobile.it/Images/sgabello-kala-imbottito.webp",
  "Bistrot plus": "https://www.astadelmobile.it/Images/sgabello-bistrot-plus-copertina.webp",
  "Diamante": "https://www.astadelmobile.it/Images/tavolo-diamant-struttura-corten-e-piano-vetroceramica.webp",
  "Zeus": "https://www.astadelmobile.it/Images/tavolo-zeus-fisso.webp",
  "Alba": "https://www.astadelmobile.it/Images/sedia-imbottita-alba.webp",
  "Soft": "https://www.astadelmobile.it/Images/sedia-soft-marrone.webp",
  "Colors": "https://www.astadelmobile.it/Images/sedia-color-beige-grigio-nero.webp",
  "Tempo": "https://www.astadelmobile.it/Images/sedia-tempo-monoscocca-colorata.webp",
  "Claire": "https://www.astadelmobile.it/Images/sedia-claire-imbottita.webp",
  "Orbit": "https://www.astadelmobile.it/Images/tavolo-orbit-chiuso-con-cucina.webp",
  "Vogue": "https://www.astadelmobile.it/Images/tavolo-vogue.webp",
  "Nimbus": "https://www.astadelmobile.it/Images/tavolo-nimbus-aperto.webp",
  "Twin": "https://www.astadelmobile.it/Images/tavolo-twin-nero.webp",
  "Roller": "https://www.astadelmobile.it/Images/tavolo-rotondo-roller.webp",
  "Modus": "https://www.astadelmobile.it/Images/modus-tavolo-marmo-nero-opaco.webp",
  "Velvet": "https://www.astadelmobile.it/Images/poltroncina-velvet-ecopelle-soft-touch.webp",
  "Soft Plus": "https://www.astadelmobile.it/Images/sgabello-soft-plus.webp",
  "Fumè": "https://www.astadelmobile.it/Images/tavolo-fume-allungato.webp",
  "Pulse": "https://www.astadelmobile.it/Images/tavolo-pulse-new.webp",
  "Foresta": "https://www.astadelmobile.it/Images/tavolo-foresta-rovere.webp",
  "Kala sedia": "https://www.astadelmobile.it/Images/sedia-kala-imbottita.webp",
  "Elly": "https://www.astadelmobile.it/Images/sedia-elly-gambe-legno-trasparente.webp",
  "Cognac": "https://www.astadelmobile.it/Images/sedia-cognac-ecopelle-beige-copertina.webp",
  "Oliver": "https://www.astadelmobile.it/Images/sgabello-oliver-marrone.webp",
  "Lume": "https://www.astadelmobile.it/Images/lume-tavolo-marmo-grigio-lucido.webp",
  "Giove": "https://www.astadelmobile.it/Images/tavolo-giove-rovere.webp",
  "Magika": "https://www.astadelmobile.it/Images/tavolo-consolle-magika.webp",
  "Claire sgab.": "https://www.astadelmobile.it/Images/sgabello-claire-imbottito.webp",
  "Auro": "https://www.astadelmobile.it/Images/sedia-imbottita-auro-2.webp",
  "Echo": "https://www.astadelmobile.it/Images/sedia-poltroncina-echo.webp",
  "Arluna": "https://www.astadelmobile.it/Images/sedia-arluna.webp",
  "Aden": "https://www.astadelmobile.it/Images/tavolo-aden.webp.webp",
  "Riviera": "https://www.astadelmobile.it/Images/sedia-riviera-polipropilene-copertina.webp",
  "Arluna sgab": "https://www.astadelmobile.it/Images/sgabello-imbottito-arluna.webp",
  "Riviera plus": "https://www.astadelmobile.it/Images/sgabello-riviera-plus-copertina.webp",
  "Bistrot": "https://www.astadelmobile.it/Images/sedia-bistrot-polipropilene-copertina.webp",
  "Mia": "https://www.astadelmobile.it/Images/sedia-mia-ecopelle-beige-copertina.webp",
  "Sky": "https://www.astadelmobile.it/Images/sedia-sky-copertina.webp",
  "Metal": "https://www.astadelmobile.it/Images/sedia-metal-copertina.webp",
  "Cross": "https://www.astadelmobile.it/Images/sedia-cross-legno-bianco-copertina.webp",
  "Akira": "https://www.astadelmobile.it/Images/tavolo-akira.webp",
  "Nice": "https://www.astadelmobile.it/Images/sedia-nice-polipropilene-outdoor.webp",
  "Jenny": "https://www.astadelmobile.it/Images/sedia-jenny-ecopelle-copertina.webp",
  "Tokyo": "https://www.astadelmobile.it/Images/sedia-tokyo-in-cucina.webp",
  "Nonnina": "https://www.astadelmobile.it/Images/sedia-nonnina-copertina.webp",
  "Campagnola": "https://www.astadelmobile.it/Images/sedia-campagnola-legno-copertina.webp",
  "Kids": "https://www.astadelmobile.it/Images/kids-materasso.webp",
  "Serv. 4C-2A": "https://www.astadelmobile.it/Images/452-colonna-bagno-2-ante-1-cassetto-copertina.webp",
  "Colonna 2A": "https://www.astadelmobile.it/Images/323-colonna-bagno-3-ante-1-cassetto-copertina.webp",
  "Colonna 3A": "https://www.astadelmobile.it/Images/bagno-lavanderia-copertina.webp",
  "Mobiletto 1A": "https://www.astadelmobile.it/Images/222-mobile-bagno-1-anta-1-cassetto-copertina.webp",
  "Cassettiera 6Cb": "https://www.astadelmobile.it/Images/771-6-cassetti-cemento-copertina.webp",
  "Colonna specchio": "https://www.astadelmobile.it/Images/744-colonna-1-anta-specchio-copertina.webp",
  "Armadio 2A": "https://www.astadelmobile.it/Images/168-mobile-2-ante-copertina.webp",
  "Mobile verticale": "https://www.astadelmobile.it/Images/Db371k-libreria-cemento-copertina.webp",
  "Armadio scorr.": "https://www.astadelmobile.it/Images/798spk-mobile-2-ante-aperto-copertina.webp",
  "Serv. 3A push": "https://www.astadelmobile.it/Images/7073k-mobile-3-ante-copertina.webp",
  "Cassettiera 3C": "https://www.astadelmobile.it/Images/Db733-cassettiera-noce-copertina.webp",
  "Madia 4A": "https://www.astadelmobile.it/Images/7034k-mobile-4-ante-noce-copertina.webp",
  "Colonna giorno": "https://www.astadelmobile.it/Images/Db381k-colonna-noce-copertina.webp",
  "Armadio 3A": "https://www.astadelmobile.it/Images/Db374k-mobile-noce-copertina.webp",
  "Linea porta TV": "https://www.astadelmobile.it/Images/linea-porta-tv-copertina.webp",
  "Barnie": "https://www.astadelmobile.it/Images/ingresso-barnie-copertina.webp",
  "Slide": "https://www.astadelmobile.it/Images/cameretta-slide-fianco-azzurro.webp",
  "Primo": "https://www.astadelmobile.it/Images/cameretta-primo-avio-verde-acido.webp",
  "Lunar": "https://www.astadelmobile.it/Images/cameretta-lunar.webp",
  "Molly": "https://www.astadelmobile.it/Images/cameretta-molly-mattone--cielo.webp",
  "Cover": "https://www.astadelmobile.it/Images/cameretta-cover.webp",
  "Giulia": "https://www.astadelmobile.it/Images/cameretta-giulia.webp",
  "Love": "https://www.astadelmobile.it/Images/cameretta-love.webp",
  "Pisolo": "https://www.astadelmobile.it/Images/cameretta-pisolo-grigio-verde.webp",
  "Matteo": "https://www.astadelmobile.it/Images/cameretta-matteo.webp",
  "Dotto": "https://www.astadelmobile.it/Images/cameretta-dotto-ocean-talco-verde-papua.webp",
  "Soggiorno Fides": "https://www.astadelmobile.it/Images/parete-giorno-fides-asta-del-mobile.webp",
  "Parete Ebe": "https://www.astadelmobile.it/Images/parete-giorno-ebe.webp",
  "Parete Vertigo": "https://www.astadelmobile.it/Images/parete-giorno-vertigo.webp",
  "Soggiorno Opi": "https://www.astadelmobile.it/Images/parete-giorno-opi.webp",
  "Parete Nox": "https://www.astadelmobile.it/Images/parete-giorno-nox.webp",
  "Comp. Eris": "https://www.astadelmobile.it/Images/parete-giorno-eris.webp",
  "Parete Venus": "https://www.astadelmobile.it/Images/zonagiorno-venus.webp",
  "Soggiorno Haiko": "https://www.astadelmobile.it/Images/haiko-parete-soggiorno.webp",
  "Parete Zafiro": "https://www.astadelmobile.it/Images/zafiro-parete-soggiorno-finitura-grigio-catania-oak.webp",
  "Parete Alpha": "https://www.astadelmobile.it/Images/zona-giorno-alpha-copertina.webp",
};

// Prezzi casuali per prodotti senza prezzo, ragionevoli per categoria
const FALLBACK_PRICES = {
  "Cucine":        [3490,3890,4290,4690,5190,5890,6490,7290],
  "Divani":        [890,1150,1490,1890,2290,2890,3490],
  "Zona Giorno":   [780,1080,1480,1980,2480,2980],
  "Zona Notte":    [890,1290,1690,2090,2490,2990],
  "Tavoli & Sedie":[68,79,95,110,138,648,890,1090,1490,1990],
  "Bagni":         [890,1290,1890,2490,3290],
  "Materassi":     [490,690,890,1090,1390,1890],
  "Camerette":     [1290,1690,2090,2490,2990],
  "Complementi":   [290,490,690,890,1290],
};
function fallbackPrice(category, id) {
  const pool = FALLBACK_PRICES[category] || [890,1290,1890,2490];
  const base = pool[id % pool.length];
  const discount = [30,35,40,45][id%4];
  const original = Math.round(base / (1 - discount/100) / 10) * 10;
  return { price:`€${base.toLocaleString("it-IT")}`, oldPrice:`€${original.toLocaleString("it-IT")}`, discount };
}

function buildProducts() {
  const items = [...REAL_PRODUCTS].map((p,i) => {
    // Assign brand if missing
    const brand = p.brand || getBrandForProduct(p.category, p.id||i);
    // Assign price if missing
    let price    = p.price    || p.promoPrice    || "";
    let oldPrice = p.oldPrice || p.originalPrice || null;
    let discount = p.discount || null;
    if (!price) {
      const fp = fallbackPrice(p.category, p.id||i);
      price    = fp.price;
      oldPrice = fp.oldPrice;
      discount = fp.discount;
    }
    // Se non ha oldPrice/discount, genera uno finto
    if (price && !oldPrice && p.mode !== "preventivo") {
      const raw = parseInt(price.replace(/[^0-9]/g,""));
      const seed = typeof (p.id||i) === "number" ? (p.id||i) : String(p.id||i).split("").reduce((a,c)=>a+c.charCodeAt(0),0);
      if (raw > 0 && (seed % 5) < 3) {
        const pcts = [10,12,15,18,20,22,25];
        const pct = pcts[seed % pcts.length];
        const orig = Math.round(raw / (1 - pct/100));
        oldPrice = "€" + orig.toLocaleString("it-IT");
        discount = String(pct);
      }
    }
    return {
      ...p, brand, price, oldPrice, discount,
      imgIdx: i,
      imgUrl: PRODUCT_IMGS[p.name] || p.imgUrl || getProductImg(p.category, i),
    };
  });
  // Stock pronta consegna
  items.push(
  );
  return items;
}

// URL cucine da netcucine.it (immagini ufficiali fornitori)
const NC = "https://www.netcucine.it/wp-content/uploads";
const PROMOS = [
  {id:"p1", img:`${NC}/2024/06/Dora-verde-opaco-1024x576.jpg`,brand:"Net Cucine",name:"Cucina Atene",         category:"Cucine",originalPrice:"€2.790",promoPrice:"€1.535",saving:"45%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Design pulito, funzionalità completa anche in poco spazio."},
  {id:"p2", img:`${NC}/2024/11/sandy-ghiaccio-polvere-blu-indaco-dune-1024x576.jpg`,brand:"Net Cucine",name:"Cucina Larissa",       category:"Cucine",originalPrice:"€7.300",promoPrice:"€3.874",saving:"47%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Praticità, estetica e funzionalità in 363 cm."},
  {id:"p3", img:`${NC}/2022/04/cucina-moderna-era.jpg`,brand:"Net Cucine",name:"Cucina Mykonos",       category:"Cucine",originalPrice:"€7.380",promoPrice:"€4.340",saving:"41%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Moderna e luminosa, abbina volumi pieni e vuoti."},
  {id:"p4", img:`${NC}/2019/03/cucina-moderna-zoe.jpg`,brand:"Net Cucine",name:"Cucina Creta",         category:"Cucine",originalPrice:"€7.246",promoPrice:"€3.960",saving:"45%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Funzionalità e organizzazione in 360 cm."},
  {id:"p5", img:`${NC}/2018/07/cucina-moderna-elsa-1.jpg`,brand:"Net Cucine",name:"Cucina Dune",          category:"Cucine",originalPrice:"€11.300",promoPrice:"€5.450",saving:"52%",tag:"COME FOTO",scadenza:"come foto",desc:"Composizione da 370 cm con altezza maggiorata."},
  {id:"p6", img:`${NC}/2018/07/cucina-moderna-delizia-1.jpg`,brand:"Net Cucine",name:"Cucina Fira",          category:"Cucine",originalPrice:"€7.920",promoPrice:"€4.660",saving:"41%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Lavorazioni artigianali per una cucina moderna."},
  {id:"p7", img:`${NC}/2018/07/cucina-moderna-newsmart-1.jpg`,brand:"Net Cucine",name:"Cucina Kalamata",      category:"Cucine",originalPrice:"€6.830",promoPrice:"€3.796",saving:"44%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Prezzo vantaggioso e in negozio trovi un ExtraSconto."},
  {id:"p8", img:`${NC}/2018/07/cucina-moderna-kira-1.jpg`,brand:"Net Cucine",name:"Cucina Hop",           category:"Cucine",originalPrice:"€5.900",promoPrice:"€3.280",saving:"44%",tag:"COME FOTO",scadenza:"come foto",desc:"Componibile, finiture effetto legno, lucido, opaco e marmo."},
  {id:"p9", img:`${NC}/2018/07/cucina-moderna-kelly-1.jpg`,brand:"Net Cucine",name:"Cucina Kate",          category:"Cucine",originalPrice:"€4.990",promoPrice:"€2.940",saving:"41%",tag:"COME FOTO",scadenza:"come foto",desc:"Totalmente ammortizzata, poker di elettrodomestici inclusi."},
  {id:"p10",img:`${NC}/2018/07/cucina-classica-bea-1.jpg`,brand:"Net Cucine",name:"Cucina Keros",         category:"Cucine",originalPrice:"€7.460",promoPrice:"€3.998",saving:"46%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Ben organizzata, ha una grande capacità contenitiva."},
  {id:"p11",img:`${NC}/2024/06/Dora-verde-opaco-1024x576.jpg`,brand:"Net Cucine",name:"Cucina Miranda",       category:"Cucine",originalPrice:"€5.340",promoPrice:"€3.340",saving:"37%",tag:"COME FOTO",scadenza:"come foto",desc:"Ante ammortizzate a doghe orizzontali di spessore."},
  {id:"p12",img:`${NC}/2022/04/cucina-moderna-era.jpg`,brand:"Net Cucine",name:"Cucina Nadia",         category:"Cucine",originalPrice:"€5.230",promoPrice:"€2.990",saving:"43%",tag:"COME FOTO",scadenza:"come foto",desc:"Cucina classica, completa di elettrodomestici in 360 cm."},
  {id:"p13",img:`${NC}/2024/11/sandy-ghiaccio-polvere-blu-indaco-dune-1024x576.jpg`,brand:"Net Cucine",name:"Cucina Naxos",         category:"Cucine",originalPrice:"€7.990",promoPrice:"€4.580",saving:"43%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Cucina in linea da 348 cm completa di elettrodomestici."},
  {id:"p14",img:`${NC}/2018/07/cucina-moderna-delizia-1.jpg`,brand:"Net Cucine",name:"Cucina Santorini",     category:"Cucine",originalPrice:"€4.800",promoPrice:"€2.790",saving:"42%",tag:"COME FOTO",scadenza:"come foto",desc:"Linee decise e contrasti per un ambiente moderno."},
  {id:"p15",img:`${NC}/2019/03/cucina-moderna-zoe.jpg`,brand:"Net Cucine",name:"Cucina Oia",           category:"Cucine",originalPrice:"€6.490",promoPrice:"€3.606",saving:"44%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Estetica e praticità in un concept dal gusto contemporaneo."},
  {id:"p16",img:`${NC}/2018/07/cucina-moderna-kira-1.jpg`,brand:"Net Cucine",name:"Cucina Parikia",       category:"Cucine",originalPrice:"€7.507",promoPrice:"€4.416",saving:"41%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Elegante e funzionale per uno stile senza tempo."},
  {id:"p17",img:`${NC}/2018/07/cucina-moderna-kelly-1.jpg`,brand:"Net Cucine",name:"Cucina Paros",         category:"Cucine",originalPrice:"€5.280",promoPrice:"€3.080",saving:"42%",tag:"PROMO",scadenza:"scopri extra sconto in negozio",desc:"Elettrodomestici inclusi in 360 cm di funzionalità."},
  {id:"p18",img:`${NC}/2018/07/cucina-moderna-elsa-1.jpg`,brand:"Net Cucine",name:"Cucina Sherley",       category:"Cucine",originalPrice:"€4.670",promoPrice:"€2.650",saving:"43%",tag:"COME FOTO",scadenza:"come foto",desc:"Cucina componibile con poker di elettrodomestici inclusi."},
  {id:"p19",img:`${NC}/2018/07/cucina-moderna-newsmart-1.jpg`,brand:"Net Cucine",name:"Cucina Siviglia",      category:"Cucine",originalPrice:"€8.800",promoPrice:"€5.028",saving:"43%",tag:"COME FOTO",scadenza:"come foto",desc:"Sistema a gola e anta, ante, cestoni e cassetti ammortizzati."},
  {id:"p20",img:`${NC}/2018/07/cucina-classica-bea-1.jpg`,brand:"Net Cucine",name:"Cucina Zurigo",        category:"Cucine",originalPrice:"€7.940",promoPrice:"€4.538",saving:"43%",tag:"COME FOTO",scadenza:"come foto",desc:"Totalmente ammortizzata, inclusa di elettrodomestici."},
];


// ─── HOME AMBIENTI (tutti tranne "tutto") ────
const HOME_AMBIENTI = [
  { key:"cucina",      name:"Cucine",        img:"https://www.astadelmobile.it/Images/hp-cucine-4.webp" },
  { key:"living",      name:"Living",        img:"https://www.astadelmobile.it/Images/hpzona-giorno.webp" },
  { key:"notte",       name:"Zona Notte",    img:"https://www.astadelmobile.it/Images/hp-zona-notte-2.webp" },
  { key:"divani",      name:"Divani",        img:"https://www.astadelmobile.it/Images/hp-divani.webp" },
  { key:"tavoli",      name:"Tavoli & Sedie",img:"https://www.astadelmobile.it/Images/hp-tavolo-2.webp" },
  { key:"bagno",       name:"Bagno",         img:"https://www.astadelmobile.it/Images/hp-bagno.webp" },
  { key:"camerette",   name:"Camerette",     img:"https://www.astadelmobile.it/Images/hp-camerette-3.jpg" },
  { key:"complementi", name:"Complementi",   img:"https://www.astadelmobile.it/Images/hp-complementi-2.webp" },
  { key:"illuminazione",name:"Illuminazione",img:"https://www.ideal-lux.com/assets/products/loc/_webp1k/434392/345291_LOC001_WAVES-3_SP_BIANCO.webp" },
];

// ─── STYLES ────────────────────────────────
const cardS = {background:"white",borderRadius:14,border:"1.5px solid #ece7e0",overflow:"hidden"};
const inp   = {padding:"12px 14px",borderRadius:8,border:"1.5px solid #ddd7d0",width:"100%",fontSize:14,outline:"none",background:"#fefefe",fontFamily:"inherit",boxSizing:"border-box"};
const sel   = {...inp,cursor:"pointer",background:"white"};
const TAG   = {fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"#9a8e88"};
const mkBtn = (v="dark",full) => ({
  padding:"12px 22px",borderRadius:8,cursor:"pointer",fontWeight:700,fontSize:14,
  background:v==="dark"?"#1a1210":v==="gold"?"#c8b89a":v==="red"?"linear-gradient(to bottom, #ba1e1e 0%, #9e1818 55%, #8a1515 100%)":"white",
  color:v==="dark"||v==="red"?"white":v==="gold"?"#1a1210":"#1a1210",
  border:v==="outline"?"1.5px solid #1a1210":"none",
  width:full?"100%":"auto",fontFamily:"inherit",transition:"opacity .15s"
});

// ─── TIER TOP BAR ──────────────────────────
function TierBar({ brand, forceGold }) {
  const t = forceGold ? TIERS.gold : pickTier(brand);
  return (
    <>
      {t.label === "Artigianale" ? (
        <div style={{position:"absolute",top:0,left:0,right:0,height:5,background:"#e0bf3a",zIndex:3}}/>
      ) : (
        <div style={{position:"absolute",top:0,left:0,right:0,height:4,background:t.color,zIndex:3}}/>
      )}
    </>
  );
}

// ─── SUPPLIER LOGO in card ─────────────────
function SupplierLogo({ brand, small }) {
  const logoUrl = BRAND_LOGO_MAP[brand];
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={brand||"brand"}
        style={{ height: small ? 20 : 26, width:"auto", maxWidth: small ? 70 : 100,
          objectFit:"contain", display:"block", opacity:.85 }}
        onError={e=>{
          e.target.style.display='none';
          if(e.target.parentNode) {
            const span = document.createElement('span');
            span.style.cssText = 'font-size:10px;font-weight:700;color:#6b5f5b;';
            span.textContent = brand||'';
            e.target.parentNode.appendChild(span);
          }
        }}
      />
    );
  }
  return (
    <span style={{fontSize:10,fontWeight:700,color:"#6b5f5b",maxWidth:80,overflow:"hidden",
      textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{brand||""}</span>
  );
}

// ─── DISCOUNT RIBBON ───────────────────────
function DiscRibbon({ pct }) {
  if(!pct) return null;
  return (
    <div style={{
      position:"absolute",top:12,left:-2,zIndex:10,
      background:"linear-gradient(to bottom, #ba1e1e 0%, #8a1515 100%)",
      color:"white",
      fontSize:11,fontWeight:900,
      padding:"4px 12px 4px 8px",
      borderRadius:"0 999px 999px 0",
      boxShadow:"0 2px 8px rgba(138,21,21,.45)",
      letterSpacing:".03em"
    }}>
      -{pct}%
    </div>
  );
}

// ─── PRODUCT CARD VERTICALE (usata in homepage) ──
function ProductCardVertical({ item, onOpen, forceGold }) {
  const [hov,setHov] = useState(false);
  const tier = forceGold ? TIERS.gold : pickTier(item.brand);
  const isStock = item.availability === "stock";
  const isPrev  = item.mode === "preventivo";
  const ONLINE_CATS = ["Divani","Tavoli & Sedie","Complementi","Bagni"];
  const isOnline = item.availability==="online" || (!isStock && ONLINE_CATS.includes(item.category));
  const isGold = tier.label === "Artigianale";

  const rawPrice = parseInt((item.price||"").replace(/[^\d]/g,""));
  const discountPct = item.discount ? parseInt(item.discount) : (rawPrice > 0 && !item.oldPrice ? [10,12,15,18,20,22,25][rawPrice % 7] : 0);
  const oldPriceVal = item.oldPrice || (discountPct > 0 ? "€"+Math.round(rawPrice/(1-discountPct/100)) : null);

  return (
    <div onClick={onOpen} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{...cardS,display:"flex",flexDirection:"column",cursor:"pointer",position:"relative",
        boxShadow:hov?"0 10px 36px #0002":"0 2px 8px #0001",
        transform:hov?"translateY(-3px)":"none",transition:"all .22s",
        border:isGold?"1.5px solid #e0bf3a":"1.5px solid #ece7e0"}}>
      <TierBar brand={item.brand} forceGold={forceGold}/>
      <DiscRibbon pct={item.discount}/>
      <div style={{height:200,overflow:"hidden",position:"relative"}}>
        <img src={item.imgKey?IMGS[item.imgKey]:(item.imgUrl||getProductImg(item.category,item.imgIdx||0))}
          alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover",
            transform:hov?"scale(1.05)":"scale(1)",transition:"transform .4s"}}
          onError={e=>{e.target.src=getProductImg(item.category,0);}}/>
        
      </div>
      <div style={{padding:"12px 14px 14px",flex:1,display:"flex",flexDirection:"column",gap:7,
        background:isGold?"#fffdf5":"white"}}>
        <div style={{display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:6}}>
          {isGold ? (
            <span/>
          ) : (
            <span style={{fontSize:9,fontWeight:800,color:tier.color,background:tier.bg,
              padding:"2px 8px",borderRadius:999,border:`1px solid ${tier.color}33`,whiteSpace:"nowrap"}}>
              {tier.label}</span>
          )}
          <span/>
          <SupplierLogo brand={item.brand} small/>
        </div>
        <div style={{fontWeight:700,fontSize:13,lineHeight:1.4,color:"#1a1210"}}>
          {item.name.includes("—")?item.name.split("—")[0].trim():item.name}
        </div>
        <div style={{fontSize:11,color:"#6b5f5b",lineHeight:1.55,flex:1,
          display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>
          {item.desc||"Scopri tutte le caratteristiche e i dettagli di questo prodotto."}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:2,marginTop:2}}>
          {isPrev ? (
            <span style={{fontSize:11,fontWeight:700,color:"#9a8e88"}}>Componibili su misura</span>
          ) : (
            <>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:4}}>
                <div style={{display:"flex",alignItems:"center",gap:5}}>
                  {oldPriceVal && <span style={{textDecoration:"line-through",color:"#c0b8b0",fontSize:11}}>{oldPriceVal}</span>}
                  {discountPct>0 && <span style={{fontSize:9,fontWeight:800,background:"#e74c3c",color:"white",padding:"1px 5px",borderRadius:999}}>-{discountPct}%</span>}
                </div>
                {isOnline && !isStock && <span style={{fontSize:9,fontWeight:800,padding:"2px 7px",borderRadius:999,background:"#2980b9",color:"white",whiteSpace:"nowrap",lineHeight:1.4}}>Ordinabile Online</span>}
              </div>
              <span style={{fontSize:17,fontWeight:800,color:"#1a1210",lineHeight:1}}>{item.price}</span>
            </>
          )}
        </div>
        <button style={{...mkBtn("dark",true),padding:"9px",fontSize:13,marginTop:2}}>Scopri →</button>
      </div>
    </div>
  );
}

// ─── PRODUCT CARD — layout orizzontale 65/35 ──
function ProductCard({ item, onOpen, forceGold }) {
  const [hov,setHov] = useState(false);
  const tier = forceGold ? TIERS.gold : pickTier(item.brand);
  const isStock = item.availability === "stock";
  const isPrev  = item.mode === "preventivo";
  const ONLINE_CATS = ["Divani","Tavoli & Sedie","Complementi","Bagni"];
  const isOnline = item.availability==="online" || (!isStock && ONLINE_CATS.includes(item.category));

  const rawPrice = parseInt((item.price||"").replace(/[^\d]/g,""));
  const discountPct = item.discount ? parseInt(item.discount) : (rawPrice > 0 && !item.oldPrice ? [10,12,15,18,20,22,25][rawPrice % 7] : 0);
  const oldPriceVal = item.oldPrice || (discountPct > 0 ? "€"+Math.round(rawPrice/(1-discountPct/100)) : null);

  const tierColor = tier.color;
  const isGold = tier.label === "Artigianale";

  return (
    <div
      onClick={onOpen}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display:"grid", gridTemplateColumns:"65% 35%",
        borderRadius:14, overflow:"hidden", cursor:"pointer",
        border: isGold ? "1.5px solid #e0bf3a" : "1.5px solid #ece7e0",
        background:"white", position:"relative",
        width:580, height:380,
        boxShadow: hov?"0 10px 36px rgba(0,0,0,.1)":"0 2px 8px rgba(0,0,0,.04)",
        transform: hov?"translateY(-2px)":"none",
        transition:"all .22s",
      }}
    >
      {/* ── COLONNA SX: immagine 65% ── */}
      <div style={{position:"relative",overflow:"hidden"}}>
        {/* Ribbon sconto */}
        <DiscRibbon pct={item.discount}/>
        {/* Immagine */}
        <img
          src={item.imgKey ? IMGS[item.imgKey] : (item.imgUrl || getProductImg(item.category, item.imgIdx||0))}
          alt={item.name}
          style={{width:"100%",height:"100%",objectFit:"cover",display:"block",
            transform:hov?"scale(1.04)":"scale(1)",transition:"transform .4s"}}
          onError={e=>{ e.target.src=getProductImg(item.category,0); }}
        />
        {/* Badge disponibilità */}

        {!isStock && isOnline && (
          <div style={{position:"absolute",bottom:10,left:10,zIndex:4}}>
            <span style={{fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:4,
              background:"rgba(41,128,185,.9)",color:"white",letterSpacing:".03em"}}>Ordinabile online</span>
          </div>
        )}
      </div>

      {/* ── COLONNA DX: info 35% ── */}
      <div style={{
        padding:"0 0 16px", display:"flex", flexDirection:"column",
        borderLeft:"1.5px solid #ece7e0",
        background: isGold ? "#fffdf5" : "white",
        position:"relative", overflow:"hidden",
      }}>
        {/* Barra fascia colorata in cima con sfumatura verso il basso */}
        <div style={{
          position:"relative", padding:"14px 18px 12px",
          background: `linear-gradient(to bottom, ${tierColor}ad 0%, ${tierColor}80 55%, ${tierColor}59 100%), #1a1210`,
          borderBottom:`1.5px solid ${tierColor}8c`,
        }}>
          <div style={{display:"flex",alignItems:"center",gap:5}}>
            {tier.label !== "Prodotti Artigianali" && <>
              <span style={{width:7,height:7,borderRadius:"50%",background:"rgba(255,255,255,.8)",flexShrink:0,display:"inline-block"}}/>
              <span style={{fontSize:10,fontWeight:700,color:"white",letterSpacing:".05em",textTransform:"uppercase"}}>
                {tier.label}
              </span>
            </>}
          </div>
        </div>
        <div style={{padding:"10px 16px 16px", flex:1, display:"flex", flexDirection:"column"}}>

        {/* Brand logo */}
        <div style={{marginBottom:5,minHeight:20,display:"flex",alignItems:"center"}}>
          <SupplierLogo brand={item.brand} small/>
        </div>

        {/* Nome */}
        <div style={{fontWeight:700,fontSize:14,lineHeight:1.35,color:"#1a1210",marginBottom:5}}>
          {item.name.includes("—") ? item.name.split("—")[0].trim() : item.name}
        </div>

        {/* Categoria */}
        <div style={{fontSize:11,color:"#b0a898",marginBottom:10}}>
          {item.category}{item.subcategory ? " · "+item.subcategory : ""}
        </div>

        {/* Descrizione */}
        <div style={{fontSize:12,color:"#6b5f5b",lineHeight:1.65,flex:1,
          display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",marginBottom:14}}>
          {item.desc || "Scopri tutte le caratteristiche e i dettagli di questo prodotto."}
        </div>

        {/* Prezzo */}
        <div style={{marginBottom:12}}>
          {isPrev ? (
            <div style={{fontSize:12,fontWeight:700,color:"#6b5f5b",fontStyle:"italic"}}>Componibili su misura</div>
          ) : (
            <div style={{display:"flex",alignItems:"baseline",flexWrap:"wrap",gap:5}}>
              {oldPriceVal && (
                <span style={{textDecoration:"line-through",color:"#c0b8b0",fontSize:12}}>{oldPriceVal}</span>
              )}
              {discountPct > 0 && (
                <span style={{fontSize:9,fontWeight:800,background:"#e74c3c",color:"white",
                  padding:"1px 5px",borderRadius:999}}>-{discountPct}%</span>
              )}
              <span style={{fontSize:19,fontWeight:800,color:"#1a1210",lineHeight:1}}>{item.price}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{display:"flex",gap:8,marginTop:"auto"}}>
          <button
            onClick={e=>{e.stopPropagation();onOpen();}}
            style={{...mkBtn("dark",true),padding:"9px 10px",fontSize:12}}>
            Scopri →
          </button>
          <button
            onClick={e=>e.stopPropagation()}
            style={{width:36,height:36,borderRadius:8,border:"1.5px solid #ece7e0",
              background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",
              justifyContent:"center",flexShrink:0,color:"#9a8e88",transition:"all .15s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="#c8b89a";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="#ece7e0";}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        </div>{/* fine padding wrapper */}
      </div>
    </div>
  );
}

// ─── SECTION WRAPPER ───────────────────────
function Sec({ bg="#faf8f5", children }) {
  const { isMobile, isTablet } = useBreakpoint();
  const px = isMobile?16:isTablet?32:64;
  return (
    <section style={{padding:`64px ${px}px`,background:bg}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>{children}</div>
    </section>
  );
}

function SH({ label, title, sub, isMobile, center }) {
  return (
    <div style={{marginBottom:32,textAlign:center?"center":"left"}}>
      {label && <div style={{...TAG,marginBottom:10,color:"#b0a898"}}>{label}</div>}
      <h2 style={{fontSize:isMobile?26:36,fontWeight:700,margin:"0 0 10px",letterSpacing:"-.02em",fontFamily:"Georgia,serif",color:"#1a1210"}}>{title}</h2>
      {sub && <p style={{color:"#6b5f5b",maxWidth:center?560:600,lineHeight:1.75,margin:center?"0 auto":"0",fontSize:14}}>{sub}</p>}
    </div>
  );
}

// ─── AUTH MODAL (Login / Registrazione) ────

// ─── AUTH MODAL (Login / Registrazione) ────
function AuthModal({ onClose }) {
  const { login, registra } = useApp();
  const [tab, setTab] = useState("login"); // "login" | "register"
  const [form, setForm] = useState({nome:"",cognome:"",email:"",pwd:"",pwdConfirm:"",privacy:false});
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const set = k => e => setForm(f=>({...f,[k]:e.target.type==="checkbox"?e.target.checked:e.target.value}));

  const submit = () => {
    if(tab==="register"){
      if(!form.nome||!form.email||!form.pwd) return setErr("Compila tutti i campi obbligatori.");
      if(form.pwd!==form.pwdConfirm) return setErr("Le password non coincidono.");
      if(!form.privacy) return setErr("Accetta la privacy policy per continuare.");
      const r = registra(form.nome, form.email, form.pwd);
      if(!r.ok) return setErr(r.msg||"Errore durante la registrazione.");
      setErr("");
      setDone(true);
    } else {
      if(!form.email||!form.pwd) return setErr("Inserisci email e password.");
      const r = login(form.email, form.pwd);
      if(!r.ok) return setErr("Email o password non corretti.");
      setErr("");
      onClose(r.user);
    }
  };

  const IcoG = <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>;
  const IcoFb = <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
  const IcoAp = <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>;

  const inputS = {
    width:"100%",padding:"11px 14px",borderRadius:8,
    border:"1.5px solid #ddd7d0",fontSize:14,outline:"none",
    fontFamily:"inherit",boxSizing:"border-box",background:"#fefefe"
  };

  return (
    <div style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,.45)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}}
      onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:"white",borderRadius:20,width:"100%",maxWidth:420,
        boxShadow:"0 24px 60px #0003",overflow:"hidden",position:"relative"}}>

        {/* TOP BAR */}
        <div style={{background:"#1a1210",padding:"22px 28px 20px"}}>
          <button onClick={onClose} style={{position:"absolute",top:14,right:16,background:"none",border:"none",
            cursor:"pointer",color:"rgba(255,255,255,.6)",fontSize:20,lineHeight:1}}>✕</button>
          <div style={{fontFamily:"Georgia,serif",fontSize:22,fontWeight:700,color:"white",marginBottom:4}}>
            {done ? "Benvenuto" : tab==="login" ? "Accedi" : "Crea account"}
          </div>
          <div style={{fontSize:12,color:"rgba(255,255,255,.6)"}}>
            {done ? "Accesso effettuato con successo" : "Asta del Mobile — Area personale"}
          </div>
        </div>

        {done ? (
          <div style={{padding:"32px 28px",textAlign:"center"}}>
            <div style={{width:60,height:60,borderRadius:"50%",background:"#eafaf1",border:"2px solid #27ae60",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <p style={{color:"#3d302e",fontSize:15,margin:"0 0 20px"}}>
              {tab==="login" ? "Hai effettuato l'accesso." : "Account creato con successo. Controlla la tua email per confermare."}
            </p>
            <button onClick={onClose} style={{...mkBtn("dark",true),padding:"12px"}}>Chiudi</button>
          </div>
        ) : (
          <div style={{padding:"24px 28px 28px"}}>
            {/* TABS */}
            <div style={{display:"flex",borderRadius:10,background:"#f4f1ee",padding:4,marginBottom:20}}>
              {["login","register"].map(t=>(
                <button key={t} onClick={()=>{setTab(t);setErr("");}}
                  style={{flex:1,padding:"9px",borderRadius:8,border:"none",cursor:"pointer",
                    fontWeight:700,fontSize:13,fontFamily:"inherit",transition:"all .15s",
                    background:tab===t?"white":"transparent",
                    color:tab===t?"#1a1210":"#9a8e88",
                    boxShadow:tab===t?"0 1px 4px #0001":"none"}}>
                  {t==="login"?"Accedi":"Registrati"}
                </button>
              ))}
            </div>

            {/* SOCIAL LOGIN */}
            <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:18}}>
              {[
                {ico:IcoG, label:"Continua con Google",   bg:"white",   color:"#3d302e", border:"1.5px solid #ddd7d0"},
                {ico:IcoFb,label:"Continua con Facebook", bg:"#1877F2", color:"white",   border:"none"},
                {ico:IcoAp,label:"Continua con Apple",    bg:"#000",    color:"white",   border:"none"},
              ].map((b,i)=>(
                <button key={i} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,
                  padding:"10px 16px",borderRadius:10,border:b.border,cursor:"pointer",
                  background:b.bg,color:b.color,fontWeight:600,fontSize:13,fontFamily:"inherit",
                  boxShadow:"0 1px 3px #0001",transition:"opacity .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.opacity=".85"}
                  onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                  {b.ico}<span>{b.label}</span>
                </button>
              ))}
            </div>

            {/* DIVIDER */}
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
              <div style={{flex:1,height:1,background:"#ece7e0"}}/>
              <span style={{fontSize:11,color:"#9a8e88",fontWeight:600}}>oppure con email</span>
              <div style={{flex:1,height:1,background:"#ece7e0"}}/>
            </div>

            {/* FORM */}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {tab==="register" && (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                  <input placeholder="Nome *" value={form.nome} onChange={set("nome")} style={inputS}/>
                  <input placeholder="Cognome" value={form.cognome} onChange={set("cognome")} style={inputS}/>
                </div>
              )}
              <input type="email" placeholder="Email *" value={form.email} onChange={set("email")} style={inputS}/>
              <input type="password" placeholder="Password *" value={form.pwd} onChange={set("pwd")} style={inputS}/>
              {tab==="register" && (
                <input type="password" placeholder="Conferma password *" value={form.pwdConfirm} onChange={set("pwdConfirm")} style={inputS}/>
              )}
              {tab==="register" && (
                <label style={{display:"flex",alignItems:"flex-start",gap:8,cursor:"pointer",marginTop:2}}>
                  <input type="checkbox" checked={form.privacy} onChange={set("privacy")} style={{marginTop:2,accentColor:"#1a1210"}}/>
                  <span style={{fontSize:11,color:"#7a6e68",lineHeight:1.5}}>
                    Accetto la <span style={{color:"#1a1210",textDecoration:"underline",cursor:"pointer"}}>Privacy Policy</span> e i <span style={{color:"#1a1210",textDecoration:"underline",cursor:"pointer"}}>Termini di servizio</span> di Asta del Mobile.
                  </span>
                </label>
              )}
              {tab==="login" && (
                <div style={{textAlign:"right"}}>
                  <span style={{fontSize:11,color:"#9a8e88",cursor:"pointer",textDecoration:"underline"}}>Password dimenticata?</span>
                </div>
              )}
              {err && <div style={{background:"#fdf0ef",border:"1px solid #f5c6c3",borderRadius:8,padding:"9px 12px",fontSize:12,color:"#c0392b"}}>{err}</div>}
              <button onClick={submit} style={{...mkBtn("dark",true),padding:"13px",marginTop:4,fontSize:14}}>
                {tab==="login" ? "Accedi →" : "Crea account →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── HEADER ────────────────────────────────
// ─── GLOBAL SEARCH ─────────────────────────────────────────────────────────
function GlobalSearch({ onClose, setPage, goToCatalog, inline=false, initialQ="" }) {
  const [q, setQ] = useState(initialQ);
  const [open, setOpen] = useState(false); // apre solo al focus/click
  const inputRef = useRef(null);
  const wrapRef  = useRef(null);
  const { isMobile } = useBreakpoint();
  const allProds = useMemo(() => buildProducts(), []);

  const prodResults = useMemo(() => {
    if (!q.trim()) return [];
    const kw = q.toLowerCase();
    return allProds.filter(p =>
      `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(kw)
    ).slice(0, 6);
  }, [q, allProds]);

  const suggerimenti = ["Cucina moderna","Divano angolare","Letto matrimoniale","Tavolo allungabile","Camera completa","Bagno sospeso"];
  const sezioni = [["Promo Bloccate","promo"],["Falegnameria","falegnameria"],["Pronta Consegna","prontaconsegna"],["Contract","contract"]];

  const showDropdown = inline ? open : true;

  useEffect(() => {
    if(!inline) inputRef.current?.focus();
    const esc = e => { if(e.key==="Escape"){ setOpen(false); if(!inline) onClose(); } };
    const click = e => {
      if(wrapRef.current && !wrapRef.current.contains(e.target)){
        setOpen(false);
        if(!inline) onClose();
      }
    };
    window.addEventListener("keydown", esc);
    window.addEventListener("mousedown", click);
    return () => { window.removeEventListener("keydown", esc); window.removeEventListener("mousedown", click); };
  }, [inline, onClose]);

  const go = (dest) => { if(goToCatalog) goToCatalog(dest); else setPage("catalog"); setOpen(false); if(!inline) onClose(); };
  const goProd = (p) => go(p.name);
  const goSearch = () => { if(q.trim()) go(q.trim()); };

  const tierColors = {
    "Prodotti Selezionati":"#27ae60","Prodotti dell'Atelier":"#2980b9",
    "Prodotti Esclusivi":"#7d3c98","Prodotti Artigianali":"#e0bf3a",
  };

  const hasResults = prodResults.length > 0;

  // INLINE: barra fissa con dropdown sotto
  if(inline) return (
    <div ref={wrapRef} style={{position:"relative"}}>
      {/* Barra di input */}
      <div style={{display:"flex",alignItems:"center",gap:10,
        background:"#faf8f5",border:"1.5px solid",
        borderColor:open?"#c8b89a":"#e8e0d0",
        borderRadius:open&&showDropdown?"8px 8px 0 0":"8px",
        padding:"9px 16px",transition:"all .15s"}}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9a8e88" strokeWidth="2" style={{flexShrink:0}}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input
          ref={inputRef}
          value={q}
          onChange={e=>{ setQ(e.target.value); setOpen(true); }}
          onFocus={()=>setOpen(true)}
          onKeyDown={e=>{ if(e.key==="Enter"&&q.trim()) goSearch(); }}
          placeholder="Cerca prodotti, marchi, categorie…"
          style={{flex:1,border:"none",outline:"none",fontSize:13,fontFamily:"inherit",color:"#1a1210",background:"transparent"}}
        />
        {q && <button onClick={()=>{setQ("");inputRef.current?.focus();}}
          style={{background:"none",border:"none",cursor:"pointer",color:"#a09080",padding:0,display:"flex",alignItems:"center",flexShrink:0}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a09080" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>}
        <kbd style={{fontSize:10,color:"#b0a090",background:"#ece7e0",border:"1px solid #ddd5c8",borderRadius:3,padding:"2px 6px",fontFamily:"inherit",flexShrink:0}}>⌘K</kbd>
      </div>

      {/* Dropdown risultati */}
      {open && showDropdown && (
        <div style={{position:"absolute",top:"100%",left:0,right:0,zIndex:9999,
          background:"white",border:"1.5px solid #c8b89a",borderTop:"none",
          borderRadius:"0 0 12px 12px",boxShadow:"0 8px 32px rgba(0,0,0,.13)",overflow:"hidden"}}>
          {_searchBody()}
        </div>
      )}
    </div>
  );

  // POPUP (mobile / ⌘K)
  return (
    <div style={{position:"fixed",inset:0,zIndex:9000,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:isMobile?60:80,background:"rgba(20,14,12,.6)",backdropFilter:"blur(4px)"}}
      onClick={onClose}>
      <div ref={wrapRef} style={{width:"100%",maxWidth:640,margin:"0 16px",background:"white",borderRadius:14,boxShadow:"0 24px 64px rgba(0,0,0,.22)",overflow:"hidden"}}
        onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",borderBottom:"1px solid #f0ebe0"}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a09080" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input ref={inputRef} value={q} onChange={e=>setQ(e.target.value)}
            onKeyDown={e=>{ if(e.key==="Enter"&&q.trim()) goSearch(); }}
            placeholder="Cerca prodotti, brand, categorie…"
            style={{flex:1,border:"none",outline:"none",fontSize:15,fontFamily:"inherit",color:"#1a1210",background:"transparent"}}/>
          {q && <button onClick={()=>setQ("")} style={{background:"none",border:"none",cursor:"pointer",color:"#a09080",padding:0,display:"flex"}}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a09080" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>}
          <kbd style={{fontSize:11,color:"#b0a090",background:"#f5f0e8",border:"1px solid #e0d8cc",borderRadius:4,padding:"2px 7px",fontFamily:"inherit"}}>ESC</kbd>
        </div>
        {_searchBody()}
      </div>
    </div>
  );

  function _searchBody() {
    return (
      <>
        {!q && (
          <div style={{padding:"12px 16px 14px"}}>
            <div style={{fontSize:10,fontWeight:700,color:"#c0b0a0",letterSpacing:".06em",textTransform:"uppercase",marginBottom:8}}>Ricerche rapide</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12}}>
              {suggerimenti.map(s=>(
                <button key={s} onClick={()=>setQ(s)}
                  style={{background:"#f5f0e8",border:"1px solid #e8e0d0",borderRadius:20,padding:"4px 11px",fontSize:11,color:"#5a4a42",cursor:"pointer",fontFamily:"inherit"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#eee5d5"}
                  onMouseLeave={e=>e.currentTarget.style.background="#f5f0e8"}>{s}</button>
              ))}
            </div>
            <div style={{fontSize:10,fontWeight:700,color:"#c0b0a0",letterSpacing:".06em",textTransform:"uppercase",marginBottom:8}}>Sezioni</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {sezioni.map(([label,key])=>(
                <button key={key} onClick={()=>{setPage(key);setOpen(false);if(!inline)onClose();}}
                  style={{background:"#f0f6ff",border:"1px solid #d0e4ff",borderRadius:20,padding:"4px 11px",fontSize:11,color:"#1a66cc",cursor:"pointer",fontFamily:"inherit"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#dceeff"}
                  onMouseLeave={e=>e.currentTarget.style.background="#f0f6ff"}>{label}</button>
              ))}
            </div>
          </div>
        )}
        {q && hasResults && (
          <div>
            {prodResults.map((p,i)=>(
              <div key={p.id||i} onClick={()=>goProd(p)}
                style={{display:"flex",alignItems:"center",gap:10,padding:"9px 16px",cursor:"pointer",borderBottom:"1px solid #faf7f2"}}
                onMouseEnter={e=>e.currentTarget.style.background="#faf7f2"}
                onMouseLeave={e=>e.currentTarget.style.background="white"}>
                <div style={{width:40,height:40,borderRadius:6,overflow:"hidden",flexShrink:0,background:"#f0ebe0"}}>
                  <img src={p.imgUrl} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>{e.target.style.display="none";}}/>
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:13,fontWeight:600,color:"#1a1210",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{p.name}</div>
                  <div style={{fontSize:11,color:"#8a7a72"}}>{p.brand} · {p.category}</div>
                </div>
                <div style={{fontSize:13,fontWeight:700,color:"#1a1210",flexShrink:0}}>{p.price}</div>
                {p.tier?.label && p.tier.label !== "Prodotti Artigianali" && (
                  <div style={{fontSize:9,fontWeight:700,padding:"2px 6px",borderRadius:4,flexShrink:0,
                    color:tierColors[p.tier?.label]||"#8b7355",
                    background:(tierColors[p.tier?.label]||"#8b7355")+"18"}}>
                    {p.tier.label}
                  </div>
                )}
              </div>
            ))}
            <div style={{padding:"10px 16px"}}>
              <button onClick={goSearch}
                style={{width:"100%",background:"#1a1210",color:"white",border:"none",borderRadius:8,padding:"10px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                Cerca "{q}" nel catalogo
              </button>
            </div>
          </div>
        )}
        {q && !hasResults && (
          <div style={{padding:"16px",textAlign:"center"}}>
            <div style={{fontSize:13,color:"#a09080",marginBottom:10}}>Nessun risultato per <strong style={{color:"#1a1210"}}>"{q}"</strong></div>
            <button onClick={goSearch}
              style={{background:"#f5f0e8",color:"#1a1210",border:"1.5px solid #e0d8cc",borderRadius:8,padding:"9px 20px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>
              Cerca nel catalogo completo
            </button>
          </div>
        )}
      </>
    );
  }
}


function Header({ page, setPage, goToCatalog, goToShop }) {
  const { isMobile } = useBreakpoint();
  const { utente, logout } = useApp();
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [authOpen,setAuthOpen] = useState(false);
  const [searchOpen,setSearchOpen] = useState(false);
  const [profileOpen,setProfileOpen] = useState(false);
  const [cartOpen,setCartOpen] = useState(false);
  const [favOpen,setFavOpen]   = useState(false);
  const profileRef = useRef(null);
  const isStaff = utente && ["arredatore","assistenza","admin"].includes(utente.role);

  useEffect(()=>{
    const fn = e => { if(profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false); };
    document.addEventListener("mousedown", fn);
    return ()=>document.removeEventListener("mousedown", fn);
  },[]);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>10);
    window.addEventListener("scroll",fn);
    return()=>window.removeEventListener("scroll",fn);
  },[]);
  // Shortcut Cmd+K / Ctrl+K
  useEffect(()=>{
    const fn=e=>{if((e.metaKey||e.ctrlKey)&&e.key==="k"){e.preventDefault();setSearchOpen(true);}};
    window.addEventListener("keydown",fn);
    return()=>window.removeEventListener("keydown",fn);
  },[]);
  const links=[
    {key:"home",label:"Home"},
    {key:"catalog",label:"Catalogo"},
    {key:"promo",label:"Promo bloccate", style:"promo"},
    {key:"falegnameria",label:"Falegnameria", style:"falegnameria"},
    {key:"arredatori",label:"Il tuo arredatore"},
    {key:"fornitori",label:"Fornitori"},
    {key:"progetti",label:"Progetti"},
    {key:"shop",label:"Shop Online", style:"shop"},
    {key:"contract",label:"Contract", style:"contract"},
  ];
  const go=k=>{setPage(k);setOpen(false);};
  const IcoUser = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  return (
    <>
    <header style={{position:"sticky",top:0,zIndex:200,background:"white",
      borderBottom:"1.5px solid #ece7e0",
      boxShadow:scrolled?"0 2px 16px #0001":"none",transition:"box-shadow .2s"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:isMobile?"0 16px":"0 40px",
        height:isMobile?64:80,display:"flex",alignItems:"center",
        ...(isMobile ? {} : {display:"grid",gridTemplateColumns:"180px 1fr 1fr 180px",alignItems:"center",gap:0})}}>

        {/* COL 1 — LOGO */}
        <div onClick={()=>go("home")} style={{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
          <img src={IMGS.logo_asta} alt="Asta del Mobile"
            style={{height:isMobile?38:56,width:"auto",objectFit:"contain",display:"block",}}/>
        </div>

        {isMobile ? (
          <div style={{display:"flex",alignItems:"center",gap:8,justifyContent:"flex-end",gridColumn:"2/4"}}>
            <button onClick={()=>setSearchOpen(o=>!o)} title="Cerca"
              style={{background:"none",border:"none",cursor:"pointer",color:"#1a1210",padding:6,display:"flex",alignItems:"center"}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
            <button onClick={()=>setAuthOpen(true)}
              style={{background:"none",border:"none",cursor:"pointer",color:"#1a1210",padding:6,display:"flex",alignItems:"center"}}>
              {IcoUser}
            </button>
            <button title="Preferiti" onClick={()=>setFavOpen(true)}
              style={{background:"none",border:"none",cursor:"pointer",color:"#1a1210",padding:6,display:"flex",alignItems:"center",position:"relative"}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <button onClick={()=>setOpen(o=>!o)}
              style={{background:"none",border:"none",cursor:"pointer",fontSize:22,color:"#1a1210",padding:8}}>
              {open?"✕":"☰"}
            </button>
          </div>
        ) : (
          <>
            {/* COL 2 — NAV CENTRATA */}
            <nav style={{display:"flex",gap:18,alignItems:"center",justifyContent:"center",flexWrap:"nowrap",overflow:"visible"}}>
              {/* Home */}
              <span onClick={()=>go("home")} style={{cursor:"pointer",fontSize:12,fontWeight:page==="home"?700:400,color:page==="home"?"#1a1210":"#7a6e68",borderBottom:page==="home"?"2px solid #1a1210":"2px solid transparent",paddingBottom:2,transition:"transform .15s",whiteSpace:"nowrap",display:"inline-block"}}
                onMouseEnter={e=>e.currentTarget.style.transform="scale(1.08)"}
                onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
              >Home</span>

              {/* TRIO con rettangolo "NEI NOSTRI SHOWROOM" */}
              <div style={{position:"relative",border:"1.5px solid #1a1210",borderRadius:9,padding:"10px 8px 6px",flexShrink:0}}>
                {/* Label superiore che interrompe il bordo */}
                <div style={{
                  position:"absolute",top:-8,left:"50%",transform:"translateX(-50%)",
                  background:"white",padding:"0 8px",
                  fontSize:9,fontWeight:700,letterSpacing:".08em",color:"#1a1210",
                  whiteSpace:"nowrap",textTransform:"uppercase",lineHeight:"16px"
                }}>Nei nostri showroom</div>
                {/* I 3 bottoni affiancati con separatore */}
                <div style={{display:"flex",alignItems:"center",gap:0}}>
                  <div onClick={()=>go("catalog")}
                    style={{padding:"4px 7px",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",
                      color:"#1a1210",
                      borderBottom:page==="catalog"?"1px solid #1a1210":"1px solid transparent",
                      paddingBottom:1,transition:"transform .15s"}}
                    onMouseEnter={e=>e.currentTarget.style.transform="scale(1.08)"}
                    onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
                  >Catalogo</div>

                  <span style={{color:"#1a1210",fontSize:14,lineHeight:1}}>|</span>

                  <div onClick={()=>go("promo")}
                    style={{padding:"4px 7px",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",
                      color:"#ba1e1e",
                      borderBottom:page==="promo"?"1px solid #ba1e1e":"1px solid transparent",
                      paddingBottom:1,transition:"transform .15s"}}
                    onMouseEnter={e=>e.currentTarget.style.transform="scale(1.08)"}
                    onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
                  >Promo Bloccate</div>

                  <span style={{color:"#1a1210",fontSize:14,lineHeight:1}}>|</span>

                  <div onClick={()=>go("falegnameria")}
                    style={{padding:"4px 7px",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",
                      color:"#1a1210",
                      borderBottom:page==="falegnameria"?"1px solid #1a1210":"1px solid transparent",
                      paddingBottom:1,transition:"transform .15s"}}
                    onMouseEnter={e=>e.currentTarget.style.transform="scale(1.08)"}
                    onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
                  >Falegnameria</div>
                </div>
              </div>

              {/* Contract, Il tuo arredatore, Progetti */}
              {[["contract","Contract"],["arredatori","Il tuo arredatore"],["progetti","Progetti"]].map(([key,label])=>(
                <span key={key} onClick={()=>go(key)}
                  style={{cursor:"pointer",fontSize:12,fontWeight:page===key?700:400,color:page===key?"#1a1210":"#7a6e68",borderBottom:page===key?"2px solid #1a1210":"2px solid transparent",paddingBottom:2,transition:"transform .15s",whiteSpace:"nowrap",display:"inline-block"}}
                  onMouseEnter={e=>e.currentTarget.style.transform="scale(1.08)"}
                  onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
                >{label}</span>
              ))}

            </nav>

            {/* COL 3 — BOTTONE SHOP */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div data-shop-wrapper="1" style={{display:"flex",alignItems:"stretch",cursor:"pointer"}}
                onClick={()=>{ if(goToShop) goToShop(); else go("shop"); }}
                onMouseEnter={e=>{const el=e.currentTarget.querySelector('[data-shop-btn="1"]');if(el){el.style.background="#e8bc1e";const txt=el.querySelector('[data-shop-text]');if(txt)txt.style.color="#1a1210";}}}
                onMouseLeave={e=>{const el=e.currentTarget.querySelector('[data-shop-btn="1"]');if(el){el.style.background="#1a1210";const txt=el.querySelector('[data-shop-text]');if(txt)txt.style.color="white";}}}>

                {/* Rettangolo principale */}
                <div data-shop-btn="1" style={{
                  border:"1.5px solid #1a1210",
                  borderRadius:"9px 0 0 9px",
                  padding:"4px 18px 4px",
                  background:"#1a1210",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center",
                  gap:4,
                  transition:"background .18s",
                }}>
                  <div data-shop-text="1" style={{fontSize:11,fontWeight:800,color:"white",whiteSpace:"nowrap",letterSpacing:".03em",transition:"color .18s"}}>Acquistabile Online</div>
                  <div style={{display:"flex",height:3,width:"100%",borderRadius:2,overflow:"hidden"}}>
                    <div style={{flex:1,background:"#009246"}}/>
                    <div style={{flex:1,background:"#ffffff"}}/>
                    <div style={{flex:1,background:"#ce2b37"}}/>
                  </div>
                </div>

                {/* Icona carrello — apre drawer, mostra counter */}
                {(()=>{
                  const { cartItems } = useCart();
                  const count = cartItems.reduce((s,x)=>s+x.qty,0);
                  return (
                    <div data-shop-btn="2" onClick={e=>{e.stopPropagation();setCartOpen(true);}}
                      onMouseEnter={e=>{e.stopPropagation();e.currentTarget.style.transform="scale(1.18)";}}
                      onMouseLeave={e=>{e.stopPropagation();e.currentTarget.style.transform="scale(1)";const p=e.currentTarget.closest('[data-shop-wrapper]');if(p){const btn=p.querySelector('[data-shop-btn="1"]');if(btn){btn.style.background="#1a1210";const txt=btn.querySelector('[data-shop-text]');if(txt)txt.style.color="white";}}}}
                      style={{
                        background:"#1a1210",
                        borderRadius:"0 9px 9px 0",
                        border:"1.5px solid #1a1210",
                        borderLeft:"1px solid rgba(255,255,255,.15)",
                        padding:"0 10px",
                        display:"flex",alignItems:"center",justifyContent:"center",
                        position:"relative",
                        transition:"transform .18s",
                      }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                      </svg>
                      {count > 0 && (
                        <div style={{position:"absolute",top:-6,right:-6,width:17,height:17,borderRadius:"50%",
                          background:"#ba1e1e",color:"white",fontSize:8,fontWeight:800,
                          display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1,
                          border:"1.5px solid white"}}>
                          {count > 9 ? "9+" : count}
                        </div>
                      )}
                    </div>
                  );
                })()}

              </div>
            </div>

            {/* COL 4 — ICONE: CUORE + PROFILO */}
            <div style={{display:"flex",gap:10,alignItems:"center",justifyContent:"flex-end"}}>
              {/* PROFILO */}
              <div ref={profileRef} style={{position:"relative"}}>
                <button
                  onClick={()=>{ if(utente) setProfileOpen(o=>!o); else setAuthOpen(true); }}
                  title={utente ? utente.nome : "Accedi / Registrati"}
                  style={{background:utente?"#1a1210":"none",border:"1.5px solid",
                    borderColor:utente?"#1a1210":"#ece7e0",borderRadius:"50%",
                    width:36,height:36,cursor:"pointer",display:"flex",alignItems:"center",
                    justifyContent:"center",color:utente?"white":"#1a1210",flexShrink:0,
                    transition:"all .15s",fontWeight:700,fontSize:12}}
                  onMouseEnter={e=>{if(!utente){e.currentTarget.style.background="#f5f0e8";e.currentTarget.style.borderColor="#c8b89a";}}}
                  onMouseLeave={e=>{if(!utente){e.currentTarget.style.background="none";e.currentTarget.style.borderColor="#ece7e0";}}}>
                  {utente
                    ? <span>{utente.nome.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()}</span>
                    : IcoUser
                  }
                </button>
                {/* Dropdown profilo */}
                {profileOpen && utente && (
                  <div style={{
                    position:"absolute",top:"calc(100% + 10px)",right:0,
                    background:"white",border:"1.5px solid #ece7e0",borderRadius:12,
                    boxShadow:"0 12px 40px rgba(0,0,0,.14)",
                    minWidth:220,zIndex:9999,overflow:"hidden"
                  }}>
                    <div style={{padding:"14px 16px",background:"#1a1210",borderBottom:"1px solid #2d2018"}}>
                      <div style={{fontSize:13,fontWeight:700,color:"white"}}>{utente.nome}</div>
                      <div style={{fontSize:11,color:"rgba(200,184,154,.7)",marginTop:2}}>{utente.email}</div>
                      {isStaff && <div style={{marginTop:6,display:"inline-flex",alignItems:"center",gap:4,background:"rgba(200,184,154,.15)",borderRadius:999,padding:"2px 9px"}}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span style={{fontSize:10,fontWeight:700,color:"#c8b89a",letterSpacing:".06em",textTransform:"uppercase"}}>{utente.role}</span>
                      </div>}
                    </div>
                    <div style={{padding:"6px 0"}}>
                      {isStaff && (
                        <button onClick={()=>{setPage("backoffice");setProfileOpen(false);}}
                          style={{width:"100%",background:"none",border:"none",padding:"10px 16px",
                            cursor:"pointer",display:"flex",alignItems:"center",gap:10,
                            fontFamily:"inherit",fontSize:13,fontWeight:700,color:"#1a1210",
                            textAlign:"left",transition:"background .12s"}}
                          onMouseEnter={e=>e.currentTarget.style.background="#faf7f2"}
                          onMouseLeave={e=>e.currentTarget.style.background="none"}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                          Backoffice
                        </button>
                      )}
                      {!isStaff && (
                        <button onClick={()=>{setPage("area_cliente");setProfileOpen(false);}}
                          style={{width:"100%",background:"none",border:"none",padding:"10px 16px",
                            cursor:"pointer",display:"flex",alignItems:"center",gap:10,
                            fontFamily:"inherit",fontSize:13,fontWeight:600,color:"#1a1210",
                            textAlign:"left",transition:"background .12s"}}
                          onMouseEnter={e=>e.currentTarget.style.background="#faf7f2"}
                          onMouseLeave={e=>e.currentTarget.style.background="none"}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                          Le mie richieste
                        </button>
                      )}
                      <div style={{height:"1px",background:"#f0ebe0",margin:"4px 0"}}/>
                      <button onClick={()=>{logout();setProfileOpen(false);setPage("home");}}
                        style={{width:"100%",background:"none",border:"none",padding:"10px 16px",
                          cursor:"pointer",display:"flex",alignItems:"center",gap:10,
                          fontFamily:"inherit",fontSize:13,color:"#ba1e1e",
                          textAlign:"left",transition:"background .12s"}}
                        onMouseEnter={e=>e.currentTarget.style.background="#fff5f5"}
                        onMouseLeave={e=>e.currentTarget.style.background="none"}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* PREFERITI */}
              {(()=>{
                const { favItems } = useFav();
                return (
                  <button title="Preferiti" onClick={()=>setFavOpen(true)}
                    style={{background:"none",border:"1.5px solid #ece7e0",borderRadius:"50%",
                      width:36,height:36,cursor:"pointer",display:"flex",alignItems:"center",
                      justifyContent:"center",color:"#1a1210",flexShrink:0,position:"relative",
                      transition:"border-color .15s,background .15s"}}
                    onMouseEnter={e=>{e.currentTarget.style.background="#f5f0e8";e.currentTarget.style.borderColor="#c8b89a";}}
                    onMouseLeave={e=>{e.currentTarget.style.background="none";e.currentTarget.style.borderColor="#ece7e0";}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    {favItems.length > 0 && (
                      <div style={{position:"absolute",top:-4,right:-4,width:18,height:18,borderRadius:"50%",
                        background:"#ba1e1e",color:"white",fontSize:9,fontWeight:800,
                        display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}>
                        {favItems.length > 9 ? "9+" : favItems.length}
                      </div>
                    )}
                  </button>
                );
              })()}
            </div>
          </>
        )}
      </div>
      {/* SEARCH BAR ROW — desktop only, nascosta in Shop */}
      {!isMobile && page!=="shop" && (
        <div style={{borderTop:"1px solid #ece7e0",background:"white",padding:"8px 40px"}}>
          <div style={{maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"85% 15%",gap:12,alignItems:"center"}}>
            <GlobalSearch
              onClose={()=>setSearchOpen(false)}
              setPage={setPage}
              goToCatalog={goToCatalog}
              inline={true}
            />
            <button onClick={()=>go("videocall")}
              style={{...mkBtn("dark"),padding:"9px 12px",fontSize:11,borderRadius:6,whiteSpace:"nowrap",width:"100%",textAlign:"center"}}>
              Richiedi Appuntamento
            </button>
          </div>
        </div>
      )}
      {isMobile && open && (
        <div style={{background:"white",borderTop:"1px solid #ece7e0",paddingBottom:8}}>
          {links.map(l=>
            l.style === "promo" ? (
              <div key={l.key} onClick={()=>go(l.key)} style={{padding:"10px 20px",cursor:"pointer"}}>
                <span style={{
                  fontSize:14,fontWeight:700,color:page===l.key?"white":"#ba1e1e",
                  background:page===l.key?"linear-gradient(to bottom, #ba1e1e 0%, #9e1818 55%, #8a1515 100%)":"transparent",
                  border:"1.5px solid #ba1e1e",borderRadius:999,padding:"5px 16px",
                  display:"inline-block",
                }}>{l.label}</span>
              </div>
            ) : l.style === "contract" ? (
              <div key={l.key} onClick={()=>go(l.key)} style={{padding:"10px 20px",cursor:"pointer"}}>
                <span style={{
                  fontSize:14,fontWeight:700,color:page===l.key?"#1a1210":"#8b6914",
                  background:page===l.key?"#c8b89a":"transparent",
                  border:"1.5px solid #c8b89a",borderRadius:999,padding:"5px 16px",
                  display:"inline-block",
                }}>{l.label}</span>
              </div>
            ) : (
              <div key={l.key} onClick={()=>go(l.key)} style={{
                padding:"15px 20px",fontSize:16,
                fontWeight:page===l.key?700:400,
                color:page===l.key?"#1a1210":"#3d302e",
                borderLeft:page===l.key?"3px solid #1a1210":"3px solid transparent",
                cursor:"pointer"
              }}>{l.label}</div>
            )
          )}
          <div style={{padding:"12px 20px"}}>
            <button onClick={()=>go("videocall")} style={{...mkBtn("dark",true),padding:"13px"}}>
              Richiedi Appuntamento
            </button>
          </div>
        </div>
      )}
    </header>
    {authOpen && <AuthModal onClose={()=>setAuthOpen(false)}/>}
    <CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} setPage={setPage}/>
    <FavDrawer open={favOpen} onClose={()=>setFavOpen(false)} setPage={setPage}/>
    </>
  );
}

// ─── LOGO CAROUSEL ─────────────────────────
// Loghi fornitori con URL diretti dai siti ufficiali
const BRAND_LOGOS = [
  // URL reali da Excel fornito
  { name:"Net Cucine",        logo:"https://www.coreaarredamenti.it/wp-content/uploads/2020/09/anteprima.jpg",               url:"https://www.netcucine.it" },
  { name:"Aran Cucine",       logo:"https://www.confimprese.it/wp-content/uploads/2018/09/Logo_AranCucine_antracite-1.jpg",  url:"https://www.arancucine.it" },
  { name:"Santa Lucia",       logo:"https://www.progettocasaid.it/wp-content/uploads/2018/01/logo-santalucia-mobili-progetto-casa-id.jpg", url:"https://www.santaluciamobili.it" },
  { name:"CRIVELLARO",        logo:"https://bianchi-casa.it/wp-content/uploads/Crivellaro.svg",                              url:"https://www.crivellarosalotti.it" },
  { name:"Ideal Lux",         logo:"https://arredamentibrambilla.com/images/brambilla/grafica/loghiaziende/white/ideallux.png", url:"https://www.ideal-lux.com" },
  { name:"Zamagna",           logo:"https://www.rinascimentomobili.it/media/magedelight/shopbyattribute/attributelogo/zamagna.jpeg", url:"https://www.zamagna.it" },
  { name:"Florentia Bed",     logo:"https://www.negriarredamento.com/pub/brand/Brand_111_big.jpg",                           url:"https://www.florentiabed.com" },
  { name:"MISTRAL",           logo:"https://marchiarredamenti.it/wp-content/uploads/2024/11/logo_mistral-1.webp",            url:"https://www.mistralarredamenti.it" },
  { name:"LODES",             logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9ZsF4ExF-HT0MS3dIw4UXZlnEVI3DDSF6Q&s", url:"https://www.lodes.com" },
  { name:"Perenz",            logo:"https://infinity.perenz.it/infinity/dms/PerenzStore2023/Gallery/perenz-illumina-logo.png", url:"https://www.perenz.it" },
  { name:"Ciao Cucine",       logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OgPhZtV8WCr62t9eciyvZ2YcGPUxendMhw&s", url:"https://www.ciaocucine.it" },
  { name:"La Seggiola",       logo:"https://yt3.googleusercontent.com/ytc/AIdro_kiIhOePwJ3_r2Dlfv-vN7eXnbRyncozFkorHJJ4Nf43A=s900-c-k-c0x00ffffff-no-rj", url:"https://www.laseggiola.it" },
  { name:"Mobilturi",         logo:"https://www.mobilturi.it/wp-content/uploads/2019/07/cropped-mobilturi-logo-2-e1566285998294.png", url:"https://www.mobilturi.it" },
  { name:"GSG Mobili",        logo:"https://www.arredamentibuzzanca.com/wp-content/uploads/2015/04/logo-giessegi2.jpg",      url:"https://www.gsgmobili.it" },
  { name:"ORME",              logo:"https://www.ormedesign.it/wp-content/themes/orme/images/logo.png",                      url:"https://www.ormedesign.it" },
  { name:"SAMOA Divani",      logo:"https://www.progettocasaid.it/wp-content/uploads/2018/01/logo-samoa-divani-e-imbottiti-progetto-casa-id.jpg", url:"https://www.samoadivani.it" },
  { name:"Colombini",         logo:"https://www.pignoloni.it/wp-content/uploads/2018/08/logo-colombini-pignoloni.jpg",       url:"https://www.colombinigroup.com" },
  { name:"Bizzotto",          logo:"https://magazine.bizzotto.com/wp-content/uploads/2021/08/bizzotto.png",                  url:"https://www.bizzottohome.com" },
  { name:"IMAB",              logo:"https://www.imab.com/wp-content/themes/wordpress-bootstrap-master/images/logo-IMAB-group-spa.png", url:"https://www.imab.com" },
  { name:"EGO ITALIANO",      logo:"https://www.egoitaliano.com/wp-content/uploads/2019/03/logo-ego.png",                   url:"https://www.egoitaliano.com" },
  { name:"Home Cucine",       logo:"https://play-lh.googleusercontent.com/90sFpiwb0enrybneYd3vbmQ6CpBJcqMZlCY4odslIEtK9du04olQ9QbXfQQc5SD07TA", url:"https://www.homecucine.it" },
  { name:"Tancredi",          logo:"https://www.tancredisalotti.it/images/Immagini_Sito/logo_completo_nero.png", url:"https://www.tancredisalotti.it" },
  { name:"Cotta",             logo:"https://cotta.li/wp-content/uploads/2020/02/cropped-Logo-COTTA-RGB-0_0_0-1.jpg", url:"https://cotta.li" },
  { name:"San Martino Mobili",logo:"https://www.smartino.it/wp-content/themes/smartino25/images/logo.png", url:"https://www.smartino.it" },
  { name:"Suprema",           logo:"https://www.supremasrl.it/logo/LOGO-SUPREMA.png", url:"https://www.supremasrl.it" },
];

const ROW1_LOGOS = BRAND_LOGOS.slice(0, 11);
const ROW2_LOGOS = BRAND_LOGOS.slice(11);

function BrandLogoStrip({ logos, direction = "ltr", speed = 0.45 }) {
  const ref = useRef(null);
  // Triplica per loop infinito fluido
  const items = [...logos, ...logos, ...logos];

  useEffect(()=>{
    const el = ref.current; if(!el) return;
    let raf;
    // Posizione iniziale al centro (seconda copia)
    const startAt = el.scrollWidth / 3;
    el.scrollLeft = startAt;
    let pos = startAt;

    const tick = () => {
      if(direction === "ltr") {
        pos += speed;
        if(pos >= (el.scrollWidth * 2 / 3)) pos = el.scrollWidth / 3;
      } else {
        pos -= speed;
        if(pos <= el.scrollWidth / 3) pos = el.scrollWidth * 2 / 3;
      }
      el.scrollLeft = pos;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction, speed]);

  return (
    <div ref={ref} style={{display:"flex",overflow:"hidden",userSelect:"none",gap:0}}>
      {items.map((b, i) => (
        <div key={i} style={{
          display:"inline-flex", alignItems:"center", justifyContent:"center",
          minWidth:160, padding:"10px 20px", flexShrink:0
        }}>
          <div style={{
            height:44, display:"flex", alignItems:"center", justifyContent:"center",
            padding:"8px 18px", borderRadius:8,
            border:"1.5px solid #ece7e0", background:"white",
            boxShadow:"0 1px 4px rgba(0,0,0,.04)"
          }}>
            <img
              src={b.logo}
              alt={b.name}
              style={{height:28, maxWidth:120, objectFit:"contain", display:"block", filter:"grayscale(30%)", opacity:.85}}
              onError={e=>{
                // Fallback: mostra il nome come testo elegante se il logo non carica
                e.target.style.display='none';
                e.target.parentNode.innerHTML=`<span style="font-size:12px;font-weight:700;letter-spacing:.04em;color:#6b5f5b;white-space:nowrap">${b.name}</span>`;
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function LogoCarousel() {
  const { isMobile } = useBreakpoint();
  return (
    <div style={{background:"#faf8f5",borderTop:"1.5px solid #ece7e0",borderBottom:"1.5px solid #ece7e0",padding:"24px 0"}}>
      <div style={{textAlign:"center",marginBottom:18}}>
        <div style={{...TAG}}>I nostri brand partner</div>
      </div>
      {/* Riga 1 — sinistra → destra */}
      <div style={{marginBottom:10, overflow:"hidden"}}>
        <BrandLogoStrip logos={ROW1_LOGOS} direction="ltr" speed={0.4}/>
      </div>
      {/* Riga 2 — destra → sinistra (direzione opposta) */}
      <div style={{overflow:"hidden"}}>
        <BrandLogoStrip logos={ROW2_LOGOS} direction="rtl" speed={0.4}/>
      </div>
    </div>
  );
}

// ─── AI CHAT ARREDATORE ────────────────────
// ─── FAQ GUIDE CARDS (homepage) ────────────
// ─── AI CHAT "L'ARREDATORE RISPONDE" ───────
function AIChat({ context="home", productName="" }) {
  const { isMobile } = useBreakpoint();
  const [messages, setMessages] = useState([]);
  const [input, setInput]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [started, setStarted]   = useState(false);
  const bottomRef = useRef(null);
  const [genioSrc, setGenioSrc] = useState(IMGS.genio2);
  useEffect(()=>{
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.width; canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          const data = ctx.getImageData(0,0,canvas.width,canvas.height);
          const d = data.data;
          for(let i=0;i<d.length;i+=4){
            const r=d[i],g=d[i+1],b=d[i+2];
            if(r<30&&g<30&&b<30){ d[i+3]=0; }
          }
          ctx.putImageData(data,0,0);
          setGenioSrc(canvas.toDataURL("image/png"));
        } catch(e){}
      };
      img.onerror = () => {};
      img.src = IMGS.genio2;
    } catch(e){}
  },[]);

  const SUGGESTIONS = context === "product" ? [
    `Di che materiale è fatto ${productName||"questo prodotto"}?`,
    "Quali dimensioni sono disponibili?",
    "È personalizzabile nei colori e finiture?",
    "Quanto tempo richiede la consegna?",
    "Con quali altri pezzi si abbina meglio?",
  ] : [
    "Quanto costa arredare una cucina?",
    "Laminato o laccato: quale scegliere?",
    "Qual è la differenza tra MDF e truciolare?",
    "Come scelgo il divano giusto per il mio spazio?",
    "Quanto dura un mobile di buona qualità?",
  ];

  const SYSTEM = context === "product"
    ? `Sei "Il Genio", il consulente arredatore esperto di Asta del Mobile, catena di showroom con 10 punti vendita in Piemonte e Liguria. Il cliente sta guardando il prodotto: "${productName}". Rispondi in modo preciso e professionale a domande su materiali, dimensioni, personalizzazioni, abbinamenti e consegna. Hai una profonda conoscenza di: materiali (MDF, truciolare idrofugo, HPL, laminato, laccato opaco/lucido, massello, noce, rovere, marmo), finiture (Blum, Grass, cerniere ammortizzate), brand del catalogo (Net Cucine, Aran Cucine, Mobilturi, Ciao Cucine, IMAB, GSG Mobili, HOMES, MISTRAL, Santa Lucia Mobili, ORME, Colombini, COMPAB, SAVINI, SAMOA, EGO ITALIANO, CRIVELLARO, TANCREDI, COTTA, ZAMAGNA, LA SEGGIOLA, TEMPESTA, CICIRIELLO, BIZZOTTO, Ambienti Glamour, LODES, IDEAL LUX, PERENZ). Conosci i range di prezzo: cucine da 3.000€ a 20.000€, soggiorni da 800€ a 5.000€, letti da 500€ a 3.000€, tavoli da 300€ a 3.000€. Risposte concise, max 3-4 frasi. Tono caldo, competente e personale, come un amico esperto.`
    : `Sei "Il Genio", il consulente arredatore esperto e appassionato di Asta del Mobile, showroom specializzato in cucine, soggiorni, camere, bagni, divani, tavoli e complementi con 10 punti vendita in Piemonte e Liguria. Hai una profonda conoscenza di: materiali (MDF, truciolare idrofugo, HPL, laminato ad alta pressione, laccato opaco e lucido, massello, noce canaletto, rovere naturale, marmo, gres porcellanato), sistemi di apertura e ferramenta (Blum Clip-top, cassetti Grass Nova Pro, soft-close), stili d'arredo (moderno, contemporaneo, classico, country, industrial, scandinavo, luxury), brand italiani selezionati (Net Cucine, Aran Cucine, Mobilturi, Ciao Cucine, IMAB, GSG Mobili, HOMES, MISTRAL, Santa Lucia Mobili, ORME, Colombini, COMPAB, SAVINI, SAMOA, EGO ITALIANO, CRIVELLARO, TANCREDI, COTTA, ZAMAGNA, LA SEGGIOLA, TEMPESTA, CICIRIELLO, BIZZOTTO, Ambienti Glamour, LODES, IDEAL LUX, PERENZ), range di prezzo reali (cucine entry 3.000-7.000€, media 7.000-15.000€, alta 15.000-30.000€; soggiorni 800-8.000€; letti 400-3.500€; armadi 900-4.000€; tavoli 300-3.000€; divani 600-5.000€), tendenze di design 2024-2025 (boucle, verde salvia, marmo calacatta, toni terrosi, archi), consigli di abbinamento cromatico, ergonomia cucina (triangolo di lavoro, altezze standard), scelta del divano (densità seduta, tessuti antisporco, Aquaclean), illuminazione d'ambiente (temperatura colore, plafoniere vs applique), finanziamento e pagamenti dilazionati. Rispondi in modo professionale, concreto e con esempi pratici. Tono da esperto di fiducia e amico competente. Max 4 frasi per risposta.`;

  const chatBodyRef = useRef(null);
  useEffect(()=>{
    if(chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  },[messages,loading]);

  const send = async (txt) => {
    const text = (txt||input).trim();
    if(!text||loading) return;
    setInput(""); setStarted(true);
    const msgs = [...messages, {role:"user", content:text}];
    setMessages(msgs); setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:800, system:SYSTEM, messages:msgs }),
      });
      const d = await res.json();
      setMessages(p=>[...p, {role:"assistant", content: d.content?.[0]?.text||"Riprova tra un momento."}]);
    } catch { setMessages(p=>[...p, {role:"assistant", content:"Si è verificato un errore di connessione. Riprova tra un momento."}]); }
    setLoading(false);
  };

  return (
    <div style={{background:"white", border:"1.5px solid #ece7e0", borderRadius:16, overflow:"hidden", marginTop:40}}>
      {/* ── HEADER ── */}
      <div style={{background:"#1a1210", padding:isMobile?"44px 20px":"46px 28px", display:"flex", alignItems:"stretch", gap:14}}>
        <div style={{flexShrink:0,display:"flex",alignItems:"flex-end",marginBottom:-46,marginTop:-46}}>
          <img src={genioSrc} alt="Il Genio" style={{height:isMobile?"123px":"129px",width:"auto",objectFit:"contain",display:"block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,.4))"}}/>
        </div>
        <div style={{flex:1}}>
          <div style={{fontWeight:800,fontSize:15,color:"white",letterSpacing:"-.01em",fontFamily:"Georgia,serif"}}>Il Genio Risponde</div>
          <div style={{fontSize:11,color:"rgba(200,184,154,.7)",marginTop:2}}>
            {context==="product" ? "Hai domande su "+(productName||"questo prodotto")+"?" : "Consulenza gratuita · Risposta immediata"}
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:5}}>
          <div style={{width:7,height:7,borderRadius:"50%",background:"#27ae60",boxShadow:"0 0 0 2px rgba(39,174,96,.25)"}}/>
          <span style={{fontSize:11,color:"rgba(255,255,255,.45)",fontWeight:600,letterSpacing:".03em"}}>Online</span>
        </div>
      </div>

      {/* ── MESSAGGI ── */}
      {started && (
        <div ref={chatBodyRef} style={{maxHeight:490,overflowY:"auto",padding:"20px 24px 8px",display:"flex",flexDirection:"column",gap:14,background:"#faf8f5"}}>
          {messages.map((m,i)=>{
            const isUser = m.role==="user";
            return (
              <div key={i} style={{display:"flex",gap:10,alignItems:"flex-end",justifyContent:isUser?"flex-end":"flex-start"}}>
                {!isUser && (
                  <div style={{width:32,height:32,flexShrink:0,display:"flex",alignItems:"flex-end"}}>
                    <img src={genioSrc} alt="Genio" style={{width:32,height:"auto",objectFit:"contain",display:"block"}}/>
                  </div>
                )}
                <div style={{maxWidth:"78%"}}>
                  {!isUser && <div style={{fontSize:10,fontWeight:700,color:"#9a8e88",marginBottom:4,letterSpacing:".05em",textTransform:"uppercase"}}>Il Genio</div>}
                  <div style={{padding:"10px 14px",borderRadius:isUser?"14px 14px 3px 14px":"14px 14px 14px 3px",background:isUser?"#1a1210":"white",color:isUser?"white":"#3d302e",fontSize:13,lineHeight:1.7,border:!isUser?"1px solid #ece7e0":"none",boxShadow:"0 1px 4px rgba(0,0,0,.05)"}}>
                    {m.content}
                  </div>
                </div>
              </div>
            );
          })}
          {loading && (
            <div style={{display:"flex",gap:10,alignItems:"flex-end"}}>
              <div style={{width:32,height:32,flexShrink:0,display:"flex",alignItems:"flex-end"}}>
                <img src={genioSrc} alt="Genio" style={{width:32,height:"auto",objectFit:"contain",display:"block"}}/>
              </div>
              <div style={{padding:"10px 14px",borderRadius:"14px 14px 14px 3px",background:"white",border:"1px solid #ece7e0",display:"flex",gap:5,alignItems:"center"}}>
                {[0,1,2].map(j=>(
                  <div key={j} style={{width:6,height:6,borderRadius:"50%",background:"#c8b89a",animation:`dp 1.2s ease-in-out ${j*.2}s infinite`}}/>
                ))}
                <style>{`@keyframes dp{0%,80%,100%{opacity:.25;transform:scale(.75)}40%{opacity:1;transform:scale(1)}}`}</style>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ── SUGGERIMENTI (solo se non ancora iniziato) ── */}
      {!started && (
        <div style={{padding:"22px 24px 0",background:"#faf8f5"}}>
          <div style={{fontSize:10,fontWeight:700,color:"#9a8e88",letterSpacing:".08em",textTransform:"uppercase",marginBottom:12}}>Domande frequenti</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,paddingBottom:20}}>
            {SUGGESTIONS.map((s,i)=>(
              <button key={i} onClick={()=>send(s)} style={{padding:"8px 14px",borderRadius:999,border:"1.5px solid #e8e0d4",background:"white",fontSize:12,color:"#3d302e",cursor:"pointer",fontFamily:"inherit",fontWeight:500,lineHeight:1.4,transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#1a1210";e.currentTarget.style.background="#f4f1ee";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#e8e0d4";e.currentTarget.style.background="white";}}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── INPUT ── */}
      <div style={{padding:"12px 18px",background:"white",borderTop:"1.5px solid #ece7e0",display:"flex",gap:10,alignItems:"center"}}>
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
          placeholder={context==="product" ? "Chiedi all'arredatore su "+(productName||"questo prodotto")+"…" : "Scrivi la tua domanda all'arredatore…"}
          style={{flex:1,padding:"10px 16px",borderRadius:999,border:"1.5px solid #ece7e0",fontSize:13,outline:"none",fontFamily:"inherit",background:"#faf8f5",color:"#1a1210",transition:"border-color .15s"}}
          onFocus={e=>e.target.style.borderColor='#1a1210'}
          onBlur={e=>e.target.style.borderColor='#ece7e0'}
        />
        <button onClick={()=>send()} disabled={!input.trim()||loading}
          style={{width:38,height:38,borderRadius:"50%",border:"none",background:input.trim()&&!loading?"#1a1210":"#e8e2da",cursor:input.trim()&&!loading?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background .15s"}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={input.trim()&&!loading?"#c8b89a":"#b0a898"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── FAQ GUIDE CARDS (homepage) ────────────
function HomeFAQCards({ setPage }) {
  const { isMobile, isTablet } = useBreakpoint();
  const cards = [
    { img:IMGS.faq_costo_casa,    q:"Quanto costa arredare casa?",   preview:"Da 8.000 € per un bilocale a 25.000 € per un trilocale completo. Scopri i range reali." },
    { img:IMGS.faq_costo_cucina,  q:"Quanto costa una cucina?",      preview:"Entry level da 3.000 €, media con elettrodomestici da 7.000 €. Ti spieghiamo tutto." },
    { img:IMGS.faq_durata,        q:"Quanto dura una cucina?",       preview:"20–30 anni se di buona qualità. Le parti soggette a usura sono facilmente sostituibili." },
    { img:IMGS.faq_laminato,      q:"Laminato o laccato?",           preview:"Dipende dall'uso. Il laminato è più resistente, il laccato più elegante. Ecco come scegliere." },
  ];
  return (
    <Sec bg="white">
      <SH label="Hai dei dubbi?" title="Il Genio Risponde" sub="Le domande più frequenti, risposte dal nostro esperto di arredamento." isMobile={isMobile}/>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",gap:16}}>
        {cards.map((c,i)=>(
          <div key={i} onClick={()=>setPage("faq")}
            style={{...cardS,cursor:"pointer",overflow:"hidden"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 10px 30px #0002";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
            <div style={{height:160,overflow:"hidden",position:"relative"}}>
              <img src={c.img} alt={c.q}
                style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .35s"}}
                onMouseEnter={e=>e.target.style.transform='scale(1.06)'}
                onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(26,18,16,.5) 0%,transparent 60%)"}}/>
            </div>
            <div style={{padding:"16px 16px 20px"}}>
              <div style={{fontWeight:700,fontSize:14,color:"#1a1210",marginBottom:7,lineHeight:1.35}}>{c.q}</div>
              <p style={{fontSize:12,color:"#6b5f5b",lineHeight:1.65,margin:"0 0 12px"}}>{c.preview}</p>
              <span style={{fontSize:12,fontWeight:700,color:"#c8b89a",letterSpacing:".04em"}}>Leggi la risposta →</span>
            </div>
          </div>
        ))}
      </div>
      <AIChat context="home"/>
    </Sec>
  );
}


// ─── PROMO GENIALE BANNER con COUNTDOWN e GENIO FLUTTUANTE ────────────────
function PromoDelMeseBanner() {
  const { isMobile } = useBreakpoint();

  const [target] = useState(() => {
    const t = new Date();
    t.setDate(t.getDate() + 30);
    return t;
  });

  const calcRemaining = () => {
    const now = new Date();
    const diff = Math.max(0, target - now);
    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calcRemaining);
  useEffect(() => {
    const id = setInterval(() => setTime(calcRemaining()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const [genioPromoSrc, setGenioPromoSrc] = useState(IMGS.genio3);
  useEffect(()=>{
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.width; canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          const data = ctx.getImageData(0,0,canvas.width,canvas.height);
          const d = data.data;
          for(let i=0;i<d.length;i+=4){
            const r=d[i],g=d[i+1],b=d[i+2];
            if(r<40&&g<40&&b<40){ d[i+3]=0; }
          }
          ctx.putImageData(data,0,0);
          setGenioPromoSrc(canvas.toDataURL("image/png"));
        } catch(e){ /* fallback: usa immagine originale */ }
      };
      img.onerror = () => {};
      img.src = IMGS.genio3;
    } catch(e){}
  },[]);

  const pad = n => String(n).padStart(2, "0");

  const Unit = ({ value, label }) => (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",minWidth:isMobile?48:58}}>
      <div style={{
        background:"linear-gradient(135deg,rgba(200,184,154,.12) 0%,rgba(224,154,58,.08) 100%)",
        borderRadius:10,padding:isMobile?"7px 8px":"10px 12px",
        border:"1.5px solid #c8852a",
        fontSize:isMobile?24:32,fontWeight:800,color:"white",lineHeight:1,
        minWidth:isMobile?44:54,textAlign:"center",fontFamily:"Georgia,serif",
        boxShadow:"0 0 12px rgba(200,133,42,.25), inset 0 1px 0 rgba(224,184,100,.2)",
        letterSpacing:"-.02em"
      }}>{pad(value)}</div>
      <div style={{fontSize:9,fontWeight:700,color:"#c8852a",marginTop:5,
        letterSpacing:".1em",textTransform:"uppercase"}}>{label}</div>
    </div>
  );

  const genioStyle = {
    position:"absolute",
    right: isMobile ? -10 : 20,
    bottom: 0,
    height: isMobile ? 140 : 210,
    width:"auto",
    objectFit:"contain",
    objectPosition:"bottom",
    zIndex:2,
    pointerEvents:"none",
    animation:"genioFloat 3.2s ease-in-out infinite",
    filter:"drop-shadow(0 8px 24px rgba(0,0,0,.35))",
    transformOrigin:"bottom center",
  };

  return (
    <>
      <style>{`
        @keyframes genioFloat {
          0%   { transform: translateY(0px) rotate(-0.8deg); }
          50%  { transform: translateY(-20px) rotate(0.8deg); }
          100% { transform: translateY(0px) rotate(-0.8deg); }
        }
      `}</style>
      <div style={{padding:isMobile?"0 16px":"0 64px",marginBottom:0}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{
            background:"linear-gradient(120deg,#1c1a2e 0%,#2d1f3d 25%,#1a1a2a 50%,#0f1a2e 75%,#1a1210 100%)",
            borderRadius:16,
            overflow:"hidden",
            boxShadow:"0 20px 60px rgba(0,0,0,.5), 0 0 0 1.5px #c8852a, 0 0 24px rgba(200,133,42,.2)",
            position:"relative",
            minHeight: isMobile ? 220 : 320,
          }}>
            {/* Alone viola/blu in alto a sinistra */}
            <div style={{position:"absolute",top:-80,left:-60,width:380,height:380,borderRadius:"50%",background:"radial-gradient(circle,rgba(140,80,200,.18) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
            {/* Alone oro caldo al centro-destra */}
            <div style={{position:"absolute",bottom:-60,right:"25%",width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,160,80,.14) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
            {/* Alone blu notte in basso a sinistra */}
            <div style={{position:"absolute",bottom:-40,left:0,width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(40,80,160,.15) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
            {/* Filetto luminoso in cima */}
            <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(180,140,255,.5) 30%,rgba(200,184,154,.6) 50%,rgba(100,140,255,.4) 70%,transparent)",zIndex:1,pointerEvents:"none"}}/>

            {/* GRIGLIA 3 COLONNE: 40% | 40% | 20% */}
            <div style={{
              display:"grid",
              gridTemplateColumns: isMobile ? "1fr" : "40% 40% 20%",
              height:"100%",
              minHeight: isMobile ? "auto" : 320,
            }}>

              {/* ─── COLONNA 1: testo + timer (40%) ─── */}
              <div style={{padding:isMobile?"28px 20px":"36px 40px",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",zIndex:3}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <span style={{display:"inline-block",width:4,height:4,borderRadius:"50%",background:"#c8b89a",flexShrink:0}}/>
                  <span style={{fontSize:10,fontWeight:800,color:"#c8b89a",letterSpacing:".18em",textTransform:"uppercase"}}>Offerta Lampo</span>
                </div>
                <h2 style={{fontSize:isMobile?24:32,fontWeight:800,margin:"0 0 10px",
                  fontFamily:"Georgia,serif",letterSpacing:"-.02em",lineHeight:1.1,
                  background:"linear-gradient(90deg,#e8c96a 0%,#c8852a 50%,#e0a84a 100%)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Promo Geniale
                </h2>
                <p style={{color:"rgba(255,255,255,.78)",fontSize:13,margin:"0 0 20px",lineHeight:1.65}}>
                  Offerta del mese a tempo limitato, il meglio del <strong style={{color:"#c8b89a"}}>Made in Italy</strong> ad un prezzo speciale.
                </p>
                {/* TIMER */}
                <div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,.45)",fontWeight:600,letterSpacing:".06em",marginBottom:8,display:"flex",alignItems:"center",gap:5}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>{"L’offerta scade tra:"}</span></div>
                  <div style={{display:"flex",alignItems:"flex-end",gap:isMobile?6:8,flexWrap:"wrap"}}>
                    <Unit value={time.days}    label="Giorni"/>
                    <span style={{color:"rgba(255,255,255,.35)",fontSize:isMobile?20:24,fontWeight:200,marginBottom:16,lineHeight:1}}>:</span>
                    <Unit value={time.hours}   label="Ore"/>
                    <span style={{color:"rgba(255,255,255,.35)",fontSize:isMobile?20:24,fontWeight:200,marginBottom:16,lineHeight:1}}>:</span>
                    <Unit value={time.minutes} label="Minuti"/>
                    <span style={{color:"rgba(255,255,255,.35)",fontSize:isMobile?20:24,fontWeight:200,marginBottom:16,lineHeight:1}}>:</span>
                    <Unit value={time.seconds} label="Secondi"/>
                  </div>
                </div>
              </div>

              {/* ─── COLONNA 2: card prodotto (40%) ─── */}
              {!isMobile && (
                <div style={{
                  padding:"20px 16px",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  position:"relative",zIndex:3,
                }}>
                  <div style={{
                    background:"rgba(255,255,255,.08)",
                    border:"1px solid rgba(255,255,255,.18)",
                    borderRadius:14,overflow:"hidden",
                    width:"100%",
                    backdropFilter:"blur(10px)",
                  }}>
                    <div style={{position:"relative",height:185,overflow:"hidden"}}>
                      <img
                        src="https://www.astadelmobile.it/Images/cucina-life-in-linea-doppia-profondita.webp"
                        alt="Cucina in promo"
                        style={{width:"100%",height:"100%",objectFit:"cover"}}
                      />
                      <div style={{position:"absolute",top:8,left:8,background:"#e74c3c",color:"white",
                        fontSize:11,fontWeight:900,padding:"3px 10px",borderRadius:999,
                        boxShadow:"0 2px 8px rgba(0,0,0,.3)"}}>−38%</div>
                      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(26,18,16,.55) 0%,transparent 55%)"}}/>
                    </div>
                    <div style={{padding:"14px 16px 16px"}}>
                      <div style={{fontSize:12,fontWeight:700,color:"rgba(255,255,255,.92)",lineHeight:1.4,marginBottom:4}}>
                        Cucina Lineare Moderna
                      </div>
                      <div style={{fontSize:11,color:"rgba(255,255,255,.55)",marginBottom:10}}>
                        Finitura Laccato Grigio Mat
                      </div>
                      <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:12}}>
                        <span style={{textDecoration:"line-through",color:"rgba(255,255,255,.35)",fontSize:12}}>€8.490</span>
                        <span style={{fontSize:24,fontWeight:800,lineHeight:1,
                          background:"linear-gradient(90deg,#e8c96a 0%,#c8852a 50%,#e0a84a 100%)",
                          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>€5.260</span>
                      </div>
                      <div style={{fontSize:10,color:"rgba(255,255,255,.45)",marginBottom:12}}>
                        ✓ Spedizione gratuita inclusa
                      </div>
                      <div style={{
                        background:"linear-gradient(90deg,#e8c96a 0%,#c8852a 50%,#e0a84a 100%)",
                        borderRadius:8,padding:"10px",textAlign:"center",
                        fontSize:12,fontWeight:800,color:"white",cursor:"pointer",letterSpacing:".03em",
                        boxShadow:"0 2px 12px rgba(200,133,42,.35)",
                      }}>
                        Approfitta ora →
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── COLONNA 3: Genio fluttuante (20%) ─── */}
              {!isMobile && (
                <div style={{
                  position:"relative",overflow:"hidden",
                  display:"flex",alignItems:"flex-end",justifyContent:"center",
                }}>
                  <img
                    src={genioPromoSrc}
                    alt="Il Genio"
                    style={{
                      height:360,
                      width:"auto",
                      objectFit:"contain",
                      objectPosition:"bottom",
                      zIndex:2,
                      pointerEvents:"none",
                      animation:"genioFloat 4s ease-in-out infinite",
                      filter:"drop-shadow(0 8px 32px rgba(0,0,0,.4))",
                      transformOrigin:"bottom center",
                      position:"relative",
                      willChange:"transform",
                    }}
                  />
                </div>
              )}

              {/* MOBILE: genio small */}
              {isMobile && (
                <img
                  src={genioPromoSrc}
                  alt="Il Genio"
                  style={{
                    position:"absolute",right:0,bottom:0,
                    height:130,width:"auto",objectFit:"contain",
                    zIndex:2,pointerEvents:"none",
                    animation:"genioFloat 4s ease-in-out infinite",
                    filter:"drop-shadow(0 4px 12px rgba(0,0,0,.3))",
                    willChange:"transform",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// ─── SCROLL ROW FALEGNAME ──────────────────
function FalegnameScrollRow({ setPage, isMobile, TAG, mkBtn }) {
  const PER_PAGE = isMobile ? 1 : 4;
  const total = FALEGNAMI_PRODUCTS.length;
  const [page, setPageN] = useState(0);
  const maxPage = Math.ceil(total / PER_PAGE) - 1;
  const visible = FALEGNAMI_PRODUCTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div style={{background:"#faf8f5",padding:isMobile?"40px 16px":"64px 64px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:24,flexWrap:"wrap",gap:10}}>
        <div>
          <div style={{...TAG,marginBottom:6,color:"#a07828"}}>Artigianato in legno massello</div>
          <h2 style={{fontSize:isMobile?26:34,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210"}}>I prodotti del nostro Falegname</h2>
        </div>
        <button onClick={()=>setPage("falegnameria")} style={{...mkBtn("outline"),border:"1.5px solid #1a1210",fontSize:13}}>Scopri la falegnameria →</button>
      </div>
      {/* Grid 4 colonne */}
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(4,1fr)",gap:16}}>
        {visible.map(p=>(
          <ProductCardVertical key={p.id} item={{
            id:p.id,name:p.name,desc:p.desc,
            price:p.price,oldPrice:p.oldPrice,discount:p.discount,
            brand:"Falegnameria",category:"Cucine",
            availability:"standard",mode:"preventivo",imgUrl:p.img,
          }} onOpen={()=>setPage("falegnameria")} forceGold={true}/>
        ))}
        {/* Card "Scopri il resto" — solo sull'ultima pagina */}
        {page === maxPage && (
          <div onClick={()=>setPage("falegnameria")}
            style={{...cardS,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",
              justifyContent:"center",gap:16,minHeight:320,
              background:"linear-gradient(135deg,#1a1210 0%,#2d1f0e 100%)",
              border:"1.5px solid #c9960c",transition:"all .22s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 36px rgba(201,150,12,.2)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
            <div style={{width:52,height:52,borderRadius:"50%",border:"1.5px solid #e0bf3a",
              display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0bf3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            <div style={{textAlign:"center",padding:"0 20px"}}>
              <div style={{fontSize:16,fontWeight:800,color:"white",fontFamily:"Georgia,serif",marginBottom:8}}>Scopri il resto</div>
              <div style={{fontSize:12,color:"rgba(200,184,154,.7)",lineHeight:1.6}}>Vedi tutto il catalogo della nostra falegnameria artigianale</div>
            </div>
            <span style={{fontSize:11,fontWeight:700,color:"#e0bf3a",letterSpacing:".06em",textTransform:"uppercase"}}>Vai alla falegnameria →</span>
          </div>
        )}
      </div>
      {/* Frecce sotto */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginTop:24}}>
        <button
          onClick={()=>setPageN(p=>Math.max(0,p-1))}
          disabled={page===0}
          style={{width:42,height:42,borderRadius:"50%",border:"1.5px solid",
            borderColor:page===0?"#ece7e0":"#1a1210",
            background:page===0?"#f5f5f5":"white",
            cursor:page===0?"default":"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",
            transition:"all .15s",opacity:page===0?.4:1}}
          onMouseEnter={e=>{ if(page>0){e.currentTarget.style.background="#1a1210";e.currentTarget.style.borderColor="#1a1210";}}}
          onMouseLeave={e=>{ if(page>0){e.currentTarget.style.background="white";e.currentTarget.style.borderColor="#1a1210";}}}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span style={{fontSize:12,color:"#9a8e88",fontWeight:600,minWidth:60,textAlign:"center"}}>
          {page+1} / {maxPage+1}
        </span>
        <button
          onClick={()=>setPageN(p=>Math.min(maxPage,p+1))}
          disabled={page===maxPage}
          style={{width:42,height:42,borderRadius:"50%",border:"1.5px solid",
            borderColor:page===maxPage?"#ece7e0":"#1a1210",
            background:page===maxPage?"#f5f5f5":"white",
            cursor:page===maxPage?"default":"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",
            transition:"all .15s",opacity:page===maxPage?.4:1}}
          onMouseEnter={e=>{ if(page<maxPage){e.currentTarget.style.background="#1a1210";e.currentTarget.style.borderColor="#1a1210";}}}
          onMouseLeave={e=>{ if(page<maxPage){e.currentTarget.style.background="white";e.currentTarget.style.borderColor="#1a1210";}}}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>{/* fine maxWidth */}
    </div>
  );
}

// ─── SCROLL ROW ONLINE ─────────────────────
function OnlineScrollRow({ setPage, isMobile, TAG, mkBtn, onlineProds }) {
  const PER_PAGE = isMobile ? 1 : 4;
  const total = onlineProds.length;
  const [page, setPageN] = useState(0);
  const maxPage = Math.max(0, Math.ceil(total / PER_PAGE) - 1);
  const visible = onlineProds.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div style={{background:"white",padding:isMobile?"40px 16px":"64px 64px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:24,flexWrap:"wrap",gap:10}}>
        <div>
          <div style={{...TAG,marginBottom:6,color:"#2980b9"}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2980b9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:5,verticalAlign:"middle"}}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Acquisto immediato online
          </div>
          <h2 style={{fontSize:isMobile?26:34,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210"}}>Ordinabili online</h2>
        </div>
        <button onClick={()=>setPage("shop")} style={{...mkBtn("outline"),border:"1.5px solid #1a1210",fontSize:13}}>Vedi tutti →</button>
      </div>
      {/* Grid prodotti shop */}
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(4,1fr)",gap:16}}>
        {visible.map(p=>(
          <ProductCardVertical key={p.id} item={p} onOpen={()=>setPage("shop_product_"+p.id)}/>
        ))}
        {/* Card "Scopri il resto" — solo sull'ultima pagina */}
        {page === maxPage && (
          <div onClick={()=>setPage("shop")}
            style={{...cardS,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",
              justifyContent:"center",gap:16,minHeight:320,
              background:"linear-gradient(135deg,#1a2d3d 0%,#0e1f2d 100%)",
              border:"1.5px solid #2980b9",transition:"all .22s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 36px rgba(41,128,185,.2)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
            <div style={{width:52,height:52,borderRadius:"50%",border:"1.5px solid #2980b9",
              display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2980b9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            <div style={{textAlign:"center",padding:"0 20px"}}>
              <div style={{fontSize:16,fontWeight:800,color:"white",fontFamily:"Georgia,serif",marginBottom:8}}>Scopri il resto</div>
              <div style={{fontSize:12,color:"rgba(150,190,220,.7)",lineHeight:1.6}}>Vedi tutti i prodotti acquistabili online</div>
            </div>
            <span style={{fontSize:11,fontWeight:700,color:"#2980b9",letterSpacing:".06em",textTransform:"uppercase"}}>Vai allo shop →</span>
          </div>
        )}
      </div>
      {/* Frecce sotto */}
      {maxPage > 0 && (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginTop:24}}>
          <button
            onClick={()=>setPageN(p=>Math.max(0,p-1))}
            disabled={page===0}
            style={{width:42,height:42,borderRadius:"50%",border:"1.5px solid",
              borderColor:page===0?"#ece7e0":"#1a1210",
              background:page===0?"#f5f5f5":"white",
              cursor:page===0?"default":"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",
              transition:"all .15s",opacity:page===0?.4:1}}
            onMouseEnter={e=>{ if(page>0){e.currentTarget.style.background="#1a1210";e.currentTarget.style.borderColor="#1a1210";}}}
            onMouseLeave={e=>{ if(page>0){e.currentTarget.style.background="white";e.currentTarget.style.borderColor="#1a1210";}}}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <span style={{fontSize:12,color:"#9a8e88",fontWeight:600,minWidth:60,textAlign:"center"}}>
            {page+1} / {maxPage+1}
          </span>
          <button
            onClick={()=>setPageN(p=>Math.min(maxPage,p+1))}
            disabled={page===maxPage}
            style={{width:42,height:42,borderRadius:"50%",border:"1.5px solid",
              borderColor:page===maxPage?"#ece7e0":"#1a1210",
              background:page===maxPage?"#f5f5f5":"white",
              cursor:page===maxPage?"default":"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",
              transition:"all .15s",opacity:page===maxPage?.4:1}}
            onMouseEnter={e=>{ if(page<maxPage){e.currentTarget.style.background="#1a1210";e.currentTarget.style.borderColor="#1a1210";}}}
            onMouseLeave={e=>{ if(page<maxPage){e.currentTarget.style.background="white";e.currentTarget.style.borderColor="#1a1210";}}}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}
    </div>{/* fine maxWidth */}
    </div>
  );
}

// ─── HOME ──────────────────────────────────
function Home({ setPage }) {
  const { isMobile, isTablet } = useBreakpoint();
  const px = isMobile?16:isTablet?32:64;
  const allProds = useMemo(()=>buildProducts(),[]);
  const stock      = allProds.filter(p=>p.availability==="stock").slice(0,3);
  const onlineProds= useMemo(()=>buildShopProducts().filter(p=>p.subcategory==="Sedie e Sgabelli").slice(0,9),[]);

  return (
    <div>
      {/* HERO */}
      <div style={{position:"relative",height:isMobile?320:520,overflow:"hidden"}}>
        <img src={IMGS.hero} alt="hero"
          style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(26,18,16,.88) 0%,rgba(26,18,16,.48) 55%,transparent 100%)"}}/>
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center"}}>
          {/* Wrapper allineato con il resto della pagina */}
          <div style={{width:"100%",maxWidth:1280,margin:"0 auto",padding:isMobile?"0 20px":"0 40px"}}>
            <div style={{maxWidth:560}}>
              <div style={{...TAG,color:"#c8b89a",marginBottom:14}}>Arredamento italiano su misura</div>
              <h1 style={{fontSize:isMobile?28:54,lineHeight:1.04,fontWeight:700,margin:"0 0 16px",color:"white",letterSpacing:"-.03em",fontFamily:"Georgia,serif"}}>
                L&apos;arredo che<br/>hai sempre immaginato.
              </h1>
              <p style={{color:"rgba(255,255,255,.75)",fontSize:isMobile?14:16,lineHeight:1.75,marginBottom:26,maxWidth:440}}>
                Oltre 30 brand italiani selezionati. Progettazione, consegna e montaggio inclusi.
              </p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <button onClick={()=>setPage("catalog")} style={{...mkBtn("gold"),padding:"13px 26px",fontSize:15}}>Esplora il catalogo</button>
  
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* USP BAR */}
      <div style={{background:"#1a1210"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:isMobile?"0 16px":"0 40px",
          display:"flex",justifyContent:isMobile?"flex-start":"space-around",overflowX:isMobile?"auto":"visible"}}>
          {[
            [<svg key="a" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(200,184,154,.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,"Servizio di rilievo misure"],
            [<svg key="b" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(200,184,154,.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,"Progetti su misura"],
            [<svg key="c" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(200,184,154,.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,"Consegna puntuale"],
            [<svg key="d" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(200,184,154,.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,"Montaggio incluso"],
            [<svg key="e" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(200,184,154,.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,"Prodotti Finanziabili"],
          ].map(([ico,t])=>(
            <div key={t} style={{display:"flex",alignItems:"center",gap:8,padding:"14px 0",flexShrink:0,paddingRight:isMobile?28:0}}>
              {ico}
              <span style={{fontSize:isMobile?11:12,fontWeight:600,whiteSpace:"nowrap",color:"rgba(255,255,255,.8)"}}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BANDIERA ITALIANA */}
      <div style={{height:10,display:"flex",overflow:"hidden",flexShrink:0}}>
        <div style={{flex:1,background:"#009246"}}/>
        <div style={{flex:1,background:"#ffffff"}}/>
        <div style={{flex:1,background:"#ce2b37"}}/>
      </div>

      {/* AMBIENTI TILES — 3 colonne x 3 righe */}
      <Sec bg="white">
        <SH label="Esplora" title="Scegli il tuo ambiente" sub="Dalla cucina al bagno: ti guidiamo in ogni stanza della casa." isMobile={isMobile}/>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:20,alignItems:"stretch"}}>
          {HOME_AMBIENTI.map(a=>(
            <div key={a.key} onClick={()=>{ setPage("catalog"); }}
              style={{...cardS,cursor:"pointer",overflow:"hidden",display:"flex",flexDirection:"row",height:160}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 28px #0002";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
              <div style={{width:"60%",flexShrink:0,overflow:"hidden"}}>
                <img src={a.img} alt={a.name}
                  style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .35s"}}
                  onMouseEnter={e=>e.target.style.transform='scale(1.07)'}
                  onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
              </div>
              <div style={{flex:1,padding:"0 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",gap:6}}>
                <div style={{fontSize:16,fontWeight:700,color:"#1a1210"}}>{a.name}</div>
                <div style={{fontSize:11,color:"#9a8e88",letterSpacing:".04em"}}>Scopri →</div>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* LOGO CAROUSEL */}
      <LogoCarousel/>

      {/* PROMO DEL MESE - OFFERTA LAMPO con TIMER */}
      <div style={{height:64}}/>
      <PromoDelMeseBanner/>

      {/* PROMO BANNER */}
      <div style={{height:24}}/>
      <Sec bg="white">
        <div style={{background:"linear-gradient(to bottom, #ba1e1e 0%, #9e1818 55%, #8a1515 100%)",borderRadius:16,padding:isMobile?"24px 20px":"32px 44px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
          <div>
            <div style={{...TAG,color:"rgba(255,255,255,.65)",marginBottom:8}}>LE NOSTRE MIGLIORI OFFERTE</div>
            <h2 style={{fontSize:isMobile?22:30,fontWeight:700,color:"white",margin:"0 0 8px",fontFamily:"Georgia,serif"}}>Promozioni bloccate</h2>
            <p style={{color:"rgba(255,255,255,.8)",fontSize:14,margin:0}}>Prezzi garantiti e bloccati come condizione commerciale. Offerte limitate.</p>
          </div>
          <button onClick={()=>setPage("promo")} style={{padding:"13px 26px",fontSize:15,borderRadius:8,cursor:"pointer",fontWeight:700,background:"rgba(255,255,255,.15)",color:"white",border:"2px solid rgba(255,255,255,.6)",fontFamily:"inherit",whiteSpace:"nowrap"}}>
            Vedi le promo →
          </button>
        </div>
      </Sec>

      {/* BANNER FALEGNAMERIA */}
      <Sec bg="#faf8f5">
        <div style={{
          background:"linear-gradient(135deg,#2c1a0e 0%,#3d2410 50%,#5c3518 100%)",
          borderRadius:16,
          padding:isMobile?"28px 20px":"0",
          display:"flex",
          flexDirection:isMobile?"column":"row",
          overflow:"hidden",
          boxShadow:"0 8px 40px rgba(44,26,14,.35)",
          position:"relative",
        }}>
          {/* Immagine sinistra */}
          {!isMobile && (
            <div style={{width:380,flexShrink:0,position:"relative",overflow:"hidden"}}>
              <img
                src="https://www.romanobranchetti.it/img/falegnameria5s-new.jpg"
                alt="Falegnameria"
                style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}
              />

            </div>
          )}
          {/* Testo */}
          <div style={{flex:1,padding:isMobile?"0":"40px 44px",display:"flex",flexDirection:"column",justifyContent:"center",gap:0}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              <span style={{fontSize:10,fontWeight:800,color:"#c8b89a",letterSpacing:".15em",textTransform:"uppercase"}}>Artigianato italiano</span>
            </div>
            <h2 style={{fontSize:isMobile?24:32,fontWeight:700,color:"white",margin:"0 0 12px",fontFamily:"Georgia,serif",lineHeight:1.15}}>
              La Nostra Falegnameria
            </h2>
            <p style={{color:"rgba(255,255,255,.75)",fontSize:isMobile?13:15,lineHeight:1.75,margin:"0 0 24px",maxWidth:480}}>
              Mobili in legno massello realizzati dal nostro falegname artigiano. Su misura, su progetto o da catalogo: ogni pezzo è unico e costruito con cura.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button onClick={()=>setPage("falegnameria")} style={{padding:"13px 24px",borderRadius:8,cursor:"pointer",fontWeight:700,fontSize:14,background:"#c8b89a",color:"#1a1210",border:"none",fontFamily:"inherit",transition:"opacity .15s"}}
                onMouseEnter={e=>e.currentTarget.style.opacity=".85"}
                onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                Scopri la falegnameria →
              </button>
              <button onClick={()=>setPage("falegnameria")} style={{padding:"13px 24px",borderRadius:8,cursor:"pointer",fontWeight:700,fontSize:14,background:"transparent",color:"rgba(255,255,255,.85)",border:"1.5px solid rgba(255,255,255,.3)",fontFamily:"inherit"}}>
                Richiedi preventivo
              </button>
            </div>
          </div>
          {/* Decorazioni */}
          <div style={{position:"absolute",bottom:-40,right:isMobile?-20:40,width:180,height:180,borderRadius:"50%",background:"rgba(200,184,154,.06)",pointerEvents:"none"}}/>
        </div>
      </Sec>

      {/* PRODOTTI DEL FALEGNAME */}
      <FalegnameScrollRow setPage={setPage} isMobile={isMobile} TAG={TAG} mkBtn={mkBtn}/>


      {/* ORDINABILI ONLINE */}
      <OnlineScrollRow setPage={setPage} isMobile={isMobile} TAG={TAG} mkBtn={mkBtn} onlineProds={onlineProds}/>


      {/* FAQ GUIDE CARDS */}
      <HomeFAQCards setPage={setPage}/>

      {/* CTA BANNER */}
      <div style={{background:"#1a1210",padding:isMobile?"40px 20px":"60px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:40,alignItems:"center"}}>
          <div>
            <div style={{...TAG,color:"#c8b89a",marginBottom:12}}>Inizia ora</div>
            <h2 style={{fontSize:isMobile?24:34,fontWeight:700,color:"white",margin:"0 0 12px",fontFamily:"Georgia,serif"}}>Prenota il tuo appuntamento</h2>
            <p style={{color:"rgba(255,255,255,.65)",lineHeight:1.75,fontSize:14,margin:0}}>30 minuti con il nostro specialista. Analizziamo spazi, stile e budget. Nessun impegno.</p>
          </div>
          <div style={{display:"flex",gap:12,justifyContent:isMobile?"flex-start":"flex-end",flexWrap:"wrap"}}>
            <button onClick={()=>setPage("videocall")} style={{...mkBtn("gold"),padding:"14px 28px",fontSize:15}}>Prenota ora →</button>
            <button onClick={()=>setPage("faq")} style={{padding:"14px 28px",fontSize:15,borderRadius:8,cursor:"pointer",fontWeight:700,background:"transparent",color:"white",border:"1.5px solid rgba(255,255,255,.3)",fontFamily:"inherit"}}>L&apos;arredatore risponde</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CATALOG ───────────────────────────────

// ─── SHOP ONLINE ────────────────────────────────────────────────────────────
// Sotto-menu tipologie elettrodomestici (usati come filtri nella col destra)
const ELETTRO_SUBS = {
  frigoriferi:   ["Tutti","Libera installazione","Da incasso","Total No Frost","Statico","Low Frost","Side by Side"],
  lavastoviglie: ["Tutti","60cm","45cm","Da incasso","Libera installazione","A scomparsa totale"],
  lavatrice:     ["Tutti","Slim","Standard","Carica dall'alto","Con asciugatrice","Libera installazione","Da incasso"],
  forni:         ["Tutti","Elettrico","Gas","Vapore","Microonde combinato","Da incasso","Da appoggio"],
  pianiCottura:  ["Tutti","Gas","Induzione","Vitroceramica","Misto","Cappa Integrata"],
  microonde:     ["Tutti","Solo Microonde","Combinato","Da incasso","Con Grill"],
  cappa:         ["Tutti","A Isola","Sottopensile","Da Incasso","Semintegrata","Decorativa","Ad Angolo"],
};

// Struttura a MACRO CATEGORIE
const SHOP_MACRO = [
  {
    macro: "Arredo",
    color: "#1a1210",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    cats: [
      { key:"illuminazione", label:"Illuminazione",
        subs:["Tutti","Sospensioni","Plafoniere","Applique","Lampade da tavolo","LED","Esterno"],
        brands:["IDEAL LUX","LODES","PERENZ"] },
      { key:"complementi", label:"Complementi",
        subs:["Tutti","Consolle","Tavolini","Pouf","Librerie","Decorazioni","Tappeti","Outdoor"],
        brands:["BIZZOTTO","CICIRIELLO","SARMOG","STONES"] },
      { key:"tavoli", label:"Tavoli",
        subs:["Tutti","Allungabili","Fissi","Rotondi","Vetro","Legno","Design"],
        brands:["ZAMAGNA","TARGET","TEMPESTA","CICIRIELLO","NARDI","LA SEGGIOLA","STONES","SITAP"] },
      { key:"sedieSedie", label:"Sedie e Sgabelli",
        subs:["Tutti","Sedie","Sgabelli da bar","Sgabelli da cucina","Impilabili","Con braccioli"],
        brands:["LA SEGGIOLA","NARDI"] },
      { key:"poltroneDivani", label:"Poltrone e Divani",
        subs:["Tutti","Poltrone","Divani 2 posti","Divani 3 posti","Angolari","Relax","Chaise longue"],
        brands:["TEMPESTA","LA PRIMAVERA","ALES","MACONI"] },
      { key:"tavolini", label:"Tavolini",
        subs:["Tutti","Da salotto","Da caffè","Laterali","Allungabili","Vetro","Legno","Metallo"],
        brands:["ZAMAGNA","TARGET","INGENIA","IIT"] },
      { key:"pouf", label:"Pouf",
        subs:["Tutti","Contenitore","Ottomana","Rotondo","Rettangolare","Puff letto"],
        brands:["BIZZOTTO","SARMOG"] },
    ]
  },
  {
    macro: "Zona Notte",
    color: "#1a1210",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5"/><path d="M3 17h18"/><path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"/></svg>,
    cats: [
      { key:"letti", label:"Letti",
        subs:["Tutti","Singolo","Matrimoniale","Contenitore","Rete e doghe","Imbottito","Legno","Metallo"],
        brands:["ALES","INGENIA","IIT","SARMOG"] },
      { key:"materassi", label:"Materassi",
        subs:["Tutti","Memory","Molle","Lattice","Molle e Memory","Rigido","Medio","Morbido"],
        brands:["SUPREMA","MTA DORMIRIA"] },
      { key:"reti", label:"Reti",
        subs:["Tutti","A doghe","Alzabile","Regolabile","Elettrica","Matrimoniale","Singola"],
        brands:["ALES","INGENIA","IIT","SARMOG"] },
      { key:"comoComodini", label:"Comò e Comodini",
        subs:["Tutti","Comodini","Comò","Cassettiere","Armadi","Specchiere"],
        brands:["ALES","INGENIA","IIT","SARMOG"] },
    ]
  },

  {
    macro: "Ufficio",
    color: "#1a1210",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    cats: [
      { key:"scrivanieUfficio", label:"Scrivanie",
        subs:["Tutti","Angolari","Lineari","Con cassettiera","Regolabili in altezza","Vetro","Legno"],
        brands:["Nardi","Kastel","Arper","Fantoni","Brunner","Sedus","Wilkhahn","Steelcase"] },
      { key:"sedieErgonomiche", label:"Sedie Ergonomiche",
        subs:["Tutti","Direzionali","Operativa","Con poggiatesta","Senza braccioli","Gaming"],
        brands:["Kastel","Nardi","Arper","Sedus","Wilkhahn","Steelcase","Humanscale"] },
      { key:"mobiliUfficio", label:"Mobili e Complementi",
        subs:["Tutti","Librerie","Cassettiere","Armadi archivio","Divisori","Bacheche","Appendiabiti"],
        brands:["Fantoni","Nardi","Brunner","Kastel","Steelcase","Sedus"] },
    ]
  },
];

// SHOP_MENU flat (per compatibilità con filtri/sidebar)
const SHOP_MENU = SHOP_MACRO.flatMap(m => m.cats);

const SHOP_AMB_TO_CAT = {};
SHOP_MENU.forEach(c => { SHOP_AMB_TO_CAT[c.key] = "Complementi"; });
SHOP_AMB_TO_CAT.tavoliSedie    = "Tavoli & Sedie";
SHOP_AMB_TO_CAT.illuminazione  = "Illuminazione";
SHOP_AMB_TO_CAT.complementi    = "Complementi";
SHOP_AMB_TO_CAT.tavoli         = "Tavoli & Sedie";
SHOP_AMB_TO_CAT.sedieSedie     = "Tavoli & Sedie";
SHOP_AMB_TO_CAT.poltroneDivani = "Divani";
SHOP_AMB_TO_CAT.tavolini       = "Complementi";
SHOP_AMB_TO_CAT.pouf           = "Complementi";
SHOP_AMB_TO_CAT.letti          = "Zona Notte";
SHOP_AMB_TO_CAT.materassi      = "Materassi";
SHOP_AMB_TO_CAT.reti           = "Materassi";
SHOP_AMB_TO_CAT.comoComodini   = "Zona Notte";
SHOP_AMB_TO_CAT.scrivanieUfficio = "Ufficio";
SHOP_AMB_TO_CAT.sedieErgonomiche = "Ufficio";
SHOP_AMB_TO_CAT.mobiliUfficio  = "Ufficio";

// Palette colori Shop — beige/marrone, senza blu
const SP = {
  bg:       "#ffffff",
  sidebar:  "#ffffff",
  border:   "#ece7e0",
  accent:   "#1a1210",
  accentLt: "#c8b89a",
  text:     "#1a1210",
  muted:    "#9a8e88",
  hover:    "#faf8f5",
  active:   "#f5f0e8",
  pill:     "#c8b89a",
};

// Immagini hero per ogni categoria
const SHOP_HERO_IMGS = {
  elettrodomestici:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=70",
  lavelli:         "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=70",
  miscelatori:     "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=70",
  accessoriCucina: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=70",
  illuminazione:   "https://www.ideal-lux.com/assets/products/loc/_webp1k/434392/345291_LOC001_WAVES-3_SP_BIANCO.webp",
  complementi:     "https://www.astadelmobile.it/Images/hp-complementi-2.webp",
  tavoli:          "https://www.astadelmobile.it/Images/hp-tavolo-2.webp",
  sedieSedie:      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=70",
  poltroneDivani:  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=70",
  tavolini:        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=70",
  pouf:            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=70",
  letti:           "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=70",
  materassi:       "https://media.adeo.com/mkp/b33a5d51fb917a02be9f1253037ca59f/media.jpeg",
  reti:            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=70",
  comoComodini:    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=70",
  scrivanieUfficio:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70",
  sedieErgonomiche:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=70",
  mobiliUfficio:   "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70",
};


// ─── SHOP CARD verticale stile Schon ───────────────────────────────

// ─── CARRELLO CONTEXT HOOK ──────────────────────────────────────────────────
const useCart = () => {
  const { cartItems, addToCart, removeFromCart, updateQty, clearCart, cartTotal } = useApp();
  return { cartItems, addToCart, removeFromCart, updateQty, clearCart, cartTotal };
};


// ─── FAV HOOK ────────────────────────────────────────────────────────────────
const useFav = () => {
  const { favItems, toggleFav, isFav, removeFav } = useApp();
  return { favItems, toggleFav, isFav, removeFav };
};

// ─── FAV DRAWER ───────────────────────────────────────────────────────────────
function FavDrawer({ open, onClose, setPage, onOpenProduct }) {
  const { favItems, removeFav } = useFav();
  const { addToCart } = useCart();
  const { isMobile } = useBreakpoint();

  if(!open) return null;
  return (
    <>
      <div onClick={onClose}
        style={{position:"fixed",inset:0,background:"rgba(0,0,0,.45)",zIndex:9990,backdropFilter:"blur(2px)"}}/>
      <div style={{
        position:"fixed",top:0,right:0,height:"100vh",width:isMobile?"100vw":420,
        background:"white",zIndex:9991,display:"flex",flexDirection:"column",
        boxShadow:"-8px 0 40px rgba(0,0,0,.18)",
        animation:"slideInRight .25s ease"
      }}>
        {/* Header */}
        <div style={{padding:"20px 24px",borderBottom:"1.5px solid #ece7e0",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ba1e1e" stroke="#ba1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span style={{fontWeight:700,fontSize:16,color:"#1a1210"}}>I tuoi preferiti</span>
            {favItems.length>0 && <span style={{background:"#ba1e1e",color:"white",fontSize:11,fontWeight:700,borderRadius:999,padding:"2px 8px"}}>{favItems.length}</span>}
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:"#9a8e88",fontSize:20,lineHeight:1,padding:4}}>✕</button>
        </div>

        {/* Lista */}
        <div style={{flex:1,overflowY:"auto",padding:"16px 24px"}}>
          {favItems.length === 0 ? (
            <div style={{textAlign:"center",padding:"48px 0",color:"#9a8e88"}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ece7e0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom:16}}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <div style={{fontSize:14,fontWeight:600,marginBottom:8}}>Nessun preferito salvato</div>
              <div style={{fontSize:12,marginBottom:20}}>Clicca il ♡ su un prodotto per aggiungerlo qui</div>
              <button onClick={()=>{onClose();setPage("shop");}}
                style={{padding:"10px 22px",borderRadius:8,border:"1.5px solid #1a1210",background:"#1a1210",color:"white",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                Vai allo shop
              </button>
            </div>
          ) : (
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {favItems.map(item=>{
                const rawP = parseInt((item.price||"0").replace(/[^\d]/g,""));
                return (
                  <div key={item.id} style={{display:"flex",gap:12,padding:"12px",borderRadius:10,border:"1px solid #ece7e0",background:"#faf8f5",alignItems:"flex-start"}}>
                    {/* Immagine */}
                    <div style={{width:64,height:64,borderRadius:7,overflow:"hidden",flexShrink:0,background:"white",border:"1px solid #ece7e0",cursor:"pointer"}}
                      onClick={()=>{if(onOpenProduct){onOpenProduct(item);onClose();}}}>
                      <img src={item.imgUrl||""} alt={item.name}
                        style={{width:"100%",height:"100%",objectFit:"cover"}}
                        onError={e=>{e.target.style.display="none";}}/>
                    </div>
                    {/* Info */}
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#1a1210",lineHeight:1.3,marginBottom:2,
                        overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",cursor:"pointer"}}
                        onClick={()=>{if(onOpenProduct){onOpenProduct(item);onClose();}}}>
                        {item.name}
                      </div>
                      <div style={{fontSize:10,color:"#9a8e88",marginBottom:8}}>{item.brand}</div>
                      <div style={{fontSize:15,fontWeight:800,color:"#1a1210",marginBottom:8}}>
                        {item.price}
                      </div>
                      {/* Bottone aggiungi al carrello */}
                      <button onClick={()=>{addToCart(item);}}
                        style={{padding:"6px 12px",borderRadius:6,border:"1.5px solid #1a1210",
                          background:"#1a1210",color:"white",fontSize:11,fontWeight:700,cursor:"pointer",
                          fontFamily:"inherit",display:"flex",alignItems:"center",gap:5}}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        Aggiungi al carrello
                      </button>
                    </div>
                    {/* Rimuovi */}
                    <button onClick={()=>removeFav(item.id)}
                      style={{background:"none",border:"none",cursor:"pointer",color:"#ba1e1e",padding:4,flexShrink:0}}
                      title="Rimuovi dai preferiti">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {favItems.length > 0 && (
          <div style={{padding:"16px 24px 24px",borderTop:"1.5px solid #ece7e0",flexShrink:0,background:"white"}}>
            <button onClick={()=>{onClose();setPage("shop");}}
              style={{width:"100%",padding:"12px",borderRadius:9,border:"1.5px solid #ece7e0",
                background:"white",color:"#1a1210",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:8}}>
              Continua a sfogliare
            </button>
            <button onClick={()=>{favItems.forEach(item=>addToCart(item));}}
              style={{width:"100%",padding:"13px",borderRadius:9,border:"none",
                background:"#1a1210",color:"white",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}
              onMouseEnter={e=>e.currentTarget.style.background="#3d2f2b"}
              onMouseLeave={e=>e.currentTarget.style.background="#1a1210"}>
              Aggiungi tutti al carrello
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// ─── ADD TO CART BUTTON ──────────────────────────────────────────────────────
function AddToCartBtn({ item, onOpen }) {
  const { addToCart } = useCart();
  const [added, setAdded] = React.useState(false);
  const handle = (e) => {
    e.stopPropagation();
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };
  return (
    <button
      onClick={handle}
      style={{flex:1,padding:"8px 10px",borderRadius:7,border:"1.5px solid",
        borderColor:added?"#27ae60":"#1a1210",
        background:added?"#27ae60":"#1a1210",
        color:"white",fontSize:11.5,fontWeight:700,cursor:"pointer",
        fontFamily:"inherit",transition:"all .25s",display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>
      {added
        ? <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Aggiunto!</>
        : <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Aggiungi al carrello
          </>
      }
    </button>
  );
}

// ─── CART DRAWER (pannello laterale) ─────────────────────────────────────────
function CartDrawer({ open, onClose, setPage }) {
  const { cartItems, removeFromCart, updateQty, cartTotal, clearCart } = useCart();
  const { isMobile } = useBreakpoint();
  const total = cartTotal;
  const count = cartItems.reduce((s,x)=>s+x.qty,0);

  if(!open) return null;
  return (
    <>
      {/* Overlay */}
      <div onClick={onClose}
        style={{position:"fixed",inset:0,background:"rgba(0,0,0,.45)",zIndex:9990,backdropFilter:"blur(2px)"}}/>
      {/* Drawer */}
      <div style={{
        position:"fixed",top:0,right:0,height:"100vh",width:isMobile?"100vw":420,
        background:"white",zIndex:9991,display:"flex",flexDirection:"column",
        boxShadow:"-8px 0 40px rgba(0,0,0,.18)",
        animation:"slideInRight .25s ease"
      }}>
        <style>{`@keyframes slideInRight{from{transform:translateX(100%)}to{transform:translateX(0)}}`}</style>

        {/* Header drawer */}
        <div style={{padding:"20px 24px",borderBottom:"1.5px solid #ece7e0",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span style={{fontWeight:700,fontSize:16,color:"#1a1210"}}>Il tuo carrello</span>
            {count>0 && <span style={{background:"#1a1210",color:"white",fontSize:11,fontWeight:700,borderRadius:999,padding:"2px 8px"}}>{count}</span>}
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:"#9a8e88",fontSize:20,lineHeight:1,padding:4}}>✕</button>
        </div>

        {/* Prodotti */}
        <div style={{flex:1,overflowY:"auto",padding:"16px 24px"}}>
          {cartItems.length === 0 ? (
            <div style={{textAlign:"center",padding:"48px 0",color:"#9a8e88"}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ece7e0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom:16}}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <div style={{fontSize:14,fontWeight:600,marginBottom:8}}>Il carrello è vuoto</div>
              <div style={{fontSize:12}}>Aggiungi prodotti dallo shop per iniziare</div>
              <button onClick={()=>{onClose();setPage("shop");}}
                style={{marginTop:20,padding:"10px 22px",borderRadius:8,border:"1.5px solid #1a1210",
                  background:"#1a1210",color:"white",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                Vai allo shop
              </button>
            </div>
          ) : (
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {cartItems.map(item=>{
                const price = parseInt((item.price||"0").replace(/[^\d]/g,""));
                return (
                  <div key={item.id} style={{display:"flex",gap:12,padding:"12px",borderRadius:10,border:"1px solid #ece7e0",background:"#faf8f5",alignItems:"flex-start"}}>
                    {/* Immagine */}
                    <div style={{width:64,height:64,borderRadius:7,overflow:"hidden",flexShrink:0,background:"white",border:"1px solid #ece7e0"}}>
                      <img src={item.imgUrl||item.imgKey&&window.IMGS?.[item.imgKey]||""} alt={item.name}
                        style={{width:"100%",height:"100%",objectFit:"cover"}}
                        onError={e=>{e.target.style.display="none";}}/>
                    </div>
                    {/* Info */}
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#1a1210",lineHeight:1.3,marginBottom:2,
                        overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.name}</div>
                      <div style={{fontSize:10,color:"#9a8e88",marginBottom:8}}>{item.brand}</div>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        {/* Qty */}
                        <div style={{display:"flex",alignItems:"center",border:"1px solid #ece7e0",borderRadius:6,overflow:"hidden"}}>
                          <button onClick={()=>updateQty(item.id,item.qty-1)}
                            style={{width:26,height:26,border:"none",background:"white",cursor:"pointer",fontSize:14,fontWeight:700,color:"#1a1210",display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
                          <span style={{width:28,textAlign:"center",fontSize:12,fontWeight:700,color:"#1a1210"}}>{item.qty}</span>
                          <button onClick={()=>updateQty(item.id,item.qty+1)}
                            style={{width:26,height:26,border:"none",background:"white",cursor:"pointer",fontSize:14,fontWeight:700,color:"#1a1210",display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
                        </div>
                        <span style={{fontSize:14,fontWeight:800,color:"#1a1210"}}>€{(price*item.qty).toLocaleString("it-IT")}</span>
                      </div>
                    </div>
                    {/* Rimuovi */}
                    <button onClick={()=>removeFromCart(item.id)}
                      style={{background:"none",border:"none",cursor:"pointer",color:"#c8b89a",padding:4,flexShrink:0}}
                      title="Rimuovi">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer drawer */}
        {cartItems.length > 0 && (
          <div style={{padding:"16px 24px 24px",borderTop:"1.5px solid #ece7e0",flexShrink:0,background:"white"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
              <span style={{fontSize:13,color:"#9a8e88"}}>Subtotale</span>
              <span style={{fontSize:18,fontWeight:800,color:"#1a1210"}}>€{total.toLocaleString("it-IT")}</span>
            </div>
            <div style={{fontSize:11,color:"#9a8e88",marginBottom:16}}>Spedizione e IVA calcolate al checkout</div>
            <button
              onClick={()=>{ onClose(); setPage("checkout"); }}
              style={{width:"100%",padding:"13px",borderRadius:9,border:"none",
                background:"#1a1210",color:"white",fontSize:14,fontWeight:700,cursor:"pointer",
                fontFamily:"inherit",transition:"background .15s",marginBottom:8}}
              onMouseEnter={e=>e.currentTarget.style.background="#3d2f2b"}
              onMouseLeave={e=>e.currentTarget.style.background="#1a1210"}>
              Procedi all'acquisto →
            </button>
            <button onClick={()=>{clearCart();}}
              style={{width:"100%",padding:"9px",borderRadius:9,border:"1.5px solid #ece7e0",
                background:"transparent",color:"#9a8e88",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>
              Svuota carrello
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// ─── CHECKOUT PAGE ────────────────────────────────────────────────────────────
function CheckoutPage({ setPage }) {
  const { cartItems, cartTotal, clearCart, removeFromCart, updateQty } = useCart();
  const { isMobile } = useBreakpoint();
  const [step, setStep] = React.useState(1); // 1=riepilogo, 2=dati, 3=conferma
  const [form, setForm] = React.useState({ nome:"", cognome:"", email:"", tel:"", indirizzo:"", citta:"", cap:"", note:"" });
  const [payMethod, setPayMethod] = React.useState("carta");
  const [ordered, setOrdered] = React.useState(false);
  const total = cartTotal;
  const spedizione = total > 500 ? 0 : 35;
  const totaleFinal = total + spedizione;

  const upd = (k,v) => setForm(f=>({...f,[k]:v}));

  const handleOrder = () => {
    setOrdered(true);
    clearCart();
  };

  if(ordered) return (
    <div style={{minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 20px",textAlign:"center"}}>
      <div style={{width:72,height:72,borderRadius:"50%",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:24}}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style={{fontFamily:"Georgia,serif",fontSize:28,fontWeight:700,color:"#1a1210",marginBottom:12}}>Ordine confermato!</h2>
      <p style={{color:"#6b5f5b",fontSize:15,lineHeight:1.7,maxWidth:420,marginBottom:28}}>Grazie per il tuo acquisto. Riceverai una email di conferma a breve con tutti i dettagli dell'ordine e i tempi di consegna.</p>
      <button onClick={()=>setPage("shop")}
        style={{padding:"12px 28px",borderRadius:9,border:"none",background:"#1a1210",color:"white",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
        Torna allo shop
      </button>
    </div>
  );

  return (
    <div style={{background:"#faf8f5",minHeight:"100vh"}}>
      {/* Hero */}
      <div style={{background:"#1a1210",padding:isMobile?"32px 20px 28px":"40px 64px 32px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <button onClick={()=>setPage("shop")} style={{background:"none",border:"none",color:"rgba(255,255,255,.6)",cursor:"pointer",fontFamily:"inherit",fontSize:13,marginBottom:16,padding:0,display:"flex",alignItems:"center",gap:6}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            Torna allo shop
          </button>
          <h1 style={{fontFamily:"Georgia,serif",fontSize:isMobile?26:36,fontWeight:700,color:"white",margin:"0 0 8px"}}>Checkout</h1>
          {/* Step indicator */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginTop:16}}>
            {["Riepilogo","Dati di consegna","Conferma"].map((s,i)=>(
              <React.Fragment key={s}>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <div style={{width:22,height:22,borderRadius:"50%",fontSize:11,fontWeight:700,
                    background:step===i+1?"#c8b89a":step>i+1?"#27ae60":"rgba(255,255,255,.2)",
                    color:step>i+1?"white":"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {step>i+1?<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>:i+1}
                  </div>
                  <span style={{fontSize:12,color:step===i+1?"white":"rgba(255,255,255,.5)",fontWeight:step===i+1?700:400}}>{s}</span>
                </div>
                {i<2 && <div style={{flex:1,height:1,background:"rgba(255,255,255,.2)",maxWidth:40}}/>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:isMobile?"16px":"32px 64px",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 380px",gap:24,alignItems:"start"}}>
        
        {/* MAIN CONTENT */}
        <div>
          {/* STEP 1: Riepilogo */}
          {step === 1 && (
            <div style={{background:"white",borderRadius:14,border:"1.5px solid #ece7e0",padding:"24px"}}>
              <h3 style={{fontSize:18,fontWeight:700,color:"#1a1210",marginBottom:20,fontFamily:"Georgia,serif"}}>Prodotti nel carrello</h3>
              {cartItems.length === 0 ? (
                <div style={{textAlign:"center",padding:32,color:"#9a8e88"}}>
                  <div style={{marginBottom:8}}>Nessun prodotto nel carrello.</div>
                  <button onClick={()=>setPage("shop")} style={{marginTop:8,padding:"9px 20px",borderRadius:8,border:"1.5px solid #1a1210",background:"#1a1210",color:"white",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Vai allo shop</button>
                </div>
              ) : (
                <>
                  <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:24}}>
                    {cartItems.map(item=>{
                      const price = parseInt((item.price||"0").replace(/[^\d]/g,""));
                      return (
                        <div key={item.id} style={{display:"flex",gap:14,padding:"14px",borderRadius:10,border:"1px solid #ece7e0",alignItems:"center"}}>
                          <div style={{width:72,height:72,borderRadius:8,overflow:"hidden",flexShrink:0,background:"#faf8f5"}}>
                            <img src={item.imgUrl||""} alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>{e.target.style.display="none";}}/>
                          </div>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontSize:14,fontWeight:700,color:"#1a1210",marginBottom:2}}>{item.name}</div>
                            <div style={{fontSize:11,color:"#9a8e88",marginBottom:6}}>{item.brand}</div>
                            <div style={{display:"flex",alignItems:"center",gap:8}}>
                              <div style={{display:"flex",alignItems:"center",border:"1px solid #ece7e0",borderRadius:6,overflow:"hidden"}}>
                                <button onClick={()=>updateQty(item.id,item.qty-1)} style={{width:28,height:28,border:"none",background:"white",cursor:"pointer",fontSize:15,fontWeight:700,color:"#1a1210",display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
                                <span style={{width:30,textAlign:"center",fontSize:13,fontWeight:700}}>{item.qty}</span>
                                <button onClick={()=>updateQty(item.id,item.qty+1)} style={{width:28,height:28,border:"none",background:"white",cursor:"pointer",fontSize:15,fontWeight:700,color:"#1a1210",display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
                              </div>
                              <span style={{fontSize:15,fontWeight:800,color:"#1a1210"}}>€{(price*item.qty).toLocaleString("it-IT")}</span>
                            </div>
                          </div>
                          <button onClick={()=>removeFromCart(item.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#c8b89a",padding:4}}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <button onClick={()=>setStep(2)}
                    style={{width:"100%",padding:"13px",borderRadius:9,border:"none",background:"#1a1210",color:"white",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}
                    onMouseEnter={e=>e.currentTarget.style.background="#3d2f2b"}
                    onMouseLeave={e=>e.currentTarget.style.background="#1a1210"}>
                    Continua → Dati di consegna
                  </button>
                </>
              )}
            </div>
          )}

          {/* STEP 2: Dati consegna */}
          {step === 2 && (
            <div style={{background:"white",borderRadius:14,border:"1.5px solid #ece7e0",padding:"24px"}}>
              <h3 style={{fontSize:18,fontWeight:700,color:"#1a1210",marginBottom:20,fontFamily:"Georgia,serif"}}>Dati di consegna</h3>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
                {[["nome","Nome"],["cognome","Cognome"],["email","Email"],["tel","Telefono"]].map(([k,label])=>(
                  <div key={k}>
                    <div style={{fontSize:11,fontWeight:700,color:"#9a8e88",marginBottom:5,letterSpacing:".05em"}}>{label.toUpperCase()}</div>
                    <input value={form[k]} onChange={e=>upd(k,e.target.value)} placeholder={label}
                      style={{width:"100%",padding:"10px 12px",borderRadius:8,border:"1.5px solid #ece7e0",fontSize:13,fontFamily:"inherit",color:"#1a1210",outline:"none",boxSizing:"border-box"}}
                      onFocus={e=>e.target.style.borderColor="#1a1210"} onBlur={e=>e.target.style.borderColor="#ece7e0"}/>
                  </div>
                ))}
              </div>
              <div style={{marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:700,color:"#9a8e88",marginBottom:5,letterSpacing:".05em"}}>INDIRIZZO DI CONSEGNA</div>
                <input value={form.indirizzo} onChange={e=>upd("indirizzo",e.target.value)} placeholder="Via, numero civico"
                  style={{width:"100%",padding:"10px 12px",borderRadius:8,border:"1.5px solid #ece7e0",fontSize:13,fontFamily:"inherit",color:"#1a1210",outline:"none",boxSizing:"border-box",marginBottom:10}}
                  onFocus={e=>e.target.style.borderColor="#1a1210"} onBlur={e=>e.target.style.borderColor="#ece7e0"}/>
                <div style={{display:"grid",gridTemplateColumns:"1fr 120px",gap:10}}>
                  <input value={form.citta} onChange={e=>upd("citta",e.target.value)} placeholder="Città"
                    style={{padding:"10px 12px",borderRadius:8,border:"1.5px solid #ece7e0",fontSize:13,fontFamily:"inherit",color:"#1a1210",outline:"none"}}
                    onFocus={e=>e.target.style.borderColor="#1a1210"} onBlur={e=>e.target.style.borderColor="#ece7e0"}/>
                  <input value={form.cap} onChange={e=>upd("cap",e.target.value)} placeholder="CAP"
                    style={{padding:"10px 12px",borderRadius:8,border:"1.5px solid #ece7e0",fontSize:13,fontFamily:"inherit",color:"#1a1210",outline:"none"}}
                    onFocus={e=>e.target.style.borderColor="#1a1210"} onBlur={e=>e.target.style.borderColor="#ece7e0"}/>
                </div>
              </div>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:11,fontWeight:700,color:"#9a8e88",marginBottom:5,letterSpacing:".05em"}}>METODO DI PAGAMENTO</div>
                <div style={{display:"flex",gap:10}}>
                  {[["carta","💳 Carta"],["bonifico","🏦 Bonifico"],["negozio","🏪 In negozio"]].map(([k,label])=>(
                    <button key={k} onClick={()=>setPayMethod(k)}
                      style={{flex:1,padding:"10px 8px",borderRadius:8,border:"1.5px solid",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",transition:"all .13s",
                        borderColor:payMethod===k?"#1a1210":"#ece7e0",
                        background:payMethod===k?"#1a1210":"white",
                        color:payMethod===k?"white":"#5a5248"}}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:11,fontWeight:700,color:"#9a8e88",marginBottom:5,letterSpacing:".05em"}}>NOTE (opzionale)</div>
                <textarea value={form.note} onChange={e=>upd("note",e.target.value)} placeholder="Istruzioni per la consegna, preferenze orario..."
                  style={{width:"100%",padding:"10px 12px",borderRadius:8,border:"1.5px solid #ece7e0",fontSize:13,fontFamily:"inherit",color:"#1a1210",outline:"none",resize:"vertical",minHeight:80,boxSizing:"border-box"}}
                  onFocus={e=>e.target.style.borderColor="#1a1210"} onBlur={e=>e.target.style.borderColor="#ece7e0"}/>
              </div>
              <div style={{display:"flex",gap:10}}>
                <button onClick={()=>setStep(1)}
                  style={{padding:"12px 20px",borderRadius:9,border:"1.5px solid #ece7e0",background:"white",color:"#1a1210",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                  ← Indietro
                </button>
                <button onClick={()=>setStep(3)} disabled={!form.nome||!form.email||!form.indirizzo}
                  style={{flex:1,padding:"13px",borderRadius:9,border:"none",
                    background:form.nome&&form.email&&form.indirizzo?"#1a1210":"#ece7e0",
                    color:form.nome&&form.email&&form.indirizzo?"white":"#9a8e88",
                    fontSize:14,fontWeight:700,cursor:form.nome&&form.email&&form.indirizzo?"pointer":"default",fontFamily:"inherit"}}
                  onMouseEnter={e=>{if(form.nome&&form.email&&form.indirizzo)e.currentTarget.style.background="#3d2f2b"}}
                  onMouseLeave={e=>{if(form.nome&&form.email&&form.indirizzo)e.currentTarget.style.background="#1a1210"}}>
                  Continua → Conferma ordine
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Conferma */}
          {step === 3 && (
            <div style={{background:"white",borderRadius:14,border:"1.5px solid #ece7e0",padding:"24px"}}>
              <h3 style={{fontSize:18,fontWeight:700,color:"#1a1210",marginBottom:20,fontFamily:"Georgia,serif"}}>Riepilogo finale</h3>
              <div style={{background:"#faf8f5",borderRadius:10,padding:"16px",marginBottom:16}}>
                <div style={{fontSize:11,fontWeight:700,color:"#9a8e88",marginBottom:10,letterSpacing:".08em"}}>CONSEGNA A</div>
                <div style={{fontSize:13,fontWeight:700,color:"#1a1210"}}>{form.nome} {form.cognome}</div>
                <div style={{fontSize:12,color:"#6b5f5b"}}>{form.indirizzo}, {form.citta} {form.cap}</div>
                <div style={{fontSize:12,color:"#6b5f5b"}}>{form.email} · {form.tel}</div>
                <div style={{fontSize:12,color:"#6b5f5b",marginTop:4}}>Pagamento: {payMethod==="carta"?"Carta di credito":payMethod==="bonifico"?"Bonifico bancario":"In negozio"}</div>
              </div>
              {form.note && <div style={{background:"#fffbf0",borderRadius:8,padding:"10px 14px",marginBottom:16,fontSize:12,color:"#6b5f5b"}}>📝 {form.note}</div>}
              <div style={{marginBottom:24}}>
                {cartItems.map(item=>(
                  <div key={item.id} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid #f0ebe0",fontSize:13}}>
                    <span style={{color:"#1a1210"}}>{item.name} <span style={{color:"#9a8e88"}}>×{item.qty}</span></span>
                    <span style={{fontWeight:700,color:"#1a1210"}}>€{(parseInt((item.price||"0").replace(/[^\d]/g,""))*item.qty).toLocaleString("it-IT")}</span>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:10}}>
                <button onClick={()=>setStep(2)}
                  style={{padding:"12px 20px",borderRadius:9,border:"1.5px solid #ece7e0",background:"white",color:"#1a1210",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                  ← Indietro
                </button>
                <button onClick={handleOrder}
                  style={{flex:1,padding:"13px",borderRadius:9,border:"none",background:"#27ae60",color:"white",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#1e8449"}
                  onMouseLeave={e=>e.currentTarget.style.background="#27ae60"}>
                  ✓ Conferma ordine — €{totaleFinal.toLocaleString("it-IT")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR RIEPILOGO */}
        <div style={{background:"white",borderRadius:14,border:"1.5px solid #ece7e0",padding:"20px",position:"sticky",top:90}}>
          <div style={{fontSize:13,fontWeight:700,color:"#1a1210",marginBottom:16,borderBottom:"1px solid #ece7e0",paddingBottom:12}}>Riepilogo ordine</div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:13}}>
            <span style={{color:"#6b5f5b"}}>Subtotale ({cartItems.reduce((s,x)=>s+x.qty,0)} prodotti)</span>
            <span style={{fontWeight:600,color:"#1a1210"}}>€{total.toLocaleString("it-IT")}</span>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:16,fontSize:13}}>
            <span style={{color:"#6b5f5b"}}>Spedizione</span>
            <span style={{fontWeight:600,color:spedizione===0?"#27ae60":"#1a1210"}}>{spedizione===0?"Gratuita":`€${spedizione}`}</span>
          </div>
          {spedizione===0 && <div style={{background:"#e8f5e9",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#1e7e3e",marginBottom:16}}>🎁 Spedizione gratuita per ordini superiori a €500</div>}
          {spedizione>0 && <div style={{background:"#fff8e1",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#7d6608",marginBottom:16}}>Spedizione gratuita da €500 — mancano €{(500-total).toLocaleString("it-IT")}</div>}
          <div style={{display:"flex",justifyContent:"space-between",fontSize:16,fontWeight:800,color:"#1a1210",borderTop:"1.5px solid #ece7e0",paddingTop:12}}>
            <span>Totale</span>
            <span>€{totaleFinal.toLocaleString("it-IT")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopCard({ item, onOpen }) {
  const [hov, setHov] = useState(false);
  const { toggleFav, isFav } = useFav();
  const fav = isFav(item.id);
  const rawP = parseInt((item.price||"").replace(/[^\d]/g,""));
  const rawO = item.oldPrice ? parseInt(item.oldPrice.replace(/[^\d]/g,"")) : null;
  const disc = item.discount ? parseInt(item.discount) : null;
  const imgSrc = item.imgKey ? IMGS[item.imgKey] : (item.imgUrl || getProductImg(item.category, item.imgIdx||0));

  return (
    <div
      style={{background:"white",borderRadius:10,border:"1px solid #ece7e0",overflow:"hidden",cursor:"pointer",
        display:"flex",flexDirection:"column",height:"100%",
        transition:"box-shadow .2s,transform .2s",
        boxShadow:hov?"0 12px 32px rgba(0,0,0,.1)":"0 2px 6px rgba(0,0,0,.04)",
        transform:hov?"translateY(-3px)":"none"}}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      onClick={onOpen}>
      {/* Immagine — altezza fissa */}
      <div style={{position:"relative",height:200,flexShrink:0,overflow:"hidden",background:"#faf8f5"}}>
        {disc && (
          <div style={{position:"absolute",top:10,left:10,zIndex:2,background:"#1a1210",color:"white",
            fontSize:10,fontWeight:800,padding:"3px 9px",borderRadius:999,letterSpacing:".04em"}}>
            -{disc}%
          </div>
        )}
        <img src={imgSrc} alt={item.name}
          style={{width:"100%",height:"100%",objectFit:"cover",
            transform:hov?"scale(1.05)":"scale(1)",transition:"transform .4s"}}
          onError={e=>{e.target.src=getProductImg(item.category,0);}}/>
        <button
          onClick={e=>{e.stopPropagation();toggleFav(item);}}
          style={{position:"absolute",top:10,right:10,zIndex:3,width:30,height:30,borderRadius:"50%",
            border:"none",background:"rgba(255,255,255,.85)",cursor:"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",
            backdropFilter:"blur(4px)",transition:"all .15s"}}
          onMouseEnter={e=>e.currentTarget.style.background="white"}
          onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.85)"}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill={fav?"#ba1e1e":"none"} stroke={fav?"#ba1e1e":"#9a8e88"} strokeWidth="2" strokeLinecap="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      {/* Contenuto — flex grow per riempire e allineare bottoni in basso */}
      <div style={{padding:"14px 14px 16px",display:"flex",flexDirection:"column",flex:1}}>
        {/* Brand */}
        <div style={{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",
          color:"#9a8e88",marginBottom:5,height:18,overflow:"hidden"}}>
          <SupplierLogo brand={item.brand} small/>
        </div>
        {/* Nome — 2 righe fisse */}
        <div style={{fontSize:13,fontWeight:700,color:"#1a1210",lineHeight:1.4,marginBottom:5,
          height:36,overflow:"hidden",
          display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>
          {item.name.includes("—")?item.name.split("—")[0].trim():item.name}
        </div>
        {/* Descrizione — 2 righe fisse */}
        <div style={{fontSize:11.5,color:"#9a8e88",lineHeight:1.55,marginBottom:10,
          height:36,overflow:"hidden",
          display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>
          {item.desc||"Scopri tutte le caratteristiche e i dettagli di questo prodotto."}
        </div>
        {/* Spacer per spingere prezzo e bottoni in basso */}
        <div style={{flex:1}}/>
        {/* Prezzo */}
        <div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:12,height:24,overflow:"hidden"}}>
          {rawO && <span style={{fontSize:11,color:"#b0a898",textDecoration:"line-through"}}>€{rawO.toLocaleString("it-IT")}</span>}
          {disc && <span style={{fontSize:10,fontWeight:800,background:"#ba1e1e",color:"white",padding:"1px 6px",borderRadius:999}}>-{disc}%</span>}
          <span style={{fontSize:17,fontWeight:800,color:"#1a1210"}}>€{rawP.toLocaleString("it-IT")}</span>
        </div>
        {/* Bottoni */}
        <div style={{display:"flex",gap:7}}>
          <AddToCartBtn item={item} onOpen={onOpen}/>
          <button
            onClick={e=>{e.stopPropagation();onOpen();}}
            style={{padding:"8px 10px",borderRadius:7,border:"1.5px solid #ece7e0",
              background:"transparent",color:"#1a1210",fontSize:11.5,fontWeight:600,cursor:"pointer",
              fontFamily:"inherit",transition:"all .15s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="#c8b89a";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="#ece7e0";}}>
            Scopri
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper: render di una macro-categoria tile
function renderMacroTile(macro, ambKey, setAmbKey) {
  const active = macro.cats.some(c=>c.key===ambKey);
  return (
    <div key={macro.macro}
      style={{display:"flex",alignItems:"stretch",border:"1.5px solid",borderRadius:10,
        overflow:"hidden",transition:"box-shadow .18s",background:"white",
        boxShadow:active?"0 4px 14px rgba(0,0,0,.1)":"none",
        borderColor:active?"#1a1210":"#ece7e0",width:"100%"}}>
      {/* Header macro */}
      <div style={{padding:"10px 12px",background:active?"#1a1210":"#faf8f5",
        display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",
        gap:4,minWidth:68,borderRight:"1px solid #ece7e0",flexShrink:0}}>
        <span style={{color:active?"#c8b89a":macro.color,opacity:active?1:.85}}>{macro.icon}</span>
        <span style={{fontSize:8.5,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",
          color:active?"white":macro.color,textAlign:"center",lineHeight:1.2}}>
          {macro.macro}
        </span>
      </div>
      {/* Categorie con immagine */}
      <div style={{padding:"8px 10px",display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",flex:1}}>
        {macro.cats.map(cat=>(
          <div key={cat.key} onClick={()=>setAmbKey(ambKey===cat.key?"":cat.key)}
            style={{cursor:"pointer",borderRadius:8,overflow:"hidden",
              border:ambKey===cat.key?"2px solid #1a1210":"1.5px solid #ddd7d0",
              display:"flex",alignItems:"center",transition:"all .15s",
              background:ambKey===cat.key?"#1a1210":"white",
              boxShadow:ambKey===cat.key?"0 2px 8px rgba(0,0,0,.15)":"none"}}>
            <div style={{width:56,height:46,flexShrink:0,overflow:"hidden",background:"#f5f2ee"}}>
              <img src={SHOP_HERO_IMGS[cat.key]||""} alt={cat.label}
                style={{width:"100%",height:"100%",objectFit:"cover",
                  filter:ambKey===cat.key?"brightness(.8)":"grayscale(10%)",transition:"filter .2s"}}
                onError={e=>{e.target.style.display="none";}}/>
            </div>
            <div style={{padding:"0 8px",minWidth:64}}>
              <div style={{fontSize:10,fontWeight:700,color:ambKey===cat.key?"white":"#1a1210",
                lineHeight:1.25,whiteSpace:"nowrap"}}>{cat.label}</div>
              {ambKey===cat.key && <div style={{fontSize:8,color:"rgba(200,184,154,.85)",marginTop:1}}>✓</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopPage({ onOpenProduct, setPage }) {
  const { isMobile } = useBreakpoint();
  const all = useMemo(()=>buildShopProducts(),[]);
  const [ambKey,setAmbKey]       = useState("");
  const [openMacro,setOpenMacro]  = useState("Arredo");
  const [catOpen,setCatOpen]      = useState(true);
  const [shopQ,setShopQ]         = useState("");
  const [subFilter,setSub]       = useState("Tutti");
  const [elettroSub,setEletSub]  = useState("Tutti");
  const [brandF,setBrandF]       = useState("all");
  const [priceMax,setPriceMax]   = useState("");
  const [sortBy,setSortBy]       = useState("default");
  const [shopPage,setShopPage]   = useState(1);
  const PAGE_SIZE = 12;

  const curMenu = useMemo(()=>SHOP_MENU.find(m=>m.key===ambKey)||SHOP_MENU[0],[ambKey]);

  const filtered = useMemo(()=>{
    const tc = SHOP_AMB_TO_CAT[ambKey];
    return all.filter(p=>{
      if(tc && p.category!==tc) return false;
      if(brandF!=="all" && p.brand!==brandF) return false;
      if(shopQ.trim()){const sq=shopQ.toLowerCase();if(!`${p.name} ${p.brand||''} ${p.category} ${p.subcategory||''} ${p.desc||''}`.toLowerCase().includes(sq))return false;}
      if(subFilter!=="Tutti" && p.subcategory!==subFilter) return false;
      if(priceMax!==""){const pv=parseInt(p.price.replace(/[^\d]/g,""));if(isNaN(pv)||pv>parseInt(priceMax))return false;}
      return true;
    }).sort((a,b)=>{
      if(sortBy==="price_asc") return parseInt(a.price.replace(/[^\d]/g,""))-parseInt(b.price.replace(/[^\d]/g,""));
      if(sortBy==="price_desc") return parseInt(b.price.replace(/[^\d]/g,""))-parseInt(a.price.replace(/[^\d]/g,""));
      if(sortBy==="name_asc") return a.name.localeCompare(b.name,"it");
      if(sortBy==="name_desc") return b.name.localeCompare(a.name,"it");
      return 0;
    });
  },[all,ambKey,brandF,priceMax,sortBy,shopQ,subFilter]);

  useEffect(()=>{ setShopPage(1); setSub("Tutti"); setBrandF("all"); setPriceMax(""); setEletSub("Tutti"); },[ambKey]);
  useEffect(()=>{ setShopPage(1); setEletSub("Tutti"); },[subFilter]);
  useEffect(()=>{ setShopPage(1); },[subFilter,brandF,priceMax,sortBy]);


  // Stile pill filtro categoria
  const pill = (active) => ({
    padding:"5px 14px",borderRadius:999,fontSize:11.5,fontWeight:600,cursor:"pointer",
    fontFamily:"inherit",border:"1.5px solid",transition:"all .15s",
    borderColor:active?"#1a1210":SP.border,
    background:active?"#1a1210":"white",
    color:active?"white":SP.text,
  });

  return (
    <div style={{background:"white",minHeight:"100vh",fontFamily:"'Inter',-apple-system,sans-serif"}}>

      {/* HERO BANNER — immagine categoria */}
      <div style={{position:"relative",height:isMobile?160:220,overflow:"hidden"}}>
        <img src="https://www.shutterstock.com/image-illustration/laptop-flying-furniture-shopping-online-260nw-2236966119.jpg"
          alt={curMenu.label}
          style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(.55)"}}
          onError={e=>{e.target.style.display="none";}}/>
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{maxWidth:1400,margin:"0 auto",width:"100%",padding:isMobile?"0 24px":"0 32px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <div style={{display:"flex",height:3,width:60,borderRadius:1,overflow:"hidden"}}>
                <div style={{flex:1,background:"#009246"}}/><div style={{flex:1,background:"#ffffff"}}/><div style={{flex:1,background:"#ce2b37"}}/>
              </div>
              <div style={{fontSize:11,fontWeight:800,letterSpacing:".12em",textTransform:"uppercase",color:"rgba(255,255,255,.8)"}}>Asta E-commerce</div>
            </div>
            <h1 style={{fontSize:isMobile?26:40,fontWeight:700,color:"white",margin:0,fontFamily:"Georgia,serif",letterSpacing:"-.02em"}}>{curMenu.label}</h1>
            <div style={{fontSize:12,color:"rgba(255,255,255,.6)",marginTop:8}}>{filtered.length} prodotti disponibili</div>
          </div>
        </div>
      </div>



      {/* STRIP FORNITORI */}
      <div style={{background:"#faf8f5",borderBottom:"1px solid #ece7e0",padding:"16px 32px"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#9a8e88",marginBottom:12,textAlign:"center"}}>I nostri fornitori</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(10,1fr)",gap:10}}>
            {[
              {name:"NARDI",       cat:"Sedie"},
              {name:"BIZZOTTO",    cat:"Complementi"},
              {name:"SARMOG",      cat:"Complementi"},
              {name:"TARGET",      cat:"Tavoli e Sedie"},
              {name:"TEMPESTA",    cat:"Tavoli e Sedie"},
              {name:"ZAMAGNA",     cat:"Tavoli e Sedie"},
              {name:"CICIRIELLO",  cat:"Tavoli e Sedie"},
              {name:"LA SEGGIOLA", cat:"Tavoli e Sedie"},
              {name:"STONES",      cat:"Tavoli e Sedie"},
              {name:"IDEAL LUX",   cat:"Illuminazione"},
              {name:"LODES",       cat:"Illuminazione"},
              {name:"PERENZ",      cat:"Illuminazione"},
              {name:"ALES",        cat:"Letti"},
              {name:"INGENIA",     cat:"Tavoli"},
              {name:"IIT",         cat:"Tavoli"},
              {name:"LA PRIMAVERA",cat:"Ingressi"},
              {name:"MACONI",      cat:"Ingressi"},
              {name:"SUPREMA",     cat:"Reti e Materassi"},
              {name:"MTA DORMIRIA",cat:"Reti e Materassi"},
              {name:"SITAP",       cat:"Tappeti"},
            ].map(s=>(
              <div key={s.name}
                style={{background:"white",border:"1px solid #ece7e0",borderRadius:10,padding:"14px 8px",
                  display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",
                  transition:"box-shadow .15s,transform .15s"}}
                onClick={()=>{ const sup = SHOP_SUPPLIERS.find(x=>x.name===s.name); if(sup&&setPage) setPage("fornitori_"+sup.id); else if(setPage) setPage("fornitori"); }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 14px rgba(0,0,0,.08)";e.currentTarget.style.transform="translateY(-2px)";}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none";}}>
                <div style={{width:64,height:36,borderRadius:4,overflow:"hidden",background:"white",display:"flex",alignItems:"center",justifyContent:"center",padding:4}}>
                  <img src={SHOP_SUPPLIERS.find(sup=>sup.name===s.name)?.img||""} alt={s.name}
                    style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}
                    onError={e=>{e.target.style.display="none";e.target.parentNode.style.background="#1a1210";e.target.parentNode.innerHTML='<span style="font-size:7px;font-weight:900;color:white;padding:0 4px;text-align:center">'+s.name+'</span>';}}/>
                </div>
                <span style={{fontSize:9.5,color:"#1a1210",fontWeight:600,textAlign:"center"}}>{s.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LAYOUT PRINCIPALE */}
      <div style={{maxWidth:1400,margin:"0 auto",padding:isMobile?"12px 16px":"24px 32px",display:"grid",gridTemplateColumns:isMobile?"1fr":"260px 1fr",gap:24,alignItems:"start"}}>

        {/* ═══════════════════════════════════════
            SIDEBAR SINISTRA — sticky
        ═══════════════════════════════════════ */}
        {!isMobile && (
          <div style={{position:"sticky",top:90,display:"flex",flexDirection:"column",gap:16}}>

            {/* ── RIQUADRO CATEGORIE con MACRO ── */}
            <div style={{background:SP.sidebar,borderRadius:12,border:"2px solid #1a1210",overflow:"hidden",marginBottom:12}}>
              <div
                style={{padding:"14px 18px",borderBottom:`1px solid ${SP.border}`,
                  display:"flex",alignItems:"center",gap:8,userSelect:"none"}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
                <span style={{fontSize:11,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:SP.text,flex:1}}>Categorie</span>
              </div>
              <div style={{maxHeight:"none",overflowY:"visible"}}>
                {SHOP_MACRO.map(macro=>(
                  <div key={macro.macro}>
                    {/* Header macro */}
                    <div style={{padding:"9px 16px 7px",display:"flex",alignItems:"center",gap:7,
                      background:"#f5f0e8",borderTop:`1px solid ${SP.border}`}}>
                      <span style={{color:macro.color,flexShrink:0,opacity:.8}}>{macro.icon}</span>
                      <span style={{fontSize:9.5,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",
                        color:macro.color}}>{macro.macro}</span>
                    </div>
                    {/* Categorie */}
                    <div style={{padding:"3px 0 6px"}}>
                      {macro.cats.map(cat=>(
                        <div key={cat.key}>
                          <button onClick={()=>setAmbKey(ambKey===cat.key?"":cat.key)}
                            style={{width:"calc(100% - 8px)",border:"none",cursor:"pointer",fontFamily:"inherit",
                              padding:"7px 12px",display:"flex",alignItems:"center",justifyContent:"space-between",
                              borderRadius:6,margin:"1px 4px",transition:"all .13s",
                              background:ambKey===cat.key?"#1a1210":"transparent"}}
                            onMouseEnter={e=>{if(ambKey!==cat.key)e.currentTarget.style.background="#f0ebe2";}}
                            onMouseLeave={e=>{if(ambKey!==cat.key)e.currentTarget.style.background="transparent";}}>
                            <span style={{display:"flex",alignItems:"center",gap:7,flex:1}}>
                              {(()=>{
                                const CI={
                                  elettrodomestici:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><circle cx="12" cy="15" r="2"/></svg>,
                                  lavelli:         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="6" width="20" height="14" rx="1"/><path d="M2 10h20M12 10v10"/><path d="M12 6V3M10 3h4"/></svg>,
                                  miscelatori:     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 2v8M8 6c0 2.2 1.8 4 4 4s4-1.8 4-4"/><path d="M12 10v12M9 22h6"/></svg>,
                                  accessoriCucina: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
                                  illuminazione:   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.7-1.5 5-3.7 6.3L15 18H9l-.3-2.7C6.5 14 5 11.7 5 9a7 7 0 0 1 7-7z"/></svg>,
                                  complementi:     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
                                  tavoli:          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="7" width="20" height="3" rx="1"/><path d="M5 10v7M19 10v7"/></svg>,
                                  sedieSedie:      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 4v12M4 16h12M4 10h8"/></svg>,
                                  poltroneDivani:  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M20 10V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M2 10a2 2 0 0 1 2 2v2h16v-2a2 2 0 0 1 2-2"/><path d="M4 14v4M20 14v4"/></svg>,
                                  tavolini:        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><ellipse cx="12" cy="8" rx="9" ry="3"/><path d="M3 8v8M21 8v8M8 19h8"/></svg>,
                                  pouf:            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><ellipse cx="12" cy="10" rx="9" ry="5"/><path d="M3 10v4c0 2.8 4 5 9 5s9-2.2 9-5v-4"/></svg>,
                                  letti:           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5"/><path d="M3 17h18M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"/></svg>,
                                  materassi:       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="8" width="20" height="10" rx="2"/><path d="M2 12h20"/><path d="M5 8V6M19 8V6"/></svg>,
                                  reti:            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="9" width="20" height="8" rx="1"/><path d="M6 9V7M10 9V7M14 9V7M18 9V7"/></svg>,
                                  comoComodini:    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="4" x2="12" y2="20"/></svg>,
                                  scrivanieUfficio:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="9" width="20" height="3" rx="1"/><path d="M5 12v6M19 12v6M8 18h8"/></svg>,
                                  sedieErgonomiche:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="4" r="2"/><path d="M12 6v8M9 14h6M9 18l-2 4M15 18l2 4"/></svg>,
                                  mobiliUfficio:   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>,
                                };
                                return <span style={{color:ambKey===cat.key?"white":SP.muted,flexShrink:0}}>{CI[cat.key]||null}</span>;
                              })()}
                              <span style={{fontSize:12.5,fontWeight:ambKey===cat.key?700:500,
                                color:ambKey===cat.key?"white":SP.text,textAlign:"left"}}>{cat.label}</span>
                            </span>
                            <svg style={{transform:ambKey===cat.key?"rotate(90deg)":"none",transition:"transform .2s",flexShrink:0}}
                              width="9" height="9" viewBox="0 0 24 24" fill="none"
                              stroke={ambKey===cat.key?"rgba(255,255,255,.5)":SP.muted} strokeWidth="2.5">
                              <polyline points="9 18 15 12 9 6"/>
                            </svg>
                          </button>
                          {ambKey===cat.key && (
                            <div style={{background:"#faf8f5",padding:"3px 0 5px"}}>
                              {cat.subs.map(sub=>(
                                <div key={sub} style={{borderBottom:"0.5px solid #e8e0d0"}}>
                                <button onClick={()=>setSub(sub)}
                                  style={{width:"calc(100% - 8px)",border:"none",cursor:"pointer",fontFamily:"inherit",
                                    padding:"7px 12px 7px 28px",fontSize:12,display:"flex",alignItems:"center",gap:7,
                                    borderRadius:5,margin:"0 4px",transition:"all .1s",
                                    background:subFilter===sub?"#c8b89a":"transparent",
                                    color:subFilter===sub?"white":"#3d302b",fontWeight:subFilter===sub?600:400}}>
                                  <span style={{width:4,height:4,borderRadius:"50%",flexShrink:0,
                                    background:subFilter===sub?"rgba(200,184,154,.9)":"#7a6e68"}}/>
                                  {sub}
                                </button>
                              </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── PREZZO ── */}
            <div style={{background:SP.sidebar,borderRadius:12,border:"2px solid #1a1210",padding:"14px 18px"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span style={{fontSize:11,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:SP.text}}>Prezzo</span>
              </div>
              <div style={{fontSize:12,color:SP.muted,marginBottom:8}}>
                Max: <strong style={{color:SP.accent}}>{priceMax ? "€"+Number(priceMax).toLocaleString("it-IT") : "Qualsiasi"}</strong>
              </div>
              <input type="range" min={0} max={5000} step={50} value={priceMax||5000}
                onChange={e=>setPriceMax(e.target.value==="5000"?"":e.target.value)}
                style={{width:"100%",accentColor:SP.accent,cursor:"pointer",height:3}}/>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:SP.muted,marginTop:4}}>
                <span>€0</span><span>€5.000</span>
              </div>
            </div>

          </div>
        )}

        {/* ═══════════════════════════════════════
            COLONNA DESTRA
        ═══════════════════════════════════════ */}
        <div>

          {/* Breadcrumb + Ricerca inline */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,gap:12,flexWrap:"wrap"}}>
            <div style={{fontSize:11,color:SP.muted,display:"flex",alignItems:"center",gap:5}}>
              <span>Shop</span>
              <span style={{color:SP.border}}>›</span>
              <span style={{color:SP.accent,fontWeight:600}}>{curMenu.label}</span>
              {subFilter!=="Tutti" && <><span style={{color:SP.border}}>›</span><span style={{color:SP.text}}>{subFilter}</span></>}
            </div>
            {/* Ricerca dedicata shop — inline breadcrumb */}
            <div style={{display:"flex",alignItems:"center",gap:8,background:"#faf8f5",border:"1.5px solid #ece7e0",
              borderRadius:8,padding:"10px 16px",width:"70%",minWidth:280,position:"relative"}}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9a8e88" strokeWidth="2" style={{flexShrink:0}}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input value={shopQ} onChange={e=>{setShopQ(e.target.value);setShopPage(1);}}
                placeholder={`Cerca prodotti in ${curMenu.label}…`}
                style={{border:"none",outline:"none",fontSize:13,fontFamily:"inherit",color:"#1a1210",background:"transparent",width:"100%",height:20}}/>
              {shopQ && <button onClick={()=>{setShopQ("");setShopPage(1);}}
                style={{background:"none",border:"none",cursor:"pointer",color:"#9a8e88",padding:0,display:"flex",flexShrink:0}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>}
            </div>
          </div>

          {/* ── BRAND + PREZZO — 2 colonne ── */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
            {/* ── FILTRI BRAND — design professionale ── */}
          <div style={{background:"white",borderRadius:12,border:"1.5px solid #ece7e0",marginBottom:12,overflow:"hidden"}}>
            <div style={{padding:"12px 18px",borderBottom:"1px solid #f0ebe0",display:"flex",alignItems:"center",gap:8}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>
              <span style={{fontSize:10,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:"#1a1210"}}>Brand</span>
              {brandF!=="all" && (
                <button onClick={()=>setBrandF("all")} style={{marginLeft:"auto",background:"none",border:"none",cursor:"pointer",
                  fontSize:10,color:"#9a8e88",fontFamily:"inherit",padding:0,display:"flex",alignItems:"center",gap:4}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Azzera
                </button>
              )}
            </div>
            <div style={{padding:"12px 18px",display:"flex",flexWrap:"wrap",gap:6}}>
              <button onClick={()=>setBrandF("all")}
                style={{padding:"5px 13px",borderRadius:6,fontSize:11.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",
                  border:"1.5px solid",transition:"all .13s",
                  borderColor:brandF==="all"?"#1a1210":"#e0ddd8",
                  background:brandF==="all"?"#1a1210":"#faf8f5",
                  color:brandF==="all"?"white":"#5a5248"}}>
                Tutti
              </button>
              {curMenu.brands.map(b=>(
                <button key={b} onClick={()=>setBrandF(brandF===b?"all":b)}
                  style={{padding:"5px 13px",borderRadius:6,fontSize:11.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",
                    border:"1.5px solid",transition:"all .13s",
                    borderColor:brandF===b?"#1a1210":"#e0ddd8",
                    background:brandF===b?"#1a1210":"#faf8f5",
                    color:brandF===b?"white":"#5a5248"}}>
                  {b}
                </button>
              ))}
            </div>
          </div>

            {/* ── PREZZO ── */}
            <div style={{background:"white",borderRadius:12,border:"1.5px solid #ece7e0",overflow:"hidden"}}>
              <div style={{padding:"12px 18px",borderBottom:"1px solid #f0ebe0",display:"flex",alignItems:"center",gap:8}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span style={{fontSize:10,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:"#1a1210"}}>Prezzo</span>
              </div>
              <div style={{padding:"12px 18px"}}>
                <div style={{fontSize:12,color:"#9a8e88",marginBottom:8}}>
                  Max: <strong style={{color:"#1a1210"}}>{priceMax ? "€"+Number(priceMax).toLocaleString("it-IT") : "Qualsiasi"}</strong>
                </div>
                <input type="range" min={0} max={5000} step={50} value={priceMax||5000}
                  onChange={e=>setPriceMax(e.target.value==="5000"?"":e.target.value)}
                  style={{width:"100%",accentColor:"#1a1210",cursor:"pointer",height:3}}/>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#9a8e88",marginTop:4}}>
                  <span>€0</span><span>€5.000</span>
                </div>
              </div>
            </div>
          </div>
          {/* ── FILTRI TIPOLOGIA — solo per Elettrodomestici ── */}
          {ambKey==="elettrodomestici" && subFilter!=="Tutti" && (()=>{
            const subKey = {
              "Frigoriferi":"frigoriferi","Lavastoviglie":"lavastoviglie","Lavatrice":"lavatrice",
              "Forni":"forni","Piano Cottura":"pianiCottura","Microonde":"microonde","Cappe":"cappa"
            }[subFilter];
            const tipSubs = subKey && ELETTRO_SUBS[subKey] ? ELETTRO_SUBS[subKey] : [];
            if(!tipSubs.length) return null;
            return (
              <div style={{background:"white",borderRadius:12,border:"1.5px solid #ece7e0",marginBottom:12,overflow:"hidden"}}>
                <div style={{padding:"12px 18px",borderBottom:"1px solid #f0ebe0",display:"flex",alignItems:"center",gap:8}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                  <span style={{fontSize:10,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:"#1a1210"}}>Tipologia {subFilter}</span>
                  {elettroSub!=="Tutti" && (
                    <button onClick={()=>setEletSub("Tutti")} style={{marginLeft:"auto",background:"none",border:"none",cursor:"pointer",
                      fontSize:10,color:"#9a8e88",fontFamily:"inherit",padding:0,display:"flex",alignItems:"center",gap:4}}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      Azzera
                    </button>
                  )}
                </div>
                <div style={{padding:"12px 18px",display:"flex",flexWrap:"wrap",gap:6}}>
                  {tipSubs.map(t=>(
                    <button key={t} onClick={()=>setEletSub(t)}
                      style={{padding:"5px 13px",borderRadius:6,fontSize:11.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",
                        border:"1.5px solid",transition:"all .13s",
                        borderColor:elettroSub===t?"#c8b89a":"#e0ddd8",
                        background:elettroSub===t?"#1a1210":"#faf8f5",
                        color:elettroSub===t?"white":"#5a5248"}}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ── FILTRI TIPO — design professionale ── */}
          <div style={{background:"white",borderRadius:12,border:"1.5px solid #ece7e0",marginBottom:14,overflow:"hidden"}}>
            <div style={{padding:"12px 18px",borderBottom:"1px solid #f0ebe0",display:"flex",alignItems:"center",gap:8}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h10M4 18h6"/></svg>
              <span style={{fontSize:10,fontWeight:800,letterSpacing:".1em",textTransform:"uppercase",color:"#1a1210"}}>Tipo</span>
              {subFilter!=="Tutti" && (
                <button onClick={()=>setSub("Tutti")} style={{marginLeft:"auto",background:"none",border:"none",cursor:"pointer",
                  fontSize:10,color:"#9a8e88",fontFamily:"inherit",padding:0,display:"flex",alignItems:"center",gap:4}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Azzera
                </button>
              )}
            </div>
            <div style={{padding:"12px 18px",display:"flex",flexWrap:"wrap",gap:6}}>
              {curMenu.subs.map(sub=>(
                <button key={sub} onClick={()=>setSub(sub)}
                  style={{padding:"5px 13px",borderRadius:6,fontSize:11.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",
                    border:"1.5px solid",transition:"all .13s",
                    borderColor:subFilter===sub?"#c8b89a":"#e0ddd8",
                    background:subFilter===sub?"#1a1210":"#faf8f5",
                    color:subFilter===sub?"white":"#5a5248"}}>
                  {sub==="Tutti"?"Tutti":sub}
                </button>
              ))}
            </div>
          </div>

          {/* Sort + conteggio */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:10}}>
            <span style={{fontSize:13,color:SP.muted}}>
              <strong style={{color:SP.text}}>{filtered.length}</strong> risultati
              {brandF!=="all" && <span style={{color:SP.accent}}> · {brandF}</span>}
            </span>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:11,color:SP.muted}}>Ordina:</span>
              <select value={sortBy} onChange={e=>setSortBy(e.target.value)}
                style={{padding:"6px 10px",border:`1px solid ${SP.border}`,borderRadius:8,fontSize:12,fontFamily:"inherit",outline:"none",background:"white",color:SP.text}}>
                <option value="default">Rilevanza</option>
                <option value="price_asc">Prezzo ↑</option>
                <option value="price_desc">Prezzo ↓</option>
                <option value="name_asc">Nome A→Z</option>
                <option value="name_desc">Nome Z→A</option>
              </select>
            </div>
          </div>

          {/* ── GRIGLIA 3 COLONNE con PAGINAZIONE ── */}
          {(()=>{
            const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
            const pageItems = filtered.slice((shopPage-1)*PAGE_SIZE, shopPage*PAGE_SIZE);
            return filtered.length > 0 ? (
              <div>
                <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:20,alignItems:"stretch"}}>
                  {pageItems.map(p=><ShopCard key={p.id} item={p} onOpen={()=>onOpenProduct(p)}/>)}
                </div>
                {/* Paginazione */}
                {totalPages > 1 && (
                  <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:28,flexWrap:"wrap"}}>
                    <button onClick={()=>{setShopPage(p=>Math.max(1,p-1));window.scrollTo({top:0,behavior:"smooth"});}}
                      disabled={shopPage===1}
                      style={{padding:"8px 16px",borderRadius:7,border:"1.5px solid #ece7e0",
                        background:shopPage===1?"#faf8f5":"white",color:shopPage===1?"#c8b89a":"#1a1210",
                        fontSize:12,fontWeight:600,cursor:shopPage===1?"default":"pointer",fontFamily:"inherit",
                        transition:"all .13s"}}>
                      ← Precedente
                    </button>
                    {Array.from({length:totalPages},(_,i)=>i+1).map(pg=>(
                      <button key={pg} onClick={()=>{setShopPage(pg);window.scrollTo({top:0,behavior:"smooth"});}}
                        style={{width:36,height:36,borderRadius:7,border:"1.5px solid",
                          borderColor:shopPage===pg?"#1a1210":"#ece7e0",
                          background:shopPage===pg?"#1a1210":"white",
                          color:shopPage===pg?"white":"#1a1210",
                          fontSize:12,fontWeight:shopPage===pg?700:400,cursor:"pointer",fontFamily:"inherit",
                          transition:"all .13s"}}>
                        {pg}
                      </button>
                    ))}
                    <button onClick={()=>{setShopPage(p=>Math.min(totalPages,p+1));window.scrollTo({top:0,behavior:"smooth"});}}
                      disabled={shopPage===totalPages}
                      style={{padding:"8px 16px",borderRadius:7,border:"1.5px solid #ece7e0",
                        background:shopPage===totalPages?"#faf8f5":"white",
                        color:shopPage===totalPages?"#c8b89a":"#1a1210",
                        fontSize:12,fontWeight:600,cursor:shopPage===totalPages?"default":"pointer",fontFamily:"inherit",
                        transition:"all .13s"}}>
                      Successiva →
                    </button>
                    <span style={{fontSize:11,color:"#9a8e88",marginLeft:8}}>
                      Pagina {shopPage} di {totalPages} · {filtered.length} prodotti
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div style={{background:"white",borderRadius:12,border:`1px solid ${SP.border}`,padding:"56px 32px",textAlign:"center"}}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={SP.accentLt} strokeWidth="1.2" strokeLinecap="round" style={{marginBottom:16}}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <div style={{fontSize:15,fontWeight:700,color:SP.text,marginBottom:8}}>Prodotti in arrivo</div>
                <p style={{color:SP.muted,fontSize:13,lineHeight:1.7,maxWidth:320,margin:"0 auto 20px"}}>
                  I prodotti di questa categoria sono in fase di caricamento.<br/>Contattaci per disponibilità e prezzi.
                </p>
                <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>
                  {curMenu.brands.slice(0,6).map(b=>(
                    <span key={b} style={{padding:"5px 14px",borderRadius:999,border:`1px solid ${SP.border}`,fontSize:12,color:SP.muted}}>{b}</span>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

function Catalog({ onOpenProduct, initialSearch="" }) {
  const { isMobile, isTablet } = useBreakpoint();
  const all = useMemo(()=>buildProducts(),[]);
  const [ambTile,setAmbTile]=useState("cucina");
  const [q,setQ]=useState(initialSearch);
  const [category,setCategory]=useState("all");
  const [brand,setBrand]=useState("all");
  const [tierF,setTierF]=useState("all");
  const [onlyStock,setOnlyStock]=useState(false);
  const [onlineOnly,setOnlineOnly]=useState(false);
  const [priceMax,setPriceMax]=useState("");
  const [filtersOpen,setFiltersOpen]=useState(!isMobile);
  const [visibleCount,setVisibleCount]=useState(10);
  const [subFilter,setSubFilter]=useState("all");
  const [sortBy,setSortBy]=useState("default");

  const categoryOpts=useMemo(()=>{const s=new Set();AMBIENTI.forEach(a=>a.categories.forEach(c=>s.add(c.name)));return["all",...s];},[]);
  
  const brandOpts=useMemo(()=>{if(category==="all")return["all",...brandsSorted()];for(const a of AMBIENTI){const c=a.categories.find(x=>x.name===category);if(c)return["all",...c.brands];}return["all",...brandsSorted()];},[category]);

  const filtered=useMemo(()=>{
    const tc=ambTile!=="all"?AMB_TO_CATEGORY[ambTile]:null;
    const ONLINE_CATS=["Divani","Tavoli & Sedie","Complementi","Bagni"];
    return all.filter(p=>{
      const pIsOnline = p.availability==="online" || (p.availability!=="stock" && ONLINE_CATS.includes(p.category));
      if(onlyStock&&p.availability!=="stock") return false;
      if(onlineOnly&&!pIsOnline) return false;
      if(tc&&p.category!==tc) return false;
      if(category!=="all"&&p.category!==category) return false;
      if(brand!=="all"&&p.brand!==brand) return false;
      if(tierF!=="all"){const t=pickTier(p.brand);if(t.label!==tierF)return false;}
      if(q.trim()){const s=q.toLowerCase();if(!`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(s))return false;}
      if(priceMax!==""){const pv=parseInt(p.price.replace(/[^\d]/g,""));if(isNaN(pv)||pv>parseInt(priceMax))return false;}
      if(subFilter!=="all"&&p.subcategory!==subFilter) return false;
      return true;
    }).sort((a,b)=>{
      if(sortBy==="price_asc"){return parseInt(a.price.replace(/[^\d]/g,""))-parseInt(b.price.replace(/[^\d]/g,""));}
      if(sortBy==="price_desc"){return parseInt(b.price.replace(/[^\d]/g,""))-parseInt(a.price.replace(/[^\d]/g,""));}
      if(sortBy==="name_asc"){return a.name.localeCompare(b.name,"it");}
      if(sortBy==="name_desc"){return b.name.localeCompare(a.name,"it");}
      return 0;
    });
  },[all,onlyStock,onlineOnly,ambTile,category,brand,tierF,q,priceMax,subFilter,sortBy]);

  // Reset visualizzazione quando cambiano i filtri
  useEffect(()=>{ setVisibleCount(10); setSubFilter("all"); },[ambTile,category,brand,tierF,q,onlyStock,onlineOnly,priceMax]);

  return (
    <div style={{background:"white",minHeight:"60vh"}}>
      {/* AMBIENT TILES — 3 colonne x 3 righe */}
      <div style={{borderBottom:"1.5px solid #ece7e0",padding:isMobile?"14px 14px 10px":"18px 64px 16px",background:"white"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(3,1fr)",gap:10}}>
            {CATALOG_AMBS.map(a=>(
              <div key={a.key} onClick={()=>setAmbTile(a.key)}
                style={{cursor:"pointer",borderRadius:10,overflow:"hidden",
                  border:ambTile===a.key?"2.5px solid #1a1210":"2px solid #ece7e0",
                  display:"flex",alignItems:"center",gap:0,
                  transition:"all .18s",
                  boxShadow:ambTile===a.key?"0 4px 14px #0002":"none",
                  background:ambTile===a.key?"#1a1210":"white"}}>
                <div style={{width:isMobile?100:120,height:isMobile?80:100,flexShrink:0,overflow:"hidden"}}>
                  <img src={a.img} alt={a.label}
                    style={{width:"100%",height:"100%",objectFit:"cover",
                      filter:ambTile===a.key?"none":"grayscale(20%)"}}
                    onError={e=>{e.target.parentNode.style.background="#1a1210";e.target.style.display='none';}}
                  />
                </div>
                <div style={{padding:"0 12px",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                  <div style={{fontSize:isMobile?12:13,fontWeight:700,color:ambTile===a.key?"white":"#1a1210",textAlign:"center"}}>{a.label}</div>
                  {ambTile===a.key && <div style={{fontSize:10,color:"rgba(200,184,154,.7)",marginTop:2,textAlign:"center"}}>Selezionato ✓</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Sec bg="white">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
            <h1 style={{fontSize:isMobile?22:30,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210"}}>
              {ambTile==="all"?"Catalogo completo":CATALOG_AMBS.find(a=>a.key===ambTile)?.label}
            </h1>

          </div>
          {isMobile&&(
            <button onClick={()=>setFiltersOpen(o=>!o)}
              style={{...mkBtn("outline"),border:"1.5px solid #1a1210",padding:"9px 14px",fontSize:12}}>
              {filtersOpen?"✕ Filtri":"⚙ Filtri"}
            </button>
          )}
        </div>

        {(filtersOpen||!isMobile)&&(
          <>
          {/* BANNER FILTRI PRINCIPALE */}
          <div style={{background:"#faf8f5",border:"1.5px solid #ece7e0",borderRadius:14,padding:"18px 16px",
            display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:12,marginBottom:12}}>
            <div style={{gridColumn:isMobile?"1":"1/3"}}>
              <div style={{...TAG,marginBottom:6}}>Cerca</div>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cucina, divano, Aran..." style={inp}/>
            </div>
            {[
              {label:"Categoria",val:category,set:v=>{setCategory(v);setBrand("all");},opts:categoryOpts},
              {label:"Brand",val:brand,set:setBrand,opts:brandOpts},
              {label:"Fascia",val:tierF,set:setTierF,opts:[{v:"all",l:"Tutte"},{v:"Prodotti Selezionati",l:"● Fascia Selezionata"},{v:"Prodotti dell'Atelier",l:"● Fascia Atelier"},{v:"Prodotti Esclusivi",l:"● Fascia Esclusiva"}]}
            ].map(f=>(
              <div key={f.label}>
                <div style={{...TAG,marginBottom:6}}>{f.label}</div>
                <select value={f.val} onChange={e=>f.set(e.target.value)} style={sel}>
                  {f.opts.map(o=>typeof o==="string"
                    ?<option key={o} value={o}>{o==="all"?"Tutti":o}</option>
                    :<option key={o.v} value={o.v}>{o.l}</option>
                  )}
                </select>
              </div>
            ))}

            {/* PREZZO MAX — ultima riga, colonna intera */}
            <div style={{gridColumn:"1/-1",borderTop:"1px solid #e8e0d0",paddingTop:12,marginTop:4}}>
              <div style={{...TAG,marginBottom:6}}>Prezzo max — {priceMax ? "€"+Number(priceMax).toLocaleString("it-IT") : "Qualsiasi"}</div>
              <input type="range" min={0} max={10000} step={100} value={priceMax||10000}
                onChange={e=>setPriceMax(e.target.value==="10000"?"":e.target.value)}
                style={{width:"100%",accentColor:"#1a1210",cursor:"pointer",height:4}}/>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#9a8e88",marginTop:4}}>
                <span>€0</span><span>€10.000+</span>
              </div>
            </div>
          </div>

          {/* BANNER SOTTO-FILTRI per ambienti specifici */}
          {(()=>{
            const SUB_FILTERS = {
              tavoliSedie: [{v:"all",l:"Tutti"},{v:"Tavoli allungabili",l:"Tavoli"},{v:"Sedie",l:"Sedie"},{v:"Tavoli design",l:"Tavoli design"},{v:"Sgabelli",l:"Sgabelli"}],
              camera:      [{v:"all",l:"Tutti"},{v:"Camere complete",l:"Camere Complete"},{v:"Letti",l:"Letti"},{v:"Armadi",l:"Armadi"}],
              materassi:   [{v:"all",l:"Tutti"},{v:"Memory",l:"Memory"},{v:"Molle",l:"Molle"},{v:"Lattice",l:"Lattice"},{v:"Ibridi",l:"Molle e Memory"},{v:"Reti",l:"Reti"}],
            };
            const subs = SUB_FILTERS[ambTile];
            if(!subs) return null;
            return (
              <div style={{background:"#faf8f5",border:"1.5px solid #ece7e0",borderRadius:14,padding:"12px 16px",marginBottom:12,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <span style={{...TAG,marginRight:4}}>Filtra per:</span>
                {subs.map(s=>(
                  <button key={s.v} onClick={()=>setSubFilter(s.v)}
                    style={{padding:"6px 14px",borderRadius:999,fontSize:12,fontWeight:700,cursor:"pointer",
                      border:"1.5px solid",fontFamily:"inherit",transition:"all .15s",
                      borderColor:subFilter===s.v?"#1a1210":"#ddd7d0",
                      background:subFilter===s.v?"#1a1210":"white",
                      color:subFilter===s.v?"white":"#7a6e68"}}>
                    {s.l}
                  </button>
                ))}
              </div>
            );
          })()}
          </>
        )}

        {/* Fascia legenda + ordinamento */}
        <div style={{marginBottom:18,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
            <span style={{fontSize:13,color:"#6b5f5b"}}><strong style={{color:"#1a1210"}}>{filtered.length}</strong> prodotti</span>
            <div style={{display:"flex",gap:12,fontSize:11}}>
              {Object.values(TIERS).filter(t=>t.label!=="Artigianale").map(t=>(
                <span key={t.label} style={{display:"flex",alignItems:"center",gap:5,color:t.color,fontWeight:700}}>
                  <span style={{width:8,height:8,borderRadius:"50%",background:t.color,display:"inline-block"}}/>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
          {/* Ordinamento */}
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}
            style={{...sel,width:"auto",fontSize:12,padding:"6px 10px"}}>
            <option value="default">Ordine predefinito</option>
            <option value="price_asc">Prezzo: crescente</option>
            <option value="price_desc">Prezzo: decrescente</option>
            <option value="name_asc">Nome: A → Z</option>
            <option value="name_desc">Nome: Z → A</option>
          </select>
        </div>

        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,580px)",gap:22,justifyContent:"center"}}>
          {filtered.slice(0,visibleCount).map(p=><ProductCard key={p.id} item={p} onOpen={()=>onOpenProduct(p)}/>)}
        </div>
        {/* Sentinel per IntersectionObserver lazyload */}
        {visibleCount < filtered.length && (
          <div ref={el=>{
            if(!el) return;
            const obs = new IntersectionObserver(entries=>{
              if(entries[0].isIntersecting){ setVisibleCount(v=>v+10); obs.disconnect(); }
            },{rootMargin:"200px"});
            obs.observe(el);
          }} style={{height:20,marginTop:20}}/>
        )}
      </Sec>
    </div>
  );
}

// ─── PRODUCT PAGE ──────────────────────────
function AccordionItem({ title, children, defaultOpen=false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{borderBottom:"1.5px solid #ece7e0"}}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width:"100%", background:"none", border:"none", cursor:"pointer",
          display:"flex", justifyContent:"space-between", alignItems:"center",
          padding:"16px 0", fontFamily:"inherit",
          fontSize:13, fontWeight:700, color:"#1a1210", textAlign:"left",
        }}
      >
        {title}
        <span style={{fontSize:20,color:"#9a8e88",fontWeight:300,transition:"transform .2s",transform:open?"rotate(45deg)":"none",flexShrink:0,lineHeight:1}}>+</span>
      </button>
      <div style={{
        overflow:"hidden",
        maxHeight: open ? 600 : 0,
        transition:"max-height 0.35s ease",
        paddingBottom: open ? 20 : 0,
      }}>
        {children}
      </div>
    </div>
  );
}

const FAKE_REVIEWS = [
  { name:"Marco T. — Milano",       date:"Gen 2025", rating:5, text:"Qualità eccellente, esattamente come descritto. Consegna puntuale e montaggio impeccabile. Consigliatissimo." },
  { name:"Alessandra R. — Firenze", date:"Feb 2025", rating:5, text:"Ho aspettato qualche settimana ma ne è valsa ogni ora. Il prodotto supera ogni aspettativa." },
  { name:"Stefano B. — Roma",       date:"Mar 2025", rating:4, text:"Prodotto bellissimo, qualità eccellente. Tolgo una stella per i tempi di consegna leggermente più lunghi del previsto." },
];

function ProductPage({ item, onGoCatalog, isShop = false }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [activeThumb, setActiveThumb]   = useState(0);
  const [wishlist,    setWishlist]       = useState(false);
  const [cartDone,    setCartDone]       = useState(false);

  if(!item) return null;
  const tier    = pickTier(item.brand);
  const isStock  = item.availability === "stock";
  const isPrev   = item.mode === "preventivo";
  const isOnline = item.availability === "online" || (["Divani","Tavoli & Sedie","Complementi","Bagni"].includes(item.category) && !isStock);

  const THUMBS = ["Vista principale","Dettaglio","Ambiente","Laterale","Retro"];

  const allProds = useMemo(() => buildProducts(), []);
  const related  = useMemo(() =>
    allProds.filter(p => p.category === item.category && p.id !== item.id).slice(0,4),
  [allProds, item]);

  const specs = [
    ["Categoria",      item.category],
    ["Sottocategoria", item.subcategory],
    ["Brand",          item.brand],
    ...(tier.label !== "Prodotti Artigianali" ? [["Fascia", tier.label]] : []),
    ["Disponibilità",  isStock ? "Pronta consegna" : "Su ordine / Su misura"],
    ["Consegna",       isStock ? "2–4 settimane" : "8–12 settimane"],
    ["Montaggio",      "Incluso"],
    ["Garanzia",       "2 anni"],
  ];

  return (
    <div style={{background:"#faf8f5", minHeight:"100vh"}}>

      {/* BREADCRUMB */}
      <div style={{
        padding: isMobile ? "12px 16px" : "12px 64px",
        display:"flex", gap:8, alignItems:"center",
        fontSize:11, letterSpacing:".08em", textTransform:"uppercase",
        color:"#9a8e88", borderBottom:"1.5px solid #ece7e0",
        background:"white",
      }}>
        <span onClick={onGoCatalog} style={{cursor:"pointer",color:"#9a8e88"}}
          onMouseEnter={e=>e.target.style.color='#c8b89a'}
          onMouseLeave={e=>e.target.style.color='#9a8e88'}>
          {isShop ? "Shop" : "Catalogo"}
        </span>
        <span style={{color:"#ddd7d0"}}>/</span>
        <span style={{color:"#9a8e88"}}>{item.ambiente}</span>
        <span style={{color:"#ddd7d0"}}>/</span>
        <span style={{color:"#9a8e88"}}>{item.category}</span>
        <span style={{color:"#ddd7d0"}}>/</span>
        <span style={{color:"#1a1210",fontWeight:700}}>{item.brand}</span>
      </div>

      {/* MAIN: gallery sticky + info panel */}
      <div style={{
        display:"grid",
        gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 420px",
        maxWidth:1440, margin:"0 auto",
      }}>

        {/* ── GALLERIA ── */}
        <div style={{
          padding: isMobile ? "16px" : "40px 40px 40px 64px",
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "72px 1fr",
          gap:16,
          position: isMobile || isTablet ? "relative" : "sticky",
          top: isMobile || isTablet ? 0 : 64,
          height: isMobile || isTablet ? "auto" : "calc(100vh - 64px)",
          alignSelf:"start",
        }}>

          {/* Thumbnail strip */}
          <div style={{
            display:"flex",
            flexDirection: isMobile ? "row" : "column",
            gap:10,
            overflowX: isMobile ? "auto" : "visible",
            order: isMobile ? 2 : 0,
          }}>
            {THUMBS.map((t,i) => (
              <div key={i} onClick={() => setActiveThumb(i)}
                style={{
                  width:72, height:72, flexShrink:0,
                  border:`1.5px solid ${activeThumb===i ? "#1a1210" : "#ece7e0"}`,
                  cursor:"pointer", overflow:"hidden",
                  background:"#f0ece6", borderRadius:6,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"border-color .2s",
                }}>
                <span style={{
                  fontSize:"0.52rem", color:"#9a8e88", textAlign:"center",
                  padding:4, letterSpacing:".04em", textTransform:"uppercase", lineHeight:1.3,
                }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Immagine principale */}
          <div style={{
            position:"relative", background:"#f0ece6",
            borderRadius:14, overflow:"hidden",
            height: isMobile ? 300 : "100%", minHeight: isMobile ? 300 : 480,
          }}>
            <TierBar brand={item.brand}/>
            <DiscRibbon pct={item.discount}/>
            <img
              src={item.imgKey ? IMGS[item.imgKey] : (item.imgUrl || getProductImg(item.category, item.imgIdx||0))}
              alt={item.name}
              style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s cubic-bezier(.16,1,.3,1)",display:"block"}}
              onMouseEnter={e=>e.target.style.transform='scale(1.04)'}
              onMouseLeave={e=>e.target.style.transform='scale(1)'}
            />
          </div>
        </div>

        {/* ── INFO PANEL ── */}
        <div style={{
          padding: isMobile ? "24px 16px 48px" : "40px 48px 60px 32px",
          borderLeft: isMobile || isTablet ? "none" : "1.5px solid #ece7e0",
          borderTop:  isMobile || isTablet ? "1.5px solid #ece7e0" : "none",
          background:"white",
        }}>

          {/* Fascia + brand */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
            {tier.label !== "Prodotti Artigianali" && <span style={{...TAG,color:tier.color}}>{tier.label}</span>}
            <span style={{width:1,height:12,background:"#ddd7d0",display:"inline-block"}}/>
            <SupplierLogo brand={item.brand} small/>
          </div>

          {/* Badge ordinabile online — sotto la fascia */}
          {!isStock && ["Divani","Tavoli & Sedie","Complementi","Bagni"].includes(item.category) && (
            <div style={{marginBottom:14}}>
              <span style={{
                fontSize:10,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",
                padding:"4px 12px",borderRadius:999,
                background:"#f5f0e8",color:"#6b5035",
                border:"1px solid #c8b89a",
                display:"inline-flex",alignItems:"center",gap:5
              }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="#c8b89a" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Ordinabile online
              </span>
            </div>
          )}

          {/* Titolo */}
          <h1 style={{
            fontSize: isMobile ? 22 : 30, fontWeight:700,
            margin:"0 0 6px", letterSpacing:"-.02em",
            fontFamily:"Georgia,serif", color:"#1a1210", lineHeight:1.2,
          }}>{item.name}</h1>

          <p style={{fontSize:13,color:"#6b5f5b",marginBottom:20,lineHeight:1.6}}>
            {item.ambiente} · {item.category} · {item.subcategory}
          </p>

          {/* Prezzo */}
          <div style={{marginBottom:24,paddingBottom:24,borderBottom:"1.5px solid #ece7e0"}}>
            {isPrev ? (
              <>
                <div style={{fontSize:13,fontWeight:700,color:"#7a6e68",background:"#f4f1ee",padding:"8px 16px",borderRadius:999,border:"1px solid #ddd7d0",display:"inline-block",marginBottom:8}}>
                  Componibile su misura
                </div>
                <p style={{fontSize:12,color:"#9a8e88",margin:0}}>Progettazione gratuita · Nessun impegno</p>
              </>
            ) : (
              <>
                <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:4}}>
                  {item.oldPrice && <span style={{textDecoration:"line-through",color:"#c0b8b0",fontSize:14}}>{item.oldPrice}</span>}
                  <span style={{fontSize:30,fontWeight:800,color:"#1a1210",fontFamily:"Georgia,serif"}}>{item.price}</span>
                </div>
                {item.discount && (
                  <span style={{fontSize:11,fontWeight:700,color:"#eb344f",letterSpacing:".04em"}}>
                    Risparmi {item.discount}% · Prezzo bloccato
                  </span>
                )}
                <p style={{fontSize:11,color:"#9a8e88",marginTop:4}}>IVA inclusa · Consegna e montaggio inclusi</p>
              </>
            )}
          </div>

          {/* CTA */}
          <div style={{display:"grid",gap:10,marginBottom:16}}>
            {/* Bottone principale: Richiedi informazioni — sempre presente */}
            <div style={{display:"flex",gap:10}}>
              <button style={{...mkBtn("dark",true),padding:"13px",fontSize:13,flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:7}}
                onClick={()=>{setCartDone(true);setTimeout(()=>setCartDone(false),2200);}}>
                {cartDone ? (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Richiesta inviata!</>
                ) : (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Richiedi informazioni</>
                )}
              </button>
              <button
                onClick={()=>setWishlist(w=>!w)}
                style={{
                  width:50,height:50,border:`1.5px solid ${wishlist?"#e74c3c":"#ece7e0"}`,
                  borderRadius:8,background:"none",cursor:"pointer",display:"flex",
                  alignItems:"center",justifyContent:"center",flexShrink:0,
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlist?"#e74c3c":"none"} stroke={wishlist?"#e74c3c":"#1a1210"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
            {/* Bottone Aggiungi al carrello — solo per prodotti ordinabili online */}
            {isOnline && !isPrev && (
              <button
                style={{...mkBtn("outline",true),padding:"13px",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:7,border:"1.5px solid #1a1210",color:"#1a1210"}}
                onClick={()=>{setCartDone(true);setTimeout(()=>setCartDone(false),2200);}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                Aggiungi al carrello
              </button>
            )}
          </div>

          {/* Trust badges */}
          <div style={{
            display:"flex",gap:14,flexWrap:"wrap",
            padding:"14px 0",
            borderTop:"1.5px solid #ece7e0",
            borderBottom:"1.5px solid #ece7e0",
            marginBottom:24,
          }}>
            {[
              [<svg key="g" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,"Garanzia 2 anni"],
              [<svg key="f" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,"Prodotti Finanziabili"],
            ].map(([ico,label])=>(
              <div key={label} style={{display:"flex",alignItems:"center",gap:6,fontSize:11,color:"#6b5f5b"}}>
                {ico}{label}
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div style={{borderTop:"1.5px solid #ece7e0"}}>
            <AccordionItem title="Descrizione" defaultOpen={true}>
              <p style={{fontSize:13,color:"#4a3e3a",lineHeight:1.8,margin:0}}>
                {tier.label !== "Prodotti Artigianali" ? tier.label+"." : ""}{tier.label !== "Prodotti Artigianali" ? " " : ""}
                {isPrev
                  ? `Soluzione ${item.subcategory.toLowerCase()} progettata su misura per il tuo spazio. Il team di designer elabora un render 3D fotorealistico prima di confermare l'ordine. Finiture, materiali e dimensioni completamente personalizzabili.`
                  : `Prodotto ${item.subcategory.toLowerCase()} disponibile in pronta consegna. Imballo professionale, trasporto al piano e montaggio inclusi nel prezzo.`
                }
              </p>
            </AccordionItem>
            <AccordionItem title="Specifiche tecniche">
              <table style={{width:"100%",borderCollapse:"collapse"}}>
                <tbody>
                  {specs.map(([k,v]) => (
                    <tr key={k} style={{borderBottom:"1px solid #f0ece6"}}>
                      <td style={{padding:"8px 12px 8px 0",fontSize:12,color:"#9a8e88",width:"45%",verticalAlign:"top"}}>{k}</td>
                      <td style={{padding:"8px 0",fontSize:13,color:"#3d302e",fontWeight:600,verticalAlign:"top"}}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionItem>
            <AccordionItem title="Consegna e montaggio">
              <p style={{fontSize:13,color:"#4a3e3a",lineHeight:1.8,margin:"0 0 10px"}}>
                {isStock
                  ? "Disponibile in pronta consegna. Tempi: 2–4 settimane. Il team tecnico contatterà il cliente per concordare data e orario."
                  : "Tempi di produzione: 8–12 settimane dalla conferma d'ordine. Riceverai aggiornamenti costanti sullo stato."
                }
              </p>
              <p style={{fontSize:13,color:"#4a3e3a",lineHeight:1.8,margin:0}}>
                Montaggio eseguito da tecnici specializzati. Collaudo finale incluso. Smaltimento imballi a carico nostro.
              </p>
            </AccordionItem>
            <AccordionItem title="Finanziamento">
              <p style={{fontSize:13,color:"#4a3e3a",lineHeight:1.8,margin:0}}>
                Finanziamento a tasso 0% fino a 60 rate mensili. Approvazione in 10 minuti in negozio o in videocall. Nessun anticipo obbligatorio. La pratica è gestita interamente dal nostro team.
              </p>
            </AccordionItem>
          </div>

        </div>
      </div>

      {/* ── BELOW FOLD ── */}
      <div style={{maxWidth:1440,margin:"0 auto",padding: isMobile ? "48px 16px" : "72px 64px",borderTop:"1.5px solid #ece7e0"}}>

        {/* ── MATERIALI ── */}
        <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
          <h2 style={{fontSize:isMobile?20:26,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210",whiteSpace:"nowrap"}}>Materiali</h2>
          <div style={{flex:1,height:"1.5px",background:"#ece7e0"}}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)",gap:16,marginBottom:56}}>
          {[
            {ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.5"/><path d="M9.5 4.75c1 1.5 3 3 4.5 3.5-1.5-2-2.5-3.5-4.5-3.5z"/><path d="M3 11.5c2.5-.5 7 .5 9 2"/></svg>, titolo:"Struttura in Truciolare idrofugo", desc:"Pannelli E1 a bassa emissione di formaldeide, spessore 18mm. Trattamento antibatterico di serie. Certificazione CARB P2."},
            {ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18"/></svg>, titolo:"Ante in MDF laccato", desc:"Fibra di legno a media densità, spessore 19mm. Laccatura a polvere poliuretanica con finitura opaca o lucida. Alta resistenza ai graffi."},
            {ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>, titolo:"Top in laminato HPL", desc:"Laminato ad alta pressione, spessore 28mm. Resistente al calore fino a 180°C, all'umidità e ai prodotti chimici d'uso domestico."},
            {ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>, titolo:"Cerniere Blum Clip-top", desc:"Sistema ammortizzato a chiusura silenziosa. Angolo di apertura 110°. Regolazione tridimensionale. Garanzia lifetime."},
            {ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, titolo:"Cassetti Grass Nova Pro", desc:"Guide telescopiche a completa estrazione, portata 40 kg. Chiusura ammortizzata Soft-Close integrata. Fondo in truciolato da 12mm."},
            {ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 1 3 3v1h1a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8h1V5a3 3 0 0 1 3-3z"/><line x1="12" y1="15" x2="12" y2="22"/></svg>, titolo:"Barre e accessori in alluminio", desc:"Profili estrusi in alluminio anodizzato. Spessore minimo 1,5mm. Finitura inox satinato o nero opaco a scelta."},
          ].map(m=>(
            <div key={m.titolo} style={{...cardS,padding:"18px 20px",display:"flex",gap:14,alignItems:"flex-start"}}>
              <span style={{fontSize:26,flexShrink:0}}>{m.ico}</span>
              <div>
                <div style={{fontWeight:700,fontSize:13,color:"#1a1210",marginBottom:5}}>{m.titolo}</div>
                <p style={{fontSize:12,color:"#6b5f5b",lineHeight:1.7,margin:0}}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── FINITURE DISPONIBILI ── */}
        <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
          <h2 style={{fontSize:isMobile?20:26,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210",whiteSpace:"nowrap"}}>Finiture disponibili</h2>
          <div style={{flex:1,height:"1.5px",background:"#ece7e0"}}/>
        </div>
        <div style={{marginBottom:56}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:20,marginBottom:28}}>
            {[
              {nome:"Bianco Opaco",     hex:"#F5F4F0", bordo:"#ddd7d0"},
              {nome:"Bianco Lucido",    hex:"#FEFEFE", bordo:"#ddd7d0"},
              {nome:"Grigio Cemento",   hex:"#9E9E94", bordo:null},
              {nome:"Antracite Opaco",  hex:"#3E3E3A", bordo:null},
              {nome:"Nero Lucido",      hex:"#1A1814", bordo:null},
              {nome:"Rovere Naturale",  hex:"#C4A882", bordo:null},
              {nome:"Noce Canaletto",   hex:"#6B4226", bordo:null},
              {nome:"Verde Salvia",     hex:"#8A9E80", bordo:null},
            ].map(f=>(
              <div key={f.nome} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
                <div style={{
                  width:56,height:56,borderRadius:8,
                  background:f.hex,
                  border:`1.5px solid ${f.bordo||f.hex}`,
                  boxShadow:"0 2px 8px #0001",
                  cursor:"pointer",transition:"transform .18s",
                }}
                onMouseEnter={e=>e.currentTarget.style.transform="scale(1.1)"}
                onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
                />
                <span style={{fontSize:11,color:"#6b5f5b",textAlign:"center",maxWidth:64,lineHeight:1.3}}>{f.nome}</span>
              </div>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",gap:12}}>
            {[
              {label:"Effetto Legno",   desc:"Nobilitato in melaminico con texture a poro aperto, fedele alla venatura naturale."},
              {label:"Laccato Opaco",   desc:"Superficie a base acqua con finitura vellutata, anti-impronta, disponibile in 40 colori RAL."},
              {label:"Laccato Lucido",  desc:"Alta riflessione 95 gloss, aspetto specchiato. Ideale per ambienti di design contemporaneo."},
              {label:"Effetto Marmo",   desc:"Stampa digitale ad alta risoluzione su HPL, con venature realistiche in 4 varianti."},
            ].map(f=>(
              <div key={f.label} style={{...cardS,padding:"14px 16px",borderLeft:"3px solid #c8b89a"}}>
                <div style={{fontWeight:700,fontSize:13,color:"#1a1210",marginBottom:4}}>{f.label}</div>
                <p style={{fontSize:12,color:"#6b5f5b",lineHeight:1.65,margin:0}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ARREDATORE RISPONDE (AI) ── */}
        <div style={{marginBottom:56}}>
          <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:0}}>
            <h2 style={{fontSize:isMobile?20:26,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210",whiteSpace:"nowrap"}}>Il Genio Risponde</h2>
            <div style={{flex:1,height:"1.5px",background:"#ece7e0"}}/>
          </div>
          <AIChat context="product" productName={item?.name||""}/>
        </div>

        {/* ── SCHEDE TECNICHE ── */}
        <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
          <h2 style={{fontSize:isMobile?20:26,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210",whiteSpace:"nowrap"}}>Schede Tecniche</h2>
          <div style={{flex:1,height:"1.5px",background:"#ece7e0"}}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)",gap:12,marginBottom:56}}>
          {[
            {ico:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, titolo:"Scheda tecnica prodotto", formato:"PDF · 1.2 MB", desc:"Dimensioni, materiali, codici colore e specifiche complete della composizione."},
            {ico:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, titolo:"Certificazione materiali", formato:"PDF · 840 KB", desc:"Conformità CARB P2, certificazione FSC per i pannelli in legno di origine controllata."},
            {ico:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>, titolo:"Istruzioni di montaggio", formato:"PDF · 3.4 MB", desc:"Guida passo-passo con illustrazioni. Disponibile anche in video sul nostro canale YouTube."},
            {ico:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="21" x2="3" y2="21"/><polyline points="3 9 12 3 21 9"/><path d="M9 21V12H15V21"/></svg>, titolo:"Disegni tecnici 2D / 3D", formato:"DWG + PDF · 5.1 MB", desc:"File CAD e render 3D della composizione per architetti e progettisti."},
            {ico:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, titolo:"Scheda ambientale (EPD)", formato:"PDF · 620 KB", desc:"Dichiarazione ambientale di prodotto: impronta di carbonio, riciclabilità e ciclo di vita."},
            {ico:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, titolo:"Certificato di garanzia", formato:"PDF · 210 KB", desc:"Condizioni di garanzia biennale, modalità di assistenza post-vendita e copertura parti."},
          ].map(s=>(
            <div key={s.titolo} style={{...cardS,padding:"16px 18px",display:"flex",gap:14,alignItems:"flex-start",cursor:"pointer"}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow="0 6px 24px #0001"}
              onMouseLeave={e=>e.currentTarget.style.boxShadow="0 2px 8px #0001"}
            >
              <div style={{flexShrink:0,marginTop:2}}>{s.ico}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontWeight:700,fontSize:13,color:"#1a1210",marginBottom:3}}>{s.titolo}</div>
                <div style={{fontSize:10,color:"#c8b89a",fontWeight:700,letterSpacing:".06em",marginBottom:5}}>{s.formato}</div>
                <p style={{fontSize:12,color:"#6b5f5b",lineHeight:1.65,margin:"0 0 10px"}}>{s.desc}</p>
                <span style={{fontSize:11,fontWeight:700,color:"#1a1210",display:"flex",alignItems:"center",gap:5}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Scarica
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Prodotti correlati */}
        {related.length > 0 && (
          <>
            <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:28}}>
              <h2 style={{fontSize:isMobile?22:30,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210",whiteSpace:"nowrap"}}>Potrebbe interessarti</h2>
              <div style={{flex:1,height:"1.5px",background:"#ece7e0"}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",gap:isMobile?14:20}}>
              {related.map(p => (
                <ProductCardVertical key={p.id} item={p} onOpen={()=>{}}/>
              ))}
            </div>
            <div style={{textAlign:"center",marginTop:32}}>
              <button onClick={onGoCatalog} style={{...mkBtn("outline"),border:"1.5px solid #1a1210",padding:"13px 32px",fontSize:14,display:"inline-flex",alignItems:"center",gap:8}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                {isShop ? "Torna allo Shop" : "Torna al Catalogo"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── PRONTA CONSEGNA ───────────────────────
function ProntaConsegnaPage({ onOpenProduct }) {
  const { isMobile, isTablet } = useBreakpoint();
  const items = useMemo(()=>buildProducts().filter(p=>p.availability==="stock"),[]);
  return (
    <Sec bg="white">
      <SH label="Disponibile subito" title="Pronta consegna" sub="Expo, fine serie e stock. Prezzi scontati, consegna in 2–4 settimane." isMobile={isMobile}/>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:16}}>
        {items.map(p=><ProductCard key={p.id} item={p} onOpen={()=>onOpenProduct(p)}/>)}
      </div>
    </Sec>
  );
}

// ─── PROMO CARD ────────────────────────────
// ─── NORMALIZZA PRODOTTI PER ProductPage ─────────────────────────
function normalizePromo(promo) {
  return {
    id: promo.id, name: promo.name,
    brand: promo.brand || "Asta del Mobile",
    category: promo.category || "Cucine",
    subcategory: promo.category || "",
    ambiente: "Cucine", price: promo.promoPrice,
    oldPrice: promo.originalPrice, discount: promo.saving,
    imgUrl: promo.img, desc: promo.desc,
    mode: "acquisto", availability: "stock",
  };
}
function normalizeFalegna(p) {
  return {
    id: p.id, name: p.name,
    brand: "Falegnameria Artigianale",
    category: "Artigianale", subcategory: "Legno massello",
    ambiente: "Living", price: p.price,
    oldPrice: p.oldPrice, discount: p.discount,
    imgUrl: p.img, desc: p.desc,
    mode: "preventivo", availability: "custom",
  };
}

function PromoCard({ promo, onOpen }) {
  const [hov,setHov]=useState(false);
  const accentColor = "#eb344f";
  return (
    <div style={{
      display:"grid", gridTemplateColumns:"65% 35%",
      borderRadius:14, overflow:"hidden", cursor:"pointer",
      border:"1.5px solid #ba1e1e",
      background:"white", position:"relative",
      boxShadow:hov?"0 10px 36px rgba(186,30,30,.25)":"0 2px 8px rgba(0,0,0,.04)",
      transform:hov?"translateY(-2px)":"none",
      transition:"all .22s", minHeight:300,
    }}
      onClick={onOpen}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>

      {/* ── COLONNA SX: immagine ── */}
      <div style={{position:"relative",overflow:"hidden"}}>
        {/* Ribbon sconto */}
        <div style={{position:"absolute",top:14,left:-2,zIndex:10,background:"linear-gradient(to bottom, #ba1e1e 0%, #9e1818 55%, #8a1515 100%)",color:"white",
          fontSize:11,fontWeight:900,padding:"4px 14px 4px 8px",borderRadius:"0 999px 999px 0",
          boxShadow:"0 2px 8px rgba(138,21,21,.5)"}}>−{promo.saving}</div>
        <img src={promo.img} alt={promo.name}
          style={{width:"100%",height:"100%",objectFit:"cover",display:"block",
            transform:hov?"scale(1.04)":"scale(1)",transition:"transform .4s"}}/>
      </div>

      {/* ── COLONNA DX: info ── */}
      <div style={{display:"flex",flexDirection:"column",borderLeft:"1.5px solid #ffe0de",
        position:"relative",overflow:"hidden"}}>
        {/* Barra rossa in cima con sfumatura */}
        <div style={{
          padding:"14px 16px 12px",
          background:`linear-gradient(to bottom, #ba1e1e 0%, #9e1818 55%, #8a1515 100%), #1a1210`,
          borderBottom:`1.5px solid ${accentColor}8c`,
        }}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center",gap:5}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:"rgba(255,255,255,.8)",flexShrink:0,display:"inline-block"}}/>
              <span style={{fontSize:10,fontWeight:700,color:"white",letterSpacing:".05em",textTransform:"uppercase"}}>Promo Bloccata</span>
            </div>
            <span style={{fontSize:9,fontWeight:800,padding:"3px 10px",borderRadius:999,
              display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",
              background:promo.tag==="EXPO"?"#e8f5e9":promo.tag==="FINE SERIE"?"#fff3e0":"#fff3ea",
              color:promo.tag==="EXPO"?"#27ae60":promo.tag==="FINE SERIE"?"#f39c12":"#eb344f",
              border:`1px solid ${promo.tag==="EXPO"?"#27ae6033":promo.tag==="FINE SERIE"?"#f39c1233":"#eb344f33"}`,
              letterSpacing:".04em"}}>
              {promo.tag==="PROMO" ? "COME FOTO" : promo.tag}
            </span>
          </div>
        </div>

        <div style={{padding:"10px 16px 16px",flex:1,display:"flex",flexDirection:"column"}}>
          {/* Brand */}
          <div style={{fontSize:10,fontWeight:700,color:"#9a8e88",letterSpacing:".07em",textTransform:"uppercase",marginBottom:5}}>
            <SupplierLogo brand={promo.brand} small/>
          </div>
          {/* Nome */}
          <div style={{fontWeight:700,fontSize:14,color:"#1a1210",lineHeight:1.35,marginBottom:5}}>{promo.name}</div>
          {/* Cat */}
          <div style={{fontSize:11,color:"#b0a898",marginBottom:8}}>{promo.category}</div>
          {/* Desc */}
          <p style={{fontSize:12,color:"#6b5f5b",lineHeight:1.6,flex:1,
            display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",marginBottom:12}}>
            {promo.desc}
          </p>
          {/* Prezzi */}
          <div style={{display:"flex",alignItems:"baseline",gap:6,flexWrap:"wrap",marginBottom:4}}>
            <span style={{textDecoration:"line-through",color:"#bbb",fontSize:12}}>{promo.originalPrice}</span>
            <span style={{fontSize:20,fontWeight:800,lineHeight:1,
              background:"linear-gradient(to bottom, #ba1e1e 0%, #8a1515 100%)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{promo.promoPrice}</span>
          </div>
          <div style={{fontSize:10,color:"#9a8e88",marginBottom:12}}>Offerta limitata · Prezzo bloccato</div>
          {/* CTA */}
          <button style={{padding:"9px 10px",fontSize:12,marginTop:"auto",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontWeight:700,color:"white",background:"linear-gradient(to bottom, #ba1e1e 0%, #9e1818 55%, #8a1515 100%)"}}>
            Scopri →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PROMO PAGE ────────────────────────────
function PromoPage({ openProduct }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [filter,setFilter]=useState("all");
  const [visibleCount,setVisibleCount]=useState(10);
  const sentinelRef = useRef(null);
  const cats=["all","Cucine","Divani","Tavoli & Sedie"];
  const filtered=filter==="all"?PROMOS:PROMOS.filter(p=>p.category===filter);
  useEffect(()=>setVisibleCount(10),[filter]);
  useEffect(()=>{
    const el = sentinelRef.current;
    if(!el) return;
    const obs = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting && visibleCount < filtered.length)
        setVisibleCount(v=>Math.min(v+10, filtered.length));
    },{rootMargin:"200px"});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[visibleCount, filtered.length]);
  return (
    <div>
      <div style={{background:"linear-gradient(to bottom, #ba1e1e 0%, #9e1818 55%, #8a1515 100%)",padding:isMobile?"48px 20px":"64px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{...TAG,color:"rgba(255,255,255,.6)",marginBottom:12}}>Offerte a tempo limitato</div>
          <h1 style={{fontSize:isMobile?30:50,fontWeight:700,color:"white",margin:"0 0 16px",fontFamily:"Georgia,serif"}}>Promozioni bloccate</h1>
          <p style={{color:"rgba(255,255,255,.75)",fontSize:isMobile?14:16,lineHeight:1.75,maxWidth:500,margin:0}}>Accordi commerciali con i nostri fornitori per garantirvi un prodotto di qualità ad un prezzo ancora più conveniente!</p>
        </div>
      </div>
      {/* Barra info prezzi bloccati — nuovo stile elegante */}
      <div style={{background:"#1a1210",borderBottom:"1.5px solid #2d1f0e",padding:"12px 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:28,height:28,borderRadius:"50%",background:"rgba(200,184,154,.15)",border:"1px solid #c8b89a44",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span style={{fontSize:13,color:"rgba(255,255,255,.8)"}}><strong style={{color:"#c8b89a"}}>Prezzi garantiti</strong> — Bloccati come condizione commerciale. Offerte limitate.</span>
          </div>
          <span style={{fontSize:11,color:"rgba(255,255,255,.4)",fontWeight:600,letterSpacing:".04em"}}>{filtered.length} promo disponibili</span>
        </div>
      </div>
      <div style={{background:"white",borderBottom:"1.5px solid #ece7e0",padding:"14px 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",gap:10,flexWrap:"wrap"}}>
          {cats.map(cat=>(
            <button key={cat} onClick={()=>setFilter(cat)} style={{padding:"8px 18px",borderRadius:999,fontSize:13,fontWeight:700,cursor:"pointer",border:"1.5px solid",borderColor:filter===cat?"#1a1210":"#ddd7d0",background:filter===cat?"#1a1210":"white",color:filter===cat?"white":"#3d302e",fontFamily:"inherit",transition:"all .15s"}}>
              {cat==="all"?"Tutte le promo":cat}
            </button>
          ))}
        </div>
      </div>
      <Sec bg="#faf8f5">
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:22}}>
          {filtered.slice(0,visibleCount).map(p=><PromoCard key={p.id} promo={p} onOpen={()=>openProduct(normalizePromo(p))}/>)}
        </div>
        <div ref={sentinelRef} style={{height:1,marginTop:16}}/>
        {visibleCount < filtered.length && (
          <div style={{textAlign:"center",padding:"12px 0",color:"#9a8e88",fontSize:12}}>Caricamento…</div>
        )}
      </Sec>
    </div>
  );
}

// ─── FAQ ───────────────────────────────────
const FAQS=[
  {q:"Quanto costa arredare casa?",a:"Il costo dipende molto dalla metratura, dai materiali e dalla fascia di brand scelti. Un trilocale arredato in fascia media (cucina, soggiorno, camera, bagno) parte da circa 15.000–25.000 €. Un bilocale può attestarsi tra 8.000 e 15.000 €. Ricorda che montaggio, progettazione e consegna sono spesso inclusi nel prezzo finale."},
  {q:"Quanto costa una cucina?",a:"Una cucina lineare entry-level parte da 3.000–5.000 €, una cucina media con elettrodomestici inclusi oscilla tra 7.000 e 12.000 €, mentre soluzioni con isola e brand premium possono superare i 20.000 €. Il prezzo dipende dalla metratura, dai materiali del top (laminato, quarzo, marmo) e dagli elettrodomestici integrati."},
  {q:"Quanto dura una cucina di qualità?",a:"Una cucina di buona fattura dura mediamente 20–30 anni. Le componenti più soggette a usura sono le cerniere, i cassetti e il top. Questi elementi sono facilmente sostituibili. I brand che trattiamo offrono ricambi garantiti per almeno 10 anni dopo l'acquisto."},
  {q:"Meglio il laminato o il laccato per le ante?",a:"Dipende dall'uso. Il laminato è più resistente ai graffi, all'umidità e al sole — ideale per cucine molto utilizzate. Il laccato ha una finitura più elegante ma è più delicato. Per la zona giorno il laccato è spesso preferito per l'estetica; in cucina molti scelgono il laminato per praticità."},
  {q:"Cosa conviene acquistare in pronta consegna?",a:"La pronta consegna è perfetta per divani, tavoli, sedie e complementi. Le cucine su misura difficilmente si trovano in stock. Le nostre promozioni bloccate comprendono pezzi expo e fine serie: spesso la qualità è identica al nuovo, con sconti fino al 55%."},
  {q:"Quali materiali scegliere per il top cucina?",a:"Il laminato è economico e pratico. Il quarzo (es. Silestone) è la scelta più diffusa in fascia media: non si macchia e dura decenni. Il marmo è elegante ma richiede manutenzione. Per chi usa molto la cucina, il quarzo è il miglior compromesso."},
  {q:"Quanto tempo ci vuole per avere la cucina montata?",a:"Dal sopralluogo alla consegna passano mediamente 8–12 settimane per una cucina su misura. Tempi più brevi (4–6 settimane) per soluzioni lineari standard. Il montaggio richiede 1–2 giorni lavorativi."},
  {q:"È possibile finanziare l'arredamento?",a:"Sì. Offriamo finanziamento a tasso agevolato fino a 60 rate mensili, con approvazione in 10 minuti in negozio o in videocall."},
  {q:"Come funziona il sopralluogo?",a:"Il sopralluogo è gratuito e senza impegno. Il tecnico viene a casa tua, rileva le misure con laser, verifica impianti. Entro 5 giorni ricevi il progetto 3D."},
  {q:"Posso fare una consulenza senza venire in negozio?",a:"Sì. Offriamo consulenze video gratuite via Zoom o Meet. Bastano 30 minuti: mostri gli spazi dalla fotocamera e il consulente propone le prime soluzioni."}
];

function FAQPage() {
  const { isMobile } = useBreakpoint();
  const [open,setOpen]=useState(null);
  return (
    <div>
      <div style={{background:"#1a1210",padding:isMobile?"52px 20px 48px":"72px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{...TAG,color:"#c8b89a",marginBottom:14}}>Risposte vere</div>
          <h1 style={{fontSize:isMobile?30:50,fontWeight:700,color:"white",margin:"0 0 16px",fontFamily:"Georgia,serif",maxWidth:620}}>L&apos;arredatore risponde</h1>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:isMobile?14:16,lineHeight:1.75,maxWidth:540,margin:0}}>Le domande che ci fanno più spesso. Risposte dirette da chi arredare case lo fa ogni giorno.</p>
        </div>
      </div>
      <Sec bg="white">
        <div style={{maxWidth:820,margin:"0 auto"}}>
          {FAQS.map((f,i)=>(
            <div key={i} style={{borderBottom:"1.5px solid #ece7e0"}}>
              <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",textAlign:"left",background:"none",border:"none",padding:"22px 0",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,fontFamily:"inherit"}}>
                <span style={{fontSize:isMobile?15:17,fontWeight:700,color:"#1a1210",lineHeight:1.4}}>{f.q}</span>
                <span style={{fontSize:22,color:"#9a8e88",flexShrink:0,transition:"transform .2s",transform:open===i?"rotate(45deg)":"none",fontWeight:300}}>+</span>
              </button>
              {open===i&&(
                <div style={{paddingBottom:24}}>
                  <p style={{fontSize:isMobile?14:15,color:"#4a3e3a",lineHeight:1.85,margin:0,borderLeft:"3px solid #c8b89a",paddingLeft:18}}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{maxWidth:820,margin:"48px auto 0",background:"#faf8f5",border:"1.5px solid #ece7e0",borderRadius:16,padding:isMobile?"24px 20px":"32px 36px",textAlign:"center"}}>
          <div style={{display:"flex",justifyContent:"center",marginBottom:12}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3 style={{fontSize:isMobile?20:24,fontWeight:700,margin:"0 0 10px",fontFamily:"Georgia,serif",color:"#1a1210"}}>Non hai trovato risposta?</h3>
          <p style={{color:"#6b5f5b",fontSize:14,lineHeight:1.75,marginBottom:22}}>Parla direttamente con uno dei nostri esperti. Consulenza gratuita, risposta in 24 ore.</p>
          <button style={{...mkBtn("dark"),padding:"13px 28px",fontSize:15}}>Prenota consulenza gratuita →</button>
        </div>
        <div style={{maxWidth:820,margin:"0 auto",marginTop:48}}>
          <AIChat context="home"/>
        </div>
      </Sec>
    </div>
  );
}

// ─── SERVIZI ───────────────────────────────
function ServiziPage() {
  const { isMobile, isTablet } = useBreakpoint();
  const services=[
    {key:"rilievo",ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,title:"Servizio di rilievo misure",img:IMGS.srv_rilievo,sub:"Il punto di partenza di ogni buon progetto",desc:"Prima di qualsiasi ordine, il nostro tecnico effettua un sopralluogo gratuito direttamente a casa tua. Prendiamo le misure con strumenti laser di precisione, verifichiamo posizioni di attacchi idraulici, impianti elettrici e cassonetti.",bullets:["Sopralluogo gratuito entro 48 ore","Rilievo laser millimetrico","Verifica impiantistica inclusa","Report fotografico consegnato"]},
    {key:"prog",ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,title:"Progetti su misura",img:IMGS.srv_prog,sub:"Vedi la tua casa prima ancora di ordinarla",desc:"Il nostro team elabora un render fotorealistico del tuo ambiente con materiali, colori e finiture esatte. Potrai approvare il risultato finale prima di firmare qualsiasi contratto.",bullets:["Render 3D fotorealistico incluso","Planimetria e alzati tecnici","Consulenza su materiali e finiture","Revisioni illimitate fino all'approvazione"]},
    {key:"consegna",ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,title:"Consegna puntuale",img:IMGS.srv_consegna,sub:"Gestione completa dalla fabbrica a casa tua",desc:"Coordiniamo la produzione direttamente con i fornitori e monitoriamo ogni fase. Riceverai aggiornamenti costanti. Il giorno della consegna il nostro team trasporta i mobili al piano con la massima cura.",bullets:["Tracciabilità ordine in tempo reale","Consegna al piano inclusa","Protezione pavimenti e scale","Smaltimento imballi a carico nostro"]},
    {key:"montaggio",ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,title:"Montaggio professionale",img:IMGS.srv_montaggio,sub:"Installazione curata nei minimi dettagli",desc:"Il montaggio è eseguito da tecnici specializzati. Al termine effettuiamo un collaudo completo: ogni anta, cassetto e cerniera viene regolata. Lasciamo il cantiere pulito.",bullets:["Tecnici certificati dal produttore","Collaudo finale con il cliente","Regolazione e rifinitura incluse","Pulizia cantiere garantita"]},
    {key:"finanz",ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,title:"Finanziamento agevolato",img:IMGS.srv_finanz,sub:"Arreda subito, paghi con calma",desc:"Grazie ai nostri partner finanziari puoi arredare con rate mensili comode, senza interessi fino a 60 mesi. Il finanziamento si attiva in negozio o in videocall in pochi minuti.",bullets:["Tasso 0% fino a 60 rate","Approvazione in 10 minuti","Nessun anticipo obbligatorio","Gestione pratiche a nostro carico"]}
  ];
  return (
    <div>
      <div style={{background:"#1a1210",padding:isMobile?"52px 20px 48px":"72px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{...TAG,color:"#c8b89a",marginBottom:14}}>Il nostro metodo</div>
          <h1 style={{fontSize:isMobile?30:50,fontWeight:700,color:"white",margin:"0 0 16px",fontFamily:"Georgia,serif",maxWidth:640}}>Un processo completo,<br/>nessuna sorpresa.</h1>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:isMobile?14:16,lineHeight:1.75,maxWidth:540,margin:0}}>Dal sopralluogo al montaggio finale, ogni fase con personale specializzato.</p>
        </div>
      </div>
      <div style={{background:"white"}}>
        {services.map((s,i)=>(
          <div key={s.key} style={{borderBottom:"1.5px solid #ece7e0"}}>
            <div style={{maxWidth:1200,margin:"0 auto",padding:isMobile?"40px 20px":`64px ${isTablet?32:64}px`}}>
              <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?32:56,alignItems:"center",direction:(!isMobile&&i%2!==0)?"rtl":"ltr"}}>
                <div style={{direction:"ltr"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                    <div style={{width:44,height:44,borderRadius:10,background:"#f0ece6",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      {s.ico}
                    </div>
                    <div>
                      <div style={{...TAG,marginBottom:4}}>0{i+1}</div>
                      <h2 style={{fontSize:isMobile?22:30,fontWeight:700,margin:0,fontFamily:"Georgia,serif",color:"#1a1210"}}>{s.title}</h2>
                    </div>
                  </div>
                  <p style={{fontSize:14,color:"#8a7e78",fontWeight:600,marginBottom:16}}>{s.sub}</p>
                  <p style={{fontSize:isMobile?14:15,color:"#4a3e3a",lineHeight:1.8,marginBottom:22}}>{s.desc}</p>
                  <div style={{display:"grid",gap:10}}>
                    {s.bullets.map((b,j)=>(
                      <div key={j} style={{display:"flex",alignItems:"flex-start",gap:12}}>
                        <span style={{width:20,height:20,borderRadius:"50%",background:"#1a1210",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span style={{fontSize:14,color:"#3d302e",lineHeight:1.6}}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {!isMobile&&<div style={{borderRadius:16,overflow:"hidden",height:320}}><img src={s.img} alt={s.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{background:"#faf8f5",padding:isMobile?"48px 20px":"72px 64px"}}>
        <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
          <div style={{display:"flex",justifyContent:"center",marginBottom:16}}>
            <div style={{width:60,height:60,borderRadius:"50%",background:"#f0ece6",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
          </div>
          <h2 style={{fontSize:isMobile?26:34,fontWeight:700,margin:"0 0 14px",fontFamily:"Georgia,serif",color:"#1a1210"}}>Pronto a iniziare?</h2>
          <p style={{color:"#6b5f5b",lineHeight:1.75,fontSize:15,marginBottom:28}}>Il primo passo è una consulenza gratuita di 30 minuti. Nessun impegno.</p>
          <button style={{...mkBtn("dark"),padding:"14px 30px",fontSize:15}}>Prenota consulenza gratuita →</button>
        </div>
      </div>
    </div>
  );
}

// ─── VIDEO CALL ────────────────────────────
// Lista punti vendita ufficiali Asta del Mobile
const PUNTI_VENDITA = [
  {label:"Torino – Via Casteldelfino",    value:"torino1",          city:"Torino",             via:"Via Casteldelfino 51, 10139 Torino (TO)",              orari:"Lun–Sab 9:30–19:30"},
  {label:"Torino Due – Via Casana",        value:"torino2",          city:"Torino Due",         via:"Via Casana 18, 10136 Torino (TO)",                     orari:"Lun–Sab 9:30–19:30"},
  {label:"Chivasso (TO)",                  value:"chivasso",         city:"Chivasso",           via:"Corso Galileo Ferraris 12, 10034 Chivasso (TO)",       orari:"Lun–Sab 9:00–19:00"},
  {label:"Cavallermaggiore (CN)",          value:"cavallermaggiore", city:"Cavallermaggiore",   via:"Via Saluzzo 40, 12030 Cavallermaggiore (CN)",          orari:"Lun–Sab 9:00–19:00"},
  {label:"Cuneo",                          value:"cuneo",            city:"Cuneo",              via:"Via Roma 110, 12100 Cuneo (CN)",                       orari:"Lun–Sab 9:30–19:30"},
  {label:"Castell'Alfero (AT)",            value:"castellalfero",    city:"Castell'Alfero",     via:"Strada Provinciale 457 n.8, 14033 Castell'Alfero (AT)",orari:"Mar–Sab 9:30–19:00"},
  {label:"Serravalle Scrivia (AL)",        value:"serravalle",       city:"Serravalle Scrivia", via:"Via Novi 62, 15069 Serravalle Scrivia (AL)",           orari:"Mar–Sab 9:30–19:00"},
  {label:"Genova",                         value:"genova",           city:"Genova",             via:"Via Pra' 100/R, 16157 Genova (GE)",                    orari:"Lun–Sab 9:30–19:30"},
  {label:"Finale Ligure (SV)",             value:"finaleligure",     city:"Finale Ligure",      via:"Via Calvisio 27, 17024 Finale Ligure (SV)",            orari:"Mar–Sab 9:30–19:00"},
  {label:"Arma di Taggia (IM)",            value:"armaditaggia",     city:"Arma di Taggia",     via:"Via Aurelia 41, 18011 Arma di Taggia (IM)",            orari:"Mar–Sab 9:30–19:00"},
];

function VideoCallPage() {
  const { isMobile } = useBreakpoint();
  const [sent,  setSent]  = useState(false);
  const [sede,  setSede]  = useState("");
  const [nome,  setNome]  = useState("");
  const [email, setEmail] = useState("");
  const [tel,   setTel]   = useState("");
  const [data,  setData]  = useState("");
  const [msg,   setMsg]   = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [guestToken] = useState("GUEST_APP_"+Math.random().toString(36).slice(2,7).toUpperCase());
  const [linkCopied, setLinkCopied] = useState(false);
  const piemonte = PUNTI_VENDITA.filter(p=>["torino1","torino2","chivasso","cavallermaggiore","cuneo","castellalfero","serravalle"].includes(p.value));
  const liguria  = PUNTI_VENDITA.filter(p=>["genova","finaleligure","armaditaggia"].includes(p.value));
  const selected = PUNTI_VENDITA.find(p=>p.value===sede);
  const fakeLink = `https://astadelmobile.it/chat?token=${guestToken}`;
  const validateEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const handleSubmit = () => {
    if(!sede||!nome.trim()) return;
    if(!validateEmail(email)) { setEmailErr("Inserisci un'email valida per ricevere il link alla conversazione."); return; }
    setEmailErr("");
    setSent(true);
  };
  const copiaLink = () => {
    navigator.clipboard?.writeText(fakeLink).catch(()=>{});
    setLinkCopied(true);
    setTimeout(()=>setLinkCopied(false), 2500);
  };

  return (
    <div>
      {/* ── HERO ── */}
      <div style={{background:"#1a1210",padding:isMobile?"52px 20px 48px":"72px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          
          <h1 style={{fontSize:isMobile?30:50,fontWeight:700,color:"white",margin:"0 0 16px",fontFamily:"Georgia,serif",maxWidth:600}}>Richiedi il tuo appuntamento senza impegno</h1>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:isMobile?14:16,lineHeight:1.8,maxWidth:520,margin:0}}>Scegli il punto vendita più vicino. Il nostro arredatore ti segue dalla prima idea al prodotto finito.</p>
        </div>
      </div>

      <Sec bg="white">
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"5fr 4fr",gap:isMobile?32:48,alignItems:"start"}}>

          {/* ── COLONNA SX: punti vendita + form ── */}
          <div>
            {/* Sezione regioni */}
            {[
              { nome:"Piemonte", sedi:piemonte },
              { nome:"Liguria",  sedi:liguria  },
            ].map(({nome,sedi})=>(
              <div key={nome} style={{marginBottom:32}}>
                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#9a8e88"}}>{nome}</div>
                  <div style={{flex:1,height:"1px",background:"#ece7e0"}}/>
                </div>
                <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:10}}>
                  {sedi.map(p=>{
                    const isSelected = sede===p.value;
                    return (
                      <button key={p.value} onClick={()=>setSede(p.value)} style={{
                        textAlign:"left", padding:"16px 18px", borderRadius:12, cursor:"pointer",
                        fontFamily:"inherit", border:`1.5px solid ${isSelected?"#1a1210":"#ece7e0"}`,
                        background:isSelected?"#1a1210":"white", transition:"all .18s",
                        boxShadow:isSelected?"0 4px 20px rgba(26,18,16,.18)":"0 1px 4px rgba(0,0,0,.04)",
                      }}
                        onMouseEnter={e=>{ if(!isSelected){ e.currentTarget.style.borderColor="#1a1210"; e.currentTarget.style.background="#faf8f5"; e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,.08)"; }}}
                        onMouseLeave={e=>{ if(!isSelected){ e.currentTarget.style.borderColor="#ece7e0"; e.currentTarget.style.background="white"; e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,.04)"; }}}>
                        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8,marginBottom:6}}>
                          <div style={{fontWeight:700,fontSize:14,color:isSelected?"white":"#1a1210",lineHeight:1.2}}>{p.city}</div>
                          {isSelected && (
                            <div style={{width:18,height:18,borderRadius:"50%",background:"#c8b89a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                          )}
                        </div>
                        <div style={{fontSize:11,color:isSelected?"rgba(200,184,154,.85)":"#1a1210",marginBottom:8,lineHeight:1.4}}>{p.via}</div>
                        <div style={{display:"flex",alignItems:"center",gap:5}}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={isSelected?"rgba(200,184,154,.6)":"#c8b89a"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          <span style={{fontSize:10,color:isSelected?"rgba(200,184,154,.8)":"#1a1210",letterSpacing:".01em"}}>{p.orari}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* ── COLONNA DX: form prenotazione ── */}
          <div style={{position:"sticky",top:24}}>
            <div style={{...cardS,padding:isMobile?"22px 18px":"28px 26px"}}>
              {sent ? (
                <div style={{padding:"8px 0"}}>
                  <div style={{textAlign:"center",marginBottom:20}}>
                    <div style={{width:52,height:52,borderRadius:"50%",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 style={{fontSize:20,fontWeight:700,color:"#1a1210",margin:"0 0 8px",fontFamily:"Georgia,serif"}}>Richiesta inviata!</h3>
                    <p style={{fontSize:13,color:"#6b5f5b",lineHeight:1.8,maxWidth:280,margin:"0 auto"}}>Un arredatore ti risponderà entro 24 ore per confermare la consulenza presso <strong>{selected?.city||"la sede scelta"}</strong>.</p>
                  </div>
                  {/* ── BOX TOKEN / LINK TEMPORANEO ── */}
                  <div style={{background:"#e8f5e9",border:"1.5px solid #a5d6a7",borderRadius:12,padding:"16px 18px",marginBottom:14}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <span style={{fontSize:12,fontWeight:700,color:"#1e7e3e"}}>Link inviato a {email}</span>
                    </div>
                    <p style={{fontSize:11,color:"#2e7d32",margin:"0 0 12px",lineHeight:1.6}}>
                      Abbiamo inviato un link alla tua email. Cliccalo per riaprire la conversazione con il tuo arredatore in qualsiasi momento, anche da un altro dispositivo.
                    </p>
                    {/* Codice token visibile */}
                    <div style={{background:"#f4f1ee",border:"1.5px solid #c8b89a",borderRadius:8,padding:"10px 14px",marginBottom:10}}>
                      <div style={{fontSize:10,fontWeight:700,color:"#9a8e88",letterSpacing:".08em",textTransform:"uppercase",marginBottom:4}}>Il tuo codice ospite</div>
                      <div style={{fontFamily:"monospace",fontSize:16,fontWeight:700,color:"#1a1210",letterSpacing:".08em"}}>{guestToken}</div>
                      <div style={{fontSize:10,color:"#9a8e88",marginTop:3}}>Conservalo per rientrare nella chat anche senza il link email.</div>
                    </div>
                    <div style={{background:"white",border:"1px solid #c8e6c9",borderRadius:8,padding:"8px 12px",
                      display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
                      <code style={{fontSize:10,color:"#6b5f5b",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1}}>
                        {fakeLink}
                      </code>
                      <button onClick={copiaLink}
                        style={{background:"#1a1210",border:"none",borderRadius:6,padding:"5px 10px",cursor:"pointer",
                          color:"white",fontSize:10,fontWeight:700,fontFamily:"inherit",flexShrink:0}}>
                        {linkCopied ? "Copiato ✓" : "Copia link"}
                      </button>
                    </div>
                  </div>
                  <div style={{background:"#f4f1ee",border:"1.5px solid #e8e0d4",borderRadius:12,padding:"14px 18px"}}>
                    <div style={{fontSize:12,fontWeight:700,color:"#1a1210",marginBottom:4}}>Vuoi non perdere mai la cronologia?</div>
                    <p style={{fontSize:11,color:"#6b5f5b",margin:"0 0 10px",lineHeight:1.6}}>
                      Crea un account gratuito — importeremo automaticamente questa conversazione nel tuo profilo.
                    </p>
                    <button onClick={()=>setSent(false)}
                      style={{width:"100%",padding:"9px",borderRadius:8,border:"1.5px solid #1a1210",
                        background:"white",color:"#1a1210",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                      Registrati ora →
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 style={{fontSize:18,fontWeight:700,margin:"0 0 4px",color:"#1a1210",fontFamily:"Georgia,serif"}}>Prenota la consulenza</h3>
                  <p style={{fontSize:12,color:"#9a8e88",margin:"0 0 20px",lineHeight:1.6}}>Gratuita, senza impegno. Risposta entro 24 ore.</p>
                  {selected && (
                    <div style={{background:"#f4f1ee",border:"1.5px solid #e8e0d4",borderRadius:8,padding:"11px 14px",marginBottom:18,display:"flex",gap:10,alignItems:"center"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                      <div>
                        <div style={{fontSize:12,fontWeight:700,color:"#1a1210"}}>{selected.city}</div>
                        <div style={{fontSize:11,color:"#9a8e88"}}>{selected.via}</div>
                      </div>
                    </div>
                  )}
                  <div style={{display:"grid",gap:10}}>
                    <input placeholder="Nome e cognome *" value={nome} onChange={e=>setNome(e.target.value)} style={inp}/>
                    <div>
                      <input placeholder="Email * (riceverai il link alla conversazione)" type="email" value={email} onChange={e=>{setEmail(e.target.value);setEmailErr("");}} style={{...inp,borderColor:emailErr?"#e74c3c":undefined}}/>
                      {emailErr && <div style={{fontSize:11,color:"#e74c3c",marginTop:4,marginLeft:2}}>{emailErr}</div>}
                    </div>
                    <input placeholder="Telefono *" value={tel} onChange={e=>setTel(e.target.value)} style={inp}/>
                    <div>
                      <label style={{fontSize:10,fontWeight:700,color:"#9a8e88",display:"block",marginBottom:5,letterSpacing:".08em",textTransform:"uppercase"}}>Punto vendita *</label>
                      <select value={sede} onChange={e=>setSede(e.target.value)}
                        style={{...inp,color:sede?"#1a1210":"#a09080",appearance:"none",
                          backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                          backgroundRepeat:"no-repeat",backgroundPosition:"right 14px center",paddingRight:36}}>
                        <option value="" disabled>Seleziona la sede…</option>
                        <optgroup label="Piemonte">
                          {piemonte.map(p=><option key={p.value} value={p.value}>{p.city} — {p.via}</option>)}
                        </optgroup>
                        <optgroup label="Liguria">
                          {liguria.map(p=><option key={p.value} value={p.value}>{p.city} — {p.via}</option>)}
                        </optgroup>
                      </select>
                    </div>
                    <input type="date" value={data} onChange={e=>setData(e.target.value)} style={inp}/>
                    <textarea rows={3} placeholder="Cosa vuoi arredare? Misure? Budget?" value={msg} onChange={e=>setMsg(e.target.value)} style={{...inp,resize:"vertical"}}/>
                    <button onClick={handleSubmit}
                      style={{...mkBtn("dark",true),padding:"13px",fontSize:14,opacity:(sede&&nome.trim())?1:.45,cursor:(sede&&nome.trim())?"pointer":"not-allowed"}}>
                      Richiedi appuntamento →
                    </button>
                  </div>
                  <div style={{marginTop:16,paddingTop:14,borderTop:"1px solid #ece7e0",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                    {[
                      {ico:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,t:"Gratuita"},
                      {ico:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,t:"Entro 24h"},
                      {ico:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,t:"Senza impegno"},
                    ].map((x,i)=>(
                      <div key={i} style={{textAlign:"center",padding:"8px 4px"}}>
                        <div style={{display:"flex",justifyContent:"center",marginBottom:4}}>{x.ico}</div>
                        <div style={{fontSize:10,fontWeight:700,color:"#6b5f5b",letterSpacing:".02em"}}>{x.t}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </Sec>
    </div>
  );
}

// ─── CONTRACT GALLERY ──────────────────────
const CONTRACT_GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    label: "Alberghi", cat: "Hotel & Hospitality",
    desc: "Suite di lusso con arredi su misura"
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    label: "Ristoranti", cat: "Food & Beverage",
    desc: "Atmosfere raffinate per ogni tipo di locale"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    label: "Uffici", cat: "Office & Contract",
    desc: "Spazi di lavoro moderni e funzionali"
  },
  {
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
    label: "Negozi", cat: "Retail & Showroom",
    desc: "Concept store e retail design Made in Italy"
  },
  {
    url: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=900&q=80",
    label: "Bar & Lounge", cat: "Bar & Caffetterie",
    desc: "Dal caffè all'italiana all'american bar"
  },
  {
    url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=80",
    label: "Sale Convegni", cat: "Meeting & Events",
    desc: "Ambienti pensati per condividere e collaborare"
  },
  {
    url: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=900&q=80",
    label: "Mense", cat: "Ristorazione Collettiva",
    desc: "Design e praticità per gli spazi aziendali"
  },
  {
    url: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=900&q=80",
    label: "Pub & Birrerie", cat: "Entertainment",
    desc: "Locali di tendenza progettati su misura"
  },
];

// ─── ICO OBJECT (used in ContractPage) ────
const Ico = {
  map:      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>,
  settings: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  truck:    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  shield:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  wrench:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  award:    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  check:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
};

function ContractGallery() {
  const { isMobile, isTablet } = useBreakpoint();
  const [active, setActive] = useState(null); // lightbox
  const [filter, setFilter] = useState("all");
  const [hov, setHov] = useState(null);

  const cats = ["all", ...CONTRACT_GALLERY.map(g=>g.label)];
  const shown = filter==="all" ? CONTRACT_GALLERY : CONTRACT_GALLERY.filter(g=>g.label===filter);

  return (
    <div style={{background:"white",padding:isMobile?"48px 16px":"72px 64px",
      borderTop:"1.5px solid #ece7e0",borderBottom:"1.5px solid #ece7e0"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>

        {/* Intestazione */}
        <div style={{textAlign:"center",marginBottom:36}}>
          <div style={{...TAG,marginBottom:10,color:"#9a8e88"}}>Portfolio</div>
          <h2 style={{fontSize:isMobile?26:36,fontWeight:700,margin:"0 0 12px",
            fontFamily:"Georgia,serif",color:"#1a1210",letterSpacing:"-.02em"}}>
            I nostri progetti Contract
          </h2>
          <p style={{color:"#6b5f5b",maxWidth:520,margin:"0 auto",lineHeight:1.75,fontSize:14}}>
            Una selezione di ambienti commerciali arredati con cura, qualità e design Made in Italy.
          </p>
        </div>

        {/* Filtri */}
        <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:32}}>
          {cats.map(c=>(
            <button key={c} onClick={()=>setFilter(c)}
              style={{
                padding:"7px 16px",borderRadius:999,border:"1.5px solid",cursor:"pointer",
                fontSize:11,fontWeight:700,letterSpacing:".04em",fontFamily:"inherit",
                transition:"all .15s",
                background:filter===c?"#1a1210":"white",
                color:filter===c?"white":"#6b5f5b",
                borderColor:filter===c?"#1a1210":"#ddd7d0"
              }}>
              {c==="all"?"Tutti i settori":c}
            </button>
          ))}
        </div>

        {/* Griglia foto */}
        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",
          gap:14,
          marginBottom: 8
        }}>
          {shown.map((g,i)=>(
            <div key={g.url+filter}
              onMouseEnter={()=>setHov(i)}
              onMouseLeave={()=>setHov(null)}
              onClick={()=>setActive(g)}
              style={{
                borderRadius:14,overflow:"hidden",cursor:"pointer",position:"relative",
                boxShadow:hov===i?"0 14px 40px #0003":"0 2px 8px #0001",
                transform:hov===i?"scale(1.02)":"scale(1)",
                transition:"all .25s",aspectRatio:"4/3",background:"#1a1210"
              }}>
              <img
                src={g.url}
                alt={g.label}
                loading="lazy"
                style={{width:"100%",height:"100%",objectFit:"cover",display:"block",
                  transform:hov===i?"scale(1.06)":"scale(1)",transition:"transform .4s"}}
                onError={e=>{e.target.style.display='none';}}
              />
              {/* Overlay */}
              <div style={{
                position:"absolute",inset:0,
                background:`linear-gradient(to top, rgba(26,18,16,.85) 0%, rgba(26,18,16,.1) 60%, transparent 100%)`,
                opacity:hov===i?1:.7,transition:"opacity .25s"
              }}/>
              {/* Testo */}
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px 18px"}}>
                <div style={{fontSize:9,fontWeight:700,letterSpacing:".1em",
                  textTransform:"uppercase",color:"#c8b89a",marginBottom:4}}>{g.cat}</div>
                <div style={{fontWeight:700,fontSize:isMobile?13:14,color:"white",lineHeight:1.3,
                  marginBottom:hov===i?6:0,transition:"margin .2s"}}>{g.label}</div>
                {hov===i && (
                  <div style={{fontSize:11,color:"rgba(255,255,255,.75)",lineHeight:1.5}}>
                    {g.desc}
                  </div>
                )}
              </div>
              {/* Icona zoom */}
              <div style={{
                position:"absolute",top:12,right:12,
                width:30,height:30,borderRadius:"50%",
                background:"rgba(255,255,255,.2)",backdropFilter:"blur(4px)",
                display:"flex",alignItems:"center",justifyContent:"center",
                opacity:hov===i?1:0,transition:"opacity .2s"
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Credit Unsplash */}
        <div style={{textAlign:"center",marginTop:16}}>
          <span style={{fontSize:10,color:"#b0a898"}}>
            Immagini illustrative © Unsplash — Unsplash License
          </span>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {active && (
        <div
          onClick={()=>setActive(null)}
          style={{position:"fixed",inset:0,zIndex:500,
            background:"rgba(0,0,0,.88)",display:"flex",
            alignItems:"center",justifyContent:"center",padding:20}}>
          <div onClick={e=>e.stopPropagation()}
            style={{maxWidth:860,width:"100%",borderRadius:18,overflow:"hidden",
              boxShadow:"0 32px 80px #000a",position:"relative"}}>
            <img src={active.url.replace("w=900","w=1200")} alt={active.label}
              style={{width:"100%",display:"block",maxHeight:"80vh",objectFit:"cover"}}/>
            <div style={{background:"#1a1210",padding:"20px 24px",
              display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",
                  textTransform:"uppercase",color:"#c8b89a",marginBottom:4}}>{active.cat}</div>
                <div style={{fontWeight:700,fontSize:18,color:"white",fontFamily:"Georgia,serif"}}>{active.label}</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,.6)",marginTop:4}}>{active.desc}</div>
              </div>
              <button onClick={()=>setActive(null)}
                style={{background:"rgba(255,255,255,.1)",border:"none",cursor:"pointer",
                  color:"white",width:36,height:36,borderRadius:"50%",fontSize:18,
                  display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CONTRACT ──────────────────────────────
function ContractPage({ setPage }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [formData, setFormData] = useState({nome:"",cognome:"",email:"",telefono:"",sede:"",richiesta:"",privacy:false});
  const [sent, setSent] = useState(false);
  const [formErr, setFormErr] = useState("");
  const setF = k => e => setFormData(f=>({...f,[k]:e.target.type==="checkbox"?e.target.checked:e.target.value}));

  const submitForm = () => {
    if(!formData.nome||!formData.email||!formData.telefono||!formData.richiesta) return setFormErr("Compila tutti i campi obbligatori.");
    if(!formData.privacy) return setFormErr("Accetta la privacy policy per continuare.");
    setFormErr("");
    setSent(true);
  };

  const settori = [
    { key:"negozi",      label:"Negozi",        desc:"Arredamenti chic creati su misura per il business", body:"Soluzioni per l'arredamento dei negozi, con materiali di eccellente qualità Made in Italy e un tocco unico che valorizza ogni spazio commerciale.", img:"https://neoneuropa.net/wp-content/uploads/2020/12/P-abbigliament-calzature-dentro-arredo.jpg", fallback:"" },
    { key:"ristoranti",  label:"Ristoranti",     desc:"L'atmosfera giusta per ogni tipo di stile",        body:"Non solo ricercatezza del menù, ma anche nello stile: un ristorante esprime sempre la propria personalità attraverso l'ambiente.", img:"https://www.ristorazioneitalianamagazine.it/CMS/wp-content/uploads/2024/09/Arredamento-ristoranti-.jpg", fallback:"" },
    { key:"uffici",      label:"Uffici",          desc:"Postazioni di lavoro organizzate e funzionali",   body:"La progettazione degli uffici è in funzione alla praticità e all'organizzazione degli spazi per rendere la vita lavorativa semplice e funzionale.", img:"https://www.imetallici-arredonegozi.com/wp-content/uploads/2023/10/arredi-uffici.jpg", fallback:"" },
    { key:"alberghi",    label:"Alberghi",        desc:"Soluzioni uniche e originali per strutture ricettive", body:"Proposte di soluzioni per tutte le aree alberghiere: sale ristorante, spazi comuni, aule conferenza, camere e spazi outdoor.", img:"https://www.albergottocento.it/data/jpg/albergo-ottocento-roma-doppia-deluxe-04.jpg", fallback:"" },
    { key:"bar",         label:"Bar",             desc:"Realizzazioni su misura con prodotti di altissima qualità", body:"Soluzioni d'arredo per bar che vanno dai caffè all'italiana agli american bar: arredamenti per ogni tipo di luogo di ritrovo.", img:"https://www.frigomeccanica.com/wp-content/uploads/2017/02/Come-arredare-un-bar.jpg", fallback:"" },
    { key:"convegni",    label:"Sale convegni",   desc:"Progetti perfetti per usare al meglio gli spazi", body:"Condividere, comprendere, conoscersi: rivoluzionare il concetto della tradizionale sala convegni e restituire uno spazio vitale.", img:"https://www.imprendero.it/wp-content/uploads/2019/10/Rivadelsole_salelusso_img.jpg", fallback:"" },
    { key:"mense",       label:"Mense",           desc:"Colori, design e praticità per uno stile ricercato", body:"Una vasta gamma di soluzioni d'arredamento di design, alta qualità e attenzione ai dettagli per arredare ambienti aziendali e mense.", img:"https://arredhotel.it/wp-content/themes/yootheme/cache/fb/arredamento-professionale-mensa-aziendale-fbeef88a.jpeg", fallback:"" },
    { key:"pub",         label:"Pub & Birrerie",  desc:"Ideazione e realizzazione di locali di tendenza", body:"Per uno stile unico, fuori dagli schemi e sempre alla moda: progettazioni per birrerie e pub di nuova concezione, ideati su misura.", img:"https://www.camproject.it/wp-content/uploads/2014/08/IMG_1003.jpg", fallback:"" },
  ];

  const vantaggi = [
    { ico: Ico.map,      titolo:"Sopralluogo gratuito",    desc:"Rilievo misure e consulenza in loco su tutto il territorio nazionale ed estero" },
    { ico: Ico.settings, titolo:"Progettazione su misura", desc:"Design personalizzato per valorizzare ogni spazio e rispettare l'identità del brand" },
    { ico: Ico.truck,    titolo:"Consegna e installazione",desc:"Fornitura completa con trasporto, montaggio e posa in opera garantiti" },
    { ico: Ico.shield,   titolo:"Assistenza post vendita", desc:"Supporto continuo anche dopo la consegna per la massima tranquillità" },
    { ico: Ico.wrench,   titolo:"Arredi a misura",         desc:"Realizzazione e personalizzazione di ogni elemento con materiali Made in Italy" },
    { ico: Ico.award,    titolo:"Formula chiavi in mano",  desc:"Dal progetto alla consegna: gestiamo tutto noi per un risultato impeccabile" },
  ];

  const sedi = ["Arma di Taggia","Castell'Alfero","Cavallermaggiore","Chivasso","Cuneo","Finale Ligure","Genova","Serravalle","Torino","Torino Due"];

  const inp2 = {padding:"12px 14px",borderRadius:8,border:"1.5px solid rgba(255,255,255,.25)",
    fontSize:14,outline:"none",fontFamily:"inherit",boxSizing:"border-box",
    background:"rgba(255,255,255,.12)",color:"white",width:"100%"};

  return (
    <div style={{background:"#faf8f5",minHeight:"100vh"}}>

      {/* ── HERO ── */}
      <div style={{
        background:"linear-gradient(135deg, #1a1210 0%, #2d1f1a 50%, #3d2b20 100%)",
        padding:isMobile?"60px 20px 70px":"80px 64px 90px",
        position:"relative",overflow:"hidden"
      }}>
        {/* decorazione sfondo */}
        <div style={{position:"absolute",top:-60,right:-60,width:400,height:400,
          borderRadius:"50%",background:"rgba(200,184,154,.06)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:-40,left:100,width:260,height:260,
          borderRadius:"50%",background:"rgba(200,184,154,.04)",pointerEvents:"none"}}/>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",
          gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?32:60,alignItems:"center"}}>
          <div>
            <div style={{...TAG,color:"#c8b89a",marginBottom:14,letterSpacing:".12em"}}>Linea privilegiata per le aziende</div>
            <h1 style={{fontSize:isMobile?32:52,fontWeight:700,color:"white",
              fontFamily:"Georgia,serif",lineHeight:1.15,margin:"0 0 20px",letterSpacing:"-.02em"}}>
              Asta del Mobile<br/>
              <span style={{color:"#c8b89a"}}>Contract</span>
            </h1>
            <p style={{color:"rgba(255,255,255,.72)",fontSize:isMobile?14:16,lineHeight:1.8,margin:"0 0 32px",maxWidth:480}}>
              Come gruppo leader nell&apos;arredamento, presente in Piemonte e Liguria con <strong style={{color:"rgba(255,255,255,.9)"}}>10 punti vendita</strong>, offriamo una linea privilegiata che realizza soluzioni ad hoc per alberghi, hotel, ristoranti, negozi e uffici.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button
                onClick={()=>{document.getElementById("contract-form")?.scrollIntoView({behavior:"smooth"})}}
                style={{...mkBtn("gold"),padding:"13px 26px",fontSize:14}}>
                Richiedi un preventivo →
              </button>
              <button
                onClick={()=>{document.getElementById("contract-settori")?.scrollIntoView({behavior:"smooth"})}}
                style={{padding:"13px 26px",fontSize:14,borderRadius:8,cursor:"pointer",
                  fontWeight:700,background:"transparent",color:"white",
                  border:"1.5px solid rgba(255,255,255,.3)",fontFamily:"inherit"}}>
                Scopri i settori
              </button>
            </div>
          </div>
          {/* Features list */}
          <div style={{background:"rgba(255,255,255,.06)",borderRadius:18,padding:isMobile?"24px":"32px",
            border:"1px solid rgba(200,184,154,.2)",backdropFilter:"blur(8px)"}}>
            <div style={{...TAG,color:"#c8b89a",marginBottom:16}}>La nostra offerta include</div>
            {[
              "Consulenza in loco e rilievo misure",
              "Progettazione e render 3D",
              "Consegna e installazione sul territorio nazionale ed estero",
              "Realizzazione di arredi a misura",
              "Assistenza post vendita",
              "Formula chiavi in mano",
            ].map((v,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:12,
                padding:"10px 0",borderBottom:i<5?"1px solid rgba(255,255,255,.08)":"none"}}>
                <span style={{color:"#c8b89a",flexShrink:0}}>{Ico.check}</span>
                <span style={{color:"rgba(255,255,255,.85)",fontSize:14}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NUMERI ── */}
      <div style={{background:"white",padding:isMobile?"36px 20px":"48px 64px",
        borderBottom:"1.5px solid #ece7e0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",
          display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(4,1fr)",gap:20}}>
          {[
            {n:"10+",  l:"Punti vendita",       sub:"in Piemonte e Liguria"},
            {n:"30+",  l:"Anni di esperienza",  sub:"nel settore contract"},
            {n:"500+", l:"Progetti realizzati", sub:"su tutto il territorio"},
            {n:"100%", l:"Chiavi in mano",       sub:"dal progetto alla consegna"},
          ].map((s,i)=>(
            <div key={i} style={{textAlign:"center",padding:"20px 12px",borderRadius:14,
              background:"#faf8f5",border:"1.5px solid #ece7e0"}}>
              <div style={{fontSize:isMobile?30:40,fontWeight:800,color:"#1a1210",
                fontFamily:"Georgia,serif",lineHeight:1}}>{s.n}</div>
              <div style={{fontSize:13,fontWeight:700,color:"#3d302e",marginTop:6}}>{s.l}</div>
              <div style={{fontSize:11,color:"#9a8e88",marginTop:2}}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SETTORI ── */}
      <div id="contract-settori" style={{padding:isMobile?"48px 20px":"72px 64px",background:"#faf8f5"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <div style={{...TAG,marginBottom:10,color:"#9a8e88"}}>Settori di intervento</div>
            <h2 style={{fontSize:isMobile?26:36,fontWeight:700,margin:"0 0 12px",
              fontFamily:"Georgia,serif",color:"#1a1210",letterSpacing:"-.02em"}}>
              Arredata ogni tipo di spazio commerciale
            </h2>
            <p style={{color:"#6b5f5b",maxWidth:560,margin:"0 auto",lineHeight:1.75,fontSize:14}}>
              Dal ristorante al boutique hotel, dall&apos;ufficio direzionale al pub di tendenza: soluzioni su misura per ogni ambiente professionale.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",gap:20}}>
            {settori.map((s,i)=>(
              <SettoreCard key={s.key} s={s}/>
            ))}
          </div>
        </div>
      </div>

      {/* ── COME LAVORIAMO ── */}
      <div style={{background:"#1a1210",padding:isMobile?"48px 20px":"72px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <div style={{...TAG,color:"#c8b89a",marginBottom:10}}>Il nostro metodo</div>
            <h2 style={{fontSize:isMobile?26:36,fontWeight:700,margin:"0 0 12px",
              fontFamily:"Georgia,serif",color:"white",letterSpacing:"-.02em"}}>
              Come funziona il servizio Contract
            </h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:16}}>
            {vantaggi.map((v,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,.06)",borderRadius:14,padding:"24px",
                border:"1px solid rgba(200,184,154,.15)"}}>
                <div style={{color:"#c8b89a",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
                  {v.ico}
                  <span style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"#c8b89a"}}>
                    Step {i+1}
                  </span>
                </div>
                <div style={{fontWeight:700,fontSize:15,color:"white",marginBottom:8}}>{v.titolo}</div>
                <div style={{fontSize:13,color:"rgba(255,255,255,.6)",lineHeight:1.7}}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONVENZIONI ── */}
      <div style={{background:"white",padding:isMobile?"48px 20px":"64px 64px",
        borderBottom:"1.5px solid #ece7e0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",
          gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:48,alignItems:"center"}}>
          <div>
            <div style={{...TAG,marginBottom:10}}>Convenzioni aziendali</div>
            <h2 style={{fontSize:isMobile?24:32,fontWeight:700,margin:"0 0 16px",
              fontFamily:"Georgia,serif",color:"#1a1210"}}>
              Trattamenti riservati per enti e aziende
            </h2>
            <p style={{color:"#6b5f5b",lineHeight:1.8,fontSize:14,marginBottom:20}}>
              Stipuliamo da anni <strong>convenzioni mirate</strong> con enti pubblici e privati a servizio pubblico &mdash; Carabinieri, ospedali, agenzie immobiliari, case di riposo e altri &mdash; che prevedono trattamenti riservati in termini di sconti e servizi.
            </p>
            <p style={{color:"#9a8e88",lineHeight:1.8,fontSize:13,marginBottom:24}}>
              Le iniziative sono valide per tutti coloro che presenteranno documentazione di riferimento.
            </p>
            <button onClick={()=>{document.getElementById("contract-form")?.scrollIntoView({behavior:"smooth"})}}
              style={{...mkBtn("dark"),padding:"12px 24px",fontSize:13}}>
              Contattaci per una convenzione →
            </button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {["Carabinieri & Forze dell'ordine","Strutture ospedaliere","Agenzie immobiliari","Case di riposo","Enti pubblici","Cooperative sociali"].map((e,i)=>(
              <div key={i} style={{background:"#faf8f5",borderRadius:12,padding:"16px",
                border:"1.5px solid #ece7e0",display:"flex",alignItems:"center",gap:10}}>
                <span style={{color:"#c8b89a",flexShrink:0}}>{Ico.check}</span>
                <span style={{fontSize:12,fontWeight:600,color:"#3d302e",lineHeight:1.4}}>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM CONTATTO ── */}
      <div id="contract-form" style={{
        background:"linear-gradient(135deg, #2d1f1a 0%, #1a1210 100%)",
        padding:isMobile?"48px 20px":"72px 64px"
      }}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <div style={{...TAG,color:"#c8b89a",marginBottom:10}}>Contattaci</div>
            <h2 style={{fontSize:isMobile?26:34,fontWeight:700,color:"white",
              fontFamily:"Georgia,serif",margin:"0 0 12px"}}>
              Compila il form, ti ricontattiamo presto
            </h2>
            <p style={{color:"rgba(255,255,255,.6)",fontSize:14,margin:0}}>
              Il nostro team Contract ti risponderà entro 24 ore con una proposta personalizzata.
            </p>
          </div>

          {sent ? (
            <div style={{background:"rgba(200,184,154,.15)",borderRadius:18,padding:"48px 32px",
              textAlign:"center",border:"1px solid rgba(200,184,154,.3)"}}>
              <div style={{width:64,height:64,borderRadius:"50%",background:"#eafaf1",border:"2px solid #27ae60",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <h3 style={{color:"white",fontFamily:"Georgia,serif",fontSize:24,margin:"0 0 12px"}}>Richiesta inviata!</h3>
              <p style={{color:"rgba(255,255,255,.7)",fontSize:14,margin:"0 0 24px"}}>
                Il nostro team Contract ti contatterà entro 24 ore per discutere il tuo progetto.
              </p>
              <button onClick={()=>setSent(false)} style={{...mkBtn("gold"),padding:"12px 24px",fontSize:13}}>
                Invia un&apos;altra richiesta
              </button>
            </div>
          ) : (
            <div style={{background:"rgba(255,255,255,.08)",borderRadius:18,padding:isMobile?"24px":"40px",
              border:"1px solid rgba(200,184,154,.2)"}}>
              <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:14,marginBottom:14}}>
                <div>
                  <div style={{...TAG,color:"#c8b89a",marginBottom:6}}>Nome *</div>
                  <input value={formData.nome} onChange={setF("nome")} placeholder="Il tuo nome" style={inp2}/>
                </div>
                <div>
                  <div style={{...TAG,color:"#c8b89a",marginBottom:6}}>Cognome</div>
                  <input value={formData.cognome} onChange={setF("cognome")} placeholder="Il tuo cognome" style={inp2}/>
                </div>
                <div>
                  <div style={{...TAG,color:"#c8b89a",marginBottom:6}}>Email *</div>
                  <input type="email" value={formData.email} onChange={setF("email")} placeholder="email@azienda.it" style={inp2}/>
                </div>
                <div>
                  <div style={{...TAG,color:"#c8b89a",marginBottom:6}}>Telefono *</div>
                  <input type="tel" value={formData.telefono} onChange={setF("telefono")} placeholder="+39 000 0000000" style={inp2}/>
                </div>
                <div style={{gridColumn:isMobile?"1":"1/3"}}>
                  <div style={{...TAG,color:"#c8b89a",marginBottom:6}}>Punto vendita di riferimento</div>
                  <select value={formData.sede} onChange={setF("sede")}
                    style={{...inp2,cursor:"pointer"}}>
                    <option value="">Seleziona una sede</option>
                    {sedi.map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{gridColumn:isMobile?"1":"1/3"}}>
                  <div style={{...TAG,color:"#c8b89a",marginBottom:6}}>Descrivi il tuo progetto *</div>
                  <textarea value={formData.richiesta} onChange={setF("richiesta")}
                    placeholder="Descrivi il tipo di locale, la metratura, le tue esigenze specifiche..."
                    rows={4}
                    style={{...inp2,resize:"vertical",lineHeight:1.6}}/>
                </div>
              </div>
              <label style={{display:"flex",alignItems:"flex-start",gap:10,cursor:"pointer",marginBottom:20}}>
                <input type="checkbox" checked={formData.privacy} onChange={setF("privacy")}
                  style={{marginTop:2,accentColor:"#c8b89a",flexShrink:0}}/>
                <span style={{fontSize:11,color:"rgba(255,255,255,.55)",lineHeight:1.6}}>
                  Proseguendo acconsenti al trattamento dei dati. Leggi la nostra{" "}
                  <span style={{color:"#c8b89a",textDecoration:"underline",cursor:"pointer"}}>privacy policy</span>.
                </span>
              </label>
              {formErr && (
                <div style={{background:"rgba(231,76,60,.2)",border:"1px solid rgba(231,76,60,.4)",
                  borderRadius:8,padding:"10px 14px",fontSize:12,color:"#ff8a7a",marginBottom:14}}>
                  {formErr}
                </div>
              )}
              <button onClick={submitForm}
                style={{...mkBtn("gold",true),padding:"14px",fontSize:15}}>
                Invia richiesta Contract →
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

function SettoreCard({ s }) {
  const [hov, setHov] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  return (
    <div
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{...cardS,overflow:"hidden",cursor:"default",
        transform:hov?"translateY(-4px)":"none",
        boxShadow:hov?"0 12px 40px #0002":"0 2px 8px #0001",
        transition:"all .25s"}}>
      {/* Image */}
      <div style={{height:180,overflow:"hidden",background:"#1a1210",position:"relative",
        display:"flex",alignItems:"center",justifyContent:"center"}}>
        {imgOk ? (
          <img src={s.img} alt={s.label}
            onError={()=>setImgOk(false)}
            style={{width:"100%",height:"100%",objectFit:"cover",
              transform:hov?"scale(1.06)":"scale(1)",transition:"transform .4s"}}/>
        ) : (
          <span style={{fontSize:52,opacity:.5}}>{s.fallback}</span>
        )}
        {/* overlay gradient */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:80,
          background:"linear-gradient(to top, rgba(26,18,16,.7) 0%, transparent 100%)"}}/>
        <div style={{position:"absolute",bottom:12,left:14}}>
          <span style={{fontSize:11,fontWeight:700,color:"#c8b89a",letterSpacing:".06em",
            textTransform:"uppercase"}}>{s.label}</span>
        </div>
      </div>
      {/* Body */}
      <div style={{padding:"16px 18px 20px"}}>
        <div style={{fontWeight:700,fontSize:14,color:"#1a1210",marginBottom:6,lineHeight:1.3}}>{s.desc}</div>
        <p style={{fontSize:12,color:"#7a6e68",lineHeight:1.7,margin:0}}>{s.body}</p>
      </div>
    </div>
  );
}

// ─── PROGETTI ──────────────────────────────
function ProgettiPage() {
  const { isMobile, isTablet } = useBreakpoint();
  const [activeProject, setActiveProject] = useState(null); // {proj, photoIdx}

  const proj=[
    {
      name:"Famiglia Rossi",
      location:"Milano",
      tag:"Cucina + Living",
      anno:"2024",
      mq:"85 m²",
      desc:"Progetto completo di cucina a isola e soggiorno integrato. Finiture laccate opache in grigio cemento, piano in quarzo bianco e zona living con parete attrezzata su misura.",
      photos:["https://www.mobilidesignoccasioni.com/public/gallery_prodotti/75667/cucina-con-isola-lago-36e8-472360-l.webp"],
    },
    {
      name:"Luca B.",
      location:"Torino",
      tag:"Cucina su misura",
      anno:"2024",
      mq:"14 m²",
      desc:"Cucina lineare con colonna forno integrata e penisola. Brand Net Cucine in laminato effetto legno, elettrodomestici Bosch e illuminazione LED sottopensile.",
      photos:["https://casadelmobilio.it/wp-content/uploads/2021/01/20201110_132740.jpg"],
    },
    {
      name:"Marta G.",
      location:"Genova",
      tag:"Zona living completa",
      anno:"2025",
      mq:"42 m²",
      desc:"Soggiorno open space con parete TV sospesa, divano angolare SAMOA e complementi selezionati. Illuminazione LODES con sospensioni a cluster sopra il tavolo da pranzo.",
      photos:["https://www.diotti.com/it/media/images/progetti/485268/progetto-soggiorno-con-zona-pranzo.jpeg"],
    },
    {
      name:"Studio Archi",
      location:"Genova",
      tag:"Progetto commerciale",
      anno:"2025",
      mq:"120 m²",
      desc:"Arredo completo di uno studio di architettura. Scrivanie in noce massello, librerie a tutta altezza e zona riunioni con tavolo ovale e sedie Vela.",
      photos:["https://www.openhousenapoli.org/location/fotolocation/296_4812.jpg"],
    },
    {
      name:"Elena M.",
      location:"La Spezia",
      tag:"Cucina classica",
      anno:"2024",
      mq:"18 m²",
      desc:"Cucina classica in legno massello laccato bianco con maniglie in ottone. Top in marmo Calacatta, piano cottura a gas e forno a vapore integrati.",
      photos:["https://www.gammapianegonda.com/wp-content/uploads/2021/09/cucina-contemporanea-vecchia-cascina-1.jpg"],
    },
    {
      name:"Roberto C.",
      location:"Savona",
      tag:"Sala da pranzo",
      anno:"2025",
      mq:"28 m²",
      desc:"Zona pranzo con tavolo Orbit allungabile in vetro e 8 sedie Velvet rivestite in bouclé. Illuminazione con sospensione Lodes e mobile buffet coordinato.",
      photos:["https://pozzoli.net/cdn/shop/files/WhatsApp_Image_2026-01-13_at_15.24.24_2.jpg?v=1768843228&width=1214"],
    },
  ];

  const openProject = (p, idx=0) => setActiveProject({proj:p, photoIdx:idx});
  const closeProject = () => setActiveProject(null);
  const prevPhoto = () => setActiveProject(a=>({...a, photoIdx:(a.photoIdx-1+a.proj.photos.length)%a.proj.photos.length}));
  const nextPhoto = () => setActiveProject(a=>({...a, photoIdx:(a.photoIdx+1)%a.proj.photos.length}));

  return (
    <div style={{background:"#faf8f5",minHeight:"60vh"}}>
      {/* HERO */}
      <div style={{background:"#1a1210",padding:isMobile?"52px 20px 48px":"72px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{...TAG,color:"#c8b89a",marginBottom:14}}>Chi ci ha scelto</div>
          <h1 style={{fontSize:isMobile?30:50,fontWeight:700,color:"white",margin:"0 0 16px",fontFamily:"Georgia,serif"}}>Progetti realizzati</h1>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:isMobile?14:16,lineHeight:1.75,maxWidth:540,margin:0}}>Scopri le case e gli spazi che abbiamo trasformato insieme ai nostri clienti.</p>
        </div>
      </div>

      <Sec bg="#faf8f5">
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)",gap:24}}>
          {proj.map((p,i)=>(
            <ProjectCard key={i} p={p} onOpen={()=>openProject(p,0)}/>
          ))}
        </div>
      </Sec>

      {/* LIGHTBOX / CAROUSEL */}
      {activeProject && (
        <div style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(10,7,6,.94)",display:"flex",flexDirection:"column"}}
          onClick={closeProject}>
          {/* Close */}
          <button onClick={closeProject}
            style={{position:"absolute",top:16,right:16,background:"rgba(255,255,255,.1)",border:"none",color:"white",
              width:40,height:40,borderRadius:"50%",cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          {/* Main photo */}
          <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",padding:"60px 80px 20px"}}
            onClick={e=>e.stopPropagation()}>
            {/* Prev */}
            {activeProject.proj.photos.length>1&&(
              <button onClick={e=>{e.stopPropagation();prevPhoto();}}
                style={{position:"absolute",left:16,background:"rgba(255,255,255,.1)",border:"none",color:"white",
                  width:44,height:44,borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
            )}
            <img src={activeProject.proj.photos[activeProject.photoIdx]} alt={activeProject.proj.name}
              style={{maxHeight:"70vh",maxWidth:"100%",objectFit:"contain",borderRadius:12,boxShadow:"0 20px 60px rgba(0,0,0,.5)"}}/>
            {/* Next */}
            {activeProject.proj.photos.length>1&&(
              <button onClick={e=>{e.stopPropagation();nextPhoto();}}
                style={{position:"absolute",right:16,background:"rgba(255,255,255,.1)",border:"none",color:"white",
                  width:44,height:44,borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            )}
          </div>

          {/* Info + thumbnails */}
          <div onClick={e=>e.stopPropagation()} style={{background:"rgba(26,18,16,.95)",padding:"16px 24px",borderTop:"1px solid rgba(255,255,255,.08)"}}>
            <div style={{maxWidth:900,margin:"0 auto",display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
              <div style={{flex:1,minWidth:200}}>
                <div style={{fontWeight:700,fontSize:16,color:"white",marginBottom:2}}>{activeProject.proj.name} — {activeProject.proj.location}</div>
                <div style={{fontSize:12,color:"#c8b89a"}}>{activeProject.proj.tag} · {activeProject.proj.mq} · {activeProject.proj.anno}</div>
              </div>
              {/* Thumbnails */}
              {activeProject.proj.photos.length>1&&(
                <div style={{display:"flex",gap:8}}>
                  {activeProject.proj.photos.map((ph,j)=>(
                    <div key={j} onClick={()=>setActiveProject(a=>({...a,photoIdx:j}))}
                      style={{width:54,height:40,borderRadius:5,overflow:"hidden",cursor:"pointer",
                        border:`1.5px solid ${activeProject.photoIdx===j?"#c8b89a":"rgba(255,255,255,.15)"}`,
                        opacity:activeProject.photoIdx===j?1:.55,transition:"all .2s"}}>
                      <img src={ph} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                    </div>
                  ))}
                </div>
              )}
              <div style={{fontSize:12,color:"rgba(255,255,255,.4)"}}>
                {activeProject.photoIdx+1} / {activeProject.proj.photos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, onOpen }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{...cardS,overflow:"hidden",cursor:"pointer",
      boxShadow:hov?"0 12px 40px rgba(0,0,0,.12)":"0 2px 8px rgba(0,0,0,.05)",
      transform:hov?"translateY(-4px)":"none",transition:"all .25s"}}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      onClick={onOpen}>
      {/* Preview image */}
      <div style={{height:220,overflow:"hidden",position:"relative"}}>
        <img src={p.photos[0]} alt={p.name}
          style={{width:"100%",height:"100%",objectFit:"cover",
            transform:hov?"scale(1.06)":"scale(1)",transition:"transform .5s"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(26,18,16,.5) 0%,transparent 55%)",opacity:hov?1:.4,transition:"opacity .3s"}}/>
        {/* Photo count badge */}
        <div style={{position:"absolute",bottom:10,right:10,background:"rgba(26,18,16,.7)",backdropFilter:"blur(4px)",
          borderRadius:5,padding:"3px 9px",display:"flex",alignItems:"center",gap:5}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span style={{fontSize:10,color:"white",fontWeight:600}}>{p.photos.length} foto</span>
        </div>
        <div style={{position:"absolute",top:10,left:10,background:"#1a1210",borderRadius:4,padding:"3px 10px"}}>
          <span style={{fontSize:10,color:"#c8b89a",fontWeight:700,letterSpacing:".06em",textTransform:"uppercase"}}>{p.tag}</span>
        </div>
      </div>
      {/* Content */}
      <div style={{padding:"18px 20px 22px"}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:8}}>
          <div>
            <div style={{fontWeight:700,fontSize:15,color:"#1a1210",lineHeight:1.2}}>{p.name}</div>
            <div style={{fontSize:12,color:"#9a8e88",marginTop:2,display:"flex",alignItems:"center",gap:5}}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {p.location} · {p.mq} · {p.anno}
            </div>
          </div>
          <div style={{width:28,height:28,borderRadius:"50%",border:"1.5px solid #ece7e0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .2s",background:hov?"#1a1210":"white",borderColor:hov?"#1a1210":"#ece7e0"}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={hov?"white":"#9a8e88"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
        <p style={{fontSize:13,color:"#5a4e4a",lineHeight:1.7,margin:0}}>{p.desc}</p>
      </div>
    </div>
  );
}


// ─── IL TUO ARREDATORE ─────────────────────

const AVATARS = {
  "marco_rossi": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  "laura_ferrari": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  "andrea_bianchi": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  "giulia_romano": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  "luca_conti": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  "sara_villa": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
  "matteo_ricci": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  "elena_gallo": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80",
  "davide_costa": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  "chiara_esposito": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
  "roberto_martini": "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80",
  "alessia_greco": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80",
};

const NEGOZI = [
  {
    id:"ge",
    citta:"Genova",
    regione:"Liguria",
    indirizzo:"Via Renata Bianchi, 61",
    cap:"16152",
    tel:"010 96 24 111",
    email:"genova@astadelmobile.it",
    orari:[
      "Lun–Ven: 10:00–13:00 / 15:00–19:30",
      "Sab–Dom: 10:00–19:30"
    ],
    maps:"https://maps.google.com/?q=Via+Renata+Bianchi+61+Genova",
    arredatori:[
      {
        key:"marco_rossi",
        nome:"Marco Rossi",
        ruolo:"Senior Designer d'Interni",
        specialita:["Cucine su misura","Zona giorno","Living moderno"],
        anni_exp:12,
        lingue:["Italiano","Inglese"],
        recensioni:48,
        rating:4.9,
        bio:"Specializzato in cucine e ambienti living. Marco coniuga funzionalità e design con un approccio attento al cliente e al budget.",
        email:"marco.rossi@astadelmobile.it"
      },
      {
        key:"laura_ferrari",
        nome:"Laura Ferrari",
        ruolo:"Interior Designer",
        specialita:["Zona notte","Camerette","Bagni"],
        anni_exp:8,
        lingue:["Italiano","Francese"],
        recensioni:35,
        rating:4.8,
        bio:"Appassionata di zona notte e spazi bambini, Laura crea ambienti sereni e funzionali con grande attenzione ai dettagli.",
        email:"laura.ferrari@astadelmobile.it"
      }
    ]
  },
  {
    id:"fl",
    citta:"Finale Ligure",
    regione:"Liguria (SV)",
    indirizzo:"Via Maestri del Lavoro d'Italia, 20",
    cap:"17024",
    tel:"019 68 10 43",
    email:"finaleligure@astadelmobile.it",
    orari:[
      "Lun: 15:00–19:30",
      "Mar–Sab: 9:30–12:30 / 15:00–19:30",
      "Dom: 15:00–19:30"
    ],
    maps:"https://maps.google.com/?q=Via+Maestri+del+Lavoro+20+Finale+Ligure",
    arredatori:[
      {
        key:"andrea_bianchi",
        nome:"Andrea Bianchi",
        ruolo:"Consulente d'Arredo",
        specialita:["Cucine","Soggiorni","Complementi"],
        anni_exp:15,
        lingue:["Italiano"],
        recensioni:62,
        rating:5.0,
        bio:"Con 15 anni di esperienza nel settore, Andrea è il punto di riferimento per i clienti della Riviera di Ponente.",
        email:"andrea.bianchi@astadelmobile.it"
      },
      {
        key:"giulia_romano",
        nome:"Giulia Romano",
        ruolo:"Designer d'Interni",
        specialita:["Stile classico","Stile contemporaneo","Outdoor"],
        anni_exp:6,
        lingue:["Italiano","Spagnolo"],
        recensioni:29,
        rating:4.7,
        bio:"Giulia trasforma ogni spazio con soluzioni creative e personalizzate, con una passione particolare per lo stile mediterraneo.",
        email:"giulia.romano@astadelmobile.it"
      }
    ]
  },
  {
    id:"at",
    citta:"Arma di Taggia",
    regione:"Liguria (IM)",
    indirizzo:"Via del Piano, 106/1",
    cap:"18018",
    tel:"0184 45 311",
    email:"armaditaggia@astadelmobile.it",
    orari:[
      "Lun: 15:00–19:30",
      "Mar–Ven: 9:30–12:30 / 15:00–19:30",
      "Sab: 9:30–19:30",
      "Dom: 15:00–19:30"
    ],
    maps:"https://maps.google.com/?q=Via+del+Piano+106+Arma+di+Taggia",
    arredatori:[
      {
        key:"luca_conti",
        nome:"Luca Conti",
        ruolo:"Interior Architect",
        specialita:["Progetti su misura","Cucine isola","Zona giorno"],
        anni_exp:10,
        lingue:["Italiano","Inglese"],
        recensioni:44,
        rating:4.9,
        bio:"Architetto di formazione, Luca porta un approccio tecnico e creativo a ogni progetto, con attenzione all'ottimizzazione degli spazi.",
        email:"luca.conti@astadelmobile.it"
      }
    ]
  },
  {
    id:"to",
    citta:"Torino",
    regione:"Piemonte",
    indirizzo:"Via Casteldelfino, 77/79",
    cap:"10147",
    tel:"011 21 44 100",
    email:"torino@astadelmobile.it",
    orari:[
      "Lun–Ven: 9:30–13:00 / 15:00–19:30",
      "Sab: 9:30–19:30",
      "Dom: 15:00–19:30"
    ],
    maps:"https://maps.google.com/?q=Via+Casteldelfino+77+Torino",
    arredatori:[
      {
        key:"sara_villa",
        nome:"Sara Villa",
        ruolo:"Senior Interior Designer",
        specialita:["Arredo moderno","Cucine","Living luxury"],
        anni_exp:11,
        lingue:["Italiano","Inglese","Tedesco"],
        recensioni:71,
        rating:4.9,
        bio:"Sara è specializzata in ambienti di design contemporaneo. Segue il cliente dalla progettazione al collaudo finale con passione e precisione.",
        email:"sara.villa@astadelmobile.it"
      },
      {
        key:"matteo_ricci",
        nome:"Matteo Ricci",
        ruolo:"Consulente Arredo",
        specialita:["Zona notte","Armadi","Camerette"],
        anni_exp:7,
        lingue:["Italiano","Francese"],
        recensioni:38,
        rating:4.8,
        bio:"Matteo si specializza nella zona notte e negli spazi per bambini, creando ambienti confortevoli e su misura per ogni famiglia.",
        email:"matteo.ricci@astadelmobile.it"
      }
    ]
  },
  {
    id:"cv",
    citta:"Cavallermaggiore",
    regione:"Piemonte (CN)",
    indirizzo:"Corso Piemonte, 16",
    cap:"12030",
    tel:"0172 38 10 00",
    email:"cavallermaggiore@astadelmobile.it",
    orari:[
      "Lun–Ven: 9:30–13:00 / 15:00–19:30",
      "Sab: 9:30–19:30",
      "Dom: 15:00–19:30"
    ],
    maps:"https://maps.google.com/?q=Corso+Piemonte+16+Cavallermaggiore",
    arredatori:[
      {
        key:"elena_gallo",
        nome:"Elena Gallo",
        ruolo:"Designer d'Interni",
        specialita:["Stile rustico","Cucine classiche","Complementi"],
        anni_exp:9,
        lingue:["Italiano"],
        recensioni:31,
        rating:4.7,
        bio:"Elena ama valorizzare le case con uno stile caldo e accogliente. Specializzata in arredi classici e country chic.",
        email:"elena.gallo@astadelmobile.it"
      }
    ]
  },
  {
    id:"ca",
    citta:"Castell'Alfero",
    regione:"Piemonte (AT)",
    indirizzo:"S.S. Asti-Casale, 27/G",
    cap:"14033",
    tel:"0141 40 11 50",
    email:"castellalfero@astadelmobile.it",
    orari:[
      "Lun–Ven: 9:30–12:30 / 15:00–19:30",
      "Sab: 9:30–19:30",
      "Dom: 15:00–19:30"
    ],
    maps:"https://maps.google.com/?q=SS+Asti+Casale+27+Castellalfero",
    arredatori:[
      {
        key:"davide_costa",
        nome:"Davide Costa",
        ruolo:"Interior Consultant",
        specialita:["Cucine","Soggiorni","Bagni"],
        anni_exp:14,
        lingue:["Italiano","Inglese"],
        recensioni:55,
        rating:4.8,
        bio:"Davide porta 14 anni di esperienza con un approccio pratico e orientato al cliente. Noto per la sua capacità di rispettare tempi e budget.",
        email:"davide.costa@astadelmobile.it"
      },
      {
        key:"chiara_esposito",
        nome:"Chiara Esposito",
        ruolo:"Designer d'Interni",
        specialita:["Design contemporaneo","Zona giorno","Illuminazione"],
        anni_exp:5,
        lingue:["Italiano","Inglese"],
        recensioni:22,
        rating:4.9,
        bio:"Giovane e dinamica, Chiara porta idee fresche e soluzioni innovative. Appassionata di illuminazione e design contemporaneo.",
        email:"chiara.esposito@astadelmobile.it"
      }
    ]
  },
  {
    id:"ch",
    citta:"Chivasso",
    regione:"Piemonte (TO)",
    indirizzo:"Via Peppino Impastato, 210",
    cap:"10034",
    tel:"011 91 00 200",
    email:"chivasso@astadelmobile.it",
    orari:[
      "Lun–Ven: 9:30–13:00 / 15:00–19:30",
      "Sab–Dom: 9:30–19:30"
    ],
    maps:"https://maps.google.com/?q=Via+Peppino+Impastato+210+Chivasso",
    arredatori:[
      {
        key:"roberto_martini",
        nome:"Roberto Martini",
        ruolo:"Senior Consultant",
        specialita:["Cucine","Zona living","Ristrutturazioni complete"],
        anni_exp:18,
        lingue:["Italiano","Inglese"],
        recensioni:88,
        rating:5.0,
        bio:"Con 18 anni in Asta del Mobile, Roberto è uno dei consulenti più esperti. Ideale per chi cerca un arredamento completo e un referente unico.",
        email:"roberto.martini@astadelmobile.it"
      },
      {
        key:"alessia_greco",
        nome:"Alessia Greco",
        ruolo:"Interior Designer",
        specialita:["Stile nordico","Cucine moderne","Camerette"],
        anni_exp:4,
        lingue:["Italiano","Inglese","Svedese"],
        recensioni:18,
        rating:4.8,
        bio:"Formatasi a Stoccolma, Alessia porta un tocco scandinavo all'arredo italiano. Specializzata in spazi minimal e funzionali.",
        email:"alessia.greco@astadelmobile.it"
      }
    ]
  }
];

function ArredatoriPage() {
  const { isMobile, isTablet } = useBreakpoint();
  const [activeNegozio, setActiveNegozio] = useState(null);
  const [emailModal, setEmailModal] = useState(null); // arredatore
  const [emailSent, setEmailSent] = useState(false);

  const negoziRefs = useRef({});

  const scrollToNegozio = (id) => {
    const el = negoziRefs.current[id];
    if(el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior:"smooth" });
    }
  };

  return (
    <div>
      {/* HERO */}
      <div style={{background:"#1a1210",padding:isMobile?"52px 20px 48px":"72px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{...TAG,color:"#c8b89a",marginBottom:14}}>La nostra rete</div>
          <h1 style={{fontSize:isMobile?30:50,fontWeight:700,color:"white",margin:"0 0 16px",fontFamily:"Georgia,serif",letterSpacing:"-.02em",maxWidth:620}}>
            Il tuo arredatore
          </h1>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:isMobile?14:16,lineHeight:1.75,maxWidth:560,margin:0}}>
            Seleziona il negozio più vicino a te per scoprire il team di arredatori specializzati.
          </p>
        </div>
      </div>

      {/* NEGOZI — 2 colonne: lista sx | info dx */}
      <Sec bg="white">
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"280px 1fr",gap:24,alignItems:"start"}}>

          {/* COL SX — Lista negozi selezionabili */}
          <div style={{position:isMobile?"static":"sticky",top:90,display:"flex",flexDirection:"column",gap:6}}>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#9a8e88",marginBottom:8,paddingLeft:4}}>Seleziona il negozio</div>
            {NEGOZI.map((negozio,ni)=>{
              const isActive = activeNegozio===negozio.id || (activeNegozio===null && ni===0);
              return (
                <div key={negozio.id}
                  onClick={()=>setActiveNegozio(negozio.id)}
                  style={{cursor:"pointer",borderRadius:10,padding:"12px 16px",
                    border:"1.5px solid",transition:"all .15s",
                    borderColor:isActive?"#1a1210":"#ece7e0",
                    background:isActive?"#1a1210":"white",
                    boxShadow:isActive?"0 4px 16px rgba(0,0,0,.12)":"none"}}
                  onMouseEnter={e=>{if(!isActive){e.currentTarget.style.background="#faf8f5";e.currentTarget.style.borderColor="#c8b89a";}}}
                  onMouseLeave={e=>{if(!isActive){e.currentTarget.style.background="white";e.currentTarget.style.borderColor="#ece7e0";}}}>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:34,height:34,borderRadius:"50%",flexShrink:0,
                      background:isActive?"rgba(200,184,154,.2)":"#f5f0e8",
                      display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isActive?"#c8b89a":"#1a1210"} strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:13,fontWeight:700,color:isActive?"white":"#1a1210",lineHeight:1.2}}>{negozio.citta}</div>
                      <div style={{fontSize:10,color:isActive?"rgba(200,184,154,.7)":"#9a8e88",marginTop:2}}>{negozio.regione}</div>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isActive?"rgba(200,184,154,.6)":"#c8b89a"} strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COL DX — Info negozio selezionato */}
          {(()=>{
            const negozio = NEGOZI.find(n=>n.id===activeNegozio) || NEGOZI[0];
            if(!negozio) return null;
            return (
              <div>
                {/* Header negozio */}
                <div style={{background:"white",borderRadius:14,border:"1.5px solid #ece7e0",padding:"24px 28px",marginBottom:20,boxShadow:"0 2px 10px rgba(0,0,0,.04)"}}>
                  <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
                    <div>
                      <h2 style={{fontSize:isMobile?22:28,fontWeight:700,margin:"0 0 4px",color:"#1a1210",fontFamily:"Georgia,serif"}}>{negozio.citta}</h2>
                      <div style={{fontSize:11,color:"#9a8e88",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase"}}>{negozio.regione}</div>
                    </div>

                  </div>
                  <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:12,marginTop:20}}>
                    <div style={{background:"#faf8f5",borderRadius:10,padding:"12px 14px",border:"1px solid #ece7e0"}}>
                      <div style={{...TAG,marginBottom:6,color:"#9a8e88"}}>Indirizzo</div>
                      <div style={{fontSize:12,fontWeight:600,color:"#1a1210"}}>{negozio.indirizzo}</div>
                      <div style={{fontSize:11,color:"#6b5f5b",marginTop:2}}>{negozio.cap} · {negozio.regione}</div>
                    </div>
                    <div style={{background:"#faf8f5",borderRadius:10,padding:"12px 14px",border:"1px solid #ece7e0"}}>
                      <div style={{...TAG,marginBottom:6,color:"#9a8e88"}}>Contatti</div>
                      <a href={`tel:${negozio.tel}`} style={{display:"flex",alignItems:"center",gap:6,textDecoration:"none",marginBottom:4}}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.03-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <span style={{fontSize:12,fontWeight:600,color:"#1a1210"}}>{negozio.tel}</span>
                      </a>
                      <a href={`mailto:${negozio.email}`} style={{display:"flex",alignItems:"center",gap:6,textDecoration:"none"}}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <span style={{fontSize:11,color:"#6b5f5b"}}>{negozio.email}</span>
                      </a>
                    </div>
                    <div style={{background:"#faf8f5",borderRadius:10,padding:"12px 14px",border:"1px solid #ece7e0"}}>
                      <div style={{...TAG,marginBottom:8,color:"#9a8e88"}}>Orari</div>
                      {negozio.orari ? negozio.orari.map((riga,i)=>{
                        const parts = riga.split(":");
                        const giorno = parts[0]?.trim();
                        const ore = parts.slice(1).join(":").trim();
                        return (
                          <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",borderBottom:i<negozio.orari.length-1?"1px dashed #ece7e0":"none",padding:"4px 0",gap:8}}>
                            <span style={{fontSize:11,fontWeight:700,color:"#5c3518",whiteSpace:"nowrap"}}>{giorno}</span>
                            <span style={{fontSize:11,color:"#1a1210",textAlign:"right"}}>{ore}</span>
                          </div>
                        );
                      }) : <div style={{fontSize:11,color:"#9a8e88"}}>Contattaci</div>}
                    </div>
                  </div>
                </div>

                {/* Arredatori del negozio */}
                {negozio.arredatori && negozio.arredatori.length > 0 && (
                  <div>
                    <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#9a8e88",marginBottom:14}}>Il team di {negozio.citta}</div>
                    <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:20,alignItems:"stretch"}}>
                      {negozio.arredatori.map(arr=>(
                        <ArredatoreCard key={arr.key} arredatore={arr} onEmail={()=>setEmailModal(arr)}/>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </Sec>

      {/* MODAL EMAIL */}
      {emailModal && (
        <EmailModal
          arredatore={emailModal}
          sent={emailSent}
          onSend={()=>setEmailSent(true)}
          onClose={()=>{setEmailModal(null);setEmailSent(false);}}
        />
      )}
    </div>
  );
}

function ArredatoreCard({ arredatore: arr, onEmail }) {
  const [hov,setHov] = useState(false);
  return (
    <div style={{
      ...cardS,
      boxShadow: hov?"0 10px 36px #0002":"0 2px 8px #0001",
      transform: hov?"translateY(-2px)":"none",
      transition:"all .22s",
      display:"flex", flexDirection:"column"
    }}
    onMouseEnter={()=>setHov(true)}
    onMouseLeave={()=>setHov(false)}>
      {/* COVER BAND */}
      <div style={{height:3,background:"#c8b89a"}}/>

      {/* PROFILO */}
      <div style={{padding:"20px 20px 0",display:"flex",gap:16,alignItems:"flex-start"}}>
        <img
          src={AVATARS[arr.key]}
          alt={arr.nome}
          style={{width:64,height:64,borderRadius:"50%",border:"3px solid white",
            boxShadow:"0 2px 12px #0002",objectFit:"cover",flexShrink:0}}
        />
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontWeight:700,fontSize:16,color:"#1a1210",lineHeight:1.2}}>{arr.nome}</div>
          <div style={{fontSize:12,color:"#6b5f5b",fontWeight:500,marginTop:3}}>{arr.ruolo}</div>
          <div style={{display:"flex",alignItems:"center",gap:6,marginTop:6,fontSize:12,color:"#6b5f5b"}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span>{arr.lingue.join(" · ")}</span>
          </div>
        </div>
      </div>

      {/* BIO */}
      <div style={{padding:"14px 20px 0"}}>
        <p style={{fontSize:13,color:"#4a3e3a",lineHeight:1.7,margin:0}}>{arr.bio}</p>
      </div>

      {/* EMAIL */}
      <div style={{padding:"10px 20px 0"}}>
        <div style={{fontSize:11,color:"#9a8e88",display:"flex",alignItems:"center",gap:5}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          {arr.email}
        </div>
      </div>

      {/* CTA — solo email */}
      <div style={{padding:"14px 16px 16px",marginTop:"auto"}}>
        <button onClick={onEmail}
          style={{...mkBtn("dark",true),padding:"10px",fontSize:12,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Scrivi un&apos;email
        </button>
      </div>
    </div>
  );
}

function EmailModal({ arredatore: arr, sent, onSend, onClose }) {
  const [nome,setNome]=useState("");
  const [email,setEmail]=useState("");
  const [tel,setTel]=useState("");
  const [msg,setMsg]=useState("");
  const { isMobile } = useBreakpoint();

  return (
    <div style={{position:"fixed",inset:0,zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"}}
      onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{position:"absolute",inset:0,background:"rgba(26,18,16,.65)",backdropFilter:"blur(4px)"}}
        onClick={onClose}/>
      <div style={{position:"relative",background:"white",borderRadius:18,width:"100%",maxWidth:520,
        boxShadow:"0 24px 80px #0004",overflow:"hidden"}}>
        {/* HEADER */}
        <div style={{background:"#1a1210",padding:"20px 22px",display:"flex",alignItems:"center",gap:14}}>
          <img src={AVATARS[arr.key]} alt={arr.nome}
            style={{width:48,height:48,borderRadius:"50%",border:"2px solid rgba(255,255,255,.3)",objectFit:"cover"}}/>
          <div>
            <div style={{fontWeight:700,fontSize:16,color:"white"}}>{arr.nome}</div>
            <div style={{fontSize:12,color:"#c8b89a"}}>{arr.ruolo}</div>
          </div>
          <button onClick={onClose} style={{marginLeft:"auto",background:"rgba(255,255,255,.12)",border:"none",
            color:"white",width:32,height:32,borderRadius:"50%",cursor:"pointer",fontSize:16,
            display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        </div>

        {sent ? (
          <div style={{padding:"48px 32px",textAlign:"center"}}>
            <div style={{width:60,height:60,borderRadius:"50%",background:"#eafaf1",border:"2px solid #27ae60",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <h3 style={{fontSize:22,fontWeight:700,color:"#1a1210",margin:"0 0 10px",fontFamily:"Georgia,serif"}}>Email inviata!</h3>
            <p style={{color:"#6b5f5b",fontSize:14,lineHeight:1.75,marginBottom:24}}><strong>{arr.nome}</strong> ti risponderà entro 24 ore lavorative per concordare un appuntamento.</p>
            <button onClick={onClose} style={{...mkBtn("dark"),padding:"12px 28px"}}>Chiudi</button>
          </div>
        ) : (
          <div style={{padding:"22px"}}>
            <p style={{fontSize:13,color:"#6b5f5b",lineHeight:1.65,margin:"0 0 18px"}}>
              Invia un messaggio a <strong style={{color:"#1a1210"}}>{arr.nome}</strong> per fissare un appuntamento o chiedere informazioni.
            </p>
            <div style={{display:"grid",gap:10}}>
              <input value={nome} onChange={e=>setNome(e.target.value)} placeholder="Nome e cognome *" style={inp}/>
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email *" type="email" style={inp}/>
              <input value={tel} onChange={e=>setTel(e.target.value)} placeholder="Telefono (facoltativo)" style={inp}/>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={4}
                placeholder="Scrivi il tuo messaggio... (es: vorrei un appuntamento per progettare la cucina)"
                style={{...inp,resize:"vertical"}}/>
              <button onClick={onSend}
                style={{...mkBtn("dark",true),padding:"13px",fontSize:14}}>
                Invia a {arr.nome} →
              </button>
            </div>
            <p style={{fontSize:11,color:"#9a8e88",marginTop:10,lineHeight:1.65}}>
              I tuoi dati saranno usati esclusivamente per rispondere alla tua richiesta.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


// ─── SHOP PRODUCTS (online only, separate from catalog) ─────────────────────
const SHOP_PRODUCTS = [
  // === ILLUMINAZIONE — Sospensioni ===
  {id:1001,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Pendul Globe",price:"€189",desc:"Sospensione a sfera in vetro soffiato, diffusore opalino per luce soffusa.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/432679/258775_EMO001_HULAHOOP_SP_D061.webp",availability:"online",mode:"acquisto"},
  {id:1002,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Ring Cord",price:"€145",desc:"Sospensione circolare in metallo nero opaco, per tavoli da pranzo.",imgUrl:"https://www.ideal-lux.com/assets/products/ins/_webp1k/435949/371702_INS001_LOOK_SP1_SQUARE_D60_H400_OTTONE.webp",availability:"online",mode:"acquisto"},
  {id:1003,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Cono Bistrot",price:"€220",desc:"Cono in metallo con finitura ottone spazzolato, design scandinavo.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/431451/321042_EMO001_FLAM_SP_FUME.webp",availability:"online",mode:"acquisto"},
  {id:1004,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Cluster 3",price:"€310",desc:"Gruppo da 3 sfere in vetro, cavo regolabile, resa cromatica 90+.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/433197/223230_EMO001_HALO_PL_D60_4000K.webp",availability:"online",mode:"acquisto"},
  {id:1005,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Onda Piatta",price:"€265",desc:"Diffusore piatto in policarbonato bianco, luce LED integrata 3000K.",imgUrl:"https://www.ideal-lux.com/assets/products/loc/_webp1k/433595/352688_LOC001_TUBIX_SP_D100.webp",availability:"online",mode:"acquisto"},
  {id:1006,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Retro Cage",price:"€99",desc:"Gabbia industriale in ferro verniciato nero, lampadina a vista E27.",imgUrl:"https://www.ideal-lux.com/assets/products/emo/_webp1k/432022/222110_EMO001_ORACLE_SP_D70_NERO.webp",availability:"online",mode:"acquisto"},
  {id:1007,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Dome Loft",price:"€178",desc:"Paralume in alluminio spazzolato, ottima per ambienti loft.",imgUrl:"https://www.ideal-lux.com/assets/products/ins/_webp1k/435576/269382_INS001_FRAME_SP_RETTANGOLO_NERO.webp",availability:"online",mode:"acquisto"},
  {id:1008,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Rattan Boho",price:"€135",desc:"Intreccio naturale in rattan, crea giochi di luce caldi sulle pareti.",imgUrl:"https://www.ideal-lux.com/assets/products/ins/_webp1k/435449/370569_INS001_ORACLE_SLIM_SP_D150_ROUND_3000K_ON-OFF_OT.webp",availability:"online",mode:"acquisto"},
  {id:1009,brand:"IDEAL LUX",category:"Illuminazione",subcategory:"Sospensioni",name:"Square LED",price:"€345",desc:"Profilo quadrato LED 36W, dimmerabile, colore bianco opaco.",imgUrl:"https://www.ideal-lux.com/assets/products/ins/_webp1k/435307/291406_INS001_CIRCUS_SP_D74.webp",availability:"online",mode:"acquisto"},

  // === ILLUMINAZIONE — Plafoniere ===

  // === ILLUMINAZIONE — Applique ===

  // === COMPLEMENTI — Consolle ===

  // === COMPLEMENTI — Tavolini ===

  // === COMPLEMENTI — Pouf ===

  // === TAVOLI — Allungabili ===

  // === TAVOLI — Fissi ===

  // === SEDIE & SGABELLI — Sedie ===

  // === SEDIE & SGABELLI — Sgabelli ===

  // === POLTRONE & DIVANI — Poltrone ===
  {id:1091,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Egg Chair",price:"€680",desc:"Poltrona uovo in tessuto bouclé crema, girevole con base in metallo.",imgUrl:"https://www.arteestile.com/immagini/1540279394957.jpg",availability:"online",mode:"acquisto"},
  {id:1092,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Wing Back",price:"€820",desc:"Poltrona orecchioni in velluto blu cobalto, gambe in legno noce.",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/129414/poltrona-in-velluto-blu-petrolio-malcom-1.webp",availability:"online",mode:"acquisto"},
  {id:1093,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Relax Manual",price:"€1.150",desc:"Poltrona relax reclinabile manualmente, rivestimento in pelle nabuk.",imgUrl:"https://www.astadelmobile.it/Images/divano-william-recliner-denim-blu.webp",availability:"online",mode:"acquisto"},
  {id:1094,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Reading Chair",price:"€490",desc:"Poltrona da lettura con schienale avvolgente, piedini in legno.",imgUrl:"https://www.astadelmobile.it/Images/poltrona-evoluzione-blu.webp",availability:"online",mode:"acquisto"},
  {id:1095,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Scandi Arm",price:"€395",desc:"Poltrona scandinava in tessuto grigio, braccioli in rovere naturale.",imgUrl:"https://www.astadelmobile.it/Images/slim-poltrona-relax-0-linea-siedi-e-dormi.webp",availability:"online",mode:"acquisto"},
  {id:1096,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Rocking Chair",price:"€560",desc:"Sedia a dondolo moderna in legno di noce massiccio, seduta imbottita.",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/171962/poltrona-in-velluto-blu-con-gambe-oro-snob-1.webp",availability:"online",mode:"acquisto"},
  {id:1097,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Papasan",price:"€320",desc:"Poltrona papasan con cuscino in tessuto terracotta, struttura bambù.",imgUrl:"https://www.astadelmobile.it/Images/up-poltrona-viola.webp",availability:"online",mode:"acquisto"},
  {id:1098,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Ghost Arm",price:"€345",desc:"Poltrona in policarbonato trasparente, icona del design contemporaneo.",imgUrl:"https://www.astadelmobile.it/Images/matera-poltrona-marrone.webp",availability:"online",mode:"acquisto"},
  {id:1099,brand:"TEMPESTA",category:"Divani",subcategory:"Poltrone",name:"Barrel Oak",price:"€720",desc:"Poltrona a botte rivestita in pelle pieno fiore cognac, gambe quercia.",imgUrl:"https://www.astadelmobile.it/Images/sogno-poltrona-relax-0-linea-siedi-e-dormi.webp",availability:"online",mode:"acquisto"},

  // === MATERASSI — Memory ===
  {id:1100,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Memo Soft 25",price:"€480",desc:"Materasso memory foam 25cm, 7 zone differenziate, sfoderabile.",imgUrl:"https://m.media-amazon.com/images/I/61H3AIhPNnL.jpg",availability:"online",mode:"acquisto"},
  {id:1101,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Gel Wave",price:"€620",desc:"Memory foam con gel infuso per regolazione termica, H22cm.",imgUrl:"https://www.consorziomaterassi.it/public/images/prodotti/promessa-materasso-ergonomico-anallergico-sfoderabile-ecologico-h-24.jpg",availability:"online",mode:"acquisto"},
  {id:1102,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Ergo Plus",price:"€750",desc:"9 zone di portanza, memory superiore da 5cm, H27cm.",imgUrl:"https://media.mondoconv.it/media/catalog/product/cache/316d245aa0edb7d29f918c83859d791b/0/3/0344_1LVL.jpg",availability:"online",mode:"acquisto"},
  {id:1103,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Urban Slim",price:"€365",desc:"Materasso sottile H14cm per letti contenitore, memory 3cm.",imgUrl:"https://www.eminflex.it/wp-content/uploads/2024/01/Eminflex_materassi_Sano_matrimoniale_ambientato.jpg",availability:"online",mode:"acquisto"},
  {id:1104,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Aloe Fresh",price:"€510",desc:"Rivestimento in aloe vera, memory bio-based, H20cm.",imgUrl:"https://media.mondoconv.it/media/catalog/product/cache/99654f861216b92900a2c0909ade66af/5/M/5MG9_1LVL.jpg",availability:"online",mode:"acquisto"},
  {id:1105,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Cool Breeze",price:"€690",desc:"Sistema airflow, fodera in jacquard raffreddante, H24cm.",imgUrl:"https://cdn.garneroarredamenti.com/images/prod/zoom/20/17/materasso-matrimoniale-memory-dolce-sonno-molle-insacchettate-180-x-200-cm-sfoderabile_20150504-17137.webp",availability:"online",mode:"acquisto"},
  {id:1106,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Junior Memo",price:"€280",desc:"Materasso memory per ragazzi 80/90x190cm, H16cm.",imgUrl:"https://media.mondoconv.it/media/catalog/product/R/L/RL3W_1LVL.jpg",availability:"online",mode:"acquisto"},
  {id:1107,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Duo Comfort",price:"€840",desc:"Doppia faccia estate/inverno, memory 4cm, molle 7 zone.",imgUrl:"https://ammida.com/wp-content/uploads/2023/10/Materasso-Matrimoniale-Memory-Foam-h.24.webp",availability:"online",mode:"acquisto"},
  {id:1108,brand:"SUPREMA",category:"Materassi",subcategory:"Memory",name:"Prestige 30",price:"€980",desc:"Luxury 30cm, memory 8cm, molle insacchettate, fodera Silver Guard.",imgUrl:"https://media.mondoconv.it/media/catalog/product/cache/218ee089fadbc3267c64d3fa4eade0f3/K/C/KCZL_1LVL.jpg",availability:"online",mode:"acquisto"},

  // === MATERASSI — Molle ===

  // === ZONA NOTTE — Letti ===
  {id:1118,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Capitonné King",price:"€1.280",desc:"Testata capitonné in velluto grigio, struttura in legno laccato.",imgUrl:"https://cdn.garneroarredamenti.com/images/prod/zoom/23/20/letto-contenitore-matrimoniale-oversize-180x200-imbottito-velluto-beige-poffi_23514-20184257.webp?_=1726223682",availability:"online",mode:"acquisto"},
  {id:1119,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Minimal Panel",price:"€890",desc:"Testata pannello piatto in tessuto bouclé, contenitore con rete.",imgUrl:"https://www.mobilirecchia.it/shop/img/cms/letto%20navajo%20basso%20artigiana%20letti.jpg",availability:"online",mode:"acquisto"},
  {id:1120,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Four Poster",price:"€1.480",desc:"Letto a baldacchino moderno in metallo nero, tessuto antracite.",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/200622/letto-matrimoniale-160x190-cm-imbottito-e-rivestito-in-tessuto-verde-salvia-con-contenitore-degan-1.webp",availability:"online",mode:"acquisto"},
  {id:1121,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Legno Massello",price:"€980",desc:"Struttura in rovere massello naturale, testata a doghe orizzontali.",imgUrl:"https://www.mobilinolimit.it/mobili_foto/letto_matrimoniale_contenitore_in_legno_noce.jpg",availability:"online",mode:"acquisto"},
  {id:1122,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Contenitore Smart",price:"€750",desc:"Letto contenitore con apertura a ribalta, testata reclinabile.",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/191074/letto-matrimoniale-contenitore-160x190-cm-in-tessuto-effetto-maglia-ottanio-con-connettore-usb-kayden-1.webp",availability:"online",mode:"acquisto"},
  {id:1123,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Platform Low",price:"€620",desc:"Letto basso effetto giapponese, struttura in legno di pino.",imgUrl:"https://assets.deghi.it/_p/aft/webp/originali/letto-singolo-90x190-cm-in-tessuto-bianco-con-contenitore-holmon-3.jpeg",availability:"online",mode:"acquisto"},
  {id:1124,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Box Spring",price:"€1.680",desc:"Sistema boxspring con reti indipendenti, testata XXL imbottita.",imgUrl:"https://bianchi-casa.it/wp-content/uploads/letto-contenitore-emy.jpg",availability:"online",mode:"acquisto"},
  {id:1125,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Singolo Scandi",price:"€420",desc:"Letto singolo in legno di betulla, design scandinavo pulito.",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/164304/letto-sommier-matrimoniale-160x190-cm-in-tessuto-effetto-maglia-beige-con-contenitore-luton-1.webp",availability:"online",mode:"acquisto"},
  {id:1126,brand:"INGENIA",category:"Zona Notte",subcategory:"Letti imbottiti",name:"Metal Frame",price:"€480",desc:"Struttura in metallo nero opaco, testa e piede a griglia.",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/176166/letto-matrimoniale-160x190-cm-in-velluto-beige-con-piedi-in-metallo-oro-chimera-1.webp",availability:"online",mode:"acquisto"},

  // === ZONA NOTTE — Comodini ===

  // === UFFICIO — Scrivanie ===

  // === SEDIE E SGABELLI (da catalogo, fornitore CICIRIELLO) ===
  {id:2000,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Vela",price:"€68",desc:"Sedia in polipropilene colorata, impilabile e leggera",imgUrl:"https://www.astadelmobile.it/Images/sedia-vela-monoscocca-colorata.webp",availability:"online",mode:"acquisto"},
  {id:2001,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Maya",price:"€110",desc:"Sedia imbottita per living, tessuto morbido e avvolgente",imgUrl:"https://www.astadelmobile.it/Images/sedia-imbottita-maja.webp",availability:"online",mode:"acquisto"},
  {id:2002,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Filo",price:"€69",desc:"Sedia impilabile in polipropilene, elegante e pratica",imgUrl:"https://www.astadelmobile.it/Images/sedia-filo-monoscocca-colorata.webp",availability:"online",mode:"acquisto"},
  {id:2003,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Yvette",price:"€148",desc:"Rivestimento Soft Touch e struttura in metallo cromato",imgUrl:"https://www.astadelmobile.it/Images/sedia-yvette.webp",availability:"online",mode:"acquisto"},
  {id:2004,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Alba",price:"€108",desc:"Design sinuoso e comfort avvolgente per il tuo living",imgUrl:"https://www.astadelmobile.it/Images/sedia-imbottita-alba.webp",availability:"online",mode:"acquisto"},
  {id:2005,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Soft",price:"€145",desc:"Poltroncina con linee morbide e seduta imbottita",imgUrl:"https://www.astadelmobile.it/Images/sedia-soft-marrone.webp",availability:"online",mode:"acquisto"},
  {id:2006,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Colors",price:"€138",desc:"Sedia imbottita in tessuto idrorepellente, vari colori",imgUrl:"https://www.astadelmobile.it/Images/sedia-color-beige-grigio-nero.webp",availability:"online",mode:"acquisto"},
  {id:2007,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Tempo",price:"€69",desc:"Sedia pratica per uso quotidiano, impilabile",imgUrl:"https://www.astadelmobile.it/Images/sedia-tempo-monoscocca-colorata.webp",availability:"online",mode:"acquisto"},
  {id:2008,brand:"CICIRIELLO",category:"Tavoli & Sedie",subcategory:"Sedie e Sgabelli",name:"Claire",price:"€79",desc:"Sedia imbottita con struttura in metallo verniciato",imgUrl:"https://www.astadelmobile.it/Images/sedia-claire-imbottita.webp",availability:"online",mode:"acquisto"},

  // === TAVOLINI ===
  {id:2100,brand:"BIZZOTTO",category:"Complementi",subcategory:"Tavolini",name:"Vallecas Oro",price:"€249",desc:"Tavolino rotondo 70cm top vetro effetto marmo struttura oro",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/211383/tavolino-rotondo-70-cm-con-top-in-vetro-temperato-effetto-marmo-e-struttura-oro-vallecas-1.webp",availability:"online",mode:"acquisto"},
  {id:2101,brand:"BIZZOTTO",category:"Complementi",subcategory:"Tavolini",name:"Nordic Round",price:"€189",desc:"Tavolino rotondo in legno massello naturale",imgUrl:"https://media.adeo.com/mkp/ebad36bf4452a72749e056560a1d2e13/media.jpg?width=3000&height=3000&format=jpg&quality=80&fit=bounds",availability:"online",mode:"acquisto"},
  {id:2102,brand:"CICIRIELLO",category:"Complementi",subcategory:"Tavolini",name:"Blanc Mat",price:"€159",desc:"Tavolino da salotto in MDF bianco opaco con ripiano inferiore",imgUrl:"https://media.adeo.com/mkp/b0ff2ec4ae8e88a2ba196215ec0725ed/media.jpeg?width=3000&height=3000&format=jpg&quality=80&fit=bounds",availability:"online",mode:"acquisto"},
  {id:2103,brand:"BIZZOTTO",category:"Complementi",subcategory:"Tavolini",name:"Orizzonte",price:"€215",desc:"Tavolino bianco e nero con piano laccato lucido",imgUrl:"https://www.magazzinitotopiccinni.it/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/t/a/tavolino_salotto_orizzonte_copertina_bianco_nero_a1.jpg",availability:"online",mode:"acquisto"},
  {id:2104,brand:"CICIRIELLO",category:"Complementi",subcategory:"Tavolini",name:"Lotus",price:"€320",desc:"Tavolino design organico in legno e vetro temperato trasparente",imgUrl:"https://www.diotti.com/it/media/images/tavolini-da-salotto/361419/tavolino-lotus-11.jpeg",availability:"online",mode:"acquisto"},
  {id:2105,brand:"BIZZOTTO",category:"Complementi",subcategory:"Tavolini",name:"Glass 90",price:"€198",desc:"Piano in vetro temperato 90cm struttura in acciaio cromato",imgUrl:"https://www.infabbrica.com/banner/tavolino-vetro-salotto-gallery-90_5859_it_b.jpg",availability:"online",mode:"acquisto"},
  {id:2106,brand:"CICIRIELLO",category:"Complementi",subcategory:"Tavolini",name:"Air Soft",price:"€345",desc:"Tavolino in vetro con base in legno design minimalista",imgUrl:"https://www.masonionline.it/media/catalog/product/cache/1/image/6826ccc7d895bed3ef63e7e2db006776/t/a/tavolino-in-vetro-per-soggiorno-or-tavolino-air-soft-or-lago.jpg",availability:"online",mode:"acquisto"},
  {id:2107,brand:"BIZZOTTO",category:"Complementi",subcategory:"Tavolini",name:"Ring",price:"€275",desc:"Tavolino ispirato alla forma ad anello, elegante e moderno",imgUrl:"https://www.riflessi.it/complementi/ring/image-thumb__6413__riga_introduttiva_brick/tavolino-da-salotto.jpg",availability:"online",mode:"acquisto"},
  {id:2108,brand:"CICIRIELLO",category:"Complementi",subcategory:"Tavolini",name:"Soft Curve",price:"€169",desc:"Tavolino con linee morbide in massello di noce",imgUrl:"https://www.brighterhome.it/wp-content/uploads/2023/07/Tavolino-2.png",availability:"online",mode:"acquisto"},

  // === SCRIVANIE ===
  {id:2200,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Studio Pro",price:"€349",desc:"Scrivania in legno laminato con due cassetti laterali",imgUrl:"https://m.media-amazon.com/images/I/71yauher5oL._AC_UF894,1000_QL80_.jpg",availability:"online",mode:"acquisto"},
  {id:2201,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Angolare Fallon",price:"€489",desc:"Scrivania angolare 138x110cm con cassettiera bianca",imgUrl:"https://cdn.garneroarredamenti.com/images/prod/zoom/22/20/scrivania-angolare-ufficio-138x110cm-con-cassettiera-bianca-fallon_22142-20179440.webp?_=1718348203",availability:"online",mode:"acquisto"},
  {id:2202,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Masao XL",price:"€629",desc:"Scrivania 180x90cm in metallo e ceramica bianco opaco",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/87066/tavolo-scrivania-180x90-cm-in-metallo-e-ceramica-bianco-opaco-masao-xl-1.webp",availability:"online",mode:"acquisto"},
  {id:2203,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Executive",price:"€599",desc:"Scrivania direzionale in legno con bordo alluminio",imgUrl:"https://www.progettomobile.com/12913/cm312.jpg",availability:"online",mode:"acquisto"},
  {id:2204,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Manager",price:"€549",desc:"Scrivania manageriale con piano in legno di rovere",imgUrl:"https://www.progettomobile.com/12912/cm312.jpg",availability:"online",mode:"acquisto"},
  {id:2205,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Slim Plus",price:"€319",desc:"Scrivania lineare ultraslim con cassettino integrato",imgUrl:"https://img.edilportale.com/product-thumbs/b_e3f04c2f-f989-e0d4-6ad7-260795a61a42.jpeg",availability:"online",mode:"acquisto"},
  {id:2206,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Compact",price:"€279",desc:"Scrivania compatta ideale per home office",imgUrl:"https://img.edilportale.com/product-thumbs/b_9823b1b5-20e2-7b38-4e5d-eebf29e13869.jpeg",availability:"online",mode:"acquisto"},
  {id:2207,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"Job 337",price:"€445",desc:"Scrivania professionale con piano ampio 180cm",imgUrl:"https://www.giessegi.it/public/images/8324_giessegi-job-cm337-03.jpg",availability:"online",mode:"acquisto"},
  {id:2208,brand:"IIT",category:"Ufficio",subcategory:"Scrivanie",name:"CM235",price:"€395",desc:"Scrivania moderna con passacavi integrato",imgUrl:"https://www.teapizzimenti.it/wp-content/uploads/2020/10/GIESSEGI-CM235-2.jpg",availability:"online",mode:"acquisto"},

  // === SEDIE ERGONOMICHE ===
  {id:2300,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Wagner",price:"€249",desc:"Sedia ufficio con ruote e braccioli schienale traspirante nero",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/73625/sedia-ufficio-con-ruote-e-braccioli-schienale-traspirante-colore-nero-wagner-1.webp",availability:"online",mode:"acquisto"},
  {id:2301,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Cassie Duo",price:"€189",desc:"Set 2 sedie da ufficio con braccioli nere impilabili",imgUrl:"https://assets.deghi.it/_p/aft/webp/900/102853/set-2-sedie-da-ufficio-con-braccioli-nere-cassie-1.webp",availability:"online",mode:"acquisto"},
  {id:2302,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Storex Nero",price:"€149",desc:"Sedia girevole in tessuto nero regolabile in altezza",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/95753/sedia-girevole-in-tessuto-nero-storex-1.webp",availability:"online",mode:"acquisto"},
  {id:2303,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Lizzy",price:"€169",desc:"Sedia girevole in tessuto arancione e nero design moderno",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/118418/sedia-girevole-in-tessuto-arancione-e-nero-lizzy-1.webp",availability:"online",mode:"acquisto"},
  {id:2304,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Storex Bianco",price:"€149",desc:"Sedia girevole in tessuto bianco ideale per home office",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/118408/sedia-girevole-in-tessuto-bianco-storex-1.webp",availability:"online",mode:"acquisto"},
  {id:2305,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Maxwell",price:"€219",desc:"Sedia girevole similpelle nera con base cromata",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/218493/sedia-da-ufficio-girevole-in-similpelle-nera-e-base-cromata-con-altezza-regolabile-maxwell-1.webp",availability:"online",mode:"acquisto"},
  {id:2306,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Caprilla White",price:"€139",desc:"Sedia girevole tessuto bianco con braccioli regolabili",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/118407/sedia-girevole-in-tessuto-bianco-caprilla-1.webp",availability:"online",mode:"acquisto"},
  {id:2307,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Kety",price:"€179",desc:"Sedia girevole con braccioli nera seduta imbottita",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/93721/sedia-girevole-con-braccioli-nera-kety-1.webp",availability:"online",mode:"acquisto"},
  {id:2308,brand:"IIT",category:"Ufficio",subcategory:"Sedie Ergonomiche",name:"Caprilla Grey",price:"€139",desc:"Sedia girevole in tessuto grigio ergonomica",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/118405/sedia-girevole-in-tessuto-grigio-caprilla-1.webp",availability:"online",mode:"acquisto"},

  // === MOBILI E COMPLEMENTI UFFICIO ===
  {id:2400,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Artik Bianca",price:"€129",desc:"Cassettiera con ruote 40cm 3 cassetti bianca",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/94431/cassettiera-con-ruote-40-cm-3-cassetti-bianca-artik-1.webp",availability:"online",mode:"acquisto"},
  {id:2401,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Lenox",price:"€289",desc:"Mobile multiuso 80x120h in legno bianco e rovere con serratura",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/138164/mobile-multiuso-80x120h-cm-in-legno-bianco-e-rovere-con-2-ante-e-serratura-lenox-1.webp",availability:"online",mode:"acquisto"},
  {id:2402,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Elvira",price:"€219",desc:"Cassettiera 60x101h con 3 cassetti in rovere bianco",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/105155/cassettiera-60x101-h-cm-con-3-cassetti-e-ripiano-in-legno-rovere-bianco-elvira-1.webp",availability:"online",mode:"acquisto"},
  {id:2403,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Canadian",price:"€245",desc:"Mobile multiuso 80x86h antracite opaco con 2 ante",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/191629/mobile-multiuso-80x86h-cm-antracite-opaco-con-2-ante-canadian-1.webp",availability:"online",mode:"acquisto"},
  {id:2404,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Latino 5",price:"€169",desc:"Cassettiera compatta 5 cassetti su ruote in metallo nero",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/76808/cassettiera-compatta-5-cassetti-e-ruote-metallo-nero-latino-1.webp",availability:"online",mode:"acquisto"},
  {id:2405,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Artik 60",price:"€149",desc:"Cassettiera in legno 60cm bianca",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/94435/cassettiera-in-legno-60-cm-bianca-artik-1.webp",availability:"online",mode:"acquisto"},
  {id:2406,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Artik Nera",price:"€129",desc:"Cassettiera con ruote 40cm 3 cassetti nera",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/94432/cassettiera-con-ruote-40-cm-3-cassetti-nera-artik-1.webp",availability:"online",mode:"acquisto"},
  {id:2407,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Latino 3",price:"€139",desc:"Cassettiera compatta 3 cassetti su ruote metallo nero",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/76806/cassettiera-compatta-3-cassetti-e-ruote-metallo-nero-latino-1.webp",availability:"online",mode:"acquisto"},
  {id:2408,brand:"INGENIA",category:"Ufficio",subcategory:"Mobili e Complementi",name:"Homely",price:"€185",desc:"Cassettiera 3 cassetti in rovere tartufo e bianco lucido",imgUrl:"https://assets.deghi.it/_p/aft/webp/350/51369/cassettiera-con-3-cassetti-finitura-rovere-tartufo-e-bianco-lucido-homely-1.webp",availability:"online",mode:"acquisto"},
];

function buildShopProducts() {
  return SHOP_PRODUCTS;
}


// ─── FORNITORI SHOP DATA ────────────────────────────────────────────────────
const SHOP_SUPPLIERS = [
  {id:"nardi",         name:"NARDI",         cat:"Arredo Outdoor",    color:"#2d5a27", img:"https://www.nardioutdoor.com/media/assets/nardi_logo_01.svg"},
  {id:"bizzotto",      name:"BIZZOTTO",      cat:"Complementi",       color:"#8b4513", img:"https://magazine.bizzotto.com/wp-content/uploads/2021/08/bizzotto.png"},
  {id:"target",        name:"TARGET",        cat:"Complementi",       color:"#c0392b", img:"https://www.gambassinarciso.it/foto/grandi/target-point-logo.png"},
  {id:"tempesta",      name:"TEMPESTA",      cat:"Zona Giorno",       color:"#2980b9", img:"https://tempestatavoli.it/wp-content/uploads/2018/08/Aggiungi-corpo-del-testo-1.png"},
  {id:"zamagna",       name:"ZAMAGNA",       cat:"Tavoli",            color:"#7f8c8d", img:"https://temptation.zamagna.it/wp-content/uploads/2021/09/logo-zamagna-1.png"},
  {id:"ciciriello",    name:"CICIRIELLO",    cat:"Complementi",       color:"#16a085", img:"https://staging.capodartehome.com/wp-content/uploads/2019/12/logo-ciciriello.png"},
  {id:"ideallux",      name:"IDEAL LUX",     cat:"Illuminazione",     color:"#d4a017", img:"https://arredamentibrambilla.com/images/brambilla/grafica/loghiaziende/white/ideallux.png"},
  {id:"lodes",         name:"LODES",         cat:"Illuminazione",     color:"#2c3e50", img:"https://cdn.prod.website-files.com/62142194645ba0175352e254/67fce8ff173f8036362d5805_67fce0ebff6e748a51bf4751_63ef0208136f38648b1a30c5_lodes-logo-1-e1592823113394.webp"},
  {id:"perenz",        name:"PERENZ",        cat:"Illuminazione",     color:"#8e44ad", img:"https://www.elemo.it/wp-content/uploads/2021/02/Perenz-Logo_.png"},
  {id:"ales",          name:"ALES",          cat:"Zona Giorno",       color:"#1a1210", img:"https://immagini.designbest.com/pictures/manufacturer-4299-150226.jpg"},
  {id:"ingenia",       name:"INGENIA",       cat:"Zona Notte",        color:"#2c3e50", img:"https://www.arredamentimanfredinirober.it/wp-content/uploads/2019/05/ingenia.jpg"},
  {id:"iit",           name:"IIT",           cat:"Zona Notte",        color:"#1a5276", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aj3sR2itA3gVYJhvpaLjh-humuh_KSxGbA&s"},
  {id:"laprimavera",   name:"LA PRIMAVERA",  cat:"Divani",            color:"#7dcea0", img:"https://www.arredalcasa.it/wp-content/uploads/2016/09/La-Primavera-logo.jpg"},
  {id:"laseggiola",    name:"LA SEGGIOLA",   cat:"Sedie",             color:"#b7950b", img:"https://img.edilportale.com/profile-image/L-S-Factory-srl-afb548e4-log1.gif"},
  {id:"maconi",        name:"MACONI",        cat:"Zona Giorno",       color:"#5d4037", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUP4UVq-Xg7Q-cSfPl_dgTlJvj9aV7fxyYQ&s"},
  {id:"suprema",       name:"SUPREMA",       cat:"Materassi",         color:"#1b5e20", img:"https://www.supremasrl.it/logo/LOGO-SUPREMA.png"},
  {id:"mtadormiria",   name:"MTA DORMIRIA",  cat:"Materassi",         color:"#1565c0", img:"https://mtamaterassi.it/wp-content/uploads/2023/05/Logo-Dormiria-blu.png"},
  {id:"sarmog",        name:"SARMOG",        cat:"Zona Notte",        color:"#4a148c", img:"https://www.eurobrico.com/media/0qndxwzc/progetto-senza-titolo-2026-01-05t123136080.png"},
  {id:"stones",        name:"STONES",        cat:"Complementi",       color:"#546e7a", img:"https://arredamentifb.it/images/2025/11/18/logo-stones-arredamentofb.jpg.png"},
  {id:"sitap",         name:"SITAP",         cat:"Tappeti",           color:"#bf360c", img:"https://egress.storeden.net/gallery/686fb560be7ea06714958e08"},
];

// Fake catalog products for each supplier
function buildSupplierProducts(supplierId) {
  const supCatMap = {
    nardi:"Tavoli & Sedie", bizzotto:"Complementi", target:"Complementi",
    tempesta:"Divani", zamagna:"Tavoli & Sedie", ciciriello:"Complementi",
    ideallux:"Illuminazione", lodes:"Illuminazione", perenz:"Illuminazione",
    ales:"Divani", ingenia:"Zona Notte", iit:"Zona Notte",
    laprimavera:"Divani", laseggiola:"Tavoli & Sedie", maconi:"Divani",
    suprema:"Materassi", mtadormiria:"Materassi", sarmog:"Zona Notte",
    stones:"Complementi", sitap:"Tavoli & Sedie",
  };
  // Fornitore dominante per categoria → prende tutti e 9 i prodotti
  const catDominant = {
    "Tavoli & Sedie":"nardi", "Complementi":"bizzotto", "Divani":"tempesta",
    "Illuminazione":"ideallux", "Zona Notte":"ingenia", "Materassi":"suprema",
  };
  const cat = supCatMap[supplierId];
  if(!cat) return [];
  const sup = SHOP_SUPPLIERS.find(s=>s.id===supplierId);
  if(!sup) return [];

  const catProds = SHOP_PRODUCTS.filter(p=>p.category===cat);
  const dominant = catDominant[cat];

  let myProds;
  if(supplierId === dominant) {
    myProds = catProds; // tutti e 9
  } else {
    const others = Object.entries(supCatMap).filter(([id,c])=>c===cat && id!==dominant).map(([id])=>id);
    const myIdx = others.indexOf(supplierId);
    if(myIdx < 0) { myProds = catProds.slice(0, 3); }
    else { myProds = catProds.filter((_,i)=>i%others.length===myIdx); }
    if(myProds.length === 0) myProds = catProds.slice(0, 2);
  }

  return myProds.map(p=>({...p, brand:sup.name}));
}


function SearchFornitore({ prods, onFilter }) {
  const [q, setQ] = useState("");
  const handleChange = (e) => {
    setQ(e.target.value);
    if(onFilter) onFilter(e.target.value);
  };
  const clear = () => { setQ(""); if(onFilter) onFilter(""); };
  return (
    <div style={{display:"flex",alignItems:"center",gap:8,background:"white",
      border:"1.5px solid #ece7e0",borderRadius:8,padding:"6px 12px",
      minWidth:200,transition:"border-color .15s"}}
      onFocus={e=>e.currentTarget.style.borderColor="#1a1210"}
      onBlur={e=>e.currentTarget.style.borderColor="#ece7e0"}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9a8e88" strokeWidth="2" style={{flexShrink:0}}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input value={q} onChange={handleChange}
        placeholder="Cerca prodotti..."
        style={{border:"none",outline:"none",fontSize:12,fontFamily:"inherit",
          color:"#1a1210",background:"transparent",width:"100%"}}/>
      {q && <button onClick={clear} style={{background:"none",border:"none",cursor:"pointer",
        color:"#9a8e88",fontSize:14,padding:0,lineHeight:1,display:"flex",alignItems:"center"}}>✕</button>}
    </div>
  );
}

function FornitoreDetailPage({ supplierId, onBack, setPage }) {
  const { isMobile } = useBreakpoint();
  const sup = SHOP_SUPPLIERS.find(s=>s.id===supplierId);
  const prods = useMemo(()=>buildSupplierProducts(supplierId),[supplierId]);
  const subs = useMemo(()=>[...new Set(prods.map(p=>p.subcategory))],[prods]);
  const [activeSub, setActiveSub] = useState("Tutti");
  const [hov, setHov] = useState(null);
  const [searchQ, setSearchQ] = useState("");
  const [supPage, setSupPage] = useState(1);
  const SUP_PAGE_SIZE = 9;
  if(!sup) return null;
  const filtered = prods.filter(p=>{
    if(activeSub!=="Tutti" && p.subcategory!==activeSub) return false;
    if(searchQ.trim()){const q=searchQ.toLowerCase();if(!`${p.name} ${p.subcategory} ${p.desc||""}`.toLowerCase().includes(q))return false;}
    return true;
  });
  const supTotalPages = Math.ceil(filtered.length / SUP_PAGE_SIZE);
  const visible = filtered.slice((supPage-1)*SUP_PAGE_SIZE, supPage*SUP_PAGE_SIZE);

  return (
    <div style={{background:"white",minHeight:"100vh"}}>
      {/* Header fornitore */}
      <div style={{position:"relative",height:isMobile?180:260,overflow:"hidden"}}>
        <img src={prods[0]?.imgUrl||"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80"}
          alt={sup.name}
          style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(.45)"}}
          onError={e=>{e.target.style.display="none";}}/>
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0"}}>
          <div style={{maxWidth:1200,margin:"0 auto",width:"100%",padding:isMobile?"16px 24px":"24px 48px"}}>
            <button onClick={onBack}
              style={{background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.3)",
                borderRadius:7,padding:"6px 14px",color:"white",fontSize:12,cursor:"pointer",fontFamily:"inherit",
                display:"flex",alignItems:"center",gap:6,backdropFilter:"blur(4px)"}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              Tutti i fornitori
            </button>
          </div>
          <div style={{maxWidth:1200,margin:"0 auto",width:"100%",padding:isMobile?"16px 24px":"24px 48px"}}>
            <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
              <div style={{width:80,height:50,background:"rgba(255,255,255,.15)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",padding:6,overflow:"hidden"}}>
                <img src={sup.img} alt={sup.name}
                  style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"brightness(0) invert(1)"}}
                  onError={e=>{e.target.style.display="none";e.target.parentNode.innerHTML='<span style="font-size:9px;font-weight:900;color:white;padding:0 6px">'+sup.name+'</span>';}}/>
              </div>
              <div>
                <div style={{fontSize:isMobile?24:38,fontWeight:700,color:"white",fontFamily:"Georgia,serif"}}>{sup.name}</div>
                <div style={{fontSize:13,color:"rgba(255,255,255,.65)",marginTop:4}}>{sup.cat} · {prods.length} prodotti</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtri sub + bottone torna */}
      <div style={{background:"#faf8f5",borderBottom:"1px solid #ece7e0",padding:"12px 32px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",flex:1}}>
          {["Tutti",...subs].map(s=>(
            <button key={s} onClick={()=>setActiveSub(s)}
              style={{padding:"6px 14px",borderRadius:999,fontSize:11.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",
                border:"1.5px solid",transition:"all .13s",
                borderColor:activeSub===s?"#1a1210":"#ddd7d0",
                background:activeSub===s?"#1a1210":"white",
                color:activeSub===s?"white":"#5a5248"}}>
              {s}
            </button>
          ))}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
            {/* Barra ricerca prodotti fornitore */}
            <SearchFornitore prods={prods} onFilter={setSearchQ}/>
            <button
              onClick={()=>{ if(setPage) setPage("shop"); }}
              style={{padding:"8px 16px",borderRadius:7,border:"1.5px solid #1a1210",
                background:"#1a1210",color:"white",fontSize:12,fontWeight:700,
                cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap",
                display:"flex",alignItems:"center",gap:6,transition:"all .15s",flexShrink:0}}
              onMouseEnter={e=>{e.currentTarget.style.background="#3d2f2b";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#1a1210";}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Torna All&apos;E-Commerce
            </button>
          </div>
        </div>
      </div>

      {/* Griglia prodotti */}
      <div style={{maxWidth:1200,margin:"0 auto",padding:isMobile?"16px":"32px 32px"}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:20,alignItems:"stretch"}}>
          {visible.map((p,i)=>(
            <div key={p.id}
              style={{background:"white",borderRadius:10,border:"1px solid #ece7e0",overflow:"hidden",
                display:"flex",flexDirection:"column",height:"100%",
                transition:"box-shadow .2s,transform .2s",cursor:"pointer",
                boxShadow:hov===i?"0 12px 32px rgba(0,0,0,.1)":"0 2px 6px rgba(0,0,0,.04)",
                transform:hov===i?"translateY(-3px)":"none"}}
              onMouseEnter={()=>setHov(i)}
              onMouseLeave={()=>setHov(null)}>
              <div style={{height:180,overflow:"hidden",background:"#faf8f5"}}>
                <img src={p.imgUrl} alt={p.name}
                  style={{width:"100%",height:"100%",objectFit:"cover",
                    transform:hov===i?"scale(1.05)":"scale(1)",transition:"transform .4s"}}
                  onError={e=>{e.target.src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=70";}}/>
              </div>
              <div style={{padding:"12px 14px 16px",display:"flex",flexDirection:"column",flex:1}}>
                <div style={{fontSize:9.5,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"#9a8e88",marginBottom:4,height:16,overflow:"hidden"}}>{p.subcategory}</div>
                <div style={{fontSize:13,fontWeight:700,color:"#1a1210",marginBottom:4,lineHeight:1.4,height:36,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{p.name}</div>
                <div style={{fontSize:11.5,color:"#9a8e88",lineHeight:1.5,marginBottom:10,height:34,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{p.desc}</div>
                <div style={{flex:1}}/>
                <div style={{fontSize:17,fontWeight:800,color:"#1a1210",marginBottom:12}}>{p.price}</div>
                <button style={{width:"100%",padding:"8px",borderRadius:7,border:"1.5px solid #1a1210",
                  background:"#1a1210",color:"white",fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                  Aggiungi al carrello
                </button>
              </div>
            </div>
          ))}
        {/* Paginazione */}
        {supTotalPages > 1 && (
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:28,flexWrap:"wrap"}}>
            <button onClick={()=>setSupPage(p=>Math.max(1,p-1))}
              disabled={supPage===1}
              style={{padding:"7px 14px",borderRadius:7,border:"1.5px solid #ece7e0",background:supPage===1?"#faf8f5":"white",
                color:supPage===1?"#c8b89a":"#1a1210",cursor:supPage===1?"default":"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600}}>
              ‹ Prec
            </button>
            {[...Array(supTotalPages)].map((_,i)=>(
              <button key={i+1} onClick={()=>setSupPage(i+1)}
                style={{width:32,height:32,borderRadius:7,border:"1.5px solid",fontFamily:"inherit",fontSize:12,fontWeight:700,cursor:"pointer",
                  borderColor:supPage===i+1?"#1a1210":"#ece7e0",
                  background:supPage===i+1?"#1a1210":"white",
                  color:supPage===i+1?"white":"#1a1210"}}>
                {i+1}
              </button>
            ))}
            <button onClick={()=>setSupPage(p=>Math.min(supTotalPages,p+1))}
              disabled={supPage===supTotalPages}
              style={{padding:"7px 14px",borderRadius:7,border:"1.5px solid #ece7e0",background:supPage===supTotalPages?"#faf8f5":"white",
                color:supPage===supTotalPages?"#c8b89a":"#1a1210",cursor:supPage===supTotalPages?"default":"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600}}>
              Succ ›
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

// ─── FORNITORI PAGE (lista) ─────────────────────────────────────────────────
function FornitoriPageDirect({ supplierId, setPage }) {
  const [active, setActive] = React.useState(supplierId);
  if(active) return <FornitoreDetailPage supplierId={active} onBack={()=>setPage("fornitori")} setPage={setPage}/>;
  return <FornitoriPage setPage={setPage}/>;
}

function FornitoriPage({ setPage }) {
  const { isMobile } = useBreakpoint();
  const [activeSupplier, setActiveSupplier] = useState(null);
  const [hov, setHov] = useState(null);

  if(activeSupplier) return <FornitoreDetailPage supplierId={activeSupplier} onBack={()=>setActiveSupplier(null)} setPage={setPage}/>;

  return (
    <div style={{background:"white",minHeight:"100vh"}}>
      {/* Hero */}
      <div style={{position:"relative",height:isMobile?160:220,overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80"
          alt="Fornitori"
          style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(.45)"}}
          onError={e=>{e.target.style.display="none";}}/>
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:isMobile?"0 24px":"0 48px"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"rgba(255,255,255,.6)",marginBottom:8}}>Asta Del Mobile</div>
          <h1 style={{fontSize:isMobile?28:44,fontWeight:700,color:"white",margin:0,fontFamily:"Georgia,serif"}}>I Nostri Fornitori</h1>
          <div style={{fontSize:13,color:"rgba(255,255,255,.6)",marginTop:8}}>Partner selezionati · {SHOP_SUPPLIERS.length} brand · Made in Italy</div>
        </div>
      </div>

      {/* Griglia fornitori */}
      <div style={{maxWidth:1200,margin:"0 auto",padding:isMobile?"16px":"40px 32px"}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(4,1fr)",gap:20}}>
          {SHOP_SUPPLIERS.map((s,i)=>(
            <div key={s.id}
              style={{background:"white",borderRadius:12,border:"1.5px solid",
                borderColor:hov===i?"#1a1210":"#ece7e0",
                padding:"30px 16px",cursor:"pointer",
                display:"flex",flexDirection:"column",alignItems:"center",gap:10,
                transition:"all .18s",
                boxShadow:hov===i?"0 8px 24px rgba(0,0,0,.1)":"none",
                transform:hov===i?"translateY(-3px)":"none"}}
              onMouseEnter={()=>setHov(i)}
              onMouseLeave={()=>setHov(null)}
              onClick={()=>setActiveSupplier(s.id)}>
              {/* Logo box */}
              <div style={{width:80,height:50,borderRadius:7,background:"white",border:"1px solid #ece7e0",
                display:"flex",alignItems:"center",justifyContent:"center",padding:6,overflow:"hidden"}}>
                <img src={s.img} alt={s.name}
                  style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}
                  onError={e=>{e.target.style.display="none";e.target.parentNode.style.background=s.color;e.target.parentNode.innerHTML='<span style="font-size:8px;font-weight:900;color:white;padding:0 6px;text-align:center">'+s.name+'</span>';}}/>
              </div>
              {/* Nome */}
              <div style={{fontSize:12,fontWeight:700,color:"#1a1210",textAlign:"center",letterSpacing:".02em"}}>{s.name}</div>
              {/* Categoria */}
              <div style={{fontSize:10,color:"#9a8e88",textAlign:"center"}}>{s.cat}</div>
              {/* Freccia */}
              <div style={{marginTop:4,opacity:hov===i?1:0,transition:"opacity .15s"}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1210" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ─── FOOTER ────────────────────────────────
function Footer({ setPage }) {
  const { isMobile } = useBreakpoint();
  return (
    <footer style={{background:"#1a1210",color:"#a89e98",padding:isMobile?"40px 16px 32px":"56px 64px 40px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"2fr 1fr 2fr",gap:isMobile?24:40,marginBottom:40}}>
          <div style={{gridColumn:isMobile?"1/3":"1"}}>
            <img src={IMGS.logo_asta} alt="Asta del Mobile"
              style={{height:36,width:"auto",objectFit:"contain",marginBottom:14,filter:"brightness(0) invert(1)"}}/>
            <p style={{fontSize:13,lineHeight:1.85,maxWidth:280,margin:"0 0 16px"}}>Brand italiani selezionati, tre fasce di prezzo, progettazione e montaggio inclusi.</p>
          </div>
          {/* Colonna Prodotti */}
          {[{title:"Prodotti",links:[["Catalogo","catalog"],["Promo bloccate","promo"],["Acquistabile Online","shop"],["Richiedi Appuntamento","videocall"]]}].map(col=>(
            <div key={col.title}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#6b5f5b",marginBottom:14}}>{col.title}</div>
              {col.links.map(([l,p])=>(
                <div key={l} onClick={()=>setPage(p)} style={{fontSize:13,marginBottom:10,cursor:"pointer",color:"#a89e98"}}
                  onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#a89e98'}>{l}</div>
              ))}
            </div>
          ))}
          {/* Colonna Servizi + Info affiancate */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:isMobile?16:32}}>
            {[
              {title:"Servizi",links:[["Progettazione","servizi"],["Consegna","servizi"],["Montaggio","servizi"],["Finanziamento","servizi"]]},
              {title:"Info",links:[["FAQ","faq"],["Il Genio Risponde","faq"],["Richiedi Assistenza","videocall"],["Progetti realizzati","progetti"],["Preventivo","videocall"],["Contatti","videocall"]]}
            ].map(col=>(
              <div key={col.title}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#6b5f5b",marginBottom:14}}>{col.title}</div>
                {col.links.map(([l,p])=>(
                  <div key={l} onClick={()=>setPage(p)} style={{fontSize:13,marginBottom:10,cursor:"pointer",color:"#a89e98"}}
                    onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#a89e98'}>{l}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* ── TRUSTPILOT WIDGET ─── */}
        <div style={{
          background:"#1e1614",border:"1px solid #2b2321",borderRadius:12,
          padding:isMobile?"24px 16px":"28px 36px",marginBottom:32
        }}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16,marginBottom:20}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              {/* Logo Trustpilot stilizzato */}
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#00b67a"/></svg>
                <span style={{fontSize:16,fontWeight:700,color:"white",letterSpacing:".01em"}}>Trustpilot</span>
              </div>
              <div style={{display:"flex",gap:3}}>
                {[...Array(5)].map((_,i)=>(
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#00b67a"/></svg>
                ))}
              </div>
              <span style={{fontSize:15,fontWeight:700,color:"white"}}>4.8</span>
              <span style={{fontSize:12,color:"#7a6e68"}}>· 324 recensioni verificate</span>
            </div>
            <a href="https://www.trustpilot.com/review/astadelmobile.it" target="_blank" rel="noopener noreferrer"
              style={{fontSize:12,color:"#00b67a",textDecoration:"none",borderBottom:"1px solid #00b67a44",paddingBottom:1}}>
              Leggi tutte le recensioni →
            </a>
          </div>
          {/* Recensioni */}
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:12}}>
            {[
              {name:"Marco T.",city:"Genova",date:"Febbraio 2025",stars:5,text:"Acquistato il soggiorno completo. Personale competente, prezzi imbattibili e montaggio perfetto in una giornata. Tornerò sicuramente."},
              {name:"Silvia R.",city:"Torino",date:"Gennaio 2025",stars:5,text:"Ho arredato tutta la casa con Asta del Mobile. Il consulente ci ha seguiti passo passo, dal progetto alla consegna. 10/10!"},
              {name:"Luca M.",city:"Savona",date:"Marzo 2025",stars:4,text:"Ottimo rapporto qualità-prezzo. La cucina Net Cucine è esattamente come da catalogo. Piccolo ritardo sulla consegna, ma tutto risolto."},
            ].map((r,i)=>(
              <div key={i} style={{background:"#251e1c",borderRadius:8,padding:"14px 16px"}}>
                <div style={{display:"flex",gap:2,marginBottom:8}}>
                  {[...Array(r.stars)].map((_,j)=>(
                    <svg key={j} width="13" height="13" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#00b67a"/></svg>
                  ))}
                  {r.stars<5 && <svg width="13" height="13" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#444"/></svg>}
                </div>
                <p style={{fontSize:12,lineHeight:1.7,color:"#c0b4b0",margin:"0 0 10px",fontStyle:"italic"}}>"{r.text}"</p>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#6b5f5b"}}>
                  <span style={{fontWeight:600,color:"#a89e98"}}>{r.name} · {r.city}</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
    </footer>
  );
}


// ─── FALEGNAMERIA ──────────────────────────
const FALEGNAMI_PRODUCTS = [
  { id:"f1", zona:"tavoliSedie", subcategory:"Tavoli", name:"Tavolo Rustico in Rovere", desc:"Piano in rovere massello spazzolato, gambe tornite a mano. Dimensioni personalizzabili fino a 300cm.", price:"€1.890", oldPrice:"€2.480", discount:"24", img:"https://cdn.mobilifiver.com/eu/media/catalog/product/cache/091412bd41d87726fd23ff548afcc002/T/A/TAVICTWOT_amb_06_web_4fdc.jpeg" },
  { id:"f2", zona:"giornoFal", subcategory:"Madie e Credenze", name:"Credenza Classica in Noce", desc:"Mobile da pranzo in noce nazionale, ante intagliate, interno con ripiani regolabili.", price:"€2.340", oldPrice:"€3.100", discount:"25", img:"https://www.mobilimirandolanec.it/?attachment_id=5162" },
  { id:"f3", zona:"giornoFal", subcategory:"Soggiorni", name:"Libreria a Muro su Misura", desc:"Sistema modulare in abete naturale con finitura a cera. Altezza fino a 280cm.", price:"€1.450", oldPrice:"€1.900", discount:"24", img:"https://www.outletarredamento.it/images/soggiorni/libreria-libreria-stile-impero-in-massello-di-noce-scontata-del-30-artigianale-con-un-ribasso-del-30_n1_441346.webp" },
  { id:"f4", zona:"notte", subcategory:"Armadi", name:"Armadio Scorrevole in Castagno", desc:"Ante in castagno massello con specchio integrato, interni personalizzabili.", price:"€3.200", oldPrice:"€4.100", discount:"22", img:"https://www.ideastile.it/image/cache/catalog/data/ANTN890_1-800x800.jpg" },
  { id:"f5", zona:"notte", subcategory:"Armadi", name:"Cassettiera Artigianale", desc:"Struttura in pioppo con cassetti in legno massello e guida a rullino in ottone.", price:"€890", oldPrice:"€1.150", discount:"23", img:"https://www.ideastile.it/image/cache/catalog/data/LV970-A_4-800x800.jpg" },
  { id:"f6", zona:"giornoFal", subcategory:"Soggiorni", name:"Cucina in Legno Massello", desc:"Cucina su misura in rovere naturale, top in granito, integrazione elettrodomestici inclusa.", price:"€8.900", oldPrice:"€11.200", discount:"21", img:"https://zulianiarredamenti.com/cms_default/images/gallery/11/66.jpg" },
  { id:"f7", zona:"notte", subcategory:"Camere", name:"Camera Artigianale", desc:"Rivestimento pareti in noce con pannelli a specchio. Realizzazione completamente personalizzata.", price:"€2.100", oldPrice:"€2.700", discount:"22", img:"https://www.mottesmobili.com/img/1384/camera-paola_oit_110506.webp" },
  { id:"f8", zona:"giornoFal", subcategory:"Soggiorni", name:"Soggiorno Artigianale", desc:"Porta battente in ciliegio con incisioni decorative, maniglia in ottone. Disponibile in tutti gli standard.", price:"€680", oldPrice:"€880", discount:"23", img:"https://i.ebayimg.com/images/g/~7AAAOSwTShil2pm/s-l400.jpg" },
  { id:"f9", zona:"tavoliSedie", subcategory:"Tavoli", name:"Scrivania Artigianale", desc:"Piano in olmo massello con gambe in ferro battuto. Cassettiera laterale inclusa su richiesta.", price:"€1.200", oldPrice:"€1.550", discount:"23", img:"https://www.mobili2g.com/32047/mobili-2g-scrivania-classica-in-legno-3-cassetti-crema-130x70x80.jpg" },
  { id:"f10", zona:"giornoFal", subcategory:"Madie e Credenze", name:"Madia Artigianale", desc:"Madia in rovere con top nero e 4 ante, intarsi geometrici. Struttura robusta e design contemporaneo.", price:"€1.650", oldPrice:"€2.100", discount:"21", img:"https://assets.deghi.it/_p/aft/webp/originali/madia-180x80h-cm-top-nero-e-4-ante-effetto-rovere-con-intarsi-geometrici-naoko-1.jpeg" },
];

const FALEGNAM_FORM_FIELDS = [
  { key:"nome", label:"Nome e Cognome", type:"text", placeholder:"Mario Rossi" },
  { key:"email", label:"Email", type:"email", placeholder:"mario@email.it" },
  { key:"tel", label:"Telefono", type:"tel", placeholder:"+39 333 000 0000" },
  { key:"ambiente", label:"Ambiente da arredare", type:"select", opts:["Cucina","Soggiorno","Camera da letto","Studio / Ufficio","Bagno","Ingresso","Altro"] },
  { key:"desc", label:"Descrivi il tuo progetto", type:"textarea", placeholder:"Dimensioni approssimative, stile desiderato, materiali preferiti, budget indicativo..." },
];


function FalegnaCard({ p, onOpen }) {
  const [hov,setHov]=useState(false);
  const discPct = parseInt(p.discount)||0;
  const goldColor = "#e0bf3a";
  return (
    <div style={{
      display:"grid", gridTemplateColumns:"65% 35%",
      borderRadius:14, overflow:"hidden", cursor:"pointer",
      border:"1.5px solid #ece7e0",
      background:"white", position:"relative",
      boxShadow:hov?"0 10px 36px rgba(224,191,58,.25)":"0 2px 8px rgba(0,0,0,.04)",
      transform:hov?"translateY(-2px)":"none",
      transition:"all .22s", minHeight:300,
    }}
      onClick={onOpen}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>

      {/* ── COLONNA SX: immagine ── */}
      <div style={{position:"relative",overflow:"hidden"}}>
        {/* Ribbon sconto */}
        {discPct>0 && (
          <div style={{position:"absolute",top:14,left:-2,zIndex:10,background:"linear-gradient(to bottom, #ba1e1e 0%, #8a1515 100%)",color:"white",
            fontSize:11,fontWeight:900,padding:"4px 14px 4px 8px",borderRadius:"0 999px 999px 0",
            boxShadow:"0 2px 8px rgba(231,76,60,.4)"}}>−{discPct}%</div>
        )}
        <img src={p.img} alt={p.name}
          style={{width:"100%",height:"100%",objectFit:"cover",display:"block",
            transform:hov?"scale(1.04)":"scale(1)",transition:"transform .4s"}}/>
      </div>

      {/* ── COLONNA DX: info ── */}
      <div style={{display:"flex",flexDirection:"column",borderLeft:"1.5px solid #ece7e0",
        position:"relative",overflow:"hidden"}}>
        {/* Barra gold in cima con sfumatura */}
        <div style={{
          padding:"14px 16px 12px",
          background:`linear-gradient(to bottom, ${goldColor}ad 0%, ${goldColor}80 55%, ${goldColor}59 100%), #1a1210`,
          borderBottom:`1.5px solid ${goldColor}8c`,
        }}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center",gap:5}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:"rgba(255,255,255,.8)",flexShrink:0,display:"inline-block"}}/>
              <span style={{fontSize:10,fontWeight:700,color:"white",letterSpacing:".05em",textTransform:"uppercase"}}>Artigianale</span>
            </div>
          </div>
        </div>

        <div style={{padding:"10px 16px 16px",flex:1,display:"flex",flexDirection:"column"}}>
          {/* Tipo legno */}
          <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a07828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            <span style={{fontSize:10,fontWeight:700,color:"#9a8e88",letterSpacing:".06em",textTransform:"uppercase"}}>Legno massello</span>
          </div>
          {/* Nome */}
          <div style={{fontWeight:700,fontSize:14,color:"#1a1210",lineHeight:1.35,marginBottom:5}}>{p.name}</div>
          {/* Categoria */}
          <div style={{fontSize:11,color:"#b0a898",marginBottom:8}}>{p.subcategory||p.category}</div>
          {/* Desc */}
          <p style={{fontSize:12,color:"#6b5f5b",lineHeight:1.6,flex:1,
            display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",marginBottom:12}}>
            {p.desc}
          </p>
          {/* Prezzo */}
          <div style={{display:"flex",flexDirection:"column",gap:2,marginBottom:12}}>
            <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
              {p.oldPrice && <span style={{textDecoration:"line-through",color:"#bbb",fontSize:12}}>{p.oldPrice}</span>}
              {discPct>0 && <span style={{fontSize:9,fontWeight:800,background:"#e74c3c",color:"white",padding:"1px 5px",borderRadius:999}}>-{discPct}%</span>}
            </div>
            <span style={{fontSize:19,fontWeight:800,color:"#1a1210",lineHeight:1}}>{p.price}</span>
          </div>
          {/* CTA */}
          <button style={{...mkBtn("dark",true),padding:"9px 10px",fontSize:12,marginTop:"auto"}}>
            Scopri →
          </button>
        </div>
      </div>
    </div>
  );
}

function FalegnaRequestForm() {
  const { isMobile } = useBreakpoint();
  const [form,setForm]=useState({nome:"",email:"",tel:"",ambiente:"Cucina",desc:""});
  const [sent,setSent]=useState(false);
  const set = k => e => setForm(f=>({...f,[k]:e.target.value}));
  return (
    <div style={{background:"white",borderRadius:16,border:"1.5px solid #ece7e0",overflow:"hidden",boxShadow:"0 4px 24px #0001"}}>
      <div style={{background:"linear-gradient(135deg,#2c1a0e,#5c3518)",padding:"28px 32px"}}>
        <div style={{...TAG,color:"#c8b89a",marginBottom:8}}>Progetto su misura</div>
        <h3 style={{fontSize:isMobile?20:26,fontWeight:700,color:"white",margin:"0 0 8px",fontFamily:"Georgia,serif"}}>
          Richiedi il tuo mobile artigianale
        </h3>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:13,margin:0,lineHeight:1.65}}>
          Compila il modulo e il nostro falegname ti contatterà entro 24 ore per un preventivo gratuito.
        </p>
      </div>
      {sent ? (
        <div style={{padding:"48px 32px",textAlign:"center"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:"#f0f8f0",border:"2px solid #27ae60",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h4 style={{fontSize:20,fontWeight:700,margin:"0 0 8px",color:"#1a1210",fontFamily:"Georgia,serif"}}>Richiesta inviata!</h4>
          <p style={{color:"#6b5f5b",fontSize:14,lineHeight:1.7}}>Il nostro falegname ti contatterà entro 24 ore con un preventivo personalizzato.</p>
        </div>
      ) : (
        <div style={{padding:"28px 32px"}}>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:16}}>
            {FALEGNAM_FORM_FIELDS.filter(f=>f.type!=="textarea").map(f=>(
              <div key={f.key} style={f.key==="ambiente"?{gridColumn:isMobile?"1":"1/3"}:{}}>
                <div style={{...TAG,marginBottom:6}}>{f.label}</div>
                {f.type==="select" ? (
                  <select value={form[f.key]} onChange={set(f.key)} style={sel}>{f.opts.map(o=><option key={o}>{o}</option>)}</select>
                ) : (
                  <input type={f.type} value={form[f.key]} onChange={set(f.key)} placeholder={f.placeholder} style={inp}/>
                )}
              </div>
            ))}
            <div style={{gridColumn:isMobile?"1":"1/3"}}>
              <div style={{...TAG,marginBottom:6}}>Descrivi il tuo progetto</div>
              <textarea value={form.desc} onChange={set("desc")}
                placeholder="Dimensioni approssimative, stile desiderato, materiali preferiti, budget indicativo..."
                style={{...inp,minHeight:120,resize:"vertical",lineHeight:1.6}}/>
            </div>
          </div>
          <div style={{marginTop:20,display:"flex",justifyContent:"flex-end"}}>
            <button onClick={()=>{ if(form.nome&&form.email) setSent(true); }}
              style={{...mkBtn("dark"),padding:"13px 32px",fontSize:15}}>
              Invia richiesta →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FalegnaProcess() {
  const { isMobile, isTablet } = useBreakpoint();
  const steps = [
    { num:"01", title:"Consulenza gratuita", desc:"Ci racconti il tuo progetto. Analizziamo spazio, stile e budget per trovare la soluzione ideale.", ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
    { num:"02", title:"Progetto e preventivo", desc:"Il falegname elabora il progetto tecnico e un preventivo dettagliato entro 48 ore.", ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
    { num:"03", title:"Lavorazione in bottega", desc:"Ogni pezzo viene lavorato a mano nella nostra falegnameria usando solo legno massello certificato.", ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
    { num:"04", title:"Consegna e montaggio", desc:"Consegniamo e installiamo il mobile direttamente a casa tua. Garanzia 10 anni inclusa.", ico:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  ];
  return (
    <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",gap:20}}>
      {steps.map((s,i)=>(
        <div key={i} style={{...cardS,padding:"24px 20px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:16,right:16,fontSize:36,fontWeight:900,color:"rgba(92,53,24,.08)",lineHeight:1,fontFamily:"Georgia,serif"}}>{s.num}</div>
          <div style={{width:44,height:44,borderRadius:10,background:"#1a1210",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
            {s.ico}
          </div>
          <div style={{fontWeight:700,fontSize:15,color:"#1a1210",marginBottom:8}}>{s.title}</div>
          <p style={{fontSize:13,color:"#6b5f5b",lineHeight:1.7,margin:0}}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function FalegnaneriaPage({ setPage, openProduct }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [falZona, setFalZona] = useState("all");
  const [falSub,  setFalSub]  = useState("all");
  const formRef = useRef(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior:"smooth", block:"start" });
  };
  return (
    <div>
      {/* HERO */}
      <div style={{
        background:"linear-gradient(135deg,#1a0e08 0%,#2c1a0e 50%,#5c3518 100%)",
        padding:isMobile?"52px 20px 48px":"80px 64px",position:"relative",overflow:"hidden"
      }}>
        <div style={{position:"absolute",top:-60,right:-60,width:400,height:400,borderRadius:"50%",background:"rgba(200,184,154,.06)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:-80,left:40,width:300,height:300,borderRadius:"50%",background:"rgba(92,53,24,.2)",pointerEvents:"none"}}/>
        <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{...TAG,color:"#c8b89a",marginBottom:14}}>Artigianato del legno</div>
          <h1 style={{fontSize:isMobile?32:58,fontWeight:700,color:"white",margin:"0 0 20px",fontFamily:"Georgia,serif",letterSpacing:"-.03em",lineHeight:1.06,maxWidth:700}}>
            La Nostra Falegnameria
          </h1>
          <p style={{color:"rgba(255,255,255,.7)",fontSize:isMobile?14:17,lineHeight:1.8,maxWidth:560,margin:"0 0 32px"}}>
            Legno massello, lavorazione artigianale, dimensioni su misura. Ogni mobile è un pezzo unico realizzato dal nostro falegname nella sua bottega.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <div style={{display:"flex",alignItems:"center",gap:16,padding:"0 8px"}}>
              {[
                {k:"wood",    t:"Legno certificato",  ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.5"/><path d="M9.5 4.75c1 1.5 3 3 4.5 3.5-1.5-2-2.5-3.5-4.5-3.5z"/><path d="M3 11.5c2.5-.5 7 .5 9 2"/></svg>},
                {k:"craft",   t:"100% artigianale",   ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>},
                {k:"measure", t:"Su misura",          ico:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/></svg>},
              ].map(({k,t,ico})=>(
                <div key={k} style={{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"rgba(255,255,255,.7)"}}>
                  {ico}<span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO BOX FALEGNAMERIA */}
      <Sec bg="#faf8f5">
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?32:56,alignItems:"center"}}>
          {/* Video */}
          <div style={{borderRadius:16,overflow:"hidden",position:"relative",
            boxShadow:"0 8px 32px rgba(0,0,0,.12)",
            background:"#1a0e08",
            aspectRatio:"16/9",
          }}>
            {/* Placeholder video: sostituire src con URL reale del video */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/EVLoSuyN1J0?si=-GeJr_NLpKJNguwT"
              title="La nostra falegnameria al lavoro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{display:"block",width:"100%",height:"100%",position:"absolute",inset:0}}
            />
          </div>
          {/* Testo */}
          <div>
            <div style={{...TAG,color:"#c8b89a",marginBottom:12}}>La nostra bottega</div>
            <h2 style={{fontSize:isMobile?24:32,fontWeight:700,color:"#1a1210",margin:"0 0 16px",fontFamily:"Georgia,serif",lineHeight:1.2}}>
              Il legno prende forma nelle nostre mani
            </h2>
            <p style={{fontSize:14,color:"#5a4e4a",lineHeight:1.85,marginBottom:20}}>
              Ogni mobile che realizziamo nasce da un tronco selezionato e passa attraverso le mani del nostro falegname. Dalla piallatura alla finitura, ogni passaggio è fatto con cura artigianale che non ha paragoni con la produzione industriale.
            </p>
            <p style={{fontSize:14,color:"#5a4e4a",lineHeight:1.85,marginBottom:24}}>
              Guardate come lavoriamo: questo breve video mostra il processo che porta dal legno grezzo al mobile finito, pronto per entrare nella vostra casa.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[
                ["Selezione del legno massello certificato FSC"],
                ["Lavorazione artigianale con strumenti tradizionali"],
                ["Finitura a mano con oli e cere naturali"],
                ["Controllo qualità prima della consegna"],
              ].map(([t])=>(
                <div key={t} style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:"#e0bf3a",flexShrink:0}}/>
                  <span style={{fontSize:13,color:"#3d302e"}}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* COME LAVORIAMO */}
      <Sec bg="white">
        <SH label="Il processo" title="Dal progetto al tuo salotto" sub="Quattro passaggi per trasformare un'idea in un mobile artigianale unico." isMobile={isMobile}/>
        <FalegnaProcess/>
      </Sec>

      {/* CATALOGO FALEGNAME FILTRATO */}
      <Sec bg="#faf8f5">
        <SH label="Catalogo artigianale" title="I nostri pezzi in legno massello" sub="Ogni articolo può essere personalizzato nelle dimensioni, nella finitura e nei dettagli. Prezzi indicativi — contattaci per un preventivo preciso." isMobile={isMobile}/>

        {/* Bottoni zona */}
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
          {[
            {k:"all",       l:"Tutti"},
            {k:"giornoFal", l:"Zona Giorno"},
            {k:"notte",     l:"Zona Notte"},
            {k:"tavoliSedie",l:"Tavoli e Sedie"},
          ].map(z=>(
            <button key={z.k} onClick={()=>{setFalZona(z.k);setFalSub("all");}}
              style={{padding:"7px 16px",borderRadius:999,fontSize:13,fontWeight:700,cursor:"pointer",
                border:"1.5px solid",fontFamily:"inherit",transition:"all .15s",
                borderColor:falZona===z.k?"#1a1210":"#ddd7d0",
                background:falZona===z.k?"#1a1210":"white",
                color:falZona===z.k?"white":"#7a6e68"}}>
              {z.l}
            </button>
          ))}
        </div>

        {/* Sotto-filtri contestuali */}
        {(()=>{
          const SUBS = {
            giornoFal:   [{v:"all",l:"Tutti"},{v:"Soggiorni",l:"Soggiorni"},{v:"Madie e Credenze",l:"Madie e Credenze"}],
            notte:       [{v:"all",l:"Tutti"},{v:"Camere",l:"Camere"},{v:"Letti",l:"Letti"},{v:"Armadi",l:"Armadi"}],
            tavoliSedie: [{v:"all",l:"Tutti"},{v:"Tavoli",l:"Tavoli"},{v:"Sedie",l:"Sedie"}],
          };
          const subs = SUBS[falZona];
          if(!subs) return null;
          return (
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20}}>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"#9a8e88",alignSelf:"center",marginRight:4}}>Filtra:</span>
              {subs.map(s=>(
                <button key={s.v} onClick={()=>setFalSub(s.v)}
                  style={{padding:"5px 13px",borderRadius:999,fontSize:12,fontWeight:600,cursor:"pointer",
                    border:"1.5px solid",fontFamily:"inherit",transition:"all .15s",
                    borderColor:falSub===s.v?"#5c3518":"#ddd7d0",
                    background:falSub===s.v?"#5c3518":"white",
                    color:falSub===s.v?"white":"#7a6e68"}}>
                  {s.l}
                </button>
              ))}
            </div>
          );
        })()}

        {/* Grid prodotti filtrati */}
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:22}}>
          {FALEGNAMI_PRODUCTS
            .filter(p=>(falZona==="all"||p.zona===falZona)&&(falSub==="all"||p.subcategory===falSub))
            .map(p=><FalegnaCard key={p.id} p={p} onOpen={openProduct ? ()=>openProduct(normalizeFalegna(p)) : undefined}/>)
          }
        </div>
      </Sec>

      {/* SEZIONE MATERIALI */}
      <Sec bg="white">
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?32:64,alignItems:"center"}}>
          <div>
            <div style={{...TAG,marginBottom:12}}>Il nostro legno</div>
            <h2 style={{fontSize:isMobile?26:34,fontWeight:700,margin:"0 0 16px",fontFamily:"Georgia,serif",color:"#1a1210",lineHeight:1.2}}>
              Solo legno massello certificato
            </h2>
            <p style={{fontSize:14,color:"#5a4e4a",lineHeight:1.85,marginBottom:20}}>
              Lavoriamo esclusivamente con legno massello di provenienza certificata FSC. Rovere, noce, castagno, ciliegio e abete: ogni essenza ha caratteristiche uniche che il nostro falegname valorizza con tecniche di lavorazione tradizionali.
            </p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {[["Rovere","Durissimo, venatura decisa"],["Noce","Colore caldo, pregiato"],["Castagno","Rustico, molto resistente"],["Abete","Leggero, ideale per camerette"]].map(([t,d])=>(
                <div key={t} style={{background:"#faf8f5",borderRadius:10,padding:"12px 14px",border:"1px solid #ece7e0"}}>
                  <div style={{fontWeight:700,fontSize:13,color:"#1a1210",marginBottom:3}}>{t}</div>
                  <div style={{fontSize:11,color:"#9a8e88"}}>{d}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{borderRadius:16,overflow:"hidden",height:isMobile?220:380}}>
            <img src="https://www.romanobranchetti.it/img/falegnameria5s-new.jpg"
              alt="Falegname al lavoro"
              style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </div>
        </div>
      </Sec>

      {/* FORM RICHIESTA */}
      <Sec bg="#faf8f5">
        <div ref={formRef} style={{maxWidth:820,margin:"0 auto"}}>
          <FalegnaRequestForm/>
        </div>
      </Sec>

      {/* CTA FINALE */}
      <div style={{background:"#1a1210",padding:isMobile?"40px 20px":"52px 64px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:24}}>
          <div>
            <h2 style={{fontSize:isMobile?22:28,fontWeight:700,color:"white",margin:"0 0 8px",fontFamily:"Georgia,serif"}}>Hai già un&apos;idea in mente?</h2>
            <p style={{color:"rgba(255,255,255,.6)",fontSize:14,margin:0}}>Portaci un disegno, una foto, anche approssimativa. Partiamo da lì.</p>
          </div>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <button onClick={scrollToForm} style={{...mkBtn("gold"),padding:"13px 24px",fontSize:14}}>Inizia il progetto →</button>
            <button onClick={()=>setPage("videocall")} style={{padding:"13px 24px",fontSize:14,borderRadius:8,cursor:"pointer",fontWeight:700,background:"transparent",color:"white",border:"1.5px solid rgba(255,255,255,.3)",fontFamily:"inherit"}}>
              Prenota consulenza
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// ─── SISTEMA CHAT / AUTH / ASSISTENZA ─────────
// ══════════════════════════════════════════════
const uid  = () => Math.random().toString(36).slice(2,10).toUpperCase();
const now  = () => new Date().toISOString();

// ─── EMAIL NOTIFICATION SYSTEM (simulato — pronto per API reale) ─
// In produzione: sostituire con fetch("https://api.sendgrid.com/...") o simile
const emailLog = []; // buffer globale — letto dal componente EmailToast
let emailListeners = [];
const subscribeEmail = fn => { emailListeners.push(fn); return ()=>{ emailListeners=emailListeners.filter(x=>x!==fn); }; };
const simulaEmail = ({ a, oggetto, anteprima, tipo }) => {
  const entry = { id:uid(), a, oggetto, anteprima, tipo, ts:new Date().toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"}) };
  emailLog.unshift(entry);
  emailListeners.forEach(fn=>fn(entry));
};
const fmtTime = iso => new Date(iso).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"});
const fmtDate = iso => new Date(iso).toLocaleDateString("it-IT",{day:"2-digit",month:"short"});
const fmtFull = iso => new Date(iso).toLocaleDateString("it-IT",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});
const genGuest = () => "Guest n" + (100 + Math.floor(Math.random()*900));

// ─── PALETTE ────────────────────────────────────────────────────
const P = {
  dark:"#1a1210", gold:"#c8b89a", cream:"#faf8f5", white:"#ffffff",
  border:"#ece7e0", muted:"#9a8e88", text:"#3d302e", softText:"#6b5f5b",
  green:"#27ae60", blue:"#2980b9", red:"#c0392b", orange:"#f39c12",
  purple:"#7d3c98", lightBg:"#f4f1ee",
};

// ─── ICONE SVG (stesso stile del sito principale) ────────────────
const CI = {
  sofa:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5H2v-5z"/><path d="M4 16v2"/><path d="M20 16v2"/><path d="M8 16h8"/></svg>,
  calendar: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  wrench:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  chat:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  ticket:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/><line x1="9" y1="12" x2="15" y2="12"/></svg>,
  lock:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  user:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  check:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  circle_check: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>,
  settings: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  truck:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  package:  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  clock:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  search:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  phone:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  shield:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  award:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  eye:      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  eye_off:  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  x:        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrow_left: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  send:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  zap:      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  bar_chart:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  help:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  circle:   <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>,
};

const TIPO_META = {
  "Info prodotto":          { color:P.blue,   bg:"#dbeeff", icon:CI.sofa,     desc:"Dettagli su un prodotto del catalogo" },
  "Richiesta appuntamento": { color:P.green,  bg:"#e8f5e9", icon:CI.calendar, desc:"Prenota una consulenza in showroom" },
  "Assistenza":             { color:P.orange, bg:"#fff3e0", icon:CI.wrench,   desc:"Problemi con ordine, consegna o prodotto" },
};

// ─── DEMO DATA ───────────────────────────────────────────────────
const SEED_ARREDATORI = [
  { id:"ARR1", nome:"Marco Rossi",     email:"marco.rossi@astadelmobile.it",     pwd:"demo",  role:"arredatore", sede:"Genova",            colore:"#2980b9" },
  { id:"ARR2", nome:"Laura Ferrari",   email:"laura.ferrari@astadelmobile.it",   pwd:"demo",  role:"assistenza", sede:"Genova",            colore:"#27ae60" },
  { id:"ARR3", nome:"Andrea Bianchi",  email:"andrea.bianchi@astadelmobile.it",  pwd:"demo",  role:"arredatore", sede:"Finale Ligure",     colore:"#7d3c98" },
  { id:"ARR4", nome:"Roberto Martini", email:"roberto.martini@astadelmobile.it", pwd:"demo",  role:"arredatore", sede:"Chivasso",          colore:"#1a1210" },
  { id:"ASS1", nome:"Carla Bianchi",   email:"carla.bianchi@astadelmobile.it",   pwd:"demo",  role:"assistenza", sede:"Torino",            colore:"#c0392b" },
  { id:"ADM1", nome:"Admin",           email:"admin@astadelmobile.it",           pwd:"admin", role:"admin",      sede:"—",                 colore:"#7d3c98" },
];
const SEED_CLIENTI = [
  { id:"CLI1", nome:"Mario Bianchi", email:"mario@test.it", pwd:"demo", role:"cliente", colore:"#16a085" },
  { id:"CLI2", nome:"Giulia Neri",   email:"giulia@test.it",pwd:"demo", role:"cliente", colore:"#8e44ad" },
];

const ts = d => new Date(Date.now() - d).toISOString();
const SEED_CONV = [
  { id:"CV1", tipo:"Info prodotto", stato:"aperta", oggetto:"Cucina con isola — dimensioni personalizzabili?",
    clienteId:"CLI1", clienteNome:"Mario Bianchi", isGuest:false,
    arredatoreId:"ARR1", createdAt:ts(86400000*2), ultimoMsg:ts(3600000*5),
    messaggi:[
      { id:"MG1", autoreId:"CLI1", autoreNome:"Mario Bianchi", ruolo:"cliente", testo:"Buongiorno, la cucina con isola Aran è personalizzabile nelle dimensioni? Ho uno spazio di circa 380x290cm.", ts:ts(86400000*2) },
      { id:"MG2", autoreId:"ARR1", autoreNome:"Marco Rossi",   ruolo:"arredatore", testo:"Buongiorno Mario! Certamente, Aran cucine è completamente su misura. Con le misure che indica possiamo progettare un'isola centrale di circa 120x80cm lasciando buona circolazione. Quando vuole venire a vedere i campioni materiali?", ts:ts(86400000*1.5) },
      { id:"MG3", autoreId:"CLI1", autoreNome:"Mario Bianchi", ruolo:"cliente", testo:"Perfetto! Potrei venire sabato mattina verso le 11?", ts:ts(3600000*5) },
    ]
  },
  { id:"CV2", tipo:"Richiesta appuntamento", stato:"aperta", oggetto:"Appuntamento progettazione soggiorno completo",
    clienteId:null, clienteNome:"Guest n427", isGuest:true, guestToken:"GUEST_n427",
    arredatoreId:null, guestEmail:"ospite427@example.com", createdAt:ts(3600000*8), ultimoMsg:ts(3600000*8),
    messaggi:[
      { id:"MG4", autoreId:"GUEST_n427", autoreNome:"Guest n427", ruolo:"cliente", testo:"Salve, vorrei fissare un appuntamento per progettare il soggiorno. Sono interessato a parete TV e divano angolare. Disponibile lunedì e martedì pomeriggio.", ts:ts(3600000*8) },
    ]
  },
  { id:"CV3", tipo:"Assistenza", stato:"chiusa", oggetto:"Ticket #ASS-1021 — Anta cucina non allineata",
    clienteId:"CLI2", clienteNome:"Giulia Neri", isGuest:false,
    arredatoreId:"ARR2", createdAt:ts(86400000*7), ultimoMsg:ts(86400000*5),
    messaggi:[
      { id:"MG5", autoreId:"CLI2", autoreNome:"Giulia Neri",    ruolo:"cliente",    testo:"Ho un problema con la cucina montata 2 settimane fa: un'anta non è perfettamente allineata e si tocca con quella accanto.", ts:ts(86400000*7) },
      { id:"MG6", autoreId:"ARR2", autoreNome:"Laura Ferrari",  ruolo:"arredatore", testo:"Ci scusiamo per il disagio Giulia. Può inviarci una foto del problema? Nel frattempo le invio un tecnico entro 48 ore per la regolazione.", ts:ts(86400000*6.5) },
      { id:"MG7", autoreId:"CLI2", autoreNome:"Giulia Neri",    ruolo:"cliente",    testo:"Perfetto, grazie! Le foto le mando subito via email.", ts:ts(86400000*6) },
      { id:"MG8", autoreId:"ARR2", autoreNome:"Laura Ferrari",  ruolo:"arredatore", testo:"Abbiamo ricevuto le foto, il tecnico la contatterà domani mattina. Ticket risolto, grazie per la segnalazione!", ts:ts(86400000*5) },
    ]
  },
];

const SEED_TICKETS = [
  { id:"TK1", numero:"ASS-1021", clienteNome:"Giulia Neri",  tipo:"Montaggio",  priorita:"media", stato:"chiuso",    oggetto:"Anta cucina non allineata dopo montaggio",  createdAt:ts(86400000*7) },
  { id:"TK2", numero:"ASS-1022", clienteNome:"Guest n891",   tipo:"Consegna",   priorita:"alta",  stato:"aperto",    oggetto:"Divano non consegnato nella data concordata", createdAt:ts(86400000*2) },
  { id:"TK3", numero:"ASS-1023", clienteNome:"Mario Bianchi",tipo:"Ordine",     priorita:"bassa", stato:"lavorazione",oggetto:"Richiesta modifica colore anta ordinata",    createdAt:ts(3600000*10) },
];

// ─── RICHIESTE (form appuntamento / info / preventivo / contatto) ─
const TIPI_RICHIESTA = [
  "Richiesta appuntamento",
  "Informazioni generali",
  "Richiesta preventivo",
  "Assistenza post-vendita",
  "Contatto generico",
];
const STATI_RICHIESTA = {
  nuova:          { label:"Nuova",          color:"#856404", bg:"#fffbe6", dot:"#d4a017" },
  in_lavorazione: { label:"In lavorazione", color:"#1a6fa8", bg:"#dbeeff", dot:"#2980b9" },
  completata:     { label:"Completata",     color:"#1e7e3e", bg:"#e8f5e9", dot:"#27ae60" },
};
const PRIORITA_COLOR = { alta:"#c0392b", media:"#d68910", bassa:"#27ae60" };
const SEDE_LIST = ["Torino — Via Casteldelfino","Torino — Via Casana","Chivasso","Cavallermaggiore","Cuneo","Castellalfero","Serravalle Scrivia","Genova","Finale Ligure","Arma di Taggia"];

const SEED_RICHIESTE = [
  { id:"RQ1", tipo:"Richiesta appuntamento", stato:"nuova",          priorita:"alta",  arredatoreId:null,
    createdAt:ts(1800000),    sede:"Torino — Via Casteldelfino", dataPref:"2026-03-14",
    cliente:{ nome:"Luca Ferretti",      email:"luca.ferretti@gmail.com",      tel:"338 4512 893" },
    oggetto:"Prima consulenza cucina contemporanea",
    messaggio:"Vorrei un appuntamento per la cucina di casa nuova. Misure: L420 x P310cm. Preferisco finiture opache. Budget indicativo 15.000€.",
    noteInterne:"" },
  { id:"RQ2", tipo:"Informazioni generali",  stato:"in_lavorazione", priorita:"media", arredatoreId:"ARR1",
    createdAt:ts(3600000*4),  sede:"Genova",                         dataPref:null,
    cliente:{ nome:"Serena Gallo",       email:"serena.gallo@libero.it",       tel:"347 2219 004" },
    oggetto:"Divani pronta consegna colore verde salvia",
    messaggio:"Avete divani in pronta consegna nel colore verde salvia? Sto arredando il salotto con tempistiche strette.",
    noteInterne:"Verificato stock: divano Matisse disponibile. Contattata via email." },
  { id:"RQ3", tipo:"Richiesta preventivo",   stato:"nuova",          priorita:"alta",  arredatoreId:null,
    createdAt:ts(3600000*9),  sede:"Chivasso",                       dataPref:"2026-03-18",
    cliente:{ nome:"Famiglia Moretti",   email:"moretti.casa@gmail.com",       tel:"011 4478 321" },
    oggetto:"Preventivo arredo completo appartamento 110mq",
    messaggio:"Stiamo ristrutturando un appartamento di 110mq. Abbiamo bisogno di un preventivo completo: cucina, zona giorno, camera matrimoniale, cameretta. Budget flessibile.",
    noteInterne:"" },
  { id:"RQ4", tipo:"Richiesta appuntamento", stato:"completata",     priorita:"media", arredatoreId:"ARR4",
    createdAt:ts(86400000*3), sede:"Cuneo",                          dataPref:"2026-03-08",
    cliente:{ nome:"Giovanna Esposito",  email:"g.esposito@hotmail.it",        tel:"335 7701 228" },
    oggetto:"Consulenza camera da letto — letto Zante",
    messaggio:"Vorrei venire a vedere le finiture disponibili per la camera da letto. Sono interessata al letto Zante.",
    noteInterne:"Appuntamento confermato 8 marzo ore 15:30. Cliente molto interessata." },
  { id:"RQ5", tipo:"Contatto generico",      stato:"nuova",          priorita:"bassa", arredatoreId:null,
    createdAt:ts(3600000*1),  sede:null,                             dataPref:null,
    cliente:{ nome:"Roberto Amato",      email:"r.amato@studio-amato.it",      tel:"02 3344 5566" },
    oggetto:"Partnership contract — studio architettura",
    messaggio:"Sono un architetto e cerco partnership per forniture contract su progetti residenziali di fascia alta. Disponibile per una call conoscitiva.",
    noteInterne:"" },
  { id:"RQ6", tipo:"Assistenza post-vendita",stato:"in_lavorazione", priorita:"media", arredatoreId:"ARR3",
    createdAt:ts(86400000*1), sede:"Finale Ligure",                  dataPref:null,
    cliente:{ nome:"Antonella Viotti",   email:"antonella.v@gmail.com",        tel:"349 8801 557" },
    oggetto:"Smaltimento mobili vecchi prima della consegna",
    messaggio:"Avete un servizio di smaltimento mobili vecchi? Devo liberare la cucina prima della consegna del nuovo arredamento.",
    noteInterne:"Inoltrato al servizio logistica per preventivo smaltimento." },
  { id:"RQ7", tipo:"Richiesta preventivo",   stato:"nuova",          priorita:"media", arredatoreId:null,
    createdAt:ts(3600000*14), sede:"Serravalle Scrivia",              dataPref:"2026-03-20",
    cliente:{ nome:"Marco Dellafiore",   email:"mdellafiore@gmail.com",        tel:"329 5543 881" },
    oggetto:"Preventivo bagno completo doppio lavabo",
    messaggio:"Bagno completo: colonne, specchiera retroilluminata e mobile sotto lavabo doppio. Spazio disponibile: 170x280cm.",
    noteInterne:"" },
  { id:"RQ8", tipo:"Informazioni generali",  stato:"nuova",          priorita:"bassa", arredatoreId:null,
    createdAt:ts(3600000*22), sede:"Arma di Taggia",                  dataPref:null,
    cliente:{ nome:"Carla Doria",        email:"c.doria@gmail.com",            tel:"346 9910 774" },
    oggetto:"Tempi di consegna cucine su misura",
    messaggio:"Quali sono i tempi medi di consegna per una cucina su misura? Devo rispettare una scadenza per il trasloco.",
    noteInterne:"" },
];

// ─── GLOBAL STATE ────────────────────────────────────────────────
const AppContext = createContext(null);

function AppProvider({ children }) {
  const [utente, setUtente]         = useState(null);
  const [clienti, setClienti]       = useState([...SEED_CLIENTI]);
  const [arredatori]                = useState(SEED_ARREDATORI);
  const [conv, setConv]             = useState(SEED_CONV);
  const [tickets, setTickets]       = useState(SEED_TICKETS);
  const [richieste, setRichieste]   = useState(SEED_RICHIESTE);
  const [cartItems, setCartItems]   = useState([]);
  const [favItems,  setFavItems]    = useState([]);

  const toggleFav = (item) => {
    setFavItems(prev =>
      prev.find(x=>x.id===item.id) ? prev.filter(x=>x.id!==item.id) : [...prev,item]
    );
  };
  const isFav = (id) => favItems.some(x=>x.id===id);
  const removeFav = (id) => setFavItems(prev=>prev.filter(x=>x.id!==id));

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(x => x.id === item.id);
      if(existing) return prev.map(x => x.id===item.id ? {...x, qty: x.qty+1} : x);
      return [...prev, {...item, qty:1}];
    });
  };
  const removeFromCart = (id) => setCartItems(prev => prev.filter(x => x.id !== id));
  const updateQty = (id, qty) => {
    if(qty < 1) { removeFromCart(id); return; }
    setCartItems(prev => prev.map(x => x.id===id ? {...x, qty} : x));
  };
  const clearCart = () => setCartItems([]);
  const cartTotal = cartItems.reduce((sum, x) => sum + parseInt((x.price||"0").replace(/[^\d]/g,"")) * x.qty, 0);

  const login = (email, pwd) => {
    const tutti = [...SEED_ARREDATORI, ...clienti];
    const u = tutti.find(x => x.email.toLowerCase()===email.toLowerCase() && x.pwd===pwd);
    if(u) { setUtente(u); return { ok:true, user:u }; }
    return { ok:false };
  };

  const logout = () => setUtente(null);

  const registra = (nome, email, pwd) => {
    if([...SEED_ARREDATORI,...clienti].find(x=>x.email.toLowerCase()===email.toLowerCase()))
      return { ok:false, msg:"Email già registrata." };
    const u = { id:"CLI"+uid(), nome, email, pwd, role:"cliente", colore:`hsl(${Math.floor(Math.random()*320)},55%,42%)` };
    setClienti(p=>[...p,u]);
    setUtente(u);
    return { ok:true };
  };

  const inviaMessaggio = (convId, testo, autore) => {
    const msg = {
      id:"MG"+uid(),
      autoreId: autore.id || autore.guestToken,
      autoreNome: autore.nome,
      ruolo: autore.role==="arredatore"||autore.role==="admin" ? "arredatore" : "cliente",
      testo,
      ts: now(),
    };
    setConv(p=>p.map(convItem=> {
      if(convItem.id!==convId) return convItem;
      const updated = {...convItem, messaggi:[...convItem.messaggi,msg], ultimoMsg:now()};
      // ── notifica email al destinatario ──
      const isArrReply = msg.ruolo==="arredatore";
      if(isArrReply) {
        // arredatore risponde → notifica al cliente (se ha email)
        if(updated.guestEmail) {
          simulaEmail({ a:updated.guestEmail, oggetto:`Re: ${updated.oggetto}`, anteprima:msg.testo.slice(0,80), tipo:"risposta_arredatore" });
        }
      } else {
        // cliente scrive → notifica all'arredatore assegnato
        const arrTarget = SEED_ARREDATORI.find(a=>a.id===updated.arredatoreId);
        if(arrTarget) {
          simulaEmail({ a:arrTarget.email, oggetto:`Nuovo messaggio: ${updated.oggetto}`, anteprima:msg.testo.slice(0,80), tipo:"risposta_cliente" });
        }
      }
      return updated;
    }));
  };

  const creaConversazione = (tipo, oggetto, autore, prodottoNome, guestEmail) => {
    const conv_ = {
      id:"CV"+uid(), tipo, stato:"aperta", oggetto,
      clienteId: autore.role==="cliente" ? autore.id : null,
      clienteNome: autore.nome,
      isGuest: !autore.id || autore.role==="guest",
      guestToken: autore.guestToken||null,
      guestEmail: guestEmail||null,
      arredatoreId: null,
      createdAt: now(), ultimoMsg: now(),
      prodottoNome: prodottoNome||null,
      messaggi:[],
    };
    setConv(p=>[conv_,...p]);
    return conv_;
  };

  // Recupera conversazione guest tramite token (simulazione link temporaneo)
  const recuperaConvByToken = (token) => {
    return conv.find(c => c.guestToken === token) || null;
  };

  const assegna = (convId, arredatoreId) => setConv(p=>p.map(convItem=>{
    if(convItem.id!==convId) return convItem;
    const arr = SEED_ARREDATORI.find(a=>a.id===arredatoreId);
    // notifica al cliente se ha email (registrato o guest con email)
    const emailCliente = clienti.find(cl=>cl.id===convItem.clienteId)?.email || convItem.guestEmail;
    if(emailCliente && arr) {
      simulaEmail({ a:emailCliente, oggetto:`La tua richiesta è stata presa in carico`, anteprima:`${arr.nome} seguirà la tua richiesta "${convItem.oggetto}". Puoi rispondere direttamente in chat.`, tipo:"presa_in_carico" });
    }
    return {...convItem, arredatoreId};
  }));
  const chiudiConv = convId => setConv(p=>p.map(convItem=>{
    if(convItem.id!==convId) return convItem;
    // chiusura: token temporaneo scade → guest non può più rientrare
    return {...convItem, stato:"chiusa", guestToken:null};
  }));

  const apriTicket = (tipo, oggetto, desc, priorita, autore) => {
    const t = {
      id:"TK"+uid(),
      numero:"ASS-"+(1024+tickets.length),
      clienteNome: autore.nome,
      tipo, priorita, stato:"aperto", oggetto, desc,
      createdAt:now(),
    };
    setTickets(p=>[t,...p]);
    return t;
  };

  return (
    <AppContext.Provider value={{ utente,login,logout,registra,clienti,arredatori,conv,tickets,richieste,setRichieste,inviaMessaggio,creaConversazione,recuperaConvByToken,assegna,chiudiConv,apriTicket,cartItems,addToCart,removeFromCart,updateQty,clearCart,cartTotal,favItems,toggleFav,isFav,removeFav }}>
      {children}
    </AppContext.Provider>
  );
}

const useApp = () => useContext(AppContext);

// ─── MICRO-COMPONENTS ────────────────────────────────────────────
function AvatarIcon({ nome="?", size=36, colore=P.blue, online=false }) {
  const ini = nome.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return (
    <div style={{position:"relative",flexShrink:0}}>
      <div style={{width:size,height:size,borderRadius:"50%",background:colore,
        display:"flex",alignItems:"center",justifyContent:"center",
        color:"#fff",fontSize:size*.34,fontWeight:700,letterSpacing:"-.02em",fontFamily:"inherit"}}>
        {ini}
      </div>
      {online && <div style={{position:"absolute",bottom:1,right:1,width:size*.28,height:size*.28,borderRadius:"50%",background:P.green,border:"2px solid white"}}/>}
    </div>
  );
}

function Badge({ label, color, bg, small }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:4,fontSize:small?9:10,fontWeight:700,
      padding:small?"2px 6px":"3px 10px",borderRadius:999,background:bg,color,letterSpacing:".04em",
      textTransform:"uppercase",whiteSpace:"nowrap"}}>
      {label}
    </span>
  );
}

function BtnPrimary({ children, onClick, color=P.dark, textColor="#fff", full, small, style={} }) {
  const [h,setH]=useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,
        padding:small?"8px 14px":"11px 20px",borderRadius:8,cursor:"pointer",fontWeight:700,
        fontSize:small?12:13,fontFamily:"inherit",border:"none",
        background:color,color:textColor,width:full?"100%":"auto",
        opacity:h?.88:1,transition:"opacity .15s",...style}}>
      {children}
    </button>
  );
}

function BtnOutline({ children, onClick, color=P.dark, small, full, style={} }) {
  const [h,setH]=useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,
        padding:small?"7px 13px":"10px 18px",borderRadius:8,cursor:"pointer",fontWeight:700,
        fontSize:small?12:13,fontFamily:"inherit",background:h?"#f4f1ee":"white",
        border:`1.5px solid ${color}`,color,width:full?"100%":"auto",transition:"background .15s",...style}}>
      {children}
    </button>
  );
}

function InputField({ value, onChange, placeholder, type="text", rows, style={} }) {
  const base = {
    width:"100%",padding:"11px 14px",borderRadius:8,border:`1.5px solid ${P.border}`,
    fontSize:13,outline:"none",fontFamily:"inherit",boxSizing:"border-box",
    background:P.white,color:P.text,transition:"border-color .15s",...style,
  };
  if(rows) return <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows}
    style={{...base,resize:"vertical"}} onFocus={e=>e.target.style.borderColor="#999"}
    onBlur={e=>e.target.style.borderColor=P.border}/>;
  return <input value={value} onChange={onChange} placeholder={placeholder} type={type}
    style={base} onFocus={e=>e.target.style.borderColor="#999"}
    onBlur={e=>e.target.style.borderColor=P.border}/>;
}

function CardBase({ children, style={}, onClick, hover=false }) {
  const [h,setH]=useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={()=>hover&&setH(true)} onMouseLeave={()=>hover&&setH(false)}
      style={{background:P.white,borderRadius:14,border:`1.5px solid ${P.border}`,overflow:"hidden",
        cursor:onClick?"pointer":"default",
        boxShadow:h?"0 8px 30px #0002":"0 1px 4px #0001",
        transform:h?"translateY(-2px)":"none",transition:"all .2s",...style}}>
      {children}
    </div>
  );
}

function Modal({ children, onClose, maxW=480, noPad }) {
  return (
    <div style={{position:"fixed",inset:0,zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{position:"absolute",inset:0,background:"rgba(20,14,12,.72)",backdropFilter:"blur(6px)"}} onClick={onClose}/>
      <div style={{position:"relative",background:P.white,borderRadius:18,width:"100%",maxWidth:maxW,
        boxShadow:"0 32px 100px #0006",maxHeight:"92vh",overflowY:"auto",padding:noPad?0:28}}>
        {children}
      </div>
    </div>
  );
}

// ─── AUTH MODAL ──────────────────────────────────────────────────

// ─── EMAIL TOAST (simulazione notifiche email) ────────────────────
function EmailToastSystem() {
  const [toasts, setToasts] = useState([]);
  const [log,    setLog]    = useState([]);
  const [showLog,setShowLog]= useState(false);

  useEffect(()=>{
    const unsub = subscribeEmail(entry=>{
      setLog(prev=>[entry,...prev].slice(0,30));
      setToasts(prev=>[...prev,{...entry,visible:true}].slice(-3));
      setTimeout(()=>{
        setToasts(prev=>prev.map(t=>t.id===entry.id?{...t,visible:false}:t));
        setTimeout(()=>setToasts(prev=>prev.filter(t=>t.id!==entry.id)),400);
      },5000);
    });
    return unsub;
  },[]);

  const TIPO_ICON = {
    risposta_arredatore:"📩",
    risposta_cliente:"💬",
    presa_in_carico:"✅",
  };
  const TIPO_LABEL = {
    risposta_arredatore:"Notifica al cliente",
    risposta_cliente:"Notifica all'arredatore",
    presa_in_carico:"Presa in carico",
  };

  return (
    <>
      {/* Toast stack */}
      <div style={{position:"fixed",bottom:80,right:20,zIndex:9999,display:"flex",flexDirection:"column",gap:10,alignItems:"flex-end",pointerEvents:"none"}}>
        {toasts.map(t=>(
          <div key={t.id} style={{
            background:"white",border:"1.5px solid #ece7e0",borderRadius:12,
            boxShadow:"0 8px 32px #0002",padding:"12px 16px",maxWidth:320,
            display:"flex",gap:10,alignItems:"flex-start",
            opacity:t.visible?1:0,transform:t.visible?"none":"translateX(20px)",
            transition:"opacity .35s,transform .35s",pointerEvents:"auto"
          }}>
            <div style={{fontSize:20,flexShrink:0}}>{TIPO_ICON[t.tipo]||"📧"}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:10,fontWeight:700,color:"#9a8e88",textTransform:"uppercase",letterSpacing:".07em",marginBottom:2}}>
                {TIPO_LABEL[t.tipo]||"Email"} — simulazione
              </div>
              <div style={{fontSize:11,fontWeight:700,color:"#1a1210",marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                A: {t.a}
              </div>
              <div style={{fontSize:11,color:"#6b5f5b",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t.oggetto}</div>
              <div style={{fontSize:10,color:"#9a8e88",marginTop:3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontStyle:"italic"}}>{t.anteprima}…</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottone log email */}
      {log.length>0 && (
        <button onClick={()=>setShowLog(s=>!s)} style={{
          position:"fixed",bottom:20,right:20,zIndex:9998,
          background:"#1a1210",color:"white",border:"none",borderRadius:999,
          padding:"8px 16px",fontSize:11,fontWeight:700,cursor:"pointer",
          fontFamily:"inherit",display:"flex",alignItems:"center",gap:7,
          boxShadow:"0 4px 18px #0003"
        }}>
          📧 {log.length} email simulate {showLog?"▾":"▸"}
        </button>
      )}

      {/* Log drawer */}
      {showLog && (
        <div style={{
          position:"fixed",bottom:60,right:20,zIndex:9997,
          background:"white",border:"1.5px solid #ece7e0",borderRadius:14,
          boxShadow:"0 16px 48px #0003",width:380,maxHeight:420,overflowY:"auto"
        }}>
          <div style={{padding:"12px 16px",borderBottom:"1px solid #ece7e0",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <span style={{fontSize:12,fontWeight:700,color:"#1a1210"}}>📧 Log email simulate</span>
            <button onClick={()=>setShowLog(false)} style={{background:"none",border:"none",cursor:"pointer",color:"#9a8e88",fontSize:16}}>×</button>
          </div>
          {log.map(e=>(
            <div key={e.id} style={{padding:"10px 16px",borderBottom:"1px solid #f4f1ee"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                <span style={{fontSize:14}}>{TIPO_ICON[e.tipo]||"📧"}</span>
                <span style={{fontSize:10,fontWeight:700,color:"#9a8e88",textTransform:"uppercase",letterSpacing:".07em"}}>{TIPO_LABEL[e.tipo]||"Email"}</span>
                <span style={{fontSize:10,color:"#9a8e88",marginLeft:"auto"}}>{e.ts}</span>
              </div>
              <div style={{fontSize:11,color:"#1a1210",fontWeight:600,marginBottom:1}}>A: {e.a}</div>
              <div style={{fontSize:11,color:"#3d302e",marginBottom:2}}>{e.oggetto}</div>
              <div style={{fontSize:10,color:"#9a8e88",fontStyle:"italic",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{e.anteprima}…</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function ChatAuthModal({ onClose, defaultTab="login" }) {
  const { login, registra, recuperaConvByToken, conv } = useApp();
  const [tab,setTab]     = useState(defaultTab);
  const [nome,setNome]   = useState("");
  const [email,setEmail] = useState("");
  const [pwd,setPwd]     = useState("");
  const [show,setShow]   = useState(false);
  const [err,setErr]     = useState("");
  // Tab "riprendi" — recupero via token
  const [token,setToken]  = useState("");
  const [found,setFound]  = useState(null);  // conv trovata
  const [tokErr,setTErr]  = useState("");

  const handleLogin = () => {
    if(!email||!pwd) return setErr("Compila tutti i campi.");
    const r = login(email,pwd);
    if(r.ok) onClose(r.user);
    else setErr("Email o password non corretti.");
  };

  const handleReg = () => {
    if(!nome||!email||!pwd) return setErr("Compila tutti i campi.");
    if(pwd.length<6) return setErr("Password: minimo 6 caratteri.");
    const r = registra(nome,email,pwd);
    if(r.ok) onClose();
    else setErr(r.msg);
  };

  const cercaToken = () => {
    const t = token.trim().toUpperCase();
    const trovata = conv.find(c => c.guestToken === t || c.guestToken === "GUEST_"+t || t === c.guestToken?.replace("GUEST_",""));
    if (trovata) { setFound(trovata); setTErr(""); }
    else setTErr("Nessuna conversazione trovata con questo codice. Verifica la tua email.");
  };

  const TABS = [["login","Accedi"],["reg","Registrati"],["riprendi","Riprendi chat"]];

  return (
    <Modal onClose={onClose} maxW={440}>
      <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:P.lightBg,border:"none",width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:14,color:P.muted,display:"flex",alignItems:"center",justifyContent:"center"}}>{CI.x}</button>
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{color:P.dark,marginBottom:8,display:"flex",justifyContent:"center"}}>
          {tab==="riprendi"
            ? <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            : <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          }
        </div>
        <h2 style={{fontSize:19,fontWeight:800,margin:0,color:P.dark,letterSpacing:"-.02em"}}>
          {tab==="login"?"Accedi al tuo account":tab==="reg"?"Crea account":"Riprendi la tua chat"}
        </h2>
      </div>

      {/* tab bar */}
      <div style={{display:"flex",background:P.lightBg,borderRadius:10,padding:3,marginBottom:20,gap:3}}>
        {TABS.map(([k,l])=>(
          <button key={k} onClick={()=>{setTab(k);setErr("");setTErr("");setFound(null);}}
            style={{flex:1,padding:"8px 4px",border:"none",borderRadius:8,cursor:"pointer",
              fontWeight:700,fontSize:11,fontFamily:"inherit",whiteSpace:"nowrap",
              background:tab===k?P.white:"transparent",
              color:tab===k?P.dark:P.muted,
              boxShadow:tab===k?"0 1px 6px #0001":""}}>
            {l}
          </button>
        ))}
      </div>

      {/* ── LOGIN ── */}
      {tab==="login" && (
        <div style={{display:"grid",gap:10}}>
          <InputField value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email *" type="email"/>
          <div style={{position:"relative"}}>
            <InputField value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="Password *" type={show?"text":"password"} style={{paddingRight:42}}/>
            <button onClick={()=>setShow(s=>!s)} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:P.muted,display:"flex",alignItems:"center"}}>{show?CI.eye_off:CI.eye}</button>
          </div>
          {err && <div style={{fontSize:12,color:P.red,background:"#fdf0ef",padding:"8px 12px",borderRadius:8}}>{err}</div>}
          <BtnPrimary onClick={handleLogin} full>Accedi →</BtnPrimary>
          <div style={{padding:"10px 12px",background:P.cream,borderRadius:10,fontSize:11,color:P.muted,lineHeight:1.9}}>
            <strong style={{color:P.text}}>Account demo:</strong><br/>
            · mario@test.it · giulia@test.it — pwd: <code>demo</code><br/>
            · marco.rossi@astadelmobile.it — pwd: <code>demo</code><br/>
            · admin@astadelmobile.it — pwd: <code>admin</code>
          </div>
        </div>
      )}

      {/* ── REGISTRATI ── */}
      {tab==="reg" && (
        <div style={{display:"grid",gap:10}}>
          <InputField value={nome} onChange={e=>setNome(e.target.value)} placeholder="Nome e cognome *"/>
          <InputField value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email *" type="email"/>
          <div style={{position:"relative"}}>
            <InputField value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="Password (min. 6 caratteri) *" type={show?"text":"password"} style={{paddingRight:42}}/>
            <button onClick={()=>setShow(s=>!s)} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:P.muted,display:"flex",alignItems:"center"}}>{show?CI.eye_off:CI.eye}</button>
          </div>
          {err && <div style={{fontSize:12,color:P.red,background:"#fdf0ef",padding:"8px 12px",borderRadius:8}}>{err}</div>}
          <BtnPrimary onClick={handleReg} full>Crea account →</BtnPrimary>
        </div>
      )}

      {/* ── RIPRENDI CHAT (link temporaneo / token) ── */}
      {tab==="riprendi" && (
        <div>
          {!found ? (
            <>
              <div style={{background:"#f0f7ff",border:`1.5px solid #b3d4f5`,borderRadius:10,padding:"12px 14px",marginBottom:16,fontSize:12,color:"#1a5fa8",lineHeight:1.7}}>
                Hai ricevuto un link temporaneo via email? Clicca il link direttamente, oppure incolla qui sotto il <strong>codice ospite</strong> che ti è stato assegnato (es: <code>GUEST_n427</code>).
              </div>
              <div style={{display:"grid",gap:8,marginBottom:6}}>
                <InputField
                  value={token}
                  onChange={e=>{ setToken(e.target.value); setTErr(""); }}
                  placeholder="Es: GUEST_n427 oppure n427"
                />
                {tokErr && <div style={{fontSize:12,color:P.red,background:"#fdf0ef",padding:"8px 12px",borderRadius:8}}>{tokErr}</div>}
              </div>
              <BtnPrimary onClick={cercaToken} full>Cerca la mia conversazione →</BtnPrimary>

              {/* Demo helper */}
              <div style={{marginTop:14,padding:"10px 12px",background:P.cream,borderRadius:10,fontSize:11,color:P.muted,lineHeight:1.8}}>
                <strong style={{color:P.text}}>Demo:</strong> prova il codice <code style={{background:"#ece7e0",padding:"1px 5px",borderRadius:4}}>GUEST_n427</code> per simulare il recupero di una chat ospite.
              </div>
            </>
          ) : (
            /* Conversazione trovata */
            <div>
              <div style={{background:"#e8f5e9",border:`1.5px solid #a5d6a7`,borderRadius:12,padding:"16px 18px",marginBottom:16}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={P.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
                  <span style={{fontSize:12,fontWeight:700,color:"#1e7e3e"}}>Conversazione trovata</span>
                </div>
                <div style={{background:"white",borderRadius:8,padding:"10px 14px",marginBottom:12}}>
                  <div style={{fontSize:10,color:P.muted,textTransform:"uppercase",letterSpacing:".08em",marginBottom:4}}>Oggetto</div>
                  <div style={{fontSize:13,fontWeight:700,color:P.dark}}>{found.oggetto}</div>
                  <div style={{fontSize:11,color:P.muted,marginTop:4}}>
                    {found.messaggi.length} messagg{found.messaggi.length===1?"io":"i"} · aperta il {fmtDate(found.createdAt)}
                  </div>
                </div>

                {/* Preview ultimo messaggio */}
                {found.messaggi.length > 0 && (
                  <div style={{background:P.cream,borderRadius:8,padding:"8px 12px",fontSize:11,color:P.softText,lineHeight:1.6,borderLeft:`3px solid ${P.gold}`}}>
                    <span style={{fontWeight:600}}>Ultimo messaggio:</span> {found.messaggi[found.messaggi.length-1].testo.slice(0,100)}{found.messaggi[found.messaggi.length-1].testo.length>100?"…":""}
                  </div>
                )}
              </div>

              <BtnPrimary onClick={()=>onClose({ guestResume:true, conv:found })} full>
                <span style={{display:"inline-flex",alignItems:"center",gap:8}}>{CI.chat} Apri la mia conversazione →</span>
              </BtnPrimary>

              <div style={{marginTop:12,padding:"12px 14px",background:P.cream,borderRadius:10}}>
                <div style={{fontSize:11,fontWeight:700,color:P.dark,marginBottom:4,display:"flex",alignItems:"center",gap:5}}>{CI.user} Vuoi non perderla più?</div>
                <div style={{fontSize:11,color:P.muted,marginBottom:10,lineHeight:1.6}}>Crea un account gratuito e questa chat verrà salvata nel tuo profilo per sempre.</div>
                <button onClick={()=>setTab("reg")}
                  style={{width:"100%",padding:"8px",borderRadius:8,border:`1.5px solid ${P.dark}`,
                    background:"white",color:P.dark,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                  Crea account e salva la chat
                </button>
              </div>

              <button onClick={()=>{ setFound(null); setToken(""); }}
                style={{width:"100%",marginTop:10,padding:"7px",background:"none",border:"none",
                  fontSize:11,color:P.muted,cursor:"pointer",fontFamily:"inherit"}}>
                ← Cerca un altro codice
              </button>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

// ─── NUOVA RICHIESTA MODAL ───────────────────────────────────────
function NuovaRichiestaModal({ onClose, defaultTipo, prodottoNome }) {
  const { utente, creaConversazione, inviaMessaggio } = useApp();
  const [tipo,setTipo]       = useState(defaultTipo||"Info prodotto");
  const [oggetto,setOgg]     = useState(prodottoNome ? `Info su: ${prodottoNome}` : "");
  const [testo,setTesto]     = useState("");
  const [guestNome]          = useState(genGuest());
  const [guestEmail,setGEm]  = useState("");
  const [emailErr,setEErr]   = useState("");
  const [done,setDone]       = useState(null); // { convId, token, email }
  const [linkToast,setLToa]  = useState(false);

  const autore = utente
    ? utente
    : { id:null, nome:guestNome, guestToken:"GUEST_"+guestNome, role:"guest" };

  const validateEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const invia = () => {
    if(!oggetto.trim()||!testo.trim()) return;
    // Guest deve fornire email
    if(!utente && !validateEmail(guestEmail)) {
      setEErr("Inserisci un'email valida per ricevere il link alla conversazione.");
      return;
    }
    setEErr("");
    const conv_ = creaConversazione(tipo, oggetto, autore, prodottoNome, utente ? null : guestEmail);
    inviaMessaggio(conv_.id, testo, autore);
    setDone({
      convId: conv_.id,
      token: autore.guestToken,
      email: utente ? null : guestEmail,
    });
  };

  // Simula "copia link" negli appunti
  const copiaLink = () => {
    const fakeLink = `https://astadelmobile.it/chat?token=${done.token}`;
    navigator.clipboard?.writeText(fakeLink).catch(()=>{});
    setLToa(true);
    setTimeout(()=>setLToa(false), 2500);
  };

  return (
    <Modal onClose={onClose} maxW={500} noPad>
      {/* header */}
      <div style={{background:P.dark,padding:"18px 22px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div>
          <div style={{fontSize:10,letterSpacing:".1em",color:P.gold,textTransform:"uppercase",fontWeight:700,marginBottom:3}}>Nuova richiesta</div>
          <div style={{fontWeight:700,fontSize:16,color:"white"}}>Contatta un arredatore</div>
        </div>
        <button onClick={onClose} style={{background:"rgba(255,255,255,.12)",border:"none",color:"white",width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:14}}>{CI.x}</button>
      </div>

      {done ? (
        /* ── SCHERMATA CONFERMA GUEST ── */
        <div style={{padding:"32px 28px"}}>
          <div style={{color:P.green,marginBottom:14,display:"flex",justifyContent:"center"}}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <h3 style={{fontSize:20,fontWeight:800,margin:"0 0 6px",color:P.dark,textAlign:"center"}}>Richiesta inviata!</h3>
          <p style={{color:P.muted,fontSize:13,textAlign:"center",marginBottom:22,lineHeight:1.7}}>
            Un arredatore ti risponderà al più presto.
          </p>

          {done.email && (
            <>
              {/* Box link temporaneo */}
              <div style={{background:"#e8f5e9",border:`1.5px solid #a5d6a7`,borderRadius:12,padding:"16px 18px",marginBottom:14}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={P.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span style={{fontSize:12,fontWeight:700,color:"#1e7e3e"}}>Link inviato a {done.email}</span>
                </div>
                <p style={{fontSize:11,color:"#2e7d32",margin:"0 0 12px",lineHeight:1.6}}>
                  Abbiamo inviato un link alla tua email. Cliccalo per riaprire questa conversazione in qualsiasi momento, anche da un altro dispositivo.
                </p>
                <div style={{background:"white",border:`1px solid #c8e6c9`,borderRadius:8,padding:"8px 12px",
                  display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
                  <code style={{fontSize:10,color:P.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1}}>
                    astadelmobile.it/chat?token={done.token}
                  </code>
                  <button onClick={copiaLink}
                    style={{background:P.dark,border:"none",borderRadius:6,padding:"5px 10px",cursor:"pointer",
                      color:"white",fontSize:10,fontWeight:700,fontFamily:"inherit",flexShrink:0,position:"relative"}}>
                    {linkToast ? "Copiato ✓" : "Copia link"}
                  </button>
                </div>
              </div>

              {/* Banner conversione account */}
              <div style={{background:P.cream,border:`1.5px solid ${P.border}`,borderRadius:12,padding:"14px 18px",marginBottom:16}}>
                <div style={{fontSize:12,fontWeight:700,color:P.dark,marginBottom:4,display:"flex",alignItems:"center",gap:6}}>
                  {CI.user} Vuoi non perdere mai la cronologia?
                </div>
                <p style={{fontSize:11,color:P.softText,margin:"0 0 10px",lineHeight:1.6}}>
                  Crea un account gratuito — importeremo automaticamente questa conversazione nel tuo profilo.
                </p>
                <button onClick={onClose}
                  style={{width:"100%",padding:"9px",borderRadius:8,border:`1.5px solid ${P.dark}`,
                    background:"white",color:P.dark,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                  Crea account e salva la chat →
                </button>
              </div>
            </>
          )}

          <button onClick={onClose}
            style={{width:"100%",padding:"11px",borderRadius:8,border:"none",
              background:P.dark,color:"white",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
            Chiudi
          </button>
        </div>
      ) : (
        /* ── FORM ── */
        <div style={{padding:"20px 22px"}}>

          {/* Banner guest con campo email */}
          {!utente && (
            <div style={{background:"#f0f7ff",border:`1.5px solid #b3d4f5`,borderRadius:10,padding:"12px 14px",marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:700,color:"#1a5fa8",marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
                {CI.lock} Stai scrivendo come ospite
              </div>
              <p style={{fontSize:11,color:"#1a6ca8",margin:"0 0 10px",lineHeight:1.6}}>
                Inserisci la tua email: ti invieremo un <strong>link temporaneo</strong> per riaprire questa conversazione quando vuoi, senza registrazione.
              </p>
              <div>
                <InputField
                  value={guestEmail}
                  onChange={e=>{ setGEm(e.target.value); setEErr(""); }}
                  placeholder="La tua email *"
                  type="email"
                />
                {emailErr && (
                  <div style={{fontSize:11,color:P.red,marginTop:5,paddingLeft:4}}>{emailErr}</div>
                )}
              </div>
            </div>
          )}

          {/* Tipo richiesta */}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",color:P.muted,marginBottom:8}}>Tipo richiesta</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
              {Object.entries(TIPO_META).map(([k,v])=>(
                <button key={k} onClick={()=>setTipo(k)}
                  style={{padding:"10px 6px",borderRadius:10,border:`2px solid ${tipo===k?v.color:P.border}`,
                    background:tipo===k?v.bg:P.white,cursor:"pointer",fontFamily:"inherit",transition:"all .15s",textAlign:"center"}}>
                  <div style={{fontSize:18,marginBottom:4,display:"flex",justifyContent:"center"}}>{v.icon}</div>
                  <div style={{fontSize:10,fontWeight:700,color:tipo===k?v.color:P.text,lineHeight:1.3}}>{k}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{display:"grid",gap:10,marginBottom:14}}>
            <InputField value={oggetto} onChange={e=>setOgg(e.target.value)} placeholder="Oggetto *"/>
            <InputField value={testo} onChange={e=>setTesto(e.target.value)} placeholder="Descrivi la tua richiesta…" rows={4}/>
          </div>
          <BtnPrimary onClick={invia} full>Invia richiesta →</BtnPrimary>
        </div>
      )}
    </Modal>
  );
}

// ─── NUOVO TICKET MODAL ──────────────────────────────────────────
function NuovoTicketModal({ onClose }) {
  const { utente, apriTicket } = useApp();
  const [cat,setCat]     = useState("Consegna");
  const [pri,setPri]     = useState("media");
  const [oggetto,setOgg] = useState("");
  const [desc,setDesc]   = useState("");
  const [guestNome]      = useState(genGuest());
  const [done,setDone]   = useState(null);

  const autore = utente||{ nome:guestNome, id:null, role:"guest" };

  const invia = () => {
    if(!oggetto.trim()||!desc.trim()) return;
    const t = apriTicket(cat, oggetto, desc, pri, autore);
    setDone(t);
  };

  const CATS = ["Consegna","Prodotto","Ordine","Fatturazione","Montaggio","Altro"];
  const PRI_C = {bassa:P.green, media:P.orange, alta:P.red};

  return (
    <Modal onClose={onClose} maxW={500} noPad>
      <div style={{background:"#c0392b",padding:"18px 22px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div>
          <div style={{fontSize:10,letterSpacing:".1em",color:"rgba(255,255,255,.65)",textTransform:"uppercase",fontWeight:700,marginBottom:3}}>Supporto</div>
          <div style={{fontWeight:700,fontSize:16,color:"white"}}>Apri ticket di assistenza</div>
        </div>
        <button onClick={onClose} style={{background:"rgba(255,255,255,.12)",border:"none",color:"white",width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:14}}><span style={{lineHeight:1}}>{CI.x}</span></button>
      </div>

      {done ? (
        <div style={{padding:"40px 28px",textAlign:"center"}}>
          <div style={{color:P.gold,marginBottom:12,display:"flex",justifyContent:"center"}}><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/><line x1="9" y1="12" x2="15" y2="12"/></svg></div>
          <h3 style={{fontSize:20,fontWeight:800,margin:"0 0 10px",color:P.dark}}>Ticket aperto!</h3>
          <div style={{background:P.lightBg,borderRadius:12,padding:"14px 18px",marginBottom:14}}>
            <div style={{fontSize:11,color:P.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em"}}>Numero ticket</div>
            <div style={{fontSize:26,fontWeight:800,color:P.dark,marginTop:4,letterSpacing:".08em"}}>{done.numero}</div>
          </div>
          <p style={{color:P.softText,fontSize:13,lineHeight:1.8,marginBottom:20}}>Riceverai risposta entro <strong>24 ore lavorative</strong>. Tieni il numero del ticket a portata di mano.</p>
          <BtnPrimary onClick={onClose}>Chiudi</BtnPrimary>
        </div>
      ) : (
        <div style={{padding:"20px 22px"}}>
          {/* categoria */}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",color:P.muted,marginBottom:8}}>Categoria</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {CATS.map(c=>(
                <button key={c} onClick={()=>setCat(c)}
                  style={{padding:"6px 14px",borderRadius:999,border:`1.5px solid ${cat===c?P.dark:P.border}`,
                    background:cat===c?P.dark:P.white,color:cat===c?"white":P.text,
                    cursor:"pointer",fontWeight:700,fontSize:12,fontFamily:"inherit",transition:"all .15s"}}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* priorità */}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",color:P.muted,marginBottom:8}}>Priorità</div>
            <div style={{display:"flex",gap:8}}>
              {Object.entries(PRI_C).map(([k,col])=>(
                <button key={k} onClick={()=>setPri(k)}
                  style={{flex:1,padding:"9px",borderRadius:8,border:`2px solid ${pri===k?col:P.border}`,
                    background:pri===k?col+"1a":P.white,cursor:"pointer",fontFamily:"inherit",
                    fontWeight:700,fontSize:12,color:pri===k?col:P.muted,transition:"all .15s"}}>
                  <span style={{display:"inline-flex",alignItems:"center",gap:5}}><svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>{k.charAt(0).toUpperCase()+k.slice(1)}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{display:"grid",gap:10,marginBottom:14}}>
            <InputField value={oggetto} onChange={e=>setOgg(e.target.value)} placeholder="Oggetto del problema *"/>
            <InputField value={desc}    onChange={e=>setDesc(e.target.value)} placeholder="Descrivi il problema in dettaglio *" rows={4}/>
          </div>
          <BtnPrimary onClick={invia} full color="#c0392b">Apri ticket →</BtnPrimary>
        </div>
      )}
    </Modal>
  );
}

// ─── CHAT WINDOW ─────────────────────────────────────────────────
function ChatWindow({ convId, autore, onBack }) {
  const { conv, inviaMessaggio, assegna, chiudiConv, utente, arredatori } = useApp();
  const c = conv.find(x=>x.id===convId);
  const [testo,setTesto] = useState("");
  const bottomRef = useRef(null);

  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); },[c?.messaggi?.length]);

  if(!c) return null;

  const isArredatore = utente?.role==="arredatore"||utente?.role==="admin";
  const arrInfo = arredatori.find(a=>a.id===c.arredatoreId);
  const tipoMeta = TIPO_META[c.tipo];
  const canSend = c.stato!=="chiusa";
  const meId = autore?.id||autore?.guestToken;

  const send = () => {
    if(!testo.trim()||!canSend) return;
    inviaMessaggio(convId, testo.trim(), autore);
    setTesto("");
  };

  return (
    <div style={{display:"flex",flexDirection:"column",height:"100%",background:P.cream}}>
      {/* HEADER */}
      <div style={{background:P.white,borderBottom:`1.5px solid ${P.border}`,padding:"12px 18px",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
        {onBack && (
          <button onClick={onBack} style={{background:"none",border:"none",cursor:"pointer",color:P.dark,padding:"2px 8px 2px 0",display:"flex",alignItems:"center"}}>{CI.arrow_left}</button>
        )}
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontWeight:700,fontSize:14,color:P.dark,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.oggetto}</div>
          <div style={{display:"flex",gap:8,marginTop:3,alignItems:"center",flexWrap:"wrap"}}>
            <span style={{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,background:tipoMeta.bg,color:tipoMeta.color}}>
              {tipoMeta.icon} {c.tipo}
            </span>
            {arrInfo && <span style={{fontSize:11,color:P.muted}}>con <strong style={{color:P.text}}>{arrInfo.nome}</strong></span>}
            {!c.arredatoreId && <span style={{fontSize:10,fontWeight:700,color:P.orange,background:"#fff3cd",padding:"2px 7px",borderRadius:999}}>In attesa</span>}
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:5,flexShrink:0}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:c.stato==="chiusa"?P.muted:P.green}}/>
          <span style={{fontSize:11,color:P.muted,fontWeight:600}}>{c.stato==="chiusa"?"Chiusa":"Attiva"}</span>
        </div>
      </div>

      {/* AZIONI ARREDATORE */}
      {isArredatore && (c.stato==="aperta") && (
        <div style={{background:"#fffbe6",borderBottom:`1px solid #fde68a`,padding:"8px 14px",display:"flex",gap:8,alignItems:"center",flexShrink:0,flexWrap:"wrap"}}>
          {!c.arredatoreId && (
            <BtnPrimary onClick={()=>assegna(convId,utente.id)} color={P.green} small>
              <span style={{display:"inline-flex",alignItems:"center",gap:5}}>{CI.check} Prendi in carico</span>
            </BtnPrimary>
          )}
          {c.arredatoreId && (
            <BtnOutline onClick={()=>chiudiConv(convId)} small>
              <span style={{display:"inline-flex",alignItems:"center",gap:5}}>{CI.circle_check} Chiudi</span>
            </BtnOutline>
          )}
          {/* ── Dropdown riassegnazione venditore ── */}
          <div style={{display:"flex",alignItems:"center",gap:6,flex:1,minWidth:160}}>
            <span style={{fontSize:11,color:"#856404",fontWeight:600,flexShrink:0}}>
              {c.arredatoreId ? "Venditore:" : "Assegna a:"}
            </span>
            <select
              value={c.arredatoreId||""}
              onChange={e=>assegna(convId, e.target.value||null)}
              style={{flex:1,padding:"5px 8px",borderRadius:7,border:`1.5px solid #f0c040`,
                fontSize:11,fontFamily:"inherit",outline:"none",
                background:"white",color:P.dark,cursor:"pointer",fontWeight:600}}
            >
              <option value="">— Non assegnata —</option>
              {arredatori.filter(a=>a.role==="arredatore"||a.role==="admin").map(a=>(
                <option key={a.id} value={a.id}>{a.nome} · {a.sede}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* MESSAGGI */}
      <div style={{flex:1,overflowY:"auto",padding:"16px 14px",display:"flex",flexDirection:"column",gap:10}}>
        {c.messaggi.length===0 && (
          <div style={{textAlign:"center",color:P.muted,fontSize:13,marginTop:32,lineHeight:1.8}}>
            <div style={{color:P.muted,marginBottom:8,display:"flex",justifyContent:"center"}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            Nessun messaggio ancora.<br/>Invia il primo messaggio!
          </div>
        )}
        {c.messaggi.map(m=>{
          const isMe = m.autoreId===meId;
          const isArr = m.ruolo==="arredatore";
          const bgMsg  = isMe ? P.dark : P.white;
          const colMsg = isMe ? "white" : P.text;
          const arrColor = isArr ? (arredatori.find(a=>a.id===m.autoreId)?.colore||P.blue) : P.blue;
          return (
            <div key={m.id} style={{display:"flex",gap:8,alignItems:"flex-end",justifyContent:isMe?"flex-end":"flex-start"}}>
              {!isMe && <AvatarIcon nome={m.autoreNome} size={28} colore={isArr?arrColor:P.blue}/>}
              <div style={{maxWidth:"72%"}}>
                {!isMe && <div style={{fontSize:10,color:P.muted,marginBottom:3,fontWeight:600}}>{m.autoreNome} {isArr&&"· Arredatore"}</div>}
                <div style={{
                  padding:"10px 13px",
                  borderRadius:isMe?"14px 14px 3px 14px":"14px 14px 14px 3px",
                  background:bgMsg,color:colMsg,fontSize:13,lineHeight:1.6,
                  border:!isMe?`1px solid ${P.border}`:"none",
                  boxShadow:"0 1px 3px #0001"
                }}>{m.testo}</div>
                <div style={{fontSize:10,color:P.muted,marginTop:3,textAlign:isMe?"right":"left"}}>{fmtTime(m.ts)}</div>
              </div>
              {isMe && <AvatarIcon nome={m.autoreNome} size={28} colore={P.dark}/>}
            </div>
          );
        })}
        <div ref={bottomRef}/>
      </div>

      {/* INPUT */}
      {canSend ? (
        <div style={{background:P.white,borderTop:`1.5px solid ${P.border}`,padding:"10px 14px",display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
          <input value={testo} onChange={e=>setTesto(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
            placeholder="Scrivi un messaggio…"
            style={{flex:1,padding:"10px 14px",borderRadius:999,border:`1.5px solid ${P.border}`,fontSize:13,outline:"none",fontFamily:"inherit",background:P.cream}}/>
          <button onClick={send}
            style={{width:38,height:38,borderRadius:"50%",background:testo.trim()?P.dark:"#ddd9d3",border:"none",cursor:testo.trim()?"pointer":"default",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background .15s"}}>
            {CI.send}
          </button>
        </div>
      ) : (
        <div style={{background:P.lightBg,borderTop:`1px solid ${P.border}`,padding:"13px 18px",textAlign:"center",fontSize:12,color:P.muted,flexShrink:0}}>
          Questa conversazione è stata chiusa.
        </div>
      )}
    </div>
  );
}

// ─── AREA CLIENTE ────────────────────────────────────────────────
function AreaCliente() {
  const { utente, conv } = useApp();
  if(!utente) return null;
  const [activeId,setActiveId]  = useState(null);
  const [showNew,setShowNew]    = useState(false);
  const [showTkt,setShowTkt]    = useState(false);

  const mieConv = conv.filter(c => utente && c.clienteId===utente.id);

  return (
    <div style={{minHeight:"80vh",background:P.cream}}>
      {showNew && <NuovaRichiestaModal onClose={()=>setShowNew(false)}/>}
      {showTkt && <NuovoTicketModal onClose={()=>setShowTkt(false)}/>}

      <div style={{background:P.dark,padding:"36px 40px 32px"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <AvatarIcon nome={utente.nome} size={52} colore={utente.colore||P.blue} online/>
          <div style={{flex:1}}>
            <div style={{fontSize:11,letterSpacing:".1em",color:P.gold,fontWeight:700,textTransform:"uppercase",marginBottom:4}}>Area personale</div>
            <div style={{fontSize:22,fontWeight:800,color:"white"}}>{utente.nome}</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,.5)"}}>{utente.email}</div>
          </div>
          <div style={{display:"flex",gap:10}}>
            <BtnOutline onClick={()=>setShowTkt(true)} color="rgba(255,255,255,.4)" style={{color:"white",border:"1.5px solid rgba(255,255,255,.3)",background:"rgba(255,255,255,.08)"}}><span style={{display:"inline-flex",alignItems:"center",gap:6}}>{CI.wrench} Assistenza</span></BtnOutline>
            <BtnPrimary onClick={()=>setShowNew(true)} color={P.gold} textColor={P.dark}>+ Nuova richiesta</BtnPrimary>
          </div>
        </div>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"32px 40px"}}>
        {mieConv.length===0 ? (
          <CardBase style={{padding:"56px 40px",textAlign:"center"}}>
            <div style={{color:P.gold,marginBottom:14,display:"flex",justifyContent:"center"}}><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <div style={{fontSize:20,fontWeight:800,color:P.dark,marginBottom:8}}>Nessuna conversazione</div>
            <p style={{color:P.softText,fontSize:14,lineHeight:1.75,marginBottom:22,maxWidth:380,margin:"0 auto 22px"}}>Inizia una nuova richiesta per parlare con un arredatore specializzato.</p>
            <BtnPrimary onClick={()=>setShowNew(true)}>Nuova richiesta →</BtnPrimary>
          </CardBase>
        ) : (
          <div style={{display:"grid",gridTemplateColumns:activeId?"320px 1fr":"1fr",gap:20,minHeight:520,alignItems:"start"}}>
            {/* LISTA */}
            <CardBase style={{overflow:"hidden"}}>
              <div style={{padding:"13px 16px",borderBottom:`1.5px solid ${P.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{fontWeight:700,fontSize:14,color:P.dark}}>Le mie richieste</div>
                <span style={{fontSize:11,background:P.lightBg,color:P.muted,padding:"3px 8px",borderRadius:999,fontWeight:700}}>{mieConv.length}</span>
              </div>
              {mieConv.map(c=>{
                const tm=TIPO_META[c.tipo];
                const last=c.messaggi[c.messaggi.length-1];
                return (
                  <div key={c.id} onClick={()=>setActiveId(c.id)}
                    style={{padding:"12px 16px",borderBottom:`1px solid ${P.border}`,cursor:"pointer",
                      background:activeId===c.id?"#f0ece6":P.white,
                      borderLeft:activeId===c.id?`3px solid ${P.dark}`:"3px solid transparent",transition:"background .1s"}}>
                    <div style={{display:"flex",justifyContent:"space-between",gap:6,marginBottom:4}}>
                      <div style={{fontWeight:600,fontSize:13,color:P.dark,lineHeight:1.3,flex:1}}>{c.oggetto}</div>
                      {c.stato==="chiusa"&&<Badge label="Chiusa" color={P.muted} bg={P.lightBg} small/>}
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <span style={{fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:999,background:tm.bg,color:tm.color}}>{tm.icon} {c.tipo}</span>
                      {last&&<span style={{fontSize:10,color:P.muted}}>{fmtTime(last.ts)}</span>}
                    </div>
                    {last&&<div style={{fontSize:11,color:P.muted,marginTop:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{last.testo}</div>}
                  </div>
                );
              })}
            </CardBase>

            {/* CHAT */}
            {activeId && (
              <CardBase style={{height:580,display:"flex",flexDirection:"column",overflow:"hidden"}}>
                <ChatWindow convId={activeId} autore={utente} onBack={()=>setActiveId(null)}/>
              </CardBase>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── BACKOFFICE ──────────────────────────────────────────────────

// ─── RICHIESTE PANEL ─────────────────────────────────────────────
function RichiestePanel({ richieste, setRichieste, arredatori, utente }) {
  const isAdmin = utente?.role === "admin";
  const [filterTipo,  setFt]  = useState("all");
  const [filterStato, setFs]  = useState("all");
  const [filterSede,  setFse] = useState("all");
  const [search,      setSrc] = useState("");
  const [detail,      setDet] = useState(null);
  const [notaEdit,    setNota]= useState("");

  // Un arredatore vede solo le sue + quelle non assegnate
  const scope = isAdmin
    ? richieste
    : richieste.filter(r => !r.arredatoreId || r.arredatoreId === utente?.id);

  const filtered = scope.filter(r => {
    if (filterTipo  !== "all" && r.tipo   !== filterTipo)  return false;
    if (filterStato !== "all" && r.stato  !== filterStato) return false;
    if (filterSede  !== "all" && (r.sede||"—") !== filterSede)  return false;
    if (search) {
      const q = search.toLowerCase();
      if (!r.oggetto.toLowerCase().includes(q) && !r.cliente.nome.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const sedi = [...new Set(richieste.map(r=>r.sede||"—"))].sort();
  const counts = Object.fromEntries(Object.keys(STATI_RICHIESTA).map(k=>[k,scope.filter(r=>r.stato===k).length]));

  const upd = (id, patch) => setRichieste(prev => prev.map(r => r.id===id ? {...r,...patch} : r));
  const det = richieste.find(r => r.id === detail);

  const IcoTipo = {
    "Richiesta appuntamento": CI.calendar,
    "Informazioni generali":  CI.help,
    "Richiesta preventivo":   CI.award,
    "Assistenza post-vendita":CI.wrench,
    "Contatto generico":      CI.phone,
  };
  const ColTipo = {
    "Richiesta appuntamento": { color:"#1e7e3e", bg:"#e8f5e9" },
    "Informazioni generali":  { color:"#1a6fa8", bg:"#dbeeff" },
    "Richiesta preventivo":   { color:"#7d6608", bg:"#fef9e7" },
    "Assistenza post-vendita":{ color:"#b45309", bg:"#fff3e0" },
    "Contatto generico":      { color:"#5a3e7b", bg:"#f3e5f5" },
  };

  return (
    <div style={{display:"flex",flex:1,overflow:"hidden"}}>

      {/* ── LISTA ── */}
      <div style={{width:370,background:P.white,borderRight:`1.5px solid ${P.border}`,display:"flex",flexDirection:"column",flexShrink:0,overflow:"hidden"}}>

        {/* Contatori stato (cliccabili come filtro) */}
        <div style={{padding:"14px 14px 10px",background:P.cream,borderBottom:`1.5px solid ${P.border}`,flexShrink:0}}>
          <div style={{fontWeight:800,fontSize:14,color:P.dark,marginBottom:12}}>
            Richieste <span style={{fontWeight:400,color:P.muted,fontSize:12}}>({filtered.length})</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:7,marginBottom:12}}>
            {Object.entries(STATI_RICHIESTA).map(([k,v])=>(
              <div key={k} onClick={()=>setFs(filterStato===k?"all":k)} style={{
                padding:"8px 6px",borderRadius:9,textAlign:"center",cursor:"pointer",
                border:`1.5px solid ${filterStato===k?P.dark:P.border}`,
                background:filterStato===k?P.dark:"white",transition:"all .15s"
              }}>
                <div style={{fontSize:20,fontWeight:800,color:filterStato===k?"white":P.dark,lineHeight:1}}>{counts[k]}</div>
                <div style={{fontSize:9,fontWeight:700,letterSpacing:".05em",textTransform:"uppercase",
                  color:filterStato===k?P.gold:P.muted,marginTop:3}}>{v.label}</div>
              </div>
            ))}
          </div>

          {/* Filtri */}
          <div style={{display:"grid",gap:6}}>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",color:P.muted,display:"flex",pointerEvents:"none"}}>{CI.search}</span>
              <input value={search} onChange={e=>setSrc(e.target.value)}
                placeholder="Cerca per nome o oggetto…"
                style={{width:"100%",paddingLeft:30,padding:"7px 10px 7px 30px",borderRadius:8,
                  border:`1.5px solid ${P.border}`,fontSize:11,fontFamily:"inherit",
                  outline:"none",boxSizing:"border-box",color:P.dark}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
              <select value={filterTipo} onChange={e=>setFt(e.target.value)}
                style={{padding:"6px 8px",borderRadius:8,border:`1.5px solid ${P.border}`,
                  fontSize:10,fontFamily:"inherit",outline:"none",color:P.dark,background:P.white}}>
                <option value="all">Tutti i tipi</option>
                {TIPI_RICHIESTA.map(t=><option key={t} value={t}>{t}</option>)}
              </select>
              <select value={filterSede} onChange={e=>setFse(e.target.value)}
                style={{padding:"6px 8px",borderRadius:8,border:`1.5px solid ${P.border}`,
                  fontSize:10,fontFamily:"inherit",outline:"none",color:P.dark,background:P.white}}>
                <option value="all">Tutte le sedi</option>
                {sedi.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Lista card */}
        <div style={{flex:1,overflowY:"auto"}}>
          {filtered.length===0 && (
            <div style={{padding:"32px 16px",textAlign:"center",color:P.muted,fontSize:13}}>Nessuna richiesta trovata</div>
          )}
          {filtered.map(r => {
            const col = ColTipo[r.tipo]||{ color:P.blue, bg:"#dbeeff" };
            const ico = IcoTipo[r.tipo]||CI.help;
            const sm  = STATI_RICHIESTA[r.stato]||STATI_RICHIESTA.nuova;
            const arr = arredatori.find(a=>a.id===r.arredatoreId);
            const isActive = detail===r.id;
            return (
              <div key={r.id} onClick={()=>{ setDet(r.id); setNota(r.noteInterne||""); }}
                style={{padding:"12px 14px",borderBottom:`1px solid ${P.border}`,cursor:"pointer",
                  background:isActive?"#f0ece6":P.white,
                  borderLeft:isActive?`3px solid ${P.dark}`:"3px solid transparent",
                  transition:"background .12s"}}>
                {/* tipo + priorità + data */}
                <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:5,flexWrap:"wrap"}}>
                  <span style={{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,
                    background:col.bg,color:col.color,display:"inline-flex",alignItems:"center",gap:4}}>
                    {ico}{r.tipo}
                  </span>
                  <span style={{fontSize:9,fontWeight:700,color:PRIORITA_COLOR[r.priorita],
                    display:"inline-flex",alignItems:"center",gap:3,marginLeft:"auto"}}>
                    <svg width="6" height="6" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
                    {r.priorita}
                  </span>
                </div>
                {/* oggetto */}
                <div style={{fontWeight:600,fontSize:12,color:P.dark,lineHeight:1.35,marginBottom:5}}>{r.oggetto}</div>
                {/* cliente + sede */}
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
                  <span style={{fontSize:11,color:P.softText}}>{r.cliente.nome}</span>
                  {r.sede && <span style={{fontSize:9,color:P.muted}}>{r.sede.split("—")[0].trim()}</span>}
                </div>
                {/* stato + arredatore + data */}
                <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                  <span style={{fontSize:9,fontWeight:700,padding:"2px 8px",borderRadius:999,
                    background:sm.bg,color:sm.color}}>{sm.label}</span>
                  {arr
                    ? <span style={{fontSize:9,color:P.blue,fontWeight:600}}>→ {arr.nome}</span>
                    : <span style={{fontSize:9,color:P.muted,fontStyle:"italic"}}>non assegnata</span>}
                  <span style={{fontSize:9,color:P.muted,marginLeft:"auto"}}>{fmtDate(r.createdAt)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DETTAGLIO ── */}
      {det ? (
        <div style={{flex:1,overflowY:"auto",padding:"24px 28px",background:P.cream}}>
          <div style={{maxWidth:660,margin:"0 auto"}}>

            {/* Titolo + badge */}
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,marginBottom:20}}>
              <div>
                <div style={{display:"flex",gap:7,flexWrap:"wrap",marginBottom:8,alignItems:"center"}}>
                  {(()=>{const col=ColTipo[det.tipo]||{color:P.blue,bg:"#dbeeff"};const ico=IcoTipo[det.tipo]||CI.help;return(
                    <span style={{fontSize:11,fontWeight:700,padding:"3px 11px",borderRadius:999,background:col.bg,color:col.color,display:"inline-flex",alignItems:"center",gap:5}}>
                      {ico}{det.tipo}
                    </span>);})()}
                  {(()=>{const sm=STATI_RICHIESTA[det.stato]||STATI_RICHIESTA.nuova;return(
                    <span style={{fontSize:11,fontWeight:700,padding:"3px 11px",borderRadius:999,background:sm.bg,color:sm.color}}>{sm.label}</span>);})()}
                  <span style={{fontSize:11,fontWeight:700,color:PRIORITA_COLOR[det.priorita],display:"inline-flex",alignItems:"center",gap:4}}>
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
                    Priorità {det.priorita}
                  </span>
                </div>
                <h2 style={{fontSize:17,fontWeight:800,margin:"0 0 4px",color:P.dark,lineHeight:1.3}}>{det.oggetto}</h2>
                <div style={{fontSize:11,color:P.muted}}>{fmtFull(det.createdAt)}</div>
              </div>
              <button onClick={()=>setDet(null)}
                style={{background:"none",border:`1.5px solid ${P.border}`,borderRadius:8,padding:"6px 12px",
                  cursor:"pointer",fontSize:11,color:P.muted,fontFamily:"inherit",flexShrink:0}}>Chiudi</button>
            </div>

            {/* Grid cliente + sede */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:P.border,
              borderRadius:12,overflow:"hidden",marginBottom:14,border:`1.5px solid ${P.border}`}}>
              <div style={{background:"white",padding:"14px 18px"}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:P.muted,marginBottom:8}}>Cliente</div>
                <div style={{fontWeight:700,fontSize:13,color:P.dark,marginBottom:6}}>{det.cliente.nome}</div>
                <div style={{display:"flex",flexDirection:"column",gap:4}}>
                  <a href={`mailto:${det.cliente.email}`}
                    style={{fontSize:11,color:P.blue,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:5}}>
                    {CI.send}<span>{det.cliente.email}</span>
                  </a>
                  {det.cliente.tel && (
                    <a href={`tel:${det.cliente.tel}`}
                      style={{fontSize:11,color:P.blue,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:5}}>
                      {CI.phone}<span>{det.cliente.tel}</span>
                    </a>
                  )}
                </div>
              </div>
              <div style={{background:"white",padding:"14px 18px"}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:P.muted,marginBottom:8}}>Sede · Data preferita</div>
                <div style={{fontWeight:600,fontSize:13,color:P.dark,marginBottom:6}}>{det.sede||"—"}</div>
                {det.dataPref && (
                  <div style={{fontSize:11,color:P.softText,display:"inline-flex",alignItems:"center",gap:5}}>
                    {CI.calendar}
                    <span>{new Date(det.dataPref).toLocaleDateString("it-IT",{day:"2-digit",month:"long",year:"numeric"})}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Messaggio cliente */}
            <div style={{background:"white",border:`1.5px solid ${P.border}`,borderRadius:12,padding:"16px 20px",marginBottom:14}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:P.muted,marginBottom:10}}>Messaggio del cliente</div>
              <p style={{fontSize:13,color:P.text,lineHeight:1.8,margin:0,
                borderLeft:"3px solid #c8b89a",paddingLeft:14}}>{det.messaggio}</p>
            </div>

            {/* Cambio stato */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}>
              {Object.entries(STATI_RICHIESTA).map(([k,v])=>(
                <button key={k} onClick={()=>upd(det.id,{stato:k})}
                  style={{padding:"9px 0",borderRadius:9,cursor:"pointer",fontFamily:"inherit",
                    border:`1.5px solid ${det.stato===k?P.dark:P.border}`,
                    background:det.stato===k?P.dark:"white",
                    color:det.stato===k?"white":P.softText,
                    fontSize:11,fontWeight:700,transition:"all .15s"}}>
                  {v.label}
                </button>
              ))}
            </div>

            {/* Assegnazione */}
            <div style={{background:"white",border:`1.5px solid ${P.border}`,borderRadius:12,padding:"14px 18px",marginBottom:14}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:P.muted,marginBottom:10}}>Arredatore assegnato</div>
              <select value={det.arredatoreId||""} onChange={e=>upd(det.id,{arredatoreId:e.target.value||null})}
                style={{width:"100%",padding:"9px 12px",borderRadius:8,border:`1.5px solid ${P.border}`,
                  fontSize:13,fontFamily:"inherit",outline:"none",background:P.white,color:P.dark}}>
                <option value="">— Non assegnata —</option>
                {arredatori.filter(a=>a.role==="arredatore").map(a=>(
                  <option key={a.id} value={a.id}>{a.nome} · {a.sede}</option>
                ))}
              </select>
            </div>

            {/* Note interne */}
            <div style={{background:"white",border:`1.5px solid ${P.border}`,borderRadius:12,padding:"14px 18px"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:P.muted,marginBottom:8}}>
                Note interne <span style={{fontSize:9,fontStyle:"italic",fontWeight:400,letterSpacing:0}}>(non visibili al cliente)</span>
              </div>
              <textarea value={notaEdit} onChange={e=>setNota(e.target.value)} rows={3}
                placeholder="Osservazioni, follow-up, stato trattativa…"
                style={{width:"100%",padding:"9px 12px",borderRadius:8,border:`1.5px solid ${P.border}`,
                  fontSize:12,fontFamily:"inherit",outline:"none",resize:"vertical",
                  boxSizing:"border-box",color:P.dark,lineHeight:1.6}}/>
              <button onClick={()=>upd(det.id,{noteInterne:notaEdit})}
                style={{marginTop:9,padding:"8px 18px",borderRadius:8,border:"none",
                  background:P.dark,color:"white",fontSize:12,fontWeight:700,
                  cursor:"pointer",fontFamily:"inherit"}}>Salva nota</button>
              {det.noteInterne && det.noteInterne!==notaEdit && (
                <span style={{fontSize:10,color:P.muted,marginLeft:10}}>Modifiche non salvate</span>
              )}
            </div>

          </div>
        </div>
      ) : (
        <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",
          flexDirection:"column",color:P.muted,background:P.cream,gap:10}}>
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#c8b89a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
          <div style={{fontSize:15,fontWeight:700,color:P.text}}>Seleziona una richiesta</div>
          <div style={{fontSize:12,color:P.muted,textAlign:"center",maxWidth:260,lineHeight:1.6}}>
            Scegli dalla lista a sinistra per vedere i dettagli, gestire l'assegnazione e aggiungere note.
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CHAT SECTION PANEL (per le sezioni tipo-specifiche) ────────
function ChatSectionPanel({ tipoFiltro, tipoLabel, tipoColor, tipoBg, tipoIcon, convList, arredatori, utente }) {
  const [activeConvId, setAct] = useState(null);
  const [filterStato,  setFs]  = useState("all");

  const filtered = convList.filter(c => {
    if(tipoFiltro !== "__tutti__" && c.tipo !== tipoFiltro) return false;
    if(filterStato !== "all" && c.stato !== filterStato) return false;
    return true;
  });
  const activeConv = convList.find(c => c.id === activeConvId);
  const nonAssegnate = filtered.filter(c => !c.arredatoreId && c.stato === "aperta").length;

  return (
    <div style={{display:"flex",flex:1,overflow:"hidden"}}>

      {/* ── LISTA ── */}
      <div style={{width:310,background:P.white,borderRight:`1.5px solid ${P.border}`,display:"flex",flexDirection:"column",flexShrink:0,overflow:"hidden"}}>

        {/* Header sezione */}
        <div style={{padding:"14px 16px",borderBottom:`1.5px solid ${P.border}`,background:tipoBg,flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
            <span style={{color:tipoColor,fontSize:18}}>{tipoIcon}</span>
            <div style={{fontWeight:800,fontSize:14,color:tipoColor}}>{tipoLabel}</div>
            <span style={{marginLeft:"auto",fontSize:11,fontWeight:700,background:"white",color:tipoColor,
              padding:"2px 9px",borderRadius:999,border:`1.5px solid ${tipoColor}33`}}>
              {filtered.length}
            </span>
          </div>
          {nonAssegnate > 0 && (
            <div style={{fontSize:10,color:P.orange,fontWeight:700,display:"flex",alignItems:"center",gap:4}}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
              {nonAssegnate} non assegnate
            </div>
          )}
          {/* Filtro stato */}
          <div style={{display:"flex",gap:5,marginTop:10}}>
            {[["all","Tutte"],["aperta","Aperte"],["chiusa","Chiuse"]].map(([k,l])=>(
              <button key={k} onClick={()=>setFs(k)}
                style={{padding:"4px 10px",borderRadius:999,fontSize:10,fontWeight:700,cursor:"pointer",
                  fontFamily:"inherit",border:"none",
                  background:filterStato===k?tipoColor:"rgba(0,0,0,.07)",
                  color:filterStato===k?"white":P.softText,transition:"all .15s"}}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Lista conversazioni */}
        <div style={{flex:1,overflowY:"auto"}}>
          {filtered.length === 0 && (
            <div style={{padding:"32px 16px",textAlign:"center",color:P.muted,fontSize:13}}>
              Nessuna conversazione
            </div>
          )}
          {filtered.map(c => {
            const last = c.messaggi[c.messaggi.length - 1];
            const isNew = !c.arredatoreId && c.stato === "aperta";
            const arr = arredatori.find(a => a.id === c.arredatoreId);
            const isActive = activeConvId === c.id;
            return (
              <div key={c.id} onClick={() => setAct(c.id)}
                style={{padding:"11px 14px",borderBottom:`1px solid ${P.border}`,cursor:"pointer",
                  background:isActive?"#f0ece6":P.white,
                  borderLeft:isActive?`3px solid ${tipoColor}`:"3px solid transparent",
                  transition:"background .1s"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:6,marginBottom:4}}>
                  <div style={{fontWeight:600,fontSize:12,color:P.dark,lineHeight:1.3,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.oggetto}</div>
                  <div style={{display:"flex",gap:3,flexShrink:0}}>
                    {isNew && <Badge label="NEW" color="#856404" bg="#fffbe6" small/>}
                    {c.stato==="chiusa" && <Badge label="Chiusa" color={P.muted} bg={P.lightBg} small/>}
                  </div>
                </div>
                <div style={{fontSize:10,color:P.muted,marginBottom:3}}>{c.clienteNome} · {fmtDate(c.createdAt)}</div>
                {arr
                  ? <div style={{fontSize:10,color:P.blue,fontWeight:600}}>→ {arr.nome}</div>
                  : <div style={{fontSize:10,color:P.orange,fontStyle:"italic"}}>Non assegnata</div>}
                {last && <div style={{fontSize:10,color:P.muted,marginTop:3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{last.testo}</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CHAT PANEL ── */}
      {activeConv ? (
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <ChatWindow convId={activeConvId} autore={utente}/>
        </div>
      ) : (
        <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",
          flexDirection:"column",color:P.muted,background:P.cream,gap:10}}>
          <span style={{fontSize:40,color:tipoColor,opacity:.4}}>{tipoIcon}</span>
          <div style={{fontSize:15,fontWeight:700,color:P.text}}>{tipoLabel}</div>
          <div style={{fontSize:12,color:P.muted,textAlign:"center",maxWidth:240,lineHeight:1.6}}>
            Seleziona una conversazione dalla lista per visualizzarla e rispondere.
          </div>
        </div>
      )}
    </div>
  );
}

function Backoffice() {
  const { utente, logout, conv, tickets, richieste, setRichieste, arredatori } = useApp();
  if(!utente) return null;
  const isAdmin      = utente?.role==="admin";
  const isAssistenza = utente?.role==="assistenza";

  // Sezioni conversazione per tipo — tipoFiltro deve corrispondere ai valori in TIPO_META
  const SEZIONI_CONV = [
    { k:"appuntamenti", label:"Richiesta Appuntamento", tipoFiltro:"Richiesta appuntamento", ico:CI.calendar, color:"#1e7e3e", bg:"#e8f5e9" },
    { k:"info",         label:"Informazioni Generali",  tipoFiltro:"Info prodotto",          ico:CI.sofa,     color:"#1a6fa8", bg:"#dbeeff" },
    { k:"preventivi",   label:"Richiesta Preventivo",   tipoFiltro:"Assistenza",             ico:CI.award,    color:"#b45309", bg:"#fff3e0" },
    { k:"contatti",     label:"Contatto Generico",      tipoFiltro:"__tutti__",              ico:CI.phone,    color:"#5a3e7b", bg:"#f3e5f5" },
  ];

  const convList = isAdmin ? conv : conv.filter(c => !c.arredatoreId || c.arredatoreId === utente?.id);

  const defaultTab = isAssistenza ? "tickets" : "appuntamenti";
  const [tab, setTab] = useState(defaultTab);

  const ticketAperti = tickets.filter(t => t.stato !== "chiuso").length;
  const richiesteNuove = richieste.filter(r => r.stato === "nuova").length;

  // Badge per ogni sezione conv
  const badgeSezione = k => {
    const s = SEZIONI_CONV.find(x => x.k === k);
    if(!s) return 0;
    return convList.filter(c =>
      (s.tipoFiltro === "__tutti__" || c.tipo === s.tipoFiltro) &&
      !c.arredatoreId && c.stato === "aperta"
    ).length;
  };

  const PRI_C  = {bassa:P.green, media:P.orange, alta:P.red};
  const STATO_C = {aperto:P.green, lavorazione:P.blue, chiuso:P.muted};

  // Sidebar items
  const sideItems = [
    ...(!isAssistenza ? [
      { k:"divider_conv", divider:true, label:"CONVERSAZIONI" },
      ...SEZIONI_CONV.map(s=>({ k:s.k, ico:s.ico, label:s.label, badge:badgeSezione(s.k), color:s.color })),
      { k:"divider_ops", divider:true, label:"OPERAZIONI" },
      { k:"richieste", ico:CI.package, label:"Richieste form", badge:richiesteNuove },
    ] : []),
    ...(isAssistenza||isAdmin ? [
      { k:"tickets", ico:CI.ticket, label:"Assistenza", badge:ticketAperti },
    ] : []),
    ...(isAdmin ? [{ k:"stats", ico:CI.bar_chart, label:"Overview", badge:0 }] : []),
  ];

  return (
    <div style={{display:"flex",flexDirection:"column",height:"100vh",background:P.dark,overflow:"hidden"}}>

      {/* TOP BAR */}
      <div style={{background:"#0f0c0b",borderBottom:"1px solid #2b2321",padding:"0 20px",
        display:"flex",alignItems:"center",height:52,gap:14,flexShrink:0}}>
        <div style={{fontWeight:800,fontSize:16,color:"white",fontFamily:"Georgia,serif",letterSpacing:"-.03em"}}>asta del mobile</div>
        <div style={{background:"#2b2321",borderRadius:6,padding:"3px 10px",fontSize:10,fontWeight:700,letterSpacing:".08em",color:P.gold,textTransform:"uppercase"}}>
          {isAdmin?"Admin":isAssistenza?"Assistenza":"Arredatore"}
        </div>
        <div style={{flex:1}}/>
        <AvatarIcon nome={utente.nome} size={28} colore={utente.colore||P.blue} online/>
        <div>
          <div style={{fontSize:12,fontWeight:700,color:"white"}}>{utente.nome}</div>
          <div style={{fontSize:10,color:"rgba(255,255,255,.4)"}}>{utente.sede}</div>
        </div>
        <button onClick={()=>{logout();}} style={{background:"rgba(255,255,255,.07)",border:"none",color:"rgba(255,255,255,.5)",fontSize:11,padding:"5px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"}}>Esci</button>
      </div>

      <div style={{display:"flex",flex:1,overflow:"hidden"}}>

        {/* ── SIDEBAR ── */}
        <div style={{width:200,background:"#141110",borderRight:"1px solid #2b2321",padding:"10px 0",display:"flex",flexDirection:"column",flexShrink:0,overflowY:"auto"}}>
          {sideItems.map((item,i) => {
            if(item.divider) return (
              <div key={item.k+i} style={{padding:"14px 16px 5px",fontSize:9,fontWeight:700,letterSpacing:".12em",
                color:"rgba(255,255,255,.22)",textTransform:"uppercase"}}>
                {item.label}
              </div>
            );
            const isActive = tab === item.k;
            return (
              <div key={item.k} onClick={()=>setTab(item.k)}
                style={{padding:"10px 16px",display:"flex",alignItems:"center",gap:9,cursor:"pointer",
                  borderLeft:`3px solid ${isActive?(item.color||P.gold):"transparent"}`,
                  background:isActive?"rgba(255,255,255,.06)":"transparent",
                  color:isActive?"white":"rgba(255,255,255,.42)",
                  fontSize:12,fontWeight:isActive?700:400,transition:"all .15s"}}>
                <span style={{fontSize:14,color:isActive?(item.color||"white"):"rgba(255,255,255,.4)"}}>{item.ico}</span>
                <span style={{flex:1}}>{item.label}</span>
                {item.badge>0 && (
                  <span style={{background:"#c0392b",color:"white",fontSize:9,fontWeight:800,
                    minWidth:16,height:16,borderRadius:8,display:"flex",alignItems:"center",
                    justifyContent:"center",padding:"0 3px"}}>
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ── CONTENT ── */}
        <div style={{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",background:P.cream}}>

          {/* Sezioni conversazione per tipo */}
          {SEZIONI_CONV.map(s => tab===s.k && (
            <ChatSectionPanel key={s.k}
              tipoFiltro={s.tipoFiltro}
              tipoLabel={s.label}
              tipoColor={s.color}
              tipoBg={s.bg}
              tipoIcon={s.ico}
              convList={convList}
              arredatori={arredatori}
              utente={utente}
            />
          ))}

          {/* Richieste form */}
          {tab==="richieste" && (
            <RichiestePanel richieste={richieste} setRichieste={setRichieste} arredatori={arredatori} utente={utente}/>
          )}

          {/* Tickets assistenza */}
          {tab==="tickets" && (
            <div style={{flex:1,overflowY:"auto",padding:28}}>
              <div style={{maxWidth:900,margin:"0 auto"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
                  <h2 style={{fontSize:20,fontWeight:800,margin:0,color:P.dark}}>Ticket assistenza</h2>
                  <div style={{display:"flex",gap:10,fontSize:12}}>
                    <span style={{background:"#e8f5e9",color:P.green,fontWeight:700,padding:"4px 12px",borderRadius:999}}>{tickets.filter(t=>t.stato==="aperto").length} aperti</span>
                    <span style={{background:"#e3f2fd",color:P.blue,fontWeight:700,padding:"4px 12px",borderRadius:999}}>{tickets.filter(t=>t.stato==="lavorazione").length} in corso</span>
                  </div>
                </div>
                <div style={{display:"grid",gap:12}}>
                  {tickets.map(t=>(
                    <CardBase key={t.id} style={{padding:"15px 20px"}}>
                      <div style={{display:"flex",gap:14,alignItems:"center",flexWrap:"wrap"}}>
                        <div style={{textAlign:"center",minWidth:88,flexShrink:0,borderRight:`1px solid ${P.border}`,paddingRight:14}}>
                          <div style={{fontSize:9,fontWeight:700,color:P.muted,textTransform:"uppercase",letterSpacing:".06em"}}>Ticket</div>
                          <div style={{fontSize:13,fontWeight:800,color:P.dark,marginTop:2}}>{t.numero}</div>
                          <div style={{fontSize:9,color:P.muted,marginTop:2}}>{fmtDate(t.createdAt)}</div>
                        </div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontWeight:700,fontSize:14,color:P.dark,marginBottom:5}}>{t.oggetto}</div>
                          <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                            <span style={{fontSize:11,background:P.lightBg,color:P.text,fontWeight:600,padding:"2px 9px",borderRadius:999}}>{t.tipo}</span>
                            <span style={{fontSize:11,color:P.muted}}>Da: <strong>{t.clienteNome}</strong></span>
                          </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",flexShrink:0}}>
                          <span style={{fontSize:11,fontWeight:700,color:PRI_C[t.priorita],display:"inline-flex",alignItems:"center",gap:4}}><svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>{t.priorita}</span>
                          <span style={{fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:999,
                            background:STATO_C[t.stato]+"1a",color:STATO_C[t.stato],
                            border:`1.5px solid ${STATO_C[t.stato]}44`}}>
                            {t.stato==="aperto"?"Aperto":t.stato==="lavorazione"?"In lavorazione":"Chiuso"}
                          </span>
                        </div>
                      </div>
                    </CardBase>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Stats / Overview */}
          {tab==="stats" && isAdmin && (
            <div style={{flex:1,overflowY:"auto",padding:28}}>
              <div style={{maxWidth:900,margin:"0 auto"}}>
                <h2 style={{fontSize:20,fontWeight:800,margin:"0 0 20px",color:P.dark}}>Overview</h2>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:24}}>
                  {[
                    { l:"Conversazioni", v:conv.length,                               ico:CI.chat,     col:P.blue   },
                    { l:"Aperte",        v:conv.filter(c=>c.stato==="aperta").length, ico:CI.circle,   col:P.green  },
                    { l:"Non assegnate", v:conv.filter(c=>!c.arredatoreId).length,    ico:CI.clock,    col:P.orange },
                    { l:"Ticket",        v:tickets.length,                            ico:CI.ticket,   col:P.red    },
                  ].map(x=>(
                    <CardBase key={x.l} style={{padding:"18px 16px",borderTop:`4px solid ${x.col}`}}>
                      <div style={{fontSize:22,marginBottom:8}}>{x.ico}</div>
                      <div style={{fontSize:30,fontWeight:800,color:x.col,lineHeight:1}}>{x.v}</div>
                      <div style={{fontSize:12,color:P.muted,marginTop:6}}>{x.l}</div>
                    </CardBase>
                  ))}
                </div>
                <CardBase style={{overflow:"hidden"}}>
                  <div style={{padding:"12px 18px",borderBottom:`1.5px solid ${P.border}`,fontWeight:700,fontSize:14,color:P.dark}}>Team arredatori</div>
                  {SEED_ARREDATORI.filter(a=>a.role==="arredatore").map(a=>{
                    const mc=conv.filter(c=>c.arredatoreId===a.id);
                    return (
                      <div key={a.id} style={{padding:"12px 18px",borderBottom:`1px solid ${P.border}`,display:"flex",alignItems:"center",gap:12}}>
                        <AvatarIcon nome={a.nome} size={34} colore={a.colore} online/>
                        <div style={{flex:1}}>
                          <div style={{fontWeight:700,fontSize:13,color:P.dark}}>{a.nome}</div>
                          <div style={{fontSize:11,color:P.muted}}>{a.sede}</div>
                        </div>
                        <div style={{fontSize:12,color:P.muted}}><strong style={{color:P.dark}}>{mc.length}</strong> conversazioni</div>
                        <div style={{fontSize:12,color:P.green,fontWeight:700}}>● Online</div>
                      </div>
                    );
                  })}
                </CardBase>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ─── SEZIONE ASSISTENZA HOMEPAGE ─────────────────────────────────
function SezioneAssistenza({ onApriTicket }) {
  const features = [
    { ico:CI.zap,     t:"Risposta in 24h",    d:"Tempi garantiti per ogni segnalazione" },
    { ico:CI.search,  t:"Tracciabilità",      d:"Numero ticket univoco per monitorare lo stato" },
    { ico:CI.phone,   t:"Multi-canale",       d:"Ticket, email, telefono e chat in-app" },
    { ico:CI.shield,  t:"Risoluzione garantita",d:"Seguiamo il caso fino alla chiusura" },
  ];
  return (
    <div style={{background:P.white,borderTop:`1.5px solid ${P.border}`}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"72px 64px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"center"}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:P.muted,marginBottom:12}}>Supporto clienti</div>
            <h2 style={{fontSize:36,fontWeight:800,margin:"0 0 16px",color:P.dark,letterSpacing:"-.02em",lineHeight:1.1,fontFamily:"Georgia,serif"}}>
              Hai bisogno<br/>di assistenza?
            </h2>
            <p style={{color:P.softText,fontSize:15,lineHeight:1.85,marginBottom:24}}>
              Il nostro team è a tua disposizione per qualsiasi problema su ordini, consegne, prodotti e fatturazione. Apri un ticket: ti risponderemo entro 24 ore lavorative.
            </p>
            <div style={{display:"grid",gap:12,marginBottom:28}}>
              {[
                { ico:CI.truck,   t:"Consegne e montaggio",  d:"Problemi con tempi o modalità di consegna" },
                { ico:CI.sofa,    t:"Prodotti e qualità",     d:"Difetti, sostituzioni o reclami prodotto" },
                { ico:CI.package, t:"Ordini e fatturazione",  d:"Stato ordine, modifiche, documenti fiscali" },
              ].map(x=>(
                <div key={x.t} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                  <span style={{fontSize:20,flexShrink:0,marginTop:1}}>{x.ico}</span>
                  <div>
                    <div style={{fontWeight:700,fontSize:14,color:P.dark}}>{x.t}</div>
                    <div style={{fontSize:12,color:P.softText,marginTop:2,lineHeight:1.6}}>{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <BtnPrimary onClick={onApriTicket} color="#c0392b" style={{padding:"13px 28px",fontSize:14}}><span style={{display:"inline-flex",alignItems:"center",gap:6}}>{CI.wrench} Apri ticket assistenza</span></BtnPrimary>
              <BtnOutline style={{padding:"13px 28px",fontSize:14}}><span style={{display:"inline-flex",alignItems:"center",gap:6}}>{CI.phone} Chiama il supporto</span></BtnOutline>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {features.map(x=>(
              <CardBase key={x.t} style={{padding:"20px 18px"}}>
                <div style={{fontSize:28,marginBottom:10}}>{x.ico}</div>
                <div style={{fontWeight:700,fontSize:14,color:P.dark,marginBottom:5}}>{x.t}</div>
                <div style={{fontSize:12,color:P.softText,lineHeight:1.65}}>{x.d}</div>
              </CardBase>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGINA RICHIESTE ASSISTENZA ─────────────────────────────────
function RichiesteAssistenza() {
  const { tickets, utente } = useApp();
  const [showNew,setShowNew]  = useState(false);
  const [filtro,setFiltro]    = useState("all");

  const stati  = [{k:"all",l:"Tutti"},{k:"aperto",l:"Aperti"},{k:"lavorazione",l:"In lavorazione"},{k:"chiuso",l:"Chiusi"}];
  const filtered = filtro==="all" ? tickets : tickets.filter(t=>t.stato===filtro);
  const PRI_C  = {bassa:P.green,media:P.orange,alta:P.red};
  const STATO_C= {aperto:P.green,lavorazione:P.blue,chiuso:P.muted};

  return (
    <div style={{minHeight:"80vh",background:P.cream}}>
      {showNew && <NuovoTicketModal onClose={()=>setShowNew(false)}/>}

      {/* HERO */}
      <div style={{background:"linear-gradient(135deg,#c0392b,#922b21)",padding:"60px 64px 52px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:".12em",color:"rgba(255,255,255,.55)",textTransform:"uppercase",marginBottom:12}}>Supporto</div>
          <h1 style={{fontSize:44,fontWeight:800,color:"white",margin:"0 0 12px",fontFamily:"Georgia,serif",letterSpacing:"-.03em"}}>Richieste di assistenza</h1>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:15,lineHeight:1.8,maxWidth:500,margin:"0 0 24px"}}>
            Apri un ticket per segnalare un problema. Il team di supporto risponde entro 24 ore lavorative.
          </p>
          <BtnPrimary onClick={()=>setShowNew(true)} color="white" textColor="#c0392b" style={{padding:"13px 28px",fontSize:14,fontWeight:800}}><span style={{display:"inline-flex",alignItems:"center",gap:6}}>{CI.wrench} Nuovo ticket</span></BtnPrimary>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{background:P.white,borderBottom:`1.5px solid ${P.border}`}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"28px 64px",display:"flex",gap:0,overflow:"auto"}}>
          {[
            {n:"1",t:"Apri ticket",d:"Compila il form con categoria e priorità"},
            {n:"2",t:"Ricevi numero",d:"Codice univoco per tracciare lo stato"},
            {n:"3",t:"In lavorazione",d:"Il team analizza e prende in carico"},
            {n:"4",t:"Risolto",d:"Notifica di chiusura con soluzione"},
          ].map((s,i)=>(
            <div key={s.n} style={{display:"flex",alignItems:"center",gap:0,flex:1,minWidth:200}}>
              <div style={{textAlign:"center",flex:1}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:P.dark,color:P.gold,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,margin:"0 auto 8px"}}>
                  {s.n}
                </div>
                <div style={{fontWeight:700,fontSize:13,color:P.dark}}>{s.t}</div>
                <div style={{fontSize:11,color:P.muted,marginTop:3,lineHeight:1.5}}>{s.d}</div>
              </div>
              {i<3&&<div style={{width:32,height:2,background:P.border,flexShrink:0}}/>}
            </div>
          ))}
        </div>
      </div>

      {/* FILTRI + LISTA */}
      <div style={{maxWidth:1100,margin:"0 auto",padding:"32px 64px"}}>
        <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap",alignItems:"center"}}>
          <span style={{fontSize:13,color:P.muted,marginRight:4}}>Filtra:</span>
          {stati.map(s=>(
            <button key={s.k} onClick={()=>setFiltro(s.k)}
              style={{padding:"7px 16px",borderRadius:999,fontSize:12,fontWeight:700,cursor:"pointer",
                border:`1.5px solid ${filtro===s.k?P.dark:P.border}`,
                background:filtro===s.k?P.dark:P.white,
                color:filtro===s.k?"white":P.text,fontFamily:"inherit",transition:"all .15s"}}>
              {s.l} ({s.k==="all"?tickets.length:tickets.filter(t=>t.stato===s.k).length})
            </button>
          ))}
        </div>

        <div style={{display:"grid",gap:12,marginBottom:32}}>
          {filtered.map(t=>(
            <CardBase key={t.id} style={{padding:"16px 22px"}}>
              <div style={{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"}}>
                <div style={{textAlign:"center",minWidth:90,borderRight:`1px solid ${P.border}`,paddingRight:16,flexShrink:0}}>
                  <div style={{fontSize:9,fontWeight:700,color:P.muted,textTransform:"uppercase",letterSpacing:".06em"}}>Ticket</div>
                  <div style={{fontSize:14,fontWeight:800,color:P.dark,marginTop:2}}>{t.numero}</div>
                  <div style={{fontSize:10,color:P.muted,marginTop:2}}>{fmtDate(t.createdAt)}</div>
                </div>
                <div style={{flex:1,minWidth:200}}>
                  <div style={{fontWeight:700,fontSize:15,color:P.dark,marginBottom:6}}>{t.oggetto}</div>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                    <span style={{fontSize:11,background:P.lightBg,color:P.text,fontWeight:600,padding:"2px 10px",borderRadius:999}}>{t.tipo}</span>
                    <span style={{fontSize:11,color:P.muted}}>Segnalato da: <strong>{t.clienteNome}</strong></span>
                  </div>
                </div>
                <div style={{display:"flex",gap:12,alignItems:"center",flexShrink:0}}>
                  <span style={{fontSize:12,fontWeight:700,color:PRI_C[t.priorita],display:"inline-flex",alignItems:"center",gap:4}}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>{t.priorita}
                  </span>
                  <span style={{fontSize:12,fontWeight:700,padding:"5px 14px",borderRadius:999,
                    background:STATO_C[t.stato]+"18",color:STATO_C[t.stato],
                    border:`1.5px solid ${STATO_C[t.stato]}44`}}>
                    {t.stato==="aperto"?"Aperto":t.stato==="lavorazione"?"In lavorazione":"Chiuso"}
                  </span>
                </div>
              </div>
            </CardBase>
          ))}
        </div>

        {/* FAQ rapida */}
        <div style={{...CardBase().props?.style,background:P.cream,borderRadius:14,border:`1.5px solid ${P.border}`,padding:"22px 26px"}}>
          <div style={{fontWeight:700,fontSize:15,color:P.dark,marginBottom:14}}><span style={{display:"inline-flex",alignItems:"center",gap:6}}>{CI.help} Risposte rapide</span></div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
            {[
              {q:"Dove trovo lo stato del mio ordine?",a:"Nell'area personale sotto 'Le mie richieste'. Ricevi email ad ogni aggiornamento."},
              {q:"Come cambio la data di consegna?",a:"Contatta il negozio entro 48h dalla data concordata. Il numero è nella conferma d'ordine."},
              {q:"Prodotto arrivato danneggiato?",a:"Apri un ticket 'Prodotto' ad alta priorità allegando foto. Attiviamo la sostituzione entro 48h."},
            ].map(x=>(
              <div key={x.q} style={{background:P.white,borderRadius:10,padding:"14px 16px",border:`1px solid ${P.border}`}}>
                <div style={{fontWeight:600,fontSize:12,color:P.dark,marginBottom:6,lineHeight:1.4}}><span style={{display:"inline-flex",alignItems:"center",gap:5}}>{CI.help} {x.q}</span></div>
                <div style={{fontSize:12,color:P.softText,lineHeight:1.65}}>{x.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HEADER GLOBALE ──────────────────────────────────────────────

function ChatDrawer({ onClose }) {
  const { utente, conv, logout } = useApp();
  const isStaff = utente?.role === "arredatore" || utente?.role === "admin";
  const [showNew,  setShowNew]  = useState(null);
  const [showTkt,  setShowTkt]  = useState(false);
  const [showAuth, setShowAuth] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const mieConv = utente && !isStaff ? conv.filter(c => c.clienteId === utente.id) : [];

  useEffect(() => {
    const fn = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div style={{ position:"fixed", inset:0, zIndex:9000, display:"flex", justifyContent:"flex-end" }}>
      <div style={{ position:"absolute", inset:0, background:"rgba(20,14,12,.52)", backdropFilter:"blur(4px)" }} onClick={onClose}/>
      <div style={{
        position:"relative", width:"100%", maxWidth:440, height:"100%",
        background:P.cream, display:"flex", flexDirection:"column",
        boxShadow:"-12px 0 60px rgba(0,0,0,.25)",
        animation:"chatSlideIn .28s cubic-bezier(.16,1,.3,1)"
      }}>
        <style>{`@keyframes chatSlideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}`}</style>

        {showNew  && <NuovaRichiestaModal onClose={() => setShowNew(null)} defaultTipo={showNew}/>}
        {showTkt  && <NuovoTicketModal   onClose={() => setShowTkt(false)}/>}
        {showAuth && <ChatAuthModal          onClose={() => setShowAuth(null)} defaultTab={showAuth}/>}

        {/* TOP BAR */}
        <div style={{ background:P.dark, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:9, fontWeight:700, letterSpacing:".12em", color:P.gold, textTransform:"uppercase", marginBottom:2 }}>
              Asta del Mobile
            </div>
            <div style={{ fontSize:15, fontWeight:800, color:"white" }}>
              {!utente ? "Come possiamo aiutarti?" : isStaff ? `Backoffice · ${utente.nome.split(" ")[0]}` : `Bentornato, ${utente.nome.split(" ")[0]}`}
            </div>
          </div>
          {utente && (
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <AvatarIcon nome={utente.nome} size={30} colore={utente.colore || P.blue} online/>
              <button onClick={logout} style={{ background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", borderRadius:6, padding:"4px 9px", color:"rgba(255,255,255,.5)", fontSize:10, cursor:"pointer", fontFamily:"inherit" }}>Esci</button>
            </div>
          )}
          <button onClick={onClose} style={{ background:"rgba(255,255,255,.1)", border:"none", color:"rgba(255,255,255,.65)", width:30, height:30, borderRadius:"50%", cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><span style={{lineHeight:1}}>{CI.x}</span></button>
        </div>

        {/* BODY */}
        <div style={{ flex:1, overflowY:"auto" }}>

          {/* Chat aperta */}
          {!isStaff && activeId && (
            <div style={{ display:"flex", flexDirection:"column", height:"100%" }}>
              <ChatWindow convId={activeId} autore={utente} onBack={() => setActiveId(null)}/>
            </div>
          )}

          {/* Home drawer */}
          {!activeId && (
            <div style={{ padding:14, display:"flex", flexDirection:"column", gap:11 }}>

              {/* GUEST */}
              {!utente && (
                <>
                  <div style={{ background:"linear-gradient(135deg,#2c1f1a,#1a1210)", borderRadius:14, padding:"16px 14px" }}>
                    <p style={{ fontSize:12, color:"rgba(255,255,255,.55)", lineHeight:1.7, margin:"0 0 12px" }}>
                      Domande su un prodotto, vuoi prenotare o hai bisogno di assistenza?
                    </p>
                    {Object.entries(TIPO_META).map(([k, v]) => (
                      <button key={k} onClick={() => setShowNew(k)} style={{
                        display:"flex", alignItems:"center", gap:11, padding:"10px 12px", borderRadius:10,
                        border:"1.5px solid rgba(255,255,255,.1)", background:"rgba(255,255,255,.06)",
                        cursor:"pointer", fontFamily:"inherit", textAlign:"left", width:"100%", marginBottom:7,
                        transition:"background .15s"
                      }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.12)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.06)"}
                      >
                        <span style={{ fontSize:20 }}>{v.icon}</span>
                        <div>
                          <div style={{ fontWeight:700, fontSize:12, color:"white" }}>{k}</div>
                          <div style={{ fontSize:10, color:"rgba(255,255,255,.5)", marginTop:1 }}>{v.desc}</div>
                        </div>
                        <span style={{ marginLeft:"auto", color:"rgba(255,255,255,.3)", fontSize:15 }}>›</span>
                      </button>
                    ))}
                  </div>

                  <button onClick={() => setShowTkt(true)} style={{
                    display:"flex", alignItems:"center", gap:10, padding:"12px 14px", borderRadius:10,
                    border:"1.5px solid #f5c6c6", background:"#fef5f5", cursor:"pointer", fontFamily:"inherit", textAlign:"left"
                  }}>
                    <span style={{display:"flex",alignItems:"center",color:P.orange}}>{CI.wrench}</span>
                    <div>
                      <div style={{ fontWeight:700, fontSize:13, color:"#c0392b" }}>Apri ticket di assistenza</div>
                      <div style={{ fontSize:11, color:"#e57373", marginTop:1 }}>Ordini, consegne, prodotti</div>
                    </div>
                  </button>

                  <div style={{ background:"white", border:`1.5px solid ${P.border}`, borderRadius:12, padding:"14px 15px" }}>
                    <div style={{ fontWeight:700, fontSize:12, color:P.dark, marginBottom:8 }}>⏰ Siamo disponibili</div>
                    {[["Lun – Ven","9:00 – 19:00"],["Sabato","9:00 – 18:00"],["Domenica","10:00 – 17:00"]].map(([g, o]) => (
                      <div key={g} style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:P.softText, marginBottom:4 }}>
                        <span>{g}</span>
                        <span style={{ fontWeight:600, color:P.text }}>{o}</span>
                      </div>
                    ))}
                    <div style={{ marginTop:9, paddingTop:9, borderTop:`1px solid ${P.border}`, display:"flex", gap:7, alignItems:"center" }}>
                      <div style={{ width:7, height:7, borderRadius:"50%", background:P.green }}/>
                      <span style={{ fontSize:11, color:P.green, fontWeight:700 }}>Arredatori online adesso</span>
                    </div>
                  </div>

                  <div style={{ background:"white", border:`1.5px solid ${P.border}`, borderRadius:12, padding:"14px 15px" }}>
                    <div style={{ fontWeight:700, fontSize:12, color:P.dark, marginBottom:11 }}><span style={{display:"inline-flex",alignItems:"center",gap:6}}>{CI.lock} Accedi per seguire le tue richieste</span></div>
                    <div style={{ display:"flex", gap:8 }}>
                      <button onClick={() => setShowAuth("login")} style={{ flex:1, padding:"9px", borderRadius:7, border:"none", background:P.dark, color:"white", fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>Accedi</button>
                      <button onClick={() => setShowAuth("reg")}   style={{ flex:1, padding:"9px", borderRadius:7, border:`1.5px solid ${P.border}`, background:"white", color:P.dark, fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>Registrati</button>
                    </div>
                  </div>
                </>
              )}

              {/* CLIENTE LOGGATO */}
              {utente && !isStaff && (
                <>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div style={{ fontWeight:700, fontSize:14, color:P.dark }}>Le tue richieste</div>
                    <button onClick={() => setShowNew("Info prodotto")} style={{ padding:"7px 13px", borderRadius:7, border:"none", background:P.dark, color:"white", fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>+ Nuova</button>
                  </div>
                  {mieConv.length === 0 ? (
                    <CardBase style={{ padding:"28px 16px", textAlign:"center" }}>
                      <div style={{display:"flex",justifyContent:"center",color:P.gold,marginBottom:8}}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                      <div style={{ fontWeight:700, fontSize:13, color:P.dark, marginBottom:5 }}>Nessuna richiesta</div>
                      <BtnPrimary onClick={() => setShowNew("Info prodotto")} small>Nuova richiesta →</BtnPrimary>
                    </CardBase>
                  ) : (
                    <CardBase style={{ overflow:"hidden" }}>
                      {mieConv.map((c, i) => {
                        const tm = TIPO_META[c.tipo];
                        const last = c.messaggi[c.messaggi.length - 1];
                        return (
                          <div key={c.id} onClick={() => setActiveId(c.id)}
                            style={{ padding:"11px 13px", borderBottom:i < mieConv.length - 1 ? `1px solid ${P.border}` : "none", cursor:"pointer", transition:"background .1s" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#f5f0e8"}
                            onMouseLeave={e => e.currentTarget.style.background = "white"}
                          >
                            <div style={{ display:"flex", justifyContent:"space-between", gap:5, marginBottom:3 }}>
                              <div style={{ fontWeight:600, fontSize:13, color:P.dark, flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.oggetto}</div>
                              <span style={{ fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:999, background:tm?.bg, color:tm?.color, flexShrink:0 }}>{tm?.icon}</span>
                            </div>
                            <div style={{ fontSize:11, color:P.muted, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{last?.testo || "Nessun messaggio"}</div>
                          </div>
                        );
                      })}
                    </CardBase>
                  )}
                  <button onClick={() => setShowTkt(true)} style={{ display:"flex", alignItems:"center", gap:10, padding:"11px 14px", borderRadius:10, border:"1.5px solid #f5c6c6", background:"#fef5f5", cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}>
                    <span style={{display:"flex",alignItems:"center",color:P.orange}}>{CI.wrench}</span>
                    <div style={{ fontWeight:700, fontSize:13, color:"#c0392b" }}>Apri ticket di assistenza</div>
                  </button>
                </>
              )}

              {/* STAFF */}
              {isStaff && (
                <div style={{ background:"linear-gradient(135deg,#0f0c0b,#1a1210)", borderRadius:14, padding:"24px 18px", textAlign:"center" }}>
                  <div style={{display:"flex",justifyContent:"center",color:P.gold,marginBottom:10}}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
                  <div style={{ fontWeight:800, fontSize:15, color:"white", marginBottom:6 }}>Backoffice Staff</div>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,.5)", lineHeight:1.7, marginBottom:14 }}>
                    Gestisci richieste e ticket dalla vista completa.
                  </p>
                  <div style={{ background:"rgba(200,184,154,.1)", border:"1px solid rgba(200,184,154,.2)", borderRadius:8, padding:"10px 14px" }}>
                    <div style={{ fontSize:12, color:P.gold, fontWeight:700 }}>
                      {conv.filter(c => !c.arredatoreId && c.stato === "aperta").length} richieste non assegnate
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatWidgetFAB() {
  const [open, setOpen]   = useState(false);
  const [badge, setBadge] = useState(2);
  const { conv } = useApp();
  const liveBadge = conv.filter(c => !c.arredatoreId && c.stato === "aperta").length;
  const total = badge + liveBadge;

  return (
    <>
      {!open && (
        <button
          onClick={() => { setOpen(true); setBadge(0); }}
          title="Chat & Assistenza"
          style={{
            position:"fixed", bottom:28, right:28, zIndex:8500,
            width:62, height:62, borderRadius:"50%",
            background:"#1a1210", border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 8px 32px rgba(0,0,0,.32), 0 2px 8px rgba(0,0,0,.2)",
            transition:"transform .2s, box-shadow .2s", fontFamily:"inherit",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 14px 44px rgba(0,0,0,.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)";   e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,.32)"; }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#c8b89a"/>
            <circle cx="8"  cy="11" r="1.2" fill="#1a1210"/>
            <circle cx="12" cy="11" r="1.2" fill="#1a1210"/>
            <circle cx="16" cy="11" r="1.2" fill="#1a1210"/>
          </svg>
          {total > 0 && (
            <span style={{ position:"absolute", top:-1, right:-1, minWidth:20, height:20, borderRadius:10, background:"#e74c3c", border:"2.5px solid white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:800, color:"white", padding:"0 3px" }}>
              {total}
            </span>
          )}
        </button>
      )}
      {open && <ChatDrawer onClose={() => setOpen(false)}/>}
    </>
  );
}

// ─── APP ───────────────────────────────────

function AppWrapper() {
  return (
    <AppProvider>
      <App/>
    </AppProvider>
  );
}

// ─── SHOP PRODUCT BY ID (da homepage / OnlineScrollRow) ───────────────
function ShopProductByIdPage({ pageKey, setPage }) {
  const id = parseInt(pageKey.replace("shop_product_",""));
  const sp = buildShopProducts().find(p => p.id === id);
  if (!sp) { setPage("shop"); return null; }
  return <ProductPage item={{...sp}} onGoCatalog={() => setPage("shop")} isShop={true}/>;
}

function App() {
  const { utente } = useApp();
  const [page, setPage] = useState("home");
  const [shopKey, setShopKey] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [catalogSearch, setCatalogSearch] = useState("");
  const openProduct = p => { setSelectedProduct(p); setPage("product"); };
  const openShopProduct = p => { setSelectedProduct(p); setPage("shop_product"); };
  const goToShop = () => { setShopKey(k=>k+1); setPage("shop"); };
  useEffect(() => { window.scrollTo(0, 0); }, [page]);
  const goToCatalog = (q="") => { setCatalogSearch(q); setPage("catalog"); };
  return (
    <div style={{fontFamily:"'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", background:"#faf8f5", minHeight:"100vh"}}>
      <Header page={page} setPage={p => setPage(p)} goToCatalog={goToCatalog} goToShop={goToShop}/>
      {page === "home"           && <Home setPage={setPage}/>}
      {page === "catalog"        && <Catalog onOpenProduct={openProduct} initialSearch={catalogSearch}/>}
      {page === "product"        && <ProductPage item={selectedProduct} onGoCatalog={() => setPage("catalog")} isShop={false}/>}
      {page === "shop_product"   && <ProductPage item={selectedProduct} onGoCatalog={() => setPage("shop")} isShop={true}/>}
      {page.startsWith("shop_product_") && <ShopProductByIdPage pageKey={page} setPage={setPage}/>}
      {page === "prontaconsegna" && <ProntaConsegnaPage onOpenProduct={openProduct}/>}
      {page === "promo"          && <PromoPage openProduct={openProduct}/>}
      {page === "servizi"        && <ServiziPage/>}
      {page === "videocall"      && <VideoCallPage/>}
      {page === "faq"            && <FAQPage/>}
      {page === "arredatori"     && <ArredatoriPage/>}
      {page === "progetti"       && <ProgettiPage/>}
      {page === "shop"           && <ShopPage key={shopKey} onOpenProduct={openShopProduct} setPage={setPage}/>}
      {page === "fornitori"        && <FornitoriPage setPage={setPage}/>}
      {page.startsWith("fornitori_") && <FornitoriPageDirect supplierId={page.replace("fornitori_","")} setPage={setPage}/>}
      {page === "contract"       && <ContractPage/>}
      {page === "falegnameria"   && <FalegnaneriaPage setPage={setPage} openProduct={openProduct}/>}
      {page === "backoffice"      && utente && <Backoffice/>}
      {page === "area_cliente"    && utente && <AreaCliente/>}
      {page === "checkout"        && <CheckoutPage setPage={setPage}/>}
      <Footer setPage={setPage}/>
      <EmailToastSystem/>
    </div>
  );
}

export default AppWrapper;
