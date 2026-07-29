# ⚛️ React Inventory Journey

> Repaso y consolidación de conocimientos de **React** mediante el desarrollo de un sistema de inventario.

<p align="left">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white" alt="CSS Modules">
  <img src="https://img.shields.io/badge/Status-In%20Progress-orange" alt="Status">
</p>

Este repositorio documenta mi proceso de **repaso y profundización en React** construyendo una aplicación real de gestión de inventario.

El propósito del proyecto no es únicamente desarrollar una aplicación funcional, sino **reforzar los fundamentos de React**, comprender cómo funciona internamente y aplicar buenas prácticas de arquitectura, diseño de componentes y flujo de datos en un proyecto que evoluciona Sprint a Sprint.

Cada funcionalidad implementada representa un concepto repasado y aplicado en un caso de uso real.

---

# 🎯 Objetivo

Reforzar y consolidar conocimientos de React desarrollando una aplicación de inventario de forma incremental.

Durante el desarrollo del proyecto se busca:

- Comprender el funcionamiento interno de React.
- Diseñar componentes reutilizables y desacoplados.
- Entender el flujo de datos entre componentes.
- Gestionar correctamente el estado de la aplicación.
- Aplicar principios de arquitectura y buenas prácticas.
- Escribir código limpio, mantenible y escalable.
- Evolucionar progresivamente el proyecto hacia tecnologías como TypeScript y Next.js.

---

# ✨ Características actuales

- 📦 Catálogo de productos.
- 🔍 Búsqueda dinámica de productos.
- 🧩 Arquitectura basada en componentes reutilizables.
- 🔄 Flujo de datos mediante Props.
- ⚡ Gestión del estado con `useState`.
- 📈 Desarrollo incremental mediante Sprints.

---

# 🗺️ Ruta de aprendizaje

## 🟢 Fundamentos

- [x] JSX
- [x] Componentes
- [x] Props
- [x] Renderizado
- [x] Re-renderizado
- [x] Listas y Keys
- [x] Eventos
- [x] Renderizado condicional
- [x] Principio de Responsabilidad Única (SRP)

---

## 🟡 Estado

- [x] `useState`
- [x] Variables locales vs Estado
- [x] Actualizaciones de estado
- [x] Re-renderizados por cambios de estado
- [x] Batching de actualizaciones
- [x] Lifting State Up

---

## 🔵 Formularios

- [ ] Formularios controlados
- [ ] Validaciones
- [ ] Manejo de errores

---

## 🟣 Navegación

- [ ] React Router
- [ ] Layouts
- [ ] Rutas protegidas

---

## 🟠 Gestión de estado

- [ ] Context API
- [ ] Custom Hooks

---

## 🔴 Persistencia

- [ ] LocalStorage
- [ ] Consumo de APIs
- [ ] Estados de carga
- [ ] Manejo de errores
- [ ] CRUD completo

---

## 🟤 Optimización

- [ ] React.memo
- [ ] useMemo
- [ ] useCallback
- [ ] Lazy Loading
- [ ] Code Splitting

---

## ⚫ Evolución del proyecto

- [ ] Migración a TypeScript
- [ ] Migración a Next.js

---

# 📅 Roadmap

## Sprint 1 · Arquitectura inicial

- [x] Configuración del proyecto.
- [x] Organización inicial.
- [x] Catálogo de productos.
- [x] Componentes `ProductList`.
- [x] Componentes `ProductRow`.

---

## Sprint 2 · Comprendiendo el renderizado

- [x] Renderizados.
- [x] `StrictMode`.
- [x] Flujo de render.
- [x] Árbol de componentes.

---

## Sprint 3 · Comprendiendo el estado

- [x] `useState`.
- [x] Estado vs Variables locales.
- [x] Re-renderizados por cambios de estado.
- [x] Actualizaciones funcionales.
- [x] Batching.

---

## Sprint 4 · Búsqueda de productos

- [x] Componente `SearchBar`.
- [x] Filtrado de productos.
- [x] Estado compartido.
- [x] Comunicación entre componentes.

---

## Próximos Sprints

### Gestión de productos

- [ ] Crear productos.
- [ ] Editar productos.
- [ ] Eliminar productos.

### Formularios

- [ ] Formularios controlados.
- [ ] Validaciones.

### Navegación

- [ ] React Router.

### Gestión de estado

- [ ] Context API.
- [ ] Custom Hooks.

### Persistencia

- [ ] LocalStorage.
- [ ] Consumo de APIs.

### Optimización

- [ ] React.memo.
- [ ] useMemo.
- [ ] useCallback.

### Evolución

- [ ] Migración a TypeScript.
- [ ] Migración a Next.js.

---

# 🏗️ Arquitectura inicial

```text
src/
│
├── assets/
│
├── components/
│   ├── ProductList/
│   ├── ProductRow/
│   └── SearchBar/
│
├── data/
│   └── products.js
│
├── App.jsx
├── main.jsx
└── index.css
```

> La estructura evolucionará conforme el proyecto incorpore nuevas funcionalidades y aumente su complejidad.

---

# 🧠 Conceptos repasados

Durante el desarrollo del proyecto se revisan y aplican conceptos fundamentales de React:

- JSX
- Componentes
- Props
- Estado (`useState`)
- Renderizado
- Re-renderizado
- Reconciliation
- Batching
- Eventos
- Renderizado condicional
- Listas y Keys
- Lifting State Up
- Flujo de datos unidireccional
- Arquitectura de componentes

---

# 🏛️ Principios aplicados

El proyecto busca aplicar principios utilizados en aplicaciones profesionales:

- Componentes reutilizables.
- Principio de Responsabilidad Única (SRP).
- Composición de componentes.
- Flujo de datos unidireccional.
- Inmutabilidad del estado.
- Separación de responsabilidades.
- Código limpio.
- Arquitectura escalable.

---

# 🛠️ Tecnologías

## Actualmente

- React
- Vite
- JavaScript (ES6+)
- CSS Modules

## Próximamente

- TypeScript
- Next.js

---

# 🚀 Instalación

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

# 📜 Scripts disponibles

| Script | Descripción |
|----------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción. |
| `npm run preview` | Previsualiza la aplicación compilada. |

---

# 📚 Filosofía del repositorio

Este repositorio funciona como una **bitácora de repaso y consolidación de React**.

Cada Sprint incorpora nuevos conceptos que son aplicados inmediatamente dentro de una aplicación real, permitiendo comprender no solo **qué hace React**, sino también **por qué funciona de esa manera**.

El enfoque del proyecto prioriza la comprensión de los fundamentos antes que la incorporación de librerías o herramientas adicionales, construyendo una base sólida para desarrollar aplicaciones mantenibles y escalables.

A medida que avance el proyecto, se incorporarán nuevas funcionalidades y se migrará progresivamente hacia **TypeScript** y **Next.js**, manteniendo una arquitectura limpia y preparada para crecer.

---

# 🚧 Estado del proyecto

Proyecto en desarrollo.

El repositorio evoluciona Sprint a Sprint, incorporando nuevos conceptos de React y funcionalidades que permiten reforzar los conocimientos adquiridos mediante la práctica.

---

# 👨‍💻 Autor

Desarrollado como parte de un proceso de **repaso y profundización en React**, con el objetivo de consolidar conocimientos mediante la construcción de una aplicación real, aplicando principios de arquitectura, diseño de componentes y buenas prácticas de desarrollo.
