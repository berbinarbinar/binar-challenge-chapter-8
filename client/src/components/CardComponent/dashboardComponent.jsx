import React, {userState} from "react";

function DashboardComponent (props) {

    const {userName, password, email, experience, lvl } = props

    const [showData, setShowData] = userState(false)

    function showEdit() {
        let showData = true

        setShowData(showData)
    }

    return(
        <>
        <h1>{userName}</h1>
        <h1>{password}</h1>
        <h1>{email}</h1>
        <h1>{experience}</h1>
        <h1>{lvl}</h1>
        </>
    )

}


export default DashboardComponent