function calculate() {  //we are conecting with html file
    var firstNumber = document.getElementById("number1").value;  //get the value tht user insert
    // console.log(firstNumber) -- see if we get the value. Proof
    
     var sum = count(firstNumber); //we created this to pass the number
    



    //place value in div
    document.getElementById("div1").innerHTML = firstNumber 
}

function count(startingNumber){
     
    //Add 1 to startingNumber
    
    var returnValue = 0;

    for(var i = 1; 1 <= startingNumber; i++){
     
        returnValue = returnValue + i;  //short way: returnValue += i;
    }
}


//we can use: var - let - const ----- we cant change the value with const 

/* differents way to create a FUNCTION:
  
   const add = function(number1, number2) {
       return number1+ number2;
   }
  
   const addArrow = (number1, number2) => {
       number1 + number2;
   }

     */


/* OBJECT  - CLASS */
/*
var firstName;
var lastName;
var iNumber;
var mobilePhone;
var homePhone;

function savestudent( firstName, lastName, iNumber, .....)


OR 

const student = {                      // we call this object               
    firstName: "Tim",                  // this is a property
    lastName: "Geret",
    iNumber: 784512,
    mobilePhone: 452-458-7894,
    homePhone: 789-456-1234,
}

//we wrap all the var... all these (firstName, lastName,... ) are properies 

function savestudent(student) {
    console.log(student.firstName);
}

*/

/* METHOD */
/*
const student = {                                  
    firstName: "Tim",                 
    lastName: "Geret",
    iNumber: 784512,
    mobilePhone: 452-458-7894,
    homePhone: 789-456-1234,

    add: function(number1, number2) {    //because this is a function it is not a property
        return number1 + number2;        // it is a method
    }
}


function savestudent(student) {
    student.add();                 //here we call that function (method)
}

*/

