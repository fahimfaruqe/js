const coding =["js","rb","c++","java"]
coding.forEach(function (value) {
    //console.log(value);
}
)

coding.forEach( (item)=>{
//console.log(item);
} )

function printMe(item) {
    console.log(item);
}
//coding.forEach(printMe)
coding.forEach((items,index,arr)=>{
   //console.log(items,index,arr); 
})

const myCoding=[
    {
        name:"Ali",
        lang: "Java"
    },
    {
        name:"bali",
        lang: "c++"
    },
    {
        name:"cali",
        lang: "phy"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.lang);
} )