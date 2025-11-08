# <img width="1107" height="177" alt="Captura de pantalla 2025-11-07 192750" src="https://github.com/user-attachments/assets/4f952c09-46ea-4ade-a8e7-f491c54d5b44" />

**[🌐 Visita la aplicación en vivo](https://johanas77.github.io/QuickShop/)**

QuickShop es una aplicación web de comercio electrónico moderna y responsive, desarrollada con HTML, CSS y JavaScript. Ofrece una experiencia de compra intuitiva con un sistema completo de autenticación, catálogo de productos y carrito de compras.

---

<a id="índice"></a>
<img width="180" height="101" alt="Captura de pantalla 2025-11-07 192822" src="https://github.com/user-attachments/assets/4ff6a490-21f2-4f81-93d9-bd6341a8d591" />

- [Características Principales](#características-principales)  
- [Resultado Final](#resultado-final)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso](#instalación-y-uso)
- [Credenciales de Prueba](#credenciales-de-prueba)
- [Mejoras Futuras](#mejoras-futuras)
- [Desarrolladores](#desarrolladores)
- [Licencia](#licencia)

---

<a id="características-principales"></a>
# <img width="453" height="100" alt="Captura de pantalla 2025-11-07 192832" src="https://github.com/user-attachments/assets/d76ad124-0194-4c33-afe8-19cb70da181f" />

### Sistema de Autenticación
- **Inicio de sesión** con integración a API de DummyJSON
- **Registro de nuevos usuarios** con almacenamiento local
- **Validación de formularios** en tiempo real
- **Gestión de sesiones** persistente

### Catálogo de Productos
- Carga dinámica de productos desde FakeStore API
- **20 productos** con descripciones personalizadas
- Diseño de tarjetas responsive con animaciones
- Imágenes optimizadas y diseño moderno

### Carrito de Compras Inteligente
- **Contador de cantidades** automático (evita productos duplicados)
- Cálculo dinámico del total
- Visualización compacta con scroll interno
- Botones para vaciar carrito y realizar compra

### Diseño y UX
- **Interfaz moderna** con gradientes y animaciones suaves
- **Totalmente responsive** (móvil, tablet y desktop)
- **Productos flotantes animados** en pantalla de login
- Efectos hover y transiciones fluidas
- Modal de confirmación de compra

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="resultado-final"></a>
# <img width="347" height="94" alt="Captura de pantalla 2025-11-07 192841" src="https://github.com/user-attachments/assets/5b1a6fe7-2cff-44f3-ac2f-83b1c8fa4cc7" />

A continuación se muestran capturas de pantalla de la aplicación:
<div align="center">
  <img width="48%" alt="Pantalla de Login" src="https://github.com/user-attachments/assets/7f3fea9c-2db4-4be8-96d7-a035a8ea3466" />
  <img width="48%" alt="Pantalla de Productos" src="https://github.com/user-attachments/assets/f7c39502-dcd9-4931-9620-eeab3511ad42" />
  
  <p><strong>Página de inicio</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Contenido de la aplicación</strong></p>
</div>

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="tecnologías-utilizadas"></a>
# <img width="372" height="100" alt="Captura de pantalla 2025-11-07 192850" src="https://github.com/user-attachments/assets/05495f3f-9f26-4f94-b319-e46c88098765" />

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript ES6+** - Lógica de aplicación
- **APIs REST**:
  - [DummyJSON API](https://dummyjson.com/) - Autenticación
  - [FakeStore API](https://fakestoreapi.com/) - Catálogo de productos
- **LocalStorage** - Almacenamiento de usuarios registrados

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="estructura-del-proyecto"></a>
# <img width="402" height="105" alt="Captura de pantalla 2025-11-07 192858" src="https://github.com/user-attachments/assets/81bad634-a242-4433-aa69-ea6a6df1f11d" />

```
QuickShop/
│
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos y diseño responsive
├── js/
│   └── script.js       # Lógica de la aplicación
└── README.md           # Documentación del proyecto
```

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="instalación-y-uso"></a>
# <img width="328" height="107" alt="Captura de pantalla 2025-11-07 192906" src="https://github.com/user-attachments/assets/772e1b65-f43f-46b6-b4e4-46bbf14277c8" />

### Opción 1: Descarga Directa
1. Descarga o clona este repositorio:
   ```bash
   git clone https://github.com/JohanaS77/QuickShop.git
   ```
2. Abre el archivo `index.html` en tu navegador

### Opción 2: Servidor Local
1. Clona el repositorio
2. Usa un servidor local como Live Server (VS Code) o:
   ```bash
   npx serve
   ```
3. Abre en tu navegador: `http://localhost:3000`

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="credenciales-de-prueba"></a>
# <img width="337" height="106" alt="Captura de pantalla 2025-11-07 192914" src="https://github.com/user-attachments/assets/8ec95763-5427-4485-ac90-8a098bad8d7a" />

### Usuarios de la API (DummyJSON)
```
Usuario: emilys
Contraseña: emilyspass
```

### Registrar Nuevo Usuario
También puedes crear tu propia cuenta usando el formulario de registro.

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="mejoras-futuras"></a>
# <img width="289" height="104" alt="Captura de pantalla 2025-11-07 192922" src="https://github.com/user-attachments/assets/6fde6af7-8eb9-466a-a244-1dfa48cc2029" />

- [ ] Integración con pasarela de pagos
- [ ] Filtros por categoría y precio
- [ ] Sistema de favoritos/wishlist
- [ ] Búsqueda de productos
- [ ] Historial de compras
- [ ] Modo oscuro
- [ ] Persistencia del carrito en localStorage
- [ ] Sistema de reseñas y calificaciones

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="desarrolladores"></a>
# <img width="291" height="104" alt="Captura de pantalla 2025-11-07 192928" src="https://github.com/user-attachments/assets/47dbbfa4-4152-4e4b-b736-9e15c6415db2" />

Este proyecto fue desarrollado por **Johana Jazmín Saavedra Tafur** y **David Stiven Silva Velandia**, estudiantes de cuarto semestre del programa **Técnica Profesional en Programación de Aplicaciones de Software** de la **Fundación Universitaria Compensar**.

Como equipo, tuvimos una participación activa en el **diseño** e **implementación** de la aplicación web de comercio electrónico.

<div align="center">
<table>
  <tr>
    <td align="center">
      <img width="145" alt="johana" src="https://github.com/user-attachments/assets/f9a8e088-bb66-4488-83b1-874ba772c887" /><br/>
      <strong>Johana Saavedra</strong>
    </td>
    <td align="center">
      <img width="120" alt="david" src="https://github.com/user-attachments/assets/b69a090a-334e-499b-ae06-f78ce11554be" /><br/>
      <strong>David Silva</strong>
    </td>
  </tr>
</table>
</div>

[⬆️ Volver al índice](#tabla-de-contenido)

---

<a id="licencia"></a>
# <img width="185" height="100" alt="Captura de pantalla 2025-11-07 192935" src="https://github.com/user-attachments/assets/c5a28f38-ec16-466e-9b3a-5ab074b95c20" />
Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

[⬆️ Volver al índice](#indice)



---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐
