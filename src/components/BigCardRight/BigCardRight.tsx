import { useContext } from 'react';
import { TBook } from '../../data';
import './BigCardRight.css'
import { myContext } from '../../providers/UIContext';


function BigCardRight({ image, title, subtitle, price}: TBook) {
    const [color, setColor] = useContext(myContext);
    return (  
    <>
    <div className='dig-card-container'>
        <div className='dig-card_leftpart'>
        <div className='big-card-text-container'>
                <div className= {`big-card-title ${color}-text`}>{title}</div>
                <div className= {`big-card-subtitle ${color}-text`}>{subtitle}</div>
                <div className='big-card-buttom-block'>
                    <div className={`big-card-price ${color}-text`}>{price}</div>
                    <div className='big-card-button'>
                        <button  className={`fav-button ${color}-fav`}>
                            <i className="fa-regular fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='dig-card_rightpart'>
        <div className='img-container-right'>
                <img className='big-card-img' src={image} alt="" />
            </div>
            
        </div>
    </div>
    </>
    );
}

export default BigCardRight;