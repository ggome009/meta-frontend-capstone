import SectionWrapper from '../../SectionWrapper/SectionWrapper'
import MarioandAdrian from '../../../assets/about/MarioandAdrian.png'
import restaurant from '../../../assets/about/restaurant.png'
import './About.css'

const About = () => {
    return(
        <SectionWrapper >
            <div className="about">
                <div className="about-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="about-photo-container">
                    <img src={MarioandAdrian}/>
                    <img src={restaurant}/>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default About