import React from "react"
import DefaultHeader from "./Header";
import DefaultIntro from "./intro";
import Rounds from "./rounds";
import Description from "./Description";
import Gallery from "./Gallery";
import Contact from "./Contact";

const DefaultForm = (props) => {
    return (
        <form className="default-form">
            <DefaultHeader mode={'form'} />
            <DefaultIntro mode={'form'} />
            <Rounds mode={'form'} />
            <Description mode={'form'} />
            <Gallery mode={'form'} />
            <Contact mode={'form'} />
        </form>
    )
};

export default DefaultForm