import { Link } from 'react-router-dom'
import './Special.css'

let Special = ({img, name, price, description}) => {
    return(
        <div className="special">
            <div className="special-image">
                <img src={img}/>
            </div>
            <div className="special-info">
                <div className="special-title">
                    <p className="special-name"><strong>{name}</strong></p>
                    <p className="special-price"><strong>{"$" + price}</strong></p>
                </div>
                <p>{description}</p>
                <Link to="under-construction" className='delivery-link'>Order a delivery</Link>
            </div>
        </div>
    )
}

export default Special