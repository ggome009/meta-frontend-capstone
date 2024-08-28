import lemon from '../../../assets/lemon.png'
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className='footer-content'>
                <div className='footer-image-container'>
                    <img src={lemon}/>
                </div>
                <div className='footer-list-container'>
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservation</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
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
                        <li><a>Instagram</a></li>
                        <li><a>Twitter</a></li>
                        <li><a>YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer