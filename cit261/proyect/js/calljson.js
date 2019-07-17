let eventSlc = document.querySelector('.event-slc');

fetch('event.json')
    .then(
        (response) => {    //could be anything not response. Here we store the promise in a variable
            response.json()  //.json is a method to get the date from the promise
                .then(
                    (eventOne) => {
                        eventOne.SlcEvent.forEach(
                            (infoSlc) => {

                                let slcTHead = document.createElement('thead');
                                let slcName = document.createElement('th');

                                let slcTBody = document.createElement('tbody');
                                let slcPlaceTr = document.createElement('tr');
                                let slcPlace = document.createElement('td');
                                let slcPlaceInfo = document.createElement('td');

                                let slcDateTr = document.createElement('tr');
                                let slcDate = document.createElement('td');
                                let slcDateInfo = document.createElement('td');

                                let slcHourTr = document.createElement('tr');
                                let slcHour = document.createElement('td');
                                let slcHourInfo = document.createElement('td');



                                slcName.innerText = infoSlc.name;
                                slcPlaceInfo.innerText = infoSlc.place;
                                slcDateInfo.innerText = infoSlc.date;
                                slcHourInfo.innerText = infoSlc.hour;

                                slcPlace.textContent += 'Where:';
                                slcDate.textContent += 'When:';
                                slcHour.textContent += 'Time:';


                                slcTHead.setAttribute('class', 'eThead');
                                slcName.setAttribute('class', 'eName');
                                slcName.setAttribute('colspan', '2')

                                slcTBody.setAttribute('class', 'eTbody');
                                slcPlaceTr.setAttribute('class', 'eTr');
                                slcPlace.setAttribute('class', 'eTd');
                                slcPlaceInfo.setAttribute('class', 'eITd');

                                slcDateTr.setAttribute('class', 'eTr');
                                slcDate.setAttribute('class', 'eTd');
                                slcDateInfo.setAttribute('class', 'eITd');

                                slcHourTr.setAttribute('class', 'eTr');
                                slcHour.setAttribute('class', 'eTd');
                                slcHourInfo.setAttribute('class', 'eITd');



                                slcTHead.appendChild(slcName);

                                slcTBody.appendChild(slcPlaceTr);
                                slcTBody.appendChild(slcDateTr);
                                slcTBody.appendChild(slcHourTr);

                                slcPlaceTr.appendChild(slcPlace);
                                slcPlaceTr.appendChild(slcPlaceInfo);
                                slcDateTr.appendChild(slcDate);
                                slcDateTr.appendChild(slcDateInfo);
                                slcHourTr.appendChild(slcHour);
                                slcHourTr.appendChild(slcHourInfo);


                                eventSlc.appendChild(slcTHead);
                                eventSlc.appendChild(slcTBody);


                            }
                        );

                        console.log(eventOne);
                    }
                )
        }
    )
    .catch();

let eventPro = document.querySelector('.event-pro');

fetch('event.json')
    .then(
        (response) => {    //could be anything not response. Here we store the promise in a variable
            response.json()  //.json is a method to get the date from the promise
                .then(
                    (eventTwo) => {
                        eventTwo.ProEvent.forEach(
                            (infoPro) => {

                                let proTHead = document.createElement('thead');
                                let proName = document.createElement('th');

                                let proTBody = document.createElement('tbody');
                                let proPlaceTr = document.createElement('tr');
                                let proPlace = document.createElement('td');
                                let proPlaceInfo = document.createElement('td');

                                let proDateTr = document.createElement('tr');
                                let proDate = document.createElement('td');
                                let proDateInfo = document.createElement('td');

                                let proHourTr = document.createElement('tr');
                                let proHour = document.createElement('td');
                                let proHourInfo = document.createElement('td');



                                proName.innerText = infoPro.name;
                                proPlaceInfo.innerText = infoPro.place;
                                proDateInfo.innerText = infoPro.date;
                                proHourInfo.innerText = infoPro.hour;

                                proPlace.textContent += 'Where:';
                                proDate.textContent += 'When:';
                                proHour.textContent += 'Time:';


                                proTHead.setAttribute('class', 'eThead');
                                proName.setAttribute('class', 'eName');
                                proName.setAttribute('colspan', '2')

                                proTBody.setAttribute('class', 'eTbody');
                                proPlaceTr.setAttribute('class', 'eTr');
                                proPlace.setAttribute('class', 'eTd');
                                proPlaceInfo.setAttribute('class', 'eITd');

                                proDateTr.setAttribute('class', 'eTr');
                                proDate.setAttribute('class', 'eTd');
                                proDateInfo.setAttribute('class', 'eITd');

                                proHourTr.setAttribute('class', 'eTr');
                                proHour.setAttribute('class', 'eTd');
                                proHourInfo.setAttribute('class', 'eITd');



                                proTHead.appendChild(proName);

                                proTBody.appendChild(proPlaceTr);
                                proTBody.appendChild(proDateTr);
                                proTBody.appendChild(proHourTr);

                                proPlaceTr.appendChild(proPlace);
                                proPlaceTr.appendChild(proPlaceInfo);
                                proDateTr.appendChild(proDate);
                                proDateTr.appendChild(proDateInfo);
                                proHourTr.appendChild(proHour);
                                proHourTr.appendChild(proHourInfo);


                                eventPro.appendChild(proTHead);
                                eventPro.appendChild(proTBody);


                            }
                        );

                        console.log(eventTwo);
                    }
                )
        }
    )
    .catch();


let eventPci = document.querySelector('.event-pci');

fetch('event.json')
    .then(
        (response) => {    //could be anything not response. Here we store the promise in a variable
            response.json()  //.json is a method to get the date from the promise
                .then(
                    (eventThree) => {
                        eventThree.ProEvent.forEach(
                            (infoPci) => {

                                let pciTHead = document.createElement('thead');
                                let pciName = document.createElement('th');

                                let pciTBody = document.createElement('tbody');
                                let pciPlaceTr = document.createElement('tr');
                                let pciPlace = document.createElement('td');
                                let pciPlaceInfo = document.createElement('td');

                                let pciDateTr = document.createElement('tr');
                                let pciDate = document.createElement('td');
                                let pciDateInfo = document.createElement('td');

                                let pciHourTr = document.createElement('tr');
                                let pciHour = document.createElement('td');
                                let pciHourInfo = document.createElement('td');



                                pciName.innerText = infoPci.name;
                                pciPlaceInfo.innerText = infoPci.place;
                                pciDateInfo.innerText = infoPci.date;
                                pciHourInfo.innerText = infoPci.hour;

                                pciPlace.textContent += 'Where:';
                                pciDate.textContent += 'When:';
                                pciHour.textContent += 'Time:';


                                pciTHead.setAttribute('class', 'eThead');
                                pciName.setAttribute('class', 'eName');
                                pciName.setAttribute('colspan', '2')

                                pciTBody.setAttribute('class', 'eTbody');
                                pciPlaceTr.setAttribute('class', 'eTr');
                                pciPlace.setAttribute('class', 'eTd');
                                pciPlaceInfo.setAttribute('class', 'eITd');

                                pciDateTr.setAttribute('class', 'eTr');
                                pciDate.setAttribute('class', 'eTd');
                                pciDateInfo.setAttribute('class', 'eITd');

                                pciHourTr.setAttribute('class', 'eTr');
                                pciHour.setAttribute('class', 'eTd');
                                pciHourInfo.setAttribute('class', 'eITd');



                                pciTHead.appendChild(pciName);

                                pciTBody.appendChild(pciPlaceTr);
                                pciTBody.appendChild(pciDateTr);
                                pciTBody.appendChild(pciHourTr);

                                pciPlaceTr.appendChild(pciPlace);
                                pciPlaceTr.appendChild(pciPlaceInfo);
                                pciDateTr.appendChild(pciDate);
                                pciDateTr.appendChild(pciDateInfo);
                                pciHourTr.appendChild(pciHour);
                                pciHourTr.appendChild(pciHourInfo);


                                eventPci.appendChild(pciTHead);
                                eventPci.appendChild(pciTBody);


                            }
                        );

                        console.log(eventThree);
                    }
                )
        }
    )
    .catch();