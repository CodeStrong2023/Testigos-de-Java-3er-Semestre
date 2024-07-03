 // Función para enviar un mensaje del usuario al chat
 function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += '<div class="user-message">' + userInput + '</div>';
    // Aquí puedes agregar la lógica para enviar el mensaje al backend del chat bot
    document.getElementById("user-input").value = ""; // Limpiar el campo de entrada después de enviar el mensaje
}