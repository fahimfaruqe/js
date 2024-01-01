const marvel_heros=["Thore","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]
/*marvel_heros.push(dc_heros)//push mani ektar vitor arekta dhukay
console.log(marvel_heros);*/

/*const allHeros = marvel_heros.concat(dc_heros)//concat =sobgula push kore new array creat kore
console.log(allHeros);*/



/*//another method for adding
const allNewHeros=[...marvel_heros, ...dc_heros]
console.log(allNewHeros);*/

/*const anotherArray= [,2,3,[4,5,6],4,5,9,[2,3,[4,5]]]
const newAnotherArray=anotherArray.flat(Infinity)//flat= songula ekta array te niye ashe,infinity holo sobgula array nibe

console.log(newAnotherArray);*/

//console.log(Array.isArray("fahim"));//isArray=question to programme
//console.log(Array.from("fahim"));//from= ja e thak Array te convert kore dibe



console.log(Array.from({name: "fahim"}));//result []=blank

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//3ta alada alada array add korte 'of' use korte hoy
