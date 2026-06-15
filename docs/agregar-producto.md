# Cómo agregar un producto en AleAle

Este documento define el procedimiento seguro para agregar productos nuevos al proyecto.

El objetivo es evitar errores en:

- secciones;
- tarjetas;
- modal;
- variantes;
- carrito;
- localStorage;
- checkout;
- mensaje de WhatsApp;
- mobile;
- desktop.

---

## 1. Reunir la información del producto

Antes de modificar código, confirmar:

- Nombre visible.
- Precio mostrado.
- Precio numérico.
- Categoría.
- Sección o secciones donde aparecerá.
- Imagen principal.
- Variantes de color, si existen.
- Variantes de talle, si existen.
- Cantidad mínima.
- Tipo de venta, si corresponde.
- Si pertenece a Temporada.
- Descripción o mensaje especial, únicamente si la estructura actual del producto lo necesita.
- `description` y `message` existen en algunos productos, pero actualmente no forman parte central del renderizado visible.
No agregarlas por defecto ni depender de ellas para funciones nuevas sin revisar primero su uso real.

No agregar el producto hasta tener confirmados los datos esenciales.

---

## 2. Preparar la imagen

Las imágenes de productos se guardan en:

```text
public/productos/
```

Reglas:

- Usar nombres en minúsculas.
- No usar espacios.
- Separar palabras con guiones.
- Mantener una extensión consistente, preferentemente `.png`.
- Utilizar fondos blancos o gris claro similares al resto del catálogo.
- Mantener el producto centrado.
- Evitar diferencias fuertes de encuadre entre productos.

Ejemplo:

```text
public/productos/bombacha-floral-blanca.png
```

La ruta usada dentro de JavaScript será:

```js
image: '/productos/bombacha-floral-blanca.png',
```

Antes de continuar, confirmar que el archivo exista realmente en esa ubicación.

---

## 3. Crear un identificador único

Cada producto debe tener un `id` único.

Formato recomendado:

```text
nombre-del-producto
```

Ejemplos:

```js
id: 'bombacha-floral',
id: 'boxer-vuk-azul',
id: 'medias-cana-blancas',
```

Reglas:

- Usar minúsculas.
- No usar espacios.
- No usar tildes.
- Separar palabras con guiones.
- No reutilizar un `id` existente.
- No cambiar el `id` de un producto ya publicado sin revisar localStorage.

La clave actual del carrito en localStorage es:

```text
aleale-cart
```

Un cambio de `id` puede dejar referencias antiguas dentro de carritos guardados.

---

## 4. Elegir categoría y secciones

Las secciones actuales incluyen:

```text
ofertas
mujeres
hombres
ninos
medias
temporada
```

La lógica principal utiliza:

```js
category
sections
seasonal
```

### Uso de `category`

Se utiliza para la clasificación general del producto.

Ejemplo:

```js
category: 'mujeres',
```

### Uso de `sections`

Define explícitamente dónde aparece el producto.

Ejemplo:

```js
sections: ['mujeres'],
```

Otro ejemplo:

```js
sections: ['mujeres', 'ofertas'],
```

Si existe `sections`, tiene prioridad sobre `category` para el renderizado de secciones.

### Uso de `seasonal`

Mantiene compatibilidad con productos anteriores de Temporada.

Ejemplo:

```js
seasonal: true,
```

Para productos nuevos, preferir:

```js
sections: ['temporada'],
```

No eliminar `seasonal` de productos existentes sin revisar la compatibilidad.

---

## 5. Plantilla básica de producto

Usar esta estructura como punto de partida:

```js
{
  id: 'id-unico-del-producto',
  name: 'Nombre visible',
  category: 'mujeres',
  sections: ['mujeres'],
  seasonal: false,
  type: 'retail',
  price: '$0',
  priceValue: 0,
  minQuantity: 1,
  image: '/productos/nombre-imagen.png',
},
```

La propiedad `type` existe actualmente, pero no participa de forma central en el filtrado o renderizado.

No crear nuevas funciones basadas en `type` sin revisar primero el sistema.

## Propiedades existentes sin lógica activa

### `available`

La propiedad `available` existe en algunos productos actuales, pero ninguna función del proyecto la utiliza para ocultar productos, impedir compras o modificar el renderizado.

Por lo tanto: 

- no agregarla por defecto a productos nuevos;
- no asumir que `available: false` oculta un producto;
- no utilizarla como sistema de stock;
- revisar la lógica de `src/main.js` antes de activarla en el futuro.

---

## 6. Precio

El producto utiliza dos valores:

```js
price: '$2.200',
priceValue: 2200,
```

### `price`

Es el texto que se muestra en la tarjeta y el modal.

### `priceValue`

Debe ser numérico y se utiliza para cálculos.

Correcto:

```js
price: '$6.200 pack x3',
priceValue: 6200,
```

Incorrecto:

```js
priceValue: '$6.200',
```

No colocar símbolos, puntos ni texto dentro de `priceValue`.

---

## 7. Cantidad mínima

La cantidad mínima se define con:

```js
minQuantity: 1,
```

Ejemplo mayorista:

```js
minQuantity: 3,
```

Antes de definirla, confirmar si el precio corresponde:

- por unidad;
- por pack;
- por cantidad mínima.

La tarjeta, el modal, el carrito y el mensaje final deben mostrar una interpretación coherente.

---

## 8. Variantes de color

Las variantes de color utilizan `colors`.

Ejemplo:

```js
optionLabel: 'Color',
colors: [
  {
    name: 'Blanco',
    image: '/productos/producto-blanco.png',
  },
  {
    name: 'Negro',
    image: '/productos/producto-negro.png',
  },
],
```

Reglas:

- Cada color debe tener un nombre visible.
- Cada imagen declarada debe existir.
- La primera variante será normalmente la seleccionada por defecto.
- La imagen principal debería coincidir con la primera variante.
- No utilizar una propiedad genérica `options`.

Ejemplo de imagen principal:

```js
image: '/productos/producto-blanco.png',
```

---

## 9. Variantes de talle

Los talles utilizan `sizes`.

Ejemplo:

```js
optionLabel: 'Talle',
sizes: ['S', 'M', 'L', 'XL'],
```

Reglas:

- Mantener el orden lógico.
- No mezclar talles numéricos y alfabéticos sin necesidad.
- Confirmar que el modal muestre correctamente la selección.
- Revisar que el talle elegido llegue al carrito y a WhatsApp.

---

## 10. Producto con colores y talles

Cuando el producto necesita ambas variantes, revisar el código real antes de agregarlo.

No asumir automáticamente que el sistema soporta cualquier combinación de color y talle.

Probar expresamente:

- cambio de color;
- cambio de talle;
- imagen mostrada;
- producto agregado al carrito;
- información guardada en localStorage;
- mensaje final.

---

## 11. Agregar el objeto a `products`

Archivo:

```text
src/main.js
```

Ubicación:

```js
const products = [
```

Agregar el producto junto a otros productos similares.

Criterio recomendado:

- productos de mujeres junto a mujeres;
- productos de hombres junto a hombres;
- medias junto a medias;
- productos de temporada junto a productos similares.

No agregarlo en una ubicación aleatoria si puede mantenerse un orden entendible.

---

## 12. Ejemplo de producto simple

```js
{
  id: 'ejemplo-producto-simple',
  name: 'ejemplo-producto-simple',
  category: 'mujeres',
  sections: ['mujeres'],
  seasonal: false,
  type: 'retail',
  price: '$2.200',
  priceValue: 2200,
  minQuantity: 1,
  image: '/productos/ejemplo-producto-simple.png',
},
```

---

## 13. Ejemplo con colores

```js
{
  id: 'ejemplo-producto-colores',
  name: 'ejemplo-producto-colores',
  category: 'mujeres',
  sections: ['temporada'],
  seasonal: true,
  type: 'retail',
  price: '$6.800',
  priceValue: 6800,
  minQuantity: 1,
  image: '/productos/ejemplo-producto-colores.png',
  optionLabel: 'Color',
  colors: [
    {
      name: 'Beige',
      image: '/productos/ejemplo-producto-colores.png',
    },
    {
      name: 'Gris',
      image: '/productos/ejemplo-producto-colores.png',
    },
    {
      name: 'Rojo',
      image: '/productos/ejemplo-producto-colores.png',
    },
  ],
},
```

---

## 14. Ejemplo mayorista

```js
{
  id: 'ejemplo-producto-mayorista',
  name: 'Producto mayorista de ejemplo',
  category: 'hombres',
  sections: ['hombres'],
  seasonal: false,
  type: 'wholesale',
  price: '$9.000 pack x3',
  priceValue: 9000,
  minQuantity: 3,
  image: '/productos/ejemplo-producto-mayorista.png',
}
```

Confirmar si el precio mostrado representa:

- precio unitario;
- precio por pack;
- precio total del mínimo.

No dejar esta interpretación ambigua para el cliente.

---

Antes de agregar el producto, buscar el `id` completo dentro de `src/main.js`.

Si ya existe una coincidencia, elegir otro identificador.

Nunca copiar literalmente el `id` de los ejemplos de esta guía.

La propiedad `available` aparece en algunos productos, pero actualmente no controla el renderizado ni deshabilita compras.

No utilizarla para ocultar productos hasta que exista una lógica explícita que la lea.

## 15. Pruebas obligatorias

Después de agregar el producto, ejecutar:

```bash
npm run dev -- --host
```

### Tarjeta

Comprobar:

- La imagen carga.
- El nombre es correcto.
- El precio es correcto.
- No aparece una categoría no deseada en la tarjeta.
- El botón funciona.
- El tamaño de la tarjeta es coherente.

### Producto sin variantes

Cuando el producto no tenga `colors` ni `sizes`, comprobar:

- que el botón de la tarjeta lo agregue directamente al carrito;
- que no intente abrir un modal innecesario;
- que use correctamente `minQuantity`;
- que el contador del carrito se actualice;
- que el producto quede guardado en localStorage.

### Sección

Comprobar:

- Aparece en la sección correcta.
- No aparece en una sección incorrecta.
- No aparece duplicado accidentalmente.
- El título de la sección es correcto.
- El carrusel mantiene el diseño esperado.

### Modal

Comprobar:

- Abre el producto correcto.
- La imagen es correcta.
- El nombre es correcto.
- El precio es correcto.
- La etiqueta de categoría o sección es correcta.
- Las variantes aparecen cuando corresponden.
- El cambio de variante funciona.
- La cantidad comienza en `minQuantity`.
- Sumar y restar funciona.
- El botón de cierre funciona.
- El logo decorativo mantiene su posición.

### Carrito

Comprobar:

- Se agrega el producto correcto.
- Se guarda la variante.
- Se guarda la cantidad.
- Se calcula correctamente el precio.
- El contador del carrito se actualiza.
- Se puede aumentar y reducir cantidad.
- Se puede eliminar el producto.
- El carrito persiste al recargar.
El identificador interno de cada ítem del carrito combina:

- `productId`;
- color seleccionado o `sin-color`;
- talle seleccionado o `sin-talle`.

Formato actual:

`${productId}-${selectedColor || 'sin-color'}-${selectedSize || 'sin-talle'}`

Por eso, IDs repetidos pueden provocar colisiones silenciosas entre productos diferentes.

### Checkout y WhatsApp

Comprobar:

- Método de pago.
- Producto.
- Variante.
- Cantidad.
- Precio.
- Subtotal.
- Datos del comprador.
- Entrega.
- Nota.
- Texto cuando no hay nota.
- Número de WhatsApp correcto.

### Mobile

Comprobar:

- Tarjeta.
- Vista parcial del siguiente producto, cuando corresponda.
- Deslizamiento táctil.
- Modal.
- Variantes.
- Botón agregar.
- Carrito.
- Menú.
- WhatsApp flotante.

### Desktop

Comprobar:

- Centrado de productos.
- Flechas del carrusel.
- Ocultamiento de flechas cuando no hay desplazamiento.
- Tarjeta.
- Modal.
- Carrito.
- Dropdown Productos.

---

## 16. Revisión antes del commit

Ejecutar:

```bash
git status
git diff
```

Revisar:

- objeto agregado;
- rutas de imágenes;
- precio;
- `priceValue`;
- `minQuantity`;
- secciones;
- variantes;
- archivos nuevos.

No hacer commit hasta terminar las pruebas.

---

## 17. Commit recomendado

Ejemplo:

```bash
git add src/main.js public/productos/
git commit -m "Agrega producto bombacha floral"
git push
```

El mensaje debe describir el cambio real.

No usar mensajes genéricos como:

```text
cambios
arreglos
producto
```

---

## Checklist rápido

Antes de considerar terminado un producto:

- [ ] ID único.
- [ ] Imagen guardada.
- [ ] Ruta correcta.
- [ ] Nombre confirmado.
- [ ] Precio visible confirmado.
- [ ] `priceValue` numérico.
- [ ] Categoría correcta.
- [ ] Secciones correctas.
- [ ] Cantidad mínima correcta.
- [ ] Colores correctos.
- [ ] Talles correctos.
- [ ] Tarjeta probada.
- [ ] Modal probado.
- [ ] Carrito probado.
- [ ] localStorage probado.
- [ ] Checkout probado.
- [ ] WhatsApp probado.
- [ ] Mobile probado.
- [ ] Desktop probado.