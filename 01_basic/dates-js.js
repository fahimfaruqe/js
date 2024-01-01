 let myDate=new Date()
 //console.log(myDate.toString()); //bd local time
 //console.log(myDate.toDateString());//only date
 //console.log(myDate.toISOString());//date and time
 //console.log(myDate.toJSON());
 //console.log(myDate.toLocaleDateString());//date easily understanding
 //console.log(typeof myDate); object

 /*let newDate=new Date(2023, 0, 10) //one formate
 console.log(newDate.toDateString());*/


 /*let myCreatedDate= new Date(2023,1,10,5,5) //another formate
 console.log(myCreatedDate.toLocaleString());*/

 /*let myCreatedDate= new Date("2023-01-14")
 console.log(myCreatedDate.toString());*/

 /*let myTimeStamp= Date.now()
 console.log(myTimeStamp);*/

 let newDate= new Date()
 //console.log(newDate.getMonth()); //specefic month ber korte
 //console.log(newDate.getDay())//specefiq
 //console.log(`the month is ${newDate.getMonth()} & the date is ${newDate.getDay()}`);
newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);