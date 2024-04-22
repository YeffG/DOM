export const crearImagen = (rutaImagen, claseImg) => {
    const imagen = document.createElement("img");
    imagen.src = rutaImagen;
    imagen.classList.add(claseImg);
    imagen.width = "300";
    imagen.height = "300";
    return imagen;
}

