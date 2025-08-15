
export default function menu() {
    const section = document.createElement('section');
    section.className = 'page-menu';
    section.innerHTML = `
        <h1>Menu</h1>
        <div class="menu-container">
            <div class="menu-item">
                <h3>Name</h3>
                <p>Description</p>
            </div>
        </div>
    `;
    return section;
}