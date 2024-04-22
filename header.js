export const crearHeader = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const links = ["Inicio", "Sobre Nosotros", "Catálogo"];
    links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link;
        li.appendChild(a);
        ul.appendChild(li);
    });

    const section = document.createElement("section");

    const loginButton = document.createElement("button");
    loginButton.textContent = "Iniciar Sesión";
    const signUpButton = document.createElement("button");
    signUpButton.textContent = "Registrarse";

    const stilo = document.createElement("style");
    stilo.textContent = `
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #f4f4f4;
    }
    
    nav ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }
    
    nav ul li {
        margin: 0 10px;
    }
    
    nav ul li a {
        text-decoration: none;
        color: #333;
    }
    
    nav ul li a:hover {
        color: #007bff;
    }
    section button {
        margin: 10px;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    `;



    nav.appendChild(ul);
    header.appendChild(nav);
    section.appendChild(loginButton);
    section.appendChild(signUpButton);
    header.appendChild(section);
    header.appendChild(stilo);

    return header;
}