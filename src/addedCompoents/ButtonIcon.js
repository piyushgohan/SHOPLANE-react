import React from 'react'
import './ButtonIcon.css';

function ButtonIcon({title,Icon}) {
    return (
        <div className="button-super">
            <div className="buttonbox">
                <Icon className="button"/>
            </div>
            <p className="title">{title}</p>
        </div>
    )
}

export default ButtonIcon
