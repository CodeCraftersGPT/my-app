// create postlist component. it should display the list of posts. from the jsonplaceholder.typicode.com/posts
// use Fetch API to get the data from the server.

import { useState,useEffect } from "react";

function PostList(){
    
        let [posts,setPosts] = useState([]);
        let [errorMessage,setErrorMessage] = useState("");
        let [loadingMessage,setLoadingMessage] = useState(true);
         let [counter,setCounter] = useState(0); 

         let [name,setName] = useState("Rajesh"); 

    
            useEffect(()=>{

            console.log("useEffect is called");
            fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                }
            })
            .then(
                (response)=>
                {
                    if(!response.ok){
                        setLoadingMessage(false);
                        throw new Error("Error in fetching data");
                       
                    }
                    setLoadingMessage(false);
                return response.json();
                }
                )
            .then((data)=>{
                console.log(data);
                setLoadingMessage(false);
                setPosts(data);
            })
            .catch((error)=>{
                setErrorMessage(error.message);
            }
            )
        },[])// we are indicaing thea exeute effect only once. if we pass the empty array as second argument.

        useEffect(()=>{
            console.log("useEffect is called for counter channge");
            document.title = `Counter is ${counter}`;
        }
        ,[counter])// we are indicaing thea exeute effect only once. if we pass the empty array as second argument.

        useEffect(()=>{
            console.log("useEffect is called for name channge");
            document.title = `Name is ${name}`;
        }
        ,[name])// we are indicaing thea exeute effect only once. if we pass the empty array as second argument.

        // define useEffect to change the document title when counter is changed and name changed also

        useEffect(()=>{
            console.log("useEffect is called for counter and name channge");
            document.title = `Counter is ${counter} and name is ${name}`;
        }
        ,[counter,name])// we are indicaing thea exeute effect only once. if we pass the empty array as second argument.
        

        if(loadingMessage){
            return <h1>Loading...</h1>
        }

        if(errorMessage){
            return <h1>{errorMessage}</h1>
        }

    
        return (
            <>
            <div>
                <h1>Counter : {counter}</h1>


            <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>

            </div>

            <div>
                <h1>Name : {name}</h1>
                <button onClick={()=>setName("Rajesh")}>Rajesh</button>
                <button onClick={()=>setName("Kumar")}>Kumar</button>
                <button onClick={()=>setName("Raj")}>Raj</button>
            </div>
                <h1>Post List</h1>
                {
                    posts.map((post)=>{
                        return (
                            <div key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    export default PostList;
