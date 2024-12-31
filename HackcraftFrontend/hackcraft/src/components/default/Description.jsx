const Description = ({mode}) => {
    return (
        <section className="hackathon-description">
            <button>Get Register</button>
            {mode === 'form' ? 
                <input className="hackathon-description-container" placeholder="Describe your hackathon ..."/>
            :
            <div className="hackathon-description-container">
                <p>Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well designed About us text defining your hackathon Make it sound interesting because this made your hackathon look special  Please provide a well desig</p>
            </div>
            }
            
        </section>
    )
};

export default Description;

// <div className="winner">
//             <h1>Prizes</h1>
//                 <div className="winner-cards">
//                 <div className="large-card">
//                     <div className="winner-large-header">
//                         <p className="header-text">Trophy and Certificate</p>
//                     </div>
//                     <div className="winner-large-body">
//                         <p className="winner-body-head">Winner</p>
//                         <p className="price"></p>
//                     </div>
//                 </div>
//                 <div className="small-card">
//                     <div className="winner-small-header">
//                         <p className="header-text">Certificate</p>
//                     </div>
//                     <div className="winner-small-body">
//                         <p className="winner-body-head">First Runner Up</p>
//                         <p className="price"></p>
//                     </div>
//                 </div>
//                 <div className="small-card">
//                     <div className="winner-small-header">
//                         <p className="header-text">Certificate</p>
//                     </div>
//                     <div className="winner-small-body">
//                         <p className="winner-body-head">Second Runner Up</p>
//                         <p className="price"></p>
//                     </div>
//                 </div>
//                 <div className="large-card">
//                     <div className="winner-large-header">
//                         <p className="header-text"></p>
//                     </div>
//                     <div className="winner-large-body">
//                         <p className="winner-body-head">Other Ranks</p>
//                         <p className="price"></p>
//                     </div>
//                 </div>
//                 </div>
//             </div>