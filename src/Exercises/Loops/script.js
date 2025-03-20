// Zadanie 1 (DONE)
// Wypisz wartości które domyślnie konwertują się na false.
console.log('Default values: 0 | "" | undefined | NaN | null');
// Zadanie 2 (DONE)
// Zaznacz ktore operacje zwroca wartosc true:
// - [ ] 10==10
// - [ ] 5>2
// - [ ] 10<4
// - [ ] 'a'==='a'
// - [ ] 3=='3'
// - [ ] true==1
// - [ ] true===1
// - [ ] false==undefined
// - [ ] null==undefined
console.log(10 == 10); // true
console.log(5 > 2); // true
console.log(10 < 4); // false
console.log('a' === 'a'); // true
// console.log(true == 1);
// console.log(true === 1);
console.log(false == undefined); // false
console.log(null == undefined); // true
// Zadanie 4 (DONE)
// Poproś użytkownika o podanie 3 stringów i wyświetl najkrótszy z nich.
var exampleValues = ["Hello World", "JavaScript", "Web Development"];
function getShortestString(arr) {
    var min = arr[0].length;
    var shortestString = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < min) {
            shortestString = arr[i];
        }
    }
    return shortestString;
}
console.log(getShortestString(exampleValues));
// Zadanie 5
// Napisz program rzucający kostką, program po odpaleniu zwraca liczbę od 1 do 6.
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
// Zadanie 6
// Zapoznaj się z zagadnieniem algebry boola i uzupełnij wyniki.
// - true && true
// - false && true
// - false || true
// - !false || false
// - !!true
// - true && !false
console.log(true && true); // true
console.log(false && true); // false
console.log(false || true); // true
console.log(!false || false); // true
console.log(!!true); // true
console.log(true && !false); // true
// Zadanie 7
// Zapoznaj się z zagadnieniem ternary operator i zaproponuj konstrukcję if else, oraz przekształć ją na ternary operator.
var currentTemperature = 25;
if (currentTemperature > 20) {
    console.log("Temperature ".concat(currentTemperature, " is ok ;)"));
}
else {
    console.log("It's cold :( - ".concat(currentTemperature));
}
var isTemperatureOk = currentTemperature > 20 ? "Temperature ".concat(currentTemperature, " is ok ;)") : "It's cold :( - ".concat(currentTemperature);
console.log(isTemperatureOk);
// Zadanie 8
// Stwórz switch case, który dla podanego numeru miesiąca wyświetli w konsoli porę roku (wiosna, lato, jesień, zima).
function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default:
            console.log("Incorect value: ".concat(month));
    }
}
getSeason(7);
getSeason(1);
getSeason(3);
// Zadanie 9
// Za pomocą for:
// - [ ] stwórz pętlę wyświetlającą liczby od 0 do 10;
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
// - [ ] stwórz pętlę wyświetlającą liczby od 10 do 0;
for (var i = 10; i <= 0; i--) {
    console.log(i);
}
// - [ ] napisz pętlę wyświetlającą liczby od 0 do 120, co 3 np. 3, 6, 9, 12 itd;
for (var i = 0; i <= 120; i += 3) {
    console.log(i);
}
// Zadanie 10
// Napisz pętlę generującą w konsoli następujący obraz z stringów:
// ********
// --------
// --------
// ********
for (var i = 0; i < 4; i++) {
    var row = "";
    for (var j = 0; j < 8; j++) {
        if (i === 0 || i === 3) {
            row += "*";
        }
        else {
            row += "-";
        }
    }
    console.log(row);
}
// Zadanie 11
// Napisz pętlę generującą w konsoli następujący obraz z stringów:
// ********
// *------*
// *------*
// ********
for (var i = 0; i < 4; i++) {
    var row = "";
    for (var j = 0; j < 8; j++) {
        if (i === 0 || i === 3) {
            row += "*";
        }
        else if (j === 0 || j === 7) {
            row += "*";
        }
        else {
            row += "-";
        }
    }
    console.log(row);
}
// Zadanie 12
// Napisz pętlę generującą w konsoli następujący obraz z stringów:
// *****
// -*---
// --*--
// ---*-
// *****
for (var i = 0; i < 5; i++) {
    var row = "";
    for (var j = 0; j < 5; j++) {
        if (i === 0 || i === 4) {
            row += "*";
        }
        else if (j === i) {
            row += "*";
        }
        else {
            row += "-";
        }
    }
    console.log(row);
}
// Zadanie 13
// Poproś użytkownika o podanie dwóch liczb, jeśli poda tekst poproś go o podanie liczby jeszcze raz, rób to tak długo, aż użytkownik wpisze poprawne dane.
// Zadanie 14
// Za pomocą while wyświetl liczby od 0 do 1000.
var n = 0;
while (n <= 1000) {
    console.log(n);
    n += 1;
}
