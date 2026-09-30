// Aplicación de Tareas con Local Storage

class GestorTareas {
  constructor() {
    this.tareas = [];
    this.filtroActual = "todas";
    this.tareaEnEdicion = null;
    this.cargarTareas();
    this.inicializarEventos();
    this.renderizar();
  }

  // Cargar tareas desde Local Storage
  cargarTareas() {
    const tareasGuardadas = localStorage.getItem("tareas");
    this.tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  }

  // Guardar tareas en Local Storage
  guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  // Inicializar eventos
  inicializarEventos() {
    // Botón agregar
    document.getElementById("btn-agregar").addEventListener("click", () => {
      this.agregarTarea();
    });

    // Enter en input
    document.getElementById("entrada-tarea").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.agregarTarea();
      }
    });

    // Filtros
    document.querySelectorAll(".filtro-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.cambiarFiltro(e.target.dataset.filtro);
      });
    });

    // Botones de acción
    document.getElementById("btn-limpiar").addEventListener("click", () => {
      this.limpiarCompletadas();
    });

    document.getElementById("btn-vaciar").addEventListener("click", () => {
      this.vaciarTodo();
    });

    document.getElementById("btn-exportar").addEventListener("click", () => {
      this.exportarTareas();
    });

    // Modal
    document.getElementById("btn-cerrar-modal").addEventListener("click", () => {
      this.cerrarModal();
    });

    document.getElementById("btn-cancelar").addEventListener("click", () => {
      this.cerrarModal();
    });

    document.getElementById("btn-guardar-edicion").addEventListener("click", () => {
      this.guardarEdicion();
    });

    document.getElementById("entrada-editar").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.guardarEdicion();
      }
    });
  }

  // Agregar nueva tarea
  agregarTarea() {
    const entrada = document.getElementById("entrada-tarea");
    const texto = entrada.value.trim();

    if (texto === "") {
      alert("Por favor, escribe una tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false,
      fecha: new Date().toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    this.tareas.push(nuevaTarea);
    this.guardarTareas();
    entrada.value = "";
    entrada.focus();
    this.renderizar();
  }

  // Eliminar tarea
  eliminarTarea(id) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    this.guardarTareas();
    this.renderizar();
  }

  // Marcar como completada
  marcarCompletada(id) {
    const tarea = this.tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
      this.renderizar();
    }
  }

  // Abrir modal para editar
  abrirModalEditar(id) {
    const tarea = this.tareas.find((t) => t.id === id);
    if (tarea) {
      this.tareaEnEdicion = id;
      document.getElementById("entrada-editar").value = tarea.texto;
      document.getElementById("modal-editar").classList.add("activo");
      document.getElementById("entrada-editar").focus();
    }
  }

  // Cerrar modal
  cerrarModal() {
    document.getElementById("modal-editar").classList.remove("activo");
    this.tareaEnEdicion = null;
  }

  // Guardar edición
  guardarEdicion() {
    const nuevoTexto = document.getElementById("entrada-editar").value.trim();

    if (nuevoTexto === "") {
      alert("La tarea no puede estar vacía");
      return;
    }

    const tarea = this.tareas.find((t) => t.id === this.tareaEnEdicion);
    if (tarea) {
      tarea.texto = nuevoTexto;
      this.guardarTareas();
      this.cerrarModal();
      this.renderizar();
    }
  }

  // Cambiar filtro
  cambiarFiltro(filtro) {
    this.filtroActual = filtro;
    document.querySelectorAll(".filtro-btn").forEach((btn) => {
      btn.classList.remove("filtro-activo");
    });
    event.target.classList.add("filtro-activo");
    this.renderizar();
  }

  // Limpiar tareas completadas
  limpiarCompletadas() {
    if (
      confirm(
        "¿Estás seguro de que deseas eliminar todas las tareas completadas?"
      )
    ) {
      this.tareas = this.tareas.filter((tarea) => !tarea.completada);
      this.guardarTareas();
      this.renderizar();
    }
  }

  // Vaciar todo
  vaciarTodo() {
    if (confirm("¿Estás seguro de que deseas eliminar TODAS las tareas?")) {
      this.tareas = [];
      this.guardarTareas();
      this.renderizar();
    }
  }

  // Exportar tareas como JSON
  exportarTareas() {
    const contenido = JSON.stringify(this.tareas, null, 2);
    const elemento = document.createElement("a");
    elemento.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(contenido)
    );
    elemento.setAttribute("download", `tareas-${new Date().getTime()}.json`);
    elemento.style.display = "none";
    document.body.appendChild(elemento);
    elemento.click();
    document.body.removeChild(elemento);
  }

  // Obtener tareas filtradas
  obtenerTareasFiltradas() {
    switch (this.filtroActual) {
      case "completadas":
        return this.tareas.filter((t) => t.completada);
      case "pendientes":
        return this.tareas.filter((t) => !t.completada);
      default:
        return this.tareas;
    }
  }

  // Actualizar filtros con contador
  actualizarContadores() {
    const total = this.tareas.length;
    const pendientes = this.tareas.filter((t) => !t.completada).length;
    const completadas = this.tareas.filter((t) => t.completada).length;

    document.querySelector('[data-filtro="todas"]').textContent = `Todas (${total})`;
    document.querySelector('[data-filtro="pendientes"]').textContent = `Pendientes (${pendientes})`;
    document.querySelector('[data-filtro="completadas"]').textContent = `Completadas (${completadas})`;

    // Actualizar estadísticas
    document.getElementById("stat-total").textContent = total;
    document.getElementById("stat-completadas").textContent = completadas;
    document.getElementById("stat-pendientes").textContent = pendientes;

    // Actualizar barra de progreso
    const porcentaje = total === 0 ? 0 : (completadas / total) * 100;
    document.getElementById("barra-relleno").style.width = porcentaje + "%";
  }

  // Renderizar lista de tareas
  renderizar() {
    const listaTareas = document.getElementById("lista-tareas");
    const mensajeVacio = document.getElementById("mensaje-vacio");
    const tareasFiltradas = this.obtenerTareasFiltradas();

    // Limpiar lista
    listaTareas.innerHTML = "";

    if (tareasFiltradas.length === 0) {
      mensajeVacio.style.display = "block";
    } else {
      mensajeVacio.style.display = "none";
      tareasFiltradas.forEach((tarea) => {
        const elementoTarea = document.createElement("div");
        elementoTarea.className = `tarea ${tarea.completada ? "completada" : ""}`;
        elementoTarea.innerHTML = `
          <input
            type="checkbox"
            class="checkbox"
            ${tarea.completada ? "checked" : ""}
            onchange="gestor.marcarCompletada(${tarea.id})"
          />
          <div>
            <div class="contenido-tarea">${this.escaparHTML(tarea.texto)}</div>
            <div class="fecha-tarea">${tarea.fecha}</div>
          </div>
          <div class="acciones-tarea">
            <button
              class="btn-accion"
              onclick="gestor.abrirModalEditar(${tarea.id})"
              title="Editar tarea"
            >
              ✏️
            </button>
            <button
              class="btn-accion btn-eliminar"
              onclick="gestor.eliminarTarea(${tarea.id})"
              title="Eliminar tarea"
            >
              🗑️
            </button>
          </div>
        `;
        listaTareas.appendChild(elementoTarea);
      });
    }

    // Actualizar contadores y estadísticas
    this.actualizarContadores();
  }

  // Escapar caracteres especiales
  escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }
}

// Inicializar la aplicación cuando se carga el DOM
let gestor;
document.addEventListener("DOMContentLoaded", () => {
  gestor = new GestorTareas();
});
