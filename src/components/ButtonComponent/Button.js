import React, {useState} from "react";
import "./Button.css"

export default function Button({value, height, width, handleClick = null, borderRadius = "5"}) {

    const [buttonWidth, setButtonWidth] = useState(width);
    const [buttonHeight, setButtonHeight] = useState(height);
    const [textSize, setTextSize] = useState(100);

    function handleMouseEnter() {
        setButtonWidth(width * 0.9);
        setButtonHeight(height * 0.9);
        setTextSize(90);
    }

    function handleMouseLeave() {
        setButtonWidth(width);
        setButtonHeight(height);
        setTextSize(100);
    }


    return(
        handleClick != null ? (
            <button
                onClick={handleClick}
                className="generic-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: `${buttonWidth}rem`,
                    height: `${buttonHeight}rem`,
                    fontSize: `${textSize}%`,
                    borderRadius: `${borderRadius}px`
                }}
            >
                {value}
            </button>
        ) : (
            <button
                className="generic-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: `${buttonWidth}rem`,
                    height: `${buttonHeight}rem`,
                    fontSize: `${textSize}%`,
                    borderRadius: `${borderRadius}px`
                }}
            >
                <a href={"mailto:mauropio.altamura@outlook.it"}>
                    {value}
                </a>

            </button>
        )

    );
}
