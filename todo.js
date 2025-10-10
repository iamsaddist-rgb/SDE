let taskArray = '';

function addButton() {
    let inputElement = document.querySelector('.js-input');
    console.log(inputElement);
    arrayElements = `<p>${inputElement}<button>Delete</button></p>`;
    taskArray = taskArray + arrayElements;
    document.querySelector('.js-output').innerHTML = taskArray;
}