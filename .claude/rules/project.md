# project.md — Contexto técnico, lógica y proceso de trabajo

## Descripción del proyecto

AleAle es una tienda web de ropa desarrollada con:

- HTML
- CSS
- JavaScript vanilla
- Vite
- Git y GitHub
- Vercel

La web está pensada principalmente para dispositivos móviles.

Actualmente permite:

- mostrar productos organizados por secciones;
- navegar entre categorías;
- utilizar carruseles de productos;
- abrir un modal con los detalles del producto;
- seleccionar variantes como color o talle;
- modificar cantidades;
- agregar productos al carrito;
- conservar el carrito mediante localStorage;
- eliminar productos del carrito;
- completar datos del pedido;
- enviar el pedido final por WhatsApp.

## Tecnologías que NO existen actualmente

El proyecto no tiene:

- backend;
- base de datos;
- panel administrativo;
- sistema de stock en tiempo real;
- autenticación;
- framework de frontend;
- React, Vue, Angular o similares.

No asumir que estas tecnologías existen.

No proponerlas ni implementarlas salvo que el usuario las solicite expresamente.

## Prioridad del proyecto

El orden de prioridades es:

1. Mantener la página funcional.
2. Priorizar la experiencia mobile.
3. Agregar y administrar productos correctamente.
4. Mantener una estética floral, cálida y profesional.
5. Evitar complejidad innecesaria.
6. Mejorar desktop sin romper mobile.
7. Automatizar procesos solamente cuando exista un caso de uso real.

## Archivos principales

### `src/main.js`

Contiene principalmente:

- el array `products`;
- las categorías y secciones;
- `productBelongsToSection`;
- `productSections`;
- `productCard`;
- `renderProductSection`;
- `openProductModal`;
- lógica del carrito;
- persistencia con localStorage;
- checkout;
- generación del mensaje de WhatsApp;
- eventos del menú;
- eventos de carruseles;
- renderizado principal de la aplicación.
- `categoryLabels`, que convierte ids internos de categorías en etiquetas visibles;
- `getProductSectionLabel`, utilizada para decidir qué categoría o sección mostrar dentro del modal;
- `WHATSAPP_NUMBER`, constante donde se encuentra el número utilizado para generar el pedido final.

### `src/style.css`

Contiene:

- variables visuales;
- estilos globales;
- header y navegación;
- hero desktop y mobile;
- secciones de productos;
- carruseles;
- tarjetas;
- modal;
- carrito;
- checkout;
- footer;
- media queries para mobile;
- correcciones específicas responsive.

### `index.html`

Contiene la estructura base utilizada por Vite.

### `public/imagenes/`

Contiene logos, flores y recursos visuales de la marca AleAle.

### `public/productos/`

Contiene las imágenes de los productos.

### `public/icons.svg`

Archivo heredado o auxiliar dentro de `public`.

Actualmente no contiene las imágenes principales utilizadas por AleAle.

No asumir que los recursos visuales de la marca se encuentran ahí.
Antes de modificarlo o eliminarlo, comprobar si está referenciado en el proyecto.

## Estructura actual de productos

Los productos se definen dentro del array:

```js
const products = []
```

Un producto puede contener propiedades como:

```js
{
  id: '',
  name: '',
  category: '',
  sections: [],
  seasonal: false,
  type: '',
  price: '',
  priceValue: 0,
  minQuantity: 1,
  image: '',
  optionLabel: '',
  colors: [],
  sizes: [],
  description: '',
  available: true,
  message: ''
}
```

No todos los productos necesitan necesariamente todas las propiedades.

### Reglas para productos

- Cada id debe ser único.
- El id debe ser descriptivo y estable.
- No cambiar un id si el producto ya puede estar guardado en localStorage.
- name es el nombre visible del producto.
- price es el texto mostrado en pantalla.
- priceValue debe ser un número.
- minQuantity debe ser numérico.
- La ruta de image debe existir dentro de public.
- category puede utilizarse para clasificación general.
- sections define de forma explícita en qué secciones aparece el producto.
- Si existe sections, esta propiedad tiene prioridad sobre category.
- seasonal mantiene compatibilidad con productos anteriores de Temporada.
- No modificar nombres de propiedades sin revisar todos sus usos.
- No agregar propiedades nuevas sin comprobar primero si realmente son necesarias.
- Las variantes de color utilizan `colors`, con objetos que pueden incluir `name` e `image`.
- Las variantes de talle utilizan `sizes`, como un array de strings.
- `optionLabel` define el nombre visible de la variante cuando corresponde.
- No utilizar una propiedad genérica `options`, porque actualmente no existe en el código.
- La propiedad `type` existe actualmente en los productos, pero no participa en la lógica principal de filtrado o renderizado. No basar nuevas funcionalidades en `type` sin revisar antes si debe incorporarse realmente al sistema.

### Flujo principal de productos

El flujo actual es:

```
products
→ productBelongsToSection
→ productSections
→ renderProductSection
→ productCard
→ openProductModal
→ getProductSectionLabel
→ carrito
→ checkout
→ WhatsApp
```

Antes de modificar una parte del flujo, revisar las funciones que dependen de ella.

### Secciones actuales

Las secciones principales pueden incluir:

- ofertas;
- mujeres;
- hombres;
- niños;
- medias;
- temporada.

Las secciones sin productos pueden ocultarse o mostrar un mensaje, dependiendo de la lógica vigente.

No eliminar una sección sin revisar:

- menú desktop;
- menú mobile;
- navegación;
- filtros;
- enlaces con href;
- CSS asociado;
- carruseles;
- renderizado.

## Reglas de trabajo obligatorias

- Analizar el código real antes de proponer cambios.
- No inventar funciones, archivos o tecnologías.
- Explicar primero qué bloque se va a modificar.
- Proponer el cambio mínimo necesario.
- Realizar un cambio por vez.
- No modificar varias áreas grandes simultáneamente.
- No hacer refactorizaciones amplias durante un cambio visual pequeño.
- No cambiar funcionalidad existente sin autorización.
- No eliminar código por parecer redundante sin comprobar sus referencias.
- No instalar librerías sin una necesidad concreta.
- No reemplazar JavaScript vanilla por un framework.
- No agregar backend, base de datos o stock automático sin autorización.
- Mantener compatibilidad con productos existentes.
- Mantener compatibilidad con localStorage.
- Si existe una skill disponible para la tarea en curso, consultarla antes de modificar código.

## Forma correcta de proponer un cambio

Antes de modificar código, responder con:

1. El archivo que se va a modificar.
2. La función o selector exacto involucrado.
3. Cómo funciona actualmente.
4. Qué problema se intenta resolver.
5. Qué riesgo tiene el cambio.
6. El cambio mínimo recomendado.

Esperar confirmación antes de ejecutar modificaciones, salvo que el usuario solicite explícitamente realizar el cambio.

## Forma correcta de mostrar código

Cuando el cambio sea pequeño:

- mostrar únicamente el bloque que debe reemplazarse;
- indicar claramente dónde se encuentra;
- no devolver archivos completos;
- no repetir código que no cambia;
- explicar qué parte borrar y cuál pegar.

Cuando el cambio sea amplio:

- dividirlo en etapas;
- validar cada etapa antes de continuar.

## Validaciones después de modificar

### General

- La página carga.
- No hay errores visibles.
- No hay errores en la consola.
- No se rompió el renderizado.

### Productos

- Imagen correcta.
- Nombre correcto.
- Precio visible.
- priceValue correcto.
- Categoría o sección correcta.
- Variantes correctas.
- Cantidad mínima correcta.
- Agregado al carrito.
- Eliminación del carrito.
- Persistencia al recargar.
- Mensaje de WhatsApp correcto.

### Carruseles

- No asumir que todas las secciones tienen la misma cantidad de productos.
- Centrar productos cuando no exista desplazamiento suficiente.
- Ocultar flechas cuando no haya contenido para desplazar.

### Modal

El modal debe conservar:

- imagen;
- nombre;
- precio;
- etiqueta de sección o categoría;
- variantes cuando existan;
- cantidad;
- botón de agregar al carrito;
- botón de cierre;
- logo decorativo de AleAle.

No mostrar la categoría dentro de la tarjeta si el diseño actual solo la utiliza en el modal.

### Carrito

El carrito utiliza localStorage.

Antes de modificarlo, revisar:

- estructura de cada item;
- identificador del producto;
- variante seleccionada;
- cantidad;
- precio;
- actualización del contador;
- eliminación;
- persistencia;
- checkout.

La clave actual utilizada en localStorage es `aleale-cart`.
No cambiar esta clave sin considerar la compatibilidad con carritos ya guardados.
No cambiar la estructura guardada sin considerar datos existentes en el navegador.

### WhatsApp

Antes de modificar el checkout o mensaje final, revisar:

- producto;
- variante;
- cantidad;
- precio;
- subtotal;
- nota;
- datos del comprador;
- forma de entrega;
- texto de fallback cuando no existe nota.

## Git

La rama main representa la versión estable.

Antes de un cambio importante:

```
git status
git branch
git log --oneline -5
```

Para cambios experimentales o grandes, crear una rama.

Ejemplos:

```
git checkout -b feature/agregar-productos
git checkout -b fix/menu-mobile
git checkout -b design/mejorar-tarjetas
git checkout -b docs/documentacion-claude
```

No hacer commit hasta que el usuario confirme que el cambio funciona.
No hacer push sin autorización explícita.

Comandos habituales:

```
npm run dev -- --host
git status
git diff
git add .
git commit -m "Descripción clara del cambio"
git push
```

## Estado verificado manualmente

(Este estado fue comprobado manualmente en mobile y desktop antes de crear este archivo. Claude no debe asumir que continúa vigente después de cambios futuros sin volver a probarlo.)

- La web funciona en mobile y desktop.
- El menú mobile funciona.
- El dropdown de productos funciona.
- Las secciones se generan desde JavaScript.
- Las secciones vacías no deben romper la página.
- Los carruseles funcionan.
- Las tarjetas funcionan.
- El modal funciona.
- Las variantes funcionan.
- El carrito funciona.
- localStorage funciona.
- El checkout funciona.
- El mensaje de WhatsApp funciona.
- La página todavía no está abierta oficialmente al público.
- Faltan agregar productos reales.
- Instagram de AleAle todavía debe profesionalizarse.
- La prioridad inmediata es documentar el proyecto y agregar productos.

## Archivos heredados de Vite

- `src/counter.js`
- algunos archivos dentro de `src/assets/`

Actualmente no parecen formar parte de la aplicación principal.
No eliminarlos sin comprobar primero importaciones y referencias.

## Próximo objetivo

El próximo objetivo funcional es agregar productos nuevos de forma segura y repetible.

Antes de agregar productos nuevos:

- Revisar la plantilla de producto existente.
- Confirmar nombre.
- Confirmar precio.
- Confirmar categoría.
- Confirmar secciones.
- Confirmar cantidad mínima.
- Confirmar variantes.
- Preparar imagen.
- Agregar el objeto.
- Probar tarjeta.
- Probar modal.
- Probar carrito.
- Probar WhatsApp.
- Probar mobile.
- Probar desktop.
