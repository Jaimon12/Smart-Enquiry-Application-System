function toggleChat(){

    let chatBox = document.getElementById("chatBox");

    if(chatBox.style.display === "block"){

        chatBox.style.display = "none";

    }else{

        chatBox.style.display = "block";
    }
}

/* Quick Button */

function sendMessage(text){

    let chatMessages =
    document.getElementById("chatMessages");

    let userMessage =
    document.createElement("div");

    userMessage.className =
    "message user";

    userMessage.innerHTML = text;

    chatMessages.appendChild(userMessage);

    botReply(text);
}

/* Input Message */

function sendInputMessage(){

    let input =
    document.getElementById("userInput");

    let text = input.value;

    if(text.trim() === ""){
        return;
    }

    sendMessage(text);

    input.value = "";
}

/* Bot Reply */

function botReply(text){

    let chatMessages =
    document.getElementById("chatMessages");

    let botMessage =
    document.createElement("div");

    botMessage.className =
    "message bot";

    /* Simple Auto Replies */

    if(text.toLowerCase().includes("application")){

        botMessage.innerHTML =
        "📄 You can apply using the application form.";

    }

    else if(text.toLowerCase().includes("course")){

        botMessage.innerHTML =
        "🎓 Multiple courses are available.";

    }

    else if(text.toLowerCase().includes("contact")){

        botMessage.innerHTML =
        "☎ Contact Support: +91 6238181480";

    }

    else{

        botMessage.innerHTML =
        "✅ Thank you for contacting us.";
    }

    setTimeout(() => {

        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop =
        chatMessages.scrollHeight;

    },500);
}