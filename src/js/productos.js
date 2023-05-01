import lamparaPiramide1 from '../productos/lampara-piramide-1.jpg';
import mesaRatona1 from '../productos/mesa-ratona-1.jpeg';
import silla1 from '../productos/silla-1.jpeg';
import silla2 from '../productos/silla-2.jpeg';
import mesaRatonaIndustrial1 from '../productos/mesa-ratona-estilo-industrial-1.jpg';
import mesaRatonaIndustrial2 from '../productos/mesa-ratona-estilo-industrial-2.jpg';
import mesaRatonaIndustrial3 from '../productos/mesa-ratona-estilo-industrial-3.jpg';	
import mesaComoda1 from '../productos/mesa-comoda-1.jpeg';
import tabureteHierroMadera1 from '../productos/taburete-banqueta-hierro-madera-1.jpg';
import tabureteHierroMadera2 from '../productos/taburete-banqueta-hierro-madera-2.jpg';


export const products = [
    {
        id: "1",
        title: 'Mesa Comoda',
        category:'mesas',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1:mesaComoda1
    },
    {
        id: "2",
        title: 'Lampara Piramide',
        category:'lamparas',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1:lamparaPiramide1,
    },
    {
        id: "3",
        title: 'Mesa Ratona',
        category:'mesas',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1:mesaRatona1,
    },
    {
        id: "4",
        title:  'Silla',
        category:'sillas',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1:silla1,
        img2:silla2,
    },
    {
        id: "5",
        title:  'Mesa Ratona Estilo Industrial',
        category:'mesas',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        img1:mesaRatonaIndustrial1,
        img2:mesaRatonaIndustrial2,
        img3:mesaRatonaIndustrial3,
    },
    {
        id: "6",
        title:  'Mesa Ratona Estilo Industrial',
        category:'mesas',
        previewDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti quasi harum deleniti at quam ea, quis adipisci. Veniam, esse',
    
        img1:mesaRatonaIndustrial1,
        img2:mesaRatonaIndustrial2,
        img3:mesaRatonaIndustrial3,
    },
    {
        id: "7",
        title:  'Taburete Banqueta de Hierro y Madera',
        category:'sillas',
        description: 'Banquetas Taburetes de diseño estilo industrial fabricados artesanalmente en hierro y madera.'+ 
        'Ideal para desayunador, barra, quinchos, bar.'+
        'Fabricadas con estructura de hierro 20/20 y madera maciza de pino de 2 cm de espesor.' +
        'Terminación con 3 manos de Cetol protector elástico para todo tipo de maderas.',
        previewDescription: 'Banquetas Taburetes de diseño estilo industrial fabricados artesanalmente en hierro y madera.',
        img1:tabureteHierroMadera1,
        img2:tabureteHierroMadera2
    },
];

export default products;