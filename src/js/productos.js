//diseño
import lamparaPiramide1 from '../productos/lampara-piramide-1.jpg';
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
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1: mesaComoda1
    },
    {
        id: "2",
        title: 'Lampara Piramide',
        categoriaPadre: "diseño",
        category: 'lamparas',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1: lamparaPiramide1,
    },
    {
        id: "3",
        title: 'Mesa Ratona',
        categoriaPadre: "muebles",
        category: 'mesas',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1: mesaRatona1,
    },
    {
        id: "4",
        title: 'Silla',
        category: 'sillas',
        categoriaPadre: "muebles",
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1: silla1,
        img2: silla2,
    },
    {
        id: "6",
        title: 'Mesa Ratona Estilo Industrial',
        categoriaPadre: "muebles",
        category: 'mesas',
        previewDescription: 'Mesa Ratona Estilo Industrial: Encanto rústico y diseño industrial en una sola pieza. Combina madera maciza y metal para destacar en tu sala de estar. ¡Agrega estilo a tu hogar con esta mesa única!',
        description: "Mesa Ratona Estilo Industrial: Una pieza única para tu sala de estar. Esta mesa combina a la perfección el encanto rústico de la madera maciza con la robustez del metal. Su diseño industrial moderno y sus líneas limpias la convierten en el centro de atención de cualquier espacio. Perfecta para disfrutar de momentos relajantes con familiares y amigos. ¡Agrega un toque de estilo a tu hogar con esta mesa ratona de inspiración industrial!"

        ,

        img1: mesaRatonaIndustrial1,
        img2: mesaRatonaIndustrial2,
        img3: mesaRatonaIndustrial3,
    },
    {
        id: "7",
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
        id: "8",
        title: 'Lámpara estilo industrial rectangular',
        categoriaPadre: "diseño",
        category: 'lamparas',
        description: 'Agrega un toque de sofisticación a tu hogar u oficina con esta lámpara estilo industrial rectangular.' 
          + ` Con su diseño moderno y acabado metálico, proporciona una iluminación directa y focalizada para resaltar cualquier espacio. ` +
          ' Fácil de instalar y versátil en su uso, esta lámpara es perfecta para cualquier ambiente contemporáneo.',
        previewDescription: 'Agrega un toque de sofisticación a tu hogar u oficina con esta lámpara estilo industrial rectangular.',
        img1: lamparaIndustrialRectangular1,
        img2: lamparaIndustrialRectangular2
      },
      {
        id: "9",
        title: 'Escritorio estilo industrial',
        categoriaPadre: "muebles",
        category: 'escritorios',
        description: '¡Escritorio estilo industrial con dos estantes en venta! Funcional y elegante, este escritorio de alta calidad combina metal negro y madera natural para un aspecto moderno y robusto. Con dos estantes adicionales, ofrece espacio de almacenamiento extra para mantener tus cosas organizadas. Contáctanos ahora para más información.',
        previewDescription: '¡Escritorio estilo industrial con dos estantes en venta! Funcional y elegante, este escritorio de alta calidad combina metal negro y madera natural para un aspecto moderno y robusto.',
        caracteristicas: 'Medidas: 100cm de ancho, 45cm de profundidad y 75cm de altura',
        img1: escritorioIndustrial1,
        img2: escritorioIndustrial2
      },
];

export default products;


export const getProductsByCategory = (categoriaPadre) => {
    return products.filter(product => product.categoriaPadre === categoriaPadre);
};