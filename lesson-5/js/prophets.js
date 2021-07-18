const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

/* Download the data */
fetch(requestURL)
    .then(function (response) {
        return response.json();
      })
    .then(function (jsonObject) {

        /* Downloaded data */
        const towns = jsonObject['towns'];

        /* Get town weather data */
        for (let i = 0; i < towns.length; i++ ) {
            const cityName = towns[i].name;
            const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName +',Idaho&appid=910d455d37252cea79740dddb96bcf43';
            /* Download the data */
            fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {
                /* Downloaded data */
                const weatherData = jsonObject;
                console.log(weatherData);
            });  
        }

      });

    





    