import React, { useState } from 'react'

export default function InputComponent(props) {

    const { handleProps } = props
    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    const [experience, setExperience] = useState(600000)
    const [lvl, setLvl] = useState(665)

    function cobainData() {
        let nameValue = document.getElementById('inputUsername').value
        let passwordValue = document.getElementById('inputPassword').value
        let emailValue = document.getElementById('emailAddress').value
        let showData = true
        // console.log(nameValue, '==> ini nameValue');

        // setUserName(nameValue)
        // setPassword(passwordValue)
        // setEmail(emailValue)
        handleProps(nameValue, passwordValue, emailValue, experience, lvl, showData)
    }

    return(
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="inputUsername" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
            <div onClick={cobainData} className="btn btn-primary">Submit</div>
            </form>
        </>
    )
}