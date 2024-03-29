// define books array with id, title, author, price, rating, image with 5 popular books.
// we create a component where we create state maintain the books array.
// in the rendering method we are going to display the books array in the form of table.

// Path: my-app/src/Components/BookList.js

import React, { Component } from 'react';

// define books array with id, title, author, price, rating, image with 5 popular books.

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

// we create a component where we create state maintain the books array.`
// i am extendign the functionaliyf of booklist compnent with addbook feature


function BookList() {
    const [bookList, setBookList] = React.useState(books);
    const [book, setBook] = React.useState({ id: 0, title: "", author: "", price: 0 });

    const onAddBook = () => {
        setBookList([...bookList, book]);
    }

    const onAddToCart = () => { 
        // access the book object and add to cart
        // create session storage and add the book to cart
        //

        // create the array in the sessionStorage with name books if does not exist
        // if exists then add the book to the array
        // if the book is already in the cart then increase the quantity of the book
        // if the book is not in the cart then add the book to the cart
        // if the book is already in the cart then increase the quantity of the book

        // explore useReducer hook to manage the state of the cart

       if(sessionStorage.getItem("books") === null){    
        sessionStorage.setItem("books",JSON.stringify([]));
         }
        let books = JSON.parse(sessionStorage.getItem("books"));
        console.log(books);
        let index = books.findIndex((b)=>b.id === book.id);
        if(index === -1){
            books.push({...book,quantity:1});
        }
        else{
            books[index].quantity++;
        }




        console.log("Add to Cart is called");
    }



    // in the rendering method we are going to display the books array in the form of table.

    return (
        <>
            <div>
                {/* define form tag title author and price and button to add the book */}

                <form>
                    <label>Id</label>
                    <input type="text" value={book.id} onChange={(e) => setBook({ ...book, id: e.target.value })} />
                    <label>Title</label>
                    <input type="text" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
                    <label>Author</label>
                    <input type="text" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} />
                    <label>Price</label>
                    <input type="text" value={book.price} onChange={(e) => setBook({ ...book, price: e.target.value })} />
                    <button  type='button' onClick={onAddBook}>Add Book</button>
                    {/* add button to tadd the book to cart */}
                    <button  type='button' onClick={onAddToCart}>Add to Cart</button>


                </form>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book) => {
                        return (
                            <tr >
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default BookList;
    