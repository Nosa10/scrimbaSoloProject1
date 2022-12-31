import React from 'react'

export default function Info() {
    return (
        <div className="container">
            <img src='./images/profile.jpg' className='info--img'/>
            <h4 className="name">Kharey Edison</h4>
            <h6 className="info--stack">Frontend Developer</h6>
            <p className="info--paragraph">kharey.website</p>
            <button className="btn"><img src="./images/Icon.png"/>Email</button>
        </div>
    )
}