// Oppgave 1
// Selecting text element and button by their IDs
const  removeButton = document.getElementById('remove-btn');
const removeText = document.getElementById('remove');
// Adding event listener to button and removing text element on click
removeButton.addEventListener('click', () => {
    removeText.remove();
});

// Oppgave 2
// Selecting text element and button by their IDs
const changeButton = document.getElementById('change-btn');
const changeText = document.getElementById('change');
// Adding event listener to button and changing text element styles and content on click
changeButton.addEventListener('click', () => {
    changeText.style.fontFamily = 'comic sans ms';
    changeText.style.color = 'blue';
    changeText.style.fontWeight = 'bold';
    changeText.style.fontSize = '40px';
    changeText.textContent = 'BOOOOOOOOOOOOOOOOOOOOOOM!!!!!!!!';
    changeText.style.textAlign = 'center';
});

// Oppgave 3
// Selecting input field, button and text element by their IDs
const inputField = document.getElementById('input');
const inputText = document.getElementById('input-text');
// Adding event listener to input field to update text element as user types
inputField.addEventListener('input', () => {
    inputText.textContent = inputField.value;
});

// Oppgave 4
// Selecting button and text element by their IDs
const writeListButton = document.getElementById('write-list');
const ul = document.getElementById('ul');

// List of items to be added to the unordered list
writeListButton.addEventListener('click', () => {
    for (item of myList) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    }
});

// Oppgave 5
// Selecting select element, text input, button and placeholder div by their IDs
const selectElement = document.getElementById('select');
const textContent = document.getElementById('text');
const createButton = document.getElementById('create');
const placeholder = document.getElementById('placeholder');

// Adding event listener to button to create new element based on selected value and input text
createButton.addEventListener('click', () => {
    const selectedValue = selectElement.value;
    const newElement = document.createElement(selectedValue);
    newElement.textContent = textContent.value;
    placeholder.append(newElement);
});

