document.addEventListener("DOMContentLoaded", () => {
    const badge = document.getElementById("status-badge");
    const wpBtn = document.getElementById("whatsapp-btn");
    
    // ⚠️ REEMPLAZÁ ESTE NÚMERO con tu WhatsApp real
    // Formato: 54 (Argentina) + 9 (Celular) + Código de área sin el 0 + Número sin el 15
    // Ejemplo para La Plata (código 221): 5492211234567
    const numWhatsApp = "5492210000000"; 
    
    // Obtenemos la hora actual del dispositivo del cliente
    const now = new Date();
    const hour = now.getHours();

    // Tus horarios:
    // Turno Mañana: 10:00 a 12:00
    // Turno Tarde: 14:00 a 16:00
    const isMorningOpen = hour >= 10 && hour < 12;
    const isAfternoonOpen = hour >= 14 && hour < 16;
    
    let mensaje = "";
    let textoBoton = "";

    if (isMorningOpen || isAfternoonOpen) {
        // --- LOCAL ABIERTO (Toma de pedidos en curso) ---
        badge.textContent = "¡Estamos tomando pedidos!";
        badge.classList.remove("closed");
        badge.classList.add("open");
        
        // Mensaje automático optimizado para la venta
        mensaje = "¡Hola Donny's! 🍩 Quiero hacer un pedido de donas artesanales para recibir hoy en casa. ¿Me pasan los detalles?";
        textoBoton = "Pedir ahora por WhatsApp";
        wpBtn.style.backgroundColor = "#25d366"; // Verde WhatsApp clásico
    } else {
        // --- LOCAL CERRADO (Dejar pedido encargado) ---
        badge.textContent = "Cocina cerrada por ahora";
        badge.classList.remove("open");
        badge.classList.add("closed");
        
        // Mensaje automático para pedidos fuera de horario
        mensaje = "¡Hola Donny's! 🌙 Vi que la cocina está cerrada ahora, pero quiero dejar mi pedido encargado para el próximo turno. ¿Me confirman?";
        textoBoton = "Dejar pedido encargado 🕒";
        wpBtn.style.backgroundColor = "#128C7E"; // Verde un poco más oscuro para diferenciar
    }
    
    // Actualizamos el texto visual del botón
    wpBtn.textContent = textoBoton;
    
    // Convertimos el mensaje para que funcione perfectamente en el link de WhatsApp
    wpBtn.href = `https://wa.me/${numWhatsApp}?text=${encodeURIComponent(mensaje)}`;
});
