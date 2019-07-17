//set info and call

// let firtsName = "Gianna";
// let lastName = "Echegaray";
// let iNumber = "123456789";


// function logToConsole(fName, lName, iNum) {
//     console.log(fName);
//     console.log(lName);
//     console.log(iNum);

// }

// logToConsole(firtsName, lastName, iNumber);

// OTRO METODO CREANDO UNA CLASE

// class Student { 
//     constructor(firtsName,lastName,iNumber) {
//         this.firtsName = firtsName;                   //now we call this a property
//         this.lastName = lastName;
//         this.iNumber = iNumber;
//     }
// }

// let student1 = new Student("Ben", "Hunt", "462158");
// logToConsole(student1);

// function logToConsole(student) {
//     console.log(student.firtsName);
//     console.log(student.lastName);
//     console.log(student.iNumber);
// }


// OTRA FORMA

// class Student { 
//     constructor(firtsName,lastName,iNumber) {
//         this.firtsName = firtsName;                   //now we call this a property
//         this.lastName = lastName;
//         this.iNumber = iNumber;
//     }

//     log = function() {
//         console.log(this.firtsName);
//         console.log(this.lastName);
//         console.log(this.iNumber);
//     };
// }

// let student1 = new Student("Ben", "Hunt", "462158");
// student1.log();

// let student2 = new Student("Lila", "Chen", "521487");
// student2.log();


// WITH ARRAW

class Student { 
    constructor(firtsName,lastName,iNumber) {
        this.firtsName = firtsName;                   //now we call this a property
        this.lastName = lastName;
        this.iNumber = iNumber;
    }

    log = function() {
        console.log(this.firtsName);
        console.log(this.lastName);
        console.log(this.iNumber);
    };
}

let students = [];

let student1 = new Student("Ben", "Hunt", "462158");
let student2 = new Student("Lila", "Chen", "521487");

students.push(student1);
students.push(student2);

var studentTable = document.querySelector("#students");
students.forEach(                                                             //another way. >> see below
    student => {
        trStudent = document.createElement("tr");
        tdFirtsName = document.createElement("td");
        tdLastName = document.createElement("td");
        tdINumber = document.createElement("td");
 
        tdFirtsName.innerText = student.firtsName;
        tdLastName.innerText = student.lastName;
        tdINumber.innerText = student.iNumber;

        trStudent.appendChild(tdFirtsName);
        trStudent.appendChild(tdLastName);
        trStudent.appendChild(tdINumber);

        studentTable.appendChild(trStudent);
    }
);

//>> other way forEach
// for (let i =0; i < students.length; i++)  {
//     let student = students[i];
// }