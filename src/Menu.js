import burgerImage from './images/burger.png';
import cheeseburgerImage from './images/cheeseburger.png';
import baconburgerImage from './images/baconburger.png';


function componentMenu() {
    const menuElement = document.createElement('div');
    const title = document.createElement('h1');

    const burgers = [
        {
            name: 'X Burger',
            price: '15$',
            description: 'The best burger in the world!',
            image: burgerImage
        },
        {
            name: 'Cheese Burger',
            price: '10$',
            description: 'The best burger in the world!',
            image: cheeseburgerImage
        },
        {
            name: 'Bacon Burger',
            price: '12$',
            description: 'The best burger in the world!',
            image: baconburgerImage
        }

    ]

    title.textContent = 'X Burgers Menu';
    menuElement.className = 'menu';

    menuElement.appendChild(title);

    burgers.map(burger => {
        const menuItem = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h2');
        const price = document.createElement('p');
        const description = document.createElement('p');


        image.src = burger.image;
        image.alt = burger.name;
        name.textContent = burger.name;
        description.textContent = burger.description;
        price.textContent = burger.price;
        
        


        menuItem.appendChild(name);
        menuItem.appendChild(price);
        menuItem.appendChild(description);
        menuItem.appendChild(image);

        menuElement.appendChild(menuItem);
    })

    
    

    return menuElement;
}

export default componentMenu