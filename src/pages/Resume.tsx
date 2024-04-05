import { LazyLoadImage } from 'react-lazy-load-image-component';
import ResumePDF from '../images/DevResume.pdf'
import ResumeJPG from '../images/DevResume.jpg'

function Resume() {

    return (
        <section className='container'>
            <h4 className="heading-center">Resume</h4>
            <LazyLoadImage
                className='resume-container'
                src={ResumeJPG}
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
