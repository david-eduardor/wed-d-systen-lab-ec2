document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menú Móvil (Hamburguesa)
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animación simple de las líneas del botón
        const lines = mobileMenuBtn.querySelectorAll('span');
        lines.forEach(line => line.classList.toggle('active'));
    });

    // Cerrar el menú al hacer clic en un enlace (ideal para móviles)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 2. Validación y envío del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene que la página se recargue

        // Obtener datos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validación básica extra
        if (name === '' || email === '' || message === '') {
            showResponse('Por favor, rellena todos los campos.', 'error');
            return;
        }

        // Simulación de envío a un servidor (Aquí integrarías tu servicio de Email o Backend)
        showResponse('Enviando mensaje...', 'info');

        setTimeout(() => {
            // Éxito simulado
            showResponse('¡Gracias! Tu mensaje ha sido enviado con éxito. Nos comunicaremos contigo pronto.', 'success');
            contactForm.reset(); // Limpia los campos del formulario
        }, 1500);
    });

    // Función auxiliar para mostrar alertas de respuesta
    function showResponse(text, type) {
        formResponse.textContent = text;
        formResponse.className = 'form-response'; // Resetea clases
        
        if (type === 'success') {
            formResponse.classList.add('success');
        } else if (type === 'error') {
            formResponse.style.background = 'rgba(239, 68, 68, 0.1)';
            formResponse.style.color = '#ef4444';
            formResponse.style.border = '1px solid rgba(239, 68, 68, 0.2)';
        } else {
            formResponse.style.background = 'rgba(59, 130, 246, 0.1)';
            formResponse.style.color = '#3b82f6';
        }
        
        formResponse.classList.remove('hidden');
    }
});