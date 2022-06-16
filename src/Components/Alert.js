import React from 'react'

export default function Alert(props) {
    return (
        <div className="alert alert-dark d-flex align-items-center justify-content-center" role="alert">
            <img height="30vh" width="30vh" src='success.png'/>
            <div style={{marginLeft: "2vh", color: "#3bb54a"}}>
               <strong> {props.title}</strong>
            </div>
        </div>
    )
}
