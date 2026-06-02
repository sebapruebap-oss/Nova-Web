import './style.css'

const WHATSAPP_NUMBER = '5493416279719'

const products = [
  {
    id: 'campera-corta',
    name: 'Campera corta',
    category: 'Abrigos',
    type: 'retail',
    price: '$10.000',
    priceValue: 10000,
    minQuantity: 1,
    image: '/productos/campera-corta-roja.png',
    description: 'Campera corta de invierno. Consultar talles, colores y disponibilidad.',
    available: true,
    message: 'Hola, quiero consultar por la Campera corta. ¿Qué talles y colores tenés disponibles?'
  },
  {
    id: 'campera-larga',
    name: 'Campera larga',
    category: 'Abrigos',
    type: 'retail',
    price: '$14.000',
    priceValue: 14000,
    minQuantity: 1,
    image: '/productos/campera-larga-azul.png',
    description: 'Campera larga de invierno. Consultar talles, colores y disponibilidad.',
    available: true,
    message: 'Hola, quiero consultar por la Campera larga. ¿Qué talles y colores tenés disponibles?'
  },
  {
    id: 'boxer-vuk',
    name: 'Boxer Vuk',
    category: 'Mayorista',
    type: 'wholesale',
    price: '$5.800 c/u · mínimo x3',
    priceValue: 5800,
    minQuantity: 1,
    image: '/productos/boxer-vuk-azul.png',
    colors: [
      {
        name: 'Azul',
        image: '/productos/boxer-vuk-azul.png',
      },
      {
        name: 'Negro',
        image: '/productos/boxer-vuk-azul.png',
      },
      {
        name: 'Verde',
        image: '/productos/boxer-vuk-azul.png',
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
    category: 'Mayorista',
    type: 'wholesale',
    price: '$6.200 c/u · mínimo x3',
    priceValue: 6200,
    minQuantity: 3,
    image: '/productos/boxer-intermezzo-estampado.png',
    description: 'Boxers Intermezzo por mayor. Precio unitario con compra mínima de 3 unidades.',
    available: true,
    message: 'Hola, quiero consultar por Boxer Intermezzo por mayor. ¿Qué colores y talles tenés disponibles?'
  },
  {
    id: 'medias-largas',
    name: 'Medias largas',
    category: 'Mayorista',
    type: 'wholesale',
    price: '$1.300 c/u · mínimo x6',
    priceValue: 1300,
    minQuantity: 6,
    image: '/productos/medias-largas-rayadas.png',
    description: 'Medias largas por mayor. Precio unitario con compra mínima de 6 unidades.',
    available: true,
    message: 'Hola, quiero consultar por Medias largas por mayor. ¿Qué modelos tenés disponibles?'
  },
  {
    id: 'medias-cana',
    name: 'Medias caña',
    category: 'Mayorista',
    type: 'wholesale',
    price: '$1.300 c/u · mínimo x6',
    priceValue: 1300,
    minQuantity: 6,
    image: '/productos/medias-cortas-beige.png',
    description: 'Medias caña por mayor. Precio unitario con compra mínima.',
    available: true,
    message: 'Hola, quiero consultar por Medias caña por mayor.'
  }
]

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
<div class="cart-items">
  ${cart.map((item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">

        <div class="cart-item-content">
          <div class="cart-item-header">
            <div class="cart-item-main">
                <strong>${item.name}</strong>

              <div class="cart-item-details">
                ${item.selectedColor ? '<span>Color: ' + item.selectedColor + '</span>' : ''}
                ${item.selectedSize ? '<span>Talle: ' + item.selectedSize + '</span>' : ''}
              </div>

              <span>${item.quantity} unidad${item.quantity > 1 ? 'es' : ''}</span>
              <p class="cart-item-price">${formatPrice((item.priceValue || 0) * item.quantity)}</p>
            </div>

            <div class="quantity-controls">
              <button type="button" class="quantity-decrease" data-cart-item-id="${item.cartItemId}">−</button>
              <span>${item.quantity}</span>
              <button type="button" class="quantity-increase" data-cart-item-id="${item.cartItemId}">+</button>
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
      const customerNote = formData.get('note') || 'Sin nota'

      const orderItems = cart.map((item) => {
        const details = [
          item.selectedColor ? `Color: ${item.selectedColor}` : '',
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
  <article class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <span>${product.category}</span>
      <h3>${product.name}</h3>
      <p>${product.price}</p>
     <button class="btn primary add-to-cart" data-product-id="${product.id}">
        Agregar al carrito
     </button>
    </div>
  </article>
`

document.querySelector('#app').innerHTML = `
<header>
  <a href="#" class="logo">AleAle</a>

  <nav class="nav-menu">
    <a href="#abrigos">Abrigos</a>
    <a href="#mayorista">Mayorista</a>
    <a href="#como-comprar">Cómo comprar</a>
    <a href="#envios">Envíos</a>
    <a href="#contacto">Contacto</a>
  </nav>

  <button class="cart-button" type="button">
    Carrito 🛒 (0)
  </button>

  <button class="menu-toggle" type="button">☰</button>
</header>

  <main>
    <section class="hero">
      <div class="hero-text">
        <span>ROPA DE INVIERNO · ROSARIO</span>
        <h1>Abrigos y básicos para todos los días</h1>
        <p>Ropa de invierno por menor y básicos por cantidad. Comprá simple y coordinamos entrega en Rosario.</p>
        <div class="hero-buttons">
          <a href="#abrigos" class="btn primary">Ver abrigos</a>
          <a href="#mayorista" class="btn secondary">Ver mayorista</a>
        </div>
      </div>
    </section>

    <section id="abrigos" class="section">
      <h2>Abrigos de temporada</h2>
      <div class="grid">
        ${products.filter(product => product.category === 'Abrigos').map(productCard).join('')}
      </div>
    </section>

    <section id="mayorista" class="section mayorista">
      <h2>Básicos por cantidad</h2>

      <div class="carousel-wrap">
        <button class="carousel-arrow carousel-prev" type="button" data-target="mayorista">‹</button>
      
        <div class="grid" id="mayorista-grid">
          ${products.filter(product => product.category === 'Mayorista').map(productCard).join('')}
        </div>
      
        <button class="carousel-arrow carousel-next" type="button" data-target="mayorista">›</button>
      </div>
      
      <a class="btn primary" target="_blank" href="${whatsappLink('Hola, quiero consultar precios por mayor de medias, boxers y básicos. ¿Me pasás la lista disponible?')}">
        Pedir lista mayorista
      </a>
    </section>

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
          <h3>Consultanos por WhatsApp</h3>
          <p>Confirmamos disponibilidad, talles, colores y precio final.</p>
        </div>
        <div>
          <strong>03</strong>
          <h3>Coordinamos entrega</h3>
          <p>Retiro o entrega en Rosario. Otras zonas se consultan.</p>
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
    <p>Ropa de invierno por menor y básicos por mayor.</p>
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

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active')
  menuToggle.textContent = navMenu.classList.contains('active') ? '×' : '☰'
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active')
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
        <span>${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.price}</p>

        ${product.colors ? `
          <div class="product-option">
            <strong>Color</strong>
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
          <div class="modal-quantity-controls">
            <button type="button" class="modal-quantity-decrease">−</button>
            <span class="modal-quantity-value">${product.minQuantity || 1}</span>
            <button type="button" class="modal-quantity-increase">+</button>
          </div>
        </div>

        <button class="btn primary modal-add-to-cart" type="button">
          Agregar al carrito
        </button>
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

const carouselButtons = document.querySelectorAll('.carousel-arrow')

carouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target
    const carousel = document.querySelector(`#${target}-grid`)

    if (!carousel) return

    const direction = button.classList.contains('carousel-next') ? 1 : -1
    carousel.scrollBy({
      left: direction * 420,
      behavior: 'smooth',
    })
  })
})

updateCartButton()