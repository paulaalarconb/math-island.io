# Islas de los Números

Juego de repaso de Matemática de 1° básico: 4 islas, 60 desafíos, memes al azar, explicación de cada respuesta y voz.

## Publicarlo en GitHub Pages (desde el navegador, sin instalar nada)

1. Entra a github.com e inicia sesión (o crea una cuenta gratis).
2. Arriba a la derecha: **+** › **New repository**. Nombre: `islas-de-los-numeros`. Déjalo **Public** y toca **Create repository**.
3. En la página del repositorio toca **uploading an existing file**.
4. Abre esta carpeta en tu computador, selecciona **todo su contenido** (no la carpeta) y arrástralo a la página.
   Debe quedar `index.html` en el primer nivel, junto a la carpeta `memes`.
5. Abajo toca **Commit changes** y espera que termine de subir.
6. Ve a **Settings** › **Pages**. En *Branch* elige **main** y **/(root)**, y toca **Save**.
7. Espera 1 o 2 minutos y recarga esa página: aparece la dirección, por ejemplo
   `https://TU-USUARIO.github.io/islas-de-los-numeros/`.

## Jugarlo en la tablet o el teléfono

- **Android (Chrome):** abre la dirección › menú ⋮ › **Instalar app** o **Agregar a la pantalla principal**.
- **iPad / iPhone (Safari):** abre la dirección › Compartir › **Agregar a inicio**.
- Ábrelo una vez con internet y deja que cargue: después funciona sin conexión, memes incluidos.

## Agregar o quitar memes

- Para agregar memes solo en un dispositivo: botón **🎬 Mis memes** dentro del juego.
- Para cambiar los memes de todos: sube videos `.mp4` a `memes/bien/` o `memes/mal/` y agrega su nombre en la lista `BUILTIN` dentro de `index.html` (busca `memes/bien/bien01.mp4`). Si cambias archivos, en `sw.js` cambia `islas-v1` por `islas-v2` para que las tablets descarguen la versión nueva.
