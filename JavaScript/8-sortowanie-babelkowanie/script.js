let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 677, 98, 1];

function sortowanie() {

   var change, temp;

    do {
        change = false;
        for(var i=tablica.length; i>0; i--) {
            if (tablica[i] <tablica[i-1]){
                temp = tablica[i-1];
                tablica[i-1] = tablica[i];
                tablica[i] = temp;
                change = true;
            }
        }
    } while (change);
    return tablica;
};

console.log(sortowanie(tablica));