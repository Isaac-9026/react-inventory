# React Inventory Journey

> Aplicación de inventario desarrollada para repasar, consolidar y aplicar conocimientos de **React y TypeScript** mediante la construcción de un proyecto real.

El proyecto nació como una práctica de React y evolucionó progresivamente hasta convertirse en una aplicación funcional para la gestión de productos.

El enfoque principal fue **repasar construyendo**, aplicando cada concepto dentro de funcionalidades reales.

---

## 🎯 Objetivo

Consolidar los fundamentos de React mediante una aplicación que permita:

* Comprender el renderizado y re-renderizado.
* Gestionar correctamente el estado.
* Entender el flujo de datos entre componentes.
* Crear componentes reutilizables.
* Trabajar con formularios controlados.
* Implementar operaciones asíncronas.
* Crear y utilizar Custom Hooks.
* Separar responsabilidades.
* Implementar un CRUD completo.
* Manejar errores y estados de carga.
* Aplicar TypeScript sobre una aplicación React real.

---

## ✨ Funcionalidades

Actualmente la aplicación permite:

* 📦 Visualizar productos.
* 🔍 Buscar por nombre, marca, categoría y modelo.
* ➕ Registrar productos.
* ✏️ Editar productos.
* 🗑️ Eliminar productos.
* ⚠️ Confirmar eliminaciones.
* ✅ Validar datos del formulario.
* 🔔 Mostrar notificaciones de éxito y error.
* ⏳ Mostrar estados de carga.
* ❌ Manejar errores de las operaciones.
* ☁️ Persistir información mediante Supabase.
* 🌙 Interfaz con tema oscuro.

---

## 🧠 Conceptos aplicados

### React

* JSX / TSX.
* Componentes funcionales.
* Props.
* Renderizado condicional.
* Listas y Keys.
* Eventos.
* Re-renderizado.
* `StrictMode`.
* `useState`.
* `useEffect`.
* Lifting State Up.
* Batching.
* Inmutabilidad del estado.
* Flujo de datos unidireccional.

### Formularios

* Formularios controlados.
* Estado de formularios.
* Manejo de múltiples campos.
* Validación.
* Transformación de datos.
* Manejo de errores.

### Operaciones asíncronas

* `async/await`.
* `try/catch/finally`.
* Estados de carga.
* Manejo de errores.
* Comunicación con Supabase.

### Custom Hooks

* `useProducts`.
* `useNotification`.
* Separación de lógica y presentación.
* Reutilización de lógica.

### TypeScript

* Interfaces y tipos.
* Tipado de Props.
* Tipado de estados.
* Tipado de funciones.
* Tipado de datos de productos.
* Tipado de variables de entorno.
* Migración progresiva de JavaScript a TypeScript.

---

## 🏗️ Arquitectura

```text
src/
│
├── components/
│   ├── ConfirmDialog/
│   ├── Loader/
│   ├── ProductForm/
│   ├── ProductList/
│   ├── ProductRow/
│   └── SearchBar/
│
├── hooks/
│   ├── useNotification.ts
│   └── useProducts.ts
│
├── lib/
│   └── supabase.ts
│
├── services/
│   └── productService.ts
│
├── types/
│   └── product.ts
│
├── utils/
│   ├── productMapper.ts
│   └── productValidation.ts
│
├── App.tsx
├── App.css
├── index.css
├── main.tsx
└── vite-env.d.ts
```

### Responsabilidades

| Capa         | Responsabilidad                       |
| ------------ | ------------------------------------- |
| `components` | Interfaz y presentación               |
| `hooks`      | Estado y lógica reutilizable          |
| `services`   | Comunicación con Supabase             |
| `lib`        | Configuración de servicios externos   |
| `types`      | Definición de tipos                   |
| `utils`      | Validación y transformación de datos  |
| `App`        | Coordinación general de la aplicación |

La separación permite mantener la interfaz, la lógica y el acceso a datos en responsabilidades diferentes.

---

## 🔄 Flujo principal

```text
                    App
                     │
          ┌──────────┼──────────┐
          │          │          │
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

`App` coordina los componentes principales, mientras que `useProducts` centraliza la lógica relacionada con los productos.

Los componentes reciben información y funciones mediante Props, manteniendo un flujo de datos unidireccional.

---

## 🏛️ Principios aplicados

El proyecto mantiene una arquitectura sencilla y organizada, aplicando:

* Responsabilidad única (SRP).
* Separación de responsabilidades.
* Componentes reutilizables.
* Composición de componentes.
* Flujo de datos unidireccional.
* Inmutabilidad del estado.
* Separación entre UI y lógica.
* Separación entre lógica y acceso a datos.
* Reutilización mediante Custom Hooks.
* Tipado estático mediante TypeScript.

La intención es utilizar patrones y abstracciones cuando existe una necesidad real, evitando complejidad innecesaria.

---

## 🛠️ Tecnologías

* **React**
* **TypeScript**
* **Vite**
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

Configura las variables de entorno:

```env
VITE_SUPABASE_URL=tu_url
VITE_SUPABASE_ANON_KEY=tu_clave
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

---

## 📜 Scripts

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo.          |
| `npm run build`   | Genera la compilación de producción.       |
| `npm run preview` | Previsualiza la compilación de producción. |

---

## 📌 Estado del proyecto

**Etapa práctica de React completada.**

La aplicación cuenta con:

* CRUD completo.
* Persistencia mediante Supabase.
* Búsqueda de productos.
* Formularios controlados.
* Validaciones.
* Custom Hooks.
* Manejo de errores.
* Estados de carga.
* Notificaciones.
* Confirmación de acciones.
* TypeScript.

El proyecto cumplió su objetivo principal: **utilizar una aplicación real como medio para repasar y consolidar los fundamentos de React**, incorporando posteriormente TypeScript para mejorar la seguridad y mantenibilidad del código.

---

## 👨‍💻 Autor

Proyecto desarrollado como parte de un proceso personal de **repaso y consolidación de React**, utilizando la construcción de una aplicación real como método principal de aprendizaje.
