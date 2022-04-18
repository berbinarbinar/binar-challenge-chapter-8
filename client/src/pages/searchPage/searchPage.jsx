import React, {useState}from "react";
import {DashboardPage} from "../../pages"

export default function SearchComponent (props){

    const [showData,setShowdata] = useState(false)
    var {userName,password,email,experience,lvl} = props

    function showPage(){
        console.log("masukkk");
        setShowdata(true)
    }

    return(
       <>
           
            {
                showData?
                <DashboardPage userName={userName} email={email} password={password} experience={experience} lvl={lvl}/> :
                <>
                 <h1>Search Box</h1>
                <input  type="search" className="search" placeholder="Enter Username" />
                <br />
                <input type="search" className="search" placeholder="Enter email" />
                <br />
                <input type="search" className="search" placeholder="Enter experience" />
                <br />
                <input type="search" className="search" placeholder="Enter Lvl" />
                <div onClick={showPage} className="btn btn-primary">Back</div>
                </>
            }
       </> 
    )
}