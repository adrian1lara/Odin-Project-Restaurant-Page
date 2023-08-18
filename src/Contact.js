
function componentContact() {
    const contactElement = document.createElement('div');
    contactElement.className = 'contact';

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact';
    contactElement.appendChild(contactTitle);

    return contactElement;
}

export default componentContact