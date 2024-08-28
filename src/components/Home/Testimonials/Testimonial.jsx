import './Testimonial.css'

let Testimonial = ({img, name, username, content}) => {
    return (
        <div className="testimonial">
            <div className="profile">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAHBJREFUWEft0rENADEIxVBS0LH/VGxDHXHSreAmhdNbih7/dPfGw+/4QXgdBSFgKKggFaC9G1SQCtDeDSpIBWjvBp8RrKrIzNjduPfGzNC//b0npowKKkgFaO8GFaQCtHeDClIB2rtBBakA7d0gFfwAj7mQoVlIYMEAAAAASUVORK5CYII="/>
                <div>
                    <p><span className="author-name"><strong>{name}</strong></span><br/>{username}</p>
                </div>
            </div>
            <div>{"\"" + content + "\""}</div>
        </div>
    )
}

export default Testimonial