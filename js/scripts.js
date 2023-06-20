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

// while(index < listaSpesa.length) {
//     console.log(index, listaSpesa[index])

//     // const newLi = document.createElement('li');
//     // newLi.innerHTML = listaSpesa[index];
//     // ul.append(newLi);

//     ul.innerHTML += `
//     <li>
//         ${listaSpesa[index]}
//     </li>
// `;

//     index++;
// }

let lastClickedIndex = null;


while(index < listaSpesa.length) {

    console.log(index, listaSpesa[index])

    const currentIndex = index;
    
    const newLi = document.createElement('li');         //click su ogni li
    newLi.innerHTML = listaSpesa[index];
    newLi.addEventListener('click', 



    function(){
        // console.log(newLi.innerHTML);
        console.log('Precedentemente cliccato', lastClickedIndex);
        console.log('Ora cliccato', currentIndex);

        // newLi.classList.toggle('color');

        const allLi = document.querySelectorAll('li');

        if(lastClickedIndex != null){
            console.log('allLi', allLi, typeof allLi);
            console.log('allLi[lastClickedIndex]', allLi[lastClickedIndex], typeof allLi);
            allLi[lastClickedIndex].classList.remove('color');
        }

        //Aggiorno valore del lastClickedIndex con l'indice dell'elemento appena cambiato
        lastClickedIndex = currentIndex;

        allLi[currentIndex].classList.add('color');
    }
    
    
    
    
    );

    ul.append(newLi);   //solo  alla fine lo aggiungo nell'HTML

    index++;
}