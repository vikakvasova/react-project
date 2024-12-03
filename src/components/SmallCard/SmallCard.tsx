import { useContext } from 'react';
import { TBook } from '../../data';
import './SmallCard.css'
import { myContext } from '../../providers/UIContext';

function SmallCard({image, title , price, subtitle}: TBook) {
    const [color, setColor] = useContext(myContext);
    return ( 
    <>
    <div className='small-card-container'>
        <div className='small-img'>
            <img className='small-card-img' src={image} alt="" />
            <figure className="effect-text-two">
            <figcaption>
	            <p>{subtitle}</p>
            </figcaption>
            </figure>           
        </div>
        <div className='text-block'>
        <div className= {`small-card-title ${color}-text`}>{title}</div>
        <div className={`small-card-price ${color}-text`}>{price}</div>
        </div>
    </div>
    </> 
    );
}

export default SmallCard;