const STAINLESS_CATEGORY_DESCRIPTION =
  "Die Duschrinne hat sich in modernen Badezimmern längst als Alternative zu Bodenablauf oder Duschwanne etabliert. Sie unterstützt barrierearme Duschbereiche und bleibt durch befliesbare Abdeckungen besonders flexibel in der Gestaltung.";

const TILEABLE_CATEGORY_DESCRIPTION =
  "Die Duschrinne hat sich in modernen Badezimmern längst als Alternative zu Bodenablauf oder Duschwanne etabliert. Sie unterstützt barrierearme Duschbereiche und bleibt durch befliesbare Abdeckungen besonders flexibel in der Gestaltung.";

const FLOOR_DRAIN_DESCRIPTION =
  "Ganz egal ob herkömmliche Duschwanne oder die aktuell trendige bodenebene Dusche: Jede Dusche benötigt den passenden Bodenablauf, damit das Wasser stets schnell und sicher abfließen kann. Man unterscheidet hier zwischen den klassischen punktförmigen Abläufen, den etwas moderneren, linienförmigen Duschrinnen und den unsichtbaren Wandabläufen. Doch wo liegt der Unterschied?";

const SHOWER_SHELF_DESCRIPTION =
  "Finden Sie die passende Duschablage für Ihr Badezimmer. Die Auswahl kombiniert stabile Materialien, platzsparende Formen und eine saubere Aufbewahrung für Shampoo, Pflegeprodukte und Duschzubehör.";

const TILE_TRIM_DESCRIPTION =
  "Die Fliesenleisten gibt es im Allgemeinen in unterschiedlichen Materialien zu erwerben. Wir von duschrinnen-profis verkaufen jedoch nur Schienen aus Edelstahl. Uns ist aufgefallen, dass Edelstahl im Gegensatz zu Aluminium und Kunststoff eine sehr hohe Langlebigkeit sowie Korrosionsbeständigkeit aufweist. Außerdem sind die Edelstahlschienen am besten geeignet für das Badezimmer, da sie sehr wasserbeständig sind. Wenn Sie Interesse daran haben, Fliesenprofile auch in Ihrem Außenbereich zu verlegen, dann sind die Edelstahlfliesenprofile ideal geeignet.";

const LEVELING_DESCRIPTION =
  "Unser Fliesen-Nivelliersystem besteht aus einer Zange, Zuglaschen und Keilen. Die Zange und Keile gibt es in einer einheitlichen Größe. Die Zuglaschen gibt es in den Größen 1,5 mm, 2 mm und 2,5 mm. Unser Nivelliersystem bietet universelle Einsatzmöglichkeiten und ist äußerst vielseitig in der Anwendung. Es gibt fast keine Einschränkungen, was das Material und die Stärke der Fliesen anbelangt. Somit können Sie alles von Keramikfliesen bis über Natursteinfliesen simpel verlegen ohne großen Aufwand.";

function formatEuro(value) {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value) + " €";
}

function createCompare(config) {
  const marketPriceValue = Number(config.marketPriceValue || config.priceValue * (config.marketMultiplier || 1.18));
  return {
    marketLabel: config.marketLabel,
    marketPrice: config.marketPrice || "ab " + formatEuro(marketPriceValue) + " inkl. MwSt.",
    marketPriceValue,
    design: config.design,
    marketDesign: config.marketDesign,
    advantage: config.advantage
  };
}

function createProduct(config) {
  return {
    ...config,
    url: "/produkt/" + config.id + "/",
    shortDescription: config.shortDescription || config.description || config.cardDescription,
    compare: createCompare({
      priceValue: config.priceValue,
      marketLabel: config.marketLabel,
      marketPrice: config.marketPrice,
      marketPriceValue: config.marketPriceValue,
      marketMultiplier: config.marketMultiplier,
      design: config.design,
      marketDesign: config.marketDesign,
      advantage: config.advantage
    })
  };
}

export const products = [
  createProduct({
    id: "c15-edelstahl",
    title: "Duschrinne C15 Edelstahl",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 109,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-EDELSTAHL-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-EDELSTAHL-600x600.jpg",
      "/assets/original/2018-08-Edelstahl-45deg-600x600.jpg",
      "/assets/original/2018-08-Edelstahl-Emotion-600x600.jpg",
      "/assets/original/2018-08-Edelstahl-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-Edelstahl-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-Edelstahl-Lifestyle-3-600x600.jpg"
    ],
    description: "Die Duschrinne C15 Edelstahl lässt sich unkompliziert online bestellen und eignet sich für moderne, pflegeleichte Duschbereiche.",
    cardDescription: "Das Originalmodell C15 mit sichtbarer Edelstahlabdeckung für klare, pflegeleichte Duschflächen.",
    meta: "Mehrere Längen",
    marketLabel: "Vergleichbare Edelstahl-Duschrinne aus dem Fachhandel",
    marketMultiplier: 1.26,
    design: "Originale Edelstahlabdeckung mit ruhiger linearer Linienführung.",
    marketDesign: "Ähnliche sichtbare Edelstahlrinne mit meist technischerem Auftritt.",
    advantage: "Sie bekommen das Originalmodell von Duschrinnen Profi mit spürbar günstigerem Einstieg."
  }),
  createProduct({
    id: "andalusia",
    title: "Duschrinne C06 Andalusia",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 109,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-ANDALUSIA-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-ANDALUSIA-600x600.jpg",
      "/assets/original/2018-08-Andalusia-45deg-600x600.jpg",
      "/assets/original/2018-08-Andalusia-Emotion-600x600.jpg",
      "/assets/original/2018-08-Andalusia-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-Andalusia-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-Andalusia-Lifestyle-3-600x600.jpg"
    ],
    description: "Die Duschrinne C06 Andalusia verbindet ein dekoratives Edelstahlmuster mit einer robusten Ausführung für bodengleiche Duschen.",
    cardDescription: "Dekorative Edelstahlrinne mit Andalusia-Muster für bodengleiche Duschen.",
    meta: "Designabdeckung",
    marketLabel: "Vergleichbare Design-Duschrinne im Fachhandel",
    marketMultiplier: 1.28,
    design: "Originales Andalusia-Dekor mit klarer Edelstahlrahmung.",
    marketDesign: "Vergleichbare Designrinne mit ähnlicher Musterung, oft deutlich teurer.",
    advantage: "Mehr Designcharakter bei einem niedrigeren Startpreis als viele Vergleichsmodelle."
  }),
  createProduct({
    id: "nacht",
    title: "Duschrinne C17BK Nacht",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 119,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-NACHT-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-NACHT-600x600.jpg",
      "/assets/original/2018-08-Nacht-45deg-600x600.jpg",
      "/assets/original/2018-08-Nacht-Emotion-600x600.jpg",
      "/assets/original/2018-08-Nacht-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-Nacht-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-Nacht-Lifestyle-3-600x600.jpg"
    ],
    description:
      "Das Modell Duschrinne C17BK Nacht ist ein Integrierter Edelstahlsiphon mit 40mm Auslass, inkl. Alaufadapter 50mm und wurde aus 304 Edelstahl gefertigt.",
    cardDescription: "Die dunkle C17BK Nacht mit kontrastreicher Inlay-Optik für moderne Duschbereiche.",
    meta: "Black Edition",
    marketLabel: "Vergleichbare schwarze Design-Duschrinne",
    marketMultiplier: 1.35,
    design: "Schwarzes Nacht-Inlay mit sichtbarer Edelstahlkante.",
    marketDesign: "Ähnliche dunkle Designrinne mit höherem Preiseinstieg im Premium-Segment.",
    advantage: "Auffällige Black-Optik mit deutlichem Preisvorteil gegenüber vielen Vergleichsprodukten."
  }),
  createProduct({
    id: "toskana",
    title: "Duschrinne C12 Toskana",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 119,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-TOSKANA-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-TOSKANA-600x600.jpg",
      "/assets/original/2018-08-Toskana-45deg-600x600.jpg",
      "/assets/original/2018-08-Toskana-Emotion-600x600.jpg",
      "/assets/original/2018-08-Toskana-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-Toskana-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-Toskana-Lifestyle-3-600x600.jpg"
    ],
    description: "Die Duschrinne C12 Toskana mit einer Einbauhöhe von 67mm können Sie hier im Onlineshop zum günstigen Preis mühelos bestellen.",
    cardDescription: "Toskana mit dekorativer Lochoptik, Edelstahloberfläche und mehreren auswählbaren Längen.",
    meta: "Einbauhöhe 67 mm",
    marketLabel: "Vergleichbare dekorative Edelstahlrinne",
    marketMultiplier: 1.3,
    design: "Originale Toskana-Lochstruktur mit wohnlicher Edelstahloptik.",
    marketDesign: "Ähnliche Dekoroptik, im Fachhandel oft weniger fein gezeichnet.",
    advantage: "Das Originaldesign bleibt erreichbar, ohne in eine deutlich höhere Preisstufe zu rutschen."
  }),
  createProduct({
    id: "drache",
    title: "Duschrinne C10 Drache",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 109,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-DRACHE-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-DRACHE-600x600.jpg",
      "/assets/original/2018-08-Drache-45deg-600x600.jpg",
      "/assets/original/2018-08-Drache-Emotion-600x600.jpg",
      "/assets/original/2018-08-Drache-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-Drache-Lifestyle-2-Kopie-600x600.jpg",
      "/assets/original/2018-08-Drache-Lifestyle-3-600x600.jpg"
    ],
    description: "Das Modell Duschrinne C10 Drache bietet hohe Korrosionsbeständigkeit, ein gleichmäßiges Erscheinungsbild und eine markante Designabdeckung.",
    cardDescription: "Das Modell Drache mit markantem Wellenmuster und robuster Edelstahloberfläche.",
    meta: "Dekoroptik",
    marketLabel: "Vergleichbare Designrinne mit Wellenmuster",
    marketMultiplier: 1.27,
    design: "Originales Drache-Muster mit bewegter, klarer Linienführung.",
    marketDesign: "Ähnliche Wellenoptik mit häufig schwererer oder technischerer Wirkung.",
    advantage: "Stärkerer Designakzent, ohne den typischen Preissprung vieler Dekormodelle."
  }),
  createProduct({
    id: "london",
    title: "Duschrinne C02 London",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 119,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-LONDON-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-LONDON-600x600.jpg",
      "/assets/original/2018-08-London-45deg-600x600.jpg",
      "/assets/original/2018-08-London-Emotion-600x600.jpg",
      "/assets/original/2018-08-London-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-London-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-London-Lifestyle-3-600x600.jpg"
    ],
    description:
      "Die Duschrinne C02 London ist eine Edelstahlrinne mit feiner Linienstruktur für moderne Badbereiche und eine unkomplizierte Onlinebestellung.",
    cardDescription: "London mit feiner Linienstruktur für moderne Duschen und mehrere Längen im typischen Edelstahlprogramm.",
    meta: "Feinlinien-Design",
    marketLabel: "Vergleichbare Linien-Duschrinne aus dem Fachhandel",
    marketMultiplier: 1.31,
    design: "Ruhiges London-Linienmuster mit sachlicher Edelstahlwirkung.",
    marketDesign: "Ähnliche Linienoptik, im Markt oft steifer und kostspieliger.",
    advantage: "Sehr klare Premium-Anmutung bei spürbar günstigerem Startpreis."
  }),
  createProduct({
    id: "asia",
    title: "Duschrinnen C03 Asia",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 109,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-ASIA-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-ASIA-600x600.jpg",
      "/assets/original/2018-08-Asia-45deg-600x600.jpg",
      "/assets/original/2018-08-Asia-Emotion-600x600.jpg",
      "/assets/original/2018-08-Asia-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-Asia-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-Asia-Lifestyle-3-600x600.jpg"
    ],
    description:
      "Die Duschrinne C03 Asia besteht aus echtem 304 Edelstahl und bringt ein geometrisches Dekor in den Duschbereich.",
    cardDescription: "Asia mit geometrischem Dekor und allen Originalansichten direkt im eigenen Produktbereich.",
    meta: "304 Edelstahl",
    marketLabel: "Vergleichbare Edelstahl-Duschrinne mit Dekormuster",
    marketMultiplier: 1.28,
    design: "Originales Asia-Dekor mit präziser Edelstahloberfläche.",
    marketDesign: "Ähnliche Dekorvarianten, oft mit teurerem Einstieg oder kleinerer Bildauswahl.",
    advantage: "Das Originaldekor bleibt komplett sichtbar und preislich unter vielen Vergleichsmodellen."
  }),
  createProduct({
    id: "regen",
    title: "Duschrinne C01 Regen",
    category: "Edelstahl Duschrinnen",
    section: "edelstahl",
    price: "79,90 – 109,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-REGEN-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-REGEN-600x600.jpg",
      "/assets/original/2018-08-Regen-45deg-600x600.jpg",
      "/assets/original/2018-08-Regen-Emotion-600x600.jpg",
      "/assets/original/2018-08-Regen-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-Regen-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-Regen-Lifestyle-3-600x600.jpg"
    ],
    description: "Die Duschrinne C01 Regen besitzt eine markante Schlitzoptik und eignet sich für klare, moderne Duschflächen.",
    cardDescription: "Regen mit markanter Schlitzoptik für klare, moderne Duschflächen.",
    meta: "Mehrere Längen",
    marketLabel: "Vergleichbare Edelstahl-Duschrinne mit Dekor",
    marketMultiplier: 1.24,
    design: "Regen-Dekor mit kompletter Bildstrecke und klarer Edelstahlwirkung.",
    marketDesign: "Ähnliche Dekorvarianten, häufig teurer oder mit weniger klarer Präsentation.",
    advantage: "Das Originalprodukt bleibt vollständig sichtbar und startet günstiger als viele Fachhandelsalternativen."
  }),
  createProduct({
    id: "befliesbar-360",
    title: "Duschrinne 360° befliesbar",
    category: "Befliesbare Duschrinnen",
    section: "befliesbar",
    price: "79,90 – 119,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2020-03-befliesbar-Emotion-600x600.jpg",
    gallery: [
      "/assets/original/2020-03-befliesbar-Emotion-600x600.jpg",
      "/assets/original/2020-03-befliesbar-Lifestyle-600x600.jpg",
      "/assets/original/2020-03-befliesbar-Lifestyle-2-600x600.jpg",
      "/assets/original/2020-03-befliesbar-Lifestyle-3-600x600.jpg"
    ],
    description:
      "Die Duschrinne 360° befliesbar ermöglicht eine flächenbündige Entwässerung und lässt sich passend zum Badprojekt bestellen.",
    cardDescription: "360° befliesbar für ruhige, flächenbündige Duschen mit nahezu unsichtbarer Entwässerung.",
    meta: "360° System",
    marketLabel: "Vergleichbare 360° Tile-in-Duschrinne",
    marketMultiplier: 1.29,
    design: "Nahezu unsichtbare Tile-in-Optik mit ruhigem Fliesenbild.",
    marketDesign: "Ähnliche befliesbare Lösung mit meist höherer Einstiegsschwelle im Preis.",
    advantage: "Die unauffällige Originaloptik bleibt erhalten, während der Einstieg günstiger bleibt."
  }),
  createProduct({
    id: "c16-befliesbar",
    title: "Duschrinne C16 befliesbar",
    category: "Befliesbare Duschrinnen",
    section: "befliesbar",
    price: "79,90 – 115,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2018-08-BEFLIESBAR-600x600.jpg",
    gallery: [
      "/assets/original/2018-08-BEFLIESBAR-600x600.jpg",
      "/assets/original/2018-08-befliesbar-45deg-1-600x600.jpg",
      "/assets/original/2018-08-befliesbar-Emotion-600x600.jpg",
      "/assets/original/2018-08-befliesbar-Lifestyle-600x600.jpg",
      "/assets/original/2018-08-befliesbar-Lifestyle-2-600x600.jpg",
      "/assets/original/2018-08-befliesbar-Lifestyle-3-600x600.jpg"
    ],
    description:
      "Die Duschrinne C16 befliesbar sorgt für eine dezente Entwässerung und lässt sich mit der passenden Fliese in die Dusche integrieren.",
    cardDescription: "C16 befliesbar mit fast unsichtbarer Entwässerung und kompletter Originalgalerie je Produkt.",
    meta: "Tile-in",
    marketLabel: "Vergleichbare befliesbare Duschrinne",
    marketMultiplier: 1.26,
    design: "Tile-in-Lösung für ein sehr ruhiges, flächenbündiges Gesamtbild.",
    marketDesign: "Ähnliche befliesbare Rinne, oft mit stärker sichtbarer Rahmenkante.",
    advantage: "Mehr Flächenruhe bei einem günstigeren Einstieg als bei vielen Vergleichsprodukten."
  }),
  createProduct({
    id: "siphon",
    title: "Duschrinnen-Siphon",
    category: "Duschrinnen-Ersatzteile",
    section: "ersatzteile",
    price: "19,90 € inkl. MwSt.",
    priceValue: 19.9,
    image: "/assets/original/2021-08-ET-Siphon-600x600.jpg",
    gallery: ["/assets/original/2021-08-ET-Siphon-600x600.jpg", "/assets/original/2021-08-ET-Siphon2-600x600.jpg"],
    description: "Duschrinnen-Siphon mit Geruchsverschluss aus Kunststoff. Maße ca. 4 x 5 x 8 cm, Gewicht ca. 100 g.",
    cardDescription: "Ersatzsiphon mit Geruchsverschluss für passende Duschrinnen.",
    meta: "Serviceartikel",
    marketLabel: "Vergleichbarer Ersatzsiphon",
    marketMultiplier: 1.4,
    design: "Original-Ersatzteil für den passenden Geruchsverschluss.",
    marketDesign: "Ähnlicher Ersatzsiphon, oft schwerer zuzuordnen oder teurer.",
    advantage: "Passendes Originalteil mit direkter Preisersparnis gegenüber vielen Zubehörangeboten."
  }),
  createProduct({
    id: "haarsieb",
    title: "Duschrinnen-Haarsieb",
    category: "Duschrinnen-Ersatzteile",
    section: "ersatzteile",
    price: "14,90 € inkl. MwSt.",
    priceValue: 14.9,
    image: "/assets/original/2021-08-ET-Haarsieb-600x600.jpg",
    gallery: [
      "/assets/original/2021-08-ET-Haarsieb-600x600.jpg",
      "/assets/original/2021-08-ET-Haarsieb2-600x600.jpg",
      "/assets/original/2021-08-ET-Haarsieb3-600x600.jpg"
    ],
    description: "Duschrinnen-Haarsieb aus Kunststoff. Maße ca. 6 x 5 x 11 cm, Gewicht ca. 20 g.",
    cardDescription: "Haarsieb aus Kunststoff für eine einfache Wartung der Duschrinne.",
    meta: "Kunststoff",
    marketLabel: "Vergleichbares Haarsieb für Duschrinnen",
    marketMultiplier: 1.33,
    design: "Passgenaues Original-Sieb für die schnelle Wartung.",
    marketDesign: "Ähnliche Siebe, häufig ohne klare Zuordnung zum passenden System.",
    advantage: "Einfacher nachzubestellen und dabei günstiger als viele Zubehöralternativen."
  }),
  createProduct({
    id: "stellfuss",
    title: "Duschrinnen-Stellfuß (6 Stück)",
    category: "Duschrinnen-Ersatzteile",
    section: "ersatzteile",
    price: "19,90 € inkl. MwSt.",
    priceValue: 19.9,
    image: "/assets/original/2021-08-ET-Stellfuss-600x600.jpg",
    gallery: ["/assets/original/2021-08-ET-Stellfuss-600x600.jpg"],
    description: "Duschrinnen-Stellfuß aus Kunststoff im Set mit 6 Stück.",
    cardDescription: "6er-Stellfuß-Set zur Ausrichtung und Montage der Duschrinne.",
    meta: "6 Stück",
    marketLabel: "Vergleichbares Stellfuß-Set",
    marketMultiplier: 1.3,
    design: "Original-Stellfuß-Set für die Ausrichtung der Duschrinne.",
    marketDesign: "Ähnliche Montagefüße, oft nur in größeren Paketen erhältlich.",
    advantage: "Sie bestellen nur das tatsächlich benötigte Originalteil und sparen dabei direkt."
  }),
  createProduct({
    id: "demontageschluessel",
    title: "Duschrinnen-Demontageschlüssel",
    category: "Duschrinnen-Ersatzteile",
    section: "ersatzteile",
    price: "9,90 € inkl. MwSt.",
    priceValue: 9.9,
    image: "/assets/original/2021-08-ET-Demontageschlussel-600x600.jpg",
    gallery: ["/assets/original/2021-08-ET-Demontageschlussel-600x600.jpg"],
    description: "Demontageschlüssel zum Anheben der Blende aus rostfreiem Edelstahl. Maße ca. 3 x 0,5 x 9 cm.",
    cardDescription: "Der originale Demontageschlüssel für das saubere Anheben der Blende.",
    meta: "Servicewerkzeug",
    marketLabel: "Vergleichbarer Demontageschlüssel",
    marketMultiplier: 1.5,
    design: "Original-Servicewerkzeug für Abdeckung und Wartung.",
    marketDesign: "Ähnlicher Helfer, im Zubehörhandel häufig separat teurer.",
    advantage: "Das passende Servicewerkzeug bleibt preislich schlank und sofort zuordenbar."
  }),
  createProduct({
    id: "komplettset",
    title: "Duschrinnen-Ersatzteile (Komplettset)",
    category: "Duschrinnen-Ersatzteile",
    section: "ersatzteile",
    price: "49,90 € inkl. MwSt.",
    priceValue: 49.9,
    image: "/assets/original/2021-08-Komplett-Set-600x480.png",
    gallery: ["/assets/original/2021-08-Komplett-Set-600x480.png"],
    description: "Komplettset für aller Ersatzteile unserer Duschrinnen",
    cardDescription: "Komplettset mit wichtigen Ersatzteilen für Wartung und Montage.",
    meta: "Komplettset",
    marketLabel: "Vergleichbares Ersatzteil-Komplettset",
    marketMultiplier: 1.28,
    design: "Original-Zusammenstellung mehrerer Ersatzteile in einem Set.",
    marketDesign: "Ähnliche Sets, oft weniger klar zusammengestellt und teurer.",
    advantage: "Alles Wesentliche in einem Originalset, ohne in mehrere Einzelkäufe auszuweichen."
  }),
  createProduct({
    id: "dichtband",
    title: "Duschrinnen-Dichtband",
    category: "Duschrinnen-Ersatzteile",
    section: "ersatzteile",
    price: "14,90 € inkl. MwSt.",
    priceValue: 14.9,
    image: "/assets/original/2021-08-ET-Dichtband-600x600.jpg",
    gallery: ["/assets/original/2021-08-ET-Dichtband-600x600.jpg"],
    description: "Duschrinnen-Dichtband, ein wasserdichtes Dichtmembran aus modifiziertem Polyethylen",
    cardDescription: "Dichtband für sichere Übergänge und zuverlässige Abdichtung im Duschbereich.",
    meta: "Abdichtung",
    marketLabel: "Vergleichbares Dichtband für Duschrinnen",
    marketMultiplier: 1.33,
    design: "Original-Dichtband für den passenden Anschluss an die Abdichtung.",
    marketDesign: "Ähnliches Dichtband, oft nur im größeren Zubehörset erhältlich.",
    advantage: "Sie kaufen nur das benötigte Originalteil und sparen gegenüber vielen Set-Lösungen."
  }),
  createProduct({
    id: "adapter",
    title: "Duschrinnen-Adapter (Reduzierstück)",
    category: "Duschrinnen-Ersatzteile",
    section: "ersatzteile",
    price: "14,90 € inkl. MwSt.",
    priceValue: 14.9,
    image: "/assets/original/2021-08-ET-Adapter-600x600.jpg",
    gallery: ["/assets/original/2021-08-ET-Adapter-600x600.jpg", "/assets/original/2021-08-ET-Adapter2-600x600.jpg"],
    description: "Reduzierstück von DN50 auf DN40",
    cardDescription: "Adapter-Reduzierstück von DN50 auf DN40 für passende Ablaufanschlüsse.",
    meta: "DN50 auf DN40",
    marketLabel: "Vergleichbares Reduzierstück",
    marketMultiplier: 1.28,
    design: "Original-Adapter zur Reduzierung von DN50 auf DN40.",
    marketDesign: "Ähnliches Reduzierstück, oft weniger klar als passendes Duschrinnen-Zubehör ausgewiesen.",
    advantage: "Passendes Originalteil mit günstigerem Preiseinstieg und eindeutiger Zuordnung."
  }),
  createProduct({
    id: "bodenablauf-befliesbar",
    title: "Bodenablauf Befliesbar",
    category: "Bodenabläufe",
    section: "bodenablauf",
    price: "55,90 – 65,90 € inkl. MwSt.",
    priceValue: 55.9,
    image: "/assets/original/2022-02-Bodenablauf_Befliesbar-optimized-600x400.jpg",
    gallery: [
      "/assets/original/2022-02-Bodenablauf_Befliesbar-optimized-600x400.jpg",
      "/assets/original/2022-02-Bodenablauf_Befliesbar_2-optimized-600x400.jpg",
      "/assets/original/2022-02-Bodenablauf_Befliesbar_Lieferumfang-optimized-600x400.jpg",
      "/assets/original/2022-02-Bodenablauf_Befliesbar_technische_Zeichnung-optimized-600x492.jpg"
    ],
    description: FLOOR_DRAIN_DESCRIPTION,
    cardDescription: "Befliesbarer Bodenablauf mit Lieferumfang, Zeichnung und dezenter Optik.",
    meta: "100 x 100 mm",
    marketLabel: "Vergleichbarer befliesbarer Bodenablauf",
    marketMultiplier: 1.22,
    design: "Befliesbarer Original-Bodenablauf mit ruhigem Flächenbild.",
    marketDesign: "Ähnlicher Punktablauf, meist mit stärker technischer Sichtkante.",
    advantage: "Die befliesbare Optik bleibt sauber, während der Einstieg günstiger bleibt."
  }),
  createProduct({
    id: "bodenablauf-edelstahl",
    title: "Bodenablauf Edelstahl",
    category: "Bodenabläufe",
    section: "bodenablauf",
    price: "55,90 – 65,90 € inkl. MwSt.",
    priceValue: 55.9,
    image: "/assets/original/2022-02-Bodenablauf_EDELSTAHL_3-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-02-Bodenablauf_EDELSTAHL_3-optimized-600x400.jpg"],
    description: FLOOR_DRAIN_DESCRIPTION,
    cardDescription: "Klassischer Edelstahl-Bodenablauf für klare, punktuelle Entwässerung.",
    meta: "Edelstahl",
    marketLabel: "Vergleichbarer Edelstahl-Bodenablauf",
    marketMultiplier: 1.22,
    design: "Originaler Edelstahl-Bodenablauf mit klassischer Punktentwässerung.",
    marketDesign: "Ähnlicher Punktablauf mit nüchternerem Fachhandelsauftritt.",
    advantage: "Sauberer Originalartikel mit günstigem Einstieg gegenüber vielen Marktprodukten."
  }),
  createProduct({
    id: "bodenablauf-quadra",
    title: "Bodenablauf Quadra",
    category: "Bodenabläufe",
    section: "bodenablauf",
    price: "55,90 – 65,90 € inkl. MwSt.",
    priceValue: 55.9,
    image: "/assets/original/2022-02-Bodenablauf_Quadra-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-02-Bodenablauf_Quadra-optimized-600x400.jpg"],
    description: FLOOR_DRAIN_DESCRIPTION,
    cardDescription: "Quadra Bodenablauf mit klarer quadratischer Linienführung.",
    meta: "Quadra",
    marketLabel: "Vergleichbarer Bodenablauf Quadra",
    marketMultiplier: 1.22,
    design: "Quadratische Originalabdeckung mit klarer Punktentwässerung.",
    marketDesign: "Ähnliche Quadratausführung, im Markt oft technisch-nüchtern präsentiert.",
    advantage: "Originalmodell mit sauberer Darstellung und direktem Preisvorteil."
  }),
  createProduct({
    id: "bodenablauf-regen",
    title: "Bodenablauf Regen",
    category: "Bodenabläufe",
    section: "bodenablauf",
    price: "55,90 – 65,90 € inkl. MwSt.",
    priceValue: 55.9,
    image: "/assets/original/2022-02-Bodenablauf_Regen-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-02-Bodenablauf_Regen-optimized-600x400.jpg"],
    description: FLOOR_DRAIN_DESCRIPTION,
    cardDescription: "Regen-Bodenablauf mit eigener Darstellung und Originalbild direkt am Produkt.",
    meta: "Regen-Dekor",
    marketLabel: "Vergleichbarer dekorativer Bodenablauf",
    marketMultiplier: 1.22,
    design: "Originaler Punktablauf mit dekorativer Regen-Anmutung.",
    marketDesign: "Ähnliche Ausführung, im Markt meist stärker funktional aufgezogen.",
    advantage: "Das dekorativere Original bleibt günstiger erreichbar als viele Vergleichsartikel."
  }),
  createProduct({
    id: "duschablage-luxe",
    title: "Duschablage Luxe",
    category: "Duschablagen",
    section: "ablagen",
    price: "45,18 – 49,19 € inkl. MwSt.",
    priceValue: 45.18,
    image: "/assets/original/2024-10-LUXE_1_white-600x400.jpg",
    gallery: ["/assets/original/2024-10-LUXE_1_white-600x400.jpg", "/assets/original/2024-10-LUXE_2_white-600x400.jpg"],
    description:
      "Duschablage Luxe in rechteckiger Form für Wand oder Ecke. Rostfreier Edelstahl in Schwarz matt, erhältlich in zwei Größen.",
    cardDescription: "Luxe als rechteckige Duschablage für Wand oder Ecke in Schwarz matt.",
    meta: "Zwei Größen",
    marketLabel: "Vergleichbare Edelstahl-Duschablage",
    marketMultiplier: 1.24,
    design: "Rechteckige Original-Ablage für Wand oder Ecke in Schwarz matt.",
    marketDesign: "Ähnliche Edelstahlablage, oft mit höherem Einstiegspreis oder weniger sauberer Bildführung.",
    advantage: "Vielseitige Originalablage mit günstigerem Einstieg im Vergleich zum Markt."
  }),
  createProduct({
    id: "duschablage-lagoon",
    title: "Duschablage Lagoon",
    category: "Duschablagen",
    section: "ablagen",
    price: "55,62 € inkl. MwSt.",
    priceValue: 55.62,
    image: "/assets/original/2024-10-LAGOON_white_1-scaled.jpg",
    gallery: ["/assets/original/2024-10-LAGOON_white_1-scaled.jpg", "/assets/original/2024-10-LAGOON_white-600x400.jpg"],
    description:
      "Duschablage Lagoon in halbrunder, geschlossener Form für die Ecke. Polierter Edelstahl sorgt für eine rostfreie und moderne Lösung im Bad.",
    cardDescription: "Lagoon als halbrunde Eckablage aus poliertem Edelstahl.",
    meta: "Polierter Edelstahl",
    marketLabel: "Vergleichbare halbrunde Eckablage",
    marketMultiplier: 1.2,
    design: "Geschlossene halbrunde Original-Eckablage aus poliertem Edelstahl.",
    marketDesign: "Ähnliche Eckablage mit meist höherem Preis oder weniger ruhiger Anmutung.",
    advantage: "Eleganter Originalartikel mit einem attraktiveren Preis als viele Vergleichsprodukte."
  }),
  createProduct({
    id: "duschablage-serene",
    title: "Duschablage Serene",
    category: "Duschablagen",
    section: "ablagen",
    price: "43,99 € inkl. MwSt.",
    priceValue: 43.99,
    image: "/assets/original/2024-10-SERENE_white-600x400.jpg",
    gallery: ["/assets/original/2024-10-SERENE_white-600x400.jpg", "/assets/original/2024-10-SERENE_white_1-600x400.jpg"],
    description:
      "Duschablage Serene in halbrunder Form für die Ecke. Polierter Edelstahl unterstützt eine ordentliche und moderne Badgestaltung.",
    cardDescription: "Serene als halbrunde Eckablage für eine ordentliche Dusche.",
    meta: "Halbrund",
    marketLabel: "Vergleichbare halbrunde Duschablage",
    marketMultiplier: 1.23,
    design: "Polierte Original-Eckablage mit ruhiger, halbrunder Form.",
    marketDesign: "Ähnliche Eckablage, meist teurer oder stärker dekorativ aufgezogen.",
    advantage: "Ordentliche Premium-Anmutung bei einem günstigeren Einstieg als viele Alternativen."
  }),
  createProduct({
    id: "duschablage-soak",
    title: "Duschablage Soak",
    category: "Duschablagen",
    section: "ablagen",
    price: "48,00 € inkl. MwSt.",
    priceValue: 48,
    image: "/assets/original/2024-10-SOAK_B_white-600x400.jpg",
    gallery: [
      "/assets/original/2024-10-SOAK_B_white-600x400.jpg",
      "/assets/original/2024-10-SOAK_B_white_1-600x400.jpg",
      "/assets/original/2024-10-SOAK_B_white_2-600x400.jpg",
      "/assets/original/2024-10-SOAK_1_white-600x400.jpg",
      "/assets/original/2024-10-SOAK_2_white-600x400.jpg"
    ],
    description:
      "Stilvolle Duschablage Soak für die Ecke: platzsparend, dreieckig, in gebürstetem Edelstahl oder edlem Schwarz matt. Perfekt für ein modernes Badezimmer!",
    cardDescription: "Soak als dreieckige Eckablage für platzsparende Badlösungen.",
    meta: "Gebürstet oder schwarz matt",
    marketLabel: "Vergleichbare dreieckige Eckablage",
    marketMultiplier: 1.22,
    design: "Originale Soak-Ablage in dreieckiger Form für die Duschecke.",
    marketDesign: "Ähnliche Eckablage, oft teurer oder mit weniger klarer Materialwirkung.",
    advantage: "Moderner Originalartikel mit nachvollziehbarem Preisvorteil im Vergleich zum Markt."
  }),
  createProduct({
    id: "duschablage-aqua",
    title: "Duschablage Aqua",
    category: "Duschablagen",
    section: "ablagen",
    price: "40,38 € inkl. MwSt.",
    priceValue: 40.38,
    image: "/assets/original/2024-10-AQUA_white-1-600x400.jpg",
    gallery: ["/assets/original/2024-10-AQUA_white-1-600x400.jpg", "/assets/original/2024-10-AQUA_white_1-600x400.jpg"],
    description:
      "Elegante Duschablage Aqua aus poliertem Edelstahl. Passend für jede Ecke, rostfrei und stilvoll. Schaffe Ordnung in deiner Dusche mit modernem Design!",
    cardDescription: "Aqua als elegante Eckablage für Shampoo, Pflegeprodukte und Duschzubehör.",
    meta: "Polierter Edelstahl",
    marketLabel: "Vergleichbare Eck-Duschablage",
    marketMultiplier: 1.24,
    design: "Originale Eckablage Aqua mit polierter Edelstahloberfläche.",
    marketDesign: "Ähnliche Eckablage, im Markt oft etwas teurer oder weniger reduziert präsentiert.",
    advantage: "Klare Originaloptik mit günstigerem Einstieg als viele Vergleichsprodukte."
  }),
  createProduct({
    id: "matrix",
    title: "Diamant-Bohrkrone Matrix",
    category: "Diamant Bohrkronen",
    section: "zubehoer",
    subsection: "diamant-bohrkronen-gruppe",
    price: "21,55 – 114,12 € inkl. MwSt.",
    priceValue: 21.55,
    image: "/assets/original/2022-09-32mm_weiss_pxo-optimized.jpg",
    gallery: [
      "/assets/original/2022-09-32mm_weiss_pxo-optimized.jpg",
      "/assets/original/2022-09-68mm_weiss_pxo-optimized.jpg",
      "/assets/original/2022-09-10mm_weiss_pxo-optimized.jpg"
    ],
    description:
      "Diamant-Bohrkronen Matrix in verschiedenen Größen: Einfaches und präzises Bohren von Löchern in Fliesen, Marmor, Granit und anderen Materialien",
    cardDescription: "Matrix-Bohrkrone für präzise Bohrungen in Fliesen und harten Materialien.",
    meta: "Mehrere Größen",
    marketLabel: "Vergleichbare Premium-Diamant-Bohrkrone",
    marketMultiplier: 1.22,
    design: "Originale Matrix-Bohrkrone für präzise Bohrungen in harten Oberflächen.",
    marketDesign: "Ähnliche Premium-Bohrkrone mit häufig höherem Startpreis.",
    advantage: "Der Einstieg in die Matrix-Serie bleibt günstiger als bei vielen Vergleichsprodukten."
  }),
  createProduct({
    id: "diamant-bohrkronen",
    title: "Diamant Bohrkrone",
    category: "Diamant Bohrkronen",
    section: "zubehoer",
    subsection: "diamant-bohrkronen-gruppe",
    price: "18,90 – 99,90 € inkl. MwSt.",
    priceValue: 18.9,
    image: "/assets/original/2022-09-68mm_weiss_pxo-optimized.jpg",
    gallery: [
      "/assets/original/2022-09-68mm_weiss_pxo-optimized.jpg",
      "/assets/original/2022-09-32mm_weiss_pxo-optimized.jpg",
      "/assets/original/2022-09-10mm_weiss_pxo-optimized.jpg"
    ],
    description:
      "Diamant-Bohrkronen in verschiedenen Größen: Schnelles, einfaches und präzises Bohren von Löchern in Fliesen, Marmor, Granit und anderen harten Materialien",
    cardDescription: "Diamant-Bohrkrone in verschiedenen Größen für Fliesen, Marmor und Granit.",
    meta: "Mehrere Größen",
    marketLabel: "Vergleichbare Diamant-Bohrkrone",
    marketMultiplier: 1.24,
    design: "Originale Bohrkrone für schnelles und präzises Bohren.",
    marketDesign: "Ähnliche Bohrkrone, im Markt oft mit höherem Einzelpreis pro Größe.",
    advantage: "Sie sichern sich die gleiche Kernanwendung günstiger als bei vielen Vergleichsanbietern."
  }),
  createProduct({
    id: "diamant-bohrkronen-set",
    title: "Diamant Bohrkronen Set 4-teilig im Koffer",
    category: "Diamant Bohrkronen",
    section: "zubehoer",
    subsection: "diamant-bohrkronen-gruppe",
    price: "99,90 € inkl. MwSt.",
    priceValue: 99.9,
    image: "/assets/original/2022-02-Bohrkronenkoffer1_LOGO-optimized-600x450.jpg",
    gallery: [
      "/assets/original/2022-02-Bohrkronenkoffer1_LOGO-optimized-600x450.jpg",
      "/assets/original/2022-02-Bohrkronenkoffer2_LOGO-optimized-600x450.jpg",
      "/assets/original/2022-02-Bohrkronenkoffer3_LOGO-optimized-600x450.jpg"
    ],
    description:
      "Diamant Bohrkronen Set 4-teilig in Premium Qualität. Schnelle Lieferung, sichere Zahlung und geeignet für Feinsteinzeug, Fliesen und Naturstein.",
    cardDescription: "4-teiliges Bohrkronen Set im Koffer für Feinsteinzeug, Fliesen und Naturstein.",
    meta: "4-teilig",
    marketLabel: "Vergleichbares Diamant-Bohrkronen-Set",
    marketMultiplier: 1.25,
    design: "Originales Kofferset für wiederkehrende Bohrarbeiten im Bad- und Fliesenbau.",
    marketDesign: "Ähnliches Komplettset, im Markt meist mit höherem Einstieg oder kleinerer Bildauswahl.",
    advantage: "Das komplette Originalset bleibt günstiger als viele vergleichbare Koffersets."
  }),
  createProduct({
    id: "diamanttrennscheibe-115",
    title: "Diamanttrennscheibe 115 mm Ø",
    category: "Diamanttrennscheiben",
    section: "zubehoer",
    subsection: "diamanttrennscheiben",
    price: "24,90 € inkl. MwSt.",
    priceValue: 24.9,
    image: "/assets/original/2022-02-Diamanttrennscheibe-2023-600x450.jpg",
    gallery: ["/assets/original/2022-02-Diamanttrennscheibe-2023-600x450.jpg", "/assets/original/2024-02-Leitfaden-zum-Kauf-einer-Diamanttrennscheibe.png"],
    description:
      "Diamanttrennscheibe 115mm: Die richtige Auswahl für präzise Schnitte. Top Angebot, langlebige Qualität. Ideal für Ihr Projekt. Jetzt kaufen!",
    cardDescription: "115 mm Diamanttrennscheibe für präzise Schnitte in Fliesen und Stein.",
    meta: "115 mm",
    marketLabel: "Vergleichbare Diamanttrennscheibe 115 mm",
    marketMultiplier: 1.22,
    design: "Originale 115-mm-Trennscheibe mit Fokus auf präzise Schnitte.",
    marketDesign: "Ähnliche Trennscheibe mit meist höherem Fachhandelspreis.",
    advantage: "Solide Premium-Qualität mit direktem Preisvorteil gegenüber vielen Vergleichsartikeln."
  }),
  createProduct({
    id: "diamanttrennscheibe-125",
    title: "Diamanttrennscheibe 125 mm Ø",
    category: "Diamanttrennscheiben",
    section: "zubehoer",
    subsection: "diamanttrennscheiben",
    price: "29,90 € inkl. MwSt.",
    priceValue: 29.9,
    image: "/assets/original/2022-02-Diamanttrennscheibe-2023.jpg",
    gallery: ["/assets/original/2022-02-Diamanttrennscheibe-2023.jpg", "/assets/original/2024-02-Leitfaden-zum-Kauf-einer-Diamanttrennscheibe.png"],
    description:
      "Die Diamanttrennscheibe 125 mm Ø mit Kreuzsegmenten aus dem Jahr 2024 bieten unübertroffene Präzision und Leistung. Kaufen und profitieren.",
    cardDescription: "125 mm Diamanttrennscheibe für saubere Schnitte in Fliesen und Stein.",
    meta: "125 mm",
    marketLabel: "Vergleichbare Diamanttrennscheibe 125 mm",
    marketMultiplier: 1.22,
    design: "Originale 125-mm-Trennscheibe mit Kreuzsegmenten und klarer Produktdarstellung.",
    marketDesign: "Ähnliche 125-mm-Scheibe, im Markt häufig etwas teurer.",
    advantage: "Die größere Ausführung bleibt im Originalshop günstiger als viele Vergleichsprodukte."
  }),
  createProduct({
    id: "fliesenschiene-winkel-gebuerstet",
    title: "Fliesenschiene Edelstahl Winkel gebürstet",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "17,19 – 18,33 € inkl. MwSt.",
    priceValue: 17.19,
    image: "/assets/original/2022-09-Winkel_gebuerstet_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Winkel_gebuerstet_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Winkelprofil in gebürstetem Edelstahl mit eigenem Originalbild am Produkt.",
    meta: "Gebürstet",
    marketLabel: "Vergleichbare Edelstahl-Fliesenschiene",
    marketMultiplier: 1.2,
    design: "Original-Winkelprofil in gebürsteter Edelstahloberfläche.",
    marketDesign: "Ähnliche Fliesenschiene mit stärker technischem Auftritt oder höherem Preis.",
    advantage: "Die originale Schiene bleibt günstiger erreichbar als viele Fachhandelsalternativen."
  }),
  createProduct({
    id: "fliesenschiene-quadrat-gebuerstet",
    title: "Fliesenschiene Edelstahl Quadrat gebürstet",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "20,86 – 21,84 € inkl. MwSt.",
    priceValue: 20.86,
    image: "/assets/original/2022-09-Quadrat_gebuerstet_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Quadrat_gebuerstet_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Quadratprofil gebürstet aus Edelstahl für saubere Fliesenkanten.",
    meta: "Gebürstet",
    marketLabel: "Vergleichbare Quadrat-Fliesenschiene",
    marketMultiplier: 1.18,
    design: "Original-Quadratprofil mit gebürsteter Edelstahloptik.",
    marketDesign: "Ähnliche Schiene im Quadratprofil, oft etwas teurer angesetzt.",
    advantage: "Klarer Originalartikel mit einem attraktiveren Einstieg als viele Marktalternativen."
  }),
  createProduct({
    id: "fliesenschiene-quadrat-poliert",
    title: "Fliesenschiene Edelstahl Quadrat poliert",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "20,86 – 21,84 € inkl. MwSt.",
    priceValue: 20.86,
    image: "/assets/original/2022-09-Quadrat_poliert_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Quadrat_poliert_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Quadratprofil poliert aus Edelstahl für klare und glänzende Abschlüsse.",
    meta: "Poliert",
    marketLabel: "Vergleichbare polierte Quadrat-Fliesenschiene",
    marketMultiplier: 1.18,
    design: "Original-Quadratprofil in polierter Edelstahloberfläche.",
    marketDesign: "Ähnliche polierte Schiene, im Markt oft etwas höher bepreist.",
    advantage: "Die polierte Originalausführung bleibt preislich unter vielen Vergleichsartikeln."
  }),
  createProduct({
    id: "fliesenschiene-winkel-poliert",
    title: "Fliesenschiene Edelstahl Winkel poliert",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "14,84 – 18,33 € inkl. MwSt.",
    priceValue: 14.84,
    image: "/assets/original/2022-09-Winkel_poliert_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Winkel_poliert_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Poliertes Winkelprofil aus Edelstahl für widerstandsfähige Fliesenkanten.",
    meta: "Poliert",
    marketLabel: "Vergleichbare polierte Winkel-Fliesenschiene",
    marketMultiplier: 1.22,
    design: "Original-Winkelprofil in polierter Edelstahloptik.",
    marketDesign: "Ähnliche polierte Schiene mit höherem Fachhandelspreis.",
    advantage: "Saubere Originalausführung mit direktem Preisvorteil."
  }),
  createProduct({
    id: "fliesenschiene-winkel-natur",
    title: "Fliesenschiene Edelstahl Winkel natur",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "17,02 – 18,12 € inkl. MwSt.",
    priceValue: 17.02,
    image: "/assets/original/2022-09-Winkel_natur_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Winkel_natur_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Winkelprofil natur in Edelstahl für schlichte und robuste Fliesenabschlüsse.",
    meta: "Natur",
    marketLabel: "Vergleichbare Winkel-Fliesenschiene natur",
    marketMultiplier: 1.2,
    design: "Original-Winkelprofil in natürlicher Edelstahloberfläche.",
    marketDesign: "Ähnliche Naturausführung mit meist etwas höherem Preisniveau.",
    advantage: "Die natürliche Originalausführung bleibt günstiger erreichbar."
  }),
  createProduct({
    id: "fliesenschiene-viertelkreis-gebuerstet",
    title: "Fliesenschiene Edelstahl Viertelkreis gebürstet",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "20,45 – 27,27 € inkl. MwSt.",
    priceValue: 20.45,
    image: "/assets/original/2022-09-Viertelkreis_gebuerstet_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Viertelkreis_gebuerstet_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Viertelkreisprofil gebürstet aus Edelstahl für weiche Fliesenabschlüsse.",
    meta: "Gebürstet",
    marketLabel: "Vergleichbare Viertelkreis-Fliesenschiene",
    marketMultiplier: 1.18,
    design: "Original-Viertelkreisprofil in gebürsteter Edelstahloberfläche.",
    marketDesign: "Ähnliche Viertelkreisschiene, im Markt häufig kostspieliger.",
    advantage: "Das gebürstete Originalprofil bleibt günstiger als viele Vergleichsprodukte."
  }),
  createProduct({
    id: "fliesenschiene-viertelkreis-poliert",
    title: "Fliesenschiene Edelstahl Viertelkreis poliert",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "20,45 – 27,27 € inkl. MwSt.",
    priceValue: 20.45,
    image: "/assets/original/2022-09-Viertelkreis_poliert_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Viertelkreis_poliert_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Poliertes Viertelkreisprofil mit sauberer Zuordnung zu Produkt und Bild.",
    meta: "Poliert",
    marketLabel: "Vergleichbare polierte Viertelkreis-Fliesenschiene",
    marketMultiplier: 1.18,
    design: "Original-Viertelkreisprofil in polierter Edelstahloptik.",
    marketDesign: "Ähnliche polierte Viertelkreisform, im Markt meist teurer.",
    advantage: "Die polierte Originalschiene bleibt günstiger als viele Vergleichsangebote."
  }),
  createProduct({
    id: "fliesenschiene-viertelkreis-natur",
    title: "Fliesenschiene Edelstahl Viertelkreis natur",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "20,08 – 27,02 € inkl. MwSt.",
    priceValue: 20.08,
    image: "/assets/original/2022-09-Viertelkreis_natur_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Viertelkreis_natur_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Viertelkreisprofil natur mit dem Originalbild direkt am passenden Produkt.",
    meta: "Natur",
    marketLabel: "Vergleichbare Viertelkreis-Fliesenschiene natur",
    marketMultiplier: 1.18,
    design: "Original-Viertelkreisprofil in natürlicher Edelstahloberfläche.",
    marketDesign: "Ähnliche Naturausführung, meist etwas höher bepreist.",
    advantage: "Die natürliche Originalvariante bleibt preislich angenehmer als viele Vergleichsartikel."
  }),
  createProduct({
    id: "fliesenschiene-quadrat-natur",
    title: "Fliesenschiene Edelstahl Quadrat natur",
    category: "Fliesenschienen",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "20,74 – 21,72 € inkl. MwSt.",
    priceValue: 20.74,
    image: "/assets/original/2022-09-Quadrat_natur_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Quadrat_natur_weiss-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Quadratprofil natur mit eigenem Originalfoto statt gemischter Produktanzeige.",
    meta: "Natur",
    marketLabel: "Vergleichbare Quadrat-Fliesenschiene natur",
    marketMultiplier: 1.18,
    design: "Original-Quadratprofil mit natürlicher Edelstahloberfläche.",
    marketDesign: "Ähnliche Schiene natur, im Markt häufig etwas teurer.",
    advantage: "Die natürliche Originalausführung bleibt günstiger erreichbar als viele Alternativen."
  }),
  createProduct({
    id: "eckstueck-quadrat-gebuerstet",
    title: "Eckstück Quadrat gebürstet",
    category: "Eckstücke",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "8,94 – 9,18 € inkl. MwSt.",
    priceValue: 8.94,
    image: "/assets/original/2022-11-Eckstueck-Quadrat-Edelstahl-gebuerstet-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-11-Eckstueck-Quadrat-Edelstahl-gebuerstet-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Gebürstetes Quadrat-Eckstück als passendes Zubehör für die Schiene.",
    meta: "Gebürstet",
    marketLabel: "Vergleichbares Eckstück Quadrat",
    marketMultiplier: 1.22,
    design: "Original-Eckstück im Quadratprofil und gebürsteter Oberfläche.",
    marketDesign: "Ähnliches Eckstück mit meist höherem Zubehörpreis.",
    advantage: "Passendes Original-Zubehör mit günstigerem Einstieg."
  }),
  createProduct({
    id: "eckstueck-quadrat-poliert",
    title: "Eckstück Quadrat poliert",
    category: "Eckstücke",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "8,94 – 9,18 € inkl. MwSt.",
    priceValue: 8.94,
    image: "/assets/original/2022-11-Eckstueck-Quadrat-Edelstahl-poliert-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-11-Eckstueck-Quadrat-Edelstahl-poliert-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Poliertes Quadrat-Eckstück für saubere Übergänge an passenden Schienen.",
    meta: "Poliert",
    marketLabel: "Vergleichbares poliertes Quadrat-Eckstück",
    marketMultiplier: 1.22,
    design: "Original-Eckstück im polierten Quadratprofil.",
    marketDesign: "Ähnliches Eckstück, häufig teurer im Zubehörbereich.",
    advantage: "Original-Zubehör mit nachvollziehbarem Preisvorteil."
  }),
  createProduct({
    id: "eckstueck-viertelkreis-gebuerstet",
    title: "Eckstück Viertelkreis gebürstet",
    category: "Eckstücke",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "8,94 – 9,18 € inkl. MwSt.",
    priceValue: 8.94,
    image: "/assets/original/2022-11-Eckstueck-Viertelkreis-Edelstahl-gebuerstet-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-11-Eckstueck-Viertelkreis-Edelstahl-gebuerstet-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Gebürstetes Viertelkreis-Eckstück als passendes Zubehör für die Schiene.",
    meta: "Gebürstet",
    marketLabel: "Vergleichbares Viertelkreis-Eckstück",
    marketMultiplier: 1.22,
    design: "Original-Eckstück im Viertelkreisprofil und gebürsteter Oberfläche.",
    marketDesign: "Ähnliches Eckstück, im Markt häufig etwas teurer.",
    advantage: "Sauber passendes Original-Zubehör mit günstigerem Einstieg."
  }),
  createProduct({
    id: "eckstueck-viertelkreis-poliert",
    title: "Eckstück Viertelkreis poliert",
    category: "Eckstücke",
    section: "zubehoer",
    subsection: "fliesenschienen",
    price: "8,94 – 9,18 € inkl. MwSt.",
    priceValue: 8.94,
    image: "/assets/original/2022-11-Eckstueck-Viertelkreis-Edelstahl-poliert-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-11-Eckstueck-Viertelkreis-Edelstahl-poliert-optimized-600x400.jpg"],
    description: TILE_TRIM_DESCRIPTION,
    cardDescription: "Poliertes Viertelkreis-Eckstück mit sauberer Bild- und Produktzuordnung.",
    meta: "Poliert",
    marketLabel: "Vergleichbares poliertes Viertelkreis-Eckstück",
    marketMultiplier: 1.22,
    design: "Original-Eckstück im polierten Viertelkreisprofil.",
    marketDesign: "Ähnliches Eckstück mit meist höherem Zubehörpreis.",
    advantage: "Das passende Originalteil bleibt günstiger als viele Vergleichsangebote."
  }),
  createProduct({
    id: "nivelliersystem-zuglaschen-1000",
    title: "1000 Zuglaschen für Fliesen Nivelliersystem",
    category: "Nivelliersystem",
    section: "zubehoer",
    subsection: "nivelliersystem",
    price: "49,90 € inkl. MwSt.",
    priceValue: 49.9,
    image: "/assets/original/2022-09-Zuglasche_rund_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Zuglasche_rund_weiss-optimized-600x400.jpg"],
    description: LEVELING_DESCRIPTION,
    cardDescription: "1000 Zuglaschen für das Fliesen-Nivelliersystem.",
    meta: "1000 Stück",
    marketLabel: "Vergleichbare Zuglaschen für Fliesen-Nivelliersysteme",
    marketMultiplier: 1.22,
    design: "Original-Zuglaschen für das Duschrinnen-Profi-Nivelliersystem.",
    marketDesign: "Ähnliche Zuglaschen, im Markt meist etwas teurer oder schlechter sortiert.",
    advantage: "Großpackung mit Originalzuordnung und direktem Preisvorteil."
  }),
  createProduct({
    id: "nivelliersystem-zange",
    title: "Zange für Fliesen Nivelliersystem",
    category: "Nivelliersystem",
    section: "zubehoer",
    subsection: "nivelliersystem",
    price: "24,90 € inkl. MwSt.",
    priceValue: 24.9,
    image: "/assets/original/2022-09-ZangeRot-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-ZangeRot-optimized-600x400.jpg"],
    description: LEVELING_DESCRIPTION,
    cardDescription: "Zange für das Fliesen-Nivelliersystem zur kontrollierten Verarbeitung.",
    meta: "Werkzeug",
    marketLabel: "Vergleichbare Zange für Fliesen-Nivelliersysteme",
    marketMultiplier: 1.22,
    design: "Original-Zange für das passende Nivelliersystem.",
    marketDesign: "Ähnliche Zange, im Markt meist etwas höher bepreist.",
    advantage: "Passendes Originalwerkzeug mit günstigerem Einstieg."
  }),
  createProduct({
    id: "nivelliersystem-zuglaschen-10000",
    title: "10.000 Zuglaschen für Fliesen Nivelliersystem",
    category: "Nivelliersystem",
    section: "zubehoer",
    subsection: "nivelliersystem",
    price: "399,90 € inkl. MwSt.",
    priceValue: 399.9,
    image: "/assets/original/2022-09-Zuglasche_rund_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Zuglasche_rund_weiss-optimized-600x400.jpg"],
    description: LEVELING_DESCRIPTION,
    cardDescription: "10.000 Zuglaschen für größere Fliesenarbeiten und wiederkehrende Projekte.",
    meta: "10.000 Stück",
    marketLabel: "Vergleichbare Großpackung Zuglaschen",
    marketMultiplier: 1.18,
    design: "Original-Großpackung Zuglaschen für das Nivelliersystem.",
    marketDesign: "Ähnliche Großpackung, im Markt häufig teurer oder weniger klar gegliedert.",
    advantage: "Große Menge mit Originalzuordnung und geringerem Einstieg im Vergleich zu vielen Alternativen."
  }),
  createProduct({
    id: "nivelliersystem-keile-500",
    title: "500 Keile für Fliesen Nivelliersystem",
    category: "Nivelliersystem",
    section: "zubehoer",
    subsection: "nivelliersystem",
    price: "34,90 € inkl. MwSt.",
    priceValue: 34.9,
    image: "/assets/original/2022-09-Keil_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Keil_weiss-optimized-600x400.jpg"],
    description: LEVELING_DESCRIPTION,
    cardDescription: "500 Keile für das Fliesen-Nivelliersystem.",
    meta: "500 Stück",
    marketLabel: "Vergleichbare Keile für Fliesen-Nivelliersysteme",
    marketMultiplier: 1.2,
    design: "Original-Keile für das passende Nivelliersystem.",
    marketDesign: "Ähnliche Keile, im Markt meist etwas höher bepreist.",
    advantage: "Die Originalkeile bleiben günstiger erreichbar als viele Vergleichsangebote."
  }),
  createProduct({
    id: "nivelliersystem-keile-5000",
    title: "5000 Keile für Fliesen Nivelliersystem",
    category: "Nivelliersystem",
    section: "zubehoer",
    subsection: "nivelliersystem",
    price: "249,90 € inkl. MwSt.",
    priceValue: 249.9,
    image: "/assets/original/2022-09-Keil_weiss-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-Keil_weiss-optimized-600x400.jpg"],
    description: LEVELING_DESCRIPTION,
    cardDescription: "5000 Keile für größere Fliesenarbeiten und Vorrat.",
    meta: "5000 Stück",
    marketLabel: "Vergleichbare Großpackung Keile",
    marketMultiplier: 1.18,
    design: "Original-Großpackung Keile für das Duschrinnen-Profi-Nivelliersystem.",
    marketDesign: "Ähnliche Großpackung, meist höher bepreist oder weniger klar sortiert.",
    advantage: "Großmenge mit Originalzuordnung und attraktiverem Einstieg als viele Alternativen."
  }),
  createProduct({
    id: "nivelliersystem-set",
    title: "Nivelliersytem-Set (1000 Zuglaschen, 500 Keile und eine Zange)",
    category: "Nivelliersystem",
    section: "zubehoer",
    subsection: "nivelliersystem",
    price: "79,90 € inkl. MwSt.",
    priceValue: 79.9,
    image: "/assets/original/2022-09-ZangeRot_Zuglasche_Keil-optimized-600x400.jpg",
    gallery: ["/assets/original/2022-09-ZangeRot_Zuglasche_Keil-optimized-600x400.jpg"],
    description: LEVELING_DESCRIPTION,
    cardDescription: "Komplettset mit Zuglaschen, Keilen und Zange für die Fliesenverlegung.",
    meta: "Set",
    marketLabel: "Vergleichbares Nivelliersystem-Komplettset",
    marketMultiplier: 1.2,
    design: "Original-Set mit Zuglaschen, Keilen und Zange.",
    marketDesign: "Ähnliches Komplettset, im Markt häufig teurer oder weniger klar gegliedert.",
    advantage: "Das komplette Originalset bleibt günstiger als viele Vergleichspakete."
  })
];

const productsById = products.reduce(function (accumulator, product) {
  accumulator[product.id] = product;
  return accumulator;
}, {});

export function getProductById(id) {
  return productsById[id] || null;
}

function pickProducts(ids) {
  return ids.map(function (id) {
    return productsById[id];
  });
}

export const productLookup = products.reduce(function (accumulator, product) {
  accumulator[product.title] = product;
  return accumulator;
}, {});

export const catalogSections = [
  {
    id: "edelstahl",
    eyebrow: "Edelstahl Duschrinnen",
    title: "Edelstahl Duschrinnen",
    description: STAINLESS_CATEGORY_DESCRIPTION,
    products: pickProducts(["c15-edelstahl", "andalusia", "nacht", "toskana", "drache", "london", "asia", "regen"])
  },
  {
    id: "befliesbar",
    eyebrow: "Befliesbare Duschrinnen",
    title: "Befliesbare Duschrinnen",
    description: TILEABLE_CATEGORY_DESCRIPTION,
    products: pickProducts(["befliesbar-360", "c16-befliesbar"])
  },
  {
    id: "ersatzteile",
    eyebrow: "Duschrinnen-Ersatzteile",
    title: "Duschrinnen-Ersatzteile",
    description: "Passende Ersatzteile für Duschrinnen, darunter Siphon, Haarsieb, Stellfüße, Dichtband und Adapter.",
    products: pickProducts(["siphon", "haarsieb", "stellfuss", "demontageschluessel", "komplettset", "dichtband", "adapter"])
  },
  {
    id: "bodenablauf",
    eyebrow: "Bodenabläufe",
    title: "Bodenabläufe",
    description: FLOOR_DRAIN_DESCRIPTION,
    products: pickProducts(["bodenablauf-befliesbar", "bodenablauf-edelstahl", "bodenablauf-quadra", "bodenablauf-regen"])
  },
  {
    id: "ablagen",
    eyebrow: "Duschablagen",
    title: "Duschablagen",
    description: SHOWER_SHELF_DESCRIPTION,
    products: pickProducts(["duschablage-luxe", "duschablage-lagoon", "duschablage-serene", "duschablage-soak", "duschablage-aqua"])
  },
  {
    id: "zubehoer",
    eyebrow: "Fliesenzubehör",
    title: "Fliesenzubehör",
    description: "Werkzeuge und Zubehör sauber nach Gruppen gegliedert: Bohrkronen, Trennscheiben, Fliesenschienen und das komplette Nivelliersystem.",
    subsections: [
      {
        id: "diamant-bohrkronen-gruppe",
        title: "Diamant Bohrkronen",
        description:
          "Diamant-Bohrkronen in verschiedenen Größen: Schnelles, einfaches und präzises Bohren von Löchern in Fliesen, Marmor, Granit und anderen harten Materialien",
        products: pickProducts(["matrix", "diamant-bohrkronen", "diamant-bohrkronen-set"])
      },
      {
        id: "diamanttrennscheiben",
        title: "Diamanttrennscheiben",
        description: "Diamanttrennscheiben für präzise Schnitte in Fliesen und Stein.",
        products: pickProducts(["diamanttrennscheibe-115", "diamanttrennscheibe-125"])
      },
      {
        id: "fliesenschienen",
        title: "Fliesenschienen und Eckstücke",
        description: TILE_TRIM_DESCRIPTION,
        products: pickProducts([
          "fliesenschiene-winkel-gebuerstet",
          "fliesenschiene-quadrat-gebuerstet",
          "fliesenschiene-quadrat-poliert",
          "fliesenschiene-winkel-poliert",
          "fliesenschiene-winkel-natur",
          "fliesenschiene-viertelkreis-gebuerstet",
          "fliesenschiene-viertelkreis-poliert",
          "fliesenschiene-viertelkreis-natur",
          "fliesenschiene-quadrat-natur",
          "eckstueck-quadrat-gebuerstet",
          "eckstueck-quadrat-poliert",
          "eckstueck-viertelkreis-gebuerstet",
          "eckstueck-viertelkreis-poliert"
        ])
      },
      {
        id: "nivelliersystem",
        title: "Nivelliersystem",
        description: LEVELING_DESCRIPTION,
        products: pickProducts([
          "nivelliersystem-zuglaschen-1000",
          "nivelliersystem-zange",
          "nivelliersystem-zuglaschen-10000",
          "nivelliersystem-keile-500",
          "nivelliersystem-keile-5000",
          "nivelliersystem-set"
        ])
      }
    ]
  }
];

const catalogContextByProductId = {};

catalogSections.forEach(function (section) {
  if (Array.isArray(section.products)) {
    section.products.forEach(function (product) {
      catalogContextByProductId[product.id] = {
        section,
        subsection: null
      };
    });
  }

  if (Array.isArray(section.subsections)) {
    section.subsections.forEach(function (subsection) {
      subsection.products.forEach(function (product) {
        catalogContextByProductId[product.id] = {
          section,
          subsection
        };
      });
    });
  }
});

export function getCatalogContext(productId) {
  return catalogContextByProductId[productId] || null;
}

export function getRelatedProducts(productId, limit = 4) {
  const product = getProductById(productId);
  if (!product) {
    return [];
  }

  return products
    .filter(function (candidate) {
      return candidate.id !== productId && candidate.section === product.section;
    })
    .slice(0, limit);
}
