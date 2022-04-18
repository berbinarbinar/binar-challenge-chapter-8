import React, {useState} from "react";
// import { DashboardComponent } from "../../components"
import { EditPage } from "../../pages"
import { SearchPage } from "../searchPage/searchPage"

function DashboardPage(props) {

const { userName, password, email, experience, lvl } = props

const [showData, setShowData] = useState(false)

function showEdit() {
    let showData = true
    

function searchDataUser() {
    let searchData = true
}

    setShowData(showData)
    // setSearchData(searchData)

}  
    return(
        <>
            {
                showData ?
                <EditPage userName={userName} password={password} email={email} /> :
                <div>
                    <h1>DASHBOARD PAGE</h1>
                    <h1>Username: {userName}</h1>
                    <h1>Password: {password}</h1>
                    <h1>Email: {email}</h1>
                    <h1>Experience: {experience}</h1>
                    <h1>Level: {lvl}</h1>
                    <div onClick={showEdit} className="btn btn-primary">Edit</div>
                    {/* <div onClick={searchDataUser} className='btn-btnprimary'>Search</div> */}
                </div>
            }
        </>
    )
    
    function searchDataUser() {

        return(
            <>
                {/* <div onClick={searchDataUser} className='btn-btnprimary'>Search</div> */}
            </>
        )
    }
  
}


export default DashboardPage