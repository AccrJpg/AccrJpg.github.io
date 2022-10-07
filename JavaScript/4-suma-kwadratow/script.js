let numbers = [1, 2, 3, 4, 5, 6];


function kwadrat(array) {

    let suma = 0;

    for (let numb of array) {
        const square = numb * numb;
        // console.log(square);
// drugi sposob, suma +=square
        suma = suma + square;
        // console.log(suma);
        
    }
    return suma;
}


console.log(kwadrat(numbers));



