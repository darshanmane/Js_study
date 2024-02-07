const mynum = [1, 2, 3]

//  const mytotal = mynum.reduce( function(acc,curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval
//  } ,0)

const mytotal = mynum.reduce((acc,curval) => (acc + curval),0)

//  console.log(mytotal);

const shoppingCart = [
    {
        itemname : "Mobile dev course",
        price : 999
    },
    {
        itemname : "JS course",
        price : 1999
    },
    {
        itemname : "Python course",
        price : 2999
    },
    {
        itemname : "ASP.NET course",
        price : 9990
    },
    {
        itemname : "MVC course",
        price : 3999
    },
]

const totalprice = shoppingCart.reduce((acc,item) => ( acc + item.price),0)
console.log(totalprice);