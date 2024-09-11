import { Link } from 'react-router-dom'
import SectionWrapper from '../../SectionWrapper/SectionWrapper'
import Button from '../../Button/Button'
import Special from './Special'
import './Specials.css'
import bruschetta from '../../../assets/specials/bruschetta.png'
import greeksalad from '../../../assets/specials/greeksalad.png'
import lemondessert from '../../../assets/specials/lemondessert.png'


const specials = [
    {
        img: greeksalad,
        name: 'Greek Salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        img: bruschetta,
        name: 'Bruschetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        img: lemondessert,
        name: 'Lemon Dessert',
        price: 4.99,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]

let Specials = () => {
    return(
        <SectionWrapper>
            <div className="specials">
                <div className="specials-title">
                    <h1>This week's specials!</h1> <Link to="under-construction"><Button>Online Menu</Button></Link>
                </div>
                <div className="specials-container">
                    {
                        specials.map((special) =>
                            <Special
                                key={special.name + special.price}
                                img={special.img}
                                name={special.name}
                                price={special.price}
                                description={special.description}
                            />
                        )
                    }
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Specials