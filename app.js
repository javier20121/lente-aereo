const MENU_DATA = [
  {
    category: "Hamburguesas Tradicionales",
    items: [
      { id: 1, name: "Simple", price: 9500, desc: "Pan, salsa JR, lechuga, tomate, carne y queso cheddar." },
      { id: 2, name: "Completa", price: 10900, desc: "Pan, salsa JR, lechuga, tomate, carne, queso cheddar, jamón y huevo." },
      { id: 3, name: "Especial", price: 13900, desc: "Pan, salsa JR, pepinos, cebolla, lechuga, tomate, carne, queso cheddar, jamón, huevo y panceta." }
    ]
  },
  {
    category: "Dobles y Triples",
    items: [
      { id: 4, name: "Carlos JR", price: 14900, desc: "Pan, salsa JR, pepinos, cebolla, doble carne, doble queso cheddar y panceta." },
      { id: 5, name: "Big JR", price: 12000, desc: "Pan, salsa JR, pepinos, doble carne y doble queso cheddar." },
      { id: 6, name: "Big Triple", price: 17200, desc: "Pan, salsa JR, triple carne, triple queso cheddar, huevo y panceta." }
    ]
  },
  {
    category: "Otras Opciones (Gourmet)",
    items: [
      { id: 7, name: "Roma", price: 15500, desc: "Pan, barbacoa, cebolla caramelizada, carne, doble queso cheddar y panceta." },
      { id: 8, name: "Houston", price: 15500, desc: "Pan, salsa de ajo, cebolla caramelizada, carne, queso azul y panceta." },
      { id: 9, name: "Tokio", price: 15500, desc: "Pan, salsa JR, carne y doble queso cheddar." },
      { id: 10, name: "Madrid", price: 15500, desc: "Pan, ketchup, mostaza, cebolla, pepinos, carne y doble queso cheddar." },
      { id: 17, name: "Qatar", price: 15500, desc: "Pan, salsa de ajo, lechuga, tomate, carne, doble queso cheddar y 4 nuggets de pollo frito." },
      { id: 18, name: "Chicago", price: 15500, desc: "Pan, salsa JR, tomate, carne, doble queso cheddar, huevo y papas pay." },
      { id: 19, name: "Singapur", price: 15500, desc: "Pan, salsa JR, lechuga, tomate, carne, doble queso cheddar y panceta." },
      { id: 20, name: "Oklahoma", price: 15500, desc: "Pan, salsa de ajo, carne, doble queso cheddar y panceta." }
    ]
  },
  {
    category: "Vegetarianas",
    items: [
      { id: 21, name: "Dakota", price: 9900, desc: "Pan, salsa de ajo, pepinos, lechuga, tomate, medallón vegetariano y doble queso cheddar." },
      { id: 22, name: "Tijuana", price: 8700, desc: "Pan, salsa JR, pepinos, medallón vegetariano y doble queso cheddar." },
      { id: 23, name: "Orlando", price: 9900, desc: "Pan, salsa JR, cebolla caramelizada, medallón vegetariano y queso azul." }
    ]
  },
  {
    category: "Sándwiches (Pollo o Vacuna)",
    items: [
      { id: 11, name: "Milanesa Simple", price: 17300, desc: "Pan artesanal, mayonesa, lechuga, tomate, milanesa y queso." },
      { id: 12, name: "Milanesa Completo", price: 18000, desc: "Pan artesanal, mayonesa, lechuga, tomate, milanesa, queso, jamón y huevos." },
      { id: 13, name: "Lomito Simple", price: 17300, desc: "Pan artesanal, mayonesa, lechuga, tomate, lomo vacuno y queso." },
      { id: 24, name: "Lomito Completo", price: 18000, desc: "Pan artesanal, mayonesa, lechuga, tomate, lomo vacuno, queso, jamón y huevos." }
    ]
  },
  {
    category: "Papas Fritas",
    items: [
      { id: 16, name: "Tradicional", price: 9300, desc: "Papas fritas normales (porción para dos)." },
      { id: 14, name: "Con Queso", price: 13200, desc: "Papas fritas con queso cheddar o muzzarella." },
      { id: 15, name: "Queso y Bacon", price: 15900, desc: "Papas fritas con queso cheddar o muzzarella y panceta picada." },
      { id: 25, name: "Porción Individual", price: 1500, desc: "Papa chica (precio especial acompañando una hamburguesa)." }
    ]
  },
  {
    category: "Promos y Combos",
    items: [
      { id: 27, name: "Promo Simple", price: 11200, desc: "Una hamburguesa completa + una porción de papas." },
      { id: 28, name: "Promo JR", price: 20900, desc: "Dos hamburguesas completas + una porción de papas." },
      { id: 29, name: "Combo 1", price: 19100, desc: "Una porción de nuggets + una porción de papas grandes." },
      { id: 30, name: "Combo 2", price: 22500, desc: "Una porción de coxinhas (30 - 35 unidades) + una porción de papas grandes." }
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
  const navContainer = document.createElement('div');
  navContainer.className = 'category-nav';

  // Lógica de estado Abierto/Cerrado
  const now = new Date();
  const day = now.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...
  const hour = now.getHours();
  
  // Abierto Miércoles(3) a Domingo(0). Lunes(1) y Martes(2) Cerrado.
  // Horario: 20:00 a 23:00
  const isOpenDay = (day !== 1 && day !== 2);
  const isOpenHour = (hour >= 20 && hour < 23);
  const isOpen = isOpenDay && isOpenHour;

  const headerInfo = document.querySelector('.hero-copy');
  const businessBadge = document.createElement('div');
  businessBadge.className = 'status-badge';
  businessBadge.innerHTML = isOpen 
    ? `<span style="color: #4CAF50">●</span> Abierto ahora • Cierra 23:00`
    : `<span style="color: #F44336">●</span> Cerrado • Abrimos Mié a Dom 20:00`;
  headerInfo.prepend(businessBadge);

  MENU_DATA.forEach(cat => {
    // Generar link de navegación
    const catId = cat.category.replace(/\s+/g, '-').toLowerCase();
    const navLink = document.createElement('a');
    navLink.href = `#${catId}`;
    // Acortamos el nombre para que quepa mejor en la barra
    navLink.innerText = cat.category.replace("Hamburguesas ", "");
    navContainer.appendChild(navLink);

    const catEl = document.createElement('div');
    catEl.className = 'menu-category-section';
    catEl.innerHTML = `<h3 class="category-title" id="${catId}">${cat.category}</h3>`;
    
    const itemsGrid = document.createElement('div');
    itemsGrid.className = 'menu-grid';

    cat.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item';
      itemEl.innerHTML = `
        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&q=80" alt="${item.name}" class="item-img">
        <div class="item-info">
          <h4>${item.name}</h4>
          <p class="item-desc">${item.desc || 'Preparado con ingredientes frescos del día.'}</p>
          <p class="item-price">$${item.price.toLocaleString('es-AR')}</p>
        </div>
        <button class="add-btn" onclick="addToCart(${item.id})">+</button>
      `;
      itemsGrid.appendChild(itemEl);
    });
    catEl.appendChild(itemsGrid);
    container.appendChild(catEl);
  });
  
  document.querySelector('.menu-section').prepend(navContainer);

  // Setup Scroll Spy
  const categories = document.querySelectorAll('.menu-category-section');
  const navLinks = document.querySelectorAll('.category-nav a');

  window.addEventListener('scroll', () => {
    let current = "";
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    for (const section of categories) {
      const sectionTop = section.offsetTop;
      if (scrollPos >= sectionTop - 160) {
        current = section.querySelector('.category-title').id;
      } else { break; } // Al encontrar la primera que no cumple, paramos para no sobreescribir
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

window.addToCart = (id) => {
  const allItems = MENU_DATA.reduce((acc, cat) => acc.concat(cat.items), []);
  const item = allItems.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  
  // Feedback Visual
  const cartBtn = document.getElementById('cartToggle');
  cartBtn.classList.add('animate-pop');
  setTimeout(() => cartBtn.classList.remove('animate-pop'), 300);
  showToast(`¡${item.name} agregado!`);
  
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
  document.getElementById('cartCount').innerText = count > 0 ? count : '';
  document.getElementById('cartTotalText').innerText = `$${total.toLocaleString('es-AR')}`;
  
  const itemsCont = document.getElementById('cartItems');
  itemsCont.innerHTML = cart.map(i => `
    <div class="cart-item">
      <span>${i.name}</span>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty(${i.id}, -1)">-</button>
        <span>${i.qty}</span>
        <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
        <span class="item-subtotal">$${(i.price * i.qty).toLocaleString('es-AR')}</span>
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