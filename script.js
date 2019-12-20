let currentId = 703448;

fetch(`http://api.openweathermap.org/data/2.5/weather?id=${currentId}&appid=06b22447af6aadbbcfca36d8858b287d`)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        init();
        console.log(data);
        document.querySelector('.city-name').value = data.name;
        let temperature = Math.round(data.main.temp - 273);
        let widget = document.querySelector('.widget_bg');
        document.querySelector('.temperature').innerHTML = temperature + '&deg;';
        document.querySelector('.description').textContent = data.weather[0]['description'];
        document.querySelector('.imageIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.wind-speed').innerHTML = 'wind speed: ' + data.wind.speed;

        document.querySelector('.temp').onclick = () => {
            let spec = ' degrees';
            if (temperature < 0) {
                spec += ' below zero';
            } else {
                spec += ' above zero';
            }
            alert('The current temperature is ' + temperature + spec);
        }

        function init() {
            let colors = ['#2DA1DB', '#F2B708', '#885194', '#94C34C', '#C0AEC7'];
            let range = document.querySelector('.range');
            range.onclick = () => {
                widget.style.background = colors[Math.floor(Math.random() * colors.length)];
            }
        }

        setTimeout(function () {
            document.querySelector('.cover').style.opacity = 0;
        }, 1000);

    })
    .catch(function () { });

let widget = document.querySelector('.widget_bg');
let addon = document.querySelector('.addon');
let wHeight = widget.clientHeight;
addon.style.height = widget.clientHeight + 150 + 'px';

/* influenced by IVAN LAZAREVIC'S jQuery snow http://workshop.rs/projects/jqsnow/ */
