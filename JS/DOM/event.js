// function makeYellow(){
//     document.body.style.backgroundColor = 'yellow';
//     document.body.style.color='red';
// }
// function makeRed(){
//     document.body.style.backgroundColor = 'red';
//     document.body.style.color='navy';
// }
// function makeGreen(){
//     document.body.style.backgroundColor = 'green';
//     document.body.style.color = "Aqua";
// }
// function makeAqua(){
//     document.body.style.backgroundColor = 'aqua';
//     document.body.style.color = 'maroon';
// }

// const buttons = document.querySelectorAll('.btn')

// for (const button of buttons){
//     button.addEventListener('click',function(){
//         button.style.backgroundColor = 'green';
//         button.style.color = 'white';

//     })
// }

// document.getElementById('btn-logged-in').addEventListener('click',function(){
//     console.log('button clicked')

//     const newTitle = document.getElementById('logged-in');
//     newTitle.innerText = 'User logged in successfully';
// })

// Get connected with the button first
// document.getElementById('btn-update').addEventListener('click',function(){
//     console.log('Button clicked');

// // Connect with the input field and the field item 
//     const newName = document.getElementById('name-deatails').value;
//     console.log(newName);

//     // Print the new name in the name field
//     const nameField = document.getElementById('name');
//     nameField.innerText = newName;
// })

document.getElementById('NameUpdate').addEventListener('click',function(){
    // console.log("Button has been clicked")

const nameField = document.getElementById('input1').value;

const NewName = document.getElementById('Name1')
NewName.innerText = nameField;
NewName.style.color = 'green';
NewName.style.backgroundColor = 'yellow';
NewName.style.width = '60px';
NewName.style.margin = '10px ';
NewName.style.padding = '15px';
NewName.style.border = '1px solid black';
NewName.style.borderRadius = '5px';

})