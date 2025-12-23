// MENSAJE DE BIENVENIDA 
// Muestra un mensaje de confirmación al usuario. 
// Va a mostrar el texto contiene 🎄 que en HTML sería: &#x1F384; 
 
function bienvenida() { 
    const continuar = confirm("🎄 Bienvenido a la Navidad Mágica. ¿Quieres continuar?"); 
    if (!continuar) { 
        alert("¡Feliz Navidad! Vuelve cuando quieras."); 
    } 
}

// RELOJ 
function actualizarReloj() { 
// Obtiene la fecha y hora del sistema (ordenador). 
    const fechaHora = new Date(); 
// Localiza el elemento donde se mostrará el reloj. 
    document.getElementById("reloj").textContent = 
        fechaHora.toLocaleString("es-ES"); 
}

// =============================== 
//   NIEVE GENERADA EN JS 
// =============================== 
function generarNieve() { 
    // Contenedor donde se añadirán los copos 
    const cont = document.getElementById("nieve"); 
 
    // Número total de copos que se generarán 
    const cantidad = 70; 
 
    // Bucle que crea cada copo de nieve 
    for (let i = 0; i < cantidad; i++) { 
 
        // Crear un elemento <span> para representar un copo 
        const copo = document.createElement("span"); 
 
        // Se asigna una clase CSS para estilizarlo 
        copo.classList.add("copo");
        // Contenido visual del copo (carácter Unicode de nieve) 
        copo.textContent = "❄"; 
 
        // Tamaño aleatorio entre 12px y 32px aprox. 
        const tamaño = 12 + Math.random() * 20; 
 
        // Posición horizontal aleatoria en la ventana 
        const posX = Math.random() * 100; 
 
        // Duración de caída entre 6 y 14 segundos 
        const duracion = 6 + Math.random() * 8; 
 
        // Retraso aleatorio para que no caigan todos a la vez 
        const retraso = Math.random() * 8; 
 
        // Aplicar los estilos calculados al copo 
        copo.style.left = posX + "vw";               // posición horizontal 
        copo.style.fontSize = tamaño + "px";         // tamaño del copo 
        copo.style.animationDuration = duracion + "s"; // duración de animación 
        copo.style.animationDelay = retraso + "s";     // retraso inicial 
 
        // Añadir el copo al contenedor 
        cont.appendChild(copo); 
    } 
}

// EFECTOS CON EL ÁRBOL Y EL TRINEO 
function prepararInteraccion() { 
 
    // Localiza los elementos interactivos. 
    const arbol = document.getElementById("arbol"); 
    const invitacion = document.getElementById("invitacion"); 
    const trineo = document.getElementById("trineo"); 
 
    // Cuando el usuario pasa el ratón sobre el árbol, 
    // se muestra el texto de invitación (que contiene ✨ = &#x2728;). 
    arbol.addEventListener("mouseover", () => { 
        invitacion.style.visibility = "visible"; 
    }); 
 
    // Cuando retira el ratón, la invitación desaparece. 
    arbol.addEventListener("mouseout", () => { 
        invitacion.style.visibility = "hidden"; 
    });
    // Cuando el ratón pasa por la invitación, 
    // la animación del trineo se reinicia. 
    invitacion.addEventListener("mouseover", () => { 
 
        // Se quita la clase que activa la animación... 
        trineo.classList.remove("volando"); 
 
        // ...se fuerza el reflujo para "reiniciar" la animación... 
        void trineo.offsetWidth; 
 
        // ...y se vuelve a añadir la clase de animación. 
        trineo.classList.add("volando"); 
    }); 
} 
// =============================== 
//   TRINEO Y "HO HO HO" 
// =============================== 
function prepararInteraccion() { 
    // Elementos del DOM 
    const invitacion = document.getElementById("invitacion"); 
    const trineo = document.getElementById("trineo"); 
    const hoho = document.getElementById("hoho"); 
 
    // Cuando el usuario hace clic en la invitación: 
    invitacion.addEventListener("click", () => { 
 
        // Quitar clase para reiniciar animación 
        trineo.classList.remove("volando"); 
 
        // Truco para forzar que el navegador "recalcule" estilos 
        void trineo.offsetWidth; 
 
        // Volver a activar la animación del trineo 
        trineo.classList.add("volando"); 
 
        // Reiniciar sonido HO HO HO desde el segundo 0 
        hoho.currentTime = 0; 
 
        // Intentar reproducir el sonido (evitar errores si está bloqueado) 
        hoho.play().catch(() => {}); 
    }); 
}

// =============================== 
//   CONTROL DEL SONIDO PRINCIPAL 
// =============================== 
function prepararSonido() { 
    const audio = document.getElementById("villancico"); 
    const boton = document.getElementById("botonSonido"); 
 
    // Alternar reproducir/pausar cuando se pulsa el botón 
    boton.addEventListener("click", () => { 
        if (audio.paused) audio.play(); 
        else audio.pause(); 
    }); 
}

// =============================== 
//       INICIALIZACIÓN GLOBAL 
// =============================== 
window.addEventListener("DOMContentLoaded", () => { 
 
    // Función de bienvenida (asumimos que está definida en otro archivo) 
    bienvenida(); 
 
    // Generar nieve animada 
    generarNieve(); 
 
    // Preparar interacción del trineo con sonido 
    prepararInteraccion(); 
 
    // Activar botón de sonido del villancico 
    prepararSonido(); 
 
    // Actualizar el reloj en pantalla 
    actualizarReloj(); 
    setInterval(actualizarReloj, 1000); // actualizar cada segundo 
});