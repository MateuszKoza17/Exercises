// Zadanie 1; (DONE)
// Stwórz funkcje:
// - [ ] Funkcja phone ma przyjmować argument phoneNumber i zwracać stringa "Phoned to "+ phoneNumber;
// - [ ] Funkcja mail ma przyjmować argument mail i zwracać stringa "Mailed to"+mail;
// - [ ] Funkcję clientContact, która przyjmie trzy argumenty: 
// - phoneFunction - funkcję dzwoniącą do użytkownika;
// - mailFunction - funkcję mailującą do użytkownika;
// - user - przyjmującą obiekt użytkownika;
var user1 = {
    phone: "123456",
    mail: "123@mail.pl",
    contactMethod: "mail"
};
var user2 = {
    phone: "123456",
    mail: "123@mail.pl",
    contactMethod: "phone"
};
var user3 = {
    phone: "",
    mail: "123@mail.pl",
    contactMethod: "both"
};
var user4 = {
    phone: "123456",
    mail: "",
    contactMethod: "both"
};
var user5 = {
    phone: "",
    mail: "123@mail.pl",
    contactMethod: "phone"
};
var user6 = {
    phone: "123456",
    mail: "",
    contactMethod: "mail"
};
var user7 = {
    phone: "",
    mail: "",
    contactMethod: "mail"
};
// Wywołaj funkcję z podanymi argumentami i sprawdź ich działanie;
function phone(phoneNumber) {
    return "Phoned to \"".concat(phoneNumber, "\"");
}
function mail(mail) {
    return "Mailed to \"".concat(mail, "\"");
}
function clientContact(phoneFunction, mailFunction, user) {
    if (!user.phone && !user.mail) {
        console.log("Error: No contact information available.");
        return;
    }
    switch (user.contactMethod) {
        case "both":
            console.log(phoneFunction(user.phone));
            console.log(mailFunction(user.mail));
            break;
        case "phone":
            console.log(phoneFunction(user.phone));
            break;
        case "mail":
            console.log(mailFunction(user.mail));
            break;
        default:
            console.log("Incorrect value");
    }
}
clientContact(phone, mail, user1);
clientContact(phone, mail, user4);
// Zadanie 2 & Zadanie 3; (PENDING)
// Stwórz funkcję (webSocketInit) przyjmującą jako parametr:
// - adres - adres webSocketu np. ws://localhost:3000;
// - cb - inną funkcję, która ma się wykonać przed zamknięciem socketa;
// - time - czas po jakim socket się zamyka;
// Funkcja wyświetla w konsoli stringa:
// - "web socket open on " i na koniec zdania dopisz adres podany jako paramter.
// - czeka podany czas za pomoca setTimeout i wykorzystuje funkcje connectionClosed,
// - wykonuje funkcję mu podaną (callback) do funkcji webSocketInit setTimeout,
// Stwórz funkcję connectionClosed która przyjmuje parametr connectionName będący adresem web socketu i wyświetla komunikat w konsoli "web socket closed " + connectionName z paramteru, użyj tej funkcji po setTimeout;
// Stwórz funkcję emitMessage, która przyjmuje jako paramter message wiadomość będącą stringiemi wyświetla ją w konsoli.
// Do funkcji webSocketInit podaj funkcję emitMessage jako callback (aby zrobić to z parametrem należy użyć składni ()=>emitMessage("message"))
// Uzupełnij zadanie 2 o parametry domyślne:
// - w funkcji webSocketInit adres="127.0.0.1:3000", 
// - cb - inna funkcja to domyślnie funkcja emitMessage,
// - time - 300,
// - w funkcji connectionClosed parametr domyślny to 127.0.0.1:3000,
// - emitMessage - domyślny message to "I'm live",
var adres = "ws://localhost:3000";
function webSocketInit(adres, cb, time) {
    if (adres === void 0) { adres = "127.0.0.1:3000"; }
    if (cb === void 0) { cb = function () { return emitMessage("I'm live"); }; }
    if (time === void 0) { time = 300; }
    console.log("web socket opened on ".concat(adres));
    setTimeout(function () {
        cb();
        connectionClosed(adres);
    }, time);
}
function connectionClosed(connectionName) {
    console.log("web socket closed on ".concat(connectionName));
}
function emitMessage(message) {
    console.log(message);
}
webSocketInit(adres, function () { return emitMessage("Hello World"); }, 600);
webSocketInit();
// Zadanie 4; (DONE)
// Napisz funkcję, która dla podanej daty zwraca:
// - jaki to był dzień tygodnia, miesiąc i jaka pora roku;
function getDateDetails(date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var season = "";
    switch (date.getMonth()) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            throw new Error("Incorrect value");
    }
    return "".concat(months[date.getMonth()], ", ").concat(daysOfWeek[date.getDay()], ", ").concat(season);
}
console.log(getDateDetails(new Date()));
console.log(getDateDetails(new Date("April 10, 2025 19:29:00")));
// Zadanie 5; (PENDING)
// Napisz funkcję, która dla podanej daty zwraca datę pierwszego dnia danego tygodnia;
// Zadanie 6; (DONE)
// Napisz funkcję, która dla podanej daty zwraca czy to dzień tygodnia czy weekend;
function getDayType(date) {
    return date.getDay() === 0 || date.getDay() === 6 ? "Weekend" : "Weekday";
}
console.log(getDayType(new Date()));
// Zadanie 7 (DONE)
// Napisz funkcję, która dla podanej daty zwraca ile dni zostało do weekendu;
function getDaysUntilWeekend(date) {
    var dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return 0;
    }
    return "Days until weekend: ".concat(6 - dayOfWeek);
}
console.log(getDaysUntilWeekend(new Date()));
console.log(getDaysUntilWeekend(new Date("December 17, 2026 18:23:00")));
// Zadanie 8 (DONE)
// Napisz funkcję sprawdzającą czy podany rok był przestępny;
function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    }
    else if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        return false;
    }
}
console.log(isLeapYear(2025));
console.log(isLeapYear(2024));
console.log(isLeapYear(2027));
// Zadanie 9; (DONE)
// Napisz funkcje addDays, która przyjmuje dwa parametry:
// - obecną datę;
// - ile dni ma dodać i zwraca nową datę z dodanymi dniami;
function addDays(date, days) {
    var dateCopy = new Date(+date);
    dateCopy.setDate(dateCopy.getDate() + days);
    return dateCopy;
}
var newDate = addDays(new Date(), 6);
console.log(newDate);
// Zadanie 10; (DONE)
// Napisz funkcję isAfter, która przyjmuje dwa parametry:
// - date1;
// - date2;
// która zwraca true jeżeli data2 jest po dacie1;
function isAfter(date1, date2) {
    return date1.getTime() > date2.getTime();
}
console.log(isAfter(new Date(), new Date()));
console.log(isAfter(new Date(), new Date("March 17, 2025 18:23:00")));
// Zadanie 11; (DONE)
// Napisz funkcję isBefore, która przyjmuje dwa parametry:
// - date1;
// - date2;
// która zwraca true jeżeli data2 jest przed data1;
function isBefore(date1, date2) {
    return date1.getTime() < date2.getTime();
}
console.log(isBefore(new Date(), new Date()));
console.log(isBefore(new Date(), new Date("December 17, 2024 13:59:00")));
// Zadanie 12 (DONE)
// Napisz funkcję isFuture, która sprawdza czy podana data jest z przyszłości;
function isFuture(date) {
    return date.getTime() > Date.now();
}
console.log(isFuture(new Date()));
console.log(isFuture(new Date("May 17, 2025 12:34:00")));
// Zadanie 13; (DONE)
// Napisz funkcje isPast, która sprawdza czy podana data jest z przeszłości;
function isPast(date) {
    return date.getTime() < Date.now();
}
console.log(isPast(new Date()));
console.log(isPast(new Date("March 17, 2025 10:23:00")));
// Zadanie 14; (DONE)
// Napisz funkcje która dla podanej liczby sekund zwraca ile to w godzinach;
function convertSecondsToHours(seconds) {
    if (seconds < 0) {
        throw new Error("Seconds value \"".concat(seconds, "\" cannot be negative."));
    }
    return seconds / 3600;
}
console.log(convertSecondsToHours(5400));
console.log(convertSecondsToHours(9000));
console.log(convertSecondsToHours(60));
// Zadanie 15 (DONE)
// Napisz funkcję getToday, która zwraca dzisiejszą datę w formacie: nazwa dnia, data kalendarzowa;
function getToday() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateNow = new Date();
    return "".concat(daysOfWeek[dateNow.getDay()], ", ").concat(dateNow.getDate(), " ").concat(months[dateNow.getMonth()], " ").concat(dateNow.getFullYear());
}
console.log(getToday());
