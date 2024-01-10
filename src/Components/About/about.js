import matt from '../../Resources/Photos/matt-headshot.jpg';
import './about.css'

export const About = () => {
    return (
        
        <div className="about-con">
            
            <img className='about-img' src={matt} alt='Matt Guptill' />
            
            <div className='text'>
                <hr></hr>
            <h1>Matthew Guptill</h1>
            <p>Matthew Guptill is an aspiring developer based out of Nashville TN, 
                hoping to find a place in the world of front-end development. 
                Starting his journey in the summer of 2022, his hope is to make this 
                not only a full-time job, but a career that supports him throughout 
                his future endeavors. His hard work ethic, quick thinking skills, 
                and creative problem solving all motivated him to dive head first into 
                the coding sphere which he is striving to become a professional in.
            </p>
            <a className='git-link' href='https://github.com/MattGuptill?tab=repositories' rel='noreferrer' target='_blank'>Github</a>
            </div>
        </div>
       
    )
}