import { Link } from 'react-router-dom'
import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import Button from '../../Button/Button';
import restaurantfood from '../../../assets/restauranfood.png'
import './Hero.css'

let Hero = () => {
    return(
        <SectionWrapper classes="hero">
            <div className="hero-content">
                <div className="hero-info">
                    <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    </div>

                    <p>We are a modern family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <Button>Reserve a Table</Button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src={restaurantfood}/>
                </div>
            </div>
        </SectionWrapper>
    )
};

export default Hero;