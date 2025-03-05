// Deklarer en variabel
let navn;

// Initialiserer en variabel
navn = "Geir Hilmersen";

// Deklarer og initialiserer en variabel
let alder = 42;

// Forskjellen på let og var
var gammel = 42;
let ung = 42;
// Forskjellen på let og var er at let er block scoped, mens var er function scoped.
// Dette betyr at en variabel deklarert med let kun er tilgjengelig innenfor den blokken den er deklarert i.
// En variabel deklarert med var er tilgjengelig i hele funksjonen den er deklarert i.
// Dette kan illustreres med følgende eksempel:

function test() {
    if (true) {
        var var1 = 1;
        let let1 = 1;
    }

    console.log(var1); // 1
    // console.log(let1); // ReferenceError: let1 is not defined
}

test();

// Forskjellen på en konstant og en variabel
const konstant = 42;
// konstant = 43; // TypeError: Assignment to constant variable.
// En konstant er en variabel som ikke kan endres etter at den er initialiseret.

// Forskjell på null og undefined
let variabel1 = null;
let variabel2;

console.log(variabel1); // null
console.log(variabel2); // undefined
// null er en verdi som representerer "ingen verdi", mens undefined representerer en variabel som ikke er initialisert.