import { useContext } from 'react';
import './SelectedPost.css'
import { myContext } from '../../providers/UIContext';
import { books, TBook } from '../../data';



function SelectedPost() {
    const [color, setColor] = useContext(myContext);

    return ( <>
    <div className='post-container'>
        <div className='Left-side'>
            <div className='post-img-container'>
                <img src={books[1].image} alt="" />
            </div>
        </div>
        <div className='post-right-container'>
            <h1 className={`post-title ${color}-text`}>{books[1].title}</h1>
            <div className={`post-text ${color}-text`}>{books[1].subtitle}</div>
            <div className='post-block'>
                <p className={`price ${color}-text`}>{books[1].price}</p>
                <button  className={`fav-button ${color}-fav`}>
                    <i className="fa-regular fa-bookmark"></i>
                </button>
            </div>
        </div>
    </div>
    </> );
}

export default SelectedPost;