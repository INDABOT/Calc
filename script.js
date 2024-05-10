let displayed = document.getElementById("display");

function display(num){
    if (displayed.value === "0" && num !== ".") {
        displayed.value = num;
    } else {
        displayed.value += num;
    }
}

function Calculate() {
    try {
        displayed.value = eval(displayed.value);
    } catch (err) {
        alert("Invalid Expression");
    }
}
//incase I decide to add the clear button
function clearDisplay() {
    displayed.value = "0";
}


