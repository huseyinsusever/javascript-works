const infoList = document.getElementById('info')
const info = [
            `Scanner: ${navigator.appName}`,
            `Scanner Version: ${navigator.appVersion}`,
            `Language: ${navigator.language}`,
            `Cookies Activite :${navigator.cookieEnabled}`,
            `Online : ${navigator.online}`
        ];

        info.forEach(item => {
            const li= document.createElement('li');
            li.textContent = item;
            infoList.appendChild(li);
        });