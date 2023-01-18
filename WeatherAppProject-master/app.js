var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var temp_value = document.querySelector('.temp_value');
var guesbottom = document.querySelector('.guess-bottom')

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=9effb470cd867cdfdf8f0e2b39dac9b1')
        .then(response => response.json())
        .then(data => {
            var tempValue = Math.round(parseFloat(data['main']['temp']) - 273.15) + '&#8451';
            var descValue = data['weather'][0]['main'];

            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;

            console.log(descValue)

            switch (true) {
                case descValue == "Clear": document.getElementById("icon").innerHTML = "<img src='weather_images/clear.png' style=' width:150px; height:150px' >"; break;
                case descValue == "Clouds": document.getElementById("icon").innerHTML = "<img src='weather_images/clouds.png' style='width:150px; height:150px'>"; break;
                case descValue == "Rain": document.getElementById("icon").innerHTML = "<img src='weather_images/rainy.png' style=' width:150px; height:150px'>"; break;
                case descValue == "Snow": document.getElementById("icon").innerHTML = "<img src='weather_images/snow.png' style=' width:150px; height:150px'>"; break;
                case descValue == "Haze": document.getElementById("icon").innerHTML = "<img src='weather_images/haze.png' style=' width:150px; height:150px'>"; break;
            }

    })

.catch(err => alert("Böyle bir şehir bulunamamıştır."))

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&appid=9effb470cd867cdfdf8f0e2b39dac9b1')
        .then(response => response.json())
        .then(data => {

            for (var i = 0; i < 5; i++) {
                var tValue = Math.round(parseFloat(data['list'][i]['main']['temp']) - 273.15) + '°C';
                var dValue = data['list'][i]['weather'][0]['main'];

                let dizi = [];
                dizi[i] = tValue;

      
                guesbottom.children[i].children[2].innerText = dizi[i];

                switch(true){
                    case dValue == "Clear" : guesbottom.children[i].children[1].innerHTML = "<img src='weather_images/clear.png' style=' width:25px; height:25px; padding:20px'>"; break;
                    case dValue == "Clouds" : guesbottom.children[i].children[1].innerHTML = "<img src='weather_images/clouds.png' style=' width:25px; height:25px; padding:20px'>"; break;
                    case dValue == "Rain": guesbottom.children[i].children[1].innerHTML = "<img src='weather_images/rainy.png' style=' width:25px; height:25px; padding:20px'>"; break;
                    case dValue == "Snow": guesbottom.children[i].children[1].innerHTML = "<img src='weather_images/snow.png' style=' width:25px; height:25px; padding:20px'>"; break;
                    case dValue == "Haze": guesbottom.children[i].children[1].innerHTML = "<img src='weather_images/haze.png' style=' width:25px; height:25px; padding:20px'>"; break;
                }
         
                console.log(dizi)
                console.log(dValue)

            }

           
        })
    })