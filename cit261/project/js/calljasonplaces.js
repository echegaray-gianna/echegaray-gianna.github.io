let placesSlc = document.querySelector('.places-slc');


fetch('places.json')
    .then(
        (response) => {    //could be anything not response. Here we store the promise in a variable
            response.json()  //.json is a method to get the date from the promise
                .then(
                    (placeOne) => {
                        placeOne.SlcPlaces.forEach(
                            (infoSlc) => {

                                let slcName = document.createElement('h3');
                                let slcText = document.createElement('p');
                                let slcPic = document.createElement('img');
                                
                                slcName.innerText = infoSlc.name;
                                slcText.innerText = infoSlc.description;
                            
                                slcName.setAttribute('class', 'placeName');
                                slcText.setAttribute('class', 'placeText');
                                
                                placesSlc.appendChild(slcName);
                                placesSlc.appendChild(slcText);
                            
                            }
                        );

                        console.log(placeOne);
                    }
                )
        }
    )
    .catch();

let placesPro = document.querySelector('.places-pro');

fetch('places.json')
    .then(
        (response) => {    //could be anything not response. Here we store the promise in a variable
            response.json()  //.json is a method to get the date from the promise
                .then(
                    (placeTwo) => {
                        placeTwo.ProPlaces.forEach(
                            (infoPro) => {

                                let proName = document.createElement('h3');
                                let proText = document.createElement('p');

                                proName.innerText = infoPro.name;
                                proText.innerText = infoPro.description;

                                proName.setAttribute('class', 'placeName');
                                proText.setAttribute('class', 'placeText');

                                placesPro.appendChild(proName);
                                placesPro.appendChild(proText);

                            }
                        );

                        console.log(placeTwo);
                    }
                )
        }
    )
    .catch();

let placesPci = document.querySelector('.places-pci');

fetch('places.json')
    .then(
        (response) => {    //could be anything not response. Here we store the promise in a variable
            response.json()  //.json is a method to get the date from the promise
                .then(
                    (placeThree) => {
                        placeThree.PciPlaces.forEach(
                            (infoPci) => {

                                let pciName = document.createElement('h3');
                                let pciText = document.createElement('p');

                                pciName.innerText = infoPci.name;
                                pciText.innerText = infoPci.description;

                                pciName.setAttribute('class', 'placeName');
                                pciText.setAttribute('class', 'placeText');

                                placesPci.appendChild(pciName);
                                placesPci.appendChild(pciText);

                            }
                            );

                        console.log(placeThree);
                    }
                )
        }
    )
    .catch();