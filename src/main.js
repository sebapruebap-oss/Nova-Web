import './style.css'

const WHATSAPP_NUMBER = '5493416279719'

const products = [
  {
    name: 'Campera puffer',
    category: 'Abrigos',
    price: 'Consultar precio',
    image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=900&q=80',
    message: 'Hola, quiero consultar por Campera puffer. ¿Me pasás disponibilidad, talles y precio?'
  },
  {
    name: 'Buzo polar',
    category: 'Abrigos',
    price: 'Consultar precio',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
    message: 'Hola, quiero consultar por Buzo polar. ¿Me pasás disponibilidad, talles y precio?'
  },
  {
    name: 'Medias por mayor',
    category: 'Mayorista',
    price: 'Consultar precio',
    image: 'https://images.unsplash.com/photo-1618354691249-18772bbac3e4?auto=format&fit=crop&w=900&q=80',
    message: 'Hola, quiero consultar precios por mayor de medias. ¿Me pasás la lista disponible?'
  },
  {
    name: 'Boxers por mayor',
    category: 'Mayorista',
    price: 'Consultar precio',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
    message: 'Hola, quiero consultar precios por mayor de boxers. ¿Me pasás la lista disponible?'
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
    <nav>
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
      <p class="section-description">Medias, boxers y básicos pensados para revendedores, familias o compras grandes.</p>
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

  <a class="floating-whatsapp" target="_blank" href="${whatsappLink('Hola, estoy viendo la página de AleAle y quería hacer una consulta.')}">
    WhatsApp
  </a>
`