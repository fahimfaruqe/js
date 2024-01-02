const user = {
    username: "Fahim",
    price: 999,
    welcomeMsg : function(){
        console.log(`${this.username} ,welcome to the website`);
        console.log(this);
    }
}
/*user.welcomeMsg()
user.username="sam"
user.welcomeMsg()*/
//console.log(this);


/*function chai(){
    let username = "fahim"
    console.log(this);
}
chai()
ans = undefined; bcz function e this.cole nah*/

//methord=1
/*const addTwoNum = (num1,num2)=>{
    return num1+num2
}
console.log(addTwoNum(2,3));*/



//for reactjs
const addTwoNum=(num1,num2) =>(num1+num2)
console.log(addTwoNum(2,3));