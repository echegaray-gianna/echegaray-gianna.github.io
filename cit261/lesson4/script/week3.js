const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here

  //create a table

let table =  document.createElement("table");


//create a row

let headerRow = document.createElement("tr"); 

var keys = Object.keys(MOUNTAINS [0]);        //estamos agarrando el contenido del primer row (name, height...)

keys.forEach(key =>{
    let th = document.createElement("th");
    let heading = document.createTextNode(key);

    th.appendChild(heading);
    headerRow.append(th);
});


//append row to table

table.appendChild(headerRow);



/* for (var i= 0;  i < MOUNTAINS.length; i++) {        THIS IN ONE WAY
    MOUNTAINS [i];
} */



//loop through objects in array

MOUNTAINS.forEach(mountain => {
    //create a new row
    let tr = document.createElement("tr");

    //add name column
    let name = document.createElement("td");
    let nameText = document.createTextNode(mountain.name);
    name.appendChild(nameText);
    tr.appendChild(name);

    //add height column
    let height = document.createElement("td");
    let heightText = document.createTextNode(mountain.height);
    height.appendChild(heightText);
    tr.appendChild(height);

     //add place column
    let place = document.createElement("td");
    let placeText = document.createTextNode(mountain.place);
    place.appendChild(placeText);
    tr.appendChild(place);


    // add new row to table
    table.appendChild(tr);
});


//add table to document
document.getElementById("mountains").appendChild(table);