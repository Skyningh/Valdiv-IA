**Sistema bajo prueba:** Chatbot Valdiv-IA
**Actores involucrados:** Esperanza Tejeda, Edgardo Dorner


**Caso de Prueba 1: Enviar mensaje**

**Referencia:** https://youtu.be/vC4t4p3sAKg

**ID**: CP-01

**Descripción:** Verificar que el usuario puede escribir y enviar un mensaje, y que este se visualiza correctamente en la interfaz del chat.

**Supuestos:**
- El usuario está registrado en el sistema.

**Datos de prueba**
- Mensaje de ejemplo: "Este es un mensaje automatizado"

**Pasos:**
1. El usuario inicia sesión e ingresa a la interfaz del chatbot.
2. El usuario escribe un mensaje en el campo de texto.
3. El usuario envía el mensaje presionando la tecla Enter.

**Resultado esperado:**
- El mensaje enviado aparece visualmente en la interfaz del chat.
- El mensaje se muestra en la posición y estilo correctos (burbuja de usuario).

**Resultado real:**
- El mensaje se muestra correctamente en la interfaz de chat, en la posición y con el estilo correcto.

**Estado**: Pass

**Caso de Prueba 2: Recuperar última sesión de chat**

**Referencia:** https://youtu.be/Zrag0ITGblE

**ID**: CP-02

**Descripción:** Verificar que al volver al chatbot, el sistema carga y muestra correctamente la última sesión de conversación del usuario.

**Supuestos:**
- El usuario está registrado y ha tenido al menos una sesión de chat previa.
- El usuario ha cerrado sesión.

**Datos de prueba:**
- Al menos una sesión de chat previa registrada en el sistema.

**Pasos:**
1. El usuario inicia sesión e ingresa a la interfaz del chatbot.
2. El sistema recupera y carga la última sesión.

**Resultado esperado:**
- Los mensajes de la sesión anterior se muestran en la interfaz.
- El historial conserva el orden cronológico correcto.

**Resultado real:**
- La sesión se recupera correctamente, mostrando los mensajes previamente enviados.

**Estado**: Pass
