import SectionWrapper from '../../SectionWrapper/SectionWrapper';
import Testimonial from "./Testimonial"
import './Testimonials.css'

const testimonials = [
    {
        img: "",
        name: "Sara Lopez",
        username: "Sara72",
        content: "Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!"
    },
    {
        img: "",
        name: "Jon Do",
        username: "Johnny_Utah",
        content: "We had such a great time celebrating my grandmothers bitthday!"
    },
    {
        img: "",
        name: "Christian Blake",
        username: "chrisclimbs",
        content: "Best Feta Salad in town. Flawless everytime!"
    },
    {
        img: "",
        name: "Ryan Breyer",
        username: "rybread",
        content: "Such a chilled out atmosphere - love it!"
    }
]



let Testimonials = () => {
    return(
        <SectionWrapper classes="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonials-container">
                {testimonials.map((testimonial) =>
                    <Testimonial
                        key={testimonial.name + testimonial.username}
                        img={testimonial.img}
                        name={testimonial.name}
                        username={testimonial.username}
                        content={testimonial.content}
                    />
                )}
            </div>
        </SectionWrapper>
    )
}

export default Testimonials