import { LazyLoadImage } from 'react-lazy-load-image-component';
import ResumePNG from '../images/Dev_Resume.png'
import ResumePDF from '../images/Dev_Resume.pdf'

function Resume() {

    return (
        <section className='container'>
            <h4 className="heading-center">Resume</h4>
            <LazyLoadImage
                className='resume-container'
                src={ResumePNG}
                alt="Resume" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a
                    href={ResumePDF}
                    role="button"
                    className="secondary"
                    download="AndrewNalleyResume.pdf"
                    style={{ display: 'inline-block', textAlign: 'center' }}
                >
                    Download Resume PDF
                </a>
            </div>
        </section>
    )
}

export default Resume;
