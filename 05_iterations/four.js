const myObject ={
    js :"javascript",
    cpp :"c++",
    rb:"ruby"
}
for (const key in myObject) {
   console.log(`${key} is shortcut of ${myObject[key]}`);
}