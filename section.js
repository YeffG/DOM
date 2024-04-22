export const crearSection = (id, clase, color) => {
    const section = document.createElement("section");
    section.id = id;
    section.classList.add(clase);
    section.style.backgroundColor = color;
    return section;
}
