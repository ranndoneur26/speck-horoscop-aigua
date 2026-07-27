export interface ZodiacSign {
    id: string;
    nombre: string;
    fechas: string;
    subtitulo: string;
    prediccion: string;
    recomendacion: string;
    conciencia: string;
    consejo: string;
    imageUrl: string;
}

export const signs: ZodiacSign[] = [
    {
        id: 'aries',
        nombre: 'Aries',
        fechas: '21 de marzo - 19 de abril',
        subtitulo: 'La energía del agua en movimiento',
        prediccion: 'Aries buscará retos deportivos y activará toda su potencia vital en la piscina.',
        recomendacion: 'Da el salto al futuro con el sistema de contracorriente Premium BADU JET Turbo.',
        conciencia: 'Aprovecha el Día Mundial del Agua (22 de marzo) para recordar que la potencia no está reñida con la ecología. Este sistema consume menos energía que los modelos tradicionales gracias a su eficiente tecnología de motor.',
        consejo: 'Comienza la primavera y los entrenamientos de natación se intensifican. Antes de abrir las piscinas exteriores o de preparar las de competición, revisa las bombas de gran caudal para garantizar que la recirculación del agua sea rápida y efectiva ante el aumento de usuarios.',
        imageUrl: '/images/pumps/pump1.png'
    },
    {
        id: 'tauro',
        nombre: 'Tauro',
        fechas: '20 de abril - 20 de mayo',
        subtitulo: 'El confort silencioso y la conexión natural',
        prediccion: 'Los espacios de wellness y las piscinas privadas bajo este signo buscarán silencio absoluto y sostenibilidad en sus momentos de calma.',
        recomendacion: 'Elige la bomba BADU EV Eco Future.',
        conciencia: 'Celebra el Día de la Tierra (22 de abril) instalando la primera bomba del mercado fabricada con más de un 80% de plástico de origen biológico. Su diseño en panal de abejas es el homenaje perfecto al cuidado de nuestro planeta.',
        consejo: 'El mes de mayo es el momento clave para los propietarios. Cuando el agua de la piscina residencial supera los 15 °C, es hora de realizar el tratamiento de choque y activar la filtración para evitar que las algas se anticipen al calor del verano.',
        imageUrl: '/images/pumps/pump2.png'
    },
    {
        id: 'geminis',
        nombre: 'Géminis',
        fechas: '21 de mayo - 20 de junio',
        subtitulo: 'La versatilidad en la gestión del consumo',
        prediccion: 'Géminis querrá el control total de su piscina y adaptarse a los cambios de ritmo del día a día.',
        recomendacion: 'Conecta tu piscina a la domótica con la tecnología BADU ECO VISION que incorporan nuestras bombas de la gama Badu Green.',
        conciencia: 'El ahorro energético empieza por la información. Gracias al control remoto de las bombas BADU Green, puedes programar las horas de filtración en las franjas eléctricas más económicas y sostenibles.',
        consejo: 'En junio, el ritmo de visitas a los spas urbanos cambia. Utiliza la domótica para ajustar la potencia de las bombas de masaje y filtración según la afluencia de clientes en cada franja horaria, ahorrando energía en las horas de menos actividad.',
        imageUrl: '/images/pumps/pump3.png'
    },
    {
        id: 'cancer',
        nombre: 'Cáncer',
        fechas: '21 de junio - 22 de julio',
        subtitulo: 'La seguridad del agua pura en el hogar',
        prediccion: 'Cáncer pondrá el foco en la protección de la familia y el bienestar de los suyos en el entorno doméstico.',
        recomendacion: 'Apuesta por la fiabilidad contrastada de la gama BADU Prime.',
        conciencia: 'Una buena circulación de agua evita el uso excesivo de productos químicos. Contar con un equipo eficiente garantiza un entorno de baño saludable para los niños y reduce los vertidos de aguas tratadas al medio ambiente.',
        consejo: 'En julio el uso de la piscina familiar es diario e intensivo. Vacía los cestos de los skimmers y el prefiltro de la bomba cada semana para evitar que las hojas y la suciedad reduzcan el caudal y fuercen el motor.',
        imageUrl: '/images/pumps/pump4.png'
    },
    {
        id: 'leo',
        nombre: 'Leo',
        fechas: '23 de julio - 22 de agosto',
        subtitulo: 'El brillo de las grandes instalaciones',
        prediccion: 'Leo querrá que su instalación sea la más espectacular, lujosa y admirada por todos los usuarios. El día 2 de agosto, aprovechará el eclipse total de sol para hacerse notar con todo su esplendor.',
        recomendacion: 'Los equipos de contracorriente BADU JET Primavera Deluxe o BADU JET Vogue Deluxe con luces LED incorporadas.',
        conciencia: 'La espectacularidad también puede ser verde. Opta por la iluminación LED de bajo consumo integrada en estos equipos para reducir la huella de carbono de tu negocio u hotel sin renunciar a la estética.',
        consejo: 'Agosto es el mes de máxima ocupación. Con centenares de bañistas diarios, es vital programar la depuradora a pleno rendimiento durante las horas de apertura y realizar lavados de filtro más frecuentes para mantener el agua cristalina y brillante.',
        imageUrl: '/images/pumps/pump5.png'
    },
    {
        id: 'virgo',
        nombre: 'Virgo',
        fechas: '23 de agosto - 22 de setiembre',
        subtitulo: 'La optimización y la precisión alemana',
        prediccion: 'Virgo exigirá la máxima eficiencia sin ningún tipo de margen de error en el tratamiento del agua.',
        recomendacion: 'Optimiza el sistema con las bombas de velocidad variable de la gama BADU Green.',
        conciencia: 'La precisión de Virgo es ideal para realizar auditorías de agua. Ajustar exactamente las velocidades de filtración de la bomba no solo reduce el consumo eléctrico hasta un 88%, sino que alarga la vida útil de todos los materiales.',
        consejo: 'En septiembre comienza la nueva temporada de cursillos de natación. Es el momento ideal para realizar una revisión milimétrica de los filtros y de las bombas de recirculación antes de recibir a los nuevos abonados, asegurando que todo funcione con precisión y sin averías.',
        imageUrl: '/images/pumps/pump1.png'
    },
    {
        id: 'libra',
        nombre: 'Libra',
        fechas: '23 de septiembre - 22 de octubre',
        subtitulo: 'El equilibrio perfecto en el bienestar',
        prediccion: 'Armonía estética y técnica en centros de wellness, spas o piscinas privadas de alta gama.',
        recomendacion: 'Equilibra el rendimiento con la bomba BADU EV Delta.',
        conciencia: 'Libra nos recuerda la importancia de la armonía con el entorno. Esta bomba, extremadamente silenciosa y de alto rendimiento, consigue la máxima eficiencia de filtración reduciendo el impacto acústico de la instalación.',
        consejo: 'En octubre, con la llegada del otoño, aumenta la demanda de circuitos termales. Comprueba que las bombas que alimentan las camas de hidromasaje y las cascadas mantengan un caudal equilibrado y silencioso para garantizar una experiencia totalmente relajante.',
        imageUrl: '/images/pumps/pump2.png'
    },
    {
        id: 'escorpio',
        nombre: 'Escorpio',
        fechas: '23 de octubre - 21 de noviembre',
        subtitulo: 'Fuerza y rendimiento extremo',
        prediccion: 'Para instalaciones públicas, de competición y de alto rendimiento que exigen el máximo durante todo el año.',
        recomendacion: 'Gama de Bombas para Piscina Pública de Speck Badu Resort / Badu Block y Normblock Multi.',
        conciencia: 'El ahorro a gran escala. Revisa y optimiza los equipos de gran caudal para reducir las pérdidas de carga y ahorrar miles de litros de agua en los lavados de filtro de las grandes instalaciones deportivas.',
        consejo: 'En noviembre, en instalaciones interiores que funcionan todo el año, la carga orgánica del agua es muy alta. Es necesario revisar los motores y las turbinas de las bombas para asegurar que resisten la desinfección continuada y que mantienen un caudal de agua óptimo para la seguridad de los bañistas.',
        imageUrl: '/images/pumps/pump3.png'
    },
    {
        id: 'sagitario',
        nombre: 'Sagitario',
        fechas: '22 de noviembre - 21 de diciembre',
        subtitulo: 'La aventura y los grandes descubrimientos del sector',
        prediccion: 'Sagitario querrá expandir horizontes, conocer nuevas tendencias y conectar con otros profesionales del sector.',
        recomendacion: 'Transforma tu piscina con el sistema BADU JET Smart o Wave.',
        conciencia: 'Recordatorio del mes: Sagitario es el signo del movimiento, y noviembre de 2027 es el mes de la feria Piscina & Wellness Barcelona (del 15 al 18 de noviembre). ¡Es la parada obligatoria del año para descubrir de primera mano todas las innovaciones sostenibles de Speck Española! No te lo puedes perder.',
        consejo: 'En invierno, coloca la cubierta para evitar que la suciedad del otoño ensucie el agua. No abandones la instalación: una revisión del prefiltro de la bomba una vez al mes es suficiente para tener la piscina controlada.',
        imageUrl: '/images/pumps/pump4.png'
    },
    {
        id: 'capricornio',
        nombre: 'Capricornio',
        fechas: '22 de diciembre - 19 de enero',
        subtitulo: 'Durabilidad e inversión a largo plazo',
        prediccion: 'Capricornio solo querrá materiales resistentes y tecnología contrastada que garantice la continuidad del servicio.',
        recomendacion: 'Elige bombas robustas como la BADU TOP ES II.',
        conciencia: 'Sostenibilidad significa durabilidad. Fabricar equipos resistentes que duran décadas reduce la generación de residuos y la necesidad de fabricar nuevos recambios, apoyando directamente la economía circular.',
        consejo: 'Enero es el mes ideal para planificar inversiones estructurales. Si eres el gestor de una piscina municipal o de un club deportivo, aprovecha el inicio de año para hacer una auditoría técnica de la sala de máquinas y programar la sustitución de bombas antiguas por modelos más sostenibles.',
        imageUrl: '/images/pumps/pump5.png'
    },
    {
        id: 'acuario',
        nombre: 'Acuario',
        fechas: '20 de enero - 18 de febrero',
        subtitulo: 'Innovación y diseño de vanguardia',
        prediccion: 'Acuario liderará la transición hacia la piscina del futuro y la digitalización del agua.',
        recomendacion: 'Elige los nuevos motores de la gama BADU EV Prime.',
        conciencia: 'Apuesta por tecnologías ecológicas y un diseño sostenible. Acuario se inspira en la protección de los recursos del mañana utilizando motores de alta eficiencia energética que protegen los acuíferos y el medio ambiente.',
        consejo: 'Febrero es el mes perfecto para la innovación. Si gestionas un centro de bienestar, apuesta por la instalación de equipos inteligentes que te permitan controlar y monitorizar los consumos de tus bombas desde una aplicación centralizada, mejorando tu huella ecológica.',
        imageUrl: '/images/pumps/pump1.png'
    },
    {
        id: 'piscis',
        nombre: 'Piscis',
        fechas: '19 de febrero - 20 de marzo',
        subtitulo: 'La esencia del agua y el confort térmico',
        prediccion: 'Piscis buscará una experiencia sensorial completa, el agua a la temperatura perfecta y la máxima pureza.',
        recomendacion: 'Combina la filtración de las bombas BADU con los sistemas de climatización Serenity F.',
        conciencia: 'El agua es vida. Una correcta recirculación no solo mejora la temperatura de la piscina, sino que evita zonas muertas donde se consume más desinfectante. Consigue el máximo confort con el mínimo consumo químico.',
        consejo: 'En marzo empieza a asomar la primavera. Si tienes la piscina climatizada con bomba de calor, es el momento de revisar todo el circuito hidráulico. Comprueba que la bomba de circulación funcione de manera fluida para repartir el calor de forma uniforme.',
        imageUrl: '/images/pumps/pump2.png'
    }
];
