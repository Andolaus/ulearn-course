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

// Oppgave 6
// Selecting button and list by their IDs
const removeLastButton = document.getElementById('remove-li');
const list = document.getElementById('list');

// Adding event listener to button to remove the last item from the list on click
removeLastButton.addEventListener('click', () => {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
});

// Oppgave 7
// Selecting input field and button by their IDs
const nameInput = document.getElementById('name');
const orderButton = document.getElementById('order');

// Adding event listener to input field to change button border color based on input length
nameInput.addEventListener('input', () => {
    if (nameInput.value.length > 4) {
        orderButton.style.border = '1px solid red';
    } else {
        orderButton.style.border = '1px solid black';
    }
});

// Oppgave 8
// Selecting all unordered lists with class 'children' and the button by its ID
const ulChildren = document.getElementsByClassName('children');
const colorButton = document.getElementById('color');

// Adding event listener to button to change border color of list items based on their index (odd/even)
colorButton.addEventListener('click', () => {
    for (const ul of ulChildren) {
        const items = ul.children;
        for (let i = 0; i < items.length; i++) {
            const li = items[i];
            const odd = i % 2 === 0;
            li.style.border = odd ? '2px solid green' : '2px solid pink';
        }
    }
});

