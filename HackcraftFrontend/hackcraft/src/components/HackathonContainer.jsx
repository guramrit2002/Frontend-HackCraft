import React, { useState } from "react";
import HackathonCard from "./HackathonCard";
import { GrAppsRounded } from "react-icons/gr";
import { RiListCheck2 } from "react-icons/ri";

const HackathonContainer = ({ hackathons }) => {
    const [format, setFormat] = useState("grid");

    return (
        <section className="hackathons">
            <header>
                <GrAppsRounded className="icon" onClick={() => setFormat("grid")} />
                <RiListCheck2 className="icon" onClick={() => setFormat("list")} />
            </header>

            <div className={`hackathon-container`} style={{
                gridTemplateColumns: format === "grid" ? "repeat(3, 1fr)" : "1fr",
            }}>
                {format === "grid" ? (
                    hackathons.map((hackathon) => (
                        <HackathonCard key={hackathon.id} hackathon={hackathon} format={"grid"} />
                    ))
                ) : format === "list" ? (
                    hackathons.map((hackathon) => (
                        <HackathonCard key={hackathon.id} hackathon={hackathon} format={"list"} />
                    ))
                ) : (
                    <p>No format selected</p>
                )}
            </div>
        </section>
    );
};

export default HackathonContainer;
