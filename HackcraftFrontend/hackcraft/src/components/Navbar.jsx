import React, { useState } from "react"

const Navbar = () => {
    const [search,setSearch] = useState("")

    const handleSearchChange = (event) =>{
        setSearch(event.target.value)

    }
    return (
        <nav>
        <div className="logo"><p>HackCraft</p></div>
        <div className="links">
        <a href="">Hackathons</a>
        <a href="">Sponsorship</a>
        <a href="" className="hostlink">Host</a>
        </div>
        <input type="text" placeholder="search" onChange={handleSearchChange}/>
        <button className="profile">Profile</button>
        </nav>
    )
};

export default Navbar;
