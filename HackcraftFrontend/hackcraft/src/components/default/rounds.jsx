import React, { useEffect, useState } from "react";
import Round from "./round";

const Rounds = () => {

    const [rounds, setRounds] = useState([
        {
            "_id": "acae82b7-8aed-4989-9c28-075c63953b63",
            "created_at": "2024-12-14T14:14:28.764819Z",
            "serial_number": 1,
            "name": "jkerklsdm",
            "description": "erkldsm;lczroienlm;vsdc",
            "start_timeline": "2024-01-01",
            "end_timeline": "2025-01-01",
            "hackathon": "6138df17-7501-4b89-a65c-595476bd4489"
        },
        {
            "_id": "acae82b7-8aed-4989-9c28-075c63953b63",
            "created_at": "2024-12-14T14:14:28.764819Z",
            "serial_number": 1,
            "name": "jkerklsdm",
            "description": "erkldsm;lczroienlm;vsdc",
            "start_timeline": "2024-01-01",
            "end_timeline": "2025-01-01",
            "hackathon": "6138df17-7501-4b89-a65c-595476bd4489"
        }
    ]);
    const [selectRound, setSelectRound] = useState(false)
    return (
        <section className="rounds">
            <h1>Rules And Rounds</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ante eu nisi imperdiet ullamcorper. Sed nec ante ac lorem eleifend viverra.</p>

            <div className="rounds-main">
                <div className="all-rounds">
                    {rounds.map((round) => (
                        <Round key={round._id} round={round} setSelectRound={setSelectRound} />
                    ))}
                </div>
                <div className="round-description">
                    <div className="description-container" style={{ background: selectRound == false ? "none" : "#E2CCFF",boxShadow: selectRound === false ? "none" : "20px -10px rgba(0, 0, 0,0.8)"}}>
                        {selectRound == false ? <p> no rounds selected </p> : <p>{selectRound.description}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rounds;
