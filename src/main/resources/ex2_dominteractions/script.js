console.log("External JS file is being executed");


// getting the dom elements
var element = document.getElementById("some-id");
console.log(element);

var elements = document.getElementsByClassName("some-class");
console.log(elements);

console.log(elements[0].innerHTML);
console.log(elements[0].outerHTML);

// change html
element.innerHTML = "<div><p>New inner HTML</p></div>";
console.log(element.innerHTML);


// getting the css properties
for (var i = 0; i < elements.length; i++) {
    console.log("Element " + i + ": " + getComputedStyle(elements[i]).color);
    console.log("Element " + i + ": " + getComputedStyle(elements[i]).textDecoration);
    // console.log("Element " + i + ": " + JSON.stringify(getComputedStyle(elements[i])));
}

// changing the css properties
for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
    if (i % 2 === 0) {
        elements[i].style = "color: red; transform: rotate(180deg)";
    }
    // getComputedStyle(elements[i]).color = "blue"; // These styles are computed, and therefore the 'color' property is read-only.
}

// events
function displayDate() {
    document.getElementById("date-paragraph").innerHTML = '<h1>' + Date() + '</h1>';
}

document.getElementById("my-button").onclick = displayDate;
