document.addEventListener('DOMContentLoaded', () => {
    // Definimos tu número de WhatsApp y los textos predeterminados
    const phoneNumber = "5492210000000"; // Reemplaza con tu número real con código de país y área sin '+'
    const defaultMessage = "¡Hola! Quisiera hacer un pedido de donas artesanales de Donny's. 🍩";
    
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const statusBadge = document.getElementById('status-badge');

    // Función para calcular el estado del negocio según los horarios de atención
    function checkBusinessStatus() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hours * 60 + minutes; // Convertimos todo a minutos del día

        // Horarios de cocina:
        // Mañana: 10:00 (600 min) a 12:00 (720 min)
        // Tarde: 14:00 (840 min) a 16:00 (960 min)
        const morningOpen = 600;  // 10:00 hs
        const morningClose = 720; // 12:00 hs
        const afternoonOpen = 840;  // 14:00 hs
        const afternoonClose = 960; // 16:00 hs

        const isMorning = currentTime >= morningOpen && currentTime <= morningClose;
        const isAfternoon = currentTime >= afternoonOpen && currentTime <= afternoonClose;

        if (isMorning || isAfternoon) {
            // ABIERTO
            statusBadge.textContent = "🟢 Abierto - ¡Hacé tu pedido!";
            statusBadge.className = "badge open";
            whatsappBtn.style.pointerEvents = "auto";
            whatsappBtn.style.opacity = "1";
            whatsappBtn.textContent = "Pedir por WhatsApp 🍩";
        } else {
            // CERRADO (Corte automático de stock / horario fuera de rango)
            statusBadge.textContent = "🔴 Cerrado - Fuera de horario de pedidos";
            statusBadge.className = "badge closed";
            whatsappBtn.textContent = "Consultar para mañana 🕒";
        }
    }

    // Ejecutamos la validación al cargar la página
    checkBusinessStatus();

    // Codificamos el mensaje de forma segura para la URL de WhatsApp
    const encodedMessage = encodeURIComponent(defaultMessage);
    whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
});
