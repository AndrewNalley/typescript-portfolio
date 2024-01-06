import React, { useState } from 'react';

function Resume() {
    const [loading, setLoading] = useState(true);

    // pdf from google drive - editable google doc undesireably affected by responsive design
    // search 'share google pdf on webpage' for update help
    // upload pdf to drive, share (accessible to all), then copy and paste the portion noted within both links below 
    // example: https://drive.google.com/file/d/ <copy-me> /view?usp=sharing
    // https://drive.google.com/file/d/14R9dm-UoTybKC9roQvpGy0tjZhoWHoyH/view?usp=drive_link
    // 
    const currentResPDF = 'https://drive.google.com/file/d/1wcovGHD7_wyXvWv1GG-inH0kffncupCf/preview';
    const pdfDownloadLink = 'https://drive.google.com/uc?export=download&id=1wcovGHD7_wyXvWv1GG-inH0kffncupCf';

    const handleLoad = () => {
        // This function will be called when the iframe has finished loading
        setLoading(false);
    };

    return (
        <>
            <h4 className="heading-center">Resume</h4>
            {loading && <p>Loading...</p>}
            <div className='iframe-container'>
                <iframe
                    className='responsive-iframe'
                    title='Google Doc'
                    src={currentResPDF}
                    onLoad={handleLoad}
                ></iframe>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a
                    href={pdfDownloadLink}
                    role="button"
                    className="secondary"
                    download="AndrewNalleyResume.pdf"
                    style={{ display: 'inline-block', textAlign: 'center' }}
                >
                    Download Resume
                </a>
            </div>
        </>
    )
}

export default Resume;
