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
            let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            
            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);

            card.appendChild(h2);            
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }

      });

    