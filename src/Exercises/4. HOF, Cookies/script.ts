/////////////////////////
/////////////////////////

// SECTION 1.

interface Person {
    name: string;
    age: number;
}

const sampleObj: Person[] = [ 
    {name: "Alex", age: 30},
    {name: "Piotr", age: 26},
    {name: "Patryk", age: 45},
    {name: "Agnieszka", age: 20}
]

// Zadanie 1; (DONE)
// Za pomocą funkcji tablicowej map stwórz tablicę stringów zawierających tekst "Jestem (name) i mam (age) lat", wykorzystaj tablicę sampleObj;

const introductions: string[] = sampleObj.map(person => {
    return `I am ${person.name} and am ${person.age} years old`;
});

console.log(introductions);

// Zadanie 2; (DONE)
// Za pomocą  funkcji tablicowej map stwórz tablicę obiektów, która zawiera name, age oraz nowy klucz bornYear, który zostanie obliczony na podstawie wieku i dodany do obiektu, w nowo tworzonej tablicy. Wykorzystaj tablicę sampleObj;

interface PersonWithBirthYear extends Person {
    bornYear: number;
}

const actualYear: number = new Date().getFullYear();
const extendedPeopleData: PersonWithBirthYear[] = sampleObj.map(person => {
    return {
        name: person.name,
        age: person.age,
        bornYear: actualYear - person.age,
    }
});

console.log(extendedPeopleData);

// Zadanie 3; (DONE)
// Za pomocą funkcji tablicowej filter wyciągnij z tablicy sampleObj osoby które mają więcej niż 25 lat;

const adultsOver25: Person[] = sampleObj.filter(person => {
    return person.age > 25;
});

console.log(adultsOver25);

// Zadanie 4; (DONE)
// Za pomocą funkcji tablicowej filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r;

const namesWithSpecificEnding: Person[] = sampleObj.filter(person => {
    const name: string = person.name;
    const lastChar: string = name[name.length - 1];
    return lastChar === 'a' || lastChar === 'r';
    // return person.name.endsWith('a') || person.name.endsWith('r'); // TSCONFIG PROBLEM :(
});

console.log(namesWithSpecificEnding);

/////////////////////////
/////////////////////////

// SECTION 2.

interface Book {
    name: string;
    price: number | string;
}

const books: Book[] = [
    {name: "Wojna i pokoj", price: '30'},
    {name: "Encyklopedia", price: 100},
    {name: "Kosmos", price: 65}
]

// Zadanie 5 (DONE)
// Za pomocą funkcji tablicowej map połącz osoby z sampleObj i książki z books tak aby pierwsza osoba miała pierwszą książkę, druga drugą itd;

interface PersonWithBook {
    person: Person;
    book: Book;
}

const combinedData: PersonWithBook[] = sampleObj.map((person, index) => {
    return {person: person, book: books[index]};
})

console.log(combinedData);

//  Zadanie 6; (DONE)
// Przefiltruj tablicę książek tak aby znaleźć książkę, której cena jest stringiem;

const stringPricedBooks: Book[] = books.filter(book => {
    return typeof book.price === "string";
});

console.log(stringPricedBooks);

// Zadanie 7; (DONE)
// Za pomocą funkcji tablicowej find znajdź cenę książki Kosmos;

// const kosmosBook = books.find(book => book.name === "Kosmos");
// const kosmosBookPrice: number | undefined = typeof kosmosBook?.price === "number" ? kosmosBook.price : undefined;

// console.log(kosmosBookPrice);

// Zadanie 8; (DONE)
// Sprawdź za pomocą funkcji tablicowej every czy każda książka kosztuje powyżej 50;

console.log(books.every(book => +book.price > 50));

// Zadanie 9; (DONE)
// Sprawdź za pomocą funkcji tablicowej some czy jakaś książka kosztuje poniżej 40;

console.log(books.some(book => +book.price < 40));

//  Zadanie 10; (DONE)
// Sprawdż czy każda osoba z sampleObj jest pełnoletnia.

console.log(sampleObj.every(person => person.age >= 18));

// Zadanie 11; (DONE)
// Zsumuj wiek wszystkich osób za pomocą funkcji tablicowej reduce i oblicz średnią wieku;

const totalAge: number = sampleObj.reduce((acc, person) => {
    return acc + person.age;
}, 0);
const averageAge: number = totalAge / sampleObj.length;

console.log(averageAge);

// Zadanie 12; (DONE)
// Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku;

let youngest = sampleObj[0];
let oldest = sampleObj[0];

sampleObj.forEach(person => {
    if (person.age < youngest.age) {
        youngest = person;
    }
    if (person.age > oldest.age) {
        oldest = person;
    }
});

const ageDifference: number = oldest.age - youngest.age;

console.log(`Youngest person: ${youngest.name}`);
console.log(`Oldest person: ${oldest.name}`)
console.log(`Age difference: ${ageDifference}`);

// Zadanie 13; (DONE)
// Wyświetl nazwę książki która jest najtańsza i najdroższa;

const cheapestBook: Book = books.reduce((min, book) => +book.price < +min.price ? book : min);
const dearestBook: Book = books.reduce((max, book) => +book.price > +max.price ? book : max);

console.log(`Cheapest book: ${cheapestBook.name}`);
console.log(`Dearest book: ${dearestBook.name}`);

// Zadanie 14; (DONE)
// Zsumuj cenę wszystkich książek;

const totalBooksPrice: number = books.reduce((acc, book) => {
    return acc + Number(book.price);
}, 0);

console.log(`Total books price: ${totalBooksPrice}$`);

// Zadanie 15; (DONE)
// Stwórz funkcję zapisującą do localStorage, sessionStorage lub ciastka;

function saveToLocalStorage(obj: Person | Book) {
    localStorage.setItem("object", JSON.stringify(obj));
}

saveToLocalStorage(books[1]);

// Zadanie 16; (PENDING)
// Stwórz funkcję odczytującą ciasteczka z przeglądarki i tworzącą z nich obiekt wygodny do odczytu. Ciasteczka są zapisywane jako string. W stworzonym obiekcie niech kluczem będzie nazwa, a value wartością w obiekcie;

// {name}={value};
