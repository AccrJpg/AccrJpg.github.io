let string = "tablica";

// function wspak(parametr) {
//     let zmiana = [...parametr].reverse().join("");
//     return zmiana
// }

function wspak(parametr) {
    let zmiana = parametr.split('').reverse().join("");
    return zmiana
    
}

// ponizsze rownanie wynosi w pols 
Symbol() === Symbol()



console.log(wspak('slowo'));
console.log(wspak(string));