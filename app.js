window.addEventListener('load', () => {
    let key = 'f52d491af0f3cd0a2686235c7d04aacf';

    // Elementos HTML
    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('icono-animado');
    let vientoVelocidad = document.getElementById('viento-velocidad');
    let selectDepartamento = document.getElementById('departamento');

    // Función para actualizar el clima
    function actualizarClima(ciudad) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},BO&lang=es&units=metric&appid=${key}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let temp = Math.round(data.main.temp);
                temperaturaValor.textContent = `${temp} °C`;

                let desc = data.weather[0].description;
                temperaturaDescripcion.textContent = desc.toUpperCase();
                ubicacion.textContent = data.name;

                vientoVelocidad.textContent = `${data.wind.speed} m/s`;

                // Iconos dinámicos basados en el clima
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                        iconoAnimado.src = 'animated/thunder.svg';
                        break;
                    case 'Drizzle':
                        iconoAnimado.src = 'animated/rainy-2.svg';
                        break;
                    case 'Rain':
                        iconoAnimado.src = 'animated/rainy-7.svg';
                        break;
                    case 'Snow':
                        iconoAnimado.src = 'animated/snowy-6.svg';
                        break;
                    case 'Clear':
                        iconoAnimado.src = 'animated/day.svg';
                        break;
                    case 'Atmosphere':
                        iconoAnimado.src = 'animated/weather.svg';
                        break;
                    case 'Clouds':
                        iconoAnimado.src = 'animated/cloudy-day-1.svg';
                        break;
                    default:
                        iconoAnimado.src = 'animated/cloudy-day-1.svg';
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    function actualizar(){
    let ciudadSeleccionada = selectDepartamento.value;
    actualizarClima(ciudadSeleccionada);
    }
    
    // Cargar el clima para la primera opción por defecto
    actualizarClima(selectDepartamento.value);
});
