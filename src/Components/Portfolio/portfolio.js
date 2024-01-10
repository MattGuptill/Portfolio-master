import reddit from '../../Resources/Photos/reddit-clone.png';
import joel from '../../Resources/Photos/joel.png';
import camp from '../../Resources/Photos/camp-scheduler.png';

import './portfolio.css'

export const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>

            <div className="port-con">
                <a className="port-link" href="https://dancing-mermaid-11bebf.netlify.app">
                    <div className="port">
                        <h2>Reddit Clone</h2>
                        <img className="port-img" src={reddit} alt='reddit clone' />
                        <div>
                            <h3>Purpose:</h3>
                            <p>This project was to help strengthen skills with react, javascript and redux</p>
                        </div>
                        <div>
                            <h3>Code Used:</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                        
                    </div>
                </a>

                <a className="port-link" href='https://joelguptillmusic.com/index.html'>
                    <div className="port">
                        <h2>Joel Guptill</h2>
                        <img className="port-img" src={joel} alt='joel guptill website' />
                        <div>
                            <h3>Purpose:</h3>
                            <p>This project was created for a local musician who needed a new website</p>
                        </div>
                        <div>
                            <h3>Code Used:</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <a className="port-link" href='https://github.com/jamesbisraelson/camp-scheduler'>
                    <div className="port">
                        <h2>Camp Scheduler</h2>
                        <img className="port-img" src={camp} alt='camp scheduler website'/>
                        <div>
                            <h3>Purpose:</h3>
                            <p>This project is the start of a camp scheduling app, utilizing the code to 
                            place staff in different positions throughout the campground (a work in progress) </p>
                        </div>
                        <div>
                            <h3>Code Used:</h3>
                            <ul>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>JavaScript</li>
                                <li>Svelte</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}