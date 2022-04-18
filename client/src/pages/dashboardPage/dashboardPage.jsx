import React, { useState } from "react";
import {EditPage} from "../../pages"
import { DashboardComponent } from "../../components";

export default function DashboardPage (props){
    var {userName,password,email,experience,lvl} = props

    var [showdata,setShowdata] = useState(false)

    function showPage(){
        console.log("masukkk");
        setShowdata(true)
    }
   

    return(
    <>
        

        {
            showdata?
            <EditPage userName={userName} email={email} password={password} experience={experience} lvl={lvl}/> : <>
            {/* <h1>{JSON.stringify(showdata)}</h1> */}
            <>
            <h1>Dashboard Page</h1>
            <div className="row">
                <div className="col">
                    <h1> Username: </h1>
                    <h2>Email:</h2>
                    <h3>Password:</h3>
                    <h4>Experience:</h4>
                    <h5>Lvl:</h5>
                </div>
                <div className="col">
                <h1>{userName}</h1>
                <h2>{email}</h2>
                <h3>{password}</h3>
                <h4>{experience}</h4>
                <h5>{lvl}</h5>
                </div>
            </div>
            <div onClick={showPage} className="btn btn-primary">Edit</div>
            
            
            
            </>
            
        </>
        }
    </>
            
    
    )
}