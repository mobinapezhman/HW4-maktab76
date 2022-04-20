function protectEmail(email) {
    let hideEmail = "";
    for (let i = 0; i < email.length; i++) {
        if (i > 2 && i < email.indexOf("@")) {
            hideEmail += ".";
        }
        else {
            hideEmail += email[i];
        }

    }
    return hideEmail;
}
console.log(protectEmail("robin_singh@example.com"));