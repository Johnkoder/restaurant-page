
export default function home() {
    const section = document.createElement('section');
    section.className = 'page-home';
    section.innerHTML = `
        <h1>Savory Street</h1>
        <p>
            “At Savory Street, we believe food is more than just a meal — it’s a moment to savor. Our chefs prepare each dish with love, using only the freshest ingredients. Whether you’re stopping by for a quick lunch or celebrating a special occasion, we’re here to make every visit memorable.
        </p>

        <div>
            <h2>Location</h2>
            <p>123 True Drive, BrieVille, Dune</p>
        </div>
    `;
    return section;
}