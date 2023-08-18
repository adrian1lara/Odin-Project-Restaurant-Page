import Hamburguesa from './images/burger.png';

function componentHome() {
    // elements 
    const homeElement = document.createElement('div');
    const text = document.createElement('p');
    const title = document.createElement('h1');
    
    title.textContent = 'X Burgers';
    
    // image 
    const burger = new Image();
    burger.src = Hamburguesa;

    text.textContent = `This a new hamburger franchise, we want to expand 
    our borders to the internet, we have the best hamburgers in the world!`;

    // className for styling
    homeElement.className = 'home';
    
    homeElement.appendChild(title);
    homeElement.appendChild(burger);
    homeElement.appendChild(text);

    
    return homeElement;
}

export default componentHome

