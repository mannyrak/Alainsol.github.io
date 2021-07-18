const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

/* Download the data */
fetch(requestURL)
    .then(function (response) {
        return response.json();
      })
    .then(function (jsonObject) {

        /* Downloaded data */
        const prophets = jsonObject['prophets'];

        /* Display on the HTML */
        for (let i = 0; i < prophets.length; i++ ) {

            let card = document.createElement('section');
            let title = document.createElement('h2');
            title.textContent = prophets[i].name + ' ' + prophets[i].lastname;

            let birthdate = document.createElement("p");
            dateOfBirth.textContent = prophets[i].birthdate;

            let birthplace  = document.createElement("p");
            birthplace.textContent = prophets[i].birthplace;

            let order = document.createElement("p");
            orderrank.textContent = prophets[i].order;

        
            
            let image = document.createElement('img');
            
            image.setAttribute('src', prophets[i].imageurl);

            card.appendChild(title);            
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }

      });

    