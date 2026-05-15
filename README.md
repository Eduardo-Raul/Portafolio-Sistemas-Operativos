# 🐧 Portafolio de Sistemas Operativos

Portafolio de evidencias

Este proyecto es una recopilación de las prácticas y conceptos teóricos abordados durante el curso de **Sistemas Operativos (Sexto Semestre)**.

El objetivo de este espacio es documentar el aprendizaje sobre el funcionamiento interno de los sistemas operativos, con un enfoque práctico en entornos **GNU/Linux**.

---

## 🚀 Tecnologías Utilizadas

Para el desarrollo de este portafolio web utilicé un stack moderno que permite una lectura fluida y un renderizado de código eficiente:

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS + @tailwindcss/typography (para el formato de lectura)
* **Contenido:** Markdown (MDX) para la documentación técnica.
* **Lógica:** Node.js File System para la gestión dinámica de archivos por categorías.

---

## 📂 Estructura del Portafolio

El contenido está organizado en tres unidades fundamentales, accesibles desde la página principal:

1.  **Introducción al Sistema:** Conceptos básicos de Linux, comandos de terminal y entorno de desarrollo.
2.  **Procesos e Hilos:** Ciclo de vida de procesos, uso de la llamada al sistema `fork()`, estados zombi y manejo de hilos.
3.  **Mecanismos IPC:** Comunicación entre procesos mediante Pipes, colas de mensajes y memoria compartida.

---

## 🛠️ Instalación y Ejecución

Si deseas replicar este proyecto localmente, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Eduardo-Raul/Portafolio-Sistemas-Operativos.git
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Ver en el navegador:** Abre [http://localhost:3000](http://localhost:3000).

---

## 📝 Cómo agregar nuevas prácticas

Para añadir contenido, simplemente crea un archivo `.md` dentro de la subcarpeta correspondiente en `/content`:

1.  Ve a `content/[nombre-de-categoria]/`.
2.  Crea un archivo como `mi-practica.md`.
3.  Añade el encabezado (*frontmatter*):
    ```markdown
    ---
    title: "Título de la Práctica"
    description: "Breve resumen"
    ---
    ```

---

## 👤 Autor

* **José Canseco Eduardo Raúl 602-B** 
