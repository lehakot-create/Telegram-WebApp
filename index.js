const btn = document.querySelector('button')

btn.onclick = ()=>{
    alert('Hello user')
}

const WebApp = document.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);