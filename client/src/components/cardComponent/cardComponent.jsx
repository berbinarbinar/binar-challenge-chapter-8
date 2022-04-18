import React from 'react'
import { InputComponent } from '../../components'

export default function CardComponent(props) {

    const {handleData} = props

    function handleProps(userName, password, email, experience, lvl, showData) {
        handleData(userName, password, email, experience, lvl, showData)
        // console.log(nameValue, passwordValue, emailValue, experience, lvl, showData, '==> this is PARENTS COMPONENT');
    }

    return(
        <>
            <div className="card text-center">
                <div className="card-header">
                    Register Page
                </div>
                <div className="card-body">
                    <InputComponent handleProps={handleProps} />
                </div>
                <div className="card-footer text-muted">
                    already have account? <a href="#">Login</a>
                </div>
            </div>
        </>
    )
}