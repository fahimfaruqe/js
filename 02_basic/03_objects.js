//singleton
//object.creat

//object literals
const JsUser={
    name: "fahim",
    "full name":"omar Faruqe",
    age: 18,
    location: "Cumilla",
    email:"fahim@gmail.com",
    isLoggedIn: false,
    lastLoginDay:["Monday","Saturday"],
    

}
/*console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser);
JsUser.email="ffff@ggg.com"
console.log(JsUser.email);
Object.freeze(JsUser)//extra kono input dile o nibe nah freez hoye jabe
JsUser.email="ffff@ggg.com"
JsUser.location="ffff@ggg.com"
console.log(JsUser)*/



JsUser.greeting=function () {
    console.log("hello Mr.");
}
JsUser.greetingTwo=function(){
    console.log(`hello Mr ,${this.name}`);//uporer data theke kisu nite
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

