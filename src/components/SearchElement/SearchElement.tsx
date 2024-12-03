import './SearchElement.css'
import { useContext } from 'react';
import { TBook } from '../../data';
import { myContext } from '../../providers/UIContext';

function SearchElement({ image, title, subtitle, price}: TBook) {
    const [color, setColor] = useContext(myContext);
    return ( <>
    <div className='search-card-container'>
        <div className='search-card_leftpart'>
            <div className='search-img-container'>
                <img className='search-card-img' src={image} alt="" />
            </div>
        </div>
        <div className='search-card_rightpart'>
            <div className='search-card-text-container'>
                <div className= {`search-card-title ${color}-text`}>{title}</div>
                <div className= {`search-card-subtitle ${color}-text`}>{subtitle}</div>
                <div className='search-card-buttom-block'>
                    <div className={`search-card-price ${color}-text`}>{price}</div>
                </div>
            </div>
        </div>
    </div>
    </> );
}

export default SearchElement;