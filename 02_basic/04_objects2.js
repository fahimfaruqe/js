//const tinderUser = new Object() //sinletone object
const tinderUser = {} //non singletone object
tinderUser.id="123abc"
tinderUser.name="fahim"
tinderUser.isLoggedIn=false
//console.log(tinderUser);
const regularUser={
    email:"fahim@gmail.com",
    fullname:{
        userfullname:{
            firstName:"fahim",
            lastname :"faruqe"
        }
    }
}
//console.log(regularUser.fullname);
const obj1={1:"a" ,2:"b"}
const obj2={3:"c",4:"d"}
//const obj3= Object.assign({},obj1,obj2)//old version
const obj3={...obj1, ...obj2} //new version
//console.log(obj3);

const user= [
    {
        id: 1,
        email:"fhaim123@gmail.com"
    },
    {
        id: 1,
        email:"fhaim123@gmail.com"
    },
    {
        id: 1,
        email:"fhaim123@gmail.com"
    }

]

//console.log(user[1].email);
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));

//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));



const course={
    name : "fahim",
    password : "12343dfds",
    isLoggedIn:true
}
const{password} = course
console.log(password);