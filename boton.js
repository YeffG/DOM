
export const crearBoton = (textBoton, clase) => {
    const boton = document.createElement("button");
    boton.type = 'button';
    boton.textContent = textBoton;
    boton.classList.add(clase);
    return boton;
}
