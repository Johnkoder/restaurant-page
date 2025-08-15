import home from './home.js';
import contact from './contact.js';
import menu from './menu.js';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

function replaceHTML(section) {
    content.replaceChildren();  
    content.append(section);
}

homeBtn.addEventListener('click', ()=> replaceHTML(home()));
menuBtn.addEventListener('click', ()=> replaceHTML(menu()));
contactBtn.addEventListener('click', ()=> replaceHTML(contact()));