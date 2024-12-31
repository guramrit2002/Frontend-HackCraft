import React, { useEffect, useState } from "react"

const HackathonCard = ({ hackathon,format }) => {
    const [price, setPrice] = useState("Free")
    const [date, setDate] = useState("")

    useEffect(() => {
        handleDate();
        handlePrice();
    }, []);

    const handleDate = () => {
        if (hackathon.start_date_time) {
            const dateObj = new Date(hackathon.start_date_time);
            const dateFormatted = dateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            setDate(dateFormatted); // Corrected assignment
        }
    };

    const handlePrice = () => {
        setPrice(hackathon.price && hackathon.price !== "" ? hackathon.price : "Free");
    };
    return (
        <div className="card" style={{
            width:format === 'list' ? '50rem' : '15rem',
        }}>
            <div className="card-header">
                <div className="orgaisation-div">
                    <div className="organisation-img" style={{ backgroundImage: `url('https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, }}></div>
                    <div className="status">{hackathon.status ? <p className="open"> Open </p> : <p className="close">Closed</p>}</div>
                </div>
            </div>
            <div className="card-main">
                <p className="organisation-name">{hackathon.organisation_name}</p>
                <p className="date-mode">{date}</p>
                <p className="date-mode">{hackathon.mode_of_conduct}</p>
                <h2 className="name">{hackathon.name}</h2>
            </div>
            <div className="card-footer">
                <p className="prize-venue">
                    <p className="prize">{price} </p>
                    <p className="venue">{hackathon.venue}</p>
                </p>

                <button className="register">Register</button>
            </div>
        </div>
    )
};

export default HackathonCard;
