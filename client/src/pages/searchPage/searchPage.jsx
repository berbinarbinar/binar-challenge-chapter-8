import React, {useState} from "react";
import FinalPage from "../finalPage/finalPage";

function SearchPage(props) {

    const { userName, password, email } = props

    const [searchData, setSearchData] = useState(true)
    const [searchUserName, setSearchUserName] = useState('')
    const [searchPassword, setSearchPassword] = useState('')
    const [searchEmail, setSearchEmail] = useState('')

    const [experience, setSearchExperience] = useState(600000)
    const [lvl, setSearchLvl] = useState(777)

    function searchUser() {

        let searchNameValue = document.getElementById('searchUsername').value
        let searchPasswordValue = document.getElementById('searchPassword').value
        let searchEmailValue = document.getElementById('emailAddress').value
        let searchData = true

        setSearchData(searchData)
        setSearchUserName(searchUserName)
        setSearchPassword(searchPassword)
        setSearchEmail(searchEmail)
        setSearchExperience(experience)
        setSearchLvl(lvl)
    }

    return(
        <>
            searchData ?
            <SearchPage userName={userName} password={password} email={email} experience={experience} lvl={lvl} /> :
        <form>
        <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" class="form-control" id="inputUsername" search={userName}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailAddress" search={email} aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword" search={password}/>
            </div>
                <div onClick={searchUser} className="btn btn-primary">
                Search
            </div>
        </form>
        </>
    )
}



export default SearchPage