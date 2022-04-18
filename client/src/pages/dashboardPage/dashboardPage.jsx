import React, {useState} from 'react'
import EditPage from '../editPage/editPage'

export default function DashboardPage(props) {

    const { userName, password, email, experience, lvl } = props

    const [showData, setShowData] = useState(false)

    function showEdit() {
        let showData = true

        setShowData(showData)
    }

    return(
        <>
            {/* <h1>{JSON.stringify(showData)}</h1> */}
            {
                showData ?
                    <EditPage userName={userName} password={password} email={email}/> : 
                    <div>
                        <h1><u>Dashboard Page</u></h1>
                        <h1>Username: {userName}</h1>
                        <h1>Password: {password}</h1>
                        <h1>Email: {email}</h1>
                        <h1>Experience: {experience}</h1>
                        <h1>Level: {lvl}</h1>
                        <div onClick={showEdit} className="btn btn-primary">Edit</div> 
                    </div>
            }
        </>
    )
}