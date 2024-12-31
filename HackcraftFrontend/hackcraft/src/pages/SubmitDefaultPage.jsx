import '../Default.css'
import DefaultHeader from "../components/default/Header";
import DefaultIntro from "../components/default/intro";
import Rounds from "../components/default/rounds";
import Description from "../components/default/Description";
import Gallery from '../components/default/Gallery';
import Contact from '../components/default/Contact';
import { useState } from 'react';
import DefaultForm from '../components/default/defaultform';
const SubmitDefaultPage = () => {
    const [defaultData, setDefaultData] = useState({})
    return (
        <>
        <section className='editor-panel'>
        <section className='sidebar'>
        
        </section>
        <DefaultForm/>
        <section className='panel'></section>
        </section>
        </>
    )
};

export default SubmitDefaultPage;
