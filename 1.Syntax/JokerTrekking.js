// Constants
const AANTAL_SPELERS = 10000;
const MIN_GETAL = 1000;
const MAX_GETAL = 9999;

// Prize amounts
const PRIJS_1_CIJFER = 2.5;
const PRIJS_2_CIJFERS = 10;
const PRIJS_3_CIJFERS = 100;
const PRIJS_4_CIJFERS = 500;

/**
 * Generates a random number between min and max (inclusive)
 * @param {number} min - minimum value
 * @param {number} max - maximum value
 * @returns {number} random number
 */
function genereerGetal(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculates how many last digits match between two numbers
 * Uses modulo to compare last 1, 2, 3 or 4 digits
 * @param {number} cijfer1 - first number
 * @param {number} cijfer2 - second number
 * @returns {number} number of matching last digits (0-4)
 */
function aantalGelijkeCijfers(cijfer1, cijfer2) {
    // Check all 4 digits
    if (cijfer1 % 10000 === cijfer2 % 10000) return 4;
    // Check last 3 digits
    if (cijfer1 % 1000 === cijfer2 % 1000) return 3;
    // Check last 2 digits
    if (cijfer1 % 100 === cijfer2 % 100) return 2;
    // Check last digit
    if (cijfer1 % 10 === cijfer2 % 10) return 1;
    // No match
    return 0;
}

/**
 * Calculates the prize based on number of matching digits
 * @param {number} aantalCijfers - number of matching digits
 * @returns {number} prize amount in euros
 */
function berekenWinst(aantalCijfers) {
    switch (aantalCijfers) {
        case 1: return PRIJS_1_CIJFER;
        case 2: return PRIJS_2_CIJFERS;
        case 3: return PRIJS_3_CIJFERS;
        case 4: return PRIJS_4_CIJFERS;
        default: return 0;
    }
}

// Generate the winning number (de trekking)
const trekking = genereerGetal(MIN_GETAL, MAX_GETAL);
console.log(`Trekking: ${trekking}`);
console.log();

// Counters for each category
let winnaars1Cijfer = 0;
let winnaars2Cijfers = 0;
let winnaars3Cijfers = 0;
let winnaars4Cijfers = 0;
let totaleWinst = 0;

// Simulate all players
for (let i = 0; i < AANTAL_SPELERS; i++) {
    // Generate player number
    const spelerGetal = genereerGetal(MIN_GETAL, MAX_GETAL);

    // Calculate matching digits
    const aantalCijfers = aantalGelijkeCijfers(trekking, spelerGetal);

    // Add winnings
    const winst = berekenWinst(aantalCijfers);
    totaleWinst += winst;

    // Update category counters
    switch (aantalCijfers) {
        case 1: winnaars1Cijfer++; break;
        case 2: winnaars2Cijfers++; break;
        case 3: winnaars3Cijfers++; break;
        case 4: winnaars4Cijfers++; break;
    }
}

// Print results per category
console.log("Resultaten:");
console.log(`Laatste cijfer juist (€${PRIJS_1_CIJFER}): ${winnaars1Cijfer} spelers`);
console.log(`Laatste twee cijfers juist (€${PRIJS_2_CIJFERS}): ${winnaars2Cijfers} spelers`);
console.log(`Laatste drie cijfers juist (€${PRIJS_3_CIJFERS}): ${winnaars3Cijfers} spelers`);
console.log(`Alle cijfers juist (€${PRIJS_4_CIJFERS}): ${winnaars4Cijfers} spelers`);
console.log();

// Calculate and print average winnings
const gemiddeldeWinst = totaleWinst / AANTAL_SPELERS;
console.log(`Totale winst uitbetaald: €${totaleWinst.toFixed(2)}`);
console.log(`Gemiddelde winst per speler: €${gemiddeldeWinst.toFixed(2)}`);
