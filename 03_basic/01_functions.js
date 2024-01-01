

function sayMyName() {
    console.log("F");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("M");
}
//sayMyName()

/*function addTwoNumbers(number1,number2) {
    console.log(number1 + number2);
}
addTwoNumbers(3,4)*/
function addTwoNumbers(number1,number2) {
    //let result=number1+number2
    //return result

    return number1+number2
}
const result=addTwoNumbers(2,3)
//console.log("result:" ,result);

function logIn(username) {
    return `${username} just logged in`
}
//console.log(logIn("fahim"));

function caltulatePrice(...num1) {
    return num1
}
console.log(caltulatePrice(200,300,4000,5000));
