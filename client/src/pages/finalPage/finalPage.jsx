import React from 'react'
import { SearchComponent } from '../../components'

export default function FinalPage(props) {

    const { userName, password, email, experience, lvl } = props


    return(
        <>
            <div>
                <SearchComponent />
                <h1><i>Congratulation, you've sucess made changes.</i></h1>
                <h1>Username: {userName}</h1>
                <h1>Password: {password}</h1>
                <h1>Email: {email}</h1>
                <h1>Experience: {experience}</h1>
                <h1>Level: {lvl}</h1>
            </div>
        </>
    )
}