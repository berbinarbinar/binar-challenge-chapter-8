import React, { useState } from "react";
import { InputComponent }  from "../index"

export default function CardComponent (props){
    const {handledata} = props

    function handleProps(userName,password,email,experience,lvl,showData){
        handledata(userName,password,email,experience,lvl,showData)
        
    }

    return(
        <>
            <div className="card text-center">
                <div className="card-header">
                    Register Page
                </div>
                <div className="card-body">
                    <InputComponent handleProps= {handleProps}/>
                </div>
                <div className="card-footer text-muted">
                    Already have account? <a href="#">Login</a>
                </div>
            </div>

        </>
    )
}