let array = [1, 2, 3, 4, 5, 6];


function sum(arr) {
    let suma = 0;
    let mnozenie = 1;
    for (let number of arr) {
        suma += number;

        mnozenie *= number;
    }
    console.log(suma)
    console.log(mnozenie);
}

sum(array);



