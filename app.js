let MENU_DATA = [];

async function loadMenu() {
  try {
    const response = await fetch('menu.json');
    if (!response.ok) throw new Error('Error al cargar el menú');
    MENU_DATA = await response.json();
  } catch (error) {
    console.error('Error cargando menú:', error);
    document.getElementById('menuContainer').innerHTML = '<p style="text-align:center;padding:2rem;">Error al cargar el menú. Recargá la página.</p>';
  }
}

let cart = JSON.parse(localStorage.getItem('cj_cart')) || [];

async function init() {
  await loadMenu();
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
    navLink.innerText = cat.category;
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
        <div class="item-info">
          <h4>${item.name}</h4>
          <p class="item-desc">${item.desc || 'Preparado con ingredientes frescos del día.'}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.5rem;">
            <p class="item-price">$${item.price.toLocaleString('es-AR')}</p>
            <button class="add-btn" onclick="addToCart(${item.id})">+</button>
          </div>
        </div>
      `;
      itemsGrid.appendChild(itemEl);
    });
    catEl.appendChild(itemsGrid);
    container.appendChild(catEl);
  });
  
  document.querySelector('.menu-section').prepend(navContainer);

  updateCart();

  // Setup Scroll Spy
  const categories = document.querySelectorAll('.menu-category-section');
  const navLinks = document.querySelectorAll('.category-nav a');
  let activeId = "";

  window.addEventListener('scroll', () => {
    let current = "";
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    for (const section of categories) {
      const sectionTop = section.offsetTop;
      if (scrollPos >= sectionTop - 160) {
        current = section.querySelector('.category-title').id;
      } else { break; } // Al encontrar la primera que no cumple, paramos para no sobreescribir
    }

    // Solo ejecutamos el cambio si la categoría realmente cambió
    if (current !== activeId) {
      activeId = current;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
          
          // Desplazar la barra horizontalmente para mostrar el botón activo
          link.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }
      });
    }
  });

  // Animación al hacer scroll (Intersection Observer)
  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Lógica de visibilidad si fuera necesaria
    });
  }, { threshold: 0.2, rootMargin: '0px' });

  document.querySelectorAll('.menu-item').forEach(item => itemObserver.observe(item));
}

window.filterMenu = () => {
  const query = document.getElementById('menuSearch').value.toLowerCase();
  const categorySections = document.querySelectorAll('.menu-category-section');

  categorySections.forEach(section => {
    const items = section.querySelectorAll('.menu-item');
    let hasVisibleItems = false;

    items.forEach(item => {
      const name = item.querySelector('h4').innerText.toLowerCase();
      const desc = item.querySelector('.item-desc').innerText.toLowerCase();
      
      if (name.includes(query) || desc.includes(query)) {
        item.style.display = 'flex';
        hasVisibleItems = true;
      } else {
        item.style.display = 'none';
      }
    });

    // Ocultar la sección completa (incluyendo el título) si no hay coincidencias
    if (hasVisibleItems) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
};

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
  localStorage.setItem('cj_cart', JSON.stringify(cart));

  const count = cart.reduce((acc, i) => acc + i.qty, 0);
  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  document.getElementById('cartCount').innerText = count > 0 ? count : '';
  document.getElementById('cartTotalText').innerText = `$${total.toLocaleString('es-AR')}`;
  
  const itemsCont = document.getElementById('cartItems');
  
  if (cart.length === 0) {
    itemsCont.innerHTML = `<div class="empty-cart">Tu carrito está vacío.<br>¡Agregá algo rico! 🍔</div>`;
    return;
  }

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
  const notes = document.getElementById('orderNotes').value;

  cart.forEach(i => {
    msg += `- ${i.qty}x ${i.name}\n`;
  });
  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  msg += `Total Productos: $${total.toLocaleString()}\n`;
  if (notes) msg += `\n📝 Notas: ${notes}\n`;
  msg += `\nDirección de entrega: [Escribir aquí]`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/5493757504214?text=${encoded}`, '_blank');
};

init();