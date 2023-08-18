import './style.css';
import componentHome from './Home';
import componentNav from './nav';
import componentMenu from './Menu';
import componentContact from './Contact';

const container = document.getElementById('content');
document.body.appendChild(container);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Show Contact';
contactBtn.addEventListener('click', () => {
    renderComponent(componentContact);
})
container.appendChild(contactBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Show Menu';
menuBtn.addEventListener('click', () => {
    renderComponent(componentMenu);
})

container.appendChild(menuBtn);

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Show Home';
homeBtn.addEventListener('click', () => {
    renderComponent(componentHome);
})

container.appendChild(homeBtn);

//render component
function renderComponent(component) {
    container.innerHTML = '';
    container.appendChild(componentNav());
    container.appendChild(component());
}

//show the nav menu intially
renderComponent(componentHome);

export default renderComponent 