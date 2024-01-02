const loggedIn=true
const debitCard=true
const googleSingIn=false
const emailSingIn=true
if (loggedIn && debitCard) {
    console.log("allow to buy");
}
 if (googleSingIn || emailSingIn) {
    console.log("User Logged in");
}
