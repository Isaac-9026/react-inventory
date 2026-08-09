# React Inventory Journey

> Aplicación de inventario desarrollada para repasar, consolidar y aplicar conocimientos fundamentales de **React** mediante la construcción de un proyecto real.

Este proyecto nació como una práctica de React y evolucionó progresivamente hasta convertirse en una aplicación funcional para la gestión de productos.

La idea principal fue **repasar React construyendo**, aplicando cada concepto dentro de una funcionalidad real en lugar de estudiarlo únicamente de forma teórica.

---

## 🎯 Objetivo

El objetivo del proyecto es consolidar los fundamentos de React mediante una aplicación que permita:

* Comprender el funcionamiento del renderizado y re-renderizado.
* Gestionar correctamente el estado.
* Entender el flujo de datos entre componentes.
* Crear componentes reutilizables.
* Trabajar con formularios controlados.
* Implementar operaciones asíncronas.
* Utilizar Custom Hooks.
* Separar responsabilidades.
* Implementar un CRUD completo.
* Manejar errores y estados de carga.
* Aplicar buenas prácticas de organización y mantenimiento.

---

## ✨ Funcionalidades

Actualmente la aplicación permite:

* Visualizar productos.
* Buscar productos por nombre, marca, categoría y modelo.
* Registrar nuevos productos.
* Editar productos existentes.
* Eliminar productos.
* Confirmar acciones de eliminación.
* Validar los datos del formulario.
* Mostrar notificaciones de éxito y error.
* Mostrar estados de carga según la operación.
* Manejar errores de las operaciones.
* Persistir información mediante Supabase.
* Utilizar una interfaz con tema oscuro.

---

## 🧠 Conceptos de React aplicados

Durante el desarrollo se repasaron y aplicaron los principales fundamentos de React:

### Componentes y renderizado

* JSX.
* Componentes funcionales.
* Props.
* Renderizado condicional.
* Listas y Keys.
* Eventos.
* Re-renderizado.
* `StrictMode`.
* Flujo de renderizado.

### Estado

* `useState`.
* Estado vs variables locales.
* Actualizaciones funcionales.
* Batching.
* Lifting State Up.
* Inmutabilidad del estado.
* Estado compartido entre componentes.

### Efectos y operaciones asíncronas

* `useEffect`.
* Peticiones asíncronas.
* `async/await`.
* `try/catch/finally`.
* Estados de carga.
* Manejo de errores.

### Formularios

* Formularios controlados.
* Estado de formularios.
* Actualización de múltiples campos.
* Validación.
* Transformación de datos.

### Custom Hooks

* Creación de `useProducts`.
* Creación de `useNotification`.
* Separación de lógica de estado.
* Reutilización de lógica.

---

## 🏗️ Arquitectura

La aplicación separa las responsabilidades principales en diferentes capas:

```text
src/
│
├── components/
│   ├── ConfirmDialog/
│   ├── ProductForm/
│   ├── ProductList/
│   ├── ProductRow/
│   └── SearchBar/
│
├── hooks/
│   ├── useNotification.js
│   └── useProducts.js
│
├── services/
│   └── productService.js
│
├── utils/
│   ├── productMapper.js
│   └── productValidation.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Responsabilidades

| Capa         | Responsabilidad                       |
| ------------ | ------------------------------------- |
| `components` | Interfaz y presentación               |
| `hooks`      | Lógica reutilizable y estado          |
| `services`   | Comunicación con la API/Base de datos |
| `utils`      | Validación y transformación de datos  |
| `App`        | Coordinación general de la aplicación |

Esta separación permite evitar que un único componente concentre toda la lógica del proyecto.

---

## 🔄 Flujo principal

```text
                 App
                  │
        ┌─────────┼─────────┐
        │         │         │
   ProductForm  SearchBar  ProductList
                              │
                              ▼
                         ProductRow

                  │
                  ▼
             useProducts
                  │
                  ▼
          productService
                  │
                  ▼
              Supabase
```

Las acciones y datos se comunican mediante Props, mientras que `useProducts` centraliza la lógica relacionada con los productos.

---

## 🏛️ Principios aplicados

El proyecto busca mantener una arquitectura sencilla pero organizada, aplicando:

* **Responsabilidad única (SRP).**
* Separación de responsabilidades.
* Componentes reutilizables.
* Flujo de datos unidireccional.
* Inmutabilidad del estado.
* Composición de componentes.
* Separación entre UI y lógica.
* Separación entre lógica y acceso a datos.
* Reutilización mediante Custom Hooks.

La intención no es utilizar patrones complejos innecesariamente, sino introducirlos cuando existe una necesidad real dentro de la aplicación.

---

## 🛠️ Tecnologías

* **React**
* **Vite**
* **JavaScript ES6+**
* **CSS**
* **Supabase**
* **Sonner** — notificaciones.
* **Lucide React** — iconos.

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresa al proyecto:

```bash
cd react-inventory
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

---

## Scripts

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo.          |
| `npm run build`   | Genera la compilación de producción.       |
| `npm run preview` | Previsualiza la compilación de producción. |

---

## 📌 Estado del proyecto

**Etapa práctica de React completada.**

La aplicación cuenta actualmente con un CRUD funcional, persistencia de datos, búsqueda, formularios controlados, validaciones, Custom Hooks, manejo de errores, estados de carga, notificaciones y confirmación de acciones.

El proyecto cumple su objetivo principal: **utilizar una aplicación real como medio para repasar y consolidar los fundamentos de React**.

---

## 👨‍💻 Autor

Proyecto desarrollado como parte de un proceso personal de **repaso y consolidación de React**, utilizando la práctica y la construcción de una aplicación real como método principal de aprendizaje.

