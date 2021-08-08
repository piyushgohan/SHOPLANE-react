import React from 'react'
import '../components/Topbar.css';

function Icon({title,Icon}) {


    return (
        <div className="Icon-box">
            <Icon className="icon" />
            <p className="title">{title}</p>
        </div>
    )
}

export default Icon
