const btn = document.querySelector('button')

btn.onclick = ()=>{
    alert('Hello user')
}

const WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);