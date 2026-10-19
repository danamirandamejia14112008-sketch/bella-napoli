/* =========================================
   BELLA NAPOLI - FUNCIONES INTERACTIVAS
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // FILTROS DEL MENÚ
  const filtros = document.querySelectorAll(".filtro");
  const productos = document.querySelectorAll(".tarjeta-producto");

  filtros.forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoria = boton.dataset.filtro;

      // Actualizar el botón seleccionado
      filtros.forEach((filtro) => {
        filtro.classList.remove("activo");
      });

      boton.classList.add("activo");

      // Mostrar los productos correspondientes
      productos.forEach((producto) => {
        const coincide =
          categoria === "todos" ||
          producto.dataset.categoria === categoria;

        producto.classList.toggle("oculto", !coincide);
      });
    });
  });

  // MENÚ DE NAVEGACIÓN PARA CELULARES
  const menuToggle = document.getElementById("menuToggle");
  const navegacion = document.getElementById("navegacion");

  if (menuToggle && navegacion) {
    menuToggle.addEventListener("click", () => {
      const abierto = navegacion.classList.toggle("abierto");

      menuToggle.setAttribute("aria-expanded", String(abierto));
      menuToggle.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
      );
      menuToggle.textContent = abierto ? "✕" : "☰";
    });

    // Cerrar el menú después de seleccionar una sección
    navegacion.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        navegacion.classList.remove("abierto");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.textContent = "☰";
      });
    });
  }

  // BOTÓN PARA VOLVER ARRIBA
  const volverArriba = document.getElementById("volverArriba");

  if (volverArriba) {
    const actualizarBoton = () => {
      volverArriba.classList.toggle(
        "visible",
        window.scrollY > 400
      );
    };

    window.addEventListener("scroll", actualizarBoton, {
      passive: true
    });

    actualizarBoton();

    volverArriba.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
  const anio = document.getElementById("anio");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
});