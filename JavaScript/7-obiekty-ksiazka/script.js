class ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        if (this.przeczytana === true) {
            console.log('Książka ma tytuł ' + this.tytul + " , autorem jest " + this.autor + " i została przeczytana.");
        }
        else {
            console.log('Książka ma tytuł' + this.tytul + ", autorem jest" + this.autor + "i nie została przeczytana.");
        }
    }
}


var firstBook = new ksiazka('Wiedźmin', 'Andrzej Sapkowski', false);
var secondBook = new ksiazka("Miecz Przeznaczenia", "Andrzej Sapkowski", false);
var thirdBook = new ksiazka("Ostatnie Życzenie", "Andrzej Sapkowski", true);

let booksArray = [firstBook, secondBook, thirdBook];

console.log(firstBook);
firstBook.opiszKsiazke();
console.log(secondBook);
secondBook.opiszKsiazke();
console.log(thirdBook);
thirdBook.opiszKsiazke();

function iloscPrzeczytanych(booksArray) {
    var sum = 0;
    for (i = 0; i < booksArray.length; i++) {
        if (booksArray[i].przeczytana) {
            sum++;
        }
    }
    return sum;
}

var wypisz = iloscPrzeczytanych(booksArray);
console.log(wypisz);





