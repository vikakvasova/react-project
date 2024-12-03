import { useContext } from 'react';

import './SearchPage.css'
import { myContext } from '../../providers/UIContext';
import Tabs from '../../components/Tabs/Tabs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchElement from '../../components/SearchElement/SearchElement';
import { TBook } from '../../data';


function SearchPage({books} : {books : TBook[]}) {
    const [color, setColor] = useContext (myContext)

    return ( <>
    <div className={`all-posts ${color}-background`}>
        <Header></Header>
        <Tabs></Tabs>
        <div className='container'>
        <SearchElement subtitle={books[4].subtitle} image={books[4].image} title={books[4].title}  price={books[4].price}></SearchElement>
        <Footer></Footer>    
        </div>
    </div>
    
    </> );
}

export default SearchPage;