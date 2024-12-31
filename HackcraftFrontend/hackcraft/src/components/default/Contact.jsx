import React from "react";

const Contact = ({ mode }) => {
    return (
        <section className="contacts">
            <h1 className="contact-header">Contact Us</h1>
            {mode === 'form' ? (
                <div className="contacts-container">
                    <div className="contact">
                        <input className="member" placeholder="Member Name" />
                        <input className="number" placeholder="Member Phone No." />
                    </div>
                    <div className="contact">
                        <input className="member" placeholder="Member Name" />
                        <input className="number" placeholder="Member Phone No." />
                    </div>
                </div>
            ) : (
                <div className="contacts-container">
                    <div className="contact">
                        <p className="member">Contact Member Name</p>
                        <p className="number">9876543211</p>
                    </div>
                    <div className="contact">
                        <p className="member">Contact Member Name</p>
                        <p className="number">9876543211</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
