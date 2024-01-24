import { LazyLoadImage } from 'react-lazy-load-image-component';
import ResumeJPG from '../images/DevResume.jpg'
import ResumePDF from '../images/DevResume.pdf'

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
