import React from "react";


function FinalPage(props) {

    const { userName, password, email, experience, lvl } = props


    return(
        <>
        <div>
            <h1>THIS IS FINAL DASHBOARD PAGE!</h1>
            <h1>Username: {userName}</h1>
            <h1>Password: {password}</h1>
            <h1>Email: {email}</h1>
            <h1>Experience: {experience}</h1>
            <h1>Level: {lvl}</h1>
        </div>
        </>
    )
}



export default FinalPage