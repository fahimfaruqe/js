//for of

const arr=[1,2,3,4,"fahim"]

for (const num of arr) {
    //console.log(num);
}

const greetings = 'Hello World'
for (const greet of greetings) {
    //console.log(greet);
}

//Maps uniqe value
const map = new Map()
map.set('IN' , "India")
map.set('BD' , "Bangladesh")
map.set("FR" ,"France")
//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ":-" ,value);
}

//not runnig because it is not iterable
const myObject={
    'game1' : "Pubg",
    'game2' : "free fire"
}
for (const obj of myObject) {
    //onsole.log(obj);
}

