function writeSomething() {
    var newDiv = document.createElement("div");
    newDiv.id = "myNewDiv";
    newDiv.innerText = "This is a dynamic element. Understand this";
    document.getElementById("myBody").appendChild(newDiv);
}

function createElement() {
    var newDIVCreation = document.createElement("div");
    newDIVCreation.id = "generateNewDiv"
    newDIVCreation.innerText = "This is a generated <div> with text like this."
    document.getElementById("myBody").appendChild(newDIVCreation);
}