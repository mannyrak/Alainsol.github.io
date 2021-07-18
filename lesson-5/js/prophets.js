const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

/* Download the data */
fetch(requestURL)
    .then(function (response) {
        return response.json();
      })
    .then(function (jsonObject) {

        /* Downloaded data */
        const towns = jsonObject['towns'];

        /* -- Display town information -- */

        for (let i = 0; i < towns.length; i++ ) {

            let card = document.createElement('section');

            let weatherInfo = document.createElement('section');
            let title = document.createElement('h2');
            title.textContent ="Name: " + towns[i].name;

            let image = document.createElement('img');        
            image.setAttribute('src', '/lesson-5/image/' + towns[i].photo);

            let yearFounded = document.createElement("p");
            yearFounded.textContent = "Year Founded: " +  towns[i].yearFounded;

            let currentPopulation  = document.createElement("p");
            currentPopulation.textContent = "Current Population: " +  towns[i].currentPopulation;

            let averageRainfall = document.createElement("p");
            averageRainfall.textContent ="Average Rain Fall: " +  towns[i].averageRainfall;

            let events = document.createElement("p");
            events.textContent ="Events: " + towns[i].events.join(', ');
            
            

            card.appendChild(title);   
            card.appendChild(image); 
            card.appendChild(yearFounded)
            card.appendChild(currentPopulation); 
            
            card.appendChild(averageRainfall);          
            card.appendChild(events);

            document.querySelector('div.cards').appendChild(card);
        }

        

        /* ----- */

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

    





    