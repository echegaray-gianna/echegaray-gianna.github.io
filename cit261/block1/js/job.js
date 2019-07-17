
function output() {
    let jobTitle = document.getElementById("inputBox1").value;
    let department = document.getElementById("inputBox2").value;
    let years= document.getElementById("inputBox3").value;
    let skills = document.getElementById("inputBox4").value;
    let description = document.getElementById("inputBox5").value;

    let box1 = document.getElementById("top").innerHTML = jobTitle;
    let box2 = document.getElementById("one").innerHTML = department;
    let box3 = document.getElementById("two").innerHTML = years;
    let box4 = document.getElementById("three").innerHTML = skills;
    let box5 = document.getElementById("four").innerHTML = description;

};

