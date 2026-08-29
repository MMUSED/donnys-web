document.addEventListener('DOMContentLoaded', () => {
    const phoneNumber = "5492210000000"; // Reemplaza con tu número real de WhatsApp
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const statusBadge = document.getElementById('status-badge');
    const productSelect = document.getElementById('product-select');
    const zoneSelect = document.getElementById('zone-select');
    
    const copyAliasBtn = document.getElementById('copy-alias-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    const myAlias = "donnys.donas.mp"; // Reemplaza con tu alias real de Mercado Pago

    // 1. Control de Horarios Automático
    function checkBusinessStatus() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hours * 60 + minutes;

        const morningOpen = 600;  // 10:00 hs
        const morningClose = 720; // 12:00 hs
        const afternoonOpen = 840;  // 14:00 hs
        const afternoonClose = 960; // 16:00 hs

        const isMorning = currentTime >= morningOpen && currentTime <= morningClose;
        const isAfternoon = currentTime >= afternoonOpen && currentTime <= afternoonClose;

        if (isMorning || isAfternoon) {
            statusBadge.textContent = "🟢 Abierto - ¡Hacé tu pedido!";
            statusBadge.className = "badge open";
        } else {
            statusBadge.textContent = "🔴 Cerrado - Fuera de horario de pedidos";
            statusBadge.className = "badge closed";
        }
    }

    // 2. Actualización Dinámica del Enlace de WhatsApp con Producto y Zona
    function updateWhatsAppLink() {
        const selectedProduct = productSelect.value;
        const selectedZone = zoneSelect.value;
        
        const message = `¡Hola! Quisiera encargar: *${selectedProduct}* con envío a *${selectedZone}*. 🍩 ¿Confirmamos?`;
        const encodedMessage = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        whatsappBtn.textContent = `Pedir por WhatsApp 🍩`;
    }

    // 3. Funcionalidad de Copiar Alias con un Toque
    copyAliasBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(myAlias).then(() => {
            copyFeedback.style.display = 'block';
            setTimeout(() => {
                copyFeedback.style.display = 'none';
            }, 3000);
        }).catch(err => {
            console.error('Error al copiar el alias: ', err);
        });
    });

    // Eventos de cambio en selectores
    productSelect.addEventListener('change', updateWhatsAppLink);
    zoneSelect.addEventListener('change', updateWhatsAppLink);

    // Inicialización al cargar la página
    checkBusinessStatus();
    updateWhatsAppLink();
});
