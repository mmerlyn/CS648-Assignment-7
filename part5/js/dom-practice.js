function showMessage() {
    window.alert('I have been clicked');
}

function main() {
    var x = window.document.getElementById('button2');
    x.onclick = function() {
        window.alert('I have been clicked');
    }
    var y = window.document.getElementById("button3");
    function z() {
        window.alert("I have been clicked.");
    }
    y.addEventListener("click", z);
    var a = window.document.getElementById("button4");
    a.addEventListener("click", function () {
        window.alert("I have been clicked.");
    });
    a.addEventListener("click", function () {
        window.alert("I have been clicked.");
    });
}

window.addEventListener("load", main);