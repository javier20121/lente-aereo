const PHONE_NUMBER = '5493757504214';
const BUSINESS_TIMEZONE = 'America/Argentina/Buenos_Aires';
const FALLBACK_MENU_DATA = [
  {
    category: 'Hamburguesas Tradicionales',
    items: [
      { id: 1, name: 'Simple', price: 9500, desc: 'Pan, salsa JR, lechuga, tomate, carne y queso cheddar.', image: 'img/burguer-simple.png' },
      { id: 2, name: 'Completa', price: 10900, desc: 'Pan, salsa JR, lechuga, tomate, carne, queso cheddar, jamón y huevo.', image: 'img/burguer-completa.png' },
      { id: 3, name: 'Especial', price: 13900, desc: 'Pan, salsa JR, pepinos, cebolla, lechuga, tomate, carne, queso cheddar, jamón, huevo y panceta.', image: 'img/burguer-especial.png' }
    ]
  },
  {
    category: 'Dobles y Triples',
    items: [
      { id: 4, name: 'Carlos JR', price: 14900, desc: 'Pan, salsa JR, pepinos, cebolla, doble carne, doble queso cheddar y panceta.', image: 'img/burguer-carlo-junior.png' },
      { id: 5, name: 'Big JR', price: 12000, desc: 'Pan, salsa JR, pepinos, doble carne y doble queso cheddar.', image: 'img/burguer-big-junior.png' },
      { id: 6, name: 'Big Triple', price: 17200, desc: 'Pan, salsa JR, triple carne, triple queso cheddar, huevo y panceta.', image: 'img/burguer-big-triple.png' }
    ]
  },
  {
    category: 'Otras Opciones Gourmet',
    items: [
      { id: 7, name: 'Roma', price: 15500, desc: 'Pan, barbacoa, cebolla caramelizada, carne, doble queso cheddar y panceta.' },
      { id: 8, name: 'Houston', price: 15500, desc: 'Pan, salsa de ajo, cebolla caramelizada, carne, queso azul y panceta.' },
      { id: 9, name: 'Tokio', price: 15500, desc: 'Pan, salsa JR, carne y doble queso cheddar.' },
      { id: 10, name: 'Madrid', price: 15500, desc: 'Pan, ketchup, mostaza, cebolla, pepinos, carne y doble queso cheddar.' },
      { id: 17, name: 'Qatar', price: 15500, desc: 'Pan, salsa de ajo, lechuga, tomate, carne, doble queso cheddar y 4 nuggets de pollo frito.' },
      { id: 18, name: 'Chicago', price: 15500, desc: 'Pan, salsa JR, tomate, carne, doble queso cheddar, huevo y papas pay.' },
      { id: 19, name: 'Singapur', price: 15500, desc: 'Pan, salsa JR, lechuga, tomate, carne, doble queso cheddar y panceta.' },
      { id: 20, name: 'Oklahoma', price: 15500, desc: 'Pan, salsa de ajo, carne, doble queso cheddar y panceta.' }
    ]
  },
  {
    category: 'Vegetarianas',
    items: [
      { id: 21, name: 'Dakota', price: 9900, desc: 'Pan, salsa de ajo, pepinos, lechuga, tomate, medallón vegetariano y doble queso cheddar.' },
      { id: 22, name: 'Tijuana', price: 8700, desc: 'Pan, salsa JR, pepinos, medallón vegetariano y doble queso cheddar.' },
      { id: 23, name: 'Orlando', price: 9900, desc: 'Pan, salsa JR, cebolla caramelizada, medallón vegetariano y queso azul.' }
    ]
  },
  {
    category: 'Sándwiches',
    items: [
      { id: 11, name: 'Milanesa Simple', price: 17300, desc: 'Pan artesanal, mayonesa, lechuga, tomate, milanesa y queso.' },
      { id: 12, name: 'Milanesa Completo', price: 18000, desc: 'Pan artesanal, mayonesa, lechuga, tomate, milanesa, queso, jamón y huevo.' },
      { id: 13, name: 'Lomito Simple', price: 17300, desc: 'Pan artesanal, mayonesa, lechuga, tomate, lomo vacuno y queso.' },
      { id: 24, name: 'Lomito Completo', price: 18000, desc: 'Pan artesanal, mayonesa, lechuga, tomate, lomo vacuno, queso, jamón y huevo.' }
    ]
  },
  {
    category: 'Papas Fritas',
    items: [
      { id: 25, name: 'Porción Individual (con burger)', price: 1500, desc: 'Papa chica con precio especial acompañando una hamburguesa.' },
      { id: 26, name: 'Porción Individual (sola)', price: 2000, desc: 'Papa chica para pedir sola.' },
      { id: 16, name: 'Tradicional', price: 9300, desc: 'Papas fritas clásicas, porción para dos.' },
      { id: 14, name: 'Con Queso', price: 13200, desc: 'Papas fritas con queso cheddar o muzzarella.' },
      { id: 15, name: 'Queso y Bacon', price: 15900, desc: 'Papas fritas con queso cheddar o muzzarella y panceta picada.' }
    ]
  },
  {
    category: 'Promos y Combos',
    items: [
      { id: 27, name: 'Promo Simple', price: 11200, desc: 'Una hamburguesa completa más una porción de papas.' },
      { id: 28, name: 'Promo JR', price: 20900, desc: 'Dos hamburguesas completas más una porción de papas.' },
      { id: 29, name: 'Combo 1', price: 19100, desc: 'Una porción de nuggets más una porción de papas grandes.' },
      { id: 30, name: 'Combo 2', price: 22500, desc: 'Una porción de coxinhas (30 a 35 unidades) más una porción de papas grandes.' }
    ]
  },
  {
    category: 'Adicionales',
    items: [
      { id: 31, name: 'Adicional Cheddar', price: 2500, desc: 'Extra de cheddar bien fundido.' },
      { id: 32, name: 'Adicional Bacon', price: 2500, desc: 'Panceta crocante para sumar más sabor.' },
      { id: 33, name: 'Adicional Huevo', price: 2500, desc: 'Huevo a la plancha para completar tu burger.' },
      { id: 34, name: 'Adicional Carne y Queso', price: 2500, desc: 'Un plus de carne con queso cheddar.' }
    ]
  }
];

let MENU_DATA = [];
let activeCategoryId = '';
let cart = getStoredCart();
let featuredItems = [];
let featuredIndex = 0;
let featuredAutoplayId = null;

const menuContainer = document.getElementById('menuContainer');
const menuSection = document.querySelector('.menu-section');
const menuHeading = menuSection.querySelector('.section-heading');
const menuSearch = document.getElementById('menuSearch');
const cartToggle = document.getElementById('cartToggle');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCartButton = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalText = document.getElementById('cartTotalText');
const checkoutButton = document.getElementById('checkoutBtn');
const orderNotes = document.getElementById('orderNotes');
const orderAddress = document.getElementById('orderAddress');
const addressField = document.getElementById('addressField');
const orderTypeInputs = document.querySelectorAll('input[name="orderType"]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getStoredCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem('cj_cart'));
    return Array.isArray(storedCart) ? storedCart : [];
  } catch (error) {
    console.warn('No se pudo recuperar el carrito guardado.', error);
    return [];
  }
}

function cloneFallbackMenu() {
  return JSON.parse(JSON.stringify(FALLBACK_MENU_DATA));
}

async function loadMenu() {
  try {
    const response = await fetch('menu.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('No se pudo cargar menu.json');
    MENU_DATA = await response.json();
  } catch (error) {
    console.warn('Se usa el menú integrado como respaldo.', error);
    MENU_DATA = cloneFallbackMenu();
  }
}

function formatMoney(value) {
  return Number(value).toLocaleString('es-AR');
}

function normalizeText(text = '') {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function slugify(text) {
  return normalizeText(text)
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

function escapeHtml(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getAllItems() {
  return MENU_DATA.flatMap(category =>
    category.items.map(item => ({ ...item, category: category.category }))
  );
}

function getBusinessStatus() {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: BUSINESS_TIMEZONE,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const parts = formatter
    .formatToParts(new Date())
    .filter(part => part.type !== 'literal')
    .reduce((acc, part) => ({ ...acc, [part.type]: part.value }), {});

  const openDays = new Set(['Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  const currentMinutes = Number(parts.hour) * 60 + Number(parts.minute);
  const isOpen = openDays.has(parts.weekday) && currentMinutes >= (19 * 60 + 30) && currentMinutes < 23 * 60;

  return {
    isOpen,
    label: isOpen ? 'Abierto ahora &middot; Cierra 23:00' : 'Cerrado &middot; Abrimos de Miércoles a Domingo de 19:30 a 23:00'
  };
}

function renderStatusBadge() {
  const headerInfo = document.querySelector('.hero-copy');
  const existingBadge = headerInfo.querySelector('.status-badge');
  existingBadge?.remove();

  const businessBadge = document.createElement('div');
  const { isOpen, label } = getBusinessStatus();
  businessBadge.className = 'status-badge';
  businessBadge.innerHTML = `
    <span class="status-dot ${isOpen ? 'is-open' : 'is-closed'}" aria-hidden="true"></span>
    <span>${label}</span>
  `;

  headerInfo.prepend(businessBadge);
}

function buildIngredientTags(description = '') {
  return description
    .replace(/\.$/, '')
    .split(',')
    .flatMap(part => part.split(/\sy\s/i))
    .map(part => part.trim())
    .filter(Boolean)
    .slice(0, 5);
}

function stopFeaturedAutoplay() {
  if (featuredAutoplayId) {
    window.clearInterval(featuredAutoplayId);
    featuredAutoplayId = null;
  }
}

function startFeaturedAutoplay() {
  stopFeaturedAutoplay();

  if (prefersReducedMotion || featuredItems.length <= 1) return;

  featuredAutoplayId = window.setInterval(() => {
    updateFeaturedShowcase(featuredIndex + 1);
  }, 4800);
}

function updateFeaturedShowcase(nextIndex) {
  if (!featuredItems.length) return;

  featuredIndex = (nextIndex + featuredItems.length) % featuredItems.length;
  const currentItem = featuredItems[featuredIndex];
  const previousIndex = (featuredIndex - 1 + featuredItems.length) % featuredItems.length;
  const nextVisibleIndex = (featuredIndex + 1) % featuredItems.length;
  const showcase = menuSection.querySelector('.featured-showcase');
  if (!showcase) return;
  showcase.style.setProperty('--featured-image', `url("${currentItem.image}")`);

  const title = showcase.querySelector('[data-featured-title]');
  const description = showcase.querySelector('[data-featured-description]');
  const price = showcase.querySelector('[data-featured-price]');
  const category = showcase.querySelector('[data-featured-category]');
  const counter = showcase.querySelector('[data-featured-counter]');
  const tags = showcase.querySelector('[data-featured-tags]');
  const addButton = showcase.querySelector('[data-featured-add]');
  const viewButton = showcase.querySelector('[data-featured-view]');
  const slides = showcase.querySelectorAll('.featured-slide');
  const dots = showcase.querySelectorAll('.featured-dot');

  title.textContent = currentItem.name;
  description.textContent = currentItem.desc || 'Una burger pensada para romper la noche.';
  price.textContent = `$${formatMoney(currentItem.price)}`;
  category.textContent = currentItem.category;
  counter.textContent = `${featuredIndex + 1} / ${featuredItems.length}`;
  addButton.dataset.itemId = String(currentItem.id);
  viewButton.dataset.target = slugify(currentItem.category);

  tags.innerHTML = buildIngredientTags(currentItem.desc)
    .map(ingredient => `<span class="featured-tag">${escapeHtml(ingredient)}</span>`)
    .join('');

  slides.forEach((slide, index) => {
    slide.classList.remove('is-active', 'is-prev', 'is-next');

    const isActive = index === featuredIndex;
    const isPrev = featuredItems.length > 2 && index === previousIndex;
    const isNext = index === nextVisibleIndex;

    slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');

    if (isActive) {
      slide.classList.add('is-active');
    } else if (isPrev) {
      slide.classList.add('is-prev');
    } else if (isNext) {
      slide.classList.add('is-next');
    }
  });

  dots.forEach((dot, index) => {
    const isActive = index === featuredIndex;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function renderFeaturedShowcase() {
  stopFeaturedAutoplay();
  menuSection.querySelector('.featured-showcase')?.remove();

  featuredItems = getAllItems().filter(item => item.image);
  featuredIndex = 0;

  if (!featuredItems.length) return null;

  const showcase = document.createElement('section');
  showcase.className = 'featured-showcase';
  showcase.setAttribute('aria-label', 'Hamburguesas destacadas');
  showcase.innerHTML = `
    <div class="featured-shell">
      <div class="featured-copy">
        <p class="featured-kicker">Burgers destacadas</p>
        <div class="featured-meta">
          <span class="featured-category" data-featured-category></span>
          <span class="featured-counter" data-featured-counter></span>
        </div>
        <h3 class="featured-title" data-featured-title></h3>
        <p class="featured-description" data-featured-description></p>
        <p class="featured-price" data-featured-price></p>
        <div class="featured-tags" data-featured-tags></div>
        <div class="featured-actions">
          <button class="button button-primary" type="button" data-featured-add>Agregar al pedido</button>
          <button class="featured-ghost-btn" type="button" data-featured-view>Ver en la carta</button>
        </div>
        <div class="featured-controls">
          <div class="featured-nav">
            <button class="featured-nav-btn" type="button" data-featured-prev aria-label="Ver burger anterior">‹</button>
            <button class="featured-nav-btn" type="button" data-featured-next aria-label="Ver burger siguiente">›</button>
          </div>
          <div class="featured-dots" role="tablist" aria-label="Selector de burgers destacadas">
            ${featuredItems
              .map((item, index) => `
                <button class="featured-dot" type="button" data-featured-dot="${index}" aria-label="Ver ${escapeHtml(item.name)}">
                  <img src="${escapeHtml(item.image)}" alt="" loading="lazy" decoding="async">
                </button>
              `)
              .join('')}
          </div>
        </div>
      </div>
      <div class="featured-stage">
        <div class="featured-slides">
          ${featuredItems
            .map((item, index) => `
              <article class="featured-slide" data-featured-slide="${index}">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async">
              </article>
            `)
            .join('')}
        </div>
      </div>
    </div>
  `;

  let pointerStartX = 0;
  const stage = showcase.querySelector('.featured-stage');

  showcase.querySelector('[data-featured-add]').addEventListener('click', event => {
    addToCart(Number(event.currentTarget.dataset.itemId));
  });

  showcase.querySelector('[data-featured-view]').addEventListener('click', event => {
    const targetId = event.currentTarget.dataset.target;
    if (!targetId) return;

    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  showcase.querySelector('[data-featured-prev]').addEventListener('click', () => {
    updateFeaturedShowcase(featuredIndex - 1);
    startFeaturedAutoplay();
  });

  showcase.querySelector('[data-featured-next]').addEventListener('click', () => {
    updateFeaturedShowcase(featuredIndex + 1);
    startFeaturedAutoplay();
  });

  showcase.querySelectorAll('[data-featured-dot]').forEach(dot => {
    dot.addEventListener('click', event => {
      updateFeaturedShowcase(Number(event.currentTarget.dataset.featuredDot));
      startFeaturedAutoplay();
    });
  });

  stage.addEventListener('pointerdown', event => {
    pointerStartX = event.clientX;
  });

  stage.addEventListener('pointerup', event => {
    if (!pointerStartX) return;

    const deltaX = event.clientX - pointerStartX;
    pointerStartX = 0;

    if (Math.abs(deltaX) < 40) return;

    updateFeaturedShowcase(featuredIndex + (deltaX < 0 ? 1 : -1));
    startFeaturedAutoplay();
  });

  stage.addEventListener('pointerleave', () => {
    pointerStartX = 0;
  });

  showcase.addEventListener('mouseenter', stopFeaturedAutoplay);
  showcase.addEventListener('mouseleave', startFeaturedAutoplay);
  showcase.addEventListener('focusin', stopFeaturedAutoplay);
  showcase.addEventListener('focusout', event => {
    if (!showcase.contains(event.relatedTarget)) startFeaturedAutoplay();
  });

  updateFeaturedShowcase(0);
  startFeaturedAutoplay();

  return showcase;
}

function createMediaMarkup(item, category) {
  if (item.image) {
    return `<img class="item-media" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">`;
  }

  return `
    <div class="item-media item-media--placeholder">
      <div class="item-stack" aria-hidden="true">
        <span class="stack-layer bun-top"></span>
        <span class="stack-layer lettuce"></span>
        <span class="stack-layer tomato"></span>
        <span class="stack-layer cheese"></span>
        <span class="stack-layer patty"></span>
        <span class="stack-layer bun-bottom"></span>
      </div>
      <div class="item-placeholder-copy">
        <span class="item-chip">${escapeHtml(category)}</span>
        <strong>${escapeHtml(item.name)}</strong>
      </div>
    </div>
  `;
}

function renderMenu() {
  const existingNav = menuSection.querySelector('.category-nav');
  const existingEmptyState = menuSection.querySelector('.menu-empty-state');
  existingNav?.remove();
  existingEmptyState?.remove();
  menuContainer.innerHTML = '';

  const navContainer = document.createElement('div');
  navContainer.className = 'category-nav';

  const emptyState = document.createElement('p');
  emptyState.className = 'menu-empty-state';
  emptyState.hidden = true;
  emptyState.textContent = 'No encontramos productos con ese nombre.';

  MENU_DATA.forEach(category => {
    const categoryId = slugify(category.category);

    const navLink = document.createElement('a');
    navLink.href = `#${categoryId}`;
    navLink.dataset.categoryId = categoryId;
    navLink.textContent = category.category;
    navContainer.appendChild(navLink);

    const categoryElement = document.createElement('section');
    categoryElement.className = 'menu-category-section';
    categoryElement.dataset.categoryId = categoryId;
    categoryElement.innerHTML = `<h3 class="category-title" id="${categoryId}">${escapeHtml(category.category)}</h3>`;

    const itemsGrid = document.createElement('div');
    itemsGrid.className = 'menu-items-grid';

    category.items.forEach(item => {
      const itemElement = document.createElement('article');
      itemElement.className = 'menu-item';
      itemElement.dataset.search = normalizeText(`${item.name} ${item.desc || ''} ${category.category}`);
      itemElement.innerHTML = `
        ${createMediaMarkup(item, category.category)}
        <div class="item-info">
          <h4>${escapeHtml(item.name)}</h4>
          <p class="item-desc">${escapeHtml(item.desc || 'Preparado con ingredientes frescos del día.')}</p>
          <div class="item-footer">
            <p class="item-price">$${formatMoney(item.price)}</p>
            <button class="add-btn" type="button" onclick="addToCart(${item.id})" aria-label="Agregar ${escapeHtml(item.name)} al pedido">+</button>
          </div>
        </div>
      `;
      itemsGrid.appendChild(itemElement);
    });

    categoryElement.appendChild(itemsGrid);
    menuContainer.appendChild(categoryElement);
  });

  const showcase = renderFeaturedShowcase();

  if (showcase) {
    menuHeading.after(showcase);
    showcase.after(navContainer);
  } else {
    menuHeading.after(navContainer);
  }

  navContainer.after(emptyState);

  setupScrollSpy();
}

function setActiveCategory(categoryId) {
  if (!categoryId || categoryId === activeCategoryId) return;

  activeCategoryId = categoryId;
  document.querySelectorAll('.category-nav a').forEach(link => {
    const isActive = link.dataset.categoryId === categoryId;
    link.classList.toggle('active', isActive);

    if (isActive) {
      link.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  });
}

function setupScrollSpy() {
  const handleScroll = () => {
    const visibleSections = [...document.querySelectorAll('.menu-category-section')].filter(section => !section.hidden);
    if (!visibleSections.length) return;

    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    let currentCategoryId = visibleSections[0].dataset.categoryId;

    visibleSections.forEach(section => {
      if (scrollPos >= section.offsetTop - 180) {
        currentCategoryId = section.dataset.categoryId;
      }
    });

    setActiveCategory(currentCategoryId);
  };

  window.onscroll = handleScroll;
  requestAnimationFrame(handleScroll);
}

function syncOrderModeFields() {
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'delivery';
  const isDelivery = orderType === 'delivery';

  addressField.hidden = !isDelivery;
  orderAddress.disabled = !isDelivery;
  orderAddress.required = isDelivery;
}

window.filterMenu = () => {
  const query = normalizeText(menuSearch.value);
  const sections = document.querySelectorAll('.menu-category-section');
  const emptyState = document.querySelector('.menu-empty-state');
  let visibleSectionCount = 0;

  sections.forEach(section => {
    const items = section.querySelectorAll('.menu-item');
    const navLink = document.querySelector(`.category-nav a[data-category-id="${section.dataset.categoryId}"]`);
    let hasVisibleItems = false;

    items.forEach(item => {
      const matches = item.dataset.search.includes(query);
      item.hidden = !matches;
      hasVisibleItems = hasVisibleItems || matches;
    });

    section.hidden = !hasVisibleItems;
    if (navLink) navLink.hidden = !hasVisibleItems;
    if (hasVisibleItems) visibleSectionCount += 1;
  });

  if (emptyState) {
    emptyState.hidden = visibleSectionCount !== 0;
  }

  const firstVisibleSection = [...sections].find(section => !section.hidden);
  if (firstVisibleSection) {
    setActiveCategory(firstVisibleSection.dataset.categoryId);
  }
};

function showToast(message) {
  let toast = document.querySelector('.toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

window.addToCart = id => {
  const item = getAllItems().find(product => product.id === id);
  if (!item) return;

  const existingItem = cart.find(product => product.id === id);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  cartToggle.classList.add('animate-pop');
  window.setTimeout(() => cartToggle.classList.remove('animate-pop'), 300);
  showToast(`${item.name} agregado al pedido.`);
  updateCart();
};

window.changeQty = (id, delta) => {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  updateCart();
};

function updateCart() {
  localStorage.setItem('cj_cart', JSON.stringify(cart));

  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  cartCount.textContent = count;
  cartCount.hidden = count === 0;
  cartTotalText.textContent = `$${formatMoney(total)}`;
  checkoutButton.disabled = cart.length === 0;

  if (!cart.length) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">Tu carrito está vacío.<br>Agregá algo rico del menú.</div>';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="cart-item-name">${escapeHtml(item.name)}</span>
      <div class="qty-controls">
        <button class="qty-btn" type="button" onclick="changeQty(${item.id}, -1)" aria-label="Restar ${escapeHtml(item.name)}">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" type="button" onclick="changeQty(${item.id}, 1)" aria-label="Sumar ${escapeHtml(item.name)}">+</button>
        <span class="item-subtotal">$${formatMoney(item.price * item.qty)}</span>
      </div>
    </div>
  `).join('');
}

function openCart() {
  cartModal.classList.add('active');
  document.body.classList.add('modal-open');
  cartToggle.setAttribute('aria-expanded', 'true');
}

function closeCart() {
  cartModal.classList.remove('active');
  document.body.classList.remove('modal-open');
  cartToggle.setAttribute('aria-expanded', 'false');
}

function handleCheckout() {
  if (!cart.length) {
    alert('El carrito está vacío.');
    return;
  }

  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'delivery';
  const isDelivery = orderType === 'delivery';
  const address = orderAddress.value.trim();
  const notes = orderNotes.value.trim();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (isDelivery && !address) {
    alert('Escribí la dirección de entrega para continuar.');
    orderAddress.focus();
    return;
  }

  let message = 'Hola Carlos JR! Quiero hacer un pedido:\n';
  message += `Modalidad: ${isDelivery ? 'Delivery' : 'Retiro en el local'}\n`;

  cart.forEach(item => {
    message += `- ${item.qty}x ${item.name}\n`;
  });

  message += `Total productos: $${formatMoney(total)}\n`;

  if (isDelivery) {
    message += 'Envío a confirmar según dirección.\n';
    message += `Dirección de entrega: ${address}\n`;
  } else {
    message += 'Paso a retirar por el local.\n';
  }

  if (notes) {
    message += `Notas: ${notes}\n`;
  }

  window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

async function init() {
  await loadMenu();
  renderStatusBadge();
  renderMenu();
  updateCart();
  syncOrderModeFields();

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  cartToggle.addEventListener('click', openCart);
  closeCartButton.addEventListener('click', closeCart);
  checkoutButton.addEventListener('click', handleCheckout);

  cartModal.addEventListener('click', event => {
    if (event.target === cartModal) closeCart();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && cartModal.classList.contains('active')) {
      closeCart();
    }
  });

  orderTypeInputs.forEach(input => input.addEventListener('change', syncOrderModeFields));
}

init();
