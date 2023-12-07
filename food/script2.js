const def = ['bread', 'cake', 'cheese', 'pizza', 'soup', 'juice', 'milk', 'water', 'tea'];
const transl = ['хлеб', "торт, пирожное", "сыр", "пицца", "суп", "сок", "молоко",  "вода", 'чай'];
const definitions = document.querySelectorAll('.definitions p');
const btndef = document.querySelectorAll('.definitions button');


for (let i = 0; i < definitions.length; i++) {
    definitions[i].innerHTML = `${def[i]}`;
}

function show (i) {
    definitions[i].innerHTML = `${def[i]} / ${transl[i]}`
}