document.addEventListener('DOMContentLoaded', () => {
    const phoneNumber = "5492210000000"; // Reemplaza con tu número real
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const statusBadge = document.getElementById('status-badge');
    const productSelect = document.getElementById('product-select');

    // Función para calcular el estado del negocio según los horarios de atención
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

    // Función que actualiza el enlace de WhatsApp dinámicamente según lo que elija el cliente
    function updateWhatsAppLink() {
        const selectedProduct = productSelect.value;
        const message = `¡Hola! Quisiera encargar: *${selectedProduct}* de Donny's. 🍩 ¿Hay disponibilidad para el envío?`;
        const encodedMessage = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        whatsappBtn.textContent = `Pedir ${selectedProduct} por WhatsApp 🍩`;
    }

    // Eventos
    productSelect.addEventListener('change', updateWhatsAppLink);

    // Inicialización
    checkBusinessStatus();
    updateWhatsAppLink();
});
