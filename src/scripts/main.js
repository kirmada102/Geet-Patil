(function () {
  const CART_STORAGE_KEY = "duschrinnen-cart";
  const siteLinks = [
    { title: "FAQ", category: "Service", url: "/faq.html" },
    { title: "Blog", category: "Journal", url: "/blog.html" },
    { title: "Unternehmen", category: "Marke", url: "/about.html" },
    { title: "Inspiration", category: "Ideen", url: "/for-you.html" },
    { title: "Mein Konto", category: "Konto", url: "/mein-konto.html" },
    { title: "Warenkorb & Checkout", category: "Bestellung", url: "/checkout.html" },
    { title: "Edelstahl Duschrinnen", category: "Kategorie", url: "/sortiment.html#edelstahl" },
    { title: "Befliesbare Duschrinnen", category: "Kategorie", url: "/sortiment.html#befliesbar" },
    { title: "Duschrinnen-Ersatzteile", category: "Kategorie", url: "/sortiment.html#ersatzteile" },
    { title: "Bodenabläufe", category: "Kategorie", url: "/sortiment.html#bodenablauf" },
    { title: "Duschablagen", category: "Kategorie", url: "/sortiment.html#ablagen" },
    { title: "Fliesenzubehör", category: "Kategorie", url: "/sortiment.html#zubehoer" },
    { title: "Diamant Bohrkronen Matrix", category: "Werkzeug", url: "/sortiment.html#matrix" },
    { title: "Diamant Bohrkronen", category: "Werkzeug", url: "/sortiment.html#diamant-bohrkronen-gruppe" },
    { title: "Diamant Bohrkronen Set", category: "Werkzeug", url: "/sortiment.html#diamant-bohrkronen-set" },
    { title: "Fliesenschienen", category: "Werkzeug", url: "/sortiment.html#fliesenschienen" },
    { title: "Nivelliersystem", category: "Werkzeug", url: "/sortiment.html#nivelliersystem" },
    { title: "Diamanttrennscheibe 115", category: "Werkzeug", url: "/sortiment.html#diamanttrennscheibe-115" },
    { title: "Diamanttrennscheibe 125", category: "Werkzeug", url: "/sortiment.html#diamanttrennscheibe-125" },
    { title: "Widerrufsbelehrung", category: "Rechtliches", url: "/widerrufsbelehrung.html" },
    { title: "Allgemeine Geschäftsbedingungen", category: "Rechtliches", url: "/allgemeine-geschaeftsbedingungen.html" },
    { title: "Impressum", category: "Rechtliches", url: "/impressum.html" },
    { title: "Datenschutzerklärung", category: "Rechtliches", url: "/datenschutz.html" }
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
      heroText: "Premium-Duschrinnen, Bodenabläufe und Fliesenzubehör für Neubau, Sanierung und barrierearme Badplanung - mit klarer Beratung und schneller Lieferung.",
      viewProducts: "Produkte ansehen",
      planDrain: "Duschrinne planen",
      reviews: "Google Bewertungen",
      reply: "Antwortzeit",
      days: "Werktage Versand",
      productView: "3D Produktansicht",
      add: "In den Warenkorb",
      explore: "Entdecken",
      close: "Schließen",
      openProduct: "Produkt öffnen",
      askAdvice: "Beratung anfragen",
      searchLabel: "Produktsuche",
      searchPlaceholder: "Duschrinne, Siphon, Bohrkrone...",
      videoEyebrow: "Einbauvideo",
      videoTitle: "Wie funktioniert eine Bestellung bei Duschrinnen Profi?",
      videoText: "Duschrinnen Profi versendet verfügbare Ware schnell per DHL und beantwortet Produkt- und Lieferfragen in der Regel innerhalb von 24 Stunden.",
      videoLearn: "Mehr zum Bestellablauf",
      videoNext: "Nächstes Video",
      videoPlay: "Abspielen",
      videoPause: "Pausieren",
      videoSoundOn: "Ton an",
      videoSoundOff: "Ton aus",
      videoOpen: "Zum YouTube-Kanal",
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
      heroText: "Premium shower drains, floor drains and tiling accessories for new builds, renovations and accessible bathroom planning - with clear advice and fast delivery.",
      viewProducts: "View products",
      planDrain: "Plan drain",
      reviews: "Google reviews",
      reply: "Reply time",
      days: "Business days delivery",
      productView: "3D product view",
      add: "Add to cart",
      explore: "Explore",
      close: "Close",
      openProduct: "Open product",
      askAdvice: "Request advice",
      searchLabel: "Product search",
      searchPlaceholder: "Shower drain, siphon, drill bit...",
      videoEyebrow: "Installation video",
      videoTitle: "How does ordering at Duschrinnen Profi work?",
      videoText: "Duschrinnen Profi ships available stock quickly via DHL and usually answers product and delivery questions within 24 hours.",
      videoLearn: "Learn more",
      videoNext: "Next video",
      videoPlay: "Play",
      videoPause: "Pause",
      videoSoundOn: "Sound on",
      videoSoundOff: "Sound off",
      videoOpen: "YouTube channel",
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
      heroText: "Caniveaux de douche, siphons de sol et accessoires de carrelage pour construction neuve, rénovation et salles de bain accessibles, avec conseil clair et livraison rapide.",
      viewProducts: "Voir les produits",
      planDrain: "Planifier",
      reviews: "Avis Google",
      reply: "Délai de réponse",
      days: "Jours de livraison",
      productView: "Vue produit 3D",
      add: "Ajouter au panier",
      explore: "Explorer",
      close: "Fermer",
      openProduct: "Ouvrir le produit",
      askAdvice: "Demander conseil",
      searchLabel: "Recherche produit",
      searchPlaceholder: "Caniveau, siphon, couronne...",
      videoEyebrow: "Vidéo d'installation",
      videoTitle: "Comment se déroule une commande chez Duschrinnen Profi ?",
      videoText: "Duschrinnen Profi expédie rapidement les articles disponibles avec DHL et répond généralement aux questions produit et livraison sous 24 heures.",
      videoLearn: "En savoir plus",
      videoNext: "Vidéo suivante",
      videoPlay: "Lire",
      videoPause: "Pause",
      videoSoundOn: "Activer le son",
      videoSoundOff: "Couper le son",
      videoOpen: "Chaîne YouTube",
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
      heroText: "Premium duş kanalları, zemin giderleri ve fayans aksesuarları; yeni projeler, renovasyonlar ve erişilebilir banyo planları için açık danışmanlık ve hızlı teslimatla.",
      viewProducts: "Ürünleri gör",
      planDrain: "Gider planla",
      reviews: "Google yorumları",
      reply: "Yanıt süresi",
      days: "İş günü teslimat",
      productView: "3D ürün görünümü",
      add: "Sepete ekle",
      explore: "Keşfet",
      close: "Kapat",
      openProduct: "Ürünü aç",
      askAdvice: "Danışmanlık iste",
      searchLabel: "Ürün arama",
      searchPlaceholder: "Duş gideri, sifon, matkap ucu...",
      videoEyebrow: "Montaj videosu",
      videoTitle: "Duschrinnen Profi’de sipariş nasıl işler?",
      videoText: "Stoktaki ürünler DHL ile hızlı gönderilir ve ürün ile teslimat sorularına genelde 24 saat içinde yanıt verilir.",
      videoLearn: "Daha fazla bilgi",
      videoNext: "Sonraki video",
      videoPlay: "Oynat",
      videoPause: "Duraklat",
      videoSoundOn: "Sesi aç",
      videoSoundOff: "Sesi kapat",
      videoOpen: "YouTube kanalı",
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
      heroText: "Премиальные душевые каналы, трапы и аксессуары для плитки для новых проектов, ремонта и безбарьерных ванных комнат - с понятной консультацией и быстрой доставкой.",
      viewProducts: "Смотреть товары",
      planDrain: "Подобрать трап",
      reviews: "Отзывы Google",
      reply: "Время ответа",
      days: "Рабочих дня доставка",
      productView: "3D вид товара",
      add: "В корзину",
      explore: "Подробнее",
      close: "Закрыть",
      openProduct: "Открыть товар",
      askAdvice: "Запросить совет",
      searchLabel: "Поиск товара",
      searchPlaceholder: "Душевой трап, сифон, коронка...",
      videoEyebrow: "Видео монтажа",
      videoTitle: "Как проходит заказ в Duschrinnen Profi?",
      videoText: "Товары в наличии быстро отправляются DHL, а на вопросы о товаре и доставке обычно отвечают в течение 24 часов.",
      videoLearn: "Узнать больше",
      videoNext: "Следующее видео",
      videoPlay: "Воспроизвести",
      videoPause: "Пауза",
      videoSoundOn: "Включить звук",
      videoSoundOff: "Выключить звук",
      videoOpen: "Канал YouTube",
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
      heroText: "Canaletas de ducha, desagües y accesorios de alicatado para obra nueva, reforma y baños accesibles, con asesoría clara y entrega rápida.",
      viewProducts: "Ver productos",
      planDrain: "Planificar desagüe",
      reviews: "Reseñas de Google",
      reply: "Tiempo de respuesta",
      days: "Días de entrega",
      productView: "Vista 3D del producto",
      add: "Añadir al carrito",
      explore: "Explorar",
      close: "Cerrar",
      openProduct: "Abrir producto",
      askAdvice: "Pedir asesoría",
      searchLabel: "Buscar producto",
      searchPlaceholder: "Canaleta, sifón, corona...",
      videoEyebrow: "Video de instalación",
      videoTitle: "¿Cómo funciona un pedido en Duschrinnen Profi?",
      videoText: "Duschrinnen Profi envía rápidamente el stock disponible por DHL y normalmente responde a consultas de producto y entrega en 24 horas.",
      videoLearn: "Más información",
      videoNext: "Siguiente video",
      videoPlay: "Reproducir",
      videoPause: "Pausar",
      videoSoundOn: "Activar sonido",
      videoSoundOff: "Silenciar",
      videoOpen: "Canal de YouTube",
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
    payment: "Rechnungskauf, Klarna & PayPal",
    productsMenu: "Badprodukte",
    company: "Unternehmen",
    inspiration: "Inspiration",
    journal: "Blog",
    navSearchPlaceholder: "Produkte, Blog oder Tipps suchen...",
    collectionsEyebrow: "Shop",
    collectionsTitle: "Alle Produktkategorien",
    collectionsText: "Entdecken Sie Duschrinnen, Bodenabläufe, Ersatzteile, Duschablagen und Fliesenzubehör für professionelle Badprojekte aus einer Hand.",
    previousCategory: "Vorherige Kategorie",
    nextCategory: "Nächste Kategorie",
    compareButton: "Mit Markt vergleichen",
    compareTitle: "Produktvergleich",
    compareDuschrinnen: "Duschrinnen Profi",
    compareMarket: "Marktprodukt",
    comparePrice: "Preis",
    compareDesign: "Design",
    compareAdvantage: "Vorteil",
    compareSavings: "Sie sparen",
    compareClose: "Vergleich schließen",
    contactSuccess: "Ihre Anfrage wurde gespeichert. Das Team kann sie jetzt im Backend sehen.",
    checkoutRedirect: "Sicherer Checkout wird geöffnet...",
    checkoutError: "Checkout konnte gerade nicht gestartet werden. Bitte versuchen Sie es erneut.",
    loginSuccess: "Sie sind jetzt angemeldet.",
    registerSuccess: "Konto erstellt. Bitte prüfen Sie jetzt Ihre E-Mail.",
    logout: "Abmelden",
    continueWithGoogle: "Mit Google fortfahren",
    continueWithApple: "Mit Apple fortfahren",
    authMissing: "Supabase ist noch nicht eingerichtet. Tragen Sie zuerst die öffentlichen Schlüssel in Cloudflare ein.",
    accountSignedInAs: "Angemeldet als",
    accountOrders: "Letzte Bestellungen",
    accountNoOrders: "Noch keine Bestellungen vorhanden.",
    aiTyping: "Beratung denkt gerade nach..."
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
    payment: "Invoice purchase, Klarna & PayPal",
    productsMenu: "Bathroom products",
    company: "Company",
    inspiration: "Inspiration",
    journal: "Blog",
    navSearchPlaceholder: "Search products, blog or tips...",
    collectionsEyebrow: "Shop",
    collectionsTitle: "All product categories",
    collectionsText: "Discover shower drains, floor drains, spare parts, shower shelves and tile accessories for professional bathroom projects from one source.",
    previousCategory: "Previous category",
    nextCategory: "Next category",
    compareButton: "Compare with market",
    compareTitle: "Product comparison",
    compareDuschrinnen: "Duschrinnen Profi",
    compareMarket: "Market product",
    comparePrice: "Price",
    compareDesign: "Design",
    compareAdvantage: "Advantage",
    compareSavings: "You save",
    compareClose: "Close comparison",
    contactSuccess: "Your enquiry has been saved. The team can now review it in the backend.",
    checkoutRedirect: "Opening secure checkout...",
    checkoutError: "Checkout could not start right now. Please try again.",
    loginSuccess: "You are now signed in.",
    registerSuccess: "Account created. Please check your email now.",
    logout: "Sign out",
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    authMissing: "Supabase is not configured yet. Add the public keys in Cloudflare first.",
    accountSignedInAs: "Signed in as",
    accountOrders: "Recent orders",
    accountNoOrders: "No orders yet.",
    aiTyping: "Advisor is thinking..."
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
    payment: "Facture, Klarna et PayPal",
    productsMenu: "Produits salle de bain",
    company: "Entreprise",
    inspiration: "Inspiration",
    journal: "Blog",
    navSearchPlaceholder: "Rechercher produits, blog ou conseils...",
    collectionsEyebrow: "Boutique",
    collectionsTitle: "Toutes les catégories de produits",
    collectionsText: "Découvrez caniveaux de douche, siphons de sol, pièces détachées, étagères de douche et accessoires carrelage pour des projets de salle de bain professionnels.",
    previousCategory: "Catégorie précédente",
    nextCategory: "Catégorie suivante",
    compareButton: "Comparer au marché",
    compareTitle: "Comparaison produit",
    compareDuschrinnen: "Duschrinnen Profi",
    compareMarket: "Produit du marché",
    comparePrice: "Prix",
    compareDesign: "Design",
    compareAdvantage: "Avantage",
    compareSavings: "Vous économisez",
    compareClose: "Fermer la comparaison",
    contactSuccess: "Votre demande a été enregistrée. L'équipe peut maintenant la voir dans le backend.",
    checkoutRedirect: "Ouverture du paiement sécurisé...",
    checkoutError: "Le paiement ne peut pas démarrer pour le moment. Réessayez.",
    loginSuccess: "Vous êtes connecté.",
    registerSuccess: "Compte créé. Vérifiez maintenant votre e-mail.",
    logout: "Se déconnecter",
    continueWithGoogle: "Continuer avec Google",
    continueWithApple: "Continuer avec Apple",
    authMissing: "Supabase n'est pas encore configuré. Ajoutez d'abord les clés publiques dans Cloudflare.",
    accountSignedInAs: "Connecté comme",
    accountOrders: "Dernières commandes",
    accountNoOrders: "Aucune commande pour le moment.",
    aiTyping: "Le conseiller réfléchit..."
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
    payment: "Faturalı ödeme, Klarna ve PayPal",
    productsMenu: "Banyo ürünleri",
    company: "Şirket",
    inspiration: "İlham",
    journal: "Blog",
    navSearchPlaceholder: "Ürün, blog veya ipucu ara...",
    collectionsEyebrow: "Mağaza",
    collectionsTitle: "Tüm ürün kategorileri",
    collectionsText: "Profesyonel banyo projeleri için duş giderleri, zemin giderleri, yedek parçalar, duş rafları ve fayans aksesuarlarını tek noktada keşfedin.",
    previousCategory: "Önceki kategori",
    nextCategory: "Sonraki kategori",
    compareButton: "Piyasayla karşılaştır",
    compareTitle: "Ürün karşılaştırması",
    compareDuschrinnen: "Duschrinnen Profi",
    compareMarket: "Piyasa ürünü",
    comparePrice: "Fiyat",
    compareDesign: "Tasarım",
    compareAdvantage: "Avantaj",
    compareSavings: "Tasarrufunuz",
    compareClose: "Karşılaştırmayı kapat",
    contactSuccess: "Talebiniz kaydedildi. Ekip artık bunu yönetim tarafında görebilir.",
    checkoutRedirect: "Güvenli ödeme açılıyor...",
    checkoutError: "Ödeme şu anda başlatılamadı. Lütfen tekrar deneyin.",
    loginSuccess: "Giriş yaptınız.",
    registerSuccess: "Hesap oluşturuldu. Şimdi e-postanızı kontrol edin.",
    logout: "Çıkış yap",
    continueWithGoogle: "Google ile devam et",
    continueWithApple: "Apple ile devam et",
    authMissing: "Supabase henüz yapılandırılmadı. Önce Cloudflare'a genel anahtarları ekleyin.",
    accountSignedInAs: "Oturum açan",
    accountOrders: "Son siparişler",
    accountNoOrders: "Henüz sipariş yok.",
    aiTyping: "Danışman düşünüyor..."
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
    payment: "Оплата по счету, Klarna и PayPal",
    productsMenu: "Товары для ванной",
    company: "Компания",
    inspiration: "Вдохновение",
    journal: "Блог",
    navSearchPlaceholder: "Искать товары, блог или советы...",
    collectionsEyebrow: "Магазин",
    collectionsTitle: "Все категории товаров",
    collectionsText: "Откройте душевые трапы, напольные сливы, запчасти, душевые полки и плиточный инструмент для профессиональных проектов ванной комнаты в одном месте.",
    previousCategory: "Предыдущая категория",
    nextCategory: "Следующая категория",
    compareButton: "Сравнить с рынком",
    compareTitle: "Сравнение товара",
    compareDuschrinnen: "Duschrinnen Profi",
    compareMarket: "Рыночный товар",
    comparePrice: "Цена",
    compareDesign: "Дизайн",
    compareAdvantage: "Преимущество",
    compareSavings: "Вы экономите",
    compareClose: "Закрыть сравнение",
    contactSuccess: "Ваш запрос сохранен. Команда теперь видит его в системе.",
    checkoutRedirect: "Открывается безопасная оплата...",
    checkoutError: "Сейчас не удалось запустить оплату. Попробуйте еще раз.",
    loginSuccess: "Вы вошли в аккаунт.",
    registerSuccess: "Аккаунт создан. Проверьте вашу почту.",
    logout: "Выйти",
    continueWithGoogle: "Продолжить с Google",
    continueWithApple: "Продолжить с Apple",
    authMissing: "Supabase еще не настроен. Сначала добавьте публичные ключи в Cloudflare.",
    accountSignedInAs: "Вы вошли как",
    accountOrders: "Последние заказы",
    accountNoOrders: "Заказов пока нет.",
    aiTyping: "Консультант думает..."
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
    payment: "Pago por factura, Klarna y PayPal",
    productsMenu: "Productos de baño",
    company: "Empresa",
    inspiration: "Inspiración",
    journal: "Blog",
    navSearchPlaceholder: "Buscar productos, blog o consejos...",
    collectionsEyebrow: "Tienda",
    collectionsTitle: "Todas las categorías de productos",
    collectionsText: "Descubra canaletas de ducha, desagües, repuestos, estantes de ducha y accesorios para azulejos para proyectos profesionales de baño en un solo lugar.",
    previousCategory: "Categoría anterior",
    nextCategory: "Categoría siguiente",
    compareButton: "Comparar con el mercado",
    compareTitle: "Comparación del producto",
    compareDuschrinnen: "Duschrinnen Profi",
    compareMarket: "Producto del mercado",
    comparePrice: "Precio",
    compareDesign: "Diseño",
    compareAdvantage: "Ventaja",
    compareSavings: "Ahorras",
    compareClose: "Cerrar comparación",
    contactSuccess: "Tu consulta se ha guardado. El equipo ya puede verla en el backend.",
    checkoutRedirect: "Abriendo pago seguro...",
    checkoutError: "No se pudo iniciar el pago ahora mismo. Inténtalo de nuevo.",
    loginSuccess: "Ya has iniciado sesión.",
    registerSuccess: "Cuenta creada. Revisa ahora tu correo.",
    logout: "Cerrar sesión",
    continueWithGoogle: "Continuar con Google",
    continueWithApple: "Continuar con Apple",
    authMissing: "Supabase aún no está configurado. Primero añade las claves públicas en Cloudflare.",
    accountSignedInAs: "Sesión iniciada como",
    accountOrders: "Pedidos recientes",
    accountNoOrders: "Aún no hay pedidos.",
    aiTyping: "El asesor está pensando..."
  });

  const adminTranslations = {
    de: {
      adminDashboard: "Live-Dashboard für Bestellungen und Anfragen",
      adminSubtext: "Hier sehen Sie neue Bestellungen, Kontaktanfragen, letzte Kundenkonten und aktuelle Website-Aktivität.",
      adminOrders: "Bestellungen",
      adminContacts: "Anfragen",
      adminCustomers: "Kunden",
      adminEvents: "Aktivität",
      adminOrdersHeading: "Neueste Bestellungen",
      adminContactsHeading: "Neueste Kontaktanfragen",
      adminCustomersHeading: "Letzte Kundenkonten",
      adminEventsHeading: "Letzte Website-Ereignisse",
      adminOrdersTotal: "Bestellungen gesamt",
      adminPaidOrders: "Bezahlt",
      adminContactsTotal: "Anfragen gesamt",
      adminCustomersTotal: "Kundenkonten",
      adminNoData: "Noch keine Daten vorhanden.",
      adminLive: "Automatische Aktualisierung alle 30 Sekunden.",
      adminAccessDenied: "Dieses Konto hat keinen Admin-Zugriff."
    },
    en: {
      adminDashboard: "Live dashboard for orders and enquiries",
      adminSubtext: "See new orders, contact requests, recent customer accounts and current website activity in one place.",
      adminOrders: "Orders",
      adminContacts: "Enquiries",
      adminCustomers: "Customers",
      adminEvents: "Activity",
      adminOrdersHeading: "Latest orders",
      adminContactsHeading: "Latest contact requests",
      adminCustomersHeading: "Recent customer accounts",
      adminEventsHeading: "Latest website events",
      adminOrdersTotal: "Total orders",
      adminPaidOrders: "Paid",
      adminContactsTotal: "Total enquiries",
      adminCustomersTotal: "Customer accounts",
      adminNoData: "No data yet.",
      adminLive: "Auto-refresh every 30 seconds.",
      adminAccessDenied: "This account does not have admin access."
    },
    fr: {
      adminDashboard: "Tableau de bord en direct des commandes et demandes",
      adminSubtext: "Consultez ici les nouvelles commandes, les demandes de contact, les derniers comptes clients et l'activité récente du site.",
      adminOrders: "Commandes",
      adminContacts: "Demandes",
      adminCustomers: "Clients",
      adminEvents: "Activité",
      adminOrdersHeading: "Dernières commandes",
      adminContactsHeading: "Dernières demandes de contact",
      adminCustomersHeading: "Derniers comptes clients",
      adminEventsHeading: "Derniers événements du site",
      adminOrdersTotal: "Commandes totales",
      adminPaidOrders: "Payées",
      adminContactsTotal: "Demandes totales",
      adminCustomersTotal: "Comptes clients",
      adminNoData: "Pas encore de données.",
      adminLive: "Actualisation automatique toutes les 30 secondes.",
      adminAccessDenied: "Ce compte n'a pas d'accès administrateur."
    },
    tr: {
      adminDashboard: "Sipariş ve talepler için canlı pano",
      adminSubtext: "Yeni siparişleri, iletişim taleplerini, son müşteri hesaplarını ve güncel site hareketlerini burada görün.",
      adminOrders: "Siparişler",
      adminContacts: "Talepler",
      adminCustomers: "Müşteriler",
      adminEvents: "Aktivite",
      adminOrdersHeading: "Son siparişler",
      adminContactsHeading: "Son iletişim talepleri",
      adminCustomersHeading: "Son müşteri hesapları",
      adminEventsHeading: "Son site olayları",
      adminOrdersTotal: "Toplam sipariş",
      adminPaidOrders: "Ödenen",
      adminContactsTotal: "Toplam talep",
      adminCustomersTotal: "Müşteri hesapları",
      adminNoData: "Henüz veri yok.",
      adminLive: "Her 30 saniyede bir otomatik yenilenir.",
      adminAccessDenied: "Bu hesabın yönetici erişimi yok."
    },
    ru: {
      adminDashboard: "Живая панель заказов и запросов",
      adminSubtext: "Здесь видны новые заказы, контактные запросы, последние клиентские аккаунты и текущая активность сайта.",
      adminOrders: "Заказы",
      adminContacts: "Запросы",
      adminCustomers: "Клиенты",
      adminEvents: "Активность",
      adminOrdersHeading: "Последние заказы",
      adminContactsHeading: "Последние обращения",
      adminCustomersHeading: "Новые аккаунты клиентов",
      adminEventsHeading: "Последние события сайта",
      adminOrdersTotal: "Всего заказов",
      adminPaidOrders: "Оплачено",
      adminContactsTotal: "Всего запросов",
      adminCustomersTotal: "Клиентские аккаунты",
      adminNoData: "Данных пока нет.",
      adminLive: "Автообновление каждые 30 секунд.",
      adminAccessDenied: "У этого аккаунта нет доступа администратора."
    },
    es: {
      adminDashboard: "Panel en vivo de pedidos y consultas",
      adminSubtext: "Aquí puede ver nuevos pedidos, solicitudes de contacto, cuentas recientes de clientes y la actividad actual del sitio.",
      adminOrders: "Pedidos",
      adminContacts: "Consultas",
      adminCustomers: "Clientes",
      adminEvents: "Actividad",
      adminOrdersHeading: "Pedidos recientes",
      adminContactsHeading: "Solicitudes de contacto recientes",
      adminCustomersHeading: "Cuentas de clientes recientes",
      adminEventsHeading: "Últimos eventos del sitio",
      adminOrdersTotal: "Pedidos totales",
      adminPaidOrders: "Pagados",
      adminContactsTotal: "Consultas totales",
      adminCustomersTotal: "Cuentas de clientes",
      adminNoData: "Todavía no hay datos.",
      adminLive: "Actualización automática cada 30 segundos.",
      adminAccessDenied: "Esta cuenta no tiene acceso de administrador."
    }
  };

  Object.keys(adminTranslations).forEach(function (language) {
    Object.assign(translations[language], adminTranslations[language]);
  });

  function normalizeSupabaseUrl(value) {
    return String(value || "")
      .trim()
      .replace(/\/+$/g, "")
      .replace(/\/rest\/v1$/i, "");
  }

  const siteConfig = window.__SITE_CONFIG__ || {};
  siteConfig.supabaseUrl = normalizeSupabaseUrl(siteConfig.supabaseUrl);
  const products = Array.isArray(siteConfig.products) ? siteConfig.products : [];
  const productLookup = products.reduce(function (accumulator, product) {
    accumulator[product.title] = product;
    return accumulator;
  }, {});
  const hasSupabaseConfig = Boolean(siteConfig.supabaseUrl && siteConfig.supabaseAnonKey);
  let supabaseClient = null;
  let supabaseClientPromise = null;

  let currentLanguage = getSavedLanguage();
  let cartCount = 0;
  let toastTimer = null;
  let refreshVideoUi = null;
  let youtubeApiPromise = null;
  let currentUser = null;
  let compareModal = null;
  let heroCountersStarted = false;
  const chatState = {
    topic: "",
    style: "",
    size: "",
    recommendation: ""
  };

  document.addEventListener("DOMContentLoaded", function () {
    setupActiveNavigation();
    setupPreferences();
    setupMenu();
    setupHeader();
    setupReveal();
    setupFilters();
    setupCart();
    setupCheckoutPage();
    setupSearch();
    setupConfigurator();
    setupFaq();
    setupContactForm();
    setupAccountForms();
    applyLanguage(currentLanguage);
    setupHeroCounters();

    runDeferred(function () {
      setupMouseGradient();
      setupMotionEnhancements();
      setupCarousels();
      setupCatalogRouting();
      setupCompareExperience();
      setupVideoSection();
      setupChatAssistant();
      setupProductViewer();
      setupDetailProductGallery();
      setupAnalytics();
    });
  });

  function runDeferred(callback) {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(callback, { timeout: 1200 });
      return;
    }

    window.setTimeout(callback, 180);
  }

  async function getSupabase() {
    if (!hasSupabaseConfig) {
      return null;
    }

    if (supabaseClient) {
      return supabaseClient;
    }

    if (!supabaseClientPromise) {
      supabaseClientPromise = import("@supabase/supabase-js")
        .then(function (module) {
          supabaseClient = module.createClient(siteConfig.supabaseUrl, siteConfig.supabaseAnonKey, {
            auth: {
              persistSession: true,
              autoRefreshToken: true,
              detectSessionInUrl: true
            }
          });

          return supabaseClient;
        })
        .catch(function (error) {
          supabaseClientPromise = null;
          throw error;
        });
    }

    return supabaseClientPromise;
  }

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
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

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
    setText('[data-hero-label="reviews"]', t.reviews);
    setText('[data-hero-label="reply"]', t.reply);
    setText('[data-hero-label="days"]', t.days);
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
    setText("[data-video-learn] span", t.videoLearn);
    setText("[data-video-next] span", t.videoNext);
    setText("[data-video-volume-label]", t.videoVolume);
    setLabel("[data-video-volume]", t.videoVolume);
    setAttribute("[data-video-toggle]", "title", t.videoPlay);
    setAttribute("[data-video-sound]", "title", t.videoSoundOn);
    setAttribute("[data-video-open]", "title", t.videoOpen);
    applyPageCopy(language);
    applyHomeContent(language);
    applyCatalogContent(language);

    setIconHtml("[data-add-product]", "shopping-bag", t.add);
    setIconHtml("[data-explore-product]", "arrow-up-right", t.explore);

    document.querySelectorAll(".compare-product-button").forEach(function (button) {
      button.innerHTML = '<i data-lucide="scale" aria-hidden="true"></i><span>' + t.compareButton + "</span>";
    });
    setIconHtml('[data-social-provider="google"]', "chrome", t.continueWithGoogle);
    setIconHtml('[data-social-provider="apple"]', "smartphone", t.continueWithApple);
    setIconHtml("[data-account-logout]", "log-out", t.logout);

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

  function setupHeroCounters() {
    const counters = Array.from(document.querySelectorAll("[data-hero-counter]"));
    if (!counters.length) {
      return;
    }

    const startCounters = function () {
      if (heroCountersStarted) {
        return;
      }

      heroCountersStarted = true;
      counters.forEach(function (counter) {
        animateHeroCounter(counter);
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      counters.forEach(function (counter) {
        setHeroCounterValue(counter, Number(counter.dataset.counterTarget || 0), true);
      });
      heroCountersStarted = true;
      return;
    }

    counters.forEach(function (counter) {
      setHeroCounterValue(counter, 0, false);
    });

    const proof = document.querySelector(".hero-proof");
    if (!proof || typeof window.IntersectionObserver !== "function") {
      startCounters();
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        if (!entries.some(function (entry) { return entry.isIntersecting; })) {
          return;
        }

        startCounters();
        observer.disconnect();
      },
      {
        threshold: 0.4
      }
    );

    observer.observe(proof);
  }

  function animateHeroCounter(counter) {
    const target = Number(counter.dataset.counterTarget || 0);
    if (!Number.isFinite(target) || target <= 0) {
      return;
    }

    const duration = Number(counter.dataset.counterDuration || 1650);
    const start = window.performance && typeof window.performance.now === "function" ? window.performance.now() : Date.now();

    function step(now) {
      const elapsed = Math.max(0, now - start);
      const progress = Math.min(1, elapsed / duration);
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const nextValue = Math.round(target * eased);

      setHeroCounterValue(counter, nextValue, progress >= 1);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function setHeroCounterValue(counter, value, isFinal) {
    const suffix = counter.dataset.counterSuffix || "";
    const formatted = new Intl.NumberFormat(getCounterLocale()).format(Math.max(0, Number(value || 0)));

    counter.textContent = formatted + (isFinal || value > 0 ? suffix : "");
  }

  function getCounterLocale() {
    switch (currentLanguage) {
      case "fr":
        return "fr-FR";
      case "tr":
        return "tr-TR";
      case "ru":
        return "ru-RU";
      case "es":
        return "es-ES";
      case "en":
        return "en-GB";
      default:
        return "de-DE";
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
      setIconHtml('.contact-form button[type="submit"]', "send", copy.submit || "Anfrage senden");
      setText(".faq-layout .eyebrow", copy.faq || "FAQ");
      setText(".faq-layout h2", copy.faqTitle || "Häufige Fragen");
    }
  }

  function applyHomeContent(language) {
    if (document.body.dataset.page !== "home") {
      return;
    }

    const t = translations[language] || translations.de;
    const dictionary = {
      de: {
        productsEyebrow: "Sortiment",
        productsTitle: "Duschrinnen, Abläufe und Zubehör für Neubau und Sanierung.",
        productsText:
          "Von Edelstahl- und befliesbaren Duschrinnen bis zu Bodenabläufen, Ersatzteilen und Fliesenwerkzeug finden Sie hier die wichtigsten Produktbereiche für moderne Duschlösungen.",
        collectionTags: {
          stainless: "Kategorie",
          tileable: "Kategorie",
          spareParts: "Service",
          floorDrains: "Kategorie",
          shelves: "Kategorie",
          tileAccessories: "Werkzeug"
        },
        collectionText: {
          stainless: "Sichtbare Edelstahlkanten für robuste Walk-in Duschen mit schneller Reinigung.",
          tileable: "Minimale Optik für durchlaufende Fliesenbilder und besonders ruhige Badarchitektur.",
          spareParts: "Siphons, Haarsiebe und Abdichtungszubehör für Wartung, Reinigung und Nachrüstung.",
          floorDrains: "Kompakte Abläufe für Nebenflächen, Technikräume oder funktionale Duschsituationen.",
          shelves: "Schlanke Aufbewahrung für Seife, Shampoo und Badaccessoires im selben Materialkonzept.",
          tileAccessories: "Bohrkronen, Sets, Trennscheiben und weiteres Werkzeug für saubere Fliesen- und Natursteinarbeiten."
        },
        collectionMeta: {
          stainless: "Mehrere Längen",
          tileable: "Fliesenbündige Optik",
          spareParts: "Siphon, Haarsieb, Dichtband",
          floorDrains: "Punkt- und Designabläufe",
          shelves: "Ecke, Nische und Wand",
          tileAccessories: "Bohrkronen, Scheiben, Profile"
        }
      },
      en: {
        productsEyebrow: "Products",
        productsTitle: "Shower drains, floor drains and accessories for new builds and renovations.",
        productsText:
          "From stainless and tileable shower drains to floor drains, spare parts and tile tools, these are the key product areas for modern shower projects.",
        collectionTags: {
          stainless: "Category",
          tileable: "Category",
          spareParts: "Service",
          floorDrains: "Category",
          shelves: "Category",
          tileAccessories: "Tools"
        },
        collectionText: {
          stainless: "Visible stainless edges for durable walk-in showers and easy cleaning.",
          tileable: "A nearly invisible finish for continuous tile surfaces and minimalist bathrooms.",
          spareParts: "Siphons, hair strainers and sealing accessories for maintenance, cleaning and retrofit work.",
          floorDrains: "Compact drains for side areas, utility spaces or functional shower situations.",
          shelves: "Slim storage for soap, shampoo and bathroom accessories in the same material concept.",
          tileAccessories: "Drill bits, sets, cutting discs and tools for clean tile and natural stone work."
        },
        collectionMeta: {
          stainless: "Multiple lengths",
          tileable: "Flush tile finish",
          spareParts: "Siphon, strainer, sealing tape",
          floorDrains: "Point and design drains",
          shelves: "Corner, niche and wall",
          tileAccessories: "Drill bits, discs, profiles"
        }
      },
      fr: {
        productsEyebrow: "Produits",
        productsTitle: "Caniveaux, siphons et accessoires pour construction neuve et rénovation.",
        productsText:
          "Des caniveaux inox et à carreler aux siphons de sol, pièces détachées et outils de carrelage, voici les principaux univers produit pour les douches modernes.",
        collectionTags: {
          stainless: "Catégorie",
          tileable: "Catégorie",
          spareParts: "Service",
          floorDrains: "Catégorie",
          shelves: "Catégorie",
          tileAccessories: "Outils"
        },
        collectionText: {
          stainless: "Bords inox visibles pour des douches à l’italienne robustes et faciles à nettoyer.",
          tileable: "Aspect presque invisible pour des surfaces carrelées continues et des salles de bain minimalistes.",
          spareParts: "Siphons, grilles cheveux et accessoires d’étanchéité pour entretien, nettoyage et remplacement.",
          floorDrains: "Siphons compacts pour zones secondaires, locaux techniques ou situations de douche fonctionnelles.",
          shelves: "Rangement discret pour savon, shampoing et accessoires de bain dans le même langage de matériau.",
          tileAccessories: "Couronnes, sets, disques et outils pour un travail propre sur carrelage et pierre naturelle."
        },
        collectionMeta: {
          stainless: "Plusieurs longueurs",
          tileable: "Pose affleurante",
          spareParts: "Siphon, grille, bande d’étanchéité",
          floorDrains: "Siphons ponctuels et design",
          shelves: "Angle, niche et mur",
          tileAccessories: "Couronnes, disques, profils"
        }
      },
      tr: {
        productsEyebrow: "Ürünler",
        productsTitle: "Yeni projeler ve renovasyonlar için duş giderleri, zemin giderleri ve aksesuarlar.",
        productsText:
          "Paslanmaz ve fayans kaplamalı duş giderlerinden zemin giderlerine, yedek parçalara ve fayans aletlerine kadar modern duş projeleri için ana ürün grupları burada yer alır.",
        collectionTags: {
          stainless: "Kategori",
          tileable: "Kategori",
          spareParts: "Servis",
          floorDrains: "Kategori",
          shelves: "Kategori",
          tileAccessories: "Alet"
        },
        collectionText: {
          stainless: "Dayanıklı walk-in duşlar ve kolay temizlik için görünür paslanmaz kenarlar.",
          tileable: "Sürekli fayans yüzeyi ve minimalist banyolar için neredeyse görünmez görünüm.",
          spareParts: "Bakım, temizlik ve yenileme için sifon, saç süzgeci ve yalıtım aksesuarları.",
          floorDrains: "Yan alanlar, teknik hacimler veya işlevsel duş alanları için kompakt giderler.",
          shelves: "Aynı malzeme dili içinde sabun, şampuan ve banyo aksesuarları için ince depolama.",
          tileAccessories: "Temiz fayans ve doğal taş işleri için matkap uçları, setler, kesme diskleri ve aletler."
        },
        collectionMeta: {
          stainless: "Birden fazla uzunluk",
          tileable: "Fayansla sıfır görünüm",
          spareParts: "Sifon, süzgeç, yalıtım bandı",
          floorDrains: "Noktasal ve tasarım giderler",
          shelves: "Köşe, niş ve duvar",
          tileAccessories: "Matkap uçları, diskler, profiller"
        }
      },
      ru: {
        productsEyebrow: "Товары",
        productsTitle: "Душевые трапы, напольные сливы и аксессуары для новых проектов и ремонта.",
        productsText:
          "От трапов из нержавеющей стали и моделей под плитку до напольных сливов, запчастей и плиточного инструмента - здесь собраны ключевые товарные направления для современных душевых решений.",
        collectionTags: {
          stainless: "Категория",
          tileable: "Категория",
          spareParts: "Сервис",
          floorDrains: "Категория",
          shelves: "Категория",
          tileAccessories: "Инструмент"
        },
        collectionText: {
          stainless: "Видимая нержавеющая кромка для надёжных walk-in душевых и быстрой очистки.",
          tileable: "Почти незаметное решение для сплошной плиточной поверхности и минималистичных ванных комнат.",
          spareParts: "Сифоны, решётки для волос и гидроизоляционные аксессуары для обслуживания, очистки и замены.",
          floorDrains: "Компактные сливы для дополнительных зон, технических помещений и функциональных душевых решений.",
          shelves: "Стройное хранение для мыла, шампуня и аксессуаров в единой материальной концепции.",
          tileAccessories: "Коронки, наборы, диски и инструмент для аккуратной работы по плитке и натуральному камню."
        },
        collectionMeta: {
          stainless: "Несколько длин",
          tileable: "Заподлицо с плиткой",
          spareParts: "Сифон, сетка, лента",
          floorDrains: "Точечные и дизайнерские сливы",
          shelves: "Угол, ниша и стена",
          tileAccessories: "Коронки, диски, профили"
        }
      },
      es: {
        productsEyebrow: "Productos",
        productsTitle: "Canaletas, desagües y accesorios para obra nueva y reforma.",
        productsText:
          "Desde canaletas inoxidables y alicatables hasta desagües, repuestos y herramientas para azulejo, aquí están las áreas de producto clave para duchas modernas.",
        collectionTags: {
          stainless: "Categoría",
          tileable: "Categoría",
          spareParts: "Servicio",
          floorDrains: "Categoría",
          shelves: "Categoría",
          tileAccessories: "Herramienta"
        },
        collectionText: {
          stainless: "Bordes inoxidables visibles para duchas walk-in resistentes y limpieza sencilla.",
          tileable: "Acabado casi invisible para superficies continuas de azulejo y baños minimalistas.",
          spareParts: "Sifones, filtros de pelo y accesorios de sellado para mantenimiento, limpieza y sustitución.",
          floorDrains: "Desagües compactos para zonas secundarias, salas técnicas o duchas funcionales.",
          shelves: "Almacenaje fino para jabón, champú y accesorios de baño dentro del mismo concepto material.",
          tileAccessories: "Coronas, sets, discos y herramientas para trabajos limpios en azulejo y piedra natural."
        },
        collectionMeta: {
          stainless: "Varias longitudes",
          tileable: "Acabado a ras",
          spareParts: "Sifón, filtro, banda de sellado",
          floorDrains: "Desagües puntuales y de diseño",
          shelves: "Esquina, nicho y pared",
          tileAccessories: "Coronas, discos, perfiles"
        }
      }
    };

    const copy = dictionary[language] || dictionary.de;
    const collectionTitleMap = {
      stainless: t.stainless,
      tileable: t.tileable,
      spareParts: t.spareParts,
      floorDrains: t.floorDrains,
      shelves: t.showerShelves,
      tileAccessories: t.tileAccessories
    };

    setText("[data-home-products-eyebrow]", copy.productsEyebrow);
    setText("[data-home-products-title]", copy.productsTitle);
    setText("[data-home-products-text]", copy.productsText);

    Object.keys(copy.collectionTags).forEach(function (key) {
      setText('[data-home-collection-tag="' + key + '"]', copy.collectionTags[key]);
      setText('[data-home-collection-title="' + key + '"]', collectionTitleMap[key] || copy.collectionTags[key]);
      setText('[data-home-collection-text="' + key + '"]', copy.collectionText[key]);
      setText('[data-home-collection-meta="' + key + '"]', copy.collectionMeta[key]);
      setText('[data-home-collection-cta="' + key + '"]', t.explore);
    });
  }

  function applyCatalogContent(language) {
    if (document.body.dataset.page !== "sortiment") {
      return;
    }

    const dictionary = {
      de: {
        sections: {
          edelstahl: {
            eyebrow: "Edelstahl Duschrinnen",
            title: "Edelstahl Duschrinnen",
            text: "Edelstahl-Duschrinnen für bodengleiche Duschen mit robuster Abdeckung, pflegeleichter Oberfläche und mehreren Längen für unterschiedliche Duschbreiten."
          },
          befliesbar: {
            eyebrow: "Befliesbare Duschrinnen",
            title: "Befliesbare Duschrinnen",
            text: "Befliesbare Duschrinnen für flächenbündige Duschen mit durchgehendem Fliesenbild und moderner, zurückhaltender Optik."
          },
          ersatzteile: {
            eyebrow: "Duschrinnen-Ersatzteile",
            title: "Duschrinnen-Ersatzteile",
            text: "Siphons, Haarsiebe, Stellfüße, Dichtbänder und weiteres Zubehör für Wartung, Ersatz und Nachrüstung."
          },
          bodenablauf: {
            eyebrow: "Bodenabläufe",
            title: "Bodenabläufe",
            text: "Bodenabläufe für Duschen, Hauswirtschaftsräume und weitere Nassbereiche mit sicherem Wasserablauf."
          },
          ablagen: {
            eyebrow: "Duschablagen",
            title: "Duschablagen",
            text: "Duschablagen aus Edelstahl für Ecke, Nische und Wand - passend zu modernen Bad- und Duschbereichen."
          },
          zubehoer: {
            eyebrow: "Fliesenzubehör",
            title: "Fliesenzubehör",
            text: "Werkzeuge und Zubehör für Bohrungen, Schnitte, Abschlüsse und saubere Verlegung im Fliesenbereich."
          }
        },
        subsections: {
          "diamant-bohrkronen-gruppe": {
            title: "Diamant Bohrkronen",
            text: "Diamant-Bohrkronen in verschiedenen Größen für präzise Bohrungen in Fliesen, Marmor, Granit und weiteren harten Materialien."
          },
          diamanttrennscheiben: {
            title: "Diamanttrennscheiben",
            text: "Diamanttrennscheiben für saubere Schnitte in Fliesen, Feinsteinzeug und Stein."
          },
          fliesenschienen: {
            title: "Fliesenschienen und Eckstücke",
            text: "Edelstahlprofile und passende Eckstücke für saubere Kanten, Abschlüsse und Anschlüsse im Fliesenbereich."
          },
          nivelliersystem: {
            title: "Nivelliersystem",
            text: "Zangen, Zuglaschen, Keile und Sets für gleichmäßige Fliesenbilder und eine sichere Verlegung."
          }
        }
      },
      en: {
        sections: {
          edelstahl: { eyebrow: "Stainless shower drains", title: "Stainless shower drains", text: "Stainless shower drains for level-access showers with durable covers, easy-care surfaces and several lengths for different shower widths." },
          befliesbar: { eyebrow: "Tileable shower drains", title: "Tileable shower drains", text: "Tileable shower drains for flush shower areas with continuous tile surfaces and a restrained modern look." },
          ersatzteile: { eyebrow: "Shower drain spare parts", title: "Shower drain spare parts", text: "Siphons, hair strainers, adjustable feet, sealing tapes and other parts for maintenance, replacement and retrofit work." },
          bodenablauf: { eyebrow: "Floor drains", title: "Floor drains", text: "Floor drains for showers, utility rooms and other wet areas with reliable water drainage." },
          ablagen: { eyebrow: "Shower shelves", title: "Shower shelves", text: "Stainless shower shelves for corners, niches and walls to match modern bathrooms and shower zones." },
          zubehoer: { eyebrow: "Tile accessories", title: "Tile accessories", text: "Tools and accessories for drilling, cutting, finishing and clean tile installation." }
        },
        subsections: {
          "diamant-bohrkronen-gruppe": { title: "Diamond drill crowns", text: "Diamond drill crowns in various sizes for precise holes in tiles, marble, granite and other hard materials." },
          diamanttrennscheiben: { title: "Diamond cutting discs", text: "Diamond cutting discs for clean cuts in tiles, porcelain stoneware and stone." },
          fliesenschienen: { title: "Tile trims and corners", text: "Stainless profiles and matching corner pieces for clean tile edges, finishes and transitions." },
          nivelliersystem: { title: "Leveling system", text: "Pliers, pull tabs, wedges and sets for even tile surfaces and reliable installation." }
        }
      },
      fr: {
        sections: {
          edelstahl: { eyebrow: "Caniveaux inox", title: "Caniveaux inox", text: "Caniveaux inox pour douches de plain-pied avec couverture robuste, surface facile à entretenir et plusieurs longueurs." },
          befliesbar: { eyebrow: "Caniveaux à carreler", title: "Caniveaux à carreler", text: "Caniveaux à carreler pour douches affleurantes avec surface carrelée continue et aspect moderne discret." },
          ersatzteile: { eyebrow: "Pièces détachées", title: "Pièces détachées pour caniveaux", text: "Siphons, grilles cheveux, pieds de réglage, bandes d’étanchéité et autres pièces pour entretien et remplacement." },
          bodenablauf: { eyebrow: "Siphons de sol", title: "Siphons de sol", text: "Siphons de sol pour douches, buanderies et autres zones humides avec évacuation fiable." },
          ablagen: { eyebrow: "Étagères de douche", title: "Étagères de douche", text: "Étagères inox pour angle, niche ou mur adaptées aux salles de bain modernes." },
          zubehoer: { eyebrow: "Accessoires carrelage", title: "Accessoires carrelage", text: "Outils et accessoires pour perçage, coupe, finition et pose soignée du carrelage." }
        },
        subsections: {
          "diamant-bohrkronen-gruppe": { title: "Couronnes diamant", text: "Couronnes diamant de différentes tailles pour perçages précis dans le carrelage, le marbre, le granit et d’autres matériaux durs." },
          diamanttrennscheiben: { title: "Disques diamant", text: "Disques diamant pour des coupes nettes dans le carrelage, le grès cérame et la pierre." },
          fliesenschienen: { title: "Profilés et angles", text: "Profilés inox et angles assortis pour des bords, finitions et raccords soignés." },
          nivelliersystem: { title: "Système de nivellement", text: "Pinces, attaches, cales et sets pour des surfaces régulières et une pose sûre." }
        }
      },
      tr: {
        sections: {
          edelstahl: { eyebrow: "Paslanmaz duş giderleri", title: "Paslanmaz duş giderleri", text: "Farklı duş genişlikleri için sağlam kapaklı, kolay temizlenen ve farklı uzunluklarda paslanmaz duş giderleri." },
          befliesbar: { eyebrow: "Fayans kaplamalı duş giderleri", title: "Fayans kaplamalı duş giderleri", text: "Kesintisiz fayans yüzeyi ve sade modern görünüm için sıfır geçişli duş giderleri." },
          ersatzteile: { eyebrow: "Yedek parçalar", title: "Duş gideri yedek parçaları", text: "Bakım, değişim ve uyarlama için sifonlar, saç süzgeçleri, ayaklar, yalıtım bantları ve diğer parçalar." },
          bodenablauf: { eyebrow: "Zemin giderleri", title: "Zemin giderleri", text: "Duşlar, çamaşır alanları ve diğer ıslak hacimler için güvenilir su tahliyesi sağlayan zemin giderleri." },
          ablagen: { eyebrow: "Duş rafları", title: "Duş rafları", text: "Modern banyo ve duş alanlarına uygun köşe, niş ve duvar için paslanmaz duş rafları." },
          zubehoer: { eyebrow: "Fayans aksesuarları", title: "Fayans aksesuarları", text: "Delme, kesme, bitiş ve temiz fayans uygulaması için alet ve aksesuarlar." }
        },
        subsections: {
          "diamant-bohrkronen-gruppe": { title: "Elmas matkap uçları", text: "Fayans, mermer, granit ve diğer sert malzemelerde hassas delikler için farklı boyutlarda elmas uçlar." },
          diamanttrennscheiben: { title: "Elmas kesme diskleri", text: "Fayans, porselen ve taşta temiz kesimler için elmas diskler." },
          fliesenschienen: { title: "Fayans profilleri ve köşeler", text: "Temiz kenarlar, bitişler ve geçişler için paslanmaz profiller ve uyumlu köşe parçaları." },
          nivelliersystem: { title: "Seviyeleme sistemi", text: "Düzgün fayans yüzeyleri ve güvenli döşeme için pense, çekme parçaları, takozlar ve setler." }
        }
      },
      ru: {
        sections: {
          edelstahl: { eyebrow: "Нержавеющие душевые трапы", title: "Нержавеющие душевые трапы", text: "Душевые трапы из нержавеющей стали для душевых в уровень пола с прочной крышкой, простой очисткой и разной длиной." },
          befliesbar: { eyebrow: "Трапы под плитку", title: "Трапы под плитку", text: "Трапы под плитку для душевых в уровень пола со сплошной плиточной поверхностью и сдержанным современным видом." },
          ersatzteile: { eyebrow: "Запчасти", title: "Запчасти для душевых трапов", text: "Сифоны, сетки для волос, регулируемые ножки, гидроизоляционные ленты и другие детали для обслуживания и замены." },
          bodenablauf: { eyebrow: "Напольные сливы", title: "Напольные сливы", text: "Напольные сливы для душевых, хозяйственных помещений и других влажных зон с надёжным отводом воды." },
          ablagen: { eyebrow: "Душевые полки", title: "Душевые полки", text: "Полки из нержавеющей стали для угла, ниши и стены, подходящие для современных ванных комнат." },
          zubehoer: { eyebrow: "Плиточные аксессуары", title: "Плиточные аксессуары", text: "Инструменты и аксессуары для сверления, резки, отделки и аккуратной укладки плитки." }
        },
        subsections: {
          "diamant-bohrkronen-gruppe": { title: "Алмазные коронки", text: "Алмазные коронки разных размеров для точных отверстий в плитке, мраморе, граните и других твёрдых материалах." },
          diamanttrennscheiben: { title: "Алмазные диски", text: "Алмазные диски для чистых резов по плитке, керамограниту и камню." },
          fliesenschienen: { title: "Профили и уголки", text: "Нержавеющие профили и подходящие уголки для аккуратных кромок, завершений и переходов." },
          nivelliersystem: { title: "Система выравнивания", text: "Клещи, тяги, клинья и наборы для ровной укладки и стабильной поверхности плитки." }
        }
      },
      es: {
        sections: {
          edelstahl: { eyebrow: "Canaletas inoxidables", title: "Canaletas inoxidables", text: "Canaletas de acero inoxidable para duchas a ras de suelo con tapa robusta, mantenimiento sencillo y varias longitudes." },
          befliesbar: { eyebrow: "Canaletas alicatables", title: "Canaletas alicatables", text: "Canaletas alicatables para duchas a ras con superficie continua de azulejo y una estética moderna discreta." },
          ersatzteile: { eyebrow: "Repuestos", title: "Repuestos para canaletas", text: "Sifones, filtros de pelo, patas regulables, bandas de sellado y otras piezas para mantenimiento y sustitución." },
          bodenablauf: { eyebrow: "Desagües de suelo", title: "Desagües de suelo", text: "Desagües de suelo para duchas, cuartos técnicos y otras zonas húmedas con evacuación fiable." },
          ablagen: { eyebrow: "Estantes de ducha", title: "Estantes de ducha", text: "Estantes inoxidables para esquina, nicho y pared que encajan con baños modernos." },
          zubehoer: { eyebrow: "Accesorios para azulejos", title: "Accesorios para azulejos", text: "Herramientas y accesorios para perforar, cortar, rematar y colocar azulejos con limpieza." }
        },
        subsections: {
          "diamant-bohrkronen-gruppe": { title: "Coronas diamantadas", text: "Coronas diamantadas de varios tamaños para perforaciones precisas en azulejo, mármol, granito y otros materiales duros." },
          diamanttrennscheiben: { title: "Discos diamantados", text: "Discos diamantados para cortes limpios en azulejo, porcelánico y piedra." },
          fliesenschienen: { title: "Perfiles y esquinas", text: "Perfiles inoxidables y piezas de esquina a juego para bordes, remates y transiciones limpias." },
          nivelliersystem: { title: "Sistema de nivelación", text: "Alicates, tiras, cuñas y sets para superficies uniformes y una colocación segura." }
        }
      }
    };

    const copy = dictionary[language] || dictionary.de;

    Object.keys(copy.sections).forEach(function (key) {
      setText('[data-catalog-eyebrow="' + key + '"]', copy.sections[key].eyebrow);
      setText('[data-catalog-title="' + key + '"]', copy.sections[key].title);
      setText('[data-catalog-text="' + key + '"]', copy.sections[key].text);
    });

    Object.keys(copy.subsections).forEach(function (key) {
      setText('[data-catalog-subtitle="' + key + '"]', copy.subsections[key].title);
      setText('[data-catalog-subtext="' + key + '"]', copy.subsections[key].text);
    });
  }

  function getPageCopy(language, page) {
    const dictionary = {
      de: {
        sortiment: {
          eyebrow: "Sortiment",
          title: "Duschrinnen, Abläufe und Zubehör für professionelle Badprojekte.",
          text: "Finden Sie Edelstahl- und befliesbare Duschrinnen, Bodenabläufe, Ersatzteile, Duschablagen und Fliesenwerkzeug für Neubau, Renovierung und barrierearme Badezimmer.",
          cardLabel: "Produktübersicht",
          cardTitle: "Originalprodukte mit Preis, Bildern und passenden Kategorien.",
          cardText: "Alle wichtigen Produktbereiche von Duschrinnen Profi sind direkt erreichbar - von Duschrinnen bis Fliesenzubehör."
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
          submit: "Anfrage senden",
          faq: "FAQ",
          faqTitle: "Häufige Fragen"
        }
      },
      en: {
        sortiment: {
          eyebrow: "Products",
          title: "Shower drains, floor drains and accessories for professional bathroom projects.",
          text: "Find stainless and tileable shower drains, floor drains, spare parts, shower shelves and tile tools for new builds, renovations and accessible bathrooms.",
          cardLabel: "Product overview",
          cardTitle: "Original products with price, images and matching categories.",
          cardText: "All key product areas from Duschrinnen Profi are available directly - from shower drains to tile accessories."
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
          submit: "Send enquiry",
          faq: "FAQ",
          faqTitle: "Common questions"
        }
      },
      fr: {
        sortiment: { eyebrow: "Produits", title: "Caniveaux, siphons et accessoires pour des projets de salle de bain professionnels.", text: "Retrouvez caniveaux inox et à carreler, siphons de sol, pièces détachées, étagères de douche et outils de carrelage pour construction neuve, rénovation et salles de bain accessibles.", cardLabel: "Vue d'ensemble", cardTitle: "Produits d'origine avec prix, images et catégories adaptées.", cardText: "Tous les principaux univers produit de Duschrinnen Profi sont accessibles directement - des caniveaux de douche aux accessoires carrelage." },
        ratgeber: { eyebrow: "Guide", title: "Le bon caniveau commence par la bonne pente.", text: "Une douche moderne dépend de l’évacuation, de la position, de l’étanchéité et du nettoyage.", cardLabel: "Conseil", cardTitle: "Vérifier le sol avant de choisir.", cardText: "Cela évite l’eau stagnante et les corrections ultérieures." },
        kontakt: { eyebrow: "Contact", title: "Conseil pour douche, évacuation et outils de carrelage.", text: "Décrivez votre projet et recevez une recommandation claire.", cardLabel: "Réponse", cardTitle: "Sous 24 heures", cardText: "Pour produits, installation ou livraison.", submit: "Envoyer la demande", faq: "FAQ", faqTitle: "Questions fréquentes" }
      },
      tr: {
        sortiment: { eyebrow: "Ürünler", title: "Profesyonel banyo projeleri için duş giderleri, zemin giderleri ve aksesuarlar.", text: "Yeni projeler, renovasyonlar ve erişilebilir banyolar için paslanmaz ve fayans kaplamalı duş giderlerini, zemin giderlerini, yedek parçaları, duş raflarını ve fayans aletlerini burada bulabilirsiniz.", cardLabel: "Ürün özeti", cardTitle: "Fiyat, görsel ve uygun kategori ile orijinal ürünler.", cardText: "Duschrinnen Profi'nin tüm önemli ürün alanlarına doğrudan ulaşabilirsiniz - duş giderlerinden fayans aksesuarlarına kadar." },
        ratgeber: { eyebrow: "Rehber", title: "Doğru duş gideri doğru eğimle başlar.", text: "Modern duşta drenaj, konum, yalıtım ve temizlik birlikte düşünülmelidir.", cardLabel: "İpucu", cardTitle: "Önce zemin yapısını kontrol edin.", cardText: "Böylece su birikmesi ve sonradan düzeltme azalır." },
        kontakt: { eyebrow: "İletişim", title: "Duş, gider ve fayans aletleri için danışmanlık.", text: "Projenizi anlatın, uygun ürün yönünü hızlıca alın.", cardLabel: "Yanıt", cardTitle: "24 saat içinde", cardText: "Ürün, montaj veya teslimat soruları için.", submit: "Talep gönder", faq: "SSS", faqTitle: "Sık sorulan sorular" }
      },
      ru: {
        sortiment: { eyebrow: "Товары", title: "Душевые трапы, напольные сливы и аксессуары для профессиональных проектов ванной комнаты.", text: "Здесь вы найдёте трапы из нержавеющей стали и под плитку, напольные сливы, запчасти, душевые полки и плиточный инструмент для новых проектов, ремонта и безбарьерных ванных комнат.", cardLabel: "Обзор товаров", cardTitle: "Оригинальные товары с ценой, изображениями и подходящими категориями.", cardText: "Все основные товарные направления Duschrinnen Profi доступны напрямую - от душевых трапов до плиточных аксессуаров." },
        ratgeber: { eyebrow: "Гид", title: "Правильный трап начинается с правильного уклона.", text: "В современной душевой важны слив, расположение, гидроизоляция и очистка.", cardLabel: "Совет", cardTitle: "Сначала проверьте конструкцию пола.", cardText: "Так легче избежать стоячей воды и переделок." },
        kontakt: { eyebrow: "Контакт", title: "Консультация по душевым, сливам и плиточному инструменту.", text: "Опишите проект и получите понятную рекомендацию.", cardLabel: "Ответ", cardTitle: "В течение 24 часов", cardText: "По товарам, монтажу или доставке.", submit: "Отправить запрос", faq: "FAQ", faqTitle: "Частые вопросы" }
      },
      es: {
        sortiment: { eyebrow: "Productos", title: "Canaletas, desagües y accesorios para proyectos profesionales de baño.", text: "Aquí encontrará canaletas inoxidables y alicatables, desagües de suelo, repuestos, estantes de ducha y herramientas para azulejo para obra nueva, reforma y baños accesibles.", cardLabel: "Resumen de productos", cardTitle: "Productos originales con precio, imágenes y categorías adecuadas.", cardText: "Todas las áreas de producto importantes de Duschrinnen Profi están disponibles directamente - desde canaletas de ducha hasta accesorios para azulejos." },
        ratgeber: { eyebrow: "Guía", title: "La canaleta correcta empieza con la pendiente correcta.", text: "Una ducha moderna necesita buen desagüe, posición, sellado y limpieza.", cardLabel: "Consejo", cardTitle: "Primero revise la base del suelo.", cardText: "Así evita agua estancada y correcciones posteriores." },
        kontakt: { eyebrow: "Contacto", title: "Asesoría para ducha, desagüe y herramientas de azulejo.", text: "Describa su proyecto y reciba una recomendación clara.", cardLabel: "Respuesta", cardTitle: "En 24 horas", cardText: "Para productos, instalación o entrega.", submit: "Enviar consulta", faq: "FAQ", faqTitle: "Preguntas frecuentes" }
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

      if (window.innerWidth <= 1080 && document.body.classList.contains("menu-open") && navShell && !event.target.closest(".nav-shell")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1080) {
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
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let ticking = false;

    if (footer && finePointer) {
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

    if (!parallaxElements.length || reducedMotion || !finePointer) {
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
    const learnLink = section.querySelector("[data-video-learn]");
    const nextLink = section.querySelector("[data-video-next]");
    const VIDEO_ID = "rTDLiUNKCL0";
    const VIDEO_URL = "https://www.youtube.com/watch?v=rTDLiUNKCL0";
    const NEXT_VIDEO_URL = "https://www.youtube.com/watch?v=toimUx9VMbE";
    const CHANNEL_URL = "https://www.youtube.com/channel/UC1FUrdtSz0pbCo1oDypK3CA";
    const START_TIME = 18;
    const state = {
      player: null,
      playerRequested: false,
      ready: false,
      inView: false,
      isPlaying: false,
      isMuted: true,
      userPaused: false,
      volume: 0,
      savedVolume: 60
    };

    refreshVideoUi = updateVideoUi;
    if (learnLink) {
      learnLink.href = VIDEO_URL;
    }
    if (nextLink) {
      nextLink.href = NEXT_VIDEO_URL;
    }
    if (openLink) {
      openLink.href = CHANNEL_URL;
    }
    updateVideoUi();

    if (playButton) {
      playButton.addEventListener("click", function () {
        if (!state.ready || !state.player) {
          state.userPaused = false;
          ensureVideoPlayer();
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
          ensureVideoPlayer();
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
          ensureVideoPlayer();
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
            if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              ensureVideoPlayer();
            }
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
      ensureVideoPlayer();
    }

    function ensureVideoPlayer() {
      if (state.playerRequested) {
        return;
      }

      state.playerRequested = true;
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
    }

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
        const playLabel = state.isPlaying ? t.videoPause : t.videoPlay;
        playButton.innerHTML = '<i data-lucide="' + (state.isPlaying ? "pause" : "play") + '" aria-hidden="true"></i>';
        playButton.setAttribute("aria-label", playLabel);
        playButton.setAttribute("title", playLabel);
      }

      if (soundButton) {
        const soundEnabled = !state.isMuted && state.volume > 0;
        const soundLabel = soundEnabled ? t.videoSoundOff : t.videoSoundOn;
        soundButton.innerHTML = '<i data-lucide="' + (soundEnabled ? "volume-2" : "volume-x") + '" aria-hidden="true"></i>';
        soundButton.setAttribute("aria-label", soundLabel);
        soundButton.setAttribute("title", soundLabel);
      }

      if (openLink) {
        openLink.innerHTML = '<i data-lucide="arrow-up-right" aria-hidden="true"></i>';
        openLink.setAttribute("aria-label", t.videoOpen);
        openLink.setAttribute("title", t.videoOpen);
      }

      if (learnLink) {
        learnLink.setAttribute("aria-label", t.videoLearn);
        learnLink.setAttribute("title", t.videoLearn);
      }

      if (nextLink) {
        nextLink.setAttribute("aria-label", t.videoNext);
        nextLink.setAttribute("title", t.videoNext);
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
        window.location.href = button.getAttribute("href") || "/checkout.html";
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
    const buttonLabel = continueButton ? continueButton.innerHTML : "";

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
      form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const cart = readCart();
        if (!cart.length) {
          showToast("Ihr Warenkorb ist noch leer.");
          return;
        }

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const data = new FormData(form);
        const subtotalValue = getCartSubtotal(cart);
        const shippingValue = getShippingCost(subtotalValue);

        try {
          const authHeaders = await getCurrentAuthHeaders();
          setButtonLoading(continueButton, true, getTranslation().checkoutRedirect);
          if (formNote) {
            formNote.textContent = getTranslation().checkoutRedirect;
          }

          const response = await postJson("/api/checkout-session", {
            cart,
            customer: {
              name: String(data.get("name") || "").trim(),
              email: String(data.get("email") || "").trim(),
              phone: String(data.get("phone") || "").trim(),
              postal: String(data.get("postal") || "").trim(),
              payment: String(data.get("payment") || "").trim(),
              notes: String(data.get("notes") || "").trim()
            }
          }, authHeaders);

          trackEvent("checkout_started", {
            order_reference: response.orderReference || "",
            item_count: getCartQuantity(cart),
            subtotal_amount: subtotalValue,
            shipping_amount: shippingValue
          });

          if (!response.url) {
            throw new Error(getTranslation().checkoutError);
          }

          window.location.href = response.url;
        } catch (error) {
          if (formNote) {
            formNote.textContent = error.message || getTranslation().checkoutError;
          }
          showToast(error.message || getTranslation().checkoutError);
        } finally {
          setButtonLoading(continueButton, false, buttonLabel);
        }
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
    return productLookup[title] || null;
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
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonLabel = submitButton ? submitButton.innerHTML : "";

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      try {
        setButtonLoading(submitButton, true, getTranslation().contact);
        const formData = new FormData(form);
        const payload = {
          name: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          topic: String(formData.get("topic") || "").trim(),
          message: String(formData.get("message") || "").trim(),
          locale: currentLanguage,
          pageUrl: window.location.href
        };

        await postJson("/api/contact", payload);
        if (note) {
          note.textContent = getTranslation().contactSuccess;
        }
        showToast(getTranslation().contactSuccess);
        trackEvent("contact_request_submitted", {
          topic: payload.topic,
          locale: currentLanguage
        });
        form.reset();
      } catch (error) {
        if (note) {
          note.textContent = error.message || "Die Anfrage konnte gerade nicht gesendet werden.";
        }
        showToast(error.message || "Die Anfrage konnte gerade nicht gesendet werden.");
      } finally {
        setButtonLoading(submitButton, false, buttonLabel);
      }
    });
  }

  function setupAccountForms() {
    const forms = Array.from(document.querySelectorAll("[data-account-form]"));
    if (!forms.length) {
      return;
    }

    const summary = document.querySelector("[data-account-summary]");
    const ordersWrap = document.querySelector("[data-account-orders-wrap]");
    const ordersHeading = document.querySelector("[data-account-orders-heading]");
    const ordersList = document.querySelector("[data-account-orders-list]");
    const adminDashboard = document.querySelector("[data-admin-dashboard]");
    const adminHeading = document.querySelector("[data-admin-heading]");
    const adminSubtext = document.querySelector("[data-admin-subtext]");
    const adminStats = document.querySelector("[data-admin-stats]");
    const adminOrdersKicker = document.querySelector("[data-admin-orders-kicker]");
    const adminOrdersSectionHeading = document.querySelector("[data-admin-orders-heading]");
    const adminOrdersList = document.querySelector("[data-admin-orders-list]");
    const adminContactsKicker = document.querySelector("[data-admin-contacts-kicker]");
    const adminContactsHeading = document.querySelector("[data-admin-contacts-heading]");
    const adminContactsList = document.querySelector("[data-admin-contacts-list]");
    const adminCustomersKicker = document.querySelector("[data-admin-customers-kicker]");
    const adminCustomersHeading = document.querySelector("[data-admin-customers-heading]");
    const adminCustomersList = document.querySelector("[data-admin-customers-list]");
    const adminEventsKicker = document.querySelector("[data-admin-events-kicker]");
    const adminEventsHeading = document.querySelector("[data-admin-events-heading]");
    const adminEventsList = document.querySelector("[data-admin-events-list]");
    const adminNote = document.querySelector("[data-admin-note]");
    const socialButtons = document.querySelectorAll("[data-social-provider]");
    const redirectTo = new URL("mein-konto.html", window.location.origin).toString();
    let adminRefreshTimer = null;

    if (!hasSupabaseConfig) {
      renderSignedOutState(true);
    } else {
      initializeAccountAuth();
    }

    async function initializeAccountAuth() {
      try {
        const supabase = await getSupabase();
        if (!supabase) {
          renderSignedOutState(true);
          return;
        }

        syncAccountState();
        supabase.auth.onAuthStateChange(function () {
          window.setTimeout(syncAccountState, 60);
        });
      } catch (error) {
        renderSignedOutState(true, error.message || getTranslation().authMissing);
      }
    }

    forms.forEach(function (form) {
      const note = form.querySelector("[data-form-note]");
      const submitButton = form.querySelector('button[type="submit"]');
      const buttonLabel = submitButton ? submitButton.innerHTML : "";

      form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const supabase = await getSupabase();
        if (!supabase) {
          if (note) {
            note.textContent = getTranslation().authMissing;
          }
          showToast(getTranslation().authMissing);
          return;
        }

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const mode = form.dataset.accountForm || "account";
        const formData = new FormData(form);
        const email = String(formData.get("email") || "").trim();
        const password = String(formData.get("password") || "");

        try {
          setButtonLoading(submitButton, true, mode === "register" ? getTranslation().registerSuccess : getTranslation().loginSuccess);

          if (mode === "register") {
            const firstName = String(formData.get("first_name") || "").trim();
            const lastName = String(formData.get("last_name") || "").trim();
            const fullName = [firstName, lastName].join(" ").trim();
            const result = await supabase.auth.signUp({
              email,
              password,
              options: {
                emailRedirectTo: redirectTo,
                data: {
                  first_name: firstName,
                  last_name: lastName,
                  full_name: fullName
                }
              }
            });

            if (result.error) {
              throw result.error;
            }

            if (note) {
              note.textContent = getTranslation().registerSuccess;
            }

            if (result.data.session) {
              await syncAccountProfile(result.data.session, {
                first_name: firstName,
                last_name: lastName,
                full_name: fullName
              });
            }

            trackEvent("account_registered", { provider: "email" });
          } else {
            const result = await supabase.auth.signInWithPassword({
              email,
              password
            });

            if (result.error) {
              throw result.error;
            }

            if (note) {
              note.textContent = getTranslation().loginSuccess;
            }

            trackEvent("account_logged_in", { provider: "email" });
          }

          form.reset();
          await syncAccountState();
          showToast(mode === "register" ? getTranslation().registerSuccess : getTranslation().loginSuccess);
        } catch (error) {
          if (note) {
            note.textContent = error.message || "Anmeldung derzeit nicht möglich.";
          }
          showToast(error.message || "Anmeldung derzeit nicht möglich.");
        } finally {
          setButtonLoading(submitButton, false, buttonLabel);
        }
      });
    });

    socialButtons.forEach(function (button) {
      button.addEventListener("click", async function () {
        const supabase = await getSupabase();
        if (!supabase) {
          showToast(getTranslation().authMissing);
          return;
        }

        const provider = button.dataset.socialProvider;
        if (!provider) {
          return;
        }

        try {
          const result = await supabase.auth.signInWithOAuth({
            provider,
            options: {
              redirectTo
            }
          });
          if (result.error) {
            throw result.error;
          }
          trackEvent("account_social_login_started", { provider });
        } catch (error) {
          showToast(error.message || "Social Login konnte nicht gestartet werden.");
        }
      });
    });

    if (summary) {
      summary.addEventListener("click", async function (event) {
        const logoutButton = event.target.closest("[data-account-logout]");
        if (!logoutButton) {
          return;
        }

        const supabase = await getSupabase();
        if (!supabase) {
          return;
        }

        try {
          const result = await supabase.auth.signOut();
          if (result.error) {
            throw result.error;
          }
          currentUser = null;
          renderSignedOutState(false);
          showToast(getTranslation().logout);
          trackEvent("account_logged_out");
        } catch (error) {
          showToast(error.message || "Abmeldung derzeit nicht möglich.");
        }
      });
    }

    async function syncAccountState() {
      const supabase = await getSupabase();
      if (!supabase) {
        renderSignedOutState(true);
        return;
      }

      try {
        const sessionResult = await supabase.auth.getSession();
        const session = sessionResult.data.session;
        currentUser = session && session.user ? session.user : null;

        if (!session || !session.user) {
          clearAdminRefresh();
          renderSignedOutState(false);
          return;
        }

        const profile = {
          first_name: session.user.user_metadata?.first_name || "",
          last_name: session.user.user_metadata?.last_name || "",
          full_name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || ""
        };

        await syncAccountProfile(session, profile);
        const [orders, adminOverview] = await Promise.all([loadAccountOrders(session), loadAdminOverview(session)]);
        renderSignedInState(session.user, orders, adminOverview);
        scheduleAdminRefresh(session, Boolean(adminOverview && adminOverview.allowed));
      } catch (error) {
        clearAdminRefresh();
        renderSignedOutState(false, error.message || "Konto konnte nicht geladen werden.");
      }
    }

    function renderSignedOutState(isMissingConfig, message) {
      if (summary) {
        summary.innerHTML =
          '<p class="account-summary-empty">' +
          escapeHtml(
            message ||
              (isMissingConfig
                ? getTranslation().authMissing
                : "Melden Sie sich an oder registrieren Sie sich, um Ihr Profil und Ihre Bestellungen zu sehen.")
          ) +
          "</p>";
      }

      if (ordersWrap) {
        ordersWrap.hidden = true;
      }

      clearAdminRefresh();
      hideAdminDashboard();
    }

    function renderSignedInState(user, orders, adminOverview) {
      const provider = user.app_metadata?.provider || "email";
      const fullName =
        user.user_metadata?.full_name ||
        [user.user_metadata?.first_name || "", user.user_metadata?.last_name || ""].join(" ").trim() ||
        user.email ||
        "Kunde";

      if (summary) {
        summary.innerHTML =
          '<div class="account-summary-stack">' +
          '<strong>' +
          escapeHtml(fullName) +
          "</strong>" +
          '<p>' +
          escapeHtml(getTranslation().accountSignedInAs) +
          ": " +
          escapeHtml(user.email || "") +
          "</p>" +
          '<p class="account-summary-meta">Provider: ' +
          escapeHtml(provider) +
          "</p>" +
          '<button class="button button-ghost dark account-logout-button" type="button" data-account-logout>' +
          '<i data-lucide="log-out" aria-hidden="true"></i>' +
          escapeHtml(getTranslation().logout) +
          "</button>" +
          "</div>";
      }

      if (ordersHeading) {
        ordersHeading.textContent = getTranslation().accountOrders;
      }
      if (ordersWrap) {
        ordersWrap.hidden = false;
      }
      if (ordersList) {
        if (!orders.length) {
          ordersList.innerHTML = '<p class="account-summary-empty">' + escapeHtml(getTranslation().accountNoOrders) + "</p>";
        } else {
          ordersList.innerHTML = orders
            .map(function (order) {
              const itemCount = Array.isArray(order.items)
                ? order.items.reduce(function (sum, item) {
                    return sum + Number(item.quantity || 0);
                  }, 0)
                : 0;
              return (
                '<article class="account-order-item">' +
                "<strong>" +
                escapeHtml(order.order_reference || "Bestellung") +
                "</strong>" +
                '<span class="account-order-status">' +
                escapeHtml(order.order_status || "pending") +
                "</span>" +
                '<p>' +
                escapeHtml(formatDate(order.created_at)) +
                " · " +
                escapeHtml(String(itemCount)) +
                " Artikel</p>" +
                "<b>" +
                escapeHtml(formatEuro(Number(order.total_amount || 0))) +
                "</b>" +
                "</article>"
              );
            })
            .join("");
        }
      }

      if (adminOverview && adminOverview.allowed) {
        renderAdminOverview(adminOverview);
      } else {
        hideAdminDashboard(adminOverview && adminOverview.forbidden ? getTranslation().adminAccessDenied : "");
      }

      renderIcons();
    }

    function clearAdminRefresh() {
      if (adminRefreshTimer) {
        window.clearInterval(adminRefreshTimer);
        adminRefreshTimer = null;
      }
    }

    function scheduleAdminRefresh(session, enabled) {
      clearAdminRefresh();

      if (!enabled) {
        return;
      }

      adminRefreshTimer = window.setInterval(async function () {
        const overview = await loadAdminOverview(session);
        if (overview && overview.allowed) {
          renderAdminOverview(overview);
        }
      }, 30000);
    }

    function hideAdminDashboard(noteText) {
      if (adminDashboard) {
        adminDashboard.hidden = true;
      }

      if (adminNote && noteText) {
        adminNote.textContent = noteText;
      }
    }

    function renderAdminOverview(overview) {
      if (!adminDashboard) {
        return;
      }

      const t = getTranslation();
      adminDashboard.hidden = false;

      if (adminHeading) {
        adminHeading.textContent = t.adminDashboard || "Live dashboard for orders and enquiries";
      }
      if (adminSubtext) {
        adminSubtext.textContent =
          t.adminSubtext || "See new orders, contact requests, recent customer accounts and current website activity in one place.";
      }
      if (adminOrdersKicker) {
        adminOrdersKicker.textContent = t.adminOrders || "Orders";
      }
      if (adminOrdersSectionHeading) {
        adminOrdersSectionHeading.textContent = t.adminOrdersHeading || "Latest orders";
      }
      if (adminContactsKicker) {
        adminContactsKicker.textContent = t.adminContacts || "Enquiries";
      }
      if (adminContactsHeading) {
        adminContactsHeading.textContent = t.adminContactsHeading || "Latest contact requests";
      }
      if (adminCustomersKicker) {
        adminCustomersKicker.textContent = t.adminCustomers || "Customers";
      }
      if (adminCustomersHeading) {
        adminCustomersHeading.textContent = t.adminCustomersHeading || "Recent customer accounts";
      }
      if (adminEventsKicker) {
        adminEventsKicker.textContent = t.adminEvents || "Activity";
      }
      if (adminEventsHeading) {
        adminEventsHeading.textContent = t.adminEventsHeading || "Latest website events";
      }
      if (adminNote) {
        adminNote.textContent = t.adminLive || "Auto-refresh every 30 seconds.";
      }

      if (adminStats) {
        adminStats.innerHTML = [
          buildAdminStat(t.adminOrdersTotal || "Total orders", overview.stats && overview.stats.ordersTotal),
          buildAdminStat(t.adminPaidOrders || "Paid", overview.stats && overview.stats.paidOrders),
          buildAdminStat(t.adminContactsTotal || "Total enquiries", overview.stats && overview.stats.contactsTotal),
          buildAdminStat(t.adminCustomersTotal || "Customer accounts", overview.stats && overview.stats.customerProfilesTotal)
        ].join("");
      }

      renderAdminList(adminOrdersList, Array.isArray(overview.recent && overview.recent.orders) ? overview.recent.orders : [], "orders");
      renderAdminList(adminContactsList, Array.isArray(overview.recent && overview.recent.contacts) ? overview.recent.contacts : [], "contacts");
      renderAdminList(adminCustomersList, Array.isArray(overview.recent && overview.recent.customers) ? overview.recent.customers : [], "customers");
      renderAdminList(adminEventsList, Array.isArray(overview.recent && overview.recent.events) ? overview.recent.events : [], "events");
    }

    function buildAdminStat(label, value) {
      return (
        '<article class="admin-stat">' +
        '<p class="admin-stat-label">' +
        escapeHtml(label) +
        "</p>" +
        '<strong class="admin-stat-value">' +
        escapeHtml(String(value || 0)) +
        "</strong>" +
        "</article>"
      );
    }

    function renderAdminList(container, rows, type) {
      if (!container) {
        return;
      }

      if (!rows.length) {
        container.innerHTML = '<p class="admin-list-empty">' + escapeHtml(getTranslation().adminNoData || "No data yet.") + "</p>";
        return;
      }

      container.innerHTML = rows
        .map(function (row) {
          if (type === "orders") {
            const itemCount = Array.isArray(row.items)
              ? row.items.reduce(function (sum, item) {
                  return sum + Number(item.quantity || 0);
                }, 0)
              : 0;
            return (
              '<article class="admin-list-item">' +
              '<div class="admin-list-item-head">' +
              "<strong>" +
              escapeHtml(row.order_reference || "Order") +
              "</strong>" +
              '<span class="admin-list-badge">' +
              escapeHtml(row.order_status || "pending") +
              "</span>" +
              "</div>" +
              '<p>' +
              escapeHtml(row.customer_name || "") +
              " · " +
              escapeHtml(row.customer_email || "") +
              "</p>" +
              '<p>' +
              escapeHtml(formatDate(row.created_at)) +
              " · " +
              escapeHtml(String(itemCount)) +
              " items</p>" +
              "<b>" +
              escapeHtml(formatEuro(Number(row.total_amount || 0))) +
              "</b>" +
              "</article>"
            );
          }

          if (type === "contacts") {
            return (
              '<article class="admin-list-item">' +
              '<div class="admin-list-item-head">' +
              "<strong>" +
              escapeHtml(row.name || row.topic || "Contact") +
              "</strong>" +
              '<span class="admin-list-badge">' +
              escapeHtml(row.status || "new") +
              "</span>" +
              "</div>" +
              '<p>' +
              escapeHtml(row.email || "") +
              "</p>" +
              '<p>' +
              escapeHtml(row.topic || "") +
              "</p>" +
              '<p>' +
              escapeHtml(truncateText(row.message || "", 110)) +
              "</p>" +
              '<p>' +
              escapeHtml(formatDate(row.created_at)) +
              "</p>" +
              "</article>"
            );
          }

          if (type === "customers") {
            return (
              '<article class="admin-list-item">' +
              '<div class="admin-list-item-head">' +
              "<strong>" +
              escapeHtml(row.full_name || row.email || "Customer") +
              "</strong>" +
              '<span class="admin-list-badge">' +
              escapeHtml(row.provider || "email") +
              "</span>" +
              "</div>" +
              '<p>' +
              escapeHtml(row.email || "") +
              "</p>" +
              '<p>' +
              escapeHtml(formatDate(row.updated_at || row.created_at)) +
              "</p>" +
              "</article>"
            );
          }

          return (
            '<article class="admin-list-item">' +
            '<div class="admin-list-item-head">' +
            "<strong>" +
            escapeHtml(formatEventType(row.event_type || "event")) +
            "</strong>" +
            '<span class="admin-list-badge">' +
            escapeHtml(formatDate(row.created_at)) +
            "</span>" +
            "</div>" +
            '<p>' +
            escapeHtml(row.page_title || row.page_url || "") +
            "</p>" +
            "</article>"
          );
        })
        .join("");
    }

    function formatEventType(value) {
      return String(value || "")
        .replace(/_/g, " ")
        .replace(/\b\w/g, function (character) {
          return character.toUpperCase();
        });
    }

    function truncateText(value, limit) {
      const text = String(value || "");
      if (text.length <= limit) {
        return text;
      }
      return text.slice(0, limit - 1).trimEnd() + "…";
    }

    async function syncAccountProfile(session, profile) {
      try {
        await postJson(
          "/api/account/profile",
          {
            profile
          },
          buildAuthHeaders(session.access_token)
        );
      } catch (error) {}
    }

    async function loadAccountOrders(session) {
      try {
        const response = await fetch("/api/account/orders", {
          headers: buildAuthHeaders(session.access_token)
        });
        if (!response.ok) {
          const payload = await response.json().catch(function () {
            return {};
          });
          throw new Error(payload.error || "Bestellungen konnten nicht geladen werden.");
        }
        const payload = await response.json();
        return Array.isArray(payload.orders) ? payload.orders : [];
      } catch (error) {
        return [];
      }
    }

    async function loadAdminOverview(session) {
      try {
        const response = await fetch("/api/admin/overview", {
          headers: buildAuthHeaders(session.access_token)
        });

        if (response.status === 403) {
          return { allowed: false, forbidden: true };
        }

        if (!response.ok) {
          const payload = await response.json().catch(function () {
            return {};
          });
          throw new Error(payload.error || "Admin dashboard konnte nicht geladen werden.");
        }

        const payload = await response.json();
        return {
          allowed: true,
          stats: payload.stats || {},
          recent: payload.recent || {}
        };
      } catch (error) {
        return null;
      }
    }
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
      trackEvent("chat_query", {
        question: value,
        page: document.body.dataset.page || ""
      });

      const typingIndicator = appendChatTyping(messages);
      const reply = getChatReply(value);

      window.setTimeout(function () {
        typingIndicator.remove();
        appendChatMessage(messages, "assistant", reply.text, reply.actions);
        renderChatSuggestions(suggestions, reply.suggestions || prompts, handlePrompt);
      }, 640);
    }
  }

  function setupProductViewer() {
    const productMediaNodes = document.querySelectorAll("[data-product-media]");
    const viewerButtons = document.querySelectorAll("[data-open-viewer]");
    if ((!productMediaNodes.length && !viewerButtons.length) || document.querySelector("[data-product-viewer]")) {
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

    const closeAllZoomedMedia = function (except) {
      productMediaNodes.forEach(function (media) {
        if (except && media === except) {
          return;
        }
        media.classList.remove("is-zoomed");
        media.setAttribute("aria-pressed", "false");
      });
    };

    productMediaNodes.forEach(function (media) {
      media.setAttribute("aria-pressed", "false");

      media.addEventListener("pointermove", function (event) {
        if (window.matchMedia("(pointer: coarse)").matches) {
          return;
        }

        const rect = media.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        media.style.setProperty("--zoom-origin-x", x.toFixed(2) + "%");
        media.style.setProperty("--zoom-origin-y", y.toFixed(2) + "%");
      });

      media.addEventListener("pointerleave", function () {
        media.style.removeProperty("--zoom-origin-x");
        media.style.removeProperty("--zoom-origin-y");
      });

      media.addEventListener("click", function (event) {
        if (event.target.closest("[data-open-viewer]")) {
          return;
        }

        const card = media.closest(".product-card");
        const mediaTitle = media.dataset.productTitle || (card && card.querySelector("h2, h3") ? card.querySelector("h2, h3").textContent : "");

        if (window.matchMedia("(pointer: coarse)").matches) {
          event.preventDefault();
          const willZoom = !media.classList.contains("is-zoomed");
          closeAllZoomedMedia(media);
          media.classList.toggle("is-zoomed", willZoom);
          media.setAttribute("aria-pressed", String(willZoom));
          return;
        }

        openProductViewerByTitle(mediaTitle, media);
      });

      media.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        openProductViewerByTitle(media.dataset.productTitle || "", media);
      });
    });

    viewerButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        const card = button.closest(".product-card");
        const media = card ? card.querySelector("[data-product-media]") : null;
        event.preventDefault();
        event.stopPropagation();
        closeAllZoomedMedia();
        openProductViewerByTitle(button.dataset.openViewer || "", media);
      });
    });

    document.addEventListener("click", function (event) {
      if (event.target.closest("[data-product-media]")) {
        return;
      }
      closeAllZoomedMedia();
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
      closeAllZoomedMedia();
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

    function openProductViewerByTitle(productTitle, mediaNode) {
      const product = getProductByTitle(productTitle);
      const imageNode = mediaNode ? mediaNode.querySelector("img") : null;
      const gallery = getProductGallery(product, mediaNode, imageNode);

      setProductViewerImage(gallery[0] || "", product ? product.title : imageNode ? imageNode.alt : "");
      renderProductViewerThumbnails(gallery, product ? product.title : imageNode ? imageNode.alt : "");
      title.textContent = product ? product.title : productTitle || "Produkt";
      description.textContent = product ? product.description || product.shortDescription || "" : "";
      price.textContent = product ? product.price : "";
      productLink.href = product ? product.url : "sortiment.html";
      openProductViewer();
    }

    function getProductGallery(product, mediaNode, imageNode) {
      const sources = [];

      if (product && Array.isArray(product.gallery)) {
        product.gallery.forEach(function (source) {
          if (source) {
            sources.push(source);
          }
        });
      }

      if (imageNode && imageNode.getAttribute("src")) {
        sources.push(imageNode.getAttribute("src"));
      }
      const gallery = mediaNode ? mediaNode.dataset.gallery || "" : "";
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

  function setupDetailProductGallery() {
    const page = document.querySelector("[data-product-detail-page]");
    const shell = document.querySelector("[data-product-detail-shell]");
    const panel = document.querySelector("[data-detail-panel]");
    const photoShells = document.querySelectorAll("[data-detail-photo-shell]");
    const carousels = document.querySelectorAll("[data-detail-carousel]");

    if (!page || !shell || !panel || !photoShells.length) {
      return;
    }

    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    carousels.forEach(function (carousel) {
      const viewport = carousel.querySelector("[data-detail-carousel-viewport]");
      const slides = Array.from(carousel.querySelectorAll("[data-detail-slide]"));
      const previous = carousel.querySelector("[data-detail-carousel-prev]");
      const next = carousel.querySelector("[data-detail-carousel-next]");
      const count = carousel.querySelector("[data-detail-carousel-count]");
      const thumbs = Array.from(carousel.querySelectorAll("[data-detail-carousel-thumb]"));

      if (!viewport || !slides.length) {
        return;
      }

      let activeIndex = 0;
      let scrollFrame = 0;

      const clampIndex = function (index) {
        if (slides.length < 2) {
          return 0;
        }
        return (index + slides.length) % slides.length;
      };

      const updateActiveSlide = function (index, shouldScroll) {
        activeIndex = clampIndex(index);

        slides.forEach(function (slide, slideIndex) {
          const isActive = slideIndex === activeIndex;
          slide.classList.toggle("is-active", isActive);
          slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        });

        thumbs.forEach(function (thumb, thumbIndex) {
          const isActive = thumbIndex === activeIndex;
          thumb.classList.toggle("is-active", isActive);
          thumb.setAttribute("aria-current", isActive ? "true" : "false");
        });

        if (count) {
          count.textContent = activeIndex + 1 + " / " + slides.length;
        }

        if (previous) {
          previous.disabled = slides.length < 2;
        }

        if (next) {
          next.disabled = slides.length < 2;
        }

        if (shouldScroll) {
          photoShells.forEach(function (item) {
            item.classList.remove("is-zoomed");
          });
          viewport.scrollTo({
            left: viewport.clientWidth * activeIndex,
            behavior: reducedMotion ? "auto" : "smooth"
          });
        }
      };

      if (previous) {
        previous.addEventListener("click", function () {
          updateActiveSlide(activeIndex - 1, true);
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          updateActiveSlide(activeIndex + 1, true);
        });
      }

      thumbs.forEach(function (thumb, thumbIndex) {
        thumb.addEventListener("click", function () {
          updateActiveSlide(thumbIndex, true);
        });
      });

      viewport.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }

        event.preventDefault();
        updateActiveSlide(activeIndex + (event.key === "ArrowRight" ? 1 : -1), true);
      });

      viewport.addEventListener(
        "scroll",
        function () {
          if (scrollFrame) {
            return;
          }

          scrollFrame = window.requestAnimationFrame(function () {
            scrollFrame = 0;
            const nextIndex = Math.round(viewport.scrollLeft / Math.max(viewport.clientWidth, 1));
            if (nextIndex !== activeIndex) {
              updateActiveSlide(nextIndex, false);
            }
          });
        },
        { passive: true }
      );

      window.addEventListener("resize", function () {
        updateActiveSlide(activeIndex, false);
        viewport.scrollTo({ left: viewport.clientWidth * activeIndex, behavior: "auto" });
      });

      updateActiveSlide(0, false);
    });

    photoShells.forEach(function (stage) {
      stage.addEventListener("pointermove", function (event) {
        if (coarsePointer.matches) {
          return;
        }

        const rect = stage.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        stage.style.setProperty("--detail-zoom-x", x.toFixed(2) + "%");
        stage.style.setProperty("--detail-zoom-y", y.toFixed(2) + "%");
      });

      stage.addEventListener("pointerleave", function () {
        stage.style.removeProperty("--detail-zoom-x");
        stage.style.removeProperty("--detail-zoom-y");
      });

      stage.addEventListener("click", function (event) {
        if (!coarsePointer.matches) {
          return;
        }

        event.preventDefault();
        photoShells.forEach(function (item) {
          if (item !== stage) {
            item.classList.remove("is-zoomed");
          }
        });
        stage.classList.toggle("is-zoomed");
      });

      stage.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        stage.classList.toggle("is-zoomed");
      });
    });

    document.addEventListener("click", function (event) {
      if (!coarsePointer.matches) {
        return;
      }

      if (!event.target.closest("[data-detail-photo-shell]")) {
        photoShells.forEach(function (item) {
          item.classList.remove("is-zoomed");
        });
      }
    });

    if (reducedMotion) {
      page.style.setProperty("--detail-scroll-progress", "0");
      return;
    }

    const updatePanelProgress = function () {
      const rect = shell.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const start = viewport * 0.22;
      const end = rect.height + viewport * 0.15;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / Math.max(end, 1)));
      page.style.setProperty("--detail-scroll-progress", progress.toFixed(3));
    };

    updatePanelProgress();
    window.addEventListener("scroll", updatePanelProgress, { passive: true });
    window.addEventListener("resize", updatePanelProgress);
  }

  function setupCatalogRouting() {
    const root = document.querySelector("[data-catalog-root]");
    if (!root) {
      return;
    }

    const sections = Array.from(root.querySelectorAll(".catalog-section"));
    if (!sections.length) {
      return;
    }

    const subsections = Array.from(root.querySelectorAll(".catalog-subsection"));
    const resetButton = root.querySelector("[data-catalog-reset]");

    if (resetButton && resetButton.dataset.catalogResetReady !== "true") {
      resetButton.addEventListener("click", function () {
        history.replaceState(null, "", window.location.pathname);
        applyCatalogFocus(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      resetButton.dataset.catalogResetReady = "true";
    }

    window.addEventListener("hashchange", function () {
      applyCatalogFocus(true);
    });

    applyCatalogFocus(false);

    function applyCatalogFocus(shouldScroll) {
      const targetId = decodeURIComponent(window.location.hash.replace(/^#/, "").trim());

      if (!targetId) {
        sections.forEach(function (section) {
          section.classList.remove("is-catalog-hidden");
        });
        subsections.forEach(function (subsection) {
          subsection.classList.remove("is-catalog-hidden");
        });
        root.removeAttribute("data-catalog-filter");
        if (resetButton) {
          resetButton.hidden = true;
        }
        return;
      }

      const escapedId =
        window.CSS && typeof window.CSS.escape === "function"
          ? window.CSS.escape(targetId)
          : targetId.replace(/[^a-zA-Z0-9_-]/g, "");
      const target = root.querySelector("#" + escapedId);

      if (!target) {
        sections.forEach(function (section) {
          section.classList.remove("is-catalog-hidden");
        });
        subsections.forEach(function (subsection) {
          subsection.classList.remove("is-catalog-hidden");
        });
        if (resetButton) {
          resetButton.hidden = true;
        }
        root.removeAttribute("data-catalog-filter");
        return;
      }

      const targetSection = target.closest(".catalog-section");
      const targetSubsection = target.closest(".catalog-subsection");

      sections.forEach(function (section) {
        section.classList.toggle("is-catalog-hidden", section !== targetSection);
      });

      subsections.forEach(function (subsection) {
        const parentSection = subsection.closest(".catalog-section");
        const shouldHide =
          parentSection !== targetSection || (targetSubsection ? subsection !== targetSubsection : false);
        subsection.classList.toggle("is-catalog-hidden", shouldHide);
      });

      root.dataset.catalogFilter = targetId;
      if (resetButton) {
        resetButton.hidden = false;
      }

      if (shouldScroll) {
        window.setTimeout(function () {
          target.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 30);
      }
    }
  }

  function setupCompareExperience() {
    const buttons = document.querySelectorAll("[data-compare-product]");
    if (!buttons.length) {
      return;
    }

    ensureCompareModal();

    buttons.forEach(function (button) {
      if (button.dataset.compareReady === "true") {
        return;
      }

      const product = getProductByTitle(button.dataset.compareProduct);
      if (!product || !product.compare) {
        return;
      }

      button.addEventListener("click", function () {
        openCompareModal(product.title);
      });
      button.dataset.compareReady = "true";
    });

    renderIcons();
  }

  function ensureCompareModal() {
    if (compareModal) {
      return compareModal;
    }

    const root = document.createElement("section");
    root.className = "compare-modal";
    root.setAttribute("aria-hidden", "true");
    root.innerHTML =
      '<div class="compare-modal-backdrop" data-compare-close></div>' +
      '<article class="compare-modal-panel" role="dialog" aria-modal="true" aria-label="Produktvergleich">' +
      '<button class="icon-button compare-modal-close" type="button" data-compare-close aria-label="Vergleich schließen">' +
      '<i data-lucide="x" aria-hidden="true"></i>' +
      "</button>" +
      '<div class="compare-modal-head">' +
      '<p class="eyebrow" data-compare-title></p>' +
      '<h2 data-compare-product></h2>' +
      '<p data-compare-intro></p>' +
      "</div>" +
      '<div class="compare-modal-grid" data-compare-grid></div>' +
      "</article>";

    document.body.appendChild(root);
    root.querySelectorAll("[data-compare-close]").forEach(function (button) {
      button.addEventListener("click", closeCompareModal);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && compareModal && compareModal.root.classList.contains("is-open")) {
        closeCompareModal();
      }
    });

    compareModal = {
      root,
      title: root.querySelector("[data-compare-title]"),
      product: root.querySelector("[data-compare-product]"),
      intro: root.querySelector("[data-compare-intro]"),
      grid: root.querySelector("[data-compare-grid]")
    };

    renderIcons();
    return compareModal;
  }

  function openCompareModal(productTitle) {
    const product = getProductByTitle(productTitle);
    if (!product || !product.compare) {
      return;
    }

    const modal = ensureCompareModal();
    const t = getTranslation();
    const savings = Math.max(0, Number(product.compare.marketPriceValue || 0) - Number(product.priceValue || 0));

    modal.title.textContent = t.compareTitle;
    modal.product.textContent = product.title;
    modal.intro.textContent = product.shortDescription || "";
    modal.grid.innerHTML =
      '<article class="compare-modal-card">' +
      "<span>" +
      escapeHtml(t.compareDuschrinnen) +
      "</span>" +
      "<strong>" +
      escapeHtml(product.title) +
      "</strong>" +
      '<dl class="compare-modal-list">' +
      "<div><dt>" +
      escapeHtml(t.comparePrice) +
      "</dt><dd>" +
      escapeHtml(product.price) +
      "</dd></div>" +
      "<div><dt>" +
      escapeHtml(t.compareDesign) +
      "</dt><dd>" +
      escapeHtml(product.compare.design) +
      "</dd></div>" +
      "<div><dt>" +
      escapeHtml(t.compareAdvantage) +
      "</dt><dd>" +
      escapeHtml(product.compare.advantage) +
      "</dd></div>" +
      "</dl>" +
      "</article>" +
      '<article class="compare-modal-card compare-modal-card-market">' +
      "<span>" +
      escapeHtml(t.compareMarket) +
      "</span>" +
      "<strong>" +
      escapeHtml(product.compare.marketLabel) +
      "</strong>" +
      '<dl class="compare-modal-list">' +
      "<div><dt>" +
      escapeHtml(t.comparePrice) +
      "</dt><dd>" +
      escapeHtml(product.compare.marketPrice) +
      "</dd></div>" +
      "<div><dt>" +
      escapeHtml(t.compareDesign) +
      "</dt><dd>" +
      escapeHtml(product.compare.marketDesign) +
      "</dd></div>" +
      "<div><dt>" +
      escapeHtml(t.compareSavings) +
      "</dt><dd>" +
      escapeHtml(formatEuro(savings)) +
      "</dd></div>" +
      "</dl>" +
      "</article>";

    modal.root.classList.add("is-open");
    modal.root.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    renderIcons();
    trackEvent("product_compare_opened", {
      product_title: product.title,
      savings_amount: savings
    });
  }

  function closeCompareModal() {
    if (!compareModal) {
      return;
    }

    compareModal.root.classList.remove("is-open");
    compareModal.root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
  }

  function setupAnalytics() {
    trackEvent("page_view", {
      page: document.body.dataset.page || "",
      language: currentLanguage,
      theme: document.documentElement.getAttribute("data-theme") || "light"
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
      ? "Bei etwa " + dimensions[1] + " x " + dimensions[2] + " cm wirkt eine 80 bis 90 cm Duschrinne meist stimmig."
      : length
        ? "Für " + length[1] + " cm Duschbreite sollte die Rinne meist etwas kürzer als die nutzbare Breite gewählt werden."
        : "Wenn Sie mir noch die Duschbreite nennen, kann ich die passende Länge enger eingrenzen.";

    if (dimensions) {
      chatState.size = dimensions[1] + " x " + dimensions[2] + " cm";
    } else if (length) {
      chatState.size = length[1] + " cm";
    }

    if (containsAny(text, ["minimal", "unsichtbar", "befliesbar", "fliesenbild", "luxus", "nahtlos", "modern"])) {
      chatState.style = "minimal";
      chatState.recommendation = "Duschrinne C16 befliesbar";
    }

    if (containsAny(text, ["pflegeleicht", "reinigen", "edelstahl", "sichtbar", "klassisch", "robust", "haltbar"])) {
      chatState.style = "pflegeleicht";
      chatState.recommendation = "Duschrinne C15 Edelstahl";
    }

    if (containsAny(text, ["ersatz", "siphon", "geruch", "verstopft", "wartung", "reinigung"])) {
      chatState.topic = "ersatzteil";
      chatState.recommendation = "Duschrinnen-Siphon";
    } else if (containsAny(text, ["bohr", "bohrkrone", "trennscheibe", "feinsteinzeug", "werkzeug", "nivellier"])) {
      chatState.topic = "werkzeug";
      chatState.recommendation = "Diamant Bohrkrone";
    } else if (containsAny(text, ["bodenablauf", "technikraum", "keller", "waschraum", "wirtschaftsraum"])) {
      chatState.topic = "bodenablauf";
      chatState.recommendation = "Bodenablauf Edelstahl";
    } else if (containsAny(text, ["dusche", "walk in", "walk-in", "bad", "renovierung", "barrierefrei"])) {
      chatState.topic = "dusche";
    }

    const contextLead =
      chatState.size || chatState.recommendation
        ? "Ich habe bisher " +
          [chatState.size ? "die Größe " + chatState.size : "", chatState.recommendation ? "die Richtung " + chatState.recommendation : ""]
            .filter(Boolean)
            .join(" und ") +
          " im Blick. "
        : "";

    if (containsAny(text, ["kontakt", "owner", "besitzer", "inhaber", "chef", "team", "mensch", "berater", "beratung", "angebot", "rechnung", "lieferung"])) {
      return {
        text:
          contextLead +
          "Am schnellsten hilft Ihnen jetzt das Team direkt weiter. Wenn Sie Maße, Einbauart und ob Neubau oder Renovierung geplant ist dazuschreiben, kann die Beratung gezielt antworten.\nFür individuelle Angebote, Lieferfragen oder Sonderfälle ist der persönliche Kontakt sinnvoller als eine automatische Empfehlung.",
        actions: [
          { label: "Kontaktseite öffnen", href: "kontakt.html" }
        ],
        suggestions: ["Lieferung oder Rechnung", "Ersatzteil gesucht", "Maße für meine Dusche"]
      };
    }

    if (containsAny(text, ["ersatz", "siphon", "geruch", "verstopft", "ablauf riecht", "reinigung", "wartung"])) {
      return {
        text:
          contextLead +
          "Das klingt nach Ersatzteil oder Wartung. Starten Sie mit dem Duschrinnen-Siphon, wenn es um Reinigung, Geruch oder Austausch geht. Ein Foto der vorhandenen Rinne hilft enorm, wenn Sie die exakte Ausführung bestätigen möchten.",
        actions: [
          { label: "Siphon ansehen", href: "sortiment.html#ersatzteile" },
          { label: "Foto an Beratung senden", href: "kontakt.html" }
        ],
        suggestions: ["Ich brauche eine neue Duschrinne", "Welche Maße sind wichtig?", "Team kontaktieren"]
      };
    }

    if (containsAny(text, ["bohr", "bohrkrone", "trennscheibe", "fliese schneiden", "feinsteinzeug", "werkzeug", "nivellier"])) {
      return {
        text:
          contextLead +
          "Für Fliesenarbeiten passt das Werkzeug-Sortiment besser als eine Duschrinne. Für Feinsteinzeug oder harte Fliesen ist die Diamant-Bohrkrone meist der beste Einstieg, bei mehreren Durchmessern eher direkt das Set.",
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
          contextLead +
          "Für eine sehr ruhige, moderne Optik ist die Duschrinne C16 befliesbar die beste Richtung. Sie passt, wenn die Fliese möglichst durchlaufen soll und der Ablauf optisch in den Hintergrund treten darf.\n" +
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
          contextLead +
          "Dann ist die Duschrinne C15 Edelstahl die passende erste Empfehlung. Sie ist sichtbar, robust und im Alltag leichter direkt zu kontrollieren oder zu reinigen als sehr versteckte Lösungen.\n" +
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
          contextLead +
          "Für kleine oder barrierearme Bäder ist eine bodengleiche Lösung mit Duschrinne meist sinnvoll. Wenn die Optik im Vordergrund steht: C16 befliesbar. Wenn Reinigung und Kontrolle wichtiger sind: C15 Edelstahl.\n" +
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
          contextLead +
          "Wenn es nicht primär um eine lineare Walk-in-Dusche geht, kann ein quadratischer Bodenablauf passender sein. Er ist kompakter und eignet sich gut für Nebenflächen oder funktionale Nassbereiche.",
        actions: [
          { label: "Bodenabläufe ansehen", href: "sortiment.html#bodenablauf" },
          { label: "Einbau fragen", href: "kontakt.html" }
        ],
        suggestions: ["Doch Duschrinne planen", "Ersatzteil gesucht", "Besitzer kontaktieren"]
      };
    }

    return {
      text:
        contextLead +
        "Ich kann das gut eingrenzen. Für die erste Empfehlung helfen mir drei Punkte am meisten: Duschbreite, gewünschte Optik und ob einfache Reinigung wichtiger ist als ein fast unsichtbares Fliesenbild.\nKurz gesagt: C15 Edelstahl für robust und pflegeleicht, C16 befliesbar für minimalistisch und sehr ruhig.",
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

  function postJson(url, payload, extraHeaders) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(extraHeaders || {})
      },
      body: JSON.stringify(payload)
    }).then(async function (response) {
      const body = await response.json().catch(function () {
        return {};
      });

      if (!response.ok) {
        const fallbackMessage =
          response.status === 404 && String(url).indexOf("/api/") === 0
            ? "Die Backend-Route ist in dieser lokalen Vorschau nicht aktiv. In Cloudflare Pages funktioniert sie nach dem Setzen der Umgebungsvariablen."
            : "Request failed.";
        throw new Error(body.error || fallbackMessage);
      }

      return body;
    });
  }

  function buildAuthHeaders(accessToken) {
    return accessToken
      ? {
          Authorization: "Bearer " + accessToken
        }
      : {};
  }

  async function getCurrentAuthHeaders() {
    if (!hasSupabaseConfig) {
      return {};
    }

    try {
      const supabase = await getSupabase();
      if (!supabase) {
        return {};
      }

      const sessionResult = await supabase.auth.getSession();
      return buildAuthHeaders(sessionResult.data.session && sessionResult.data.session.access_token);
    } catch (error) {
      return {};
    }
  }

  function getAnalyticsSessionId() {
    try {
      const existing = localStorage.getItem("duschrinnen-session-id");
      if (existing) {
        return existing;
      }

      const nextId =
        window.crypto && typeof window.crypto.randomUUID === "function"
          ? window.crypto.randomUUID()
          : "session-" + Date.now() + "-" + Math.round(Math.random() * 100000);
      localStorage.setItem("duschrinnen-session-id", nextId);
      return nextId;
    } catch (error) {
      return "session-" + Date.now();
    }
  }

  function trackEvent(eventType, extra) {
    return fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventType,
        pageUrl: window.location.href,
        pageTitle: document.title,
        sessionId: getAnalyticsSessionId(),
        extra: extra || {}
      })
    }).catch(function () {});
  }

  function appendChatTyping(container) {
    const message = document.createElement("article");
    message.className = "chat-message chat-message-assistant chat-message-typing";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.innerHTML =
      '<p class="chat-typing-label">' +
      escapeHtml(getTranslation().aiTyping) +
      '</p><div class="chat-typing-dots" aria-hidden="true"><span></span><span></span><span></span></div>';

    message.appendChild(bubble);
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
    return message;
  }

  function setButtonLoading(button, isLoading, labelHtml) {
    if (!button) {
      return;
    }

    button.disabled = Boolean(isLoading);
    button.innerHTML = labelHtml;
    renderIcons();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatDate(value) {
    if (!value) {
      return "";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return String(value);
    }

    return new Intl.DateTimeFormat(currentLanguage === "de" ? "de-DE" : "en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).format(date);
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
