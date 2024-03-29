// create a new component called RegistrationForm and add the following code to it:
// have useState with user object and setUser function with the name email , phone and password
// handle the validations for the email, phone and password

// all fields are mandatory
// email should be in email format
// phone should be 10 digits
// password should be atleast 8 characters
// password should contain atleast one special character
// display the error message in the UI if the user enters the wrong input


import { useState } from "react";

import axios from "axios";

function RegistrationForm(){
    let [user,setUser] = useState({name:"",email:"",phone:"",password:""});
    let [error,setError] = useState({name:"",email:"",phone:"",password:""});
    function handleInput(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    function updateUser(){
    //     axios.put("http://localhost:4020/users/1",{
    //         name:"John Doe",
        
    // })
    // .then(res => {  
    //     console.log(res.data);
    // }
    // )

    // fetch api for updating the user.
    // fetch("http://localhost:4020/users/1",{
    //     method:"PUT",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({
    //         name:"John Doe"
    //     })
        
    // }).then(res => {    
    //     console.log(res.data);
    // }).catch(err => {
    //     console.log(err);
    // })

    // define the fetch for updatng the user in the async await format;

    async function updateUser(){
        try{
            let res = await fetch("http://localhost:4020/users/1",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:"John Doe"
                })
            })
            let data = await res.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }

    updateUser();
    
}


function deleteUser(){
    axios.delete("http://localhost:4020/users/1")
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })  

}
        


    function handleSubmit(e){
        e.preventDefault();
        if(user.name === ""){
            setError(prevError => {
                console.log(prevError);
                return {
                ...prevError,
                name: "Name is required"
            };
        });
        }




        if(user.email === ""){
            setError(prevError => {
                console.log(prevError);
                return {
                    ...prevError,
                    email: "Email is required"
                };
            });
        }
        if(user.phone === ""){
            setError(prevError => ({
                ...prevError,
                phone: "Phone is required"
            }));
        }
        if(user.password === ""){
            setError(prevError => ({
                ...prevError,
                password: "password is required"
            }));
        }
        if(user.email !== ""){
            if(!user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                setError({
                    ...error,
                    email:"Email is not valid"
                })
            }
        }
        if(user.phone !== ""){
            if(user.phone.length !== 10){
                setError({
                    ...error,
                    phone:"Phone is not valid"
                })
            }
        }
        if(user.password !== ""){
            if(user.password.length < 8){
                setError({
                    ...error,
                    password:"Password should be atleast 8 characters"
                })
            }
            if(!user.password.match(/[@#$%^&*()!]/)){
                setError({
                    ...error,
                    password:"Password should contain atleast one special character"
                })
            }
        }
        console.log(user);

        // 

        // use either axios or fetch api to update the to back end

        // define the post api with axios to post the user data to the server

        axios.post("http://localhost:4020/users",user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleInput} />
                    <p>{error.name}</p>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleInput} />
                    <p>{error.email}</p>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleInput} />
                    <p style={{color:'red'}}>{error.phone}</p>
                </div>
                <div>
                    <label
                    >Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleInput} />
                    <p>{error.password}</p>
                </div>
                <button type="submit">Register</button>
                {/* buttong for updating the user */}
                <button type="button" onClick={updateUser}>Update</button>

                <button type="button" onClick={deleteUser}>Update</button>
            </form>
        </>
    )
}

export default RegistrationForm;
