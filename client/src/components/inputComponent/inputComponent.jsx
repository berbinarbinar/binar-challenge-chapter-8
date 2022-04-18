import React, { useState } from "react";

export default function InputComponent (props){
    const { handleProps } = props
    // const [userName,setUserName] = useState("")
    // const [password,setPassword] = useState("")
    // const [email,setEmail] = useState("")
    const [experience,setExperience] = useState (600000)
    const [lvl,setLvl] = useState(660)

    function dataUser(){
        var namevalue = document.getElementById("inputUsername").value;
        var emailvalue = document.getElementById("emailAddress").value;
        var passwordvalue = document.getElementById("inputPassword").value;
        var showData = true
        // setUserName(namevalue)
        // setEmail(emailvalue)
        // setPassword(passwordvalue)
        handleProps(namevalue,passwordvalue,emailvalue,experience,lvl,showData)
    }
    return(
        <>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputUsername"/>       
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword"/>
                </div>
                <div onClick={dataUser} className="btn btn-primary">
                    Submit
                </div>
        </form>
        </>
    )
}