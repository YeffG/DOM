
export const crearFooter = () => {
    const footer = document.createElement("footer");

    const nav = document.createElement("nav");

    const ul = document.createElement("ul");

    const links = ["Facebook", "Twitter", "Instagram"];
    links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link;
        li.appendChild(a);
        ul.appendChild(li);
    });

    const address = document.createElement("address");

    const contact = document.createElement("p");
    contact.textContent = "Contacto:";
    const email = document.createElement("p");
    email.innerHTML = 'Email: <a href="mailto:info@example.com">info@example.com</a>';
    const phone = document.createElement("p");
    phone.innerHTML = 'Teléfono: <a href="tel:+11234567890">+1 (123) 456-7890</a>';

    const stilo = document.createElement("style");
    stilo.textContent = `
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #f4f4f4;
    }

    footer nav {
        display: flex;
        list-style-type: none;
    }

    footer nav a {
        text-decoration: none;
        color: #333;
        margin: 0 10px;
    }

footer nav a:hover {
    color: #007bff;
}

footer address {
    margin-left: auto;
}

footer address a {
    text-decoration: none;
    color: #333;
}

footer address a:hover {
    color: #007bff;
}`;


    nav.appendChild(ul);
    footer.appendChild(nav);
    address.appendChild(contact);
    address.appendChild(email);
    address.appendChild(phone);
    footer.appendChild(address);
    footer.appendChild(stilo);
    return footer;
}

