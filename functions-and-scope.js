// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult
// over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken
// hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

let grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten
// namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
//===========================================
// console.log('Opdr.1a');
// console.log("// ---- Verwachte uitkomst: 6");
// {
//     console.log(cumLaude1());
//     function cumLaude1(){
//         let amountCumLaude1 = 0;
//         for (let i= 0; i < grades.length; i++) {
//             if (grades[i] >= 8){
//                 amountCumLaude1++;
//             }
//         }
//         return amountCumLaude1;
//     }
// }
// console.log('Eind Opdr.1a\n');
//======================================================================================================================

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude
// studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals
// bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
//===========================================
{
    console.log('Opdr.1b');

    console.log("// ---- Verwachte uitkomsten:\n" +
        "// cumLaude(grades) geeft 6\n" +
        "// cumLaude([6, 4, 5]) geeft 0\n" +
        "// cumLaude([8, 9, 4, 6, 10]) geeft 3");


    function cumLaude2(arrGrades) {
        console.log(arrGrades);
        let amountCumLaude2 = 0;
        for (let i = 0; i < arrGrades.length; i++) {
            // console.log(amountCumLaude2)
            if (grades[i] >= 8) {
                amountCumLaude2++;
            }
        }
        return amountCumLaude2;
    }

    const diplomasOne = cumLaude2(grades);
    const diplomasTwo = cumLaude2([6, 4, 5]);
    const diplomasThree = cumLaude2([8, 9, 4, 6, 10]);

    console.log(diplomasOne, diplomasTwo, diplomasThree);

    console.log('Eind Opdr.1b\n');
}
//======================================================================================================================

function cumLaude(gradesArray) {
    let count = 0;

    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] >= 8) {
            count = count + 1;
            // dit mag ook: cumLaude += 1;
            // dit mag ook: cumLaude++;
        }
    }

    return count;
}

const diplomasOne = cumLaude(grades);
const diplomasTwo = cumLaude([6, 4, 5]);
const diplomasThree = cumLaude([8, 9, 4, 6, 10]);

console.log(diplomasOne, diplomasTwo, diplomasThree);








/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen
// met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//===========================================
// console.log('Opdr.2');
// console.log("// ---- Verwachte uitkomst: 6.642857142857143");
// {
//     console.log(fncAvgGrades1(grades));
//     console.log(fncAvgGrades1(grades = [6, 4, 5]));
//     console.log(fncAvgGrades1(grades = [8, 9, 4, 6, 10]));
//
//     function fncAvgGrades1(arrGrades) {
//         let intTotGrades = 0;
//         for (let i = 0; i < arrGrades.length; i++) {
//             intTotGrades = intTotGrades + grades[i];
//         }
//         return (intTotGrades / arrGrades.length);
//     }
// }
// console.log('Eind Opdr.2\n');
//======================================================================================================================

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde
// cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals
// bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
//===========================================
// console.log('Opdr.2b');
// console.log("/* 2c: Afronden op twee decimalen */");
// {
//     console.log(fncAvgGrades(grades));
//     console.log(fncAvgGrades(grades = [6, 4, 5]));
//     console.log(fncAvgGrades(grades = [8, 9, 4, 6, 10]));
//
//     function fncAvgGrades(arrGrades) {
//         let intTotGrades = 0;
//         for (let i = 0; i < arrGrades.length; i++) {
//             intTotGrades = intTotGrades+grades[i];
//         }
//         let dblAvgGrades = (intTotGrades / arrGrades.length);
//         return dblAvgGrades.toFixed(2);
//     }
// }
// console.log('Eind Opdr.2b\n');
//======================================================================================================================



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag
// hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
//===========================================
// console.log('Opdr.3a+b');
// console.log("// ---- Verwachte uitkomsten:\n" +
//     "// highestGrade(grades) geeft 9\n" +
//     "// highestGrade([6, 4, 5]) geeft 6\n" +
//     "// highestGrade([8, 9, 4, 6, 10]) geeft 10");
// {
//     console.log(highestGrade(grades));
//     console.log(highestGrade(grades = [6, 4, 5]));
//     console.log(highestGrade(grades = [8, 9, 4, 6, 10]));
//
//     function highestGrade(arrGrades) {
//         let intHighestGrade = 0;
//         for (let i = 0; i < arrGrades.length; i++) {
//             if (grades[i] > intHighestGrade){
//                 intHighestGrade = grades[i]
//             }
//         }
//         return intHighestGrade;
//     }
// }
// console.log('Eind Opdr.3a+b\n');
//======================================================================================================================

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer
// teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals
// bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
