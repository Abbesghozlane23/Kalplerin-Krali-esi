function showSurprise() {
    alert("مفاجأة! أحبك جدًا ❤️");
}

function addMessage() {
    let message = document.getElementById('messageInput').value;
    if (message.trim() !== "") {
        let messagesList = document.getElementById('messagesList');
        let newMessage = document.createElement('p');
        newMessage.textContent = message;
        messagesList.appendChild(newMessage);
        document.getElementById('messageInput').value = "";
    }
}

function countdown() {
    let birthday = new Date("2025-03-10T00:00:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = birthday - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + " يوم " + hours + " ساعة "
        + minutes + " دقيقة " + seconds + " ثانية ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "عيد ميلاد سعيد! 🎉";
        }
    }, 1000);
}

window.onload = countdown;
