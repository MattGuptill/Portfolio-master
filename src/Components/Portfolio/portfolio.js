import reddit from '../../Resources/Photos/reddit-clone.png';
import rogue from '../../Resources/Photos/rogueBeardOilSnap.png';
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

                <a className="port-link" href='www.roguebeardoil.com'>
                    <div className="port">
                        <h2>Rogue Beard Oil</h2>
                        <img className="port-img" src={rogue} alt='Rogue Beard Oil website' />
                        <div>
                            <h3>Purpose:</h3>
                            <p>This project was created for a beard oil company with buying functionality</p>
                        </div>
                        <div>
                            <h3>Code Used:</h3>
                            <ul>
                                <li>HTML</li>
                                <li>Tailwind css</li>
                                <li>React</li>
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