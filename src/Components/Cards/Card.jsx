import mern from  '../../assets/mern.png'
import './Card.css'
function Card({title, image}) {
    return (
        <div className="card">
            <h1>{title}</h1>
           <div className="hoverCard">
            <img src={image} alt="" />
           </div>
        </div>
    )
}

export default Card