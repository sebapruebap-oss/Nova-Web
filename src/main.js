import './style.css'

const WHATSAPP_NUMBER = '5493416279719'

const products = [
  {
    id: 'sweater-lana-roto',
    name: 'Sweater de lana roto',
    category: 'mujeres',
    sections: ['temporada'],
    seasonal: true,
    type: 'retail',
    price: '$7.200',
    priceValue: 7200,
    minQuantity: 1,
    image: '/productos/sweater-lana-roto-blanco.png',
    optionLabel: 'Color',
    colors: [
      {
        name: 'Blanco',
        image: '/productos/sweater-lana-roto-blanco.png',
      },
      {
        name: 'Gris',
        image: '/productos/sweater-lana-roto-gris.png',
      },
      {
        name: 'Negro',
        image: '/productos/sweater-lana-roto-negro.png',
      },
    ],
    description: 'Sweater de lana con terminación rota. Consultar disponibilidad.',
    available: true,
    message: 'Hola, quiero consultar por el Sweater de lana roto.',
  },
  {
    id: 'pulover-corto',
    name: 'Pulover corto',
    category: 'mujeres',
    sections: ['temporada'],
    seasonal: true,
    type: 'retail',
    price: '$6.800',
    priceValue: 6800,
    minQuantity: 1,
    image: '/productos/pulover-corto-negro.png',
    optionLabel: 'Color',
    colors: [
      {
        name: 'Negro',
        image: '/productos/pulover-corto-negro.png',
      },
      {
        name: 'Rojo',
        image: '/productos/pulover-corto-rojo.png',
      },
      {
        name: 'Verde',
        image: '/productos/pulover-corto-verde.png',
      },
    ],
    description: 'Pulover corto de lana. Consultar disponibilidad.',
    available: true,
    message: 'Hola, quiero consultar por el Pulover corto.',
  },
  {
    id: 'poleron-largo',
    name: 'Polerón largo',
    category: 'mujeres',
    sections: ['temporada'],
    seasonal: true,
    type: 'retail',
    price: '$6.800',
    priceValue: 6800,
    minQuantity: 1,
    image: '/productos/poleron-largo-beige.png',
    optionLabel: 'Color',
    colors: [
      {
        name: 'Beige',
        image: '/productos/poleron-largo-beige.png',
      },
      {
        name: 'Gris',
        image: '/productos/poleron-largo-gris.png',
      },
      {
        name: 'Rojo',
        image: '/productos/poleron-largo-rojo.png',
      },
    ],
    description: 'Polerón largo de lana. Talle único. Consultar disponibilidad.',
    available: true,
    message: 'Hola, quiero consultar por el Polerón largo.',
  },
  {
    id: 'chaleco-dama-lana',
    name: 'Chaleco dama lana',
    category: 'mujeres',
    sections: ['temporada'],
    seasonal: true,
    type: 'retail',
    price: '$6.800',
    priceValue: 6800,
    minQuantity: 1,
    image: '/productos/chaleco-dama-lana.png',
    description: 'Chaleco dama de lana. Talle único.',
    available: true,
    message: 'Hola, quiero consultar por el Chaleco dama lana.',
  },
  {
    id: 'chaleco-lana',
    name: 'Chaleco lana',
    category: 'temporada',
    sections: ['temporada'],
    type: 'wholesale',
    price: '$6.800',
    priceValue: 6800,
    minQuantity: 1,
    image: '/productos/chaleco-lana-negro.png',
    optionLabel: 'Color',
    colors: [
      {
        name: 'Negro',
        image: '/productos/chaleco-lana-negro.png',
      },
      {
        name: 'Azul',
        image: '/productos/chaleco-lana-azul.png',
      },
      {
        name: 'Bordo',
        image: '/productos/chaleco-lana-bordo.png',
      },
    ],
  },
  {
    id: 'boxer-vuk',
    name: 'Boxer Vuk',
    category: 'hombres',
    type: 'wholesale',
    price: '$5.800',
    priceValue: 5800,
    minQuantity: 1,
    image: '/productos/boxer-vuk-azul.png',
    colors: [
      {
        name: 'Azul Marino',
        image: '/productos/boxer-vuk-azul.png',
      },
      {
        name: 'Negro',
        image: '/productos/boxer-vuk-negro.png',
      },
      {
        name: 'Verde',
        image: '/productos/boxer-vuk-verde.png',
      },
      {
        name: 'Gris Melange',
        image: '/productos/boxer-vuk-gris.png',
      },
      {
        name: 'Bordo',
        image: '/productos/boxer-vuk-bordo.png',
      },
  ],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  description: 'Boxers Vuk por mayor. Precio unitario con compra mínima de 3 unidades.',
  available: true,
  message: 'Hola, quiero consultar por Boxer Vuk por mayor. ¿Qué colores y talles tenés disponibles?'
},
  {
    id: 'boxer-intermezzo',
    name: 'Boxer Intermezzo',
    category: 'hombres',
    type: 'wholesale',
    price: '$6.200',
    priceValue: 6200,
    minQuantity: 1,
    image: '/productos/boxer-intermezzo-modelo-1.png',
    optionLabel: 'Modelo',
    colors: [
      {
        name: '1',
        image: '/productos/boxer-intermezzo-modelo-1.png',
      },
      {
        name: '2',
        image: '/productos/boxer-intermezzo-modelo-2.png',
      },
      {
        name: '3',
        image: '/productos/boxer-intermezzo-modelo-3.png',
      },
      {
        name: '4',
        image: '/productos/boxer-intermezzo-modelo-4.png',
      },
      {
        name: '5',
        image: '/productos/boxer-intermezzo-modelo-5.png',
      },
      {
        name: '6',
        image: '/productos/boxer-intermezzo-modelo-6.png',
      },
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Boxer Intermezzo por mayor. Precio unitario.',
    available: true,
    message: 'Hola, quiero consultar por Boxer Intermezzo por mayor.',
  },
  {
    id: 'medias-largas',
    name: 'Medias largas',
    category: 'medias',
    type: 'wholesale',
    price: '$1.300',
    priceValue: 1300,
    minQuantity: 1,
    image: '/productos/medias-largas-modelo-1.png',
    optionLabel: 'Modelo',
    colors: [
      {
        name: '1',
        image: '/productos/medias-largas-modelo-1.png',
      },
      {
        name: '2',
        image: '/productos/medias-largas-modelo-2.png',
      },
    ],
    description: 'Medias largas. Talle único.',
    available: true,
    message: 'Hola, quiero consultar por Medias largas.',
  },
  {
    id: 'medias-cana',
    name: 'Medias caña',
    category: 'medias',
    type: 'wholesale',
    price: '$1.300',
    priceValue: 1300,
    minQuantity: 1,
    image: '/productos/medias-cana-modelo-1.png',
    optionLabel: 'Modelo',
    colors: [
      {
        name: '1',
        image: '/productos/medias-cana-modelo-1.png',
      },
      {
        name: '2',
        image: '/productos/medias-cana-modelo-2.png',
      },
      {
        name: '3',
        image: '/productos/medias-cana-modelo-3.png',
      },
      {
        name: '4',
        image: '/productos/medias-cana-modelo-4.png',
      },
    ],
    description: 'Medias caña. Talle único.',
    available: true,
    message: 'Hola, quiero consultar por Medias caña.',
  },
  {
    id: 'bombacha',
    name: 'Bombacha',
    category: 'mujeres',
    type: 'wholesale',
    price: '$2.200',
    priceValue: 2200,
    minQuantity: 1,
    image: '/productos/bombacha-floral.png',
    optionLabel: 'Modelo',
    colors: [
      {
        name: 'Floral',
        image: '/productos/bombacha-floral.png',
      },
      {
        name: 'Blanca',
        image: '/productos/bombacha-blanca.png',
      },
      {
        name: 'Negra',
        image: '/productos/bombacha-negra.png',
      },
    ],
    description: 'Bombacha por mayor. Consultar disponibilidad.',
    available: true,
    message: 'Hola, quiero consultar por Bombacha.',
  },
  {
    id: 'pack-tiro-corto-liso-algodon',
    name: 'Tiro corto liso algodón',
    category: 'mujeres',
    type: 'wholesale',
    price: '$6.200 pack x3',
    priceValue: 6200,
    minQuantity: 1,
    image: '/productos/tiro-corto-liso-algodon.png',
    description: 'Pack x3. Modelos sujetos a disponibilidad. Coordinamos por WhatsApp.',
    available: true,
    message: 'Hola, quiero consultar por el pack x3 de tiro corto liso algodón.',
  }
]

const categoryLabels = {
  mujeres: 'Mujeres',
  hombres: 'Hombres',
  ninos: 'Niños',
  medias: 'Medias',
}

const productBelongsToSection = (product, sectionId) => {
  // Ofertas sigue dependiendo de onSale
  if (sectionId === 'ofertas') {
    return product.onSale === true;
  }

  // Si el producto tiene sections, esas secciones tienen prioridad
  if (Array.isArray(product.sections)) {
    return product.sections.includes(sectionId);
  }

  // Compatibilidad con los productos anteriores
  if (sectionId === 'temporada') {
    return product.seasonal === true;
  }

  return product.category === sectionId;
};

const productSections = [
  {
    id: 'ofertas',
    title: 'OFERTAS',
    filter: product => productBelongsToSection(product, 'ofertas'),
  },
  {
    id: 'mujeres',
    title: 'Mujeres',
    filter: product => productBelongsToSection(product, 'mujeres'),
  },
  {
    id: 'hombres',
    title: 'Hombres',
    filter: product => productBelongsToSection(product, 'hombres'),
  },
  {
    id: 'ninos',
    title: 'Niños',
    filter: product => productBelongsToSection(product, 'ninos'),
  },
  {
    id: 'medias',
    title: 'Medias',
    filter: product => productBelongsToSection(product, 'medias'),
  },
  {
    id: 'temporada',
    title: 'Temporada',
    filter: product => productBelongsToSection(product, 'temporada'),
  },
];

const getProductSectionLabel = product => {
  // Primero priorizamos las secciones elegidas manualmente
  if (Array.isArray(product.sections) && product.sections.length > 0) {
    const mainSectionId = product.sections[0]

    const matchedSection = productSections.find(
      section => section.id === mainSectionId
    )

    if (matchedSection) {
      return matchedSection.title
    }
  }

  // Compatibilidad con productos antiguos
  if (product.seasonal === true) {
    return 'Temporada'
  }

  // Como última opción usamos la categoría
  return categoryLabels[product.category] || product.category || ''
}

const savedCart = localStorage.getItem('aleale-cart')

let cart = savedCart ? JSON.parse(savedCart) : []

const saveCart = () => {
  localStorage.setItem('aleale-cart', JSON.stringify(cart))
}

const clearCart = () => {
  cart = []
  saveCart()
  updateCartButton()
}

const addToCart = (productId, options = {}) => {
  const product = products.find((item) => item.id === productId)

  if (!product) return

  const selectedColor = options.color || null
  const selectedSize = options.size || null
  const selectedImage = options.image || product.image
  const selectedQuantity = options.quantity || product.minQuantity || 1

  const cartItemId = `${productId}-${selectedColor || 'sin-color'}-${selectedSize || 'sin-talle'}`

  const existingItem = cart.find((item) => item.cartItemId === cartItemId)

  if (existingItem) {
    existingItem.quantity += selectedQuantity
  } else {
    cart.push({
      ...product,
      cartItemId,
      selectedColor,
      selectedSize,
      image: selectedImage,
      quantity: selectedQuantity,
    })
  }

  saveCart()
  updateCartButton()
  renderCartPanel()
}

const increaseCartItem = (cartItemId) => {
  const item = cart.find((cartItem) => cartItem.cartItemId === cartItemId)

  if (!item) return

  item.quantity += 1

  saveCart()
  updateCartButton()
  renderCartPanel()
}

const decreaseCartItem = (cartItemId) => {
  const item = cart.find((cartItem) => cartItem.cartItemId === cartItemId)

  if (!item) return

  if (item.quantity <= 1) {
    cart = cart.filter((cartItem) => cartItem.cartItemId !== cartItemId)
  } else {
    item.quantity -= 1
  }

  saveCart()
  updateCartButton()
  renderCartPanel()
}

const removeCartItem = (cartItemId) => {
  cart = cart.filter((item) => item.cartItemId !== cartItemId)

  saveCart()
  updateCartButton()
  renderCartPanel()
}

const getCartTotalItems = () => {
  return cart.reduce((total, item) => total + item.quantity, 0)
}

const updateCartButton = () => {
  const cartButton = document.querySelector('.cart-button')

  if (!cartButton) return

  cartButton.textContent = `Carrito 🛒 (${getCartTotalItems()})`
}

const getCartTotalPrice = () => {
  return cart.reduce((total, item) => {
    return total + (item.priceValue || 0) * item.quantity
  }, 0)
}

const formatPrice = (value) => {
  return `$${value.toLocaleString('es-AR')}`
}

const renderCartPanel = () => {
  const cartPanel = document.querySelector('.cart-panel')

  if (!cartPanel) return

  if (cart.length === 0) {
    cartPanel.innerHTML = `
      <div class="cart-panel-header">
        <h3>Tu bolsa</h3>
        <button class="cart-close" type="button">×</button>
      </div>

      <p class="cart-empty">Todavía no agregaste productos.</p>
    `
  } else {
    cartPanel.innerHTML = `
      <div class="cart-panel-header">
        <h3>Tu bolsa</h3>
        <button class="cart-close" type="button">×</button>
      </div>

<div class="cart-items">
  ${cart.map((item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">

        <div class="cart-item-content">
          <div class="cart-item-header">
            <div class="cart-item-main">
                <strong>${item.name}</strong>

              <div class="cart-item-details">
                ${item.selectedColor ? '<span>' + (item.optionLabel || 'Color') + ': ' + item.selectedColor + '</span>' : ''}
                ${item.selectedSize ? '<span>Talle: ' + item.selectedSize + '</span>' : ''}
              </div>

              <span>${item.quantity} unidad${item.quantity > 1 ? 'es' : ''}</span>
              <p class="cart-item-price">${formatPrice((item.priceValue || 0) * item.quantity)}</p>
            </div>

            <div class="cart-item-actions">
              <div class="quantity-controls">
                <button type="button" class="quantity-decrease" data-cart-item-id="${item.cartItemId}">−</button>
                <span>${item.quantity}</span>
                <button type="button" class="quantity-increase" data-cart-item-id="${item.cartItemId}">+</button>
              </div>
              
              <button type="button" class="cart-item-remove" data-cart-item-id="${item.cartItemId}" aria-label="Eliminar ${item.name} de la bolsa" title="Eliminar producto">🗑️</button>

            </div>
          </div>
        </div>
      </div>
  `).join('')}
</div>

      <div class="cart-total">
        <span>Total</span>
        <strong>${formatPrice(getCartTotalPrice())}</strong>
      </div>

      <p class="cart-note">El pedido se confirma según disponibilidad.</p>

      <button class="btn primary cart-checkout" type="button">
        Completar datos
      </button>
    `
  }

  const closeButton = document.querySelector('.cart-close')

  closeButton.addEventListener('click', () => {
    cartPanel.classList.remove('active')
  })
  
  const checkoutButton = document.querySelector('.cart-checkout')

  if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    renderCheckoutForm()
  })
}

const increaseButtons = document.querySelectorAll('.quantity-increase')
const decreaseButtons = document.querySelectorAll('.quantity-decrease')
const removeButtons = document.querySelectorAll('.cart-item-remove')

increaseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    increaseCartItem(button.dataset.cartItemId)
  })
})

decreaseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    decreaseCartItem(button.dataset.cartItemId)
  })
})

removeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cartItemId = button.dataset.cartItemId
    removeCartItem(cartItemId)
  })
})

}
  function renderCheckoutForm() {
    const cartPanel = document.querySelector('.cart-panel')

    if (!cartPanel) return

    cartPanel.innerHTML = `
    <div class="cart-panel-header">
      <h3>Finalizar pedido</h3>
      <button class="cart-close" type="button">×</button>
    </div>

    <form class="checkout-form">
      <label>
        Nombre
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          minlength="2"
          pattern=".*[A-Za-zÁÉÍÓÚáéíóúÑñ].*"
          title="Ingresá tu nombre"
          required
        >
      </label>

      <label>
        Teléfono
        <input
          type="tel"
          name="phone"
          placeholder="Ej: 3412422699"
          minlength="8"
          maxlength="15"
          pattern="[0-9 ]{8,15}"
          title="Ingresá un número válido, solo números, mínimo 8 dígitos"
          required
        >
      </label>

      <label>
        Zona o dirección
        <input
          type="text"
          name="address"
          placeholder="Ej: Rosario, zona centro"
          minlength="4"
          pattern=".*[A-Za-zÁÉÍÓÚáéíóúÑñ].*"
          title="Ingresá una zona o dirección válida, no solo números"
          required
        >
      </label>

      <label>
        Entrega
        <select name="delivery" required>
          <option value="">Elegí una opción</option>
          <option value="Retiro">Retiro</option>
          <option value="Envío en Rosario">Envío en Rosario</option>
          <option value="Consultar otra zona">Consultar otra zona</option>
        </select>
      </label>
      
      <label>
        Método de pago
        <select name="payment" required>
          <option value="">Elegí una opción</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Efectivo">Efectivo</option>
          <option value="A coordinar">A coordinar</option>
        </select>
      </label>

      <label>
        Nota opcional
        <textarea name="customerNote" placeholder="Talle, color, horario o aclaración"></textarea>
      </label>

      <div class="cart-total">
        <span>Total</span>
        <strong>${formatPrice(getCartTotalPrice())}</strong>
      </div>

      <button class="btn primary" type="submit">
        Enviar pedido
      </button>

      <button class="checkout-back" type="button">
        Volver a la bolsa
      </button>
    </form>
  `

    const closeButton = document.querySelector('.cart-close')
    const backButton = document.querySelector('.checkout-back')
    const checkoutForm = document.querySelector('.checkout-form')

    closeButton.addEventListener('click', () => {
      cartPanel.classList.remove('active')
    })

    backButton.addEventListener('click', () => {
      renderCartPanel()
    })

    checkoutForm.addEventListener('submit', (event) => {
      event.preventDefault()

      const formData = new FormData(checkoutForm)

      const customerName = formData.get('name')
      const customerPhone = formData.get('phone')
      const customerAddress = formData.get('address')
      const customerDelivery = formData.get('delivery')
      const customerPayment = formData.get('payment')
      const customerNote = formData.get('customerNote')?.trim() || 'Sin nota'

      const orderItems = cart.map((item) => {
        const details = [
          item.selectedColor ? `${item.optionLabel || 'Color'}: ${item.selectedColor}` : '',
          item.selectedSize ? `Talle: ${item.selectedSize}` : '',
        ].filter(Boolean).join('\n  ')

        return `• ${item.name} x${item.quantity} — ${formatPrice((item.priceValue || 0) * item.quantity)}${details ? `\n  ${details}` : ''}`
      }).join('\n\n')

      const message = `
      Hola, quiero hacer este pedido:

      PRODUCTOS:
      ${orderItems}

      TOTAL: ${formatPrice(getCartTotalPrice())}

      DATOS:
      Nombre: ${customerName}
      Teléfono: ${customerPhone}
      Zona/dirección: ${customerAddress}
      Entrega: ${customerDelivery}
      Método de pago: ${customerPayment}
      Nota: ${customerNote}
      `

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')

      clearCart()
      renderCartPanel()
      cartPanel.classList.remove('active')
    })
    

  }

const whatsappLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const productCard = (product) => `
  <article class="product-card product-${product.id}">
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
     <button class="btn primary add-to-cart" data-product-id="${product.id}">
        Agregar al carrito
     </button>
    </div>
  </article>
`

const renderProductSection = section => {
  const sectionProducts = products.filter(section.filter)

  if (sectionProducts.length === 0) return ''

  return `
    <section
      id="${section.id}"
      class="section product-section"
    >
      <h2>${section.title}</h2>

      <div class="carousel-wrap">
        <button
          class="carousel-arrow carousel-prev"
          type="button"
          data-target="${section.id}"
          aria-label="Ver productos anteriores"
        >
          ❮
        </button>

        <div class="grid" id="${section.id}-grid">
          ${sectionProducts.map(productCard).join('')}
        </div>

        <button
          class="carousel-arrow carousel-next"
          type="button"
          data-target="${section.id}"
          aria-label="Ver productos siguientes"
        >
          ❯
        </button>
      </div>
    </section>
  `
}

document.querySelector('#app').innerHTML = `
<header>
  <a href="#" class="logo">
    <span class="logo-text">AleAle</span>

    <img
      src="/imagenes/logo-aleale-floral.png"
      alt="AleAle"
      class="mobile-header-logo"
    >
  </a>

  <nav class="nav-menu">
    <div class="nav-main-panel">
      <button class="products-menu-button" type="button">
        Productos
        <span aria-hidden="true">›</span>
      </button>

      <a href="#como-comprar">Cómo comprar</a>
      <a href="#envios">Envíos</a>
      <a href="#contacto">Contacto</a>
    </div>

    <div class="products-panel">
      <button class="products-back-button" type="button">
        <span aria-hidden="true">‹</span>
        Volver
      </button>

      <a href="#ofertas">OFERTAS</a>
      <a href="#mujeres">Mujeres</a>
      <a href="#hombres">Hombres</a>
      <a href="#ninos">Niños</a>
      <a href="#medias">Medias</a>
      <a href="#temporada">Temporada</a>
    </div>
  </nav>

  <button class="cart-button" type="button">
    Carrito 🛒 (0)
  </button>

  <button class="menu-toggle" type="button">☰</button>
</header>

  <main>
    <section class="hero">

      <div class="hero-desktop">
       <img
          class="hero-desktop-logo"
          src="/imagenes/ale-ale-mayorista.png"
          alt="Ale-Ale Mayorista"
        >
      </div>

        <img
          class="hero-flower hero-flower-left"
          src="/imagenes/floral-left.png"
          alt=""
        >

        <img
          class="hero-flower hero-flower-right"
          src="/imagenes/floral-right.png"
          alt=""
        >


      <div class="hero-mobile">
        
        <span class="hero-mobile-location">ROSARIO</span>

        <img
          class="hero-mobile-logo"
          src="/imagenes/ale-ale-mayorista.png"
          alt="Ale-Ale Mayorista"
        >
      </div>

    </section>

    ${productSections.map(renderProductSection).join('')}

    <section id="como-comprar" class="section steps">
      <span class="section-label">SIMPLE</span>
      <h2>Cómo comprar</h2>
      <div class="steps-grid">
        <div>
          <strong>01</strong>
          <h3>Elegí tu producto</h3>
          <p>Mirá el catálogo y decidí qué te interesa.</p>
        </div>
        <div>
          <strong>02</strong>
          <h3>Armá tu pedido</h3>
          <p>Elegí modelo, color, talle y cantidad. Sumalo al carrito y completá tus datos.</p>
        </div>
        <div>
          <strong>03</strong>
          <h3>Coordinamos entrega</h3>
          <p>Recibimos el pedido, lo armamos y coordinamos si lo retirás o te lo enviamos.</p>
        </div>
      </div>
    </section>

    <section id="envios" class="section">
      <span class="section-label">ENVÍOS</span>
      <h2>Entregas en Rosario</h2>
      <p class="section-description">Coordinamos entregas en Rosario. Otras zonas se consultan por WhatsApp.</p>
      <a class="text-link" target="_blank" href="${whatsappLink('Hola, quería consultar el costo de entrega o envío para una compra en AleAle.')}">
        Consultar envío →
      </a>
    </section>
  </main>

  <footer id="contacto" class="footer">
    <h2>AleAle</h2>
    <p>Ropa de invierno y básicos por mayor.</p>
    <div>
      <a target="_blank" href="${whatsappLink('Hola, estoy viendo la página de AleAle y quería hacer una consulta.')}">WhatsApp</a>
      <a href="https://instagram.com/aleale_lenceria" target="_blank">Instagram</a>
      <span>Rosario, Argentina</span>
    </div>
  </footer>

<div class="cart-panel"></div>

<a 
  class="floating-whatsapp" 
  target="_blank" 
  aria-label="Consultar por WhatsApp"
  href="${whatsappLink('Hola, estoy viendo la página de AleAle y quería hacer una consulta.')}"
>
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16.04 3C8.86 3 3.02 8.82 3.02 15.98c0 2.28.6 4.5 1.73 6.46L3 29l6.73-1.76a13.02 13.02 0 0 0 6.31 1.61h.01c7.18 0 13.02-5.82 13.02-12.98C29.07 8.82 23.23 3 16.04 3Zm0 23.66h-.01c-1.93 0-3.82-.52-5.48-1.5l-.39-.23-3.99 1.04 1.07-3.88-.25-.4a10.75 10.75 0 0 1-1.66-5.72c0-5.95 4.86-10.8 10.83-10.8 2.9 0 5.62 1.13 7.66 3.17a10.72 10.72 0 0 1 3.17 7.64c0 5.95-4.86 10.68-10.95 10.68Zm5.94-8.08c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.86-1.63-1.93-1.82-2.26-.19-.33-.02-.5.14-.66.14-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7s1.17 3.14 1.33 3.36c.16.22 2.3 3.5 5.57 4.9.78.33 1.39.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.38Z"/>
  </svg>
</a>
  `
const menuToggle = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav-menu')
const navLinks = document.querySelectorAll('.nav-menu a')

const productsMenuButton = document.querySelector('.products-menu-button')
const productsBackButton = document.querySelector('.products-back-button')

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active')

  const menuIsOpen = navMenu.classList.contains('active')

  menuToggle.textContent = menuIsOpen ? '×' : '☰'

  if (!menuIsOpen) {
    navMenu.classList.remove('show-products')
  }
})

productsMenuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show-products')
})

productsBackButton.addEventListener('click', () => {
  navMenu.classList.remove('show-products')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active')
    navMenu.classList.remove('show-products')
    menuToggle.textContent = '☰'
  })
})

const openProductModal = (productId) => {
  const product = products.find((item) => item.id === productId)

  if (!product) return

  const firstColor = product.colors ? product.colors[0] : null
  const firstSize = product.sizes ? product.sizes[0] : null
  const selectedImage = firstColor ? firstColor.image : product.image

  const modal = document.createElement('div')
  modal.classList.add('product-modal')

  modal.innerHTML = `
    <div class="product-modal-content">
      <button class="product-modal-close" type="button">×</button>

      <div class="product-modal-image">
        <img src="${selectedImage}" alt="${product.name}" class="modal-product-img">
      </div>

      <div class="product-modal-info">
        <span>${getProductSectionLabel(product)}</span>
        <h3>${product.name}</h3>
        <p>${product.price}</p>

        ${product.colors ? `
          <div class="product-option">
            <strong>${product.optionLabel || 'Color'}</strong>
            <div class="option-buttons color-options">
              ${product.colors.map((color, index) => `
                <button
                  type="button"
                  class="option-button color-option ${index === 0 ? 'active' : ''}"
                  data-color="${color.name}"
                  data-image="${color.image}"
                >
                  ${color.name}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${product.sizes ? `
          <div class="product-option">
            <strong>Talle</strong>
            <div class="option-buttons size-options">
              ${product.sizes.map((size, index) => `
                <button
                  type="button"
                  class="option-button size-option ${index === 0 ? 'active' : ''}"
                  data-size="${size}"
                >
                  ${size}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="product-option">
          <strong>Cantidad</strong>
          <div class="quantity-controls modal-quantity-controls">
            <button type="button" class="modal-quantity-decrease">−</button>
            <span class="modal-quantity-value">${product.minQuantity || 1}</span>
            <button type="button" class="modal-quantity-increase">+</button>
          </div>
        </div>
        
        <div class="product-modal-actions">
          <button class="btn primary modal-add-to-cart" type="button">
            Agregar al carrito
          </button>

          <img
            src="/imagenes/sublogo-ale-ale.png"
            alt="Logo Ale-Ale"
            class="product-modal-sublogo"
          >
        </div>  
      </div>
    </div>
  `

  document.body.appendChild(modal)

  const closeButton = modal.querySelector('.product-modal-close')
  const image = modal.querySelector('.modal-product-img')
  const colorButtons = modal.querySelectorAll('.color-option')
  const sizeButtons = modal.querySelectorAll('.size-option')
  const addButton = modal.querySelector('.modal-add-to-cart')
  const quantityValue = modal.querySelector('.modal-quantity-value')
  const quantityDecrease = modal.querySelector('.modal-quantity-decrease')
  const quantityIncrease = modal.querySelector('.modal-quantity-increase')

  let selectedColor = firstColor ? firstColor.name : null
  let selectedSize = firstSize
  let selectedQuantity = product.minQuantity || 1

  closeButton.addEventListener('click', () => {
    modal.remove()
  })

  colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      colorButtons.forEach((item) => item.classList.remove('active'))
      button.classList.add('active')

      selectedColor = button.dataset.color
      image.src = button.dataset.image
    })
  })

  sizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sizeButtons.forEach((item) => item.classList.remove('active'))
      button.classList.add('active')

      selectedSize = button.dataset.size
    })
  })

  quantityDecrease.addEventListener('click', () => {
    if (selectedQuantity <= 1) return

    selectedQuantity -= 1
    quantityValue.textContent = selectedQuantity
  })

  quantityIncrease.addEventListener('click', () => {
    selectedQuantity += 1
    quantityValue.textContent = selectedQuantity
  })

  addButton.addEventListener('click', () => {
    addToCart(productId, {
      color: selectedColor,
      size: selectedSize,
      image: image.src,
      quantity: selectedQuantity,
    })

    modal.remove()
  })
}

const addToCartButtons = document.querySelectorAll('.add-to-cart')

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId
    const product = products.find((item) => item.id === productId)

    if (!product) return

    if (product.colors || product.sizes) {
      openProductModal(productId)
    } else {
      addToCart(productId)
    }
  })
})

const cartButton = document.querySelector('.cart-button')
const cartPanel = document.querySelector('.cart-panel')

cartButton.addEventListener('click', () => {
  renderCartPanel()
  cartPanel.classList.add('active')
})

const smoothScrollCarousel = (carousel, targetPosition, duration = 600) => {
  const startPosition = carousel.scrollLeft
  const distance = targetPosition - startPosition
  const startTime = performance.now()

  const maxScroll = carousel.scrollWidth - carousel.clientWidth
  const finalPosition = Math.max(0, Math.min(targetPosition, maxScroll))

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)

    // Empieza suave, acelera y vuelve a frenar.
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2

    carousel.scrollLeft =
      startPosition + (finalPosition - startPosition) * ease

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}

const updateCarouselLayout = () => {
  const carouselWrappers = document.querySelectorAll('.carousel-wrap')

  carouselWrappers.forEach(wrapper => {
    const carousel = wrapper.querySelector('.grid')
    const arrows = wrapper.querySelectorAll('.carousel-arrow')

    if (!carousel) return

    const hasOverflow =
      carousel.scrollWidth > carousel.clientWidth + 2

    carousel.classList.toggle('is-centered', !hasOverflow)
    wrapper.classList.toggle('has-overflow', hasOverflow)

    arrows.forEach(arrow => {
      arrow.hidden = !hasOverflow
      arrow.tabIndex = hasOverflow ? 0 : -1
      arrow.setAttribute('aria-hidden', String(!hasOverflow))
    })
  })
}

const carouselButtons = document.querySelectorAll('.carousel-arrow')

carouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target
    const carousel = document.querySelector(`#${target}-grid`)

    if (!carousel) return

    const firstCard = carousel.querySelector('.product-card')
    if (!firstCard) return

    const gap = parseInt(getComputedStyle(carousel).gap) || 0
    const cardWidth = firstCard.offsetWidth + gap
    const direction = button.classList.contains('carousel-next') ? 1 : -1

    smoothScrollCarousel(
      carousel,
      carousel.scrollLeft + direction * cardWidth,
      600
    )
  })
})

requestAnimationFrame(updateCarouselLayout)

window.addEventListener('load', updateCarouselLayout)
window.addEventListener('resize', updateCarouselLayout)

updateCartButton()