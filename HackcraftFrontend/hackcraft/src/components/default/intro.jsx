import React from 'react';

function DefaultIntro({ mode }) {
    return (
        <section className='intro'>
            {mode === 'form' ? (
                <>
                    <div className='intro-text'>
                        <input className='organisation-name' placeholder='Organisation name presents' />
                        <input className='hackathon-name' placeholder='Your Hackathon Name' />
                        <input className='brief' placeholder='Give us a brief about your hackathon (60 words)' />
                    </div>
                    <div className='additional-info'>
                        <input className='date' placeholder='Date' />
                        <input className='mode-of-conduct' placeholder='Mode of Conduct' />
                        <input className='participation' placeholder='Participation Type' />
                        <input className='team-size' type='number' min='1' placeholder='Team Size' />
                        <input className='venue' placeholder='Venue' />
                    </div>
                </>
            ) : (
                <>
                    <div className='intro-text'>
                        <p className='organisation-name'>Organisation name presents</p>
                        <h1 className='hackathon-name'>Your Hackathon Name</h1>
                        <p className='brief'>Give us a brief about your hackathon (60 words)</p>
                    </div>
                    <div className='additional-info'>
                        <div className='date'>Date</div>
                        <div className='mode-of-conduct'>Mode of Conduct</div>
                        <div className='participation'>Participation Type</div>
                        <div className='team-size'>Team Size</div>
                        <div className='venue'>Venue</div>
                    </div>
                </>
            )}
        </section>
    );
}

export default DefaultIntro;
