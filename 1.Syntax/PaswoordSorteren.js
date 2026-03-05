// all passwords
const passwords = [
    "klepketoe",
    "test",
    "Azerty123",
    "rogier@work",
    "password",
    "MisterNasty12",
    "pwnz0red"
];

/// <summary>
/// Checks if a password is valid: min 8 characters, no '@' and no 'password'
/// </summary>
/// <param name="pw">the password (string)</param>
/// <returns>true or false</returns>
function isCorrectPassword(pw) {
    if (pw.length < 9) return false;
    if (pw.includes("@")) return false;
    if (pw === "password") return false;
    return true;
}

// print all passwords
console.log("Alle paswoorden: ");
for (let i = 0; i < passwords.length; i++) {
    console.log(`${i + 1}. ${passwords[i]}`);
}
console.log();

// create two lists, for correct and incorrect passwords
let welOk = [];
let nietOk = [];
for (const pw of passwords) {
    if (isCorrectPassword(pw)) {
        welOk.push(pw);
    } else {
        nietOk.push(pw);
    }
}

// print the two lists
console.log(`%cOk: ${welOk.join(", ")}`, "color: darkgreen");
console.log(`%cNiet ok: ${nietOk.join(", ")}`, "color: darkred");
