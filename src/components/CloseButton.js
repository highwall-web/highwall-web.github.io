import React from 'react'
import "./CloseButton.css"

const CloseButton = ({openModal}) => {
    return (
        <button className="close-button" onClick={() => {
            openModal(false)
        }}>
            <i className="fa-solid fa-xmark" style={{color: "darkred"}}></i>
        </button>
    )
}
export default CloseButton
