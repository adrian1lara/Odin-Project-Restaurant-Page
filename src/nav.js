import componentHome from "./Home";
import componentMenu from "./Menu";
import componentContact from "./Contact";
import renderComponent from "./index";

function componentNav() {
    const navMenu = document.createElement('nav');
    navMenu.className = 'nav';

    const navItems = [
        {
            name: "Home",
            link: "#home",
            component: componentHome

        },
        {
            name: "Menu",
            link: "#menu",
            component: componentMenu
    
        },
        {
            name: "Contact",
            link: "#contact",
            component: componentContact
        }
        
    ]


    navItems.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.href = item.link;
        menuItem.textContent = item.name;
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();
            renderComponent(item.component);
        })
        navMenu.appendChild(menuItem);
    })


    return navMenu
}

export default componentNav