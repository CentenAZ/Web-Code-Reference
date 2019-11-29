function colorJS() {
    var text = document.getElementById("inputInfo").value;
    console.log("Value:  " + text);
    var color = document.getElementById("colorSelection").value;
    console.log(color);

    document.getElementById("colorPrint").innerText = text;
    document.getElementById("colorPrint").style.color = color;
}