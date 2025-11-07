// Descripciones personalizadas para cada producto
const descripcionesPersonalizadas = {
    1: "Mochila resistente perfecta para aventureros urbanos. Diseño ergonómico con múltiples compartimentos.",
    2: "Camiseta premium con acabados de calidad. Perfecta para el día a día con estilo casual elegante.",
    3: "Chaqueta versátil de algodón para todas las estaciones. Ideal para actividades al aire libre.",
    4: "Prenda ajustada de diseño moderno. Combina comodidad y estilo para cualquier ocasión.",
    5: "Elegante brazalete inspirado en la mitología oriental. Pieza única que combina tradición y lujo.",
    6: "Joya delicada con acabado en oro sólido. Diseño minimalista perfecto para uso diario.",
    7: "Anillo clásico de compromiso con diseño atemporal. Símbolo perfecto de amor eterno.",
    8: "Aretes modernos de acero inoxidable quirúrgico. Diseño único para personalidades audaces.",
    9: "Disco duro portátil de alta capacidad. Solución perfecta para backup y almacenamiento móvil.",
    10: "SSD interno de última generación. Mejora drásticamente el rendimiento de tu computadora.",
    11: "Unidad de estado sólido con tecnología 3D NAND. Velocidad y confiabilidad profesional.",
    12: "Disco externo diseñado específicamente para gaming. Expande tu biblioteca de juegos sin límites.",
    13: "Monitor Full HD con panel IPS de alta calidad. Colores vibrantes para trabajo y entretenimiento.",
    14: "Monitor curvo ultrawide para experiencia gaming inmersiva. Tecnología QLED de última generación.",
    15: "Chaqueta de invierno 3 en 1 ultra versátil. Sistema de capas para adaptarse a cualquier clima.",
    16: "Chaqueta estilo motociclista con diseño contemporáneo. Combina estilo urbano y comodidad.",
    17: "Impermeable ligero con diseño a rayas moderno. Protección completa sin sacrificar el estilo.",
    18: "Blusa básica de corte elegante. Tela suave con excelente caída para look sofisticado.",
    19: "Camiseta deportiva con tecnología anti-humedad. Perfecta para entrenamiento de alto rendimiento.",
    20: "Playera casual de algodón premium. Diseño con estampado de letras para look relajado."
};

// Objeto Carrito
const carrito = {
    items: [],
    
    agregarItem(producto) {
        // Buscar si el producto ya existe en el carrito
        const productoExistente = this.items.find(item => item.id === producto.id);
        
        if (productoExistente) {
            // Si existe, aumentar la cantidad
            productoExistente.cantidad++;
        } else {
            // Si no existe, agregarlo con cantidad 1
            const productoConDescripcion = {
                ...producto,
                descripcionPersonalizada: descripcionesPersonalizadas[producto.id],
                cantidad: 1
            };
            this.items.push(productoConDescripcion);
        }
        
        this.renderizarCarrito();
    },
    
    calcularTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.cantidad), 0);
    },
    
    renderizarCarrito() {
        const carritoDiv = document.getElementById('carrito');
        const totalDiv = document.querySelector('.carrito-total');
        
        if (this.items.length === 0) {
            carritoDiv.innerHTML = '<div class="carrito-vacio">El carrito está vacío</div>';
            totalDiv.style.display = 'none';
            return;
        }
        
        carritoDiv.innerHTML = this.items.map(item => `
            <div class="carrito-item">
                <img src="${item.image}" alt="${item.title}" class="carrito-item-img">
                <div class="carrito-item-info">
                    <div class="carrito-item-titulo">${item.title}</div>
                    <div class="carrito-item-detalles">
                        <span class="carrito-item-cantidad">Cantidad: ${item.cantidad}</span>
                        <span class="carrito-item-precio">$${(item.price * item.cantidad).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('total-precio').textContent = `$${this.calcularTotal().toFixed(2)}`;
        totalDiv.style.display = 'block';
    },
    
    vaciar() {
        this.items = [];
        this.renderizarCarrito();
    }
};

// Variables globales
let usuarioActual = null;
let modoRegistro = false;

// Cargar imágenes flotantes en el fondo del login
async function cargarImagenesFlotantes() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const productos = await response.json();
        
        const container = document.getElementById('floating-products-container');
        
        productos.forEach((producto, index) => {
            const img = document.createElement('img');
            img.src = producto.image;
            img.className = 'floating-product';
            img.alt = '';
            img.style.animationDelay = `${-index * 3}s`;
            container.appendChild(img);
        });
    } catch (error) {
        console.log('No se pudieron cargar las imágenes flotantes');
    }
}

// Funciones de autenticación local
function guardarUsuarioLocal(usuario) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function buscarUsuarioLocal(username, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.find(u => u.username === username && u.password === password);
}

function usuarioExiste(username) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.some(u => u.username === username);
}

// Función de Registro
async function registrarUsuario(nombre, username, email, password, passwordConfirm) {
    const errorMsg = document.getElementById('error-message');
    const successMsg = document.getElementById('success-message');
    const registerBtn = document.getElementById('register-btn');
    
    try {
        registerBtn.disabled = true;
        registerBtn.textContent = 'Registrando...';
        errorMsg.style.display = 'none';
        successMsg.style.display = 'none';
        
        // Validaciones
        if (password !== passwordConfirm) {
            throw new Error('Las contraseñas no coinciden');
        }
        
        if (password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres');
        }
        
        if (usuarioExiste(username)) {
            throw new Error('El nombre de usuario ya está en uso');
        }
        
        // Crear usuario
        const nuevoUsuario = {
            username: username,
            password: password,
            firstName: nombre.split(' ')[0],
            lastName: nombre.split(' ')[1] || '',
            email: email,
            id: Date.now()
        };
        
        guardarUsuarioLocal(nuevoUsuario);
        
        successMsg.textContent = '¡Registro exitoso! Ya puedes iniciar sesión';
        successMsg.style.display = 'block';
        
        // Limpiar formulario
        document.getElementById('register-form').reset();
        
        // Cambiar a formulario de login después de 2 segundos
        setTimeout(() => {
            toggleFormulario();
            successMsg.style.display = 'none';
        }, 2000);
        
    } catch (error) {
        errorMsg.textContent = error.message;
        errorMsg.style.display = 'block';
    } finally {
        registerBtn.disabled = false;
        registerBtn.textContent = 'Registrarse';
    }
}

// Función de Login (API + Local)
async function iniciarSesion(username, password) {
    const errorMsg = document.getElementById('error-message');
    const loginBtn = document.getElementById('login-btn');
    
    try {
        loginBtn.disabled = true;
        loginBtn.textContent = 'Iniciando sesión...';
        errorMsg.style.display = 'none';
        
        let usuario = null;
        
        // Primero intentar con la API de DummyJSON
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            
            if (response.ok) {
                usuario = await response.json();
                console.log('Login exitoso con API de DummyJSON');
            }
        } catch (apiError) {
            console.log('No se encontró en API, buscando localmente...');
        }
        
        // Si no está en la API, buscar en usuarios locales
        if (!usuario) {
            usuario = buscarUsuarioLocal(username, password);
            if (!usuario) {
                throw new Error('Usuario o contraseña incorrectos');
            }
            console.log(' Login exitoso con usuario local');
        }
        
        usuarioActual = usuario;
        document.getElementById('user-name').textContent = usuario.firstName || username;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        
        cargarProductos();
        
    } catch (error) {
        errorMsg.textContent = error.message;
        errorMsg.style.display = 'block';
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Iniciar Sesión';
    }
}

// Función para cargar productos desde la API
async function cargarProductos() {
    const catalogoDiv = document.getElementById('catalogo-productos');
    
    try {
        console.log(' Cargando productos desde la API...');
        const response = await fetch('https://fakestoreapi.com/products');
        const productos = await response.json();
        
        console.log(`${productos.length} productos cargados`);
        
        catalogoDiv.innerHTML = '';
        
        productos.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'producto-card';
            card.innerHTML = `
                <img src="${producto.image}" alt="${producto.title}" class="producto-imagen">
                <div class="producto-info">
                    <h3 class="producto-titulo">${producto.title}</h3>
                    <p class="producto-descripcion">${descripcionesPersonalizadas[producto.id]}</p>
                    <div class="producto-footer">
                        <span class="producto-precio">$${producto.price.toFixed(2)}</span>
                        <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
                    </div>
                </div>
            `;
            
            catalogoDiv.appendChild(card);
            
            const btnAgregar = card.querySelector('.btn-agregar');
            btnAgregar.addEventListener('click', () => {
                carrito.agregarItem(producto);
                btnAgregar.textContent = '✓ Agregado';
                setTimeout(() => {
                    btnAgregar.textContent = 'Agregar';
                }, 1000);
            });
        });
        
    } catch (error) {
        catalogoDiv.innerHTML = '<div class="loading">Error al cargar productos. Intenta de nuevo.</div>';
        console.error(' Error al cargar productos:', error);
    }
}

// Función para cambiar entre login y registro
function toggleFormulario() {
    modoRegistro = !modoRegistro;
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const subtitle = document.getElementById('form-subtitle');
    const toggleText = document.getElementById('toggle-text');
    const errorMsg = document.getElementById('error-message');
    const successMsg = document.getElementById('success-message');
    
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';
    
    if (modoRegistro) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        subtitle.textContent = 'Crea tu cuenta para comenzar';
        toggleText.innerHTML = '¿Ya tienes cuenta? <a href="#" id="toggle-link">Inicia sesión aquí</a>';
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        subtitle.textContent = 'Inicia sesión para comenzar a comprar';
        toggleText.innerHTML = '¿No tienes cuenta? <a href="#" id="toggle-link">Regístrate aquí</a>';
    }
    
    // Re-agregar event listener al nuevo link
    document.getElementById('toggle-link').addEventListener('click', (e) => {
        e.preventDefault();
        toggleFormulario();
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('QuickShop iniciado');
    // Cargar imágenes flotantes de fondo
    cargarImagenesFlotantes();
    
    // Login
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        iniciarSesion(username, password);
    });

    // Registro
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('register-name').value;
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const passwordConfirm = document.getElementById('register-password-confirm').value;
        registrarUsuario(nombre, username, email, password, passwordConfirm);
    });

    // Toggle entre login y registro
    document.getElementById('toggle-link').addEventListener('click', (e) => {
        e.preventDefault();
        toggleFormulario();
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        usuarioActual = null;
        carrito.vaciar();
        document.getElementById('app').style.display = 'none';
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('login-form').reset();
        document.getElementById('register-form').reset();
        if (modoRegistro) toggleFormulario();
        console.log('🚪 Sesión cerrada');
    });

    // Vaciar carrito
    document.getElementById('btn-vaciar').addEventListener('click', () => {
        if (confirm('¿Estás seguro de vaciar el carrito?')) {
            carrito.vaciar();
        }
    });
});

// Botón comprar
    document.getElementById('btn-comprar').addEventListener('click', () => {
        if (carrito.items.length === 0) {
            alert('El carrito está vacío. Agrega productos antes de comprar.');
            return;
        }
        
        // Mostrar modal
        document.getElementById('modal-compra').classList.add('active');
        
        // Vaciar carrito después de comprar
        setTimeout(() => {
            carrito.vaciar();
        }, 300);
    });

    // Cerrar modal
    document.getElementById('btn-cerrar-modal').addEventListener('click', () => {
        document.getElementById('modal-compra').classList.remove('active');
    });

    // Cerrar modal al hacer clic fuera
    document.getElementById('modal-compra').addEventListener('click', (e) => {
        if (e.target.id === 'modal-compra') {
            document.getElementById('modal-compra').classList.remove('active');
        }
    });