import React from 'react'
import "./GradientText.css"

function GradientText({value, size}) {

    const fontStyle = {
        fontSize: `${size}rem`
    }

    return (
        <h1 className="pres-card gradient" style={fontStyle}>{value}</h1>
    )
}
export default GradientText
