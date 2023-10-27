import React from 'react'
import "./GradientText.css"

function GradientText(props){

    let size = props.size;
    let fontStyle = {
        fontSize: `${size}rem`
    }

    return (
        <h1 className="pres-card gradient" style = {fontStyle}>{props.value}</h1>
    )
}
export default GradientText
