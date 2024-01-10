const myNum=[1,2,3]
const total=myNum.reduce((acc,Cvalue)=>acc+Cvalue,0)
//console.log(total); 


const shoppingCart=[
    {name:"apple",price:10},
    {name:"banana",price:10},
    {name:"jackfruits",price:10},
    {name:"mango",price:10},
    {name:"graps",price:10}
]

const totalToPay=shoppingCart.reduce((acc,items)=>acc+items.price,0)
console.log(totalToPay);