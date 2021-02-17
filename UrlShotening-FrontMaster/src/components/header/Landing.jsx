import React from 'react'

const Landing = ({ title, description, textBtn }) => (
    <div className="landing-block">
        <div className="landing-img">
            <img src="/images/illustration-working.svg" alt="Illustration working" />
        </div>
        <div className="landing-txt">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="btn btn-color-primary btn-styles-primary">{textBtn}</button>
        </div>
    </div>
)

export default Landing