import resume1 from '../../Resources/Photos/Frontend Developer Resume-page-001.jpg';
import resume2 from '../../Resources/Photos/Frontend Developer Resume-page-002.jpg'
import certificate from '../../Resources/Photos/codecademy-certificate.jpg';

import './resume.css';

export const Resume = () => {
    return  (
    <div className='resume-con'>
        <img 
        className='img' 
        src={resume1} 
        alt='resume'
        />
        <img 
        className='img'
        src={resume2}
        alt='resume'
        />
        <img className='img' src={certificate} 
        alt='certificate'
        />
     </div>
    )
}