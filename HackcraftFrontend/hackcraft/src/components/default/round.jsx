import React from "react"

const Round = ({ round,start,end,setSelectRound }) => {
    return (<div key={round._id} className="round-item" onClick={()=>setSelectRound(round)}>
        <p>{round.name}</p>
        <div className="round-dates">
            <p className="start">{round.start_timeline} - {round.end_timeline}</p>
        </div>
    </div>)
};

export default Round;
