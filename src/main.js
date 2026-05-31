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
    minQuantity: 3,
    image: '/productos/boxer-vuk-azul.png',
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
    id: 'medias-caña',
    name: 'Medias caña',
    category: 'Mayaorista',
    type: 'wholesale',
    price: '$1.300 c/u · mínimo x6',
    priceValue: 1300,
    minQuantity: 6,
    image: '/productos/medias-cortas-beige.png',
    description: 'Medias cortas por mayor. Precio unitario con compra mínima de 6 unidades.',
    available: true,
    message: 'Hola, quiero consultar por Medias cortas por mayor. ¿Qué modelos tenés disponibles?'
  }
]

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
      <a href="${whatsappLink(product.message)}" target="_blank">
        Consultar por WhatsApp
      </a>
    </div>
  </article>
`

document.querySelector('#app').innerHTML = `
<header class="header">
  <div class="logo">AleAle</div>

  <button class="menu-toggle" aria-label="Abrir menú">
    ☰
  </button>

  <nav class="nav-menu">
    <a href="#abrigos">Abrigos</a>
    <a href="#mayorista">Mayorista</a>
    <a href="#como-comprar">Cómo comprar</a>
    <a href="#envios">Envíos</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>

  <main>
    <section class="hero">
      <div class="hero-text">
        <span>ROPA DE INVIERNO · ROSARIO</span>
        <h1>Ropa de invierno por menor y básicos por mayor</h1>
        <p>Abrigos de temporada, medias, boxers y básicos por cantidad. Consultá disponibilidad y coordinamos entrega en Rosario.</p>
        <div class="hero-buttons">
          <a href="#abrigos" class="btn primary">Ver abrigos</a>
          <a href="#mayorista" class="btn secondary">Ver mayorista</a>
        </div>
      </div>
    </section>

    <section class="categories">
      <a href="#abrigos">
        <span>POR MENOR</span>
        <strong>Abrigos</strong>
      </a>
      <a href="#mayorista">
        <span>POR CANTIDAD</span>
        <strong>Mayorista</strong>
      </a>
    </section>

    <section id="abrigos" class="section">
      <span class="section-label">POR MENOR</span>
      <h2>Abrigos de temporada</h2>
      <div class="grid">
        ${products.filter(product => product.category === 'Abrigos').map(productCard).join('')}
      </div>
    </section>

    <section id="mayorista" class="section mayorista">
      <span class="section-label">MAYORISTA</span>
      <h2>Básicos por cantidad</h2>
      
      <div class="grid">
        ${products.filter(product => product.category === 'Mayorista').map(productCard).join('')}
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