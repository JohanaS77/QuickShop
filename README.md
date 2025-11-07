#  QuickShop - Tu Tienda Online

QuickShop es una aplicación web de comercio electrónico moderna y responsive, desarrollada con HTML, CSS y JavaScript. Ofrece una experiencia de compra intuitiva con un sistema completo de autenticación, catálogo de productos y carrito de compras.

##  Características Principales

###  Sistema de Autenticación
- **Inicio de sesión** con integración a API de DummyJSON
- **Registro de nuevos usuarios** con almacenamiento local
- **Validación de formularios** en tiempo real
- **Gestión de sesiones** persistente

###  Catálogo de Productos
- Carga dinámica de productos desde FakeStore API
- **20 productos** con descripciones personalizadas
- Diseño de tarjetas responsive con animaciones
- Imágenes optimizadas y diseño moderno

###  Carrito de Compras Inteligente
- **Contador de cantidades** automático (evita productos duplicados)
- Cálculo dinámico del total
- Visualización compacta con scroll interno
- Botones para vaciar carrito y realizar compra

###  Diseño y UX
- **Interfaz moderna** con gradientes y animaciones suaves
- **Totalmente responsive** (móvil, tablet y desktop)
- **Productos flotantes animados** en pantalla de login
- Efectos hover y transiciones fluidas
- Modal de confirmación de compra

##  Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript ES6+** - Lógica de aplicación
- **APIs REST**:
  - [DummyJSON API](https://dummyjson.com/) - Autenticación
  - [FakeStore API](https://fakestoreapi.com/) - Catálogo de productos
- **LocalStorage** - Almacenamiento de usuarios registrados

##  Estructura del Proyecto

```
QuickShop/
│
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos y diseño responsive
├── js/
│   └── script.js       # Lógica de la aplicación
└── README.md           # Documentación del proyecto
```

##  Instalación y Uso

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

##  Credenciales de Prueba

### Usuarios de la API (DummyJSON)
```
Usuario: emilys
Contraseña: emilyspass
```

### Registrar Nuevo Usuario
También puedes crear tu propia cuenta usando el formulario de registro.

##  Características Responsive

- **Desktop** (1024px+): Layout de dos columnas con carrito lateral
- **Tablet** (768px - 1024px): Layout de una columna
- **Mobile** (< 768px): Diseño optimizado para pantallas pequeñas
- **Pequeño** (< 480px): Interfaz adaptada para móviles

##  Funcionalidades Destacadas

### Gestión Inteligente del Carrito
```javascript
// Al agregar el mismo producto varias veces:
- Se incrementa automáticamente la cantidad
- Se actualiza el precio total
- No se duplican elementos
```

### Sistema de Productos Flotantes
- 10 imágenes animadas en el fondo del login
- Movimiento suave y rotación dinámica
- Efecto de marca de agua elegante

### Modal de Compra Exitosa
- Confirmación visual atractiva
- Vaciado automático del carrito
- Animaciones de entrada y salida

##  Paleta de Colores

- **Primario**: `#667eea` (Púrpura)
- **Secundario**: `#764ba2` (Morado)
- **Éxito**: `#4caf50` (Verde)
- **Error**: `#f44336` (Rojo)
- **Fondo**: Gradiente `#667eea → #764ba2`

##  Validaciones Implementadas

-  Contraseñas mínimo 6 caracteres
-  Confirmación de contraseña en registro
-  Validación de usuario existente
-  Verificación de carrito vacío antes de comprar
-  Campos requeridos en formularios

##  Mejoras Futuras

- [ ] Integración con pasarela de pagos
- [ ] Filtros por categoría y precio
- [ ] Sistema de favoritos/wishlist
- [ ] Búsqueda de productos
- [ ] Historial de compras
- [ ] Modo oscuro
- [ ] Persistencia del carrito en localStorage
- [ ] Sistema de reseñas y calificaciones

##  Desarrolladores
[⬆️ Volver a la tabla de contenido](#-tabla-de-contenido)

Este proyecto fue desarrollado por  **Johana Jazmín Saavedra Tafur** y **David Stiven Silva Velandia**, estudiantes de cuarto semestre del programa **Técnica Profesional en Programación de Aplicaciones de Software** de la **Fundación Universitaria Compensar**.

Como equipo, tuvimos una participación activa en el **diseño** e **implementación** de la aplicación web de comercio electrónico.
<div align="center">

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/3e2759c7-bbb2-42bd-a9f8-6da02e70f4ee" width="140"><br/>
      <strong>Johana Saavedra</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b69a090a-334e-499b-ae06-f78ce11554be" width="120"><br/>
      <strong>David Silva</strong>
    </td>
  </tr>
</table>

</div>


##  Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.



---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐
