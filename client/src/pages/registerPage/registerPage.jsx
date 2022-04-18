import React, { useState } from "react";
import { CardComponent,DashboardComponent } from "../../components";
import {DashboardPage} from "../../pages"


export default function RegisterPage(){
    const [showdata,setShowdata] = useState(false)
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [experience,setExperience] = useState (600000)
    const [lvl,setLvl] = useState(660)


    function handledata(userName,password,email,experience,lvl,showData){
        setShowdata(showData)
        setUserName(userName)
        setPassword(password)
        setEmail(email)
        setExperience(experience)
        setLvl(lvl)
    }

    

    

    return(
        <>
        
        {
            showdata ?
            <DashboardPage userName={userName} email={email} password={password} experience={experience} lvl={lvl}/> : <CardComponent handledata={handledata}/>
        }
            
        </>
    )
}
