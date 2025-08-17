import './menu.css';

const foodItems = [
  {
    name: "Margherita Pizza",
    desc: "Hand-tossed crust, tomato sauce, fresh mozzarella, basil, olive oil.",
  },
  {
    name: "Classic Cheeseburger",
    desc: "Beef patty, cheddar, house pickles, lettuce, tomato, brioche bun.",
  },
  {
    name: "Herb-Roasted Chicken",
    desc: "Half chicken roasted with rosemary & garlic, served with lemon jus.",
  },
  {
    name: "Creamy Mushroom Pasta",
    desc: "Tagliatelle in garlic-parmesan cream with sautéed mushrooms.",
  },
  {
    name: "Garden Fresh Salad",
    desc: "Mixed greens, cherry tomatoes, cucumber, radish, lemon vinaigrette.",
  },
];

function createFoodItemsElement() {
    const container = document.createElement('div');
    container.className = 'menu-container';
    
    foodItems.forEach(({ name, desc }) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="menu-item">
                <img src="" alt="${name}">
                <h3>${name}</h3>
                <p>${desc}</p>
            </div>
        `
        container.append(div);
    })
    return container;
}

export default function menu() {
    const section = document.createElement('section');
    section.className = 'page-menu';
    section.append(createFoodItemsElement());
    return section;
}

