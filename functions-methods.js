// Je gaat functies schrijven die we kunnen hergebruiken om sommige e-mailadressen te checken.
// Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailadress) {
    let domainName = emailadress.substring(emailadress.indexOf('@') + 1);
    return domainName;
}

const outcome1 = getEmailDomain("n.eeken@novi-education.nl");
console.log(outcome1)

// of gewoon zo:
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailaddress) {
    if (getEmailDomain(emailaddress) === "novi-education.nl") {
        const outcome = "Student";
        return outcome;
    } else if (getEmailDomain(emailaddress) === "novi.nl") {
        const outcome = "Medewerker";
        return outcome;
    } else {
        const outcome = "Extern";
        return outcome;
    }
}


let outcome2 = typeOfEmail("n.eeken@novi-education.nl");
console.log(outcome2)
outcome2 = typeOfEmail("t.mellink@novi.nl");
console.log(outcome2)
outcome2 = typeOfEmail("novi.nlaapjesk@outlook.com");
console.log(outcome2)
outcome2 = typeOfEmail("a.wiersma@outlook.com");
console.log(outcome2)
outcome2 = typeOfEmail("a.wiersma@gmail.com");
console.log(outcome2)

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:

function checkEmailValidity(emailaddress) {
    if (emailaddress.includes("@") && !emailaddress[emailaddress.length - 1].includes(".") && !emailaddress.includes(",")) {
        return true;
    } else {
        return false;
    }
}


let outcome3 = checkEmailValidity("n.eeken@novi.nl") //geeft true - want @ en punt op de juiste plek
console.log(outcome3);
outcome3 = checkEmailValidity("tessmellink@novi.nl")// geeft true - want @ en punt op de juiste plek
console.log(outcome3);
outcome3 = checkEmailValidity("n.eekenanovi.nl") //geeft false - want geen @
console.log(outcome3);
outcome3 = checkEmailValidity("n.eeken@novinl.") //geeft false - want de punt mag niet als laatst
console.log(outcome3);
outcome3 = checkEmailValidity("tessmellink@novi,nl") //geeft false - want er staat een komma in
console.log(outcome3);
