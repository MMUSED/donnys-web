document.addEventListener("DOMContentLoaded", () => {
    const badge = document.getElementById("status-badge");
    
    // Obtenemos la hora actual
    const now = new Date();
    const hour = now.getHours();

    // Lógica de horarios: 
    // Mañana: 10 a 12 (10:00 a 11:59)
    // Tarde: 14 a 16 (14:00 a 15:59)
    const isMorningOpen = hour >= 10 && hour < 12;
    const isAfternoonOpen = hour >= 14 && hour < 16;

    if (isMorningOpen || isAfternoonOpen) {
        badge.textContent = "¡Estamos tomando pedidos!";
        badge.classList.remove("closed");
        badge.classList.add("open");
    } else {
        badge.textContent = "Cocina cerrada por ahora";
        badge.classList.remove("open");
        badge.classList.add("closed");
    }
});