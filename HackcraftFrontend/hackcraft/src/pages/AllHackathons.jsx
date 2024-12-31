import React, { useState } from "react"
import Sidebar from "../components/Sidebar";
import HackathonContainer from "../components/HackathonContainer";
import Navbar from "../components/Navbar";
import '../App.css'
import {Editor, EditorState} from 'draft-js';

const AllHackathonsPage = () => {
    const [hackathons,setHackathon] = useState(
    [
        {
        _id: "cf20ed55-488c-480c-a297-b990ded4505e",
        name: "hkjn",
        organisation_name: "jk",
        price: "",
        start_date_time: "2024-12-14T13:58:02Z",
        team_size: [
            1
        ],
        mode_of_conduct: "hybrid",
        venue: "lkm",
        Logo: "",
        template: "Default",
        status:true
    },{
        _id: "cf20ed55-488c-480c-a297-b990ded4505e",
        name: "hkjn",
        organisation_name: "jk",
        price: "",
        start_date_time: "2024-12-14T13:58:02Z",
        team_size: [
            1
        ],
        mode_of_conduct: "hybrid",
        venue: "lkm",
        Logo: "",
        template: "Default",
        status:true
    },{
        _id: "cf20ed55-488c-480c-a297-b990ded4505e",
        name: "hkjn",
        organisation_name: "jk",
        price: "",
        start_date_time: "2024-12-14T13:58:02Z",
        team_size: [
            1
        ],
        mode_of_conduct: "hybrid",
        venue: "lkm",
        Logo: "",
        template: "Default",
        status:true
    },{
        _id: "cf20ed55-488c-480c-a297-b990ded4505e",
        name: "hkjn",
        organisation_name: "jk",
        price: "",
        start_date_time: "2024-12-14T13:58:02Z",
        team_size: [
            1
        ],
        mode_of_conduct: "hybrid",
        venue: "lkm",
        Logo: "",
        template: "Default",
        status:false
    }])
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                <HackathonContainer hackathons={hackathons}/>
            </main>
        </>
    )
};

export default AllHackathonsPage;
