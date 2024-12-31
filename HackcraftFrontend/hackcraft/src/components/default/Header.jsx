import React from "react"

const DefaultHeader = ({mode}) => {
    return (
        <nav className="default">
        {mode === "form" ? 
            <>
            <div className="Logo">
                <div className="default-logo"></div>
                <input className="logo-hackathon-name" placeholder="Your Hackathon"></input>
            </div>
            <div className="default-nav-links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Connect Us</a>
                <a href="">Work With Us</a>
            </div>
            </> :
        <>
        <div className="Logo">
                <div className="default-logo"></div>
                <p className="logo-hackathon-name">Your Hackathon</p>
            </div>
            <div className="default-nav-links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Connect Us</a>
                <a href="">Work With Us</a>
            </div>
        </>}
            
        </nav>
    )
}

export default DefaultHeader
