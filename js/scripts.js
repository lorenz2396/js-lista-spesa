const listaSpesa = [
    'Uova',
    'Latte',
    'Formaggio',
    'Sughi',
    'Verdure',
    'Olio',
    'Pane',
    'Carne'
]

let index = 0;

const ul = document.getElementById('grocery-list');

while(index < listaSpesa.length) {

    console.log(index, listaSpesa[index])
    
    ul.innerHTML += `
    <li>
        ${listaSpesa[index]}
    </li>
`;

index++;
}