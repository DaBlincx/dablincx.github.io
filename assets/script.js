const themeSwitcher = document.querySelector('.theme-switcher');

function addCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for(let i=0;i < cookies.length;i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0)==' ') {
            cookie = cookie.substring(1,cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length,cookie.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        addCookie('theme', 'dark', 100);
        themeSwitcher.innerHTML = '☀️';
    } else {
        eraseCookie('theme');
        themeSwitcher.innerHTML = '🌙';
    }
});

if (getCookie('theme') === 'dark') {
    document.body.classList.add('dark');
    themeSwitcher.innerHTML = '☀️';
} else {
    themeSwitcher.innerHTML = '🌙';
}