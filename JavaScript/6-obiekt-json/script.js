let jsonPracownicy = { "pracownicy": [{ "firstName": "Krystian", "lastName": "Dziopa" }, { "firstName": "Anna", "lastName": "Szapiel" }, { "firstName": "Piotr", "lastName": "Żmuda" }] };

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function funkcja(element, index) {
    console.log("Imie: " + element.firstName)
    console.log("Nazwisko " + element.lastName);
    console.log("Index: " + index);

});
