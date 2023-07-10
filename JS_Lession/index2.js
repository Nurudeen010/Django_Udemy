var names = ["jose", "sam", "kunle"]

function Add(){
    var firstInput = prompt("Add your name to the list: ")
    names.push(firstInput)
}

function Remove(){
    var removeImput = prompt("Input the name from the list: ")
    var index = names.includes(removeImput)
    names.splice(index, 1)
}

var Start = prompt("Start your web app by select y or N")
var Request = "Empty"

if (Start == "y"){
    while 
}
