//array initialize
const myArr=[0,1,2,3,4]
const myhero=["loki","lofi"]
const myArr2= new Array(1,"fahim")
//console.log(myArr2[1]);

//Array methods

/*myArr.push(6) //pushing nto array
myArr.push(7)
myArr.pop()// late e ja thakte ta pop korbe
myArr.unshift(10)//frist e 10 add korbe
myArr.shift()//first e ja thakbe remove kore dibe
console.log(myArr.includes(4));
console.log(myArr.indexOf(2));*/


/*const newArr=myArr.join()//arrray gula k string kore dey
console.log(myArr)
console.log(newArr);*/

console.log("A " , myArr);

const myArr3=myArr.slice(0,4)//0=0theke start hobe,4=4er ager ta porjonto
console.log("B " , myArr3);

const myArr4=myArr.splice(0,3)//0=0 theke shuru kore,3=3ta nibe and main array theke egula kete jabe

console.log("c", myArr4);
console.log(myArr);


