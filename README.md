GUIA GENERAL DE OPERACIONES Y SEGURIDAD - DONNY'S (GYB)
==========================================================

Bienvenido a la documentación oficial del proyecto Donny's. Esta guía recopila 
las mejores prácticas técnicas, de seguridad y de estrategia comercial desarrolladas 
para el crecimiento de tu negocio de donas artesanales en La Plata, Ensenada y Berisso.

1. ARQUITECTURA TÉCNICA Y ESTRUCTURA DEL PROYECTO
-------------------------------------------------
La página web es una Single Page Application (Landing Page) estática, optimizada para 
la conversión y diseñada con el patrón Glassmorphism.

Estructura de directorios:
/donnys
  ├── index.html        (Estructura HTML, Meta Tags, Analytics y sección FAQ)
  ├── /css
  │   └── style.css     (Estilos visuales, animaciones y diseño responsivo)
  └── /js
      └── main.js       (Lógica horaria y automatización de mensajes de WhatsApp)

2. SEGURIDAD Y BUENAS PRÁCTICAS WEB
-----------------------------------
- HTTPS Automático: Gestionado mediante GitHub Pages con certificado SSL activo.
- Enlaces Externos Seguros: Todos los enlaces salientes a plataformas de terceros 
  (como el botón de WhatsApp) incluyen los atributos 'target="_blank" rel="noopener noreferrer"' 
  para evitar vulnerabilidades de manipulación de pestañas (window.opener).
- Control de Repositorio: Se recomienda activar la Verificación en dos pasos (2FA) 
  en la cuenta de GitHub para evitar accesos no autorizados al código fuente.

3. ANALÍTICA Y MEDICIÓN DE TRÁFICO
----------------------------------
- Google Analytics 4 (GA4): Integrado mediante el Tag oficial en el <head> del HTML.
- ID de Medición Activo: G-8HCJR9X9NY.
- Permite medir en tiempo real el flujo de visitas, procedencia y comportamiento del usuario.

4. SEGURIDAD COMERCIAL Y OPERATIVA
-----------------------------------
- Prevención de Fraudes en Cobros: Al operar con Mercado Pago, transferencias o efectivo, 
  nunca despachar mercadería ni coordinar envíos basándose únicamente en la foto del comprobante 
  enviado por chat; verificar siempre que el dinero haya impactado efectivamente en la cuenta.
- Protección de Cuentas: Habilitar la verificación en dos pasos en WhatsApp Business e 
  Instagram para evitar suplantación de identidad (phishing) y proteger la reputación de la marca.
- Propiedad Legal: Proyección de registro de marca en el INPI (Clase 30) y adquisición 
  de dominio propio (.com.ar) mediante NIC Argentina.
