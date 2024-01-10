const myNum=[,2,3,4,5,6,7,8,9]

const myNewNum= myNum.filter( (nums)=>nums>4 )
//console.log(myNewNum);

const books=[
    {title:"The Catcher in the Rye",author:"JD0 Salinger",publish:2000,edition:2006},
    {title:"The Catcher in the Rye",author:"JD1 Salinger",publish:2001,edition:2002},
    {title:"The Catcher in the Rye",author:"JD2 Salinger",publish:2000,edition:2006},
    {title:"The Catcher in the Rye",author:"JD3 Salinger",publish:2002,edition:2006},
    {title:"The Catcher in the Rye",author:"JD4 Salinger",publish:2003,edition:2009},
    {title:"The Catcher in the Rye",author:"JD5 Salinger",publish:2000,edition:2013},
    {title:"The Catcher in the Rye",author:"JD6 Salinger",publish:2005,edition:2008},
    {title:"The Catcher in the Rye",author:"JD7 Salinger",publish:2000,edition:2002}

]
let newBooks =books.filter( (bk)=> {
    return bk.publish >=2000 && bk.edition >=2005
})
console.log(newBooks);