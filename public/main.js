(function () {
  const products = [
    {
      title: "Duschrinne C15 Edelstahl",
      category: "Edelstahl Duschrinne",
      price: "ab 79,90 EUR",
      priceValue: 79.9,
      image: "assets/original/2018-08-Edelstahl-45deg-600x600.jpg",
      url: "sortiment.html#edelstahl"
    },
    {
      title: "Duschrinne C16 befliesbar",
      category: "Befliesbare Duschrinne",
      price: "ab 79,90 EUR",
      priceValue: 79.9,
      image: "assets/original/2018-08-befliesbar-45deg-1-600x600.jpg",
      url: "sortiment.html#befliesbar"
    },
    {
      title: "Duschrinne 360 Grad befliesbar",
      category: "Befliesbare Duschrinne",
      price: "ab 79,90 EUR",
      priceValue: 79.9,
      image: "assets/original/2018-08-befliesbar-45deg-1-600x600.jpg",
      url: "sortiment.html#befliesbar"
    },
    {
      title: "Bodenablauf Edelstahl",
      category: "Bodenablauf",
      price: "ab 39,90 EUR",
      priceValue: 39.9,
      image: "assets/original/2022-02-Bodenablauf_EDELSTAHL_3-optimized-600x400.jpg",
      url: "sortiment.html#bodenablauf"
    },
    {
      title: "Diamant Bohrkrone",
      category: "Fliesenzubehoer",
      price: "ab 18,90 EUR",
      priceValue: 18.9,
      image: "assets/original/2022-09-68mm_weiss_pxo-optimized.jpg",
      url: "sortiment.html#diamant-bohrkronen"
    },
    {
      title: "Diamant Bohrkronen Matrix",
      category: "Fliesenzubehoer",
      price: "ab 24,90 EUR",
      priceValue: 24.9,
      image: "assets/original/2022-09-32mm_weiss_pxo-optimized.jpg",
      url: "sortiment.html#matrix"
    },
    {
      title: "Diamant Bohrkronen Set",
      category: "Fliesenzubehoer",
      price: "99,90 EUR",
      priceValue: 99.9,
      image: "assets/original/2022-02-Bohrkronenkoffer1_LOGO-optimized-600x450.jpg",
      url: "sortiment.html#diamant-bohrkronen-set"
    },
    {
      title: "Edelstahl Duschablage",
      category: "Duschablage",
      price: "ab 34,90 EUR",
      priceValue: 34.9,
      image: "assets/original/2024-10-SERENE_white-600x400.jpg",
      url: "sortiment.html#ablagen"
    },
    {
      title: "Duschrinnen-Siphon",
      category: "Ersatzteil",
      price: "19,90 EUR",
      priceValue: 19.9,
      image: "assets/original/2021-08-ET-Siphon-600x600.jpg",
      url: "sortiment.html#ersatzteile"
    },
    {
      title: "Diamanttrennscheibe 115",
      category: "Fliesenzubehoer",
      price: "ab 17,90 EUR",
      priceValue: 17.9,
      image: "assets/original/2022-02-Diamanttrennscheibe-2023-600x450.jpg",
      url: "sortiment.html#diamanttrennscheibe-115"
    },
    {
      title: "Diamanttrennscheibe 125",
      category: "Fliesenzubehoer",
      price: "ab 19,90 EUR",
      priceValue: 19.9,
      image: "assets/original/2022-02-Diamanttrennscheibe-2023.jpg",
      url: "sortiment.html#diamanttrennscheibe-125"
    }
  ];
  const CART_STORAGE_KEY = "duschrinnen-cart";
  const siteLinks = [
    { title: "FAQ", category: "Service", url: "faq.html" },
    { title: "Blog", category: "Journal", url: "blog.html" },
    { title: "Unternehmen", category: "Marke", url: "about.html" },
    { title: "Inspiration", category: "Ideen", url: "for-you.html" },
    { title: "Mein Konto", category: "Konto", url: "mein-konto.html" },
    { title: "Warenkorb & Checkout", category: "Bestellung", url: "checkout.html" },
    { title: "Edelstahl Duschrinnen", category: "Kategorie", url: "sortiment.html#edelstahl" },
    { title: "Befliesbare Duschrinnen", category: "Kategorie", url: "sortiment.html#befliesbar" },
    { title: "Duschrinnen-Ersatzteile", category: "Kategorie", url: "sortiment.html#ersatzteile" },
    { title: "Bodenabläufe", category: "Kategorie", url: "sortiment.html#bodenablauf" },
    { title: "Duschablagen", category: "Kategorie", url: "sortiment.html#ablagen" },
    { title: "Fliesenzubehör", category: "Kategorie", url: "sortiment.html#zubehoer" },
    { title: "Diamant Bohrkronen Matrix", category: "Werkzeug", url: "sortiment.html#matrix" },
    { title: "Diamant Bohrkronen", category: "Werkzeug", url: "sortiment.html#diamant-bohrkronen" },
    { title: "Diamant Bohrkronen Set", category: "Werkzeug", url: "sortiment.html#diamant-bohrkronen-set" },
    { title: "Fliesenschienen", category: "Werkzeug", url: "sortiment.html#fliesenschienen" },
    { title: "Nivelliersystem", category: "Werkzeug", url: "sortiment.html#nivelliersystem" },
    { title: "Diamanttrennscheibe 115", category: "Werkzeug", url: "sortiment.html#diamanttrennscheibe-115" },
    { title: "Diamanttrennscheibe 125", category: "Werkzeug", url: "sortiment.html#diamanttrennscheibe-125" },
    { title: "Widerrufsbelehrung", category: "Rechtliches", url: "widerrufsbelehrung.html" },
    { title: "Allgemeine Geschäftsbedingungen", category: "Rechtliches", url: "allgemeine-geschaeftsbedingungen.html" },
    { title: "Impressum", category: "Rechtliches", url: "impressum.html" },
    { title: "Datenschutzerklärung", category: "Rechtliches", url: "datenschutz.html" }
  ];

  const translations = {
    de: {
      home: "Start",
      products: "Sortiment",
      guide: "Ratgeber",
      contact: "Kontakt",
      advice: "Beratung",
      search: "Suche öffnen",
      cart: "Warenkorb",
      shipping: "DHL Lieferung in 1-2 Werktagen",
      payment: "Rechnungskauf & PayPal",
      heroEyebrow: "Badtechnik für Profis und Modernisierer",
      heroTitle: "Duschrinnen, die ein Bad sofort hochwertiger wirken lassen.",
      heroText: "Premium-Duschrinnen, Bodenabläufe und Fliesenzubehör in einer ruhigeren, schnelleren und moderneren Shop-Erfahrung - mit klarer Beratung und schneller Lieferung.",
      viewProducts: "Produkte ansehen",
      planDrain: "Duschrinne planen",
      reviews: "Google Bewertungen",
      reply: "Antwortzeit",
      days: "Werktage Versand",
      productView: "3D Produktansicht",
      add: "In den Warenkorb",
      close: "Schließen",
      openProduct: "Produkt öffnen",
      askAdvice: "Beratung anfragen",
      searchLabel: "Produktsuche",
      searchPlaceholder: "Duschrinne, Siphon, Bohrkrone...",
      videoEyebrow: "Einbauvideo",
      videoTitle: "Einbauvideo direkt aus dem Original-Shop.",
      videoText: "Der Player startet automatisch, sobald dieser Bereich sichtbar ist. Beim Verlassen der Sektion pausiert das Video wieder.",
      videoAuto: "Startet beim Scrollen",
      videoSoundHint: "Ton und Lautstärke selbst steuern",
      videoPlay: "Abspielen",
      videoPause: "Pausieren",
      videoSoundOn: "Ton an",
      videoSoundOff: "Ton aus",
      videoOpen: "Auf YouTube öffnen",
      videoVolume: "Lautstärke",
      chatTitle: "KI Beratung",
      chatIntro: "Hallo, ich bin die KI Beratung für Duschrinnen Profi. Beschreiben Sie kurz Ihr Bad, Ihre Maße oder Ihr Problem, dann empfehle ich die passende Richtung.",
      chatInput: "Bad, Maße oder Frage eingeben...",
      chatPrompts: ["Ich renoviere ein kleines Bad", "Ich möchte eine minimalistische Dusche", "Ich suche ein Ersatzteil", "Ich möchte den Besitzer kontaktieren"]
    },
    en: {
      home: "Home",
      products: "Products",
      guide: "Guide",
      contact: "Contact",
      advice: "Advice",
      search: "Open search",
      cart: "Cart",
      shipping: "DHL delivery in 1-2 business days",
      payment: "Invoice purchase & PayPal",
      heroEyebrow: "Bathroom technology for pros and renovators",
      heroTitle: "Shower drains that make a bathroom feel instantly premium.",
      heroText: "Premium shower channels, floor drains and tiling accessories in a calmer, faster and more modern shop experience with clear advice and fast delivery.",
      viewProducts: "View products",
      planDrain: "Plan drain",
      reviews: "Google reviews",
      reply: "Reply time",
      days: "Business days delivery",
      productView: "3D product view",
      add: "Add to cart",
      close: "Close",
      openProduct: "Open product",
      askAdvice: "Request advice",
      searchLabel: "Product search",
      searchPlaceholder: "Shower drain, siphon, drill bit...",
      videoEyebrow: "Installation video",
      videoTitle: "Installation video from the original live shop.",
      videoText: "The player starts automatically once this section is visible and pauses again when you leave it.",
      videoAuto: "Starts on scroll",
      videoSoundHint: "Control sound and volume yourself",
      videoPlay: "Play",
      videoPause: "Pause",
      videoSoundOn: "Sound on",
      videoSoundOff: "Sound off",
      videoOpen: "Open on YouTube",
      videoVolume: "Volume",
      chatTitle: "AI advice",
      chatIntro: "Hi, I am the Duschrinnen Profi AI advisor. Tell me your bathroom size, style or issue and I will suggest the best direction.",
      chatInput: "Enter bathroom size or question...",
      chatPrompts: ["I am renovating a small bathroom", "I want a minimalist shower", "I need a spare part", "I want to contact the owner"]
    },
    fr: {
      home: "Accueil",
      products: "Produits",
      guide: "Guide",
      contact: "Contact",
      advice: "Conseil",
      search: "Ouvrir la recherche",
      cart: "Panier",
      shipping: "Livraison DHL en 1-2 jours ouvrés",
      payment: "Achat sur facture & PayPal",
      heroEyebrow: "Technique de salle de bain pour pros et rénovations",
      heroTitle: "Des caniveaux de douche qui rendent la salle de bain plus premium.",
      heroText: "Caniveaux de douche, siphons de sol et accessoires de carrelage dans une boutique plus fluide, moderne et claire.",
      viewProducts: "Voir les produits",
      planDrain: "Planifier",
      reviews: "Avis Google",
      reply: "Délai de réponse",
      days: "Jours de livraison",
      productView: "Vue produit 3D",
      add: "Ajouter au panier",
      close: "Fermer",
      openProduct: "Ouvrir le produit",
      askAdvice: "Demander conseil",
      searchLabel: "Recherche produit",
      searchPlaceholder: "Caniveau, siphon, couronne...",
      videoEyebrow: "Vidéo d'installation",
      videoTitle: "Vidéo d'installation issue de la boutique d'origine.",
      videoText: "Le lecteur démarre automatiquement quand cette section devient visible et se met en pause quand vous la quittez.",
      videoAuto: "Démarre au défilement",
      videoSoundHint: "Contrôlez le son et le volume",
      videoPlay: "Lire",
      videoPause: "Pause",
      videoSoundOn: "Activer le son",
      videoSoundOff: "Couper le son",
      videoOpen: "Ouvrir sur YouTube",
      videoVolume: "Volume",
      chatTitle: "Conseil IA",
      chatIntro: "Bonjour, je suis le conseiller IA de Duschrinnen Profi. Décrivez votre salle de bain, vos dimensions ou votre question.",
      chatInput: "Dimensions ou question...",
      chatPrompts: ["Je rénove une petite salle de bain", "Je veux une douche minimaliste", "Je cherche une pièce détachée", "Je veux contacter le propriétaire"]
    },
    tr: {
      home: "Ana sayfa",
      products: "Ürünler",
      guide: "Rehber",
      contact: "İletişim",
      advice: "Danışmanlık",
      search: "Aramayı aç",
      cart: "Sepet",
      shipping: "DHL ile 1-2 iş gününde teslimat",
      payment: "Fatura ile ödeme & PayPal",
      heroEyebrow: "Ustalar ve yenileme projeleri için banyo teknolojisi",
      heroTitle: "Banyoyu anında daha premium gösteren duş giderleri.",
      heroText: "Premium duş kanalları, zemin giderleri ve fayans aksesuarları; daha sakin, hızlı ve modern bir alışveriş deneyimi.",
      viewProducts: "Ürünleri gör",
      planDrain: "Gider planla",
      reviews: "Google yorumları",
      reply: "Yanıt süresi",
      days: "İş günü teslimat",
      productView: "3D ürün görünümü",
      add: "Sepete ekle",
      close: "Kapat",
      openProduct: "Ürünü aç",
      askAdvice: "Danışmanlık iste",
      searchLabel: "Ürün arama",
      searchPlaceholder: "Duş gideri, sifon, matkap ucu...",
      videoEyebrow: "Montaj videosu",
      videoTitle: "Orijinal mağazadan montaj videosu.",
      videoText: "Bu bölüm görünür olduğunda oynatıcı otomatik başlar ve bölümden çıkınca tekrar duraklar.",
      videoAuto: "Kaydırınca başlar",
      videoSoundHint: "Ses ve seviyeyi kendiniz yönetin",
      videoPlay: "Oynat",
      videoPause: "Duraklat",
      videoSoundOn: "Sesi aç",
      videoSoundOff: "Sesi kapat",
      videoOpen: "YouTube'da aç",
      videoVolume: "Ses seviyesi",
      chatTitle: "AI danışman",
      chatIntro: "Merhaba, Duschrinnen Profi AI danışmanıyım. Banyo ölçünüzü, tarzınızı veya sorununuzu yazın, uygun yönü önereyim.",
      chatInput: "Ölçü veya soru yazın...",
      chatPrompts: ["Küçük bir banyoyu yeniliyorum", "Minimalist duş istiyorum", "Yedek parça arıyorum", "Sahibiyle iletişim kurmak istiyorum"]
    },
    ru: {
      home: "Главная",
      products: "Товары",
      guide: "Гид",
      contact: "Контакт",
      advice: "Консультация",
      search: "Открыть поиск",
      cart: "Корзина",
      shipping: "DHL доставка за 1-2 рабочих дня",
      payment: "Оплата по счету и PayPal",
      heroEyebrow: "Сантехнические решения для мастеров и ремонта",
      heroTitle: "Душевые трапы, которые сразу делают ванную премиальной.",
      heroText: "Премиальные душевые каналы, сливные трапы и аксессуары для плитки в более спокойном и современном магазине.",
      viewProducts: "Смотреть товары",
      planDrain: "Подобрать трап",
      reviews: "Отзывы Google",
      reply: "Время ответа",
      days: "Рабочих дня доставка",
      productView: "3D вид товара",
      add: "В корзину",
      close: "Закрыть",
      openProduct: "Открыть товар",
      askAdvice: "Запросить совет",
      searchLabel: "Поиск товара",
      searchPlaceholder: "Душевой трап, сифон, коронка...",
      videoEyebrow: "Видео монтажа",
      videoTitle: "Видео монтажа из оригинального магазина.",
      videoText: "Плеер запускается автоматически, когда этот блок попадает в поле зрения, и ставится на паузу при выходе из него.",
      videoAuto: "Стартует при прокрутке",
      videoSoundHint: "Управляйте звуком и громкостью",
      videoPlay: "Воспроизвести",
      videoPause: "Пауза",
      videoSoundOn: "Включить звук",
      videoSoundOff: "Выключить звук",
      videoOpen: "Открыть на YouTube",
      videoVolume: "Громкость",
      chatTitle: "AI консультация",
      chatIntro: "Здравствуйте, я AI консультант Duschrinnen Profi. Опишите ванную, размеры или вопрос, и я предложу подходящее решение.",
      chatInput: "Введите размер или вопрос...",
      chatPrompts: ["Я ремонтирую маленькую ванную", "Нужен минималистичный душ", "Ищу запчасть", "Хочу связаться с владельцем"]
    },
    es: {
      home: "Inicio",
      products: "Productos",
      guide: "Guía",
      contact: "Contacto",
      advice: "Asesoría",
      search: "Abrir búsqueda",
      cart: "Carrito",
      shipping: "Entrega DHL en 1-2 días laborables",
      payment: "Pago por factura y PayPal",
      heroEyebrow: "Tecnología de baño para profesionales y reformas",
      heroTitle: "Canaletas de ducha que hacen que el baño se vea premium.",
      heroText: "Canaletas de ducha, desagües y accesorios de alicatado en una experiencia de compra más clara, rápida y moderna.",
      viewProducts: "Ver productos",
      planDrain: "Planificar desagüe",
      reviews: "Reseñas de Google",
      reply: "Tiempo de respuesta",
      days: "Días de entrega",
      productView: "Vista 3D del producto",
      add: "Añadir al carrito",
      close: "Cerrar",
      openProduct: "Abrir producto",
      askAdvice: "Pedir asesoría",
      searchLabel: "Buscar producto",
      searchPlaceholder: "Canaleta, sifón, corona...",
      videoEyebrow: "Video de instalación",
      videoTitle: "Video de instalación desde la tienda original.",
      videoText: "El reproductor empieza automáticamente cuando esta sección entra en pantalla y se pausa al salir de ella.",
      videoAuto: "Empieza al hacer scroll",
      videoSoundHint: "Controla el sonido y el volumen",
      videoPlay: "Reproducir",
      videoPause: "Pausar",
      videoSoundOn: "Activar sonido",
      videoSoundOff: "Silenciar",
      videoOpen: "Abrir en YouTube",
      videoVolume: "Volumen",
      chatTitle: "Asesor IA",
      chatIntro: "Hola, soy el asesor IA de Duschrinnen Profi. Describe tu baño, medidas o problema y te recomendaré la mejor opción.",
      chatInput: "Escribe medidas o pregunta...",
      chatPrompts: ["Estoy reformando un baño pequeño", "Quiero una ducha minimalista", "Busco un repuesto", "Quiero contactar al propietario"]
    }
  };

  Object.assign(translations.de, {
    stainless: "Edelstahl Duschrinnen",
    tileable: "Befliesbare Duschrinnen",
    spareParts: "Duschrinnen-Ersatzteile",
    floorDrains: "Bodenabläufe",
    showerShelves: "Duschablagen",
    tileAccessories: "Fliesenzubehör",
    blog: "Blog",
    account: "Mein Konto",
    facebook: "Facebook",
    cartText: "Warenkorb",
    matrix: "Diamant Bohrkronen Matrix",
    diamondCrowns: "Diamant Bohrkronen",
    diamondCrownsSet: "Diamant Bohrkronen Set",
    tileTrims: "Fliesenschienen",
    leveling: "Nivelliersystem",
    disc115: "Diamanttrennscheibe 115",
    disc125: "Diamanttrennscheibe 125",
    payment: "Rechnungskauf, PayPal & Giropay",
    productsMenu: "Badprodukte",
    company: "Unternehmen",
    inspiration: "Inspiration",
    journal: "Blog",
    navSearchPlaceholder: "Produkte, Blog oder Tipps suchen...",
    collectionsEyebrow: "Shop Struktur",
    collectionsTitle: "Alle Original-Kategorien, aber deutlich ruhiger inszeniert.",
    collectionsText: "Die wichtigsten Bereiche der Live-Seite bleiben vollständig erhalten. Hier wandern sie als moderne, horizontale Sammlung durch das erste Drittel der Startseite.",
    previousCategory: "Vorherige Kategorie",
    nextCategory: "Nächste Kategorie"
  });

  Object.assign(translations.en, {
    stainless: "Stainless shower drains",
    tileable: "Tileable shower drains",
    spareParts: "Shower drain spare parts",
    floorDrains: "Floor drains",
    showerShelves: "Shower shelves",
    tileAccessories: "Tile accessories",
    blog: "Blog",
    account: "My account",
    facebook: "Facebook",
    cartText: "Cart",
    matrix: "Diamond drill crowns matrix",
    diamondCrowns: "Diamond drill crowns",
    diamondCrownsSet: "Diamond drill crown set",
    tileTrims: "Tile trims",
    leveling: "Leveling system",
    disc115: "Diamond cutting disc 115",
    disc125: "Diamond cutting disc 125",
    payment: "Invoice purchase, PayPal & Giropay",
    productsMenu: "Bathroom products",
    company: "Company",
    inspiration: "Inspiration",
    journal: "Blog",
    navSearchPlaceholder: "Search products, blog or tips...",
    collectionsEyebrow: "Shop structure",
    collectionsTitle: "All original categories, presented in a calmer way.",
    collectionsText: "The key areas of the live site remain intact, but now they flow through the first part of the homepage as a cleaner horizontal collection.",
    previousCategory: "Previous category",
    nextCategory: "Next category"
  });

  Object.assign(translations.fr, {
    stainless: "Caniveaux inox",
    tileable: "Caniveaux à carreler",
    spareParts: "Pièces détachées",
    floorDrains: "Siphons de sol",
    showerShelves: "Étagères de douche",
    tileAccessories: "Accessoires carrelage",
    blog: "Blog",
    account: "Mon compte",
    facebook: "Facebook",
    cartText: "Panier",
    matrix: "Couronnes diamant Matrix",
    diamondCrowns: "Couronnes diamant",
    diamondCrownsSet: "Set de couronnes diamant",
    tileTrims: "Profilés de carrelage",
    leveling: "Système de nivellement",
    disc115: "Disque diamant 115",
    disc125: "Disque diamant 125",
    payment: "Facture, PayPal et Giropay",
    productsMenu: "Produits salle de bain",
    company: "Entreprise",
    inspiration: "Inspiration",
    journal: "Blog",
    navSearchPlaceholder: "Rechercher produits, blog ou conseils...",
    collectionsEyebrow: "Structure de la boutique",
    collectionsTitle: "Toutes les catégories d'origine, dans une mise en scène plus calme.",
    collectionsText: "Les zones clés du site d'origine restent présentes, mais elles défilent ici comme une collection horizontale plus moderne dès le haut de la page.",
    previousCategory: "Catégorie précédente",
    nextCategory: "Catégorie suivante"
  });

  Object.assign(translations.tr, {
    stainless: "Paslanmaz duş giderleri",
    tileable: "Fayans kaplamalı duş giderleri",
    spareParts: "Duş gideri yedek parçaları",
    floorDrains: "Zemin giderleri",
    showerShelves: "Duş rafları",
    tileAccessories: "Fayans aksesuarları",
    blog: "Blog",
    account: "Hesabım",
    facebook: "Facebook",
    cartText: "Sepet",
    matrix: "Elmas matkap uçları Matrix",
    diamondCrowns: "Elmas matkap uçları",
    diamondCrownsSet: "Elmas matkap ucu seti",
    tileTrims: "Fayans profilleri",
    leveling: "Seviyeleme sistemi",
    disc115: "Elmas kesme diski 115",
    disc125: "Elmas kesme diski 125",
    payment: "Faturalı ödeme, PayPal ve Giropay",
    productsMenu: "Banyo ürünleri",
    company: "Şirket",
    inspiration: "İlham",
    journal: "Blog",
    navSearchPlaceholder: "Ürün, blog veya ipucu ara...",
    collectionsEyebrow: "Mağaza yapısı",
    collectionsTitle: "Orijinal kategorilerin tamamı, daha sakin bir sunumla.",
    collectionsText: "Canlı sitenin ana bölümleri korunuyor; burada ana sayfanın üst kısmında daha modern, yatay bir koleksiyon olarak akıyorlar.",
    previousCategory: "Önceki kategori",
    nextCategory: "Sonraki kategori"
  });

  Object.assign(translations.ru, {
    stainless: "Нержавеющие душевые трапы",
    tileable: "Трапы под плитку",
    spareParts: "Запчасти для трапов",
    floorDrains: "Напольные сливы",
    showerShelves: "Душевые полки",
    tileAccessories: "Аксессуары для плитки",
    blog: "Блог",
    account: "Мой аккаунт",
    facebook: "Facebook",
    cartText: "Корзина",
    matrix: "Алмазные коронки Matrix",
    diamondCrowns: "Алмазные коронки",
    diamondCrownsSet: "Набор алмазных коронок",
    tileTrims: "Плиточные профили",
    leveling: "Система выравнивания",
    disc115: "Алмазный диск 115",
    disc125: "Алмазный диск 125",
    payment: "Оплата по счету, PayPal и Giropay",
    productsMenu: "Товары для ванной",
    company: "Компания",
    inspiration: "Вдохновение",
    journal: "Блог",
    navSearchPlaceholder: "Искать товары, блог или советы...",
    collectionsEyebrow: "Структура магазина",
    collectionsTitle: "Все оригинальные категории, но в более спокойной подаче.",
    collectionsText: "Ключевые разделы живого сайта сохранены, но здесь они проходят через первый экран как более современная горизонтальная коллекция.",
    previousCategory: "Предыдущая категория",
    nextCategory: "Следующая категория"
  });

  Object.assign(translations.es, {
    stainless: "Canaletas inoxidables",
    tileable: "Canaletas alicatables",
    spareParts: "Repuestos de canaleta",
    floorDrains: "Desagües de suelo",
    showerShelves: "Estantes de ducha",
    tileAccessories: "Accesorios para azulejos",
    blog: "Blog",
    account: "Mi cuenta",
    facebook: "Facebook",
    cartText: "Carrito",
    matrix: "Coronas diamantadas Matrix",
    diamondCrowns: "Coronas diamantadas",
    diamondCrownsSet: "Set de coronas diamantadas",
    tileTrims: "Perfiles para azulejos",
    leveling: "Sistema de nivelación",
    disc115: "Disco diamantado 115",
    disc125: "Disco diamantado 125",
    payment: "Pago por factura, PayPal y Giropay",
    productsMenu: "Productos de baño",
    company: "Empresa",
    inspiration: "Inspiración",
    journal: "Blog",
    navSearchPlaceholder: "Buscar productos, blog o consejos...",
    collectionsEyebrow: "Estructura de la tienda",
    collectionsTitle: "Todas las categorías originales, con una puesta en escena más calmada.",
    collectionsText: "Las áreas clave del sitio original se mantienen, pero aquí avanzan por la parte inicial de la portada como una colección horizontal más moderna.",
    previousCategory: "Categoría anterior",
    nextCategory: "Categoría siguiente"
  });

  let currentLanguage = getSavedLanguage();
  let cartCount = 0;
  let toastTimer = null;
  let refreshVideoUi = null;
  let youtubeApiPromise = null;

  document.addEventListener("DOMContentLoaded", function () {
    renderIcons();
    setupActiveNavigation();
    setupPreferences();
    setupMouseGradient();
    setupMenu();
    setupHeader();
    setupReveal();
    setupMotionEnhancements();
    setupCarousels();
    setupFilters();
    setupCart();
    setupCheckoutPage();
    setupSearch();
    setupConfigurator();
    setupFaq();
    setupContactForm();
    setupAccountForms();
    setupVideoSection();
    setupChatAssistant();
    setupProductViewer();
    setupOriginalGallery();
    applyLanguage(currentLanguage);
  });

  function renderIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons({
        attrs: {
          "stroke-width": 2.1
        }
      });
    }
  }

  function setupActiveNavigation() {
    const page = document.body.dataset.page;
    if (!page) {
      return;
    }

    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      if (link.dataset.navLink === page) {
        link.classList.add("is-active");
        if (link.tagName === "A") {
          link.setAttribute("aria-current", "page");
        }
      }
    });
  }

  function setupPreferences() {
    const themeToggle = document.querySelector("[data-theme-toggle]");
    const languageSelect = document.querySelector("[data-language-select]");
    const savedTheme = getSavedTheme();

    applyTheme(savedTheme);
    try {
      localStorage.removeItem("duschrinnen-font");
    } catch (error) {}

    if (languageSelect) {
      languageSelect.value = currentLanguage;
      languageSelect.addEventListener("change", function () {
        currentLanguage = languageSelect.value;
        try {
          localStorage.setItem("duschrinnen-language", currentLanguage);
        } catch (error) {}
        applyLanguage(currentLanguage);
        showToast(getTranslation().languageChanged || "Language updated.");
      });
    }

    if (themeToggle) {
      document.addEventListener("click", function (event) {
        if (!event.target.closest("[data-theme-toggle]")) {
          return;
        }
        const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        try {
          localStorage.setItem("duschrinnen-theme", nextTheme);
        } catch (error) {}
      });
    }
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    const toggle = document.querySelector("[data-theme-toggle]");

    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Light mode" : "Dark mode");
      toggle.innerHTML = '<i data-lucide="' + (isDark ? "sun" : "moon") + '" aria-hidden="true"></i>';
      renderIcons();
    }
  }

  function setupMouseGradient() {
    let raf = null;
    let nextX = 50;
    let nextY = 20;

    window.addEventListener(
      "pointermove",
      function (event) {
        nextX = Math.round((event.clientX / window.innerWidth) * 100);
        nextY = Math.round((event.clientY / window.innerHeight) * 100);

        if (raf) {
          return;
        }

        raf = window.requestAnimationFrame(function () {
          document.documentElement.style.setProperty("--mouse-x", nextX + "%");
          document.documentElement.style.setProperty("--mouse-y", nextY + "%");
          raf = null;
        });
      },
      { passive: true }
    );
  }

  function applyLanguage(language) {
    const t = translations[language] || translations.de;
    document.documentElement.lang = language;

    setText('[data-nav-link="home"]', t.home);
    setText('[data-nav-link="company"]', t.company);
    setText('[data-nav-link="inspiration"]', t.inspiration);
    setText('[data-nav-link="ratgeber"]', t.guide);
    setText('[data-nav-link="kontakt"]', t.contact);
    setText('[data-nav-link="account"]', t.account);
    setText('[data-nav-link="checkout"]', t.cartText);
    setText('[data-nav-link="faq"]', "FAQ");
    setText('[data-nav-label="productsMenu"]', t.productsMenu);
    setText('[data-nav-label="blogMenu"]', t.blog);
    setText('[data-nav-sub="stainless"]', t.stainless);
    setText('[data-nav-sub="tileable"]', t.tileable);
    setText('[data-nav-sub="spareParts"]', t.spareParts);
    setText('[data-nav-sub="floorDrains"]', t.floorDrains);
    setText('[data-nav-sub="showerShelves"]', t.showerShelves);
    setText('[data-nav-sub="matrix"]', t.matrix);
    setText('[data-nav-sub="diamondCrowns"]', t.diamondCrowns);
    setText('[data-nav-sub="diamondCrownsSet"]', t.diamondCrownsSet);
    setText('[data-nav-sub="tileTrims"]', t.tileTrims);
    setText('[data-nav-sub="leveling"]', t.leveling);
    setText('[data-nav-sub="disc115"]', t.disc115);
    setText('[data-nav-sub="disc125"]', t.disc125);
    setText('[data-nav-sub="journal"]', t.journal);
    setText('[data-home-pill="edelstahl"]', t.stainless);
    setText('[data-home-pill="befliesbar"]', t.tileable);
    setText('[data-home-pill="tiles"]', t.tileAccessories);
    setText('[data-home-pill="ablagen"]', t.showerShelves);
    setText("[data-home-collections-eyebrow]", t.collectionsEyebrow);
    setText("[data-home-collections-title]", t.collectionsTitle);
    setText("[data-home-collections-text]", t.collectionsText);
    setLabel("[data-carousel-prev]", t.previousCategory);
    setLabel("[data-carousel-next]", t.nextCategory);
    setText(".hero .eyebrow", t.heroEyebrow);
    setText(".hero h1", t.heroTitle);
    setText(".hero-text", t.heroText);
    setIconHtml(".hero-actions .button-primary", "shopping-bag", t.viewProducts);
    setIconHtml(".hero-actions .button-ghost", "ruler", t.planDrain);
    setHtml(".hero-proof span:nth-child(1)", "<strong>67+</strong>" + t.reviews);
    setHtml(".hero-proof span:nth-child(2)", "<strong>24 h</strong>" + t.reply);
    setHtml(".hero-proof span:nth-child(3)", "<strong>1-2</strong>" + t.days);
    setIconHtml(".button-small", "messages-square", t.advice);
    setLabel("[data-open-search]", t.search);
    setLabel("[data-cart]", t.cart);
    setServiceText();
    setSearchText();
    setText("[data-chat-title]", t.chatTitle);
    setText(".chat-header strong", t.chatTitle);
    setAttribute("[data-chat-input]", "placeholder", t.chatInput);
    setLabel("[data-chat-input]", t.chatInput);
    setText(".product-viewer-eyebrow", t.productView);
    setText(".product-viewer-close-text", t.close);
    setText(".product-viewer-product-link", t.openProduct);
    setText(".product-viewer-contact-link", t.askAdvice);
    setText("[data-video-eyebrow]", t.videoEyebrow);
    setText("[data-video-title]", t.videoTitle);
    setText("[data-video-text]", t.videoText);
    setText(".video-note-auto span", t.videoAuto);
    setText(".video-note-sound span", t.videoSoundHint);
    setText("[data-video-volume-label]", t.videoVolume);
    setLabel("[data-video-volume]", t.videoVolume);
    applyPageCopy(language);

    document.querySelectorAll(".button-card").forEach(function (button) {
      const icon = button.querySelector("svg, i");
      button.textContent = "";
      if (icon) {
        button.appendChild(icon);
      } else {
        button.insertAdjacentHTML("afterbegin", '<i data-lucide="plus" aria-hidden="true"></i>');
      }
      button.append(" " + t.add);
    });

    const chatMessages = document.querySelector("[data-chat-messages]");
    const chatSuggestions = document.querySelector("[data-chat-suggestions]");
    if (chatMessages && chatMessages.children.length === 1) {
      chatMessages.innerHTML = "";
      appendChatMessage(chatMessages, "assistant", t.chatIntro);
    }
    if (chatSuggestions) {
      renderChatSuggestions(chatSuggestions, t.chatPrompts, function (prompt) {
        const input = document.querySelector("[data-chat-input]");
        if (input) {
          input.value = prompt;
        }
        const form = document.querySelector("[data-chat-form]");
        if (form) {
          form.requestSubmit();
        }
      });
    }

    renderIcons();
    if (typeof refreshVideoUi === "function") {
      refreshVideoUi();
    }

    function setServiceText() {
      document.querySelectorAll("[data-service-shipping]").forEach(function (item) {
        item.innerHTML = '<i data-lucide="truck" aria-hidden="true"></i>' + t.shipping;
      });
      document.querySelectorAll("[data-service-payment]").forEach(function (item) {
        item.innerHTML = '<i data-lucide="shield-check" aria-hidden="true"></i>' + t.payment;
      });
    }

    function setSearchText() {
      const searchLabel = document.querySelector(".search-panel label");
      const searchInput = document.querySelector("[data-search-input]");
      if (searchLabel && searchInput) {
        searchLabel.firstChild.textContent = t.searchLabel;
        searchInput.placeholder = t.searchPlaceholder;
      }
      setAttribute("[data-inline-search-input]", "placeholder", t.navSearchPlaceholder || t.searchPlaceholder);
      setLabel("[data-inline-search-input]", t.searchLabel);
    }
  }

  function getTranslation() {
    return translations[currentLanguage] || translations.de;
  }

  function applyPageCopy(language) {
    const page = document.body.dataset.page;
    const copy = getPageCopy(language, page);
    if (!copy) {
      return;
    }

    setText(".subhero .eyebrow", copy.eyebrow);
    setText(".subhero h1", copy.title);
    setText(".subhero-grid > div:first-child > p:not(.eyebrow)", copy.text);

    if (copy.cardLabel) {
      setText(".subhero-card span", copy.cardLabel);
      setText(".subhero-card strong", copy.cardTitle);
      setText(".subhero-card p", copy.cardText);
    }

    if (page === "kontakt") {
      setIconHtml('.contact-form button[type="submit"]', "send", copy.submit || "Anfrage vorbereiten");
      setText(".faq-layout .eyebrow", copy.faq || "FAQ");
      setText(".faq-layout h2", copy.faqTitle || "Häufige Fragen");
    }
  }

  function getPageCopy(language, page) {
    const dictionary = {
      de: {
        sortiment: {
          eyebrow: "Sortiment",
          title: "Produkte für moderne Duschen und präzise Fliesenarbeit.",
          text: "Von Edelstahl-Duschrinnen bis zu Diamantbohrkronen: die Kategorien sind für Profis, Händler und Heimwerker klar getrennt.",
          cardLabel: "Beliebt",
          cardTitle: "Duschrinne C16 befliesbar",
          cardText: "Minimalistisches Fliesenbild, mehrere Längen, schneller Versand."
        },
        ratgeber: {
          eyebrow: "Ratgeber",
          title: "Die passende Duschrinne beginnt mit dem richtigen Gefälle.",
          text: "Eine moderne Dusche ist nicht nur Optik. Ablaufleistung, Einbauposition, Abdichtung und Reinigung müssen zusammenpassen.",
          cardLabel: "Merksatz",
          cardTitle: "Erst Bodenaufbau prüfen, dann Rinne auswählen.",
          cardText: "So vermeiden Sie zu flache Abläufe, stehendes Wasser und spätere Nacharbeit."
        },
        kontakt: {
          eyebrow: "Kontakt",
          title: "Beratung für Dusche, Ablauf und Fliesenwerkzeug.",
          text: "Kurze Wege, klare Empfehlung, schnelle Antwort. Beschreiben Sie Ihr Projekt und erhalten Sie eine passende Produktauswahl.",
          cardLabel: "Antwortzeit",
          cardTitle: "Innerhalb von 24 Stunden",
          cardText: "Bei Produktfragen, Einbauplanung oder Lieferinformationen.",
          submit: "Anfrage vorbereiten",
          faq: "FAQ",
          faqTitle: "Häufige Fragen"
        }
      },
      en: {
        sortiment: {
          eyebrow: "Products",
          title: "Products for modern showers and precise tile work.",
          text: "From stainless steel shower channels to diamond drill bits, the categories are clear for professionals, dealers and renovators.",
          cardLabel: "Popular",
          cardTitle: "Tileable C16 shower drain",
          cardText: "Minimal tile look, multiple lengths, fast delivery."
        },
        ratgeber: {
          eyebrow: "Guide",
          title: "The right shower drain starts with the correct slope.",
          text: "A modern shower is not just about looks. Drain capacity, placement, sealing and cleaning need to work together.",
          cardLabel: "Rule of thumb",
          cardTitle: "Check floor build-up first, then choose the drain.",
          cardText: "This helps avoid shallow drains, standing water and later rework."
        },
        kontakt: {
          eyebrow: "Contact",
          title: "Advice for showers, drains and tile tools.",
          text: "Short paths, clear recommendations and fast replies. Describe your project and get a suitable product direction.",
          cardLabel: "Reply time",
          cardTitle: "Within 24 hours",
          cardText: "For product questions, installation planning or delivery details.",
          submit: "Prepare inquiry",
          faq: "FAQ",
          faqTitle: "Common questions"
        }
      },
      fr: {
        sortiment: { eyebrow: "Produits", title: "Produits pour douches modernes et carrelage précis.", text: "Des caniveaux inox aux couronnes diamantées, les catégories sont claires pour chaque projet.", cardLabel: "Populaire", cardTitle: "Caniveau C16 à carreler", cardText: "Aspect minimal, plusieurs longueurs, livraison rapide." },
        ratgeber: { eyebrow: "Guide", title: "Le bon caniveau commence par la bonne pente.", text: "Une douche moderne dépend de l’évacuation, de la position, de l’étanchéité et du nettoyage.", cardLabel: "Conseil", cardTitle: "Vérifier le sol avant de choisir.", cardText: "Cela évite l’eau stagnante et les corrections ultérieures." },
        kontakt: { eyebrow: "Contact", title: "Conseil pour douche, évacuation et outils de carrelage.", text: "Décrivez votre projet et recevez une recommandation claire.", cardLabel: "Réponse", cardTitle: "Sous 24 heures", cardText: "Pour produits, installation ou livraison.", submit: "Préparer la demande", faq: "FAQ", faqTitle: "Questions fréquentes" }
      },
      tr: {
        sortiment: { eyebrow: "Ürünler", title: "Modern duşlar ve hassas fayans işleri için ürünler.", text: "Paslanmaz duş kanallarından elmas matkap uçlarına kadar kategoriler net şekilde ayrıldı.", cardLabel: "Popüler", cardTitle: "Fayans kaplamalı C16 duş gideri", cardText: "Minimal görünüm, farklı uzunluklar, hızlı teslimat." },
        ratgeber: { eyebrow: "Rehber", title: "Doğru duş gideri doğru eğimle başlar.", text: "Modern duşta drenaj, konum, yalıtım ve temizlik birlikte düşünülmelidir.", cardLabel: "İpucu", cardTitle: "Önce zemin yapısını kontrol edin.", cardText: "Böylece su birikmesi ve sonradan düzeltme azalır." },
        kontakt: { eyebrow: "İletişim", title: "Duş, gider ve fayans aletleri için danışmanlık.", text: "Projenizi anlatın, uygun ürün yönünü hızlıca alın.", cardLabel: "Yanıt", cardTitle: "24 saat içinde", cardText: "Ürün, montaj veya teslimat soruları için.", submit: "Talep hazırla", faq: "SSS", faqTitle: "Sık sorulan sorular" }
      },
      ru: {
        sortiment: { eyebrow: "Товары", title: "Товары для современных душевых и точной плиточной работы.", text: "От стальных душевых каналов до алмазных коронок: категории разделены понятно.", cardLabel: "Популярно", cardTitle: "Душевой трап C16 под плитку", cardText: "Минималистичный вид, разные длины, быстрая доставка." },
        ratgeber: { eyebrow: "Гид", title: "Правильный трап начинается с правильного уклона.", text: "В современной душевой важны слив, расположение, гидроизоляция и очистка.", cardLabel: "Совет", cardTitle: "Сначала проверьте конструкцию пола.", cardText: "Так легче избежать стоячей воды и переделок." },
        kontakt: { eyebrow: "Контакт", title: "Консультация по душевым, сливам и плиточному инструменту.", text: "Опишите проект и получите понятную рекомендацию.", cardLabel: "Ответ", cardTitle: "В течение 24 часов", cardText: "По товарам, монтажу или доставке.", submit: "Подготовить запрос", faq: "FAQ", faqTitle: "Частые вопросы" }
      },
      es: {
        sortiment: { eyebrow: "Productos", title: "Productos para duchas modernas y trabajos de azulejo precisos.", text: "De canaletas inoxidables a brocas diamantadas, las categorías están claras para cada proyecto.", cardLabel: "Popular", cardTitle: "Canaleta C16 alicatable", cardText: "Aspecto minimalista, varias medidas, entrega rápida." },
        ratgeber: { eyebrow: "Guía", title: "La canaleta correcta empieza con la pendiente correcta.", text: "Una ducha moderna necesita buen desagüe, posición, sellado y limpieza.", cardLabel: "Consejo", cardTitle: "Primero revise la base del suelo.", cardText: "Así evita agua estancada y correcciones posteriores." },
        kontakt: { eyebrow: "Contacto", title: "Asesoría para ducha, desagüe y herramientas de azulejo.", text: "Describa su proyecto y reciba una recomendación clara.", cardLabel: "Respuesta", cardTitle: "En 24 horas", cardText: "Para productos, instalación o entrega.", submit: "Preparar consulta", faq: "FAQ", faqTitle: "Preguntas frecuentes" }
      }
    };

    return (dictionary[language] || dictionary.de)[page];
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.textContent = value;
    });
  }

  function setHtml(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.innerHTML = value;
    });
  }

  function setAttribute(selector, attribute, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.setAttribute(attribute, value);
    });
  }

  function setLabel(selector, value) {
    setAttribute(selector, "aria-label", value);
  }

  function setIconHtml(selector, icon, label) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.innerHTML = '<i data-lucide="' + icon + '" aria-hidden="true"></i>' + label;
    });
  }

  function setupMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const navLinks = document.querySelectorAll("[data-nav] a");
    const navShell = document.querySelector(".nav-shell");
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    if (!toggle) {
      return;
    }

    const closeMenu = function () {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      const isOpen = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Navigation schliessen" : "Navigation oeffnen");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        dropdowns.forEach(function (dropdown) {
          dropdown.removeAttribute("open");
        });
        closeMenu();
      });
    });

    dropdowns.forEach(function (dropdown) {
      const summary = dropdown.querySelector("summary");
      if (!summary) {
        return;
      }

      summary.addEventListener("click", function () {
        dropdowns.forEach(function (other) {
          if (other !== dropdown) {
            other.removeAttribute("open");
          }
        });
      });

      dropdown.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          dropdown.removeAttribute("open");
        });
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-dropdown")) {
        dropdowns.forEach(function (dropdown) {
          dropdown.removeAttribute("open");
        });
      }

      if (window.innerWidth <= 860 && document.body.classList.contains("menu-open") && navShell && !event.target.closest(".nav-shell")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) {
        closeMenu();
      }
    });
  }

  function setupHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) {
      return;
    }

    const update = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupReveal() {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    elements.forEach(function (element, index) {
      const parent = element.parentElement;
      let localIndex = index % 4;

      if (parent) {
        const siblings = Array.from(parent.children).filter(function (child) {
          return child.hasAttribute("data-reveal");
        });
        const siblingIndex = siblings.indexOf(element);
        if (siblingIndex > -1) {
          localIndex = siblingIndex;
        }
      }

      element.style.transitionDelay = localIndex ? localIndex * 85 + "ms" : "0ms";
      observer.observe(element);
    });
  }

  function setupMotionEnhancements() {
    const parallaxElements = Array.from(document.querySelectorAll("[data-parallax]"));
    const footer = document.querySelector(".site-footer");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    if (footer) {
      footer.addEventListener(
        "pointermove",
        function (event) {
          const rect = footer.getBoundingClientRect();
          const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
          const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
          document.documentElement.style.setProperty("--footer-x", x.toFixed(1) + "%");
          document.documentElement.style.setProperty("--footer-y", y.toFixed(1) + "%");
        },
        { passive: true }
      );
    }

    if (!parallaxElements.length || reducedMotion) {
      syncAnchorTarget();
      return;
    }

    const requestTick = function () {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(function () {
        const viewportHeight = window.innerHeight || 1;

        parallaxElements.forEach(function (element) {
          const speed = Number(element.dataset.parallax || 0.08);
          const rect = element.getBoundingClientRect();
          const midpoint = rect.top + rect.height / 2;
          const delta = (midpoint - viewportHeight / 2) / viewportHeight;
          element.style.setProperty("--parallax-y", delta * speed * -180 + "px");
        });

        ticking = false;
      });
    };

    requestTick();
    syncAnchorTarget();

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    function syncAnchorTarget() {
      if (!window.location.hash) {
        return;
      }

      window.setTimeout(function () {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "start",
            inline: "start"
          });
        }
      }, 160);
    }
  }

  function setupCarousels() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
      const track = carousel.querySelector("[data-carousel-track]");
      const prev = carousel.querySelector("[data-carousel-prev]");
      const next = carousel.querySelector("[data-carousel-next]");

      if (!track) {
        return;
      }

      const updateState = function () {
        if (prev) {
          prev.disabled = track.scrollLeft <= 4;
        }
        if (next) {
          next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        }
      };

      const getStep = function () {
        const card = track.firstElementChild;
        if (!card) {
          return track.clientWidth * 0.85;
        }
        const styles = window.getComputedStyle(track);
        const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
        return card.getBoundingClientRect().width + gap;
      };

      if (prev) {
        prev.addEventListener("click", function () {
          track.scrollBy({ left: -getStep(), behavior: reducedMotion ? "auto" : "smooth" });
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          track.scrollBy({ left: getStep(), behavior: reducedMotion ? "auto" : "smooth" });
        });
      }

      track.addEventListener("scroll", updateState, { passive: true });
      window.addEventListener("resize", updateState);
      updateState();
    });
  }

  function setupVideoSection() {
    const section = document.querySelector("[data-video-section]");
    if (!section) {
      return;
    }

    const playerTarget = section.querySelector("[data-video-player]");
    const playButton = section.querySelector("[data-video-toggle]");
    const soundButton = section.querySelector("[data-video-sound]");
    const volumeInput = section.querySelector("[data-video-volume]");
    const openLink = section.querySelector("[data-video-open]");
    const VIDEO_ID = "rTDLiUNKCL0";
    const START_TIME = 18;
    const state = {
      player: null,
      ready: false,
      inView: false,
      isPlaying: false,
      isMuted: true,
      userPaused: false,
      volume: 0,
      savedVolume: 60
    };

    refreshVideoUi = updateVideoUi;
    updateVideoUi();

    if (playButton) {
      playButton.addEventListener("click", function () {
        if (!state.ready || !state.player) {
          return;
        }

        if (state.isPlaying) {
          state.userPaused = true;
          state.player.pauseVideo();
        } else {
          state.userPaused = false;
          state.player.playVideo();
        }
      });
    }

    if (soundButton) {
      soundButton.addEventListener("click", function () {
        if (!state.ready || !state.player) {
          return;
        }

        if (state.isMuted || state.volume === 0) {
          const nextVolume = state.savedVolume || 60;
          state.volume = nextVolume;
          state.isMuted = false;
          state.player.unMute();
          state.player.setVolume(nextVolume);
          if (volumeInput) {
            volumeInput.value = String(nextVolume);
          }
        } else {
          state.savedVolume = state.volume || state.savedVolume;
          state.volume = 0;
          state.isMuted = true;
          state.player.mute();
          state.player.setVolume(0);
          if (volumeInput) {
            volumeInput.value = "0";
          }
        }

        updateVideoUi();
      });
    }

    if (volumeInput) {
      volumeInput.addEventListener("input", function () {
        if (!state.ready || !state.player) {
          return;
        }

        const nextVolume = Number(volumeInput.value);
        state.volume = nextVolume;

        if (nextVolume <= 0) {
          state.isMuted = true;
          state.player.mute();
          state.player.setVolume(0);
        } else {
          state.savedVolume = nextVolume;
          state.isMuted = false;
          state.player.unMute();
          state.player.setVolume(nextVolume);
        }

        updateVideoUi();
      });
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            state.inView = entry.isIntersecting && entry.intersectionRatio >= 0.4;
            section.classList.toggle("is-active", state.inView);
            syncVideoPlayback();
          });
        },
        {
          threshold: [0.2, 0.4, 0.65],
          rootMargin: "0px 0px -6% 0px"
        }
      );

      observer.observe(section);
    } else {
      state.inView = true;
    }

    loadYouTubeApi()
      .then(function (YT) {
        state.player = new YT.Player(playerTarget, {
          videoId: VIDEO_ID,
          playerVars: {
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            start: START_TIME,
            playlist: VIDEO_ID
          },
          events: {
            onReady: function () {
              state.ready = true;
              state.isMuted = true;
              state.volume = 0;
              state.player.mute();
              state.player.setVolume(0);
              syncVideoPlayback();
              updateVideoUi();
            },
            onStateChange: function (event) {
              if (event.data === YT.PlayerState.PLAYING) {
                state.isPlaying = true;
              } else if (event.data === YT.PlayerState.PAUSED) {
                state.isPlaying = false;
              } else if (event.data === YT.PlayerState.ENDED) {
                state.player.seekTo(START_TIME, true);
                state.player.playVideo();
                return;
              }

              updateVideoUi();
            }
          }
        });
      })
      .catch(function () {
        section.classList.add("is-fallback");
        if (playButton) {
          playButton.disabled = true;
        }
        if (soundButton) {
          soundButton.disabled = true;
        }
        if (volumeInput) {
          volumeInput.disabled = true;
        }
      });

    function syncVideoPlayback() {
      if (!state.ready || !state.player) {
        return;
      }

      if (state.inView && !state.userPaused) {
        state.player.playVideo();
      } else if (!state.inView && state.isPlaying) {
        state.player.pauseVideo();
      }
    }

    function updateVideoUi() {
      const t = getTranslation();

      if (playButton) {
        playButton.innerHTML =
          '<i data-lucide="' + (state.isPlaying ? "pause" : "play") + '" aria-hidden="true"></i><span>' +
          (state.isPlaying ? t.videoPause : t.videoPlay) +
          "</span>";
        playButton.setAttribute("aria-label", state.isPlaying ? t.videoPause : t.videoPlay);
      }

      if (soundButton) {
        const soundEnabled = !state.isMuted && state.volume > 0;
        soundButton.innerHTML =
          '<i data-lucide="' + (soundEnabled ? "volume-2" : "volume-x") + '" aria-hidden="true"></i><span>' +
          (soundEnabled ? t.videoSoundOff : t.videoSoundOn) +
          "</span>";
        soundButton.setAttribute("aria-label", soundEnabled ? t.videoSoundOff : t.videoSoundOn);
      }

      if (openLink) {
        openLink.innerHTML = '<i data-lucide="arrow-up-right" aria-hidden="true"></i><span>' + t.videoOpen + "</span>";
      }

      renderIcons();
    }
  }

  function setupFilters() {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-category]");

    if (!filterButtons.length || !cards.length) {
      return;
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filter = button.dataset.filter;

        filterButtons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });

        cards.forEach(function (card) {
          const shouldShow = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("is-hidden", !shouldShow);
        });
      });
    });
  }

  function setupCart() {
    const countTargets = document.querySelectorAll("[data-cart-count]");
    const addButtons = document.querySelectorAll("[data-add-product]");
    const cartButtons = document.querySelectorAll("[data-cart]");

    cartCount = getCartQuantity(readCart());
    updateCartCount(countTargets);

    document.addEventListener("duschrinnen-cart-updated", function (event) {
      const nextCart = event.detail && Array.isArray(event.detail.cart) ? event.detail.cart : readCart();
      cartCount = getCartQuantity(nextCart);
      updateCartCount(countTargets);
    });

    addButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const product = addProductToCart(button.dataset.addProduct);
        if (!product) {
          showToast("Produkt konnte nicht in den Warenkorb gelegt werden.");
          return;
        }

        showToast(product.title + " wurde in den Warenkorb gelegt.");
      });
    });

    cartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        window.location.href = "checkout.html";
      });
    });
  }

  function setupCheckoutPage() {
    const page = document.querySelector("[data-checkout-page]");
    if (!page) {
      return;
    }

    const list = page.querySelector("[data-checkout-list]");
    const empty = page.querySelector("[data-checkout-empty]");
    const count = page.querySelector("[data-checkout-count]");
    const subtotal = page.querySelector("[data-checkout-subtotal]");
    const shipping = page.querySelector("[data-checkout-shipping]");
    const total = page.querySelector("[data-checkout-total]");
    const shippingNote = page.querySelector("[data-checkout-shipping-note]");
    const form = page.querySelector("[data-checkout-form]");
    const formNote = page.querySelector("[data-checkout-form-note]");
    const continueButton = page.querySelector("[data-checkout-submit]");

    if (!list || !empty || !count || !subtotal || !shipping || !total || !shippingNote) {
      return;
    }

    page.addEventListener("click", function (event) {
      const decrease = event.target.closest("[data-cart-decrease]");
      const increase = event.target.closest("[data-cart-increase]");
      const remove = event.target.closest("[data-cart-remove]");

      if (decrease) {
        changeCartQuantity(decrease.dataset.cartDecrease, -1);
      }

      if (increase) {
        changeCartQuantity(increase.dataset.cartIncrease, 1);
      }

      if (remove) {
        removeFromCart(remove.dataset.cartRemove);
      }
    });

    document.addEventListener("duschrinnen-cart-updated", function (event) {
      const nextCart = event.detail && Array.isArray(event.detail.cart) ? event.detail.cart : readCart();
      renderCheckout(nextCart);
    });

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const cart = readCart();
        if (!cart.length) {
          showToast("Ihr Warenkorb ist noch leer.");
          return;
        }

        const data = new FormData(form);
        const cartLines = cart.map(function (item) {
          const lineTotal = (item.priceValue || 0) * item.quantity;
          return "- " + item.title + " x " + item.quantity + " (" + formatEuro(lineTotal) + ")";
        });
        const subtotalValue = getCartSubtotal(cart);
        const shippingValue = getShippingCost(subtotalValue);
        const totalValue = subtotalValue + shippingValue;
        const body = [
          "Hallo Duschrinnen Profi,",
          "",
          "ich moechte meine Bestellung vorbereiten:",
          "",
          "Name: " + (data.get("name") || ""),
          "E-Mail: " + (data.get("email") || ""),
          "Telefon: " + (data.get("phone") || ""),
          "PLZ / Ort: " + (data.get("postal") || ""),
          "Zahlungsart: " + (data.get("payment") || ""),
          "",
          "Warenkorb:",
          cartLines.join("\n"),
          "",
          "Zwischensumme: " + formatEuro(subtotalValue),
          "Versand: " + formatEuro(shippingValue),
          "Gesamtsumme: " + formatEuro(totalValue),
          "",
          "Notizen:",
          String(data.get("notes") || "-")
        ].join("\n");

        window.location.href =
          "mailto:info@duschrinnen-profi.de?subject=" +
          encodeURIComponent("Checkout Anfrage - Duschrinnen Profi") +
          "&body=" +
          encodeURIComponent(body);

        if (formNote) {
          formNote.textContent = "Ihre E-Mail-App wurde mit der Bestellanfrage vorbereitet.";
        }
        showToast("Bestellanfrage vorbereitet. Bitte pruefen Sie Ihre E-Mail-App.");
      });
    }

    renderCheckout(readCart());

    function renderCheckout(cart) {
      const totalItems = getCartQuantity(cart);
      const subtotalValue = getCartSubtotal(cart);
      const shippingValue = getShippingCost(subtotalValue);
      const totalValue = subtotalValue + shippingValue;

      count.textContent = String(totalItems);
      subtotal.textContent = formatEuro(subtotalValue);
      shipping.textContent = subtotalValue <= 0 ? "-" : shippingValue === 0 ? "Kostenlos" : formatEuro(shippingValue);
      total.textContent = formatEuro(totalValue);
      shippingNote.textContent =
        subtotalValue <= 0
          ? "Legen Sie Produkte in den Warenkorb, um Lieferkosten und Gesamtsumme zu sehen."
          : shippingValue === 0
            ? "Versandfrei ab 149 EUR Warenwert."
            : "DHL Versand mit 1-2 Werktagen bei verfuegbarer Ware.";

      if (continueButton) {
        continueButton.disabled = !cart.length;
      }

      if (!cart.length) {
        list.innerHTML = "";
        empty.hidden = false;
        return;
      }

      empty.hidden = true;
      list.innerHTML = cart
        .map(function (item) {
          const quantity = item.quantity || 1;
          const unitPrice = item.priceValue || 0;
          const linePrice = unitPrice * quantity;

          return (
            '<article class="checkout-item">' +
            '<a class="checkout-item-media" href="' +
            item.url +
            '">' +
            '<img src="' +
            item.image +
            '" alt="' +
            item.title +
            '" />' +
            "</a>" +
            '<div class="checkout-item-copy">' +
            '<div class="checkout-item-top">' +
            '<div>' +
            '<p class="checkout-item-tag">' +
            item.category +
            "</p>" +
            "<h3>" +
            item.title +
            "</h3>" +
            "</div>" +
            '<button class="icon-button checkout-remove" type="button" data-cart-remove="' +
            item.title +
            '" aria-label="Produkt entfernen">' +
            '<i data-lucide="trash-2" aria-hidden="true"></i>' +
            "</button>" +
            "</div>" +
            '<div class="checkout-item-meta">' +
            '<div class="checkout-quantity" aria-label="Menge">' +
            '<button class="qty-button" type="button" data-cart-decrease="' +
            item.title +
            '" aria-label="Menge verringern">' +
            '<i data-lucide="minus" aria-hidden="true"></i>' +
            "</button>" +
            '<span class="qty-value">' +
            quantity +
            "</span>" +
            '<button class="qty-button" type="button" data-cart-increase="' +
            item.title +
            '" aria-label="Menge erhoehen">' +
            '<i data-lucide="plus" aria-hidden="true"></i>' +
            "</button>" +
            "</div>" +
            '<div class="checkout-price-block">' +
            '<span class="checkout-unit-price">' +
            formatEuro(unitPrice) +
            " / Stk.</span>" +
            '<strong class="checkout-line-price">' +
            formatEuro(linePrice) +
            "</strong>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</article>"
          );
        })
        .join("");

      renderIcons();
    }
  }

  function updateCartCount(targets) {
    targets.forEach(function (target) {
      target.textContent = String(cartCount);
    });
  }

  function addProductToCart(title) {
    const product = getProductByTitle(title);
    if (!product) {
      return null;
    }

    const cart = readCart();
    const existing = cart.find(function (item) {
      return item.title === product.title;
    });

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        title: product.title,
        category: product.category,
        priceValue: product.priceValue,
        image: product.image,
        url: product.url,
        quantity: 1
      });
    }

    writeCart(cart);
    emitCartUpdated(cart);
    return product;
  }

  function changeCartQuantity(title, delta) {
    const cart = readCart();
    const item = cart.find(function (entry) {
      return entry.title === title;
    });

    if (!item) {
      return;
    }

    item.quantity += delta;

    if (item.quantity <= 0) {
      writeCart(
        cart.filter(function (entry) {
          return entry.title !== title;
        })
      );
      emitCartUpdated(readCart());
      return;
    }

    writeCart(cart);
    emitCartUpdated(cart);
  }

  function removeFromCart(title) {
    const nextCart = readCart().filter(function (item) {
      return item.title !== title;
    });
    writeCart(nextCart);
    emitCartUpdated(nextCart);
    showToast("Produkt aus dem Warenkorb entfernt.");
  }

  function emitCartUpdated(cart) {
    cartCount = getCartQuantity(cart);
    document.dispatchEvent(
      new CustomEvent("duschrinnen-cart-updated", {
        detail: { cart: cart }
      })
    );
  }

  function readCart() {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      const parsed = JSON.parse(raw || "[]");
      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed
        .map(function (item) {
          const product = getProductByTitle(item.title) || item;
          return {
            title: product.title,
            category: product.category,
            priceValue: Number(product.priceValue || 0),
            image: product.image,
            url: product.url,
            quantity: Math.max(1, Number(item.quantity || 1))
          };
        })
        .filter(function (item) {
          return item.title && item.url;
        });
    } catch (error) {
      return [];
    }
  }

  function writeCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {}
  }

  function getCartQuantity(cart) {
    return cart.reduce(function (sum, item) {
      return sum + Number(item.quantity || 0);
    }, 0);
  }

  function getCartSubtotal(cart) {
    return cart.reduce(function (sum, item) {
      return sum + Number(item.priceValue || 0) * Number(item.quantity || 0);
    }, 0);
  }

  function getShippingCost(subtotal) {
    if (subtotal <= 0) {
      return 0;
    }
    return subtotal >= 149 ? 0 : 7.9;
  }

  function getProductByTitle(title) {
    return products.find(function (product) {
      return product.title === title;
    });
  }

  function setupSearch() {
    const openButtons = document.querySelectorAll("[data-open-search]");
    const closeButton = document.querySelector("[data-close-search]");
    const modal = document.querySelector("[data-search-modal]");
    const input = document.querySelector("[data-search-input]");
    const results = document.querySelector("[data-search-results]");
    const inlineSearches = document.querySelectorAll("[data-inline-search]");

    function getMatches(query) {
      const normalized = normalize(query);
      return products
        .concat(siteLinks)
        .filter(function (item) {
          return !normalized || normalize(item.title).includes(normalized) || normalize(item.category).includes(normalized);
        })
        .filter(function (item, index, list) {
          return list.findIndex(function (entry) {
            return entry.title === item.title && entry.url === item.url;
          }) === index;
        });
    }

    function renderSearchResults(container, query) {
      const matches = getMatches(query);

      container.innerHTML = "";

      if (!matches.length) {
        const empty = document.createElement("p");
        empty.textContent = "Keine passenden Produkte gefunden.";
        container.appendChild(empty);
        return matches;
      }

      matches.slice(0, 6).forEach(function (product) {
        const link = document.createElement("a");
        const title = document.createElement("strong");
        const detail = document.createElement("span");

        link.href = product.url;
        title.textContent = product.title;
        detail.textContent = product.category + (product.price ? " - " + product.price : "");
        link.append(title, detail);
        container.appendChild(link);
      });

      return matches;
    }

    inlineSearches.forEach(function (search) {
      const inlineInput = search.querySelector("[data-inline-search-input]");
      const inlineResults = search.querySelector("[data-inline-search-results]");
      if (!inlineInput || !inlineResults) {
        return;
      }

      const openInline = function () {
        search.classList.add("is-open");
        renderSearchResults(inlineResults, inlineInput.value);
      };

      const closeInline = function () {
        search.classList.remove("is-open");
      };

      search.addEventListener("submit", function (event) {
        const matches = getMatches(inlineInput.value);
        if (!matches.length) {
          return;
        }
        event.preventDefault();
        window.location.href = matches[0].url;
        closeInline();
      });

      inlineInput.addEventListener("focus", openInline);
      inlineInput.addEventListener("input", function () {
        openInline();
      });
      inlineInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeInline();
          inlineInput.blur();
        }
      });

      inlineResults.addEventListener("click", function () {
        closeInline();
      });

      document.addEventListener("click", function (event) {
        if (!search.contains(event.target)) {
          closeInline();
        }
      });
    });

    if (!modal || !input || !results) {
      return;
    }

    const open = function () {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      window.setTimeout(function () {
        input.focus();
      }, 40);
      renderSearchResults(results, "");
    };

    const close = function () {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      input.value = "";
    };

    openButtons.forEach(function (button) {
      button.addEventListener("click", open);
    });

    if (closeButton) {
      closeButton.addEventListener("click", close);
    }

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        close();
      }
    });

    input.addEventListener("input", function () {
      renderSearchResults(results, input.value);
    });
  }

  function setupConfigurator() {
    const form = document.querySelector("[data-configurator]");
    if (!form) {
      return;
    }

    const title = form.querySelector("[data-config-title]");
    const copy = form.querySelector("[data-config-copy]");
    const price = form.querySelector("[data-config-price]");
    const fields = form.querySelectorAll("select");

    const update = function () {
      const formData = new FormData(form);
      const type = formData.get("type");
      const length = formData.get("length");
      const project = formData.get("project");
      const lengthSelect = form.querySelector('[name="length"]');
      const selectedLength = lengthSelect.options[lengthSelect.selectedIndex];
      const basePrice = Number(selectedLength.dataset.price || 79.9);
      const multiplier = type === "360 Grad Duschrinne" ? 1.18 : type === "Befliesbare Duschrinne" ? 1.08 : 1;
      const estimated = basePrice * multiplier;

      title.textContent = type + ", " + length;
      copy.textContent = "Passend fuer " + String(project).toLowerCase() + " mit " + describeType(type) + ".";
      price.textContent = "ab " + formatEuro(estimated);
    };

    fields.forEach(function (field) {
      field.addEventListener("change", update);
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    update();
  }

  function describeType(type) {
    if (type === "Befliesbare Duschrinne") {
      return "ruhigem Fliesenbild";
    }
    if (type === "360 Grad Duschrinne") {
      return "flexibler Einbauausrichtung";
    }
    return "sichtbarer Edelstahlkante";
  }

  function setupFaq() {
    document.querySelectorAll(".faq-item button").forEach(function (button) {
      button.addEventListener("click", function () {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function setupContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) {
      return;
    }

    const note = form.querySelector("[data-form-note]");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const name = formData.get("name");
      const topic = formData.get("topic");

      if (note) {
        note.textContent = "Danke, " + name + ". Ihre " + topic + "-Anfrage ist vorbereitet.";
      }

      showToast("Anfrage vorbereitet. Fuer echten Versand kann spaeter ein Formularservice angebunden werden.");
      form.reset();
    });
  }

  function setupAccountForms() {
    document.querySelectorAll("[data-account-form]").forEach(function (form) {
      const note = form.querySelector("[data-form-note]");
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const email = form.querySelector('input[type="email"]');
        const mode = form.dataset.accountForm || "account";

        if (note && email) {
          note.textContent = (mode === "register" ? "Konto vorbereitet für " : "Login vorbereitet für ") + email.value + ".";
        }

        showToast("Die Kontosektion ist als moderne Demo vorbereitet. Für echte Logins fehlt noch die Backend-Anbindung.");
        form.reset();
      });
    });
  }

  function setupChatAssistant() {
    if (document.querySelector("[data-chat]")) {
      return;
    }

    const chat = document.createElement("aside");
    chat.className = "chat-assistant";
    chat.dataset.chat = "";
    chat.innerHTML =
      '<button class="chat-launcher" type="button" data-chat-toggle aria-expanded="false" aria-label="KI Beratung öffnen">' +
      '<span class="chat-robot-stage" aria-hidden="true">' +
      '<span class="chat-robot">' +
      '<svg class="chat-robot-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
      '<g class="chat-robot-leg chat-robot-leg--left"><rect x="21" y="44" width="8" height="15" rx="4"></rect></g>' +
      '<g class="chat-robot-leg chat-robot-leg--right"><rect x="35" y="44" width="8" height="15" rx="4"></rect></g>' +
      '<g class="chat-robot-arm chat-robot-arm--left"><rect x="7" y="28" width="10" height="7" rx="3.5"></rect></g>' +
      '<g class="chat-robot-arm chat-robot-arm--right"><rect x="47" y="28" width="10" height="7" rx="3.5"></rect></g>' +
      '<g class="chat-robot-core">' +
      '<g class="chat-robot-antenna"><rect x="30" y="4" width="4" height="6" rx="2"></rect><circle cx="32" cy="4" r="3"></circle></g>' +
      '<rect class="chat-robot-head" x="18" y="8" width="28" height="18" rx="8"></rect>' +
      '<circle class="chat-robot-eye" cx="28" cy="17" r="2.5"></circle>' +
      '<circle class="chat-robot-eye" cx="36" cy="17" r="2.5"></circle>' +
      '<rect class="chat-robot-mouth" x="26" y="21" width="12" height="3" rx="1.5"></rect>' +
      '<rect class="chat-robot-torso" x="16" y="25" width="32" height="22" rx="10"></rect>' +
      '<rect class="chat-robot-panel" x="23" y="31" width="18" height="9" rx="4.5"></rect>' +
      '<circle class="chat-robot-dot" cx="28" cy="35.5" r="1.25"></circle>' +
      '<circle class="chat-robot-dot" cx="32" cy="35.5" r="1.25"></circle>' +
      '<circle class="chat-robot-dot" cx="36" cy="35.5" r="1.25"></circle>' +
      '</g>' +
      '</svg>' +
      "</span>" +
      "</span>" +
      '<span class="chat-launcher-label" data-chat-title>KI Beratung</span>' +
      "</button>" +
      '<section class="chat-window" data-chat-window aria-hidden="true" role="dialog" aria-label="KI Produktberatung">' +
      '<header class="chat-header">' +
      "<div><span>Duschrinnen Profi</span><strong>KI Beratung</strong></div>" +
      '<button class="icon-button" type="button" data-chat-close aria-label="KI Beratung schließen"><i data-lucide="x" aria-hidden="true"></i></button>' +
      "</header>" +
      '<div class="chat-messages" data-chat-messages></div>' +
      '<div class="chat-suggestions" data-chat-suggestions></div>' +
      '<form class="chat-form" data-chat-form>' +
      '<input type="text" data-chat-input autocomplete="off" placeholder="Bad, Maße oder Frage eingeben..." aria-label="Nachricht an die KI Beratung" />' +
      '<button class="icon-button" type="submit" aria-label="Nachricht senden"><i data-lucide="send" aria-hidden="true"></i></button>' +
      "</form>" +
      "</section>";

    document.body.appendChild(chat);
    renderIcons();

    const toggle = chat.querySelector("[data-chat-toggle]");
    const close = chat.querySelector("[data-chat-close]");
    const windowEl = chat.querySelector("[data-chat-window]");
    const messages = chat.querySelector("[data-chat-messages]");
    const suggestions = chat.querySelector("[data-chat-suggestions]");
    const form = chat.querySelector("[data-chat-form]");
    const input = chat.querySelector("[data-chat-input]");

    const prompts = getTranslation().chatPrompts;

    appendChatMessage(
      messages,
      "assistant",
      getTranslation().chatIntro
    );
    renderChatSuggestions(suggestions, prompts, handlePrompt);

    toggle.addEventListener("click", function () {
      const isOpen = chat.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      windowEl.setAttribute("aria-hidden", String(!isOpen));
      if (isOpen) {
        window.setTimeout(function () {
          input.focus();
        }, 80);
      }
    });

    close.addEventListener("click", function () {
      chat.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      windowEl.setAttribute("aria-hidden", "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && chat.classList.contains("is-open")) {
        chat.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        windowEl.setAttribute("aria-hidden", "true");
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const value = input.value.trim();
      if (!value) {
        return;
      }

      input.value = "";
      handlePrompt(value);
    });

    function handlePrompt(value) {
      appendChatMessage(messages, "user", value);
      const reply = getChatReply(value);

      window.setTimeout(function () {
        appendChatMessage(messages, "assistant", reply.text, reply.actions);
        renderChatSuggestions(suggestions, reply.suggestions || prompts, handlePrompt);
      }, 260);
    }
  }

  function setupProductViewer() {
    const productLinks = document.querySelectorAll(".product-card .product-media");
    if (!productLinks.length || document.querySelector("[data-product-viewer]")) {
      return;
    }

    const viewer = document.createElement("section");
    viewer.className = "product-viewer";
    viewer.dataset.productViewer = "";
    viewer.setAttribute("aria-hidden", "true");
    viewer.innerHTML =
      '<div class="product-viewer-backdrop" data-product-viewer-close></div>' +
      '<article class="product-viewer-panel" role="dialog" aria-modal="true" aria-label="3D Produktansicht">' +
      '<button class="icon-button product-viewer-close" type="button" data-product-viewer-close aria-label="Schließen"><i data-lucide="x" aria-hidden="true"></i><span class="product-viewer-close-text">Schließen</span></button>' +
      '<div class="product-viewer-gallery">' +
      '<div class="product-viewer-stage">' +
      '<div class="product-viewer-model" data-product-viewer-model><img data-product-viewer-image alt="" /></div>' +
      "</div>" +
      '<div class="product-viewer-thumbs" data-product-viewer-thumbs></div>' +
      "</div>" +
      '<div class="product-viewer-copy">' +
      '<p class="eyebrow product-viewer-eyebrow">3D Produktansicht</p>' +
      '<h2 data-product-viewer-title></h2>' +
      '<p data-product-viewer-description></p>' +
      '<strong data-product-viewer-price></strong>' +
      '<div class="product-viewer-actions">' +
      '<a class="button button-primary product-viewer-product-link" data-product-viewer-link href="#">Produkt öffnen</a>' +
      '<a class="button button-ghost dark product-viewer-contact-link" href="kontakt.html">Beratung anfragen</a>' +
      "</div>" +
      "</div>" +
      "</article>";

    document.body.appendChild(viewer);
    renderIcons();

    const model = viewer.querySelector("[data-product-viewer-model]");
    const image = viewer.querySelector("[data-product-viewer-image]");
    const title = viewer.querySelector("[data-product-viewer-title]");
    const description = viewer.querySelector("[data-product-viewer-description]");
    const price = viewer.querySelector("[data-product-viewer-price]");
    const productLink = viewer.querySelector("[data-product-viewer-link]");
    const thumbnails = viewer.querySelector("[data-product-viewer-thumbs]");

    productLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const card = link.closest(".product-card");
        if (!card) {
          return;
        }

        event.preventDefault();
        const imageNode = link.querySelector("img");
        const productTitle = card.querySelector("h2, h3");
        const productDescription = card.querySelector(".product-body p:not(.product-tag)");
        const productPrice = card.querySelector(".product-meta strong");

        const gallery = getProductGallery(link, imageNode);
        setProductViewerImage(gallery[0] || "", imageNode ? imageNode.alt : "");
        renderProductViewerThumbnails(gallery, imageNode ? imageNode.alt : "");
        title.textContent = productTitle ? productTitle.textContent : "Produkt";
        description.textContent = productDescription ? productDescription.textContent : "";
        price.textContent = productPrice ? productPrice.textContent : "";
        productLink.href = link.getAttribute("href") || "sortiment.html";
        openProductViewer();
      });
    });

    model.addEventListener("pointermove", function (event) {
      const rect = model.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      model.style.setProperty("--rotate-y", x * 16 + "deg");
      model.style.setProperty("--rotate-x", y * -12 + "deg");
      model.style.setProperty("--lift", "1");
    });

    model.addEventListener("pointerleave", function () {
      model.style.setProperty("--rotate-y", "0deg");
      model.style.setProperty("--rotate-x", "0deg");
      model.style.setProperty("--lift", "0");
    });

    viewer.querySelectorAll("[data-product-viewer-close]").forEach(function (button) {
      button.addEventListener("click", closeProductViewer);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && viewer.classList.contains("is-open")) {
        closeProductViewer();
      }
    });

    function openProductViewer() {
      viewer.classList.add("is-open");
      viewer.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      applyLanguage(currentLanguage);
    }

    function closeProductViewer() {
      viewer.classList.remove("is-open");
      viewer.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
    }

    function getProductGallery(link, imageNode) {
      const sources = [];
      if (imageNode && imageNode.getAttribute("src")) {
        sources.push(imageNode.getAttribute("src"));
      }
      const gallery = link.dataset.gallery || "";
      gallery
        .split("|")
        .map(function (source) {
          return source.trim();
        })
        .filter(Boolean)
        .forEach(function (source) {
          sources.push(source);
        });

      return sources.filter(function (source, index, list) {
        return list.indexOf(source) === index;
      });
    }

    function setProductViewerImage(source, alt) {
      image.src = source;
      image.alt = alt || "";
      model.style.setProperty("--rotate-y", "0deg");
      model.style.setProperty("--rotate-x", "0deg");
      model.style.setProperty("--lift", "0");
    }

    function renderProductViewerThumbnails(gallery, alt) {
      if (!thumbnails) {
        return;
      }

      thumbnails.innerHTML = "";

      gallery.forEach(function (source, index) {
        const button = document.createElement("button");
        button.className = "product-viewer-thumb" + (index === 0 ? " is-active" : "");
        button.type = "button";
        button.setAttribute("aria-label", "Produktbild " + (index + 1));
        button.innerHTML = '<img src="' + source + '" alt="" loading="lazy" />';
        button.addEventListener("click", function () {
          thumbnails.querySelectorAll(".product-viewer-thumb").forEach(function (thumb) {
            thumb.classList.remove("is-active");
          });
          button.classList.add("is-active");
          setProductViewerImage(source, alt);
        });
        thumbnails.appendChild(button);
      });
    }
  }

  function setupOriginalGallery() {
    const galleries = document.querySelectorAll("[data-original-gallery]");
    if (!galleries.length) {
      return;
    }

    fetch("assets/original/manifest.json")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Original image manifest could not be loaded.");
        }
        return response.json();
      })
      .then(function (records) {
        const seenImages = new Set();
        const masterImages = records.filter(function (record) {
          const isUsable =
            record &&
            record.local &&
            /\.(jpe?g|png|webp)$/i.test(record.local) &&
            !/-\d+x\d+\.(jpe?g|png|webp)$/i.test(record.file) &&
            !/logo|payment|klarna|favicon|icon/i.test(record.file);

          if (!isUsable || seenImages.has(record.local)) {
            return false;
          }

          seenImages.add(record.local);
          return true;
        });

        galleries.forEach(function (gallery) {
          const limit = gallery.dataset.galleryLimit === "all" ? masterImages.length : Number(gallery.dataset.galleryLimit || 24);
          const pageSize = Number(gallery.dataset.galleryPageSize || limit);
          const items = masterImages.slice(0, limit);
          let visibleCount = 0;
          const moreButton = document.createElement("button");

          gallery.innerHTML = "";
          moreButton.className = "button button-ghost dark original-gallery-more";
          moreButton.type = "button";
          moreButton.textContent = "Mehr Originalbilder laden";
          moreButton.addEventListener("click", renderNextBatch);
          gallery.after(moreButton);

          renderNextBatch();
          gallery.dataset.loaded = "true";

          function renderNextBatch() {
            const nextItems = items.slice(visibleCount, visibleCount + pageSize);
            const fragment = document.createDocumentFragment();

            nextItems.forEach(function (record) {
              const figure = document.createElement("figure");
              const image = document.createElement("img");
              const caption = document.createElement("figcaption");
              const title = getOriginalImageTitle(record.file);

              figure.className = "original-gallery-item";
              image.src = record.local;
              image.alt = title;
              image.loading = "lazy";
              image.decoding = "async";
              caption.textContent = title;

              figure.appendChild(image);
              figure.appendChild(caption);
              fragment.appendChild(figure);
            });

            gallery.appendChild(fragment);
            visibleCount += nextItems.length;

            if (visibleCount >= items.length) {
              moreButton.remove();
            } else {
              moreButton.textContent = "Mehr Originalbilder laden (" + visibleCount + "/" + items.length + ")";
            }
          }
        });
      })
      .catch(function () {
        galleries.forEach(function (gallery) {
          gallery.textContent = "Die Originalbilder konnten gerade nicht geladen werden.";
          gallery.dataset.loaded = "true";
        });
      });
  }

  function getOriginalImageTitle(file) {
    return file
      .replace(/\.(jpe?g|png|webp|svg)$/i, "")
      .replace(/^\d{4}-\d{2}-/, "")
      .replace(/[-_]+/g, " ")
      .replace(/\boptimized\b|\bscaled\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function loadYouTubeApi() {
    if (window.YT && window.YT.Player) {
      return Promise.resolve(window.YT);
    }

    if (youtubeApiPromise) {
      return youtubeApiPromise;
    }

    youtubeApiPromise = new Promise(function (resolve, reject) {
      const existingHandler = window.onYouTubeIframeAPIReady;
      const timeout = window.setTimeout(function () {
        reject(new Error("YouTube API timed out."));
      }, 12000);

      window.onYouTubeIframeAPIReady = function () {
        window.clearTimeout(timeout);
        if (typeof existingHandler === "function") {
          existingHandler();
        }
        resolve(window.YT);
      };

      const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (existingScript) {
        return;
      }

      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = function () {
        window.clearTimeout(timeout);
        reject(new Error("YouTube API could not be loaded."));
      };
      document.head.appendChild(script);
    });

    return youtubeApiPromise;
  }

  function appendChatMessage(container, role, text, actions) {
    const message = document.createElement("article");
    message.className = "chat-message chat-message-" + role;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";

    String(text)
      .split("\n")
      .filter(Boolean)
      .forEach(function (line) {
        const paragraph = document.createElement("p");
        paragraph.textContent = line;
        bubble.appendChild(paragraph);
      });

    if (actions && actions.length) {
      const actionList = document.createElement("div");
      actionList.className = "chat-actions";

      actions.forEach(function (action) {
        const link = document.createElement("a");
        link.href = action.href;
        link.textContent = action.label;
        if (action.external) {
          link.target = "_blank";
          link.rel = "noreferrer";
        }
        actionList.appendChild(link);
      });

      bubble.appendChild(actionList);
    }

    message.appendChild(bubble);
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
  }

  function renderChatSuggestions(container, prompts, handler) {
    container.innerHTML = "";

    prompts.forEach(function (prompt) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = prompt;
      button.addEventListener("click", function () {
        handler(prompt);
      });
      container.appendChild(button);
    });
  }

  function getChatReply(input) {
    const text = normalize(input);
    const dimensions = input.match(/(\d{2,3})\s*(?:x|×|mal|-)\s*(\d{2,3})/i);
    const length = input.match(/(\d{2,3})\s*cm/i);
    const sizeHint = dimensions
      ? "Bei ca. " + dimensions[1] + " x " + dimensions[2] + " cm wirkt eine 80-90 cm Duschrinne meist stimmig."
      : length
        ? "Für " + length[1] + " cm Breite sollte die Rinne etwas kürzer als die nutzbare Duschbreite gewählt werden."
        : "Wenn Sie mir die Duschbreite nennen, kann ich die Länge genauer eingrenzen.";

    if (containsAny(text, ["kontakt", "owner", "besitzer", "inhaber", "chef", "team", "mensch", "berater", "beratung", "angebot", "rechnung", "lieferung"])) {
      return {
        text:
          "Am besten leite ich Sie direkt zur persönlichen Beratung. Schreiben Sie kurz Maße, Einbauart und ob Neubau oder Renovierung geplant ist.\nFür dringende oder individuelle Fälle ist der Kontakt zum Team sinnvoller als eine automatische Empfehlung.",
        actions: [
          {
            label: "E-Mail vorbereiten",
            href:
              "mailto:info@duschrinnen-profi.de?subject=" +
              encodeURIComponent("Beratung zu Duschrinnen") +
              "&body=" +
              encodeURIComponent("Hallo Duschrinnen Profi Team,\n\nich brauche Beratung zu:\n" + input + "\n\nViele Grüße")
          },
          { label: "Kontaktseite öffnen", href: "kontakt.html" }
        ],
        suggestions: ["Produkt vorher eingrenzen", "Lieferung oder Rechnung", "Ersatzteil gesucht"]
      };
    }

    if (containsAny(text, ["ersatz", "siphon", "geruch", "verstopft", "ablauf riecht", "reinigung", "wartung"])) {
      return {
        text:
          "Das klingt nach Ersatzteil oder Wartung. Starten Sie mit dem Duschrinnen-Siphon, wenn es um Reinigung, Geruch oder Austausch geht. Prüfen Sie vorher die vorhandene Rinne und Anschlussmaße.\nWenn Sie unsicher sind, senden Sie ein Foto an das Team.",
        actions: [
          { label: "Siphon ansehen", href: "sortiment.html#ersatzteile" },
          { label: "Foto an Beratung senden", href: "kontakt.html" }
        ],
        suggestions: ["Ich brauche eine neue Duschrinne", "Besitzer kontaktieren", "Welche Maße sind wichtig?"]
      };
    }

    if (containsAny(text, ["bohr", "bohrkrone", "trennscheibe", "fliese schneiden", "feinsteinzeug", "werkzeug", "nivellier"])) {
      return {
        text:
          "Für Fliesenarbeiten passt das Werkzeug-Sortiment besser als eine Duschrinne. Für Feinsteinzeug oder harte Fliesen empfehle ich Diamant-Bohrkronen oder ein Set, wenn mehrere Durchmesser gebraucht werden.",
        actions: [
          { label: "Werkzeug ansehen", href: "sortiment.html#zubehoer" },
          { label: "Beratung fragen", href: "kontakt.html" }
        ],
        suggestions: ["Ich plane eine Dusche", "Welche Bohrkrone?", "Lieferung klären"]
      };
    }

    if (containsAny(text, ["minimal", "unsichtbar", "befliesbar", "fliesenbild", "luxus", "grossformat", "großformat", "nahtlos", "modern"])) {
      return {
        text:
          "Für eine sehr moderne, ruhige Optik empfehle ich die Duschrinne C16 befliesbar. Sie ist die beste Richtung, wenn die Fliese optisch durchlaufen soll und der Ablauf möglichst zurückhaltend wirken soll.\n" +
          sizeHint,
        actions: [
          { label: "C16 befliesbar ansehen", href: "sortiment.html#befliesbar" },
          { label: "Maße prüfen lassen", href: "kontakt.html" }
        ],
        suggestions: ["Ich will pflegeleicht reinigen", "Mein Bad ist klein", "Ich brauche eine 90 cm Rinne"]
      };
    }

    if (containsAny(text, ["pflegeleicht", "reinigen", "edelstahl", "sichtbar", "klassisch", "robust", "hotel", "haltbar", "preiswert"])) {
      return {
        text:
          "Dann ist die Duschrinne C15 Edelstahl die passende erste Empfehlung. Sie ist sichtbar, robust und leichter direkt zu kontrollieren oder zu reinigen als sehr versteckte Lösungen.\n" +
          sizeHint,
        actions: [
          { label: "C15 Edelstahl ansehen", href: "sortiment.html#edelstahl" },
          { label: "Beratung anfragen", href: "kontakt.html" }
        ],
        suggestions: ["Doch lieber unsichtbar", "Barrierefreies Bad", "Besitzer kontaktieren"]
      };
    }

    if (containsAny(text, ["klein", "kleines bad", "barriere", "barrierefrei", "senior", "rollstuhl", "renovierung", "bodeneben", "bodengleich", "walk in", "walk-in"])) {
      return {
        text:
          "Für kleine oder barrierearme Bäder ist eine bodengleiche Lösung mit Duschrinne sinnvoll. Wenn die Optik im Vordergrund steht: C16 befliesbar. Wenn Reinigung und Kontrolle wichtiger sind: C15 Edelstahl.\n" +
          sizeHint,
        actions: [
          { label: "Sortiment vergleichen", href: "sortiment.html" },
          { label: "Projekt prüfen lassen", href: "kontakt.html" }
        ],
        suggestions: ["Minimalistische Dusche", "Pflegeleicht reinigen", "Maße: 90 x 120"]
      };
    }

    if (containsAny(text, ["bodenablauf", "ablauf", "technikraum", "keller", "waschraum", "wirtschaftsraum"])) {
      return {
        text:
          "Wenn es nicht primär um eine lineare Walk-in-Dusche geht, kann ein quadratischer Bodenablauf passender sein. Der ist kompakter und eignet sich gut für Nebenflächen oder funktionale Nassbereiche.",
        actions: [
          { label: "Bodenabläufe ansehen", href: "sortiment.html#bodenablauf" },
          { label: "Einbau fragen", href: "kontakt.html" }
        ],
        suggestions: ["Doch Duschrinne planen", "Ersatzteil gesucht", "Besitzer kontaktieren"]
      };
    }

    return {
      text:
        "Ich kann das eingrenzen. Für die erste Empfehlung brauche ich drei Punkte: Duschbreite, gewünschte Optik und ob einfache Reinigung wichtiger ist als ein fast unsichtbares Fliesenbild.\nKurz gesagt: C15 Edelstahl für robust und pflegeleicht, C16 befliesbar für minimalistisch und sehr modern.",
      actions: [
        { label: "Sortiment ansehen", href: "sortiment.html" },
        { label: "Kontakt zum Team", href: "kontakt.html" }
      ],
      suggestions: ["90 x 120 cm, minimalistisch", "Pflegeleicht und robust", "Ich möchte den Besitzer kontaktieren"]
    };
  }

  function containsAny(value, terms) {
    return terms.some(function (term) {
      return value.includes(normalize(term));
    });
  }

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem("duschrinnen-language");
      if (saved && translations[saved]) {
        return saved;
      }
    } catch (error) {}
    return "de";
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem("duschrinnen-theme") || "light";
    } catch (error) {
      return "light";
    }
  }

  function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/&[a-z]+;/g, "");
  }

  function formatEuro(value) {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(value);
  }
})();
