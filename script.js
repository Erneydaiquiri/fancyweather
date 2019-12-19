fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=06b22447af6aadbbcfca36d8858b287d')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').value = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.description').textContent = data.weather[0]['description'];
        document.querySelector('.imageIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {});

let widget = document.querySelector('.widget_bg');
let addon = document.querySelector('.addon');
let wHeight = widget.clientHeight;
addon.style.height = widget.clientHeight + 150 + 'px';