let mytext = document.querySelector('p');
mytext.textContent = ''

let button1 = document.getElementById('dodaj');
let myText = document.querySelector('p');

button1.addEventListener('click', function () {
    let myInsertText = 'Mariusz!';
    myText.innerHTML = myInsertText;

});
let button2 = document.getElementById('usun');
let myText2 = document.querySelector('p');

button2.addEventListener('click', function () {
    let myInsertText2 = '';
    myText2.innerHTML = myInsertText2;

});


