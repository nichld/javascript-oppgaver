function checkNumber(arg) {
    if (typeof arg === "number") {
        console.log("Dette er et tall!");
    } else {
        console.log("Test failed");
    }
}

// Tester funksjonen
checkNumber(1);       // Dette er et tall!
checkNumber("1");     // Test failed
checkNumber(42.5);    // Dette er et tall!
checkNumber(true);    // Test failed

function sjekkVariabler(a, b) {
    // Sjekker om begge variablene er av typen "number"
    if (typeof a === "number" && typeof b === "number") {
        // Sjekker om minst én av dem er større enn 5
        if (a > 5 || b > 5) {
            let størreVerdi = a > 5 ? a : b; // Finn den største av dem
            console.log(`Jeg fant en variabel som var større enn fem! Den hadde verdien: ${størreVerdi}`);
        } else {
            console.log("Ingen av variablene var større enn fem.");
        }
    } else {
        // Hvis én eller begge variablene ikke er "number"
        console.log(`Variablene er ikke av typen number, de er av typen: ${typeof a} og ${typeof b}`);
    }
}

// **Tester funksjonen:**
sjekkVariabler(3, 7);      // Jeg fant en variabel som var større enn fem! Den hadde verdien: 7
sjekkVariabler(2, 4);      // Ingen av variablene var større enn fem.
sjekkVariabler("hei", 10); // Variablene er ikke av typen number, de er av typen: string og number
sjekkVariabler(6, "test"); // Variablene er ikke av typen number, de er av typen: number og string
sjekkVariabler(8, 12);     // Jeg fant en variabel som var større enn fem! Den hadde verdien: 8



function leggSammen(arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return(arg1+arg2)
    }
    else {
        return("Feil: Bare tall er tillatt!")
    }
}

let sum = leggSammen(1, "2")
console.log(sum)

console.log(leggSammen(4, 5));      // 9
console.log(leggSammen("hei", 10)); // Feil: Bare tall er tillatt!
console.log(leggSammen(3.5, 2.5));  // 6
console.log(leggSammen(100, -50));  // 50
console.log(leggSammen(true, 5));   // Feil: Bare tall er tillatt!



function skrivUtTekst(arg1, arg2) {
    if (typeof arg1 === "string" && typeof arg2 === "string") {
        return(`Utskrift til konsoll: ${arg1} og ${arg2}`)
    }
    else {
        return("Feil: Jeg skriver bare ut tekst!")
    }
}

console.log(skrivUtTekst("Hei", "Verden"));
// Utskrift til konsoll: Hei og Verden

console.log(skrivUtTekst("JavaScript", 10));
// Feil: Jeg skriver bare ut tekst!


function kalkulator(num1, num2, operator) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        if (operator === "+") {
            return(num1 + num2)
        }
        else if (operator === "-") {
            return(num1 - num2)
        }
        else if (operator === "*") {
            return(num1 * num2)
        }
        else if (operator === "/") {
            return(num1 / num2)
        }
        else {
            return("Feil: Ikke en gyldig operasjon!")
        }
    }
    else {
        return("Feil: Begge argumentene må være tall!")
    }
}

function kalkulator2(num1, num2, operator) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Feil: Begge argumentene må være tall!";
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Feil: Ikke en gyldig operasjon!";
    }
}


console.log(kalkulator(10, 5, "+")); // 15
console.log(kalkulator(10, 5, "-")); // 5
console.log(kalkulator(10, 5, "*")); // 50
console.log(kalkulator(10, 5, "/")); // 2
console.log(kalkulator(10, "fem", "+")); // Feil: Begge argumentene må være tall!
console.log(kalkulator(10, 5, "%")); // Feil: Ikke en gyldig operasjon!

console.log(kalkulator2(10, 5, "+")); // 15
console.log(kalkulator2(10, 5, "-")); // 5
console.log(kalkulator2(10, 5, "*")); // 50
console.log(kalkulator2(10, 5, "/")); // 2
console.log(kalkulator2(10, "fem", "+")); // Feil: Begge argumentene må være tall!
console.log(kalkulator2(10, 5, "%")); // Feil: Ikke en gyldig operasjon!


console.log(finnStørste(10, 5)); // 10
console.log(finnStørste(3, 7));  // 7
console.log(finnStørste(4, 4));  // Tallene er like: 4