// Step 1: Add event listener to the button
document.getElementById('update-btn').addEventListener('click',function(){
    console.log("Button has been clicked");

    // Step 2: Get the value from the input field
const inputField = document.getElementById('text-comment-update');
// console.log(inputField)
const inputFieldValue = inputField.value;
// console.log(inputFieldValue);

// Step 3: Update the content of the div with the new comment
const newComment = document.getElementById('new-comment-div');
console.log(newComment)

const commentParagraph = document.createElement('p');
commentParagraph.innerText = inputFieldValue;
newComment.appendChild(commentParagraph);




})

