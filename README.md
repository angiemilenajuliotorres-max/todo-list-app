# 📝 Aplicación de Tareas (To-Do List)

Una aplicación web moderna y responsiva para gestionar tus tareas diarias. Los datos se guardan automáticamente en el navegador usando Local Storage, por lo que tus tareas persisten incluso después de cerrar la aplicación.

## ✨ Características

- ✅ **Agregar tareas** - Crea nuevas tareas fácilmente
- ✏️ **Editar tareas** - Modifica el contenido de tus tareas
- 🗑️ **Eliminar tareas** - Elimina tareas individuales
- ✔️ **Marcar como completadas** - Marca tareas como realizadas
- 🔍 **Filtrar tareas** - Visualiza todas, solo pendientes o solo completadas
- 📊 **Estadísticas** - Visualiza tu progreso con contadores y barra de progreso
- 💾 **Almacenamiento local** - Las tareas se guardan automáticamente
- 📥 **Exportar tareas** - Descarga tus tareas en formato JSON
- 🧹 **Limpiar tareas** - Elimina todas las completadas de una vez
- 📱 **Diseño responsivo** - Funciona perfectamente en móviles, tablets y computadoras
- 🎨 **Interfaz moderna** - Diseño atractivo con gradientes y animaciones

## 🚀 Inicio Rápido

### Opción 1: Usar la aplicación en línea
1. Abre el archivo `index.html` en tu navegador web
2. ¡Comienza a crear tus tareas!

### Opción 2: Clonar el repositorio
```bash
git clone https://github.com/angiemilenajuliotorres-max/todo-list-app.git
cd todo-list-app
# Abre index.html con tu navegador favorito
```

## 📖 Cómo Usar

### Agregar una Tarea
1. Escribe tu tarea en el campo de entrada
2. Presiona "Agregar" o pulsa Enter
3. ¡Tu tarea aparecerá en la lista!

### Editar una Tarea
1. Haz clic en el botón ✏️ de la tarea que deseas editar
2. Modifica el texto en la ventana modal
3. Haz clic en "Guardar cambios" o presiona Enter

### Marcar como Completada
1. Haz clic en el checkbox a la izquierda de la tarea
2. La tarea aparecerá tachada
3. Haz clic nuevamente para desmarcarla

### Eliminar una Tarea
1. Haz clic en el botón 🗑️ de la tarea
2. La tarea se eliminará inmediatamente

### Filtrar Tareas
- **Todas**: Muestra todas tus tareas
- **Pendientes**: Muestra solo las tareas no completadas
- **Completadas**: Muestra solo las tareas terminadas

### Exportar Tareas
1. Haz clic en "Descargar tareas"
2. Se descargará un archivo JSON con todas tus tareas
3. Puedes guardar este archivo como respaldo

### Limpiar Tareas Completadas
1. Haz clic en "Limpiar completadas"
2. Confirma en la ventana de diálogo
3. Todas las tareas completadas se eliminarán

### Vaciar Todo
1. Haz clic en "Vaciar todo"
2. Confirma que deseas eliminar TODAS las tareas
3. La lista se limpiarà completamente

## 🏗️ Estructura del Proyecto

```
todo-list-app/
├── index.html          # Archivo HTML principal
├── estilos.css         # Estilos CSS responsivos
├── aplicacion.js       # Lógica JavaScript
└── README.md          # Este archivo
```

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos, Flexbox, Grid, gradientes
- **JavaScript ES6+** - Lógica de la aplicación
- **Local Storage** - Persistencia de datos

## 🎨 Características de Diseño

### Responsive Design
- Adaptable a pantallas de 480px (móviles) hasta 1920px (escritorio)
- Componentes que se ajustan automáticamente al tamaño de la pantalla

### Colores
- Colores primarios degradados (morado y rosa)
- Paleta accesible y moderna
- Variables CSS para fácil personalización

### Animaciones
- Entrada suave de tareas (slideIn)
- Transiciones en botones y elementos
- Modal con animación de aparición (slideInUp)

## 📊 Estadísticas

La aplicación muestra en tiempo real:
- **Total de tareas** - Cantidad total de tareas
- **Completadas** - Tareas finalizadas
- **Pendientes** - Tareas por hacer
- **Progreso** - Barra visual del porcentaje de tareas completadas

## 💾 Almacenamiento Local

Las tareas se almacenan en `localStorage` con la clave `"tareas"`. El formato es un array JSON:

```json
[
  {
    "id": 1696000000000,
    "texto": "Mi primera tarea",
    "completada": false,
    "fecha": "30 de septiembre de 2026"
  },
  {
    "id": 1696000005000,
    "texto": "Segunda tarea",
    "completada": true,
    "fecha": "30 de septiembre de 2026"
  }
]
```

## 🔒 Privacidad y Seguridad

- ✅ **Sin conexión a servidores** - Toda la información se almacena localmente
- ✅ **Sin cookies de rastreo** - Tu privacidad está protegida
- ✅ **Datos cifrados en el navegador** - Nadie puede acceder a tus tareas
- ⚠️ **Nota**: Los datos se borran si limpias el cache del navegador

## 🐛 Solución de Problemas

### Las tareas desaparecen después de cerrar el navegador
- Comprueba que el navegador permite el uso de Local Storage
- En navegación privada/incógnito, Local Storage puede no persistir

### No puedo agregar tareas
- Asegúrate de escribir algo en el campo de entrada
- Verifica que no haya caracteres especiales problemáticos

### Las tareas no se sincronizan entre pestañas
- Este es un comportamiento normal de Local Storage
- Recarga la página para ver cambios de otra pestaña

## 🛠️ Desarrollo

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias

### Personalización
Puedes editar los colores modificando las variables CSS en `estilos.css`:

```css
:root {
  --color-primario: #6366f1;      /* Cambiar color primario */
  --color-secundario: #ec4899;    /* Cambiar color secundario */
  --color-exito: #10b981;         /* Cambiar color de éxito */
  /* ... más variables */
}
```

## 📝 Mejoras Futuras

- [ ] Soporte para categorías/tags
- [ ] Prioridades de tareas
- [ ] Fechas de vencimiento
- [ ] Búsqueda de tareas
- [ ] Sincronización en la nube
- [ ] Modo oscuro
- [ ] Recordatorios locales
- [ ] Importar tareas desde JSON

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT. Siéntete libre de usarlo, modificarlo y compartirlo.

## 👨‍💻 Autor

Creado por **angiemilenajuliotorres-max**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un error o tienes una sugerencia:
1. Abre un Issue para reportar el problema
2. Fork el repositorio
3. Crea una rama con tu mejora
4. Envía un Pull Request

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme.

---

**¡Disfruta organizando tus tareas! 🎉**
