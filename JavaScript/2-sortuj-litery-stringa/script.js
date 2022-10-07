let string = "tablica";


function sortowanko(parametr) {
    let zmiana = parametr.split('').sort().join("");
    return zmiana
    
}

console.log(sortowanko('slowo'));
console.log(sortowanko(string));