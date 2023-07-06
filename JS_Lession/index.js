let firstName = prompt("Enter your first name ");
let lastName = prompt("Enter your last name ")
let age = Number(prompt("Enter your age "));
let height = Number(prompt("Enter your height "));

let myCondition = null;

if (firstName == "Nurudeen" && lastName == "Ajani" && age == 26 && height == 70){
        myCondition = true;
}

if (myCondition) {
    alert("You just passed my spy test!");
}
