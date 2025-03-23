/////////////////////////
/////////////////////////
var sampleObj = [
    { name: "Alex", age: 30 },
    { name: "Piotr", age: 26 },
    { name: "Patryk", age: 45 },
    { name: "Agnieszka", age: 20 }
];
// Zadanie 1; (DONE)
// Za pomocą funkcji tablicowej map stwórz tablicę stringów zawierających tekst "Jestem (name) i mam (age) lat", wykorzystaj tablicę sampleObj.
var introductions = sampleObj.map(function (person) {
    return "I am ".concat(person.name, " and am ").concat(person.age, " years old");
});
console.log(introductions);
var actualYear = new Date().getFullYear();
var extendedPeopleData = sampleObj.map(function (person) {
    return {
        name: person.name,
        age: person.age,
        bornYear: actualYear - person.age,
    };
});
console.log(extendedPeopleData);
// Zadanie 3; (DONE)
// Za pomocą funkcji tablicowej filter wyciągnij z tablicy sampleObj osoby które mają więcej niż 25 lat.
var adultsOver25 = sampleObj.filter(function (person) {
    return person.age > 25;
});
console.log(adultsOver25);
// Zadanie 4; (DONE)
// Za pomocą funkcji tablicowej filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r.
var namesWithSpecificEnding = sampleObj.filter(function (person) {
    var name = person.name;
    var lastChar = name[name.length - 1];
    return lastChar === 'a' || lastChar === 'r';
    // return person.name.endsWith('a') || person.name.endsWith('r'); // TSCONFIG PROBLEM :(
});
console.log(namesWithSpecificEnding);
var books = [
    { name: "Wojna i pokoj", price: '30' },
    { name: "Encyklopedia", price: 100 },
    { name: "Kosmos", price: 65 }
];
var combinedData = sampleObj.map(function (person, index) {
    return { person: person, book: books[index] };
});
console.log(combinedData);
//  Zadanie 6; (DONE)
// Przefiltruj tablicę książek tak aby znaleźć książkę, której cena jest stringiem.
var stringPricedBooks = books.filter(function (book) {
    return typeof book.price === "string";
});
console.log(stringPricedBooks);
// Zadanie 7; (DONE)
// Za pomocą funkcji tablicowej find znajdź cenę książki Kosmos.
// const kosmosBook = books.find(book => book.name === "Kosmos");
// const kosmosBookPrice: number | undefined = typeof kosmosBook?.price === "number" ? kosmosBook.price : undefined;
// console.log(kosmosBookPrice);
// Zadanie 8; (DONE)
// Sprawdź za pomocą funkcji tablicowej every czy każda książka kosztuje powyżej 50.
console.log(books.every(function (book) { return +book.price > 50; }));
// Zadanie 9; (DONE)
// Sprawdź za pomocą funkcji tablicowej some czy jakaś książka kosztuje poniżej 40.
console.log(books.some(function (book) { return +book.price < 40; }));
//  Zadanie 10; (DONE)
// Sprawdż czy każda osoba z sampleObj jest pełnoletnia.
console.log(sampleObj.every(function (person) { return person.age >= 18; }));
// Zadanie 11; (DONE)
// Zsumuj wiek wszystkich osób za pomocą funkcji tablicowej reduce i oblicz średnią wieku
var totalAge = sampleObj.reduce(function (acc, person) {
    return acc + person.age;
}, 0);
var averageAge = totalAge / sampleObj.length;
console.log(averageAge);
// Zadanie 12; (DONE)
// Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku.
var youngest = sampleObj[0];
var oldest = sampleObj[0];
sampleObj.forEach(function (person) {
    if (person.age < youngest.age) {
        youngest = person;
    }
    if (person.age > oldest.age) {
        oldest = person;
    }
});
var ageDifference = oldest.age - youngest.age;
console.log("Youngest person: ".concat(youngest.name));
console.log("Oldest person: ".concat(oldest.name));
console.log("Age difference: ".concat(ageDifference));
// Zadanie 13; (DONE)
// Wyświetl nazwę książki która jest najtańsza i najdroższa.
var cheapestBook = books.reduce(function (min, book) { return +book.price < +min.price ? book : min; });
var dearestBook = books.reduce(function (max, book) { return +book.price > +max.price ? book : max; });
console.log("Cheapest book: ".concat(cheapestBook.name));
console.log("Dearest book: ".concat(dearestBook.name));
// Zadanie 14; (DONE)
// Zsumuj cenę wszystkich książek.
var totalBooksPrice = books.reduce(function (acc, book) {
    return acc + Number(book.price);
}, 0);
console.log("Total books price: ".concat(totalBooksPrice, "$"));
// Zadanie 15; (PENDING)
// Stwórz funkcję zapisującą do localStorage, sessionStorage lub ciastka
// Zadanie 16; (PENDING)
// Stwórz funkcję odczytującą ciasteczka z przeglądarki i tworzącą z nich obiekt wygodny do odczytu. Ciasteczka są zapisywane jako string. W stworzonym obiekcie niech kluczem będzie nazwa, a value wartością w obiekcie
// {name}={value};
