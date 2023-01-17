const btn = document.querySelector('button')

btn.onclick = ()=>{
    let WebApp = window.Telegram.WebApp;
    WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

    alert(`Hello from telegram`)
    const initData = window.Telegram.WebApp.initData
    console.log(initData)
    alert(initData)
}

let WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

