const btn = document.querySelector('button')

btn.onclick = ()=>{
    alert(`Hello${WebApp.WebAppUser.username}`)
}

const WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);