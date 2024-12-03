import { books, TBook } from '../../data';
import BigCardLeft from '../BigCardLeft/BibCardLeft';
import BigCardRight from '../BigCardRight/BigCardRight';
import SmallCard from '../SmallCard/SmallCard';
import './Map.css'


function Map({books} : {books : TBook[]}) {
    return (  
    <>
    <div className='container'>
    <BigCardLeft image={books[0].image} title={books[0].title} subtitle={books[0].subtitle} price={books[0].price}></BigCardLeft>
    <div className='grid-element'>
    <SmallCard subtitle={books[1].subtitle} image={books[1].image} title={books[1].title}  price={books[1].price}></SmallCard>
    <SmallCard subtitle={books[2].subtitle} image={books[2].image} title={books[2].title}  price={books[2].price}></SmallCard>
    <SmallCard subtitle={books[3].subtitle} image={books[3].image} title={books[3].title}  price={books[3].price}></SmallCard>
    <SmallCard subtitle={books[4].subtitle} image={books[4].image} title={books[4].title}  price={books[4].price}></SmallCard>
    <SmallCard subtitle={books[5].subtitle} image={books[5].image} title={books[5].title}  price={books[5].price}></SmallCard>
    <SmallCard subtitle={books[6].subtitle} image={books[6].image} title={books[6].title}  price={books[6].price}></SmallCard>
    <SmallCard subtitle={books[7].subtitle} image={books[7].image} title={books[7].title}  price={books[7].price}></SmallCard>
    <SmallCard subtitle={books[8].subtitle} image={books[8].image} title={books[8].title}  price={books[8].price}></SmallCard>
    </div>
    <BigCardRight image={books[6].image} title={books[6].title} subtitle={books[6].subtitle} price={books[6].price}></BigCardRight>
    </div>

    
    </>
    );
}

export default Map;