// console.log("This is the js file of elements")
// var AT = document.getElementById('At');
// AT.innerText = "This is Astatin";

// var Elements = document.getElementsByClassName('Element');
// for (const Element of Elements){
//     Element.innerText = "This is an element3";
// }

// const sections = document.getElementsByTagName('section')

const sections = document.querySelectorAll('section')
for(const section of sections){
    console.log(section);
    // section.style.backgroundColor='Aqua';
    // secetion.style.padding = '5px';
    // section.style.border = "2px solid red"
    // section.style.border = "2px solid red";
    section.style.backgroundColor='aqua';
    section.style.border = "2px solid red";
    section.style.padding = '20px';
    section.style.borderRadius = '10px';
}