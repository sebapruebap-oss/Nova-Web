# Automatización inicial de productos

## Objetivo

Recibir los datos de un producto y generar un objeto JavaScript compatible con el array `products` de AleAle.

## Entrada

- nombre;
- categoría;
- secciones;
- precio visible;
- precio numérico;
- cantidad mínima;
- imagen;
- colores;
- talles;
- temporada.
- `id`, sugerido automáticamente a partir del nombre, pero confirmado manualmente antes de generar el objeto.
- `optionLabel`, cuando existan colores o talles.
- `type`, normalmente `wholesale` para AleAle.
`type` existe en los productos actuales, pero todavía no controla la lógica de renderizado o filtrado.

## Validaciones

- ID no vacío.
- Precio numérico.
- Cantidad mínima mayor que cero.
- Imagen con ruta `/productos/`.
- Secciones válidas.
- No utilizar `options`.
- No asumir que `available` controla el stock.
- El `id` debe ser único respecto de los productos existentes en `src/main.js`.
- Solo puede contener letras minúsculas, números y guiones.
- No puede contener espacios, tildes ni caracteres especiales.
- `priceValue` debe ser un número real, sin símbolo `$`, puntos de miles ni texto.
- `minQuantity` debe ser un número entero mayor que cero.

Las únicas secciones aceptadas actualmente son:

- `ofertas`
- `mujeres`
- `hombres`
- `ninos`
- `medias`
- `temporada`

No utilizar `niños` con tilde. El identificador interno correcto es `ninos`.

Si existe `colors`:

- debe ser un array;
- cada elemento debe contener `name`;
- cada elemento debe contener `image`;
- cada ruta debe comenzar con `/productos/`;
- la imagen principal debe coincidir normalmente con `colors[0].image`;
- `optionLabel` debe estar definido.

Si existe `sizes`:

- debe ser un array de strings;
- no debe contener valores vacíos;
- debe mantener un orden lógico;
- `optionLabel` debe estar definido.

Validar la existencia real de la imagen:

La primera versión debe advertir que la ruta tiene el formato correcto.

Si técnicamente puede acceder al sistema de archivos, también debe comprobar que el archivo exista realmente dentro de `public/productos/`.

Si no puede comprobarlo, debe devolver una advertencia y nunca afirmar que la imagen existe.

## Salida

- objeto JavaScript;
- advertencias;
- checklist de revisión.

## Restricciones

- No modificar `src/main.js`.
- No hacer commit.
- No hacer push.
- No publicar automáticamente.

## Relación entre categoría y secciones

- `category` representa la clasificación general del producto.
- `sections` define explícitamente dónde se muestra.
- Si existe `sections`, tiene prioridad sobre `category`.
- `seasonal` se conserva por compatibilidad con productos anteriores.
- Para productos nuevos de temporada, preferir `sections: ['temporada']`.
- El flujo debe advertir si `seasonal` y `sections` contienen valores contradictorios.

### Casos contradictorios entre `sections` y `seasonal`

La propiedad `sections` tiene prioridad sobre `seasonal`.

Ejemplos:

- `sections: ['temporada']` y `seasonal: false`: el producto aparece en Temporada porque `sections` tiene prioridad.
- `sections: ['mujeres']` y `seasonal: true`: el producto aparece en Mujeres, pero no en Temporada.
- Si no existe `sections`, `seasonal: true` permite mantener la compatibilidad con Temporada.

El flujo debe advertir cuando `seasonal` indique una pertenencia diferente de la definida en `sections`.

Para productos nuevos, preferir `sections` como fuente principal y utilizar `seasonal` solo cuando sea necesario por compatibilidad.

## Primera versión mínima

La primera versión del flujo debe:

1. Recibir los datos manualmente.
2. Sugerir un `id`.
3. Permitir confirmar o corregir ese `id`.
4. Validar campos obligatorios.
5. Validar secciones.
6. Validar `priceValue`.
7. Validar `minQuantity`.
8. Validar colores y talles.
9. Generar el objeto JavaScript.
10. Mostrar advertencias.
11. Recordar revisar `docs/agregar-producto.md`.

No debe:

- modificar `src/main.js`;
- crear commits;
- hacer push;
- publicar productos;
- modificar imágenes;
- decidir automáticamente si el producto está listo.