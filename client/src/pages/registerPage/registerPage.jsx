import React, {useState} from "react";
import { CardComponent } from "../../components"
import { DashboardPage } from "../../pages"

function RegisterPage () {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState(600000)
    const [lvl, setLvl] = useState(777)
    const [showData, setShowData] = useState(false)

    function handleData(userName, password, email, experience, lvl, showData){
        // console.log(userName, "masukk");
        setShowData(showData)
        setUserName(userName)
        setPassword(password)
        setEmail(email)
        setExperience(experience)
        setLvl(lvl)
    }

    return(
        <>
            {/* <h1>{JSON.stringify(showData)}</h1> */}
            
            {
                showData ?
                <DashboardPage userName={userName} password={password} email={email} experience={experience} lvl={lvl} /> : <CardComponent handleData={handleData}/>
            }
        </>
    )
}

export default RegisterPage