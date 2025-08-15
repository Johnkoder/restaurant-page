
export default function contact() {
    const section = document.createElement('section');
    section.className = 'page-contact';
    section.innerHTML = `
        <h1>Contact Us</h1>
        <div>
            <p>John Doe</p>
            <div>9999-999-999</div>
        </div>
    `;
    return section;
}