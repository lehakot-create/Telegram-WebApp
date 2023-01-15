const btn = document.querySelector('button')

btn.onclick = ()=>{
    alert(`Hello${WebApp.WebAppUser.initData}`)
}

const WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

// const initData = window.Telegram.WebApp.initData

