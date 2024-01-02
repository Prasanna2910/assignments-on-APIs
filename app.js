// Progression 1: create a function and fetch the api using axios
let url =
  'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=ea8ccbc52f147e55975bbbd7bc366cd0';

function getData() {
  fetch(url)
    .then(function (result) {
      return result.json();
    })
    .then(function (finalResponse) {
      console.log('Success data fetch', finalResponse.articles);
      let dataSpread = [...finalResponse.articles];
      display(dataSpread);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
getData();

function display(data) {
  let container = document.getElementById('container');
  data.forEach(function (element, index) {
    container.innerHTML += `
        <div >
          <h1>${element.title}</h1>
          <img src='${element.image}' alt='${element.image}'/>
          <p>${element.content}<p>
        </div>
    `;
  });
}
