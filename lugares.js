// Banco curado de escondites. Escalera de 5 pistas por lugar:
// 1) continente/región + un dato característico (el que sabe lo puede sacar de entrada)
// 2) el país, por un rasgo inconfundible
// 3) dónde dentro del país
// 4) un dato icónico
// 5) casi el nombre
window.LUGARES = [
  { nombre: "Ushuaia, Argentina", lat: -54.80, lon: -68.30, pistas: [
    "Estoy en el extremo sur de América del Sur. Me consideran la ciudad más austral del mundo.",
    "Mi país es el del tango y el mate, y su capital está a más de 2.300 km de mí.",
    "Estoy en una isla que mi país comparte con Chile, a orillas de un canal.",
    "Desde mi puerto zarpa la mayoría de los cruceros que van a la Antártida.",
    "Soy la capital de Tierra del Fuego, miro al Canal Beagle y mi nombre empieza con U."
  ]},
  { nombre: "Reikiavik, Islandia", lat: 64.15, lon: -21.94, pistas: [
    "Estoy en una isla del Atlántico Norte, cerca del círculo polar ártico. Soy la capital más al norte del mundo.",
    "Mi país está lleno de volcanes, géiseres y glaciares, y tiene menos de 400.000 habitantes.",
    "Estoy en la costa suroeste de la isla, junto a una bahía.",
    "En 1972 se jugó acá el «match del siglo» de ajedrez entre Fischer y Spassky.",
    "Mi nombre significa «bahía humeante» y empieza con R."
  ]},
  { nombre: "Tombuctú, Malí", lat: 16.77, lon: -3.01, pistas: [
    "Estoy en África Occidental, en el borde sur del Sahara. En español se usa mi nombre para decir «el lugar más lejano del mundo».",
    "Mi país no tiene salida al mar, es uno de los más grandes de África y su capital es Bamako.",
    "Estoy a unos 15 km del río Níger, justo donde hace su gran curva hacia el norte.",
    "Mis mezquitas de barro y mis manuscritos medievales son Patrimonio de la Humanidad.",
    "Mi nombre empieza con «Tomb»."
  ]},
  { nombre: "Ulán Bator, Mongolia", lat: 47.92, lon: 106.92, pistas: [
    "Estoy en Asia, entre Rusia y China. Soy la capital más fría del mundo.",
    "Mi país es la tierra de Gengis Kan y uno de los menos densamente poblados del planeta.",
    "Estoy en el centro-norte del país, a unos 1.350 metros, en el valle del río Tuul.",
    "Casi la mitad de la población del país vive acá, muchos en tiendas tradicionales llamadas ger.",
    "Mi nombre significa «héroe rojo» y empieza con «Ulán»."
  ]},
  { nombre: "Valparaíso, Chile", lat: -33.05, lon: -71.62, pistas: [
    "Estoy en la costa pacífica de América del Sur. Soy un puerto de cerros de colores que se suben con ascensores centenarios.",
    "Mi país es largo y angosto, encerrado entre la cordillera de los Andes y el océano.",
    "Estoy a unos 110 km al noroeste de la capital de mi país.",
    "Soy sede del Congreso Nacional, y Neruda tuvo acá su casa La Sebastiana.",
    "Me dicen «Valpo» y comparto bahía con Viña del Mar."
  ]},
  { nombre: "Cusco, Perú", lat: -13.53, lon: -71.97, pistas: [
    "Estoy en los Andes de América del Sur, a unos 3.400 metros. Fui la capital del Imperio inca.",
    "Mi país es famoso por el ceviche y tiene costa, Andes y Amazonia.",
    "Estoy en el sur de la sierra de mi país, a unos 570 km al sureste de la capital.",
    "Desde acá sale el tren hacia Machu Picchu.",
    "En quechua mi nombre significa «ombligo del mundo» y empieza con C."
  ]},
  { nombre: "Estambul, Turquía", lat: 41.01, lon: 28.98, pistas: [
    "Estoy en el sudeste de Europa, justo en el límite con Asia. Fui capital del Imperio bizantino y del Imperio otomano.",
    "Mi país es famoso por el kebab, los baños turcos y los globos de Capadocia.",
    "Estoy en el noroeste del país, a ambos lados del estrecho que une el mar Negro con el de Mármara.",
    "Mi Santa Sofía fue iglesia, mezquita, museo y otra vez mezquita.",
    "Antes me llamaba Constantinopla y hoy mi nombre empieza con «Estam»."
  ]},
  { nombre: "Zanzíbar, Tanzania", lat: -6.16, lon: 39.19, pistas: [
    "Estoy en una isla del océano Índico, frente a la costa de África Oriental. Me dicen «la isla de las especias».",
    "Mi país tiene la montaña más alta de África, el Kilimanjaro.",
    "Estoy a unos 70 km al norte de Dar es-Salaam, cruzando el mar.",
    "Freddie Mercury nació acá, en el casco antiguo llamado Stone Town.",
    "Mi nombre empieza con Z."
  ]},
  { nombre: "Kioto, Japón", lat: 35.01, lon: 135.77, pistas: [
    "Estoy en el este de Asia. Fui la capital imperial de mi país durante más de mil años.",
    "Mi país es un archipiélago famoso por el sushi, los trenes bala y el monte Fuji.",
    "Estoy en el centro de la isla principal, a unos 45 km de Osaka.",
    "Un protocolo climático firmado acá en 1997 lleva mi nombre.",
    "Si cambiás el orden de mis sílabas, obtenés el nombre de la capital actual."
  ]},
  { nombre: "Nueva Orleans, EE. UU.", lat: 29.95, lon: -90.07, pistas: [
    "Estoy en América del Norte, cerca del golfo de México. Me consideran la cuna del jazz.",
    "Mi país tiene 50 estados; el mío fue colonia francesa y lleva el nombre de un rey de Francia.",
    "Estoy cerca de la desembocadura del río Misisipi, entre el río y un gran lago.",
    "Cada año, antes de Cuaresma, celebro el Mardi Gras.",
    "Mi nombre incluye «Orleans», como una ciudad de Francia."
  ]},
  { nombre: "Alice Springs, Australia", lat: -23.70, lon: 133.88, pistas: [
    "Estoy en Oceanía, casi en el centro de un país-continente, en pleno desierto rojo del «Outback».",
    "Mi país es famoso por los canguros, los koalas y la Ópera de Sídney.",
    "Estoy en el sur del Territorio del Norte, a más de 1.000 km del mar más cercano.",
    "A unos 450 km por ruta está Uluru, la gran roca roja sagrada.",
    "En mi país me dicen simplemente «Alice»."
  ]},
  { nombre: "Marrakech, Marruecos", lat: 31.63, lon: -7.99, pistas: [
    "Estoy en el norte de África. Me apodan «la ciudad roja» por el color de mis murallas.",
    "Mi país mira al Atlántico y al Mediterráneo, y lo separa de Europa un estrecho de 14 km.",
    "Estoy tierra adentro, al pie de la cordillera del Atlas, a unos 150 km de la costa atlántica.",
    "Mi plaza Jemaa el-Fna se llena cada noche de narradores y encantadores de serpientes.",
    "Mi nombre dio origen al nombre de mi país en varios idiomas."
  ]},
  { nombre: "San Petersburgo, Rusia", lat: 59.94, lon: 30.31, pistas: [
    "Estoy en el norte de Europa, sobre el mar Báltico. Fui capital de un imperio durante dos siglos y en junio casi no oscurece.",
    "Mi país es el más extenso del mundo.",
    "Estoy en la desembocadura del río Nevá, a unos 630 km al noroeste de la capital actual.",
    "Mi museo, el Hermitage, ocupa el antiguo Palacio de Invierno de los zares.",
    "Me fundó Pedro el Grande y llevo el nombre de un santo."
  ]},
  { nombre: "Manaos, Brasil", lat: -3.12, lon: -60.02, pistas: [
    "Estoy en América del Sur, en el corazón de la selva amazónica. Tengo un teatro de ópera en plena selva.",
    "Mi país es el más grande de América del Sur y habla portugués.",
    "Estoy donde el río Negro se junta con el Solimões para formar el Amazonas.",
    "Me hice rica con el caucho a fines del siglo XIX y fui sede del Mundial 2014.",
    "Soy la capital del estado de Amazonas y mi nombre empieza con «Man»."
  ]},
  { nombre: "Ciudad del Cabo, Sudáfrica", lat: -33.92, lon: 18.42, pistas: [
    "Estoy en el extremo sur de África. Detrás mío hay una montaña de cima chata llamada «la Mesa».",
    "Mi país tiene tres capitales y lo presidió Nelson Mandela.",
    "Estoy en la costa suroeste del país, muy cerca del Cabo de Buena Esperanza.",
    "Frente a mi costa está Robben Island, donde Mandela estuvo preso 18 años.",
    "En inglés me llamo Cape Town."
  ]},
  { nombre: "Hanói, Vietnam", lat: 21.03, lon: 105.85, pistas: [
    "Estoy en el sudeste asiático. Soy una capital que cumplió mil años en 2010.",
    "Mi país es largo y angosto, con forma de S, y es famoso por el pho.",
    "Estoy en el norte del país, en el delta del río Rojo, a unos 100 km del mar.",
    "En mi centro está embalsamado Ho Chi Minh.",
    "Mi nombre empieza con H y significa «dentro del río»."
  ]},
  { nombre: "Venecia, Italia", lat: 45.44, lon: 12.33, pistas: [
    "Estoy en el sur de Europa. Estoy construida sobre más de cien islas y en mis calles no hay autos.",
    "Mi país tiene forma de bota.",
    "Estoy en el noreste del país, en una laguna del mar Adriático.",
    "Mi transporte típico es la góndola y mi plaza principal es la de San Marcos.",
    "Mi nombre empieza con V y mi carnaval de máscaras es famoso en todo el mundo."
  ]},
  { nombre: "Ciudad de México, México", lat: 19.43, lon: -99.13, pistas: [
    "Estoy en América del Norte, a más de 2.200 metros. Me construyeron sobre el lago donde los aztecas fundaron su capital.",
    "Mi país es famoso por los tacos, el tequila y el Día de Muertos.",
    "Estoy en el centro-sur del país, en un valle rodeado de volcanes como el Popocatépetl.",
    "Fui sede de los Juegos Olímpicos de 1968 y tengo una plaza enorme llamada el Zócalo.",
    "Me llamo igual que mi país."
  ]},
  { nombre: "Honolulu, EE. UU.", lat: 21.31, lon: -157.86, pistas: [
    "Estoy en medio del océano Pacífico, en un archipiélago volcánico. Mi playa más famosa es Waikiki.",
    "Pertenezco al país de las barras y las estrellas: soy la capital de su estado número 50.",
    "Estoy en la costa sur de la isla de Oahu, a unos 3.900 km de California.",
    "Muy cerca está Pearl Harbor, atacado por sorpresa en 1941.",
    "Mi nombre empieza con «Hono»."
  ]},
  { nombre: "Dubái, Emiratos Árabes Unidos", lat: 25.20, lon: 55.27, pistas: [
    "Estoy en Medio Oriente, sobre el golfo Pérsico. Tengo el edificio más alto del mundo.",
    "Mi país es una federación de siete emiratos.",
    "Estoy en la costa, a unos 130 km al noreste de la capital, Abu Dabi.",
    "Construí islas artificiales con forma de palmera.",
    "Soy el emirato más poblado de mi país y mi nombre empieza con D."
  ]},
  { nombre: "Bergen, Noruega", lat: 60.39, lon: 5.32, pistas: [
    "Estoy en el norte de Europa, entre fiordos. Mi muelle de casas de madera de colores viene de la época de la Liga Hanseática.",
    "Mi país es famoso por los fiordos, el salmón y las auroras boreales, y se hizo rico con el petróleo.",
    "Estoy en la costa oeste del país, a unos 300 km al oeste de la capital.",
    "Me rodean siete montañas y tengo fama de ser de las ciudades más lluviosas de Europa.",
    "Mi muelle se llama Bryggen y mi nombre empieza con B."
  ]},
  { nombre: "Isla de Pascua, Chile", lat: -27.15, lon: -109.43, pistas: [
    "Estoy en una isla perdida en el Pacífico Sur, a más de 2.000 km del vecino habitado más cercano. Mis habitantes originarios hablan rapanui.",
    "Pertenezco a un país sudamericano largo y angosto que está a unos 3.500 km de acá.",
    "Mi único pueblo, Hanga Roa, está en la costa oeste de la isla.",
    "Mis gigantescas estatuas de piedra se llaman moáis.",
    "Los europeos llegaron un domingo de resurrección, y de ahí viene mi nombre."
  ]},
  { nombre: "Samarcanda, Uzbekistán", lat: 39.65, lon: 66.96, pistas: [
    "Estoy en Asia Central, sobre la antigua Ruta de la Seda. Mi plaza Registán está rodeada por tres madrazas de azulejos.",
    "Mi país es uno de los dos del mundo doblemente sin litoral, y su nombre termina en «-istán».",
    "Estoy a unos 270 km al suroeste de la capital de mi país, Taskent.",
    "Tamerlán me hizo capital de su imperio en el siglo XIV y está enterrado acá.",
    "Mi nombre empieza con «Sama»."
  ]},
  { nombre: "Quito, Ecuador", lat: -0.18, lon: -78.47, pistas: [
    "Estoy en América del Sur, casi exactamente sobre la línea del ecuador, a unos 2.850 metros.",
    "Mi país lleva el nombre de esa línea y también le pertenecen las islas Galápagos.",
    "Estoy en un valle de los Andes, al pie del volcán Pichincha, en el norte del país.",
    "Cerca tengo un monumento llamado «La Mitad del Mundo».",
    "Soy la capital de mi país y mi nombre empieza con Q."
  ]},
  { nombre: "Katmandú, Nepal", lat: 27.72, lon: 85.32, pistas: [
    "Estoy en el sur de Asia, en un valle del Himalaya. Muchos montañistas pasan por acá antes de ir al Everest.",
    "Mi país tiene la única bandera nacional que no es rectangular.",
    "Estoy en el centro del país, a unos 160 km al oeste-suroeste del Everest.",
    "Tengo una «diosa viviente»: una niña llamada Kumari.",
    "Soy la capital y mi nombre empieza con K."
  ]},
  { nombre: "La Habana, Cuba", lat: 23.11, lon: -82.37, pistas: [
    "Estoy en una isla del Caribe. Por mis calles todavía circulan autos estadounidenses de los años 50.",
    "Mi país es la isla más grande del Caribe, famosa por sus puros y su salsa.",
    "Estoy en la costa norte de la isla, a unos 170 km de Cayo Hueso, en la Florida.",
    "Mi malecón recorre unos 8 km frente al mar, y Hemingway tomaba daiquiris en El Floridita.",
    "Soy la capital y mi nombre empieza con «La Ha»."
  ]},
  { nombre: "Longyearbyen, Svalbard (Noruega)", lat: 78.22, lon: 15.65, pistas: [
    "Estoy en el Ártico, en un archipiélago donde hay más osos polares que personas. Soy uno de los pueblos más al norte del planeta.",
    "Mi archipiélago pertenece a un país escandinavo famoso por sus fiordos.",
    "Estoy a unos 800 km al norte del extremo de Europa continental: más cerca del Polo Norte que de la capital de mi país.",
    "Cerca mío hay una bóveda que guarda semillas de todo el mundo por si llega una catástrofe.",
    "Mi archipiélago se llama Svalbard."
  ]},
  { nombre: "Adís Abeba, Etiopía", lat: 9.03, lon: 38.74, pistas: [
    "Estoy en el Cuerno de África, a unos 2.350 metros. Soy la sede de la Unión Africana.",
    "Mi país es la cuna del café y nunca fue colonizado, salvo una ocupación italiana de cinco años.",
    "Estoy en el centro del país, en una meseta, a más de 500 km de la costa más cercana.",
    "En mi museo nacional está «Lucy», un esqueleto de homínido de 3,2 millones de años.",
    "Soy la capital y mi nombre significa «flor nueva»."
  ]},
  { nombre: "San Carlos de Bariloche, Argentina", lat: -41.13, lon: -71.31, pistas: [
    "Estoy en la Patagonia, en América del Sur. Me conocen por el chocolate y por los viajes de egresados.",
    "Mi país es el de Messi, el mate y el asado.",
    "Estoy al pie de la cordillera de los Andes, a orillas de un gran lago, cerca de la frontera con Chile.",
    "Mi cerro más famoso para esquiar es el Catedral, y miro al lago Nahuel Huapi.",
    "Mi nombre completo empieza con «San Carlos de»."
  ]},
  { nombre: "Seattle, EE. UU.", lat: 47.61, lon: -122.33, pistas: [
    "Estoy en América del Norte, sobre el Pacífico. Acá abrió el primer Starbucks y nació el grunge.",
    "Mi país tiene 50 estados; el mío lleva el nombre de su primer presidente.",
    "Estoy en el noroeste del país, a unos 170 km al sur de la frontera con Canadá.",
    "Mi torre Space Needle se hizo para la Exposición de 1962, y a la vista tengo el volcán Rainier.",
    "Soy la ciudad más grande del estado de Washington y mi nombre empieza con S."
  ]}
];
