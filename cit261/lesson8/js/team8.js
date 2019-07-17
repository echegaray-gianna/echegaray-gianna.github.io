
// var starWarsPeople = new XMLHttpRequest();
// starWarsPeople.open("GET","https://swapi.co/api/people/", true);
// starWarsPeople.send();

// starWarsPeople.onload = function() {
//     var people = JSON.parse(starWarsPeople.responseText);
//     console.log(people);

// }

// fetch('https://swapi.co/api/people/')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });

// Short cut to do it

function getPeople(url) {

if (!url) {
  url = 'https://swapi.co/api/people/';
}


let table = document.querySelector('table'); // looking for something in out html


fetch(url)
  .then(
    (response) => {    //could be anything not response. Here we store the promise in a variable
      response.json()  //.json is a method to get the date from the promise
        .then(
          (people) => {

            //output list
            people.results.forEach(    //  podemos usar esto porque result es una array.
              (person) => {
                let row = document.createElement('tr');   //create a row

                let name = document.createElement('td');  //create the td tag
                name.textContent = person.name;  //we add content to the td tag

                //if we want to add another one
                let mass = document.createElement('td');
                mass.textContent = person.mass;

                row.appendChild(name);
                row.appendChild(mass);

                table.appendChild(row);
              }
            );

            //work on buttons

console.log(people);


          }
        )
    }
  )
  .catch();
  
  };
