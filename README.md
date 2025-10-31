<div align="center">

[![HTML Version](https://img.shields.io/badge/HTML-5-orange.svg)](https://www.w3schools.com/html/)
[![CSS Version](https://img.shields.io/badge/CSS-3-blue.svg)](https://www.w3schools.com/css/)
[![JS Version](https://img.shields.io/badge/JS_ECMAScript-6.0-yellow.svg)](https://www.w3schools.com/js/)
![Estado](https://img.shields.io/badge/Estado-En%20emisión-yellow)
![CC License](https://img.shields.io/badge/License-CC--BY--NC--ND-green.svg)
<div align="center">
  <a href="https://github.com/Alejandro-Guerra-Aban">
    <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</div>
</div>

# CURSO DE INTRODUCCIÓN A HTML, CSS Y JAVASCRIPT  
# INTRODUCTORY COURSE ON HTML, CSS AND JAVASCRIPT

Repositorio de **Alejandro Guerra Abán** para el módulo de **Aplicaciones Web** del curso **SMR 2ºA**.

Aquí se recopilan actividades, ejercicios y apuntes teóricos desarrollados a lo largo del curso académico 2025–2026.

Repository of **Alejandro Guerra Abán** for the **Web Applications** module of the **SMR 2ºA** course.

This repository contains activities, exercises, and theoretical notes developed throughout the 2025–2026 academic year.

---

## 📁 Estructura del repositorio

```plaintext
SMR-2A-APLICACIONES-WEB/
│
├── EJERCICIOS/            # Ejercicios prácticos de clase
├── PRACTICA DISEÑO WEB/                # Práctica 1
├── TEORIA/      # Apuntes, resúmenes y explicaciones teóricas
└── Tabla HTML 5 WEB semántica/      # Práctica 2
```
---

## ▶️ ¿Cómo usar este repositorio?

1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/Alejandro-Guerra-Aban/SMR-2A-APLICACIONES-WEB.git
   ```
2. Abre la carpeta en tu editor de código favorito, como **Visual Studio Code**, o cualquier otro entorno compatible con HTML CSS y JS (JavaScript).

> [!TIP]
> Si no quieres instalar nada, puedes usar editores online como:
> - [Google Colab](https://colab.research.google.com/)

---

## 📌 Accesos rápidos

Haz clic para acceder directamente a las carpetas más importantes del repositorio:

- 📂 [EJERCICIOS](./EJERCICIOS) — Ejercicios prácticos organizados por temas vistos en clase.
- 📂 [TEORIA](./TEORIA) — Apuntes, resúmenes y ejemplos teóricos de HTML CSS y JS (JavaScript).
- 📂 [PRÁCTICA DISEÑO WEB](./PRACTICA%20DISEÑO%20WEB) — Práctica Nº1.
- 📂 [Tabla HTML 5 WEB semántica](./Tabla%20HTML%205%20WEB%20semántica) — Práctica Nº2
> ⚠️ Estas carpetas se irán actualizando conforme avance el curso.  
> Próximamente se añadirán más secciones como `PROYECTOS`, `RETOS` o `EVALUACIONES`.

---

## ⚙️ Requisitos

> [!IMPORTANT]
> Necesitarás:
> - Editor de código (recomendado VS Code)
> - Conexión a internet para poder accder al contenido

---

## 🧰 Herramientas recomendadas

Para trabajar cómodamente con los archivos y ejercicios de este repositorio, se recomienda:

- ✅ **Visual Studio Code** como editor de código  
  [Descargar VS Code](https://code.visualstudio.com/)

  - Extensiones recomendadas:
    - `Live Preview` (para poder abrir una carpeta en el editor y poder ver el contenido del HTML más rápido, opcional)
    - `GitLens` (para control de versiones, opcional)
    - `Error Lens` (para control e identificación de errores, opcional)

- ✅ Git (opcional)  
  Útil para clonar y sincronizar el repositorio:
  ```bash
  git clone https://github.com/Alejandro-Guerra-Aban/SMR-2A-APLICACIONES-WEB.git
  ```
  ---

## 📅 Información del curso

- **Curso académico:** 2025–2026  
- **Módulo:** Aplicaciones Web  
- **Grupo:** SMR 2A  
- **Autor:** Alejandro Guerra Abán  
- **Instituto:** *IES MELCHOR GASPAR DE JOVELLANOS*

---

## INTRODUCCIÓN / INTRODUCTION

**ESPAÑOL:**  
Este documento introduce los fundamentos de **HTML**, **CSS** y **JavaScript**, las tres tecnologías esenciales del desarrollo web. Incluye explicaciones teóricas, ejemplos prácticos y ejercicios para reforzar el aprendizaje, junto con contenidos sobre **accesibilidad (ARIA)** y **buenas prácticas**.

**ENGLISH:**  
This document introduces the fundamentals of **HTML**, **CSS**, and **JavaScript**, the three core technologies of web development. It includes theoretical explanations, practical examples, and exercises to reinforce learning, along with **accessibility (ARIA)** and **best practices**.

---

## HTML — ESTRUCTURA BÁSICA / BASIC STRUCTURE
> [!IMPORTANT]
> 
> **IMPORTANTE/IMPORTANT**
> 
> **ESPAÑOL:**  
HTML (HyperText Markup Language) define la **estructura** y el **contenido** de una página web mediante etiquetas.
>
> **ENGLISH:**  
HTML (HyperText Markup Language) defines the **structure** and **content** of a web page using tags.

### 📄 EJEMPLO / EXAMPLE

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página / My First Page</title>
</head>
<body>
  <header>
    <h1>Bienvenidos / Welcome</h1>
  </header>
  <main>
    <p>Esta es una página de ejemplo. / This is a sample page.</p>
  </main>
  <footer>
    <p>© 2025 Curso de Introducción a HTML, CSS y JS</p>
  </footer>
</body>
</html>
```
> [!NOTE]
> **Nota / Note:**  
> `<!DOCTYPE html>` indica que la página sigue el estándar **HTML5**.

---

## 🧮 EXAMEN FINAL / FINAL EXAM

### 📘 PARTE 1: PREGUNTAS TIPO TEST / MULTIPLE-CHOICE QUESTIONS

> [!NOTE]
> **Instrucciones / Instructions:**
> 
> Selecciona la respuesta correcta. Marca solo una por pregunta.
> 
> Select the correct answer. Mark only one per question.

1. ¿Qué etiqueta se usa para definir el contenido principal de una página HTML?  
   **a)** `<body>` **b)** `<main>` **c)** `<section>` **d)** `<content>`

2. ¿Cuál de las siguientes NO es una unidad válida en CSS?  
   **a)** `px` **b)** `cm` **c)** `em` **d)** `hr`

3. ¿Qué propiedad CSS controla el espacio interior de un elemento?  
   **a)** `margin` **b)** `padding` **c)** `border` **d)** `outline`

4. En JavaScript, ¿cuál es la forma correcta de mostrar un mensaje en consola?  
   **a)** `console.log("Hola");` **b)** `print("Hola");` **c)** `alert("Hola");` **d)** `echo("Hola");`

5. ¿Qué atributo ARIA permite proporcionar una descripción adicional de un elemento?  
   **a)** `aria-live` **b)** `aria-label` **c)** `aria-describedby` **d)** `aria-role`

6. ¿Cuál es la sintaxis correcta para aplicar una clase CSS llamada “rojo” a un párrafo?  
   **a)** `<p class="rojo">...</p>` **b)** `<p id="rojo">...</p>` **c)** `<p style="rojo">...</p>` **d)** `<p css="rojo">...</p>`

7. ¿Qué propiedad CSS controla la altura de línea?  
   **a)** `line-height` **b)** `text-height` **c)** `font-spacing` **d)** `height-line`

8. ¿Qué elemento HTML se usa para agrupar enlaces de navegación?  
   **a)** `<footer>` **b)** `<nav>` **c)** `<header>` **d)** `<aside>`

9. ¿Cuál es la extensión de archivo correcta para JavaScript?  
   **a)** `.java` **b)** `.script` **c)** `.js` **d)** `.javascript`

10. ¿Cuál de los siguientes valores define un color rojo puro en RGB?  
    **a)** `rgb(255, 0, 0)` **b)** `rgb(0, 255, 0)` **c)** `rgb(0, 0, 255)` **d)** `rgb(255, 255, 255)`

---

### 🧠 PARTE 2: PREGUNTAS DE DESARROLLO / SHORT-ANSWER QUESTIONS

1. Explica qué diferencia hay entre `em` y `rem` en CSS.  
2. ¿Para qué sirve el atributo `alt` en las imágenes?  
3. Define brevemente qué son los atributos ARIA y por qué son importantes.  
4. Menciona dos ventajas de usar una hoja de estilos externa.  
5. Explica qué hace la propiedad `display: flex;` en CSS.  

---

### 💻 PARTE 3: EJERCICIO PRÁCTICO / PRACTICAL EXERCISE

**Objetivo / Goal:**  
Crea una página web funcional aplicando HTML, CSS y JavaScript con accesibilidad básica (ARIA).

#### 🔧 REQUISITOS / REQUIREMENTS
> [!IMPORTANT]
> 
> **HTML:** Debe contener `<header>`, `<main>`, `<footer>` y un botón con texto o ícono.  
> **CSS:** Usa colores HEX/RGB, aplica márgenes y `font-family`.  
> **JavaScript:** Muestra un mensaje al hacer clic en el botón.  
 **Accesibilidad (ARIA):** Usa `aria-label` y `aria-live="polite"`.

#### 🧩 EJEMPLO / EXAMPLE

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejercicio Final / Final Exercise</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Prueba de HTML, CSS y JS</h1>
  </header>

  <main>
    <button id="boton" aria-label="Mostrar mensaje / Show message">
      Mostrar mensaje
    </button>
    <p id="resultado" aria-live="polite"></p>
  </main>

  <footer>
    <p>Fin del ejercicio / End of exercise</p>
  </footer>

  <script>
    document.getElementById("boton").addEventListener("click", () => {
      document.getElementById("resultado").textContent =
        "¡Has pulsado el botón! / You clicked the button!";
    });
  </script>
</body>
</html>
```

---

## ⚖️ LICENCIA / LICENSE
> [!WARNING]
> 
> **ESPAÑOL:**  
Este material está protegido bajo la licencia **Creative Commons BY-NC-ND 4.0 International**.  
Puedes compartirlo libremente **con atribución**, pero **no está permitido modificarlo ni usarlo con fines comerciales**.  
> 
> **ENGLISH:**  
This material is protected under the **Creative Commons BY-NC-ND 4.0 International License**.  
You may share it freely **with attribution**, but **modification and commercial use are not allowed**.  
> 
> © Alejandro Guerra Abán 2025 — Uso educativo no comercial / Non-commercial educational use only.

---

**Autor / Author: [@Alejandro Guerra Abán](https://www.github.com/Alejandro-Guerra-Aban)**  
