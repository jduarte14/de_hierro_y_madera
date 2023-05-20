//luminaria
import lamparaIndustrialRectangular1 from '../productos/lampara-industrial-rectangular-1.jpg'
import lamparaIndustrialRectangular2 from '../productos/lampara-industrial-rectangular-2.jpg'


//Muebles
import mesaRatona1 from '../productos/mesa-ratona-1.jpeg';
import silla1 from '../productos/silla-1.jpeg';
import silla2 from '../productos/silla-2.jpeg';
import mesaRatonaIndustrial1 from '../productos/mesa-ratona-estilo-industrial-1.jpg';
import mesaRatonaIndustrial2 from '../productos/mesa-ratona-estilo-industrial-2.jpg';
import mesaRatonaIndustrial3 from '../productos/mesa-ratona-estilo-industrial-3.jpg';
import mesaComoda1 from '../productos/mesa-comoda-1.jpeg';
import tabureteHierroMadera1 from '../productos/taburete-banqueta-hierro-madera-1.jpg';
import tabureteHierroMadera2 from '../productos/taburete-banqueta-hierro-madera-2.jpg';
import escritorioIndustrial1 from '../productos/escritorio-estilo-industrial.jpg';
import escritorioIndustrial2 from '../productos/escritorio-estilo-industrial-2.jpg';
export const products = [
  {
    id: "1",
    title: 'Mesa Comoda',
    categoriaPadre: "muebles",
    category: 'mesas',
    description:  'La Mesa Cómoda es un mueble versátil y portátil, ideal para diversas aplicaciones. Está fabricada con una combinación de hierro y madera, lo que le confiere un aspecto robusto y atractivo. Con su diseño funcional y resistente, esta mesa ofrece una superficie amplia y cómoda para colocar objetos y realizar diversas actividades. Su estructura de hierro asegura estabilidad y durabilidad, mientras que la madera aporta calidez y estilo. Ya sea en el hogar, la oficina o cualquier otro espacio, esta Mesa Cómoda es una opción práctica y atractiva para satisfacer tus necesidades.',
    previewDescription: 'La Mesa Cómoda es un mueble versátil y portátil, ideal para diversas aplicaciones. Está fabricada con una combinación de hierro y madera',
    img1: mesaComoda1
  },
  {
    id: "2",
    title: 'Mesa Ratona para living',
    categoriaPadre: "muebles",
    category: 'mesas',
    description: ' Con un diseño elegante y funcional, esta mesa ofrece una superficie espaciosa para colocar tus objetos decorativos favoritos, revistas, libros o incluso para disfrutar de una taza de café. Fabricada con materiales de alta calidad, como madera maciza y metal resistente, la Mesa Ratona para living combina durabilidad y estilo. Su aspecto sofisticado se adapta a diferentes estilos de decoración y agrega un toque de elegancia a tu espacio. Ya sea que necesites un lugar para descansar tus pies, colocar bandejas o simplemente decorar, esta mesa es el mueble perfecto para crear un ambiente acogedor en tu sala de estar.',
    previewDescription: 'Con un diseño elegante y funcional, esta mesa ofrece una superficie espaciosa para colocar tus objetos decorativos favoritos',
    img1: mesaRatona1,
  },
  {
    id: "3",
    title: 'Banqueta de barra estilo industrial ',
    category: 'sillas',
    categoriaPadre: "muebles",
    previewDescription: 'banqueta de barra estilo industrial. Fabricada con hierro resistente y un acabado en pintura negra mate,',
    description: 'banqueta de barra estilo industrial. Fabricada con hierro resistente y un acabado en pintura negra mate, combina a la perfección el estilo moderno con la comodidad.',
    caracteristicas:'medidas 80cm de altura , 31 de ancho',
    img1: silla1,
    img2: silla2,
  },
  {
    id: "4",
    title: 'Mesa Ratona de hierro ',
    categoriaPadre: "muebles",
    category: 'mesas',
    previewDescription: 'Mesa Ratona Estilo Industrial: Encanto rústico y diseño industrial en una sola pieza. Combina madera maciza y metal para destacar en tu sala de estar.',
    description: " Esta mesa combina a la perfección el encanto rústico de la madera maciza con la robustez del metal. "

    ,

    img1: mesaRatonaIndustrial1,
    img2: mesaRatonaIndustrial2,
    img3: mesaRatonaIndustrial3,
  },
  {
    id: "5",
    title: 'Taburete Banqueta de Hierro y Madera',
    categoriaPadre: "muebles",
    category: 'taburetes',
    description: 'Banquetas Taburetes de diseño estilo industrial fabricados artesanalmente en hierro y madera.' +
      'Ideal para desayunador, barra, quinchos, bar.' +
      'Fabricadas con estructura de hierro 20/20 y madera maciza de pino de 2 cm de espesor.' +
      'Terminación con 3 manos de Cetol protector elástico para todo tipo de maderas.',
    previewDescription: 'Banquetas Taburetes de diseño estilo industrial fabricados artesanalmente en hierro y madera.',
    img1: tabureteHierroMadera1,
    img2: tabureteHierroMadera2
  },
  {
    id: "6",
    title: 'Lámpara estilo industrial rectangular',
    categoriaPadre: "luminaria",
    category: 'lamparas',
    description: '¡Ilumina tu hogar con estilo industrial! Lámpara rectangular en oferta. ¡Compra ahora y dale un toque único a tu espacio!',
    previewDescription: 'Agrega un toque de sofisticación a tu hogar u oficina con esta lámpara estilo industrial rectangular.',
    caracteristicas:'Medidas 45x26 en caño de 40x40 base de madera masiza , porta lamparas e37, no incluye focos',
    img1: lamparaIndustrialRectangular1,
    img2: lamparaIndustrialRectangular2
  },
  {
    id: "7",
    title: 'Escritorio estilo industrial',
    categoriaPadre: "muebles",
    category: 'escritorios',
    description: '¡Escritorio estilo industrial con dos estantes en venta! Funcional y elegante, este escritorio de alta calidad combina metal negro y madera natural para un aspecto moderno y robusto. Con dos estantes adicionales, ofrece espacio de almacenamiento extra para mantener tus cosas organizadas. Contáctanos ahora para más información.',
    previewDescription: 'Este escritorio de alta calidad combina metal negro y madera natural para un aspecto moderno y robusto.',
    caracteristicas: 'Medidas: 100cm de ancho, 45cm de profundidad y 75cm de altura',
    img1: escritorioIndustrial1,
    img2: escritorioIndustrial2
  },
];

export default products;


export const getProductsByCategory = (categoriaPadre) => {
  return products.filter(product => product.categoriaPadre === categoriaPadre);
};