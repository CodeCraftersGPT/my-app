// function akuseState(initialValue){
//     let data = initialValue;
//     function setValue(newValue){
//         data = newValue;
//     //repaint the componet
//     }
//     return [data,setValue]
// }


// const [count,setCount] = akuseState(20);

// const user = {name:"Ravi",age:21,salary:10000,married:true};

// const user1 = {...user,age:22};

// // {...user,age:user.age + 1}

// // define ternary operator in havascrit

// let a = 10;
// let b = 20;
// let c = a > b ? a : b;


const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price:200}
    ,
    {
        id: 2,
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        price:300}
    ,
    {
        id: 3,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        price:400}

    ,
    {
        id: 4,
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        price:500}

    ]

    const newBooks = [...books,{
        id: 6,
        title: "The Dopomine Effect",
        author: "Kumar",
        price:301}]

        console.log(newBooks);//