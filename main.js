import { crearSection } from "./section.js";
import { crearBoton } from "./boton.js";
import { crearImagen } from "./imagen.js";
import { crearTexto } from "./texto.js";
import { crearFooter } from "./footer.js";
import { crearHeader } from "./header.js";


//HEADER
const head = crearHeader();
document.body.appendChild(head);

//DIV PRINCIPAL
const main = document.createElement("div");
document.body.appendChild(main);
main.classList.add("navigation");

//Section de inicio
const sectionInicio = crearSection("Inicio", "navigation", "lightgray");
main.appendChild(sectionInicio);


const contenedorProducto = (textBoton, rutaImagen, nombreProduct, idDescrip, textoDescrip, precio) => {
    const div = document.createElement("div");
    div.classList.add("contenedor-producto");

    //boton VER del contenedor
    const boton = crearBoton(textBoton, "boton-producto")

    //imagen del producto en el contenedor
    const imagen = crearImagen(rutaImagen, "imagen-producto");
    
    //nombre del producto
    const nombre = crearTexto("h3", nombreProduct, "texto-producto");

    //section de descripcion del producto
    const sectionDescrip = crearSection(idDescrip, "section-descripcion");
    const textDescrip = crearTexto("p", textoDescrip, "texto-producto");
    const precioP = crearTexto("h3", precio, "texto-producto");
    const botonComprar = crearBoton("Comprar", "boton-producto");
    sectionDescrip.appendChild(precioP);
    sectionDescrip.appendChild(textDescrip);
    sectionDescrip.appendChild(botonComprar);

    // Ocultar el section inicialmente
    sectionDescrip.style.display = 'none';

    // Agregar un evento al boton "ver" para mostrar/ocultar la descripcion
    boton.addEventListener('click', () => {
        if (sectionDescrip.style.display === 'none') {
            sectionDescrip.style.display = 'block';
            imagen.width = "400";
            imagen.height = "400";
        } else {
            sectionDescrip.style.display = 'none';
            imagen.width = "300";
            imagen.height = "300";
        }
    });


    //ESTILO
    const style = document.createElement("style");
    style.textContent = `
    .navigation {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      
      .contenedor-producto {
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 2px solid white;
        margin: 10px;
        padding: 10px;
      }
      
  
      .imagen-producto {
        margin-bottom: 10px;
        border-radius: 10px;
      }
  
      .texto-producto {
        font-family: Arial, sans-serif;
        color: #333;
        font-weight: bold;
        font-size: 18px;
      }
  
      .boton-producto {
        background-color: #87CEEB;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border-radius: 5px;
      }
  
      .section-descripcion {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
    `;

    div.appendChild(style);
    div.appendChild(imagen);
    div.appendChild(nombre);
    div.appendChild(boton);
    div.appendChild(sectionDescrip);
    return div;
}

//contenedor para producto en sectionInicio
const contenedor1 = contenedorProducto("Ver", "./imagenes/oversizeCamisa.png", "Camisa Azul Oversize", "DescripCamisa","Camisa azul de algodon estilo oversize", "$ 50.000");
sectionInicio.appendChild(contenedor1);
const contenedor2 = contenedorProducto("Ver", "./imagenes/pantalonJogger.jpeg", "Pantalón Jogger Azul Marino", "DescripPantalon", "Pantalon tipo Jogger en polyester color azul marino", "$ 80.000");
sectionInicio.appendChild(contenedor2);
const contenedor3 = contenedorProducto("Ver", "./imagenes/gorra.jpeg", "Gorra Negra", "DescripGorra", "Gorra para adulto color negro", "$ 30.000");
sectionInicio.appendChild(contenedor3);



//FOOTER
const foot = crearFooter();
document.body.appendChild(foot);








