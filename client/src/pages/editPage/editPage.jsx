import React, { useState } from "react";
import SearchPage from "../searchPage/searchPage";

export default function EditPage(props){

    var {userName,password,email,experience,lvl} = props

    const [showData,setShowdata] = useState(false)

    function showPage(){
        console.log("masukkk");
        setShowdata(true)
    }

    return(
        <>
        
        
        
        {
            showData?
                <SearchPage userName={userName} email={email} password={password} experience={experience} lvl={lvl}/> :
                 <form>
                <h1>Edit Page</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputUsername" value={userName}/>       
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailAddress" value={email} aria-describedby="emailHelp"/>
                    <div id="emailHelp"   className="form-text">We'll never share your email with anyone else. </div>
            
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" value={password}/>
                </div>
                <div onClick={showPage} className="btn btn-primary">
                    Submit
                </div>
        </form>

        }
        </>
    )
}