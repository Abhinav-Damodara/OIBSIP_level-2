function appendCharacter(character) {
    document.getElementById("display").innerText += character;
}

function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function deleteLastCharacter() {
    var display = document.getElementById("display").innerText;
    document.getElementById("display").innerText = display.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById("display").innerText;
    var result = eval(expression);
    document.getElementById("display").innerText = result;
}
