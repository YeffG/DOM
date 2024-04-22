export const crearTexto = (tipo, texto, clase) => {
    const text = document.createElement(tipo);
    text.textContent = texto;
    text.classList.add(clase);
    return text;
}