function save() {

    let fullName = document.getElementById('fname').value;
    let companyName = document.getElementById('cname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let eventName = document.getElementById('ename').value;
    let street = document.getElementById('estreet').value;
    let city = document.getElementById('ecity').value;
    let zipCode = document.getElementById('ezip').value;
    let eventDate = document.getElementById('edate').value;
    let startTime = document.getElementById('etime').value;
    let endTime = document.getElementById('eendtime').value;
    let description = document.getElementById('edescription').value;

    localStorage.setItem('textOne', fullName);
    localStorage.setItem('textTwo', companyName);
    localStorage.setItem('textThree', email);
    localStorage.setItem('textFour', phone);
    localStorage.setItem('textFive', eventName);
    localStorage.setItem('textSix', street);
    localStorage.setItem('textSeven', city);
    localStorage.setItem('textEight', zipCode);
    localStorage.setItem('textNine', eventDate);
    localStorage.setItem('textTen', startTime);
    localStorage.setItem('texTElev', endTime);
    localStorage.setItem('textTwel', description);

}

function load() {

    var storedName = localStorage.getItem('textOne');
    var storedCompay = localStorage.getItem('textTwo');
    var storedEmail = localStorage.getItem('textThree');
    var storedPhone = localStorage.getItem('textFour');
    var storedEName = localStorage.getItem('textFive');
    var storedStreet = localStorage.getItem('textSix');
    var storedCity = localStorage.getItem('textSeven');
    var storedZipCode = localStorage.getItem('textEight');
    var storedDate= localStorage.getItem('textNine');
    var storedTime = localStorage.getItem('textTen');
    var storedEndTime = localStorage.getItem('texTElev');
    var storedDescription = localStorage.getItem('textTwel');


    if (storedName && storedCompay && storedEmail && storedPhone && storedEName && storedStreet &&
        storedCity && storedZipCode && storedDate && storedTime && storedEndTime &&
        storedDescription ) {

        document.getElementById('fname').value = storedName;
        document.getElementById('cname').value = storedCompay;
        document.getElementById('email').value = storedEmail;
        document.getElementById('phone').value = storedPhone;
        document.getElementById('ename').value = storedEName;
        document.getElementById('estreet').value = storedStreet;
        document.getElementById('ecity').value = storedCity;
        document.getElementById('ezip').value = storedZipCode;
        document.getElementById('edate').value = storedDate;
        document.getElementById('etime').value = storedTime;
        document.getElementById('eendtime').value = storedEndTime;
        document.getElementById('edescription').value = storedDescription;
    }
}


function remove() {
    document.getElementById('fname').value = '';
    document.getElementById('cname').value = '';
   document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('ename').value = '';
    document.getElementById('estreet').value = '';
    document.getElementById('ecity').value = '';
    document.getElementById('ezip').value = '';
    document.getElementById('edate').value = '';
    document.getElementById('etime').value = '';
    document.getElementById('eendtime').value = '';
    document.getElementById('edescription').value = '';


    localStorage.removeItem('textOne');
    localStorage.removeItem('textTwo');
    localStorage.removeItem('textThree');
    localStorage.removeItem('textFour');
    localStorage.removeItem('textFive');
    localStorage.removeItem('textSix');
    localStorage.removeItem('textSeven');
    localStorage.removeItem('textEight');
    localStorage.removeItem('textNine');
    localStorage.removeItem('textTen');
    localStorage.removeItem('textElev');
    localStorage.removeItem('textTwel');
}

