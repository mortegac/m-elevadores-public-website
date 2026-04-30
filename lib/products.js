/**
 * Product catalog data for M-Elevadores.
 * Single source of truth used by all catalog pages.
 */

export const CATEGORIES = [
  { id: "all", label: "Todos los productos", count: 8 },
  { id: "salvaescaleras", label: "Salvaescaleras", count: 2 },
  { id: "plataformas", label: "Plataformas", count: 2 },
  { id: "ascensores", label: "Ascensores", count: 3 },
  { id: "modernizacion", label: "Modernización", count: 1 },
];

export const PRODUCTS = [
  {
    slug: "salvaescaleras-recto-solo",
    image: "/images/products/salvaescaleras-recto-solo.png",
    name: "Salvaescaleras Recto SOLO",
    shortName: "Recto SOLO",
    category: "salvaescaleras",
    badge: "Más elegido",
    tagline: "La solución más rápida para escaleras rectas",
    description:
      "Ideal para hogares con escaleras rectas. Se instala en un día y se pliega a solo 28 cm, permitiendo el uso normal de la escalera a otros habitantes.",
    longDescription:
      "El Salvaescaleras Recto SOLO es nuestra solución más popular para hogares chilenos. Diseñado para escaleras rectas de hasta 14 metros, combina facilidad de uso con un diseño discreto que respeta la estética del hogar. Su sistema de plegado a 28 cm lo hace invisible cuando no se usa. La instalación tarda un solo día sin obras mayores.",
    audience: ["Adultos mayores", "Personas en recuperación postoperatoria", "Movilidad reducida temporal"],
    audienceShort: "Adultos mayores y recuperación post-op",
    specs: {
      "Carga máxima": "125 kg",
      "Largo máximo de riel": "14 m",
      "Ancho plegado": "28 cm",
      "Tipo de escalera": "Recta",
      "Tiempo de instalación": "1 día",
      "Alimentación": "220V / Batería emergencia",
      "Velocidad": "0.15 m/s",
      "Garantía": "2 años",
    },
    features: [
      "Instalación en 1 día sin obras",
      "Se pliega a solo 28 cm",
      "Batería de emergencia incluida",
      "Control remoto bidireccional",
      "Sensores de obstáculos",
      "Certificado Ley 20.296 MINVU",
      "Visita técnica gratuita",
    ],
    priceRange: "Desde $2.800.000 CLP",
    installTime: "1 día",
    forWho: "casa",
    cta: "Cotizar Recto SOLO",
    seoTitle: "Salvaescaleras Recto SOLO | Instalación 1 Día | M-Elevadores Chile",
    seoDescription:
      "Salvaescaleras para escalera recta. Instalación en 1 día, se pliega a 28 cm. Carga hasta 125 kg. Certificado MINVU. Cotiza gratis hoy.",
    faq: [
      {
        q: "¿Cuánto tiempo tarda la instalación?",
        a: "La instalación del Recto SOLO tarda un solo día. No se requieren obras de albañilería ni permisos especiales para escaleras rectas en uso residencial.",
      },
      {
        q: "¿Cuánto espacio ocupa cuando está plegado?",
        a: "Solo 28 cm desde el muro. Esto permite que otras personas usen la escalera con normalidad incluso con el salvaescaleras instalado.",
      },
      {
        q: "¿Qué pasa si se va la luz?",
        a: "Incluye batería de emergencia que permite completar el recorrido actual y bajar de forma segura ante corte de luz.",
      },
      {
        q: "¿Se puede instalar en cualquier escalera recta?",
        a: "Sí, hasta 14 metros de largo y con un ancho mínimo de 75 cm. Realizamos visita técnica gratuita para confirmar la viabilidad en tu escalera específica.",
      },
    ],
  },
  {
    slug: "salvaescaleras-curvo-flex",
    image: "/images/products/salvaescaleras-curvo-flex.png",
    name: "Salvaescaleras Curvo FLEX",
    shortName: "Curvo FLEX",
    category: "salvaescaleras",
    badge: null,
    tagline: "Para cualquier geometría de escalera",
    description:
      "Fabricación a medida para escaleras con curvas, rellanos o formas en L. El riel se construye según los planos de tu escalera específica.",
    longDescription:
      "El Curvo FLEX es la solución cuando tu escalera no es recta. Con un radio mínimo de curvatura de 45 cm, puede adaptarse a prácticamente cualquier geometría: escaleras en L, en U, con rellanos intermedios o con curvas personalizadas. El riel se fabrica a medida en nuestro taller con los planos de tu escalera.",
    audience: ["Escaleras con rellanos", "Geometrías en L o U", "Curvas personalizadas", "Casas con diseños especiales"],
    audienceShort: "Escaleras curvas o con rellanos",
    specs: {
      "Carga máxima": "125 kg",
      "Radio mínimo de curva": "45 cm",
      "Tipo de escalera": "Curva / L / U / Rellanos",
      "Tiempo de instalación": "2 días",
      "Fabricación": "A medida",
      "Alimentación": "220V / Batería emergencia",
      "Velocidad": "0.15 m/s",
      "Garantía": "2 años",
    },
    features: [
      "Riel fabricado a medida",
      "Adapta cualquier geometría",
      "Radio mínimo 45 cm",
      "Batería de emergencia incluida",
      "Control remoto bidireccional",
      "Sensores de obstáculos",
      "Certificado Ley 20.296 MINVU",
    ],
    priceRange: "Desde $4.500.000 CLP",
    installTime: "2 días",
    forWho: "casa",
    cta: "Cotizar Curvo FLEX",
    seoTitle: "Salvaescaleras Curvo FLEX | Escaleras con Rellanos y Curvas | M-Elevadores",
    seoDescription:
      "Salvaescaleras para escaleras curvas, en L o con rellanos. Riel fabricado a medida. Instalación 2 días. Certificado MINVU. Cotiza sin costo.",
    faq: [
      {
        q: "¿Cómo sé si mi escalera es apta para el Curvo FLEX?",
        a: "Realizamos una visita técnica gratuita donde medimos tu escalera y determinamos la viabilidad. En el 95% de los casos con escaleras curvas, el Curvo FLEX es la solución.",
      },
      {
        q: "¿Cuánto tiempo tarda la fabricación del riel?",
        a: "El riel se fabrica en aproximadamente 3-4 semanas desde que tomamos las medidas. La instalación misma tarda 2 días.",
      },
      {
        q: "¿Es más caro que el modelo recto?",
        a: "Sí, por la fabricación a medida. El precio varía según la complejidad de la escalera. Te entregamos una cotización exacta tras la visita técnica.",
      },
    ],
  },
  {
    slug: "plataforma-vertical-dignity",
    image: "/images/products/plataforma-interior.png",
    name: "Plataforma Vertical DIGNITY",
    shortName: "DIGNITY",
    category: "plataformas",
    badge: "Certificado MINVU",
    tagline: "Accesibilidad universal para silla de ruedas",
    description:
      "Plataforma elevadora vertical para usuarios de silla de ruedas. Cumple con normativa de accesibilidad NCh3271 para edificios públicos y privados.",
    longDescription:
      "La Plataforma Vertical DIGNITY está diseñada para garantizar accesibilidad universal. Con una capacidad de 400 kg y plataforma de 90×140 cm, permite el acceso en silla de ruedas con acompañante. Cumple íntegramente con la norma NCh3271 y los requisitos de la Ley 20.422 de accesibilidad universal.",
    audience: ["Usuarios de silla de ruedas", "Edificios con normativa de accesibilidad", "Espacios públicos y privados", "Diseño universal"],
    audienceShort: "Usuarios de silla de ruedas",
    specs: {
      "Carga máxima": "400 kg",
      "Dimensión plataforma": "90 × 140 cm (estándar)",
      "Recorrido máximo": "3 m",
      "Tiempo de instalación": "3 días",
      "Certificación": "MINVU NCh3271",
      "Alimentación": "220V",
      "Velocidad": "0.15 m/s",
      "Acceso": "3 lados disponibles",
    },
    features: [
      "Plataforma 90×140 cm para silla + acompañante",
      "Barrera automática de seguridad",
      "Operación por llave o mando",
      "Certificado NCh3271 y Ley 20.422",
      "Instalación interior o exterior",
      "Recinto opcional con o sin techo",
      "Visita técnica gratuita",
    ],
    priceRange: "Desde $5.200.000 CLP",
    installTime: "3 días",
    forWho: "universal",
    cta: "Cotizar DIGNITY",
    seoTitle: "Plataforma Elevadora Vertical DIGNITY | Silla de Ruedas | M-Elevadores Chile",
    seoDescription:
      "Plataforma vertical para silla de ruedas. Carga 400 kg, plataforma 90×140 cm. Certificado NCh3271 y Ley 20.422. Instalación interior y exterior.",
    faq: [
      {
        q: "¿Cumple con la normativa para edificios públicos?",
        a: "Sí. La DIGNITY cumple con NCh3271 (Accesibilidad al medio físico) y los requisitos de la Ley 20.422 sobre igualdad de oportunidades para personas con discapacidad.",
      },
      {
        q: "¿Se puede instalar en exteriores?",
        a: "Sí, disponemos de modelos para interior y exterior con protección IP adecuada. Para exterior se recomienda agregar recinto de protección.",
      },
      {
        q: "¿Cuánto espacio necesito para instalarla?",
        a: "La plataforma estándar requiere un área mínima de 120×160 cm en el piso. Tenemos modelos compactos para espacios reducidos. La visita técnica es gratuita.",
      },
    ],
  },
  {
    slug: "plataforma-inclinada-access",
    image: "/images/products/plataforma-exterior.png",
    name: "Plataforma Inclinada ACCESS",
    shortName: "ACCESS",
    category: "plataformas",
    badge: null,
    tagline: "Silla de ruedas por escaleras, sin instalar ascensor",
    description:
      "Sigue el perfil de la escalera existente. Ideal para edificios públicos, iglesias, colegios y comercio donde se requiere acceso en silla de ruedas sin instalar un ascensor.",
    longDescription:
      "La Plataforma Inclinada ACCESS es la solución cuando se necesita acceso en silla de ruedas pero no hay espacio para un ascensor vertical. Sigue el perfil de la escalera existente y, al no estar en uso, la plataforma se pliega lateralmente dejando libre el paso completo de la escalera.",
    audience: ["Edificios públicos", "Colegios y universidades", "Iglesias y auditorios", "Comercio y retail", "Condominos sin ascensor"],
    audienceShort: "Edificios públicos y comerciales",
    specs: {
      "Carga máxima": "300 kg",
      "Dimensión plataforma": "80 × 100 cm (plegable)",
      "Tipo de escalera": "Recta",
      "Tiempo de instalación": "2-3 días",
      "Alimentación": "220V",
      "Velocidad": "0.08 m/s",
      "Normativa": "Ley 20.422",
      "Garantía": "2 años",
    },
    features: [
      "Plataforma plegable: no obstaculiza escalera",
      "Carga hasta 300 kg",
      "Apta para silla de ruedas y scooter",
      "Operación por llave de seguridad",
      "Paracaídas mecánico de seguridad",
      "Cumple Ley 20.422",
      "Instalación sin obras mayores",
    ],
    priceRange: "Desde $3.800.000 CLP",
    installTime: "2-3 días",
    forWho: "comercial",
    cta: "Cotizar ACCESS",
    seoTitle: "Plataforma Inclinada ACCESS | Acceso Silla de Ruedas en Escaleras | M-Elevadores",
    seoDescription:
      "Plataforma inclinada para escaleras. Silla de ruedas sin ascensor. Carga 300 kg, plegable. Cumple Ley 20.422. Ideal edificios públicos y colegios.",
    faq: [
      {
        q: "¿La plataforma obstaculiza la escalera cuando no se usa?",
        a: "No. La plataforma se pliega lateralmente dejando el 100% del ancho de la escalera libre para el paso normal de personas.",
      },
      {
        q: "¿Quién puede operarla?",
        a: "La ACCESS opera con llave de seguridad para evitar uso no autorizado. Es ideal que un acompañante o el personal del edificio asista al usuario.",
      },
    ],
  },
  {
    slug: "ascensor-residencial-home",
    image: "/images/products/ascensor-rhx17.png",
    name: "Ascensor Residencial HOME",
    shortName: "HOME",
    category: "ascensores",
    badge: "Premium",
    tagline: "Ascensor para tu casa, sin foso, sin obras mayores",
    description:
      "Ascensor de diseño para viviendas de 2 a 4 pisos. No requiere foso (solo 6 cm) y se instala en 2-3 semanas. Eleva toda la familia.",
    longDescription:
      "El Ascensor Residencial HOME transforma permanentemente la movilidad en tu hogar. Con capacidad para 400 kg (aprox. 5 personas), no requiere foso de construcción —solo una preparación de 6 cm— lo que simplifica enormemente la instalación. Disponible en múltiples acabados para integrarse al diseño de tu hogar.",
    audience: ["Viviendas 2-4 pisos", "Familias con adultos mayores", "Planificación a futuro", "Diseño premium residencial"],
    audienceShort: "Viviendas unifamiliares",
    specs: {
      "Carga máxima": "400 kg (~5 personas)",
      "Recorrido máximo": "13 m (4 paradas)",
      "Cabina mínima": "80 × 100 cm",
      "Foso requerido": "Solo 6 cm",
      "Tiempo de instalación": "2-3 semanas",
      "Alimentación": "220V monofásico",
      "Velocidad": "0.15 m/s",
      "Garantía": "3 años",
    },
    features: [
      "Sin foso: solo 6 cm de preparación",
      "400 kg — toda la familia",
      "Hasta 4 paradas",
      "Cabina personalizable (madera, vidrio, acero)",
      "Apertura de puertas automática",
      "Sistema antiapagón con batería",
      "App de diagnóstico remoto",
      "Garantía 3 años",
    ],
    priceRange: "Desde $9.500.000 CLP",
    installTime: "2-3 semanas",
    forWho: "casa",
    cta: "Cotizar HOME",
    seoTitle: "Ascensor Residencial HOME | Para Casas 2-4 Pisos | M-Elevadores Chile",
    seoDescription:
      "Ascensor para vivienda sin foso. Solo 6 cm de preparación. 400 kg, 4 paradas, 2-3 semanas instalación. Premium y discreto. Cotiza gratis.",
    faq: [
      {
        q: "¿Realmente no necesita foso?",
        a: "Correcto. El HOME solo requiere una preparación de 6 cm en el piso inferior, sin excavación. Esto reduce los costos y tiempos de obra considerablemente.",
      },
      {
        q: "¿Cuánto espacio necesito para instalar el ascensor?",
        a: "La cabina mínima es 80×100 cm con un hueco de 120×140 cm. Realizamos visita técnica gratuita para evaluar la viabilidad en tu vivienda.",
      },
      {
        q: "¿Requiere permiso municipal?",
        a: "Para instalaciones en viviendas existentes generalmente no se requiere permiso. Para nuevas construcciones sí. Te asesoramos en el proceso completo.",
      },
    ],
  },
  {
    slug: "ascensor-condominio-tower",
    image: "/images/products/ascensor-rhx16.png",
    name: "Ascensor Condominio TOWER",
    shortName: "TOWER",
    category: "ascensores",
    badge: null,
    tagline: "El ascensor que necesita tu edificio",
    description:
      "Para condominios y edificios residenciales. Capacidad hasta 1600 kg (21 personas), 25 paradas, monitoreo 24/7. Cumple Ley 20.296 y NCh440.",
    longDescription:
      "El Ascensor Condominio TOWER está diseñado para las exigencias del uso residencial intensivo. Con capacidades desde 630 hasta 1600 kg y hasta 25 paradas, cubre desde edificios boutique hasta torres residenciales. Su sistema de monitoreo 24/7 con app para administradores es el complemento perfecto para la gestión moderna del edificio.",
    audience: ["Edificios residenciales", "Condominios", "Torres de departamentos", "Administradores de edificios"],
    audienceShort: "Condominios y edificios",
    specs: {
      "Carga máxima": "630 – 1.600 kg",
      "Capacidad personas": "8 – 21 personas",
      "Paradas máximas": "25",
      "Recorrido máximo": "75 m",
      "Velocidad": "1 – 2,5 m/s",
      "Normativa": "Ley 20.296, NCh440",
      "Monitoreo": "24/7 con app administrador",
      "Tiempo de instalación": "4-6 semanas",
    },
    features: [
      "Hasta 21 personas / 1.600 kg",
      "25 paradas, 75 m recorrido",
      "Velocidad hasta 2,5 m/s",
      "App de monitoreo para administrador",
      "Sistema de rescate automático",
      "Certificado Ley 20.296 y NCh440",
      "Servicio técnico 24/7",
      "Consumo energético clase A",
    ],
    priceRange: "Cotización personalizada",
    installTime: "4-6 semanas",
    forWho: "condominio",
    cta: "Solicitar Cotización TOWER",
    seoTitle: "Ascensor para Edificios y Condominios TOWER | M-Elevadores Chile",
    seoDescription:
      "Ascensor residencial para condominios. Hasta 21 personas, 25 paradas, app de monitoreo. Certificado Ley 20.296 y NCh440. Cotización sin costo.",
    faq: [
      {
        q: "¿Cuánto demora la instalación en un edificio existente?",
        a: "Entre 4 y 6 semanas dependiendo de la cantidad de paradas y el estado del foso existente. Durante la instalación minimizamos los días sin servicio.",
      },
      {
        q: "¿Qué incluye el monitoreo 24/7?",
        a: "El administrador del edificio recibe alertas en tiempo real sobre fallas, accesos y uso del ascensor. Nuestro equipo técnico puede diagnosticar remotamente la mayoría de los problemas.",
      },
    ],
  },
  {
    slug: "ascensor-comercial-prime",
    image: "/images/products/ascensor-rhx21.png",
    name: "Ascensor Comercial PRIME",
    shortName: "PRIME",
    category: "ascensores",
    badge: null,
    tagline: "Alto tráfico, máxima eficiencia, cero compromisos",
    description:
      "Para torres de oficinas, clínicas, retail y uso intensivo. Hasta 2.500 kg, 120 m de recorrido, 4 m/s, control de destino y frenado regenerativo ISO 25745 Clase A.",
    longDescription:
      "El Ascensor Comercial PRIME representa la cúspide de la tecnología elevadora para uso intensivo. Con velocidades de hasta 4 m/s y sistema de control de destino (DCS), optimiza el flujo de personas en edificios de alto tráfico. Su sistema de frenado regenerativo recupera energía y alcanza la eficiencia ISO 25745 Clase A.",
    audience: ["Torres corporativas", "Clínicas y hospitales", "Centros comerciales", "Hoteles", "Uso intensivo 24/7"],
    audienceShort: "Edificios comerciales e institucionales",
    specs: {
      "Carga máxima": "Hasta 2.500 kg",
      "Recorrido máximo": "120 m",
      "Velocidad máxima": "4 m/s",
      "Control": "Sistema de destino (DCS)",
      "Eficiencia energética": "ISO 25745 Clase A",
      "Disponibilidad SLA": "99,7% uptime",
      "Acceso": "Biométrico / Tarjeta",
      "Tiempo de instalación": "6-12 semanas",
    },
    features: [
      "Hasta 2.500 kg — uso industrial",
      "Control de destino (DCS) — reduce tiempos de espera",
      "Frenado regenerativo (recupera energía)",
      "Certificación ISO 25745 Clase A",
      "Acceso biométrico y con tarjeta",
      "SLA 99,7% uptime garantizado",
      "Monitoreo predictivo con IA",
      "Cabina personalizable de alta gama",
    ],
    priceRange: "Cotización personalizada",
    installTime: "6-12 semanas",
    forWho: "comercial",
    cta: "Solicitar Cotización PRIME",
    seoTitle: "Ascensor Comercial PRIME | Alto Tráfico y Alta Eficiencia | M-Elevadores",
    seoDescription:
      "Ascensor comercial para uso intensivo. Hasta 2.500 kg, 4 m/s, ISO 25745 Clase A. Control de destino DCS. Para oficinas, clínicas y retail.",
    faq: [
      {
        q: "¿Qué es el sistema de control de destino (DCS)?",
        a: "El DCS agrupa a las personas según su destino antes de ingresar a la cabina, reduciendo las paradas innecesarias hasta en un 30% y mejorando la circulación en horas punta.",
      },
      {
        q: "¿Qué significa SLA 99,7% uptime?",
        a: "Garantizamos que el ascensor estará operativo el 99,7% del tiempo. Ante cualquier falla, nuestro equipo tiene un tiempo máximo de respuesta de 4 horas hábiles.",
      },
    ],
  },
  {
    slug: "modernizacion-replus",
    image: "/images/products/control-masha.png",
    name: "Modernización RE-PLUS",
    shortName: "RE-PLUS",
    category: "modernizacion",
    badge: null,
    tagline: "Tu ascensor actual, como nuevo y certificado",
    description:
      "Modernizamos ascensores de cualquier marca. Controlador, motor, puertas, cabina y seguridad. Ahorro energético hasta 45% y cumplimiento Ley 20.296 sin reemplazar el ascensor.",
    longDescription:
      "La Modernización RE-PLUS le da una segunda vida a tu ascensor existente. Actualizamos los componentes clave — controlador electrónico, motor, puertas, cabina y sistemas de seguridad — para cumplir con la Ley 20.296 y mejorar la eficiencia energética hasta en un 45%. El proceso se realiza sin interrumpir el servicio del edificio.",
    audience: ["Edificios con ascensores antiguos", "Administradores buscando cumplimiento Ley 20.296", "Reducción de costos energéticos", "Cualquier marca de ascensor"],
    audienceShort: "Edificios con ascensores que modernizar",
    specs: {
      "Compatible con": "Cualquier marca (multibrand)",
      "Componentes": "Controlador, motor, puertas, cabina, seguridad",
      "Ahorro energético": "Hasta 45%",
      "Normativa": "Cumplimiento Ley 20.296",
      "Tiempo de instalación": "2-4 semanas sin corte de servicio",
      "Garantía": "2 años en componentes nuevos",
      "Diagnóstico": "Incluido",
      "Financiamiento": "Disponible",
    },
    features: [
      "Compatible con cualquier marca",
      "Sin corte prolongado de servicio",
      "Ahorro hasta 45% en electricidad",
      "Certificación Ley 20.296 incluida",
      "Diagnóstico inicial incluido",
      "Nuevo controlador electrónico",
      "Renovación visual de cabina",
      "Financiamiento disponible",
    ],
    priceRange: "Cotización según diagnóstico",
    installTime: "2-4 semanas",
    forWho: "edificio",
    cta: "Solicitar Diagnóstico Gratis",
    seoTitle: "Modernización de Ascensores RE-PLUS | Cualquier Marca | M-Elevadores Chile",
    seoDescription:
      "Modernizamos ascensores de cualquier marca. Ahorra hasta 45% energía, cumple Ley 20.296. Sin corte de servicio. Diagnóstico gratuito incluido.",
    faq: [
      {
        q: "¿Cuánto ahorro energético puedo esperar?",
        a: "Con la modernización del sistema de tracción y control, el ahorro energético típico es entre 30% y 45% según el estado actual del equipo.",
      },
      {
        q: "¿Necesito cortar el servicio del ascensor?",
        a: "Minimizamos los cortes de servicio. En edificios con un solo ascensor, coordinamos el trabajo en horarios de menor uso y entregamos el servicio al final de cada jornada.",
      },
      {
        q: "¿Funciona con mi marca de ascensor actual?",
        a: "Sí. Somos multimarca y trabajamos con Otis, ThyssenKrupp, Schindler, Mitsubishi, Kone y todas las marcas del mercado chileno.",
      },
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(categoryId) {
  if (categoryId === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export function getRelatedProducts(slug, limit = 3) {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.slug !== slug && (p.category === product.category || p.forWho === product.forWho)
  ).slice(0, limit);
}
