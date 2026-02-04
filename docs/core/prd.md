# 📄 PRD – Aplicación Pomodoro (Frontend)

## 1. Overview del Producto

**Nombre provisional:** Pomoflow  
**Tipo:** Aplicación web de productividad (Pomodoro Timer)  
**Stack inicial:** Next.js (Frontend únicamente)  

**Objetivo:**  
Ayudar a los usuarios a gestionar su tiempo mediante sesiones Pomodoro, fomentando el enfoque, descansos estructurados y una experiencia visual minimalista.

---

## 2. Objetivos del Producto

- Permitir iniciar, pausar y reiniciar ciclos Pomodoro.
- Mostrar visualmente el estado del temporizador.
- Ofrecer una interfaz minimalista, oscura y enfocada.
- Sentar una base sólida para futuras mejoras (estadísticas, backend, cuentas de usuario).

---

## 3. Alcance (Scope)

### Incluido (MVP)
- Temporizador Pomodoro funcional.
- Gestión de estados (trabajo / descanso corto / descanso largo).
- Interfaz responsive.
- Persistencia local usando `localStorage`.
- Frontend únicamente (sin backend).

### No incluido (por ahora)
- Autenticación de usuarios.
- Sincronización en la nube.
- Estadísticas avanzadas.
- Notificaciones push.

---

## 4. Reglas del Método Pomodoro

- **Trabajo:** 25 minutos  
- **Descanso corto:** 5 minutos  
- **Descanso largo:** 15 minutos cada 4 pomodoros  

El usuario puede:
- Iniciar
- Pausar
- Reiniciar el ciclo

---

## 5. Funcionalidades Principales

### 5.1 Temporizador
- Countdown visible en formato `MM:SS`.
- Animación sutil cuando el temporizador está activo.
- Cambio automático entre estados.

### 5.2 Controles
- Botón **Start**
- Botón **Pause**
- Botón **Reset**
- Estados visuales claros según la acción.

### 5.3 Estado de Sesión
- Indicador del estado actual:
  - `Focus`
  - `Short Break`
  - `Long Break`
- El estado activo debe destacarse usando el color `#C6611E`.

### 5.4 Persistencia Local
Guardar en `localStorage`:
- Tiempo restante.
- Estado actual.
- Número de pomodoros completados.

---

## 6. Diseño UI / UX

### 6.1 Tipografía
- **Fuente:** Inter
- **Peso:** Bold
- Uso consistente en toda la aplicación.

### 6.2 Paleta de Colores

| Uso | Color |
|---|---|
| Fondo principal | `#000000` |
| Texto principal | `#FFFFFF` |
| Texto secundario | `#6C6E6A` |
| Elementos importantes / énfasis | `#C6611E` |

**Reglas de uso:**
- `#C6611E` solo para:
  - Estado activo del Pomodoro.
  - Botón principal activo.
  - Palabras o secciones importantes.
- `#000000` como fondo global de la aplicación.
- `#FFFFFF` para texto principal.
- `#6C6E6A` para textos secundarios, labels o ayudas visuales.

---

## 7. Layout de Pantalla (Home)

### Estructura General

1. **Header**
   - Nombre de la aplicación.
   - Diseño minimalista, sin elementos distractores.

2. **Timer Central**
   - Temporizador en tamaño grande (elemento principal).
   - Estado actual debajo del timer.

3. **Controles**
   - Botones alineados horizontalmente.
   - El botón activo se resalta con `#C6611E`.

4. **Footer (opcional)**
   - Texto sutil: “Stay focused.”

---

## 8. Arquitectura Frontend

### Framework
- Next.js (App Router).

### Estructura de Carpetas Sugerida
/app
/page.tsx
/layout.tsx
/components
Timer.tsx
Controls.tsx
Status.tsx
/hooks
usePomodoro.ts
/styles
globals.css


### Manejo de Estado
- React Hooks (`useState`, `useEffect`).
- Hook personalizado `usePomodoro` para la lógica del temporizador.

---

## 9. Consideraciones Técnicas

- No usar librerías externas para el temporizador.
- Implementar la lógica del timer manualmente.
- Código limpio, modular y reutilizable.
- Componentes diseñados pensando en futura integración con backend.

---

## 10. Roadmap Futuro (No implementar ahora)

- Historial de sesiones Pomodoro.
- Estadísticas semanales y mensuales.
- Configuración personalizada de tiempos.
- Autenticación de usuarios.
- Sincronización en la nube.
- Versión PWA (mobile-first).

---
