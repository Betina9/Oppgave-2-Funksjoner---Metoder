/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
const etTall = (tall) => {
  if (tall % 2 === 0) {    
    return "Partall";
  } else {
    return "Oddetall";
  }
};
/* Her deler vi tallet på to for å se om vi får rest. Om resten er 0 så vil det si at vi har et partall. Får vi rest så er det et oddetall.
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
const storTekst = (tekst) => {
  return tekst.toUpperCase() + "!";
};
/* Her bruker vi .toUpperCase() på teksten fordi det vil gjøre skriften stor, og + "!" gjør at den legger på et utropstegn på slutten.
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

const enHilsen = (navn, time) => {
  if (time === undefined) {
    return "Feil.Du må sende inn en timeverdi";
  }
  if (time < 0 || tid > 23) {
    return "Ugyldig tid";
  }
  if (time >= 0 && time <= 5) {
    return `God natt ${navn}`;
  }
  if (time >= 6 && time <= 11) {
    return `God morgen ${navn}`;
  }
  if (time >= 12 && time <= 17) {
    return `God morgen ${navn}`;
  }
  if (time >= 18 && time <= 23) {
    return `God kveld ${navn}`;
  }
};
/* Her har vi definert hva hilsen skal si etter hvilken time man skriver inn. if = hvis, så hvis man skriver inn 3 så vil man få "God natt "navnet ditt"" tilbake."
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
const fjernForsteOgSiste = (array) => {
  return Array.slice(1, array.length - 1);
};
/* .slice(start, ending) kopierer arrayet, (1 betyr at den skal starte på item 2 i rekken siden indexen begynner med 0, array.lenght -1) betyr at den skal stoppe før siste item.
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
cons nyTekst = (tekst) => {
    const trimmet = tekst.trim();
    const ny = trimmet.replace("vanskelig", "gøy");
    return ny;
};
/* Her vil .trim() ta vekk spacen på starten og slutten. .replace("eksisterende ord", "nytt ord") vil endre ordet til det vi ønsker.
/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
1: items.shift();
2: const index = items.indexOf("Viskelær");
if (index !== -1) {
    items[index] = "Linjal";
}
3: items.splice(0, 2, "Markeringspenn");
4: const resultat = items.join(" | ");

/* Vi skriver inn items.shift() for å fjerne det første itemet (bok). indexOf() leter etter itemet vi ønsker å finne, (index !== -1) er for å sjekke at vi faktisk fant itemet, deretter skriver vi items[index] = "Linjal"; for å sette inn et annet item.
Splice("hvor i arrayet vi vil starte"(0 fordi vi vil starte fra begynnelsen), "Hvor mange elementer som skal slettes(2)", "hva jeg vil legge inn der istedenfor");. 
join() er en array- metode som slår sammen alle elementene i et array til en string, "|" er det vi har spesifisert skal stå mellom alle itemsene.
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
