// console.log("This is the js file of elements")
var AT = document.getElementById('At');
AT.innerText = "This is Astatin";

var Elements = document.getElementsByClassName('Element');
for (const Element of Elements){
    Element.innerText = "This is an element3";
}