const row = document.querySelector('.row');

const renderCards = (array) => {
    array.forEach(element => {
        const name = element.name.official
        let currencies = null
        if (!element.currencies) {
            currencies = '-'
        } else {
            currencies = Object.values(element.currencies).map(item => item.symbol + ' ' + item.name).join(', ');
        }
        let languages = null
        if (!element.languages){
            languages = '-'
        } else {
            languages = Object.values(element.languages).join(', ');
        }
        const flags = element.flags.svg
        let population = element.population
        const region = element.region
        if (!population) {
            population = '-';
        } else {
            population = (population / 1000000).toFixed(2)
        }

        row.insertAdjacentHTML("beforeend", `
        <div class="col">
              <div class="card h-100">
                <img src="${flags}" class="card-img-top" alt="${name}">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${region}</p>
                  <p class="card-text">&#128106 ${population} млн</p>
                  <p class="card-text">	&#128483 ${languages}</p>
                  <p class="card-text">&#128176 ${currencies}</p>
                </div>
              </div>
            </div>
        `)
    });
}


fetch('https://restcountries.com/v3.1/all')
.then((response) =>  response.json())
.then((array) => {
    renderCards(array);
})