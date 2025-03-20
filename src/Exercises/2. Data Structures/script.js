// Exercise 1; (DONE)
// Stwórz tablicę (tab1) imion psów (7 elementow);
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tab1 = ["Alex", "Lua", "Kava", "Yoko", "Sia", "Olo", "Hector"];
// odowłaj się do pierwszego elementu tablicy;
function getFirst(tab) {
    return tab[0];
}
// odowłaj się do trzeciego elementu tablicy;
function getThird(tab) {
    return tab[2];
}
// odowłaj się do ostatniego elementu tablicy;
function getLast(tab) {
    // return tab.at(-1);
    return tab[tab.length - 1];
}
// odczytaj długość tablicy;
function getLength(tab) {
    return tab.length;
}
// odowłaj się do przedostatniego elementu tablicy;
function getPenultimate(tab) {
    // return tab.at[-2];
    return tab[tab.length - 2];
}
// Zmodyfikuj tablice
// dodaj nowe imie na początek listy;
function addNameOnStart(tab, item) {
    tab.unshift(item);
}
// dodaj nowe imie na koniec listy;
function addNameOnEnd(tab, item) {
    tab.push(item);
}
// usunąć element z końca;
function removeFromEnd(tab) {
    tab.pop();
}
// usun element z początku tablicy;
function removeFromStart(tab) {
    tab.shift();
}
// stwórz drugą tablicę, do której przypiszesz tablicę 1 np. const tab2=tab1
/* zrób kopię tablicy 1 do zmiennej tab3 np. const tab3=[...tab1]
 - [ ] stwórz drugą tablicę, do której przypiszesz tablicę 1 np. const tab2=tab1;
 - [ ] zrób kopię tablicy 1 do zmiennej tab3 np. const tab3=[...tab1]
 - [ ] usuń element z początku z tab2 i tab3
 - [ ] sprawdź czy tab1 się zmieniła
 - [ ] odwróć tab1 za pomocą .reverse(),
 - [ ] sprawdź czy tab1 i tab2 się zmieniła, */
var tab2 = tab1;
var tab3 = __spreadArray([], tab1, true);
removeFromStart(tab2);
removeFromStart(tab3);
console.log(tab1);
tab1.reverse();
console.log(tab2);
console.log(tab3);
// Zad 3; (DONE)
// Stworz tablicę przechowującą odczyt temperatury ze stacji pogodowej.
// - [ ] znajdź wartość maksymalną i minimalną,
// - [ ] oblicz średnią temperaturę,
// - [ ] oblicz różnicę między max, a min
// - [ ] znajdź index elementu o minimalnej temperaturze (indexOf),
// - [ ] sprawdź czy lista zawiera liczbę 20,
// - [ ] wyświetl elementy tablicy za pomocą for i foreach <br />
// Wpisywanie temperatury możesz zrobić bezpośrednio w kodzie, lub pobierać dane za pomocą prompta
var temperatureReadings = [12, 13, 14, 15, 16, 17, 11, 10];
function getMinMaxTemperatures(arr) {
    return { min: Math.min.apply(Math, arr), max: Math.max.apply(Math, arr) };
}
function getAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
var temperaturesMinMax = getMinMaxTemperatures(temperatureReadings);
console.log("Temperatures: | min: ".concat(temperaturesMinMax.min, ", max: ").concat(temperaturesMinMax.max, " |"));
console.log("Temperature average: ".concat(getAverage(temperatureReadings)));
console.log("| MIN & MAX DIFERENCE | - ".concat(temperaturesMinMax.max - temperaturesMinMax.min));
console.log(temperatureReadings.indexOf(temperaturesMinMax.min));
console.log(temperatureReadings.includes(20));
// For;
for (var i = 0; i < temperatureReadings.length; i++) {
    console.log(temperatureReadings[i]);
}
// ForEach;
temperatureReadings.forEach(function (item) { return console.log(item); });
// Zadanie 4 (Map) (DONE)
// - [ ] Stwórz nową mapę;
// - [ ] dodaj do nowej mapy swoje imię i liczbę;
// - [ ] pobierz i wyświetl danę po kluczu który istnieje w mapie;
// - [ ] sprawdź co się dzieje gdy chcemy pobrać wartość po kluczu który nie istnieje w mapie;
// - [ ] dodaj jeszcze 2 obiekty z kluczem i wartością;
// - [ ] odczytaj długość mapy (size);
// - [ ] wyświetl tylko klucze z mapy;
// - [ ] wyświetl tylko wartości z mapy;
// - [ ] wyświetl pary elementów (entries);
// - [ ] wyświetl pary elementów za pomocą forEach;
var accountData = new Map();
accountData.set("firstname", "Mateusz");
accountData.set("age", 26);
console.log("Account firstname: ".concat(accountData.get("firstname")));
console.log("Account age: ".concat(accountData.get("age")));
console.log(accountData.get("lastname")); // undefined;
console.log(accountData.size);
// Map Keys;
console.log(accountData.keys());
// Map Values;
console.log(accountData.values());
// Map Entries;
console.log(accountData.entries());
// Map forEach;
accountData.forEach(function (value, key) {
    console.log("".concat(key, ": ").concat(value));
});
// Zadanie 5; (Set) (DONE)
// - [ ] Stwórz zbiór set do przechowywania peseli użytkowników aplikacji,
// - [ ] dodaj do niego 3 pesele (możesz skorzystać z [generator peseli](https://pesel.cstudios.pl/o-generatorze/generator-on-line)),
// - [ ] odczytaj rozmiar zbioru;
// - [ ] dodaj pesel, który był dodany wcześniej;
// - [ ] odczytaj rozmiar zbioru (czy się zmienił?);
// - [ ] sprawdź czy zbiór zawiera pesel "810321864545";
// - [ ] usuń wybrany pesel ze zbioru;
// - [ ] odczytaj rozmiar zbioru;
// - [ ] przeiteruj po zbiorze za pomocą for of;
// - [ ] przeiteruj po zbiorze za pomocą forEach;
var pesels = new Set(["64061471724", "77122077195", "67020838725"]);
console.log(pesels.size);
pesels.add("64061471724");
console.log(pesels.has("810321864545"));
pesels.delete("77122077195");
console.log(pesels.size);
// for of;
for (var _i = 0, pesels_1 = pesels; _i < pesels_1.length; _i++) {
    var pesel = pesels_1[_i];
    console.log(pesel);
}
// foreach;
pesels.forEach(function (value) {
    console.log(value);
});
// Zadanie 6 (DONE)
// Mając do dyspozycji poniższą zmienną temp
var temp = [1, 5, 7, 9, 13, 1, 7, 4, 6, 3, 1, 2];
// - [ ] odczytaj długość tablicy temp;
console.log(temp.length);
// - [ ] za pomocą zbioru (new Set()) wyeliminuj duplikaty z tablicy temp wynik zapisz do zmiennej temp1;
var temp1 = new Set(temp);
var temp2 = __spreadArray([], temp1, true);
// console.log(temp1);
// - [ ] odczytaj dlugosc zmiennej temp1
// Niemozliwe (zwraca undefined). Nalezy przekonwertowac na tablice lub uzyc property size;
// console.log(temp1.length); // undefined;
console.log(temp2.length);
console.log(temp1.size); // Alternative;
// Zadanie 7 (Object) (DONE)
// Mając do dyspozycji poniższy obiekt:
var person = {
    name: "Adam",
    surname: "Jochemczyk",
    devices: [{
            name: "phone",
            memory: "64GB"
        }, {
            name: "laptop",
            memory: "512GB",
        }
    ],
    bloodPressure: ["120/80", "121/81"],
};
// - [ ] wyświetl wartość pola name i surname;
console.log(person.name);
console.log(person.surname);
// - [ ] przeiteruj po polu devices i wyświetl za pomocą forEach dla każdego urządzenia string pokazujący imię i nazwisko osoby, nazwę i pojemność urządzenia (zaprojektuj funkcjonalność tak aby po dodaniu lub usunięciu urządzeń kod dalej działał);
// - [ ] wyświetl imię i nazwisko osoby oraz jej odczyty ciśnienia krwi;
console.log("Data: firstname - ".concat(person.name, ", lastname: ").concat(person.surname, ", bloodPresure: ").concat(person.bloodPressure));
// Zadanie 8; (Functions) (DONE)
// Stwórz funkcję isPeselValid, która dla podanego stringa zwróci true albo false i sprawdzi:
// - [ ] czy jego długośc wynosi 11 znaków;
// - [ ] czy 3 i 4 liczba mieści się w zakresie 01-12;
var examplePesel = "810321864545";
function isPeselValid(pesel) {
    return pesel.length === 11 && Number(pesel[3]) >= 1 && Number(pesel[3]) <= 12 && Number(pesel[4]) >= 1 && Number(pesel[4]) <= 12;
}
console.log(isPeselValid(examplePesel));
// Zadanie 9; (DONE)
// Stwórz funckję calculator, która przyjmie parametry liczbę a i b oraz znak (+,-,/,*) w funkcji obsłuż:
// - [ ] dodawanie;
// - [ ] odejmowanie;
// - [ ] mnozenie;
// - [ ] dzielenie;
function calculator(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                throw new Error("Cannot divide by ".concat(num2));
            }
            return num1 / num2;
            break;
        default:
            return "Unknown operation: \"".concat(operation, "\" for values: {").concat(num1, ", ").concat(num2, "}");
    }
}
console.log(calculator(90, 10, "+"));
// console.log(calculator(8, 19, ":")); // TS Error;
console.log(calculator(10, 10, "*"));
// Zadanie 10; (DONE)
// Stwórz funkcję która dla podanej liczby pascali (ciśnienie atmosferyczne) zwróci jej sformatowaną wartość w hPa (100Pa to 1 hPa).
function convertPascals(value) {
    return "".concat(value / 100, " hPa");
}
console.log(convertPascals(200));
// Zadanie 11; (DONE)
// Stwórz funkcję, która jako paramter przyjmie godzinę, minuty, format.
// - [ ] jeśli format to string PM lub AM przelicz na format 24h,
// - [ ] jeśli format nie jest podany przelicz na format amerykański (AM/PM),
function formtatTime(hours, minutes, format) {
    if (format === void 0) { format = ""; }
    if (format === "PM" || format === "AM") {
        if (format === "AM" && hours === 12)
            hours = 0;
        if (format === "PM" && hours !== 12)
            hours += 12;
        return "".concat(hours, ":").concat(minutes);
    }
    else {
        var period = hours >= 12 ? "PM" : "AM";
        if (hours === 0)
            hours = 12;
        else if (hours > 12)
            hours -= 12;
        return "".concat(hours, ":").concat(minutes, " ").concat(period);
    }
}
console.log(formtatTime(11, 31, "PM"));
console.log(formtatTime(10, 11));
// Zadanie 12; (DONE)
// Stwórz funkcję, która zwraca:
// - [ ] string "Hi" gdy podana liczna jest podzielna przez 5 bez reszty;
// - [ ] string "Hello" gdy podana liczba jest podzielna przez 6 bez reszty;
// - [ ] string "Bye" gdy liczba nie jest podzielna przez 5 i 6 bez reszty;
function greet(num) {
    if (num % 5 === 0) {
        return "Hi";
    }
    else if (num % 6 === 0) {
        return "Hello";
    }
    else {
        return "Bye";
    }
}
console.log(greet(66));
console.log(greet(55));
console.log(greet(77));
// Zadanie 13; (DONE)
// Stwórz funkcję która dla podanej tablicy liczb zwróci tylko liczby parzyste
var nums1 = [3, 10, 4, 6, 18, 22, 90, 102];
// First Solution;
function getEvenNums(arr) {
    var evenNums = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNums.push(arr[i]);
        }
    }
    return evenNums;
}
// Second Solution;
// const getEvenNums = arr => arr.filter(el => el % 2 == 0);
console.log(getEvenNums(nums1));
// Zadanie 14; (DONE)
// Stwórz funkcję która dla podanej tablicy liczb zwróci tylko liczby nieparzyste
var nums2 = [9, 90, 220, 33, 76, 45, 11];
// First Solution;
function getUnevenNums(arr) {
    var unevenNums = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            unevenNums.push(arr[i]);
        }
    }
    return unevenNums;
}
// Second Solution;
// const getUnevenNums = arr => arr.filter(el => el % 2 !== 0);
console.log(getUnevenNums(nums2));
// Zadanie 15; (DONE)
// Stwórz funkcję która dla podanej tablicy liczb zwróci obiekt zawierający minimalna i maksymalną liczbe ze zbioru np.
// return {min: 1, max: 10}
var nums3 = [19, 12, 43, 22, 9, 45, 192];
// O(n);
// function getMinMax(arr) {
//     let minValue = arr[0];
//     let maxValue = arr[0];
//     for (let i  = 0; i < arr.length; i++) {
//         if (arr[i] < minValue) {
//             minValue = arr[i];
//         }
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         }
//     }
//     return {min: minValue, max: maxValue};
// }
// Better solution!
function getMinMax(arr) {
    return { min: Math.min.apply(Math, arr), max: Math.max.apply(Math, arr) };
}
console.log(getMinMax(nums3));
