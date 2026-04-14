const MENU_DATA = [
  {
    category: "Hamburguesas Tradicionales",
    items: [
      { id: 1, name: "Simple", price: 9500 },
      { id: 2, name: "Completa", price: 10900 },
      { id: 3, name: "Especial", price: 13900 }
    ]
  },
  {
    category: "Dobles y Triples",
    items: [
      { id: 4, name: "Carlos JR", price: 14900 },
      { id: 5, name: "Big JR", price: 12000 },
      { id: 6, name: "Big Triple", price: 17200 }
    ]
  },
  {
    category: "Otras Opciones (Gourmet)",
    items: [
      { id: 7, name: "Roma", price: 15500 },
      { id: 8, name: "Houston", price: 15500 },
      { id: 9, name: "Tokio", price: 15500 },
      { id: 10, name: "Madrid", price: 15500 },
      { id: 17, name: "Qatar", price: 15500 },
      { id: 18, name: "Chicago", price: 15500 },
      { id: 19, name: "Singapur", price: 15500 },
      { id: 20, name: "Oklahoma", price: 15500 }
    ]
  },
  {
    category: "Vegetarianas",
    items: [
      { id: 21, name: "Dakota", price: 9900 },
      { id: 22, name: "Tijuana", price: 8700 },
      { id: 23, name: "Orlando", price: 9900 }
    ]
  },
  {
    category: "Sándwiches",
    items: [
      { id: 11, name: "Milanesa Simple", price: 17300 },
      { id: 12, name: "Milanesa Completa", price: 18000 },
      { id: 13, name: "Lomito Simple", price: 17300 },
      { id: 24, name: "Lomito Completo", price: 18000 }
    ]
  },
  {
    category: "Papas Fritas",
    items: [
      { id: 14, name: "Papas con Queso", price: 13200 },
      { id: 15, name: "Papas Queso y Bacon", price: 15900 },
      { id: 16, name: "Porción Tradicional", price: 9300 },
      { id: 25, name: "Papas indiv. (con hamburguesa)", price: 1500 },
      { id: 26, name: "Papas indiv. (sola)", price: 2000 }
    ]
  },
  {
    category: "Combos y Promos",
    items: [
      { id: 27, name: "Promo Simple", price: 11200 },
      { id: 28, name: "Promo JR", price: 20900 },
      { id: 29, name: "Combo 1 (Nuggets)", price: 19100 },
      { id: 30, name: "Combo 2 (Coxinhas)", price: 22500 }
    ]
  },
  {
    category: "Adicionales",
    items: [
      { id: 31, name: "Adicional Cheddar", price: 2500 },
      { id: 32, name: "Adicional Bacon", price: 2500 },
      { id: 33, name: "Adicional Huevo", price: 2500 },
      { id: 34, name: "Adicional Carne y Queso", price: 2500 }
    ]
  }
];

let cart = [];

function init() {
  const container = document.getElementById('menuContainer');
  
  // Información de Negocio
  const infoEl = document.createElement('div');
  infoEl.className = 'business-info';
  infoEl.innerHTML = `
    <p>🕒 Miércoles a Domingo: 20:00 a 23:00 | Lunes y Martes: Cerrado</p>
    <p>🛵 Envío: $1.000 - $1.600 según distancia</p>
  `;
  container.appendChild(infoEl);

  MENU_DATA.forEach(cat => {
    const catEl = document.createElement('div');
    catEl.innerHTML = `<h3 class="category-title">${cat.category}</h3>`;
    cat.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item';
      itemEl.innerHTML = `
        <div class="item-info">
          <h4>${item.name}</h4>
          <p class="item-price">$${item.price.toLocaleString()}</p>
        </div>
        <button class="add-btn" onclick="addToCart(${item.id})">+</button>
      `;
      catEl.appendChild(itemEl);
    });
    container.appendChild(catEl);
  });
}

window.addToCart = (id) => {
  const allItems = MENU_DATA.reduce((acc, cat) => acc.concat(cat.items), []);
  const item = allItems.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCart();
};

window.changeQty = (id, delta) => {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    updateCart();
  }
};

function updateCart() {
  const count = cart.reduce((acc, i) => acc + i.qty, 0);
  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  document.getElementById('cartCount').innerText = count;
  document.getElementById('cartTotalText').innerText = `$${total.toLocaleString()}`;
  
  const itemsCont = document.getElementById('cartItems');
  itemsCont.innerHTML = cart.map(i => `
    <div class="cart-item">
      <span>${i.name}</span>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty(${i.id}, -1)">-</button>
        <span>${i.qty}</span>
        <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
        <span>$${(i.price * i.qty).toLocaleString()}</span>
      </div>
    </div>
  `).join('');
}

document.getElementById('cartToggle').onclick = () => document.getElementById('cartModal').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').classList.remove('active');

document.getElementById('checkoutBtn').onclick = () => {
  if (cart.length === 0) return alert("El carrito está vacío");
  
  let msg = "Hola Carlos JR! Quiero hacer un pedido:\n";
  cart.forEach(i => {
    msg += `- ${i.qty}x ${i.name}\n`;
  });
  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  msg += `Total Productos: $${total.toLocaleString()}\n`;
  msg += `Envío a confirmar según dirección.\n`;
  msg += `Dirección de entrega: [Escribir aquí]`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/5493757504214?text=${encoded}`, '_blank');
};

init();