import React, {useState} from 'react'
import { CardComponent } from '../../components'
import { DashboardPage } from '../../pages'

export default function RegisterPage() {

    const [showData, setShowData] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExperience] = useState(600000)
    const [lvl, setLvl] = useState(665)

    // function showPage() {

    //     setShowData(true)
    // }

    function handleData(userName, password, email, experience, lvl, showData) {
        // console.log(nameValue, passwordValue, emailValue, experience, lvl, showData, '==> ini di register page');
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
            {/* <CardComponent handleData={handleData}/> ==> ini dipindahin ke line 36 */}
            {/* <button onClick={showPage}>Input</button> */}
            {
                showData ? 
                    <DashboardPage userName={userName} password={password} email={email} experience={experience} lvl={lvl} /> : <CardComponent handleData={handleData}/>
            }
        </>
    )
}