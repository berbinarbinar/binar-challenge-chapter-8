import React, {useState} from "react";
import FinalPage from '../finalPage/finalPage'

function EditPage (props) {

    const { userName, password, email } = props

    const [showData, setShowData] = useState(false)
    const [userNameNew, setNewUserName] = useState('')
    const [passwordNew, setNewPassword] = useState('')
    const [emailNew, setNewEmail] = useState('')
   

    const [experience, setExperience] = useState(600000)
    const [lvl, setLvl] = useState(777)

    function editUser() {
        let nameValue = document.getElementById('inputUsername').value
        let passwordValue = document.getElementById('inputPassword').value
        let emailValue = document.getElementById('emailAddress').value
        let showData = true

        setShowData(showData)
        setNewUserName(nameValue)
        setNewPassword(passwordValue)
        setNewEmail(emailValue)
        setExperience(experience)
        setLvl(lvl)
    }



    return(
        <>
        {
            showData ?
            <FinalPage userName={userName} password={password} email={email} experience={experience} lvl={lvl} /> :
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" class="form-control" id="inputUsername" value={userName}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailAddress" value={email} aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword" value={password}/>
            </div>
                <div onClick={editUser} className="btn btn-primary">
                Submit
            </div>
            </form>
        
    }
    </>
    )
}


export default EditPage