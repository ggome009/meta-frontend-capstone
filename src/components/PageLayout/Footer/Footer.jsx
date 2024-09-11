import { Link } from 'react-router-dom'
import lemon from '../../../assets/lemon.png'
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className='footer-content'>
                <div className='footer-image-container'>
                    <Link to="/">
                        <img src={lemon}/>
                    </Link>
                </div>
                <div className='footer-list-container'>
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/under-construction"><a>About</a></Link></li>
                        <li><Link to="/under-construction"><a>Menu</a></Link></li>
                        <li><Link to="/booking"><a>Reservations</a></Link></li>
                        <li><Link to="/under-construction"><a>Order Online</a></Link></li>
                        <li><Link to="/under-construction"><a>Login</a></Link></li>
                    </ul>
                </div>
                <div className='footer-list-container'>
                    <h2>Contact</h2>
                    <ul>
                        <li>1234 Main Street</li>
                        <li>Chicago 60607 Illinois</li>
                        <li>(555) 555-5555</li>
                        <li>littlelemon@email.mock</li>
                    </ul>
                </div>
                <div className='footer-list-container'>
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href="https://www.instagram.com/" rel="noreferrer nofollow">Instagram</a></li>
                        <li><a href="https://www.twitter.com/" rel="noreferrer nofollow">Twitter</a></li>
                        <li><a href="https://www.youtube.com/" rel="noreferrer nofollow">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer