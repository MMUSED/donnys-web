document.addEventListener("DOMContentLoaded", () => {
    const badge = document.getElementById("status-badge");
    const wpBtn = document.getElementById("whatsapp-btn");
    
    // IMPORTANTE: Poné acá el número donde vas a recibir los pedidos
    // Formato: código de país (54 para Arg) + código de área sin el 0 + número sin el 15
    const numWhatsApp = "5491100000000"; 
    
    const now = new Date();
    const hour = now.getHours();

    const isMorningOpen = hour >= 10 && hour < 12;
    const isAfternoonOpen = hour >= 14 && hour < 16;
    
    let mensaje = "";
    let textoBoton = "";

    if (isMorningOpen || isAfternoonOpen) {
        // --- LOCAL ABIERTO ---
        badge.textContent = "¡Estamos tomando pedidos!";
        badge.classList.remove("closed");
        badge.classList.add("open");
        
        mensaje = "Hola Donny's! Quiero hacer un pedido de donas ahora mismo.";
        textoBoton = "Pedir ahora por WhatsApp";
        wpBtn.style.backgroundColor = "#25d366"; // Verde clásico de WhatsApp
    } else {
        // --- LOCAL CERRADO ---
        badge.textContent = "Cocina cerrada por ahora";
        badge.classList.remove("open");
        badge.classList.add("closed");
        
        mensaje = "Hola Donny's! Vi que la cocina está cerrada, pero quiero dejarles mi pedido encargado para cuando abran.";
        textoBoton = "Dejar pedido encargado 🌙";
        wpBtn.style.backgroundColor = "#128C7E"; // Un verde oscuro para indicar que es diferido
    }
    
    // Inyectamos los datos en el botón de WhatsApp
    wpBtn.textContent = textoBoton;
    
    // encodeURIComponent asegura que los espacios en el mensaje se lean bien en el link
    wpBtn.href = `https://wa.me/${numWhatsApp}?text=${encodeURIComponent(mensaje)}`;
});
