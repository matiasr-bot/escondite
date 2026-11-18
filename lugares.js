// Banco curado de escondites.
// Pistas en escalera (cada una es un acertijo, nunca un dato directo):
// 1) región/identidad  2) país  3) dónde dentro del país  4) dato icónico  5) casi el nombre
// dificultad: 1 fácil · 2 medio · 3 difícil (el calendario la usa con una curva semanal)
window.LUGARES = [
  { nombre: "Ushuaia, Argentina", lat: -54.80, lon: -68.30, dificultad: 1, pistas: [
    "Si caminaras siempre hacia el sur desde acá, el próximo continente que pisarías sería el blanco.",
    "El escudo de fútbol de mi país lleva tres estrellas, y su bandera tiene un sol con cara.",
    "Vivo en una isla que dos países se repartieron con una línea recta.",
    "Mis primeros vecinos fueron presos: la cárcel levantó el pueblo y hasta tuvo un tren para buscar leña.",
    "Me venden como «el fin del mundo» y miro a un canal con nombre de barco inglés."
  ]},
  { nombre: "Reikiavik, Islandia", lat: 64.15, lon: -21.94, dificultad: 2, pistas: [
    "Mi isla se está partiendo: crece un par de centímetros por año porque dos placas continentales se separan.",
    "Mi país no tiene ejército, pero sí uno de los parlamentos más antiguos del mundo, fundado en el año 930.",
    "Soy la capital más al norte de un país soberano, y estoy en el rincón suroeste de mi isla.",
    "En plena Guerra Fría, un estadounidense y un soviético se enfrentaron acá sobre 64 casillas.",
    "Mi nombre significa «bahía humeante» y empieza con R."
  ]},
  { nombre: "Tombuctú, Malí", lat: 16.77, lon: -3.01, dificultad: 3, pistas: [
    "Durante siglos, acá la sal valía casi tanto como el oro, y llegaba en caravanas de camellos.",
    "Según muchos historiadores, el hombre más rico de la historia fue rey de estas tierras en el siglo XIV.",
    "Estoy a un paso de un río que, en vez de ir al mar, primero se mete en el desierto y después pega la vuelta.",
    "En 2013, mis vecinos escondieron miles de manuscritos medievales para salvarlos de los yihadistas.",
    "En español usamos mi nombre para decir «el lugar más lejano del mundo»."
  ]},
  { nombre: "Ulán Bator, Mongolia", lat: 47.92, lon: 106.92, dificultad: 2, pistas: [
    "Ninguna capital del mundo pasa un invierno tan frío como el mío: en enero, el promedio ronda los −20 °C.",
    "En estas estepas nació el imperio terrestre continuo más grande de la historia.",
    "Mi país limita solo con dos gigantes, y yo estoy a menos de 300 km del que tiene al norte.",
    "Casi la mitad de mi país vive acá, muchos en casas redondas de fieltro que se arman y desarman.",
    "Mi nombre significa «héroe rojo»."
  ]},
  { nombre: "Valparaíso, Chile", lat: -33.05, lon: -71.62, dificultad: 2, pistas: [
    "Antes de que abrieran un atajo en Centroamérica, casi todo barco que pasaba de un océano al otro paraba en mi puerto.",
    "Mi país tiene el desierto más seco del mundo y una isla llena de gigantes de piedra.",
    "El Congreso de mi país funciona acá, aunque la capital está a poco más de 100 km, del otro lado de unos cerros.",
    "Un poeta Nobel que escribía con tinta verde tuvo una casa en uno de mis cerros.",
    "Me dicen «Valpo» y comparto bahía con la «ciudad jardín»."
  ]},
  { nombre: "Cusco, Perú", lat: -13.53, lon: -71.97, dificultad: 1, pistas: [
    "Fui el centro de un imperio que no usaba la rueda ni la escritura, pero tenía caminos de miles de kilómetros.",
    "Mi país tiene una ciudadela entre las nubes que fue elegida maravilla del mundo moderno.",
    "Estoy a unos 3.400 metros: el que llega en avión suele tomar té de coca para no apunarse.",
    "En una de mis calles hay una piedra con doce ángulos que encaja perfecto con sus vecinas.",
    "En quechua mi nombre suele traducirse como «ombligo del mundo»."
  ]},
  { nombre: "Estambul, Turquía", lat: 41.01, lon: 28.98, dificultad: 1, pistas: [
    "Si cruzás uno de mis puentes, cambiás de continente sin salir de la ciudad.",
    "Mi país nació de lo que quedó de un imperio que duró más de 600 años y terminó en 1922.",
    "Estoy sobre el estrecho por donde tienen que pasar los barcos del mar Negro para llegar al Mediterráneo.",
    "Fui Bizancio, y después llevé el nombre de un emperador romano.",
    "Mi nombre actual empieza con «Estam»."
  ]},
  { nombre: "Zanzíbar, Tanzania", lat: -6.16, lon: 39.19, dificultad: 3, pistas: [
    "Acá se peleó la guerra más corta de la historia: terminó en menos de 45 minutos.",
    "Mi país nació en 1964 juntando dos nombres en uno.",
    "Estoy en una isla del Índico, a unos 35 km de la costa y a seis grados al sur del ecuador.",
    "Una de las voces más famosas del rock nació acá con el nombre de Farrokh Bulsara.",
    "Me dicen «la isla de las especias» y mi nombre empieza con Z."
  ]},
  { nombre: "Kioto, Japón", lat: 35.01, lon: 135.77, dificultad: 2, pistas: [
    "Estaba en la lista para recibir una bomba atómica, pero un ministro estadounidense que me conocía me tachó.",
    "Mi país todavía tiene emperador, y su bandera es solo un círculo rojo sobre blanco.",
    "Estoy tierra adentro, en el centro de la isla más grande de mi país, a menos de 50 km de un gran puerto.",
    "En 1997 se firmó acá un acuerdo para frenar el calentamiento global.",
    "Si desordenás mis sílabas, obtenés el nombre de la capital actual."
  ]},
  { nombre: "Nueva Orleans, EE. UU.", lat: 29.95, lon: -90.07, dificultad: 2, pistas: [
    "Un río que nace a más de 3.700 km de acá termina su viaje cerca mío, en un golfo cálido.",
    "Mi tierra se vendió por unos 15 millones de dólares a un francés que necesitaba plata para sus guerras.",
    "Vivo más abajo que el agua que me rodea: un lago al norte, un río al sur y diques para no ahogarme.",
    "En 2005, una tormenta con nombre de mujer me dejó casi toda bajo el agua.",
    "Me dicen «The Big Easy», y mi nombre es el de una ciudad francesa… pero más joven."
  ]},
  { nombre: "Alice Springs, Australia", lat: -23.70, lon: 133.88, dificultad: 3, pistas: [
    "Estoy en el hemisferio sur, tan metida en el desierto que el mar más cercano queda a más de 1.000 km.",
    "Mi país es el único que ocupa un continente entero.",
    "Mi río casi nunca tiene agua: una vez al año se corre una regata con botes sin fondo, a pie.",
    "La gran roca roja sagrada de mi país está a unas cinco horas de auto.",
    "Llevo nombre de mujer y de manantial."
  ]},
  { nombre: "Marrakech, Marruecos", lat: 31.63, lon: -7.99, dificultad: 2, pistas: [
    "Mi gran plaza es Patrimonio Oral de la Humanidad por sus narradores y encantadores de serpientes.",
    "Desde la punta norte de mi país, en un día claro, se ve Europa.",
    "Estoy tierra adentro, a la sombra de la cordillera más alta del norte de África.",
    "Un diseñador francés amaba tanto mi jardín azul que sus cenizas descansan ahí.",
    "Mi nombre dio origen al nombre de mi país en varios idiomas."
  ]},
  { nombre: "San Petersburgo, Rusia", lat: 59.94, lon: 30.31, dificultad: 2, pistas: [
    "Un zar me mandó construir sobre un pantano para tener su «ventana a Europa».",
    "Mi país tiene 11 husos horarios.",
    "Estoy al fondo de un golfo del Báltico, donde desemboca un río corto pero caudaloso.",
    "En el siglo XX me cambiaron el nombre tres veces, una de ellas en honor a un revolucionario.",
    "Mi museo más famoso ocupa el antiguo Palacio de Invierno de los zares."
  ]},
  { nombre: "Manaos, Brasil", lat: -3.12, lon: -60.02, dificultad: 2, pistas: [
    "Cerca de acá, un río negro y otro color café con leche corren juntos kilómetros sin mezclarse.",
    "Mi país es el único de América donde el idioma oficial es el portugués.",
    "Estoy en el medio de la selva más grande del mundo, a más de 1.000 km del océano siguiendo el río.",
    "Con la fiebre del caucho me hice un teatro de ópera con materiales traídos de Europa.",
    "Soy la capital del estado de Amazonas y mi nombre empieza con «Man»."
  ]},
  { nombre: "Ciudad del Cabo, Sudáfrica", lat: -33.92, lon: 18.42, dificultad: 1, pistas: [
    "Mi montaña es tan chata que a veces las nubes le ponen un mantel encima.",
    "Mi país tiene tres capitales: una para cada poder del Estado.",
    "Estoy cerca del cabo que los navegantes portugueses rebautizaron: de «Tormentas» pasó a «Buena Esperanza».",
    "Frente a mi costa, en una isla, el preso 46664 pasó 18 años.",
    "En inglés me llamo Cape Town."
  ]},
  { nombre: "Hanói, Vietnam", lat: 21.03, lon: 105.85, dificultad: 2, pistas: [
    "Cumplí mil años como capital en 2010; mi nombre antiguo significaba «dragón ascendente».",
    "Mi país tiene forma de S y en el siglo XX derrotó a Francia y a Estados Unidos.",
    "Estoy en el norte del país, en el delta de un río con nombre de color.",
    "Mi líder revolucionario está embalsamado en un mausoleo de mi centro, aunque había pedido que lo cremaran.",
    "Mi nombre significa «dentro del río» y empieza con H."
  ]},
  { nombre: "Venecia, Italia", lat: 45.44, lon: 12.33, dificultad: 1, pistas: [
    "Mis calles se inundan con la marea, y por ellas no circula ni un auto.",
    "Mi país tiene otro país entero metido adentro de su capital.",
    "Estoy en una laguna al fondo del mar Adriático, en el noreste de mi país.",
    "Un comerciante de acá viajó hasta la corte de Kublai Kan y lo contó en un libro.",
    "Me recorren en góndola y mi nombre empieza con V."
  ]},
  { nombre: "Ciudad de México, México", lat: 19.43, lon: -99.13, dificultad: 1, pistas: [
    "Me construyeron sobre un lago, y por eso me hundo varios centímetros por año.",
    "La bandera de mi país muestra un águila devorando una serpiente.",
    "Estoy a más de 2.200 metros, en un valle vigilado por un volcán cuyo nombre significa «montaña que humea».",
    "Fui la primera ciudad de América Latina en organizar unos Juegos Olímpicos, en 1968.",
    "Me llamo igual que mi país."
  ]},
  { nombre: "Honolulu, EE. UU.", lat: 21.31, lon: -157.86, dificultad: 2, pistas: [
    "Estoy en uno de los archipiélagos más aislados del mundo: el continente más cercano queda a casi 4.000 km.",
    "Mis islas fueron un reino con su propia reina hasta 1893; hoy son la última estrella de una bandera.",
    "Estoy en la costa sur de la tercera isla más grande del archipiélago.",
    "El 7 de diciembre de 1941, a pocos kilómetros de acá, mi país entró en una guerra mundial.",
    "Mi nombre empieza con «Hono» y mi playa más famosa es Waikiki."
  ]},
  { nombre: "Dubái, Emiratos Árabes Unidos", lat: 25.20, lon: 55.27, dificultad: 1, pistas: [
    "Tengo un rascacielos tan alto que podés ver el atardecer abajo, subir en ascensor y verlo otra vez.",
    "Mi país es una federación de siete emiratos que se unieron en 1971.",
    "Estoy sobre el golfo, a algo más de 100 km de la capital de mi país.",
    "Construí islas artificiales con forma de palmera y de mapa del mundo.",
    "Mi nombre empieza con D."
  ]},
  { nombre: "Bergen, Noruega", lat: 60.39, lon: 5.32, dificultad: 3, pistas: [
    "Fui puerto de una liga de comerciantes alemanes de la Edad Media, que me dejaron un muelle de casas de madera.",
    "Mi país votó dos veces que no a la Unión Europea, y vive en buena parte del petróleo.",
    "Estoy en la costa oeste de mi país, rodeada de siete montañas y de fiordos.",
    "El compositor de «En la gruta del rey de la montaña» nació acá.",
    "Mi muelle se llama Bryggen y mi nombre empieza con B."
  ]},
  { nombre: "Isla de Pascua, Chile", lat: -27.15, lon: -109.43, dificultad: 3, pistas: [
    "Mi vecino habitado más cercano está a más de 2.000 km, y es una isla de unas 50 personas.",
    "Pertenezco a un país sudamericano largo y angosto, que queda a unos 3.500 km de acá.",
    "Mi único pueblo está en la punta suroeste de una isla triangular con un volcán en cada esquina.",
    "Mis estatuas gigantes miran hacia adentro de la isla, no hacia el mar.",
    "Los europeos llegaron un domingo de resurrección, y de ahí viene mi nombre."
  ]},
  { nombre: "Samarcanda, Uzbekistán", lat: 39.65, lon: 66.96, dificultad: 3, pistas: [
    "Fui la joya de la Ruta de la Seda; según la leyenda, acá unos prisioneros chinos enseñaron a fabricar papel.",
    "Mi país está rodeado solo de países sin salida al mar, y su nombre termina en «-istán».",
    "Estoy a unos 270 km al suroeste de la capital de mi país.",
    "Un conquistador rengo del siglo XIV me hizo capital de su imperio y está enterrado acá.",
    "Mi plaza Registán tiene tres madrazas, y mi nombre empieza con «Sama»."
  ]},
  { nombre: "Quito, Ecuador", lat: -0.18, lon: -78.47, dificultad: 2, pistas: [
    "Estoy a solo 25 km de la línea que parte el mundo en dos, y a casi 3.000 metros de altura.",
    "Mi país usa el dólar estadounidense y es dueño de unas islas que inspiraron a Darwin.",
    "Estoy en un valle alargado al pie de un volcán activo, en el norte de mi país.",
    "En 1978 fui, junto con Cracovia, la primera ciudad declarada Patrimonio de la Humanidad.",
    "Soy la capital de mi país y mi nombre empieza con Q."
  ]},
  { nombre: "Katmandú, Nepal", lat: 27.72, lon: 85.32, dificultad: 2, pistas: [
    "Desde acá salen los vuelos hacia uno de los aeropuertos más peligrosos del mundo, la puerta al techo del planeta.",
    "La bandera de mi país es la única que no es rectangular.",
    "Estoy en un valle a unos 1.400 metros, a unos 160 km de la montaña más alta del mundo.",
    "Tengo una «diosa viviente»: una niña elegida que no puede tocar el suelo fuera de su palacio.",
    "Soy la capital y mi nombre empieza con K."
  ]},
  { nombre: "La Habana, Cuba", lat: 23.11, lon: -82.37, dificultad: 1, pistas: [
    "Por mis calles todavía andan autos de los años 50, porque durante décadas casi no entraron nuevos.",
    "En 1962, por unos misiles instalados en mi país, el mundo estuvo al borde de una guerra nuclear.",
    "Estoy en la costa norte de una isla, a menos de 200 km de Estados Unidos.",
    "Un escritor estadounidense ganador del Nobel vivió cerca y tomaba daiquiris en mi bar El Floridita.",
    "Soy la capital y mi nombre empieza con «La Ha»."
  ]},
  { nombre: "Longyearbyen, Svalbard (Noruega)", lat: 78.22, lon: 15.65, dificultad: 3, pistas: [
    "Acá no se entierra a nadie: el suelo congelado no deja que los cuerpos se descompongan.",
    "Mi archipiélago es de un país escandinavo, pero por un tratado de 1920 cualquiera puede venir a vivir sin visa.",
    "Estoy a unos 1.300 km del Polo Norte: más cerca de él que de la capital de mi país.",
    "Dentro de una montaña cercana hay una bóveda que guarda semillas de todo el mundo.",
    "Mi archipiélago se llama Svalbard."
  ]},
  { nombre: "Adís Abeba, Etiopía", lat: 9.03, lon: 38.74, dificultad: 3, pistas: [
    "En mi museo duerme «Lucy», que durante años fue el ancestro humano más famoso.",
    "Mi país es la cuna del café y tiene su propio calendario, de 13 meses.",
    "Estoy en el centro de mi país, sobre una meseta a 2.350 metros: una de las capitales más altas del mundo.",
    "Soy la sede de la Unión Africana.",
    "Mi nombre significa «flor nueva»."
  ]},
  { nombre: "San Carlos de Bariloche, Argentina", lat: -41.13, lon: -71.31, dificultad: 1, pistas: [
    "En el hemisferio sur, entre lagos y bosques, soy famosa por el chocolate y los perros San Bernardo para la foto.",
    "Mi país ganó tres Mundiales de fútbol.",
    "Estoy al pie de la cordillera, a orillas de un lago enorme, a unos 50 km de Chile.",
    "Miles de estudiantes vienen cada año a festejar acá el fin de la secundaria.",
    "Mi nombre completo empieza con «San Carlos de»."
  ]},
  { nombre: "Seattle, EE. UU.", lat: 47.61, lon: -122.33, dificultad: 2, pistas: [
    "Acá nacieron el grunge y una cadena de café con una sirena en el logo.",
    "Mi país tiene 50 estados, y el mío lleva el nombre de su primer presidente.",
    "Estoy junto a un brazo de mar del Pacífico, a menos de 200 km de Canadá.",
    "Mi torre con forma de platillo volador se construyó para una exposición universal en 1962.",
    "Soy la ciudad más grande del estado de Washington y mi nombre empieza con S."
  ]}
];
