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

inputField.addEventListener('input', () => {
    inputText.textContent = inputField.value;
});

