const openChat = document.querySelector(".chat-widget");

openChat.addEventListener("click", () => {
    openChat.classList.add("chat-widget_active");
});

const input = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");
const chatContainer = document.querySelector(".chat-widget__messages-container");


function questionAfterWait() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    messages.innerHTML += `<div class="message">
    <div class="message__time">${addZero(hours)}:${addZero(minutes)}</div>
    <div class="message__text">
      Могу-чем нибудь помочь ?
    </div>
  </div>`
};

function waiting() {
    let count = 30;
    let idInt = setInterval(() => {
        count--
        if (count === 0) {
            clearInterval(idInt);
        }
        if (count === 0 && messages.children.length === 0) {
            questionAfterWait();
        };
    }, 1000);
};

waiting();

function addZero(num) {
    if (num < 10) {
        num = "0" + num
    }

    return num;
};

input.addEventListener("change", () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    messages.innerHTML += `<div class="message message_client">
    <div class="message__time">${addZero(hours)}:${addZero(minutes)}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>`

    messages.innerHTML += `<div class="message">
    <div class="message__time">${addZero(hours)}:${addZero(minutes)}</div>
    <div class="message__text">
      ${getWord()}
    </div>
  </div>`

    input.value = "";

    chatContainer.scrollTop = chatContainer.scrollHeight;
});

function getWord() {
    const words = [
        'Добрый день',
        'Какие то проблемы ?',
        'Давай позовем Алису и Siri, поиграем в двоичный год ;)',
        'У тебя сомнения не понял ?',
        'Достанешь до логтя языком ?',
        'завязывай уже',
        'Могу тебе скинуть сайт +18, раслабишься',
        'Могу записать тебя к психолгу',
        'скину тебе номер банковской карты, диалог завяжется',
        'Что думаешь по поводу глобального потепления...',
        'Думаю преподаватели мало приводят примеров',
    ],
        index = Math.floor(Math.random() * words.length);

    return words[index];
};



