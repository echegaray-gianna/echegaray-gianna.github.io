import {Student} from './online5';

let students = [];

let student1 = new Student("Ben", "Hunt", "462158");
let student2 = new Student("Lila", "Chen", "521487");

students.push(student1);   //push on the array >> let student = []
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

        student.log();
    }
);
© 2019 GitHub, Inc.