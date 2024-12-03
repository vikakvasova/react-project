import { useContext, useState } from 'react';
import SelectedPost from '../../components/SelectedPost/SelectedPosr';
import './SelectedPage.css'
import { myContext } from '../../providers/UIContext';
import Tabs from '../../components/Tabs/Tabs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { books, TBook } from '../../data';

function SelectedPage() {
    const [books, setBooks] = useState(null)
    const [color, setColor] = useContext (myContext)

    return ( <>
    <div className={`all-posts ${color}-background`}>
        <Header></Header>
        <Tabs></Tabs>
        <div className='container'>
        <SelectedPost></SelectedPost>
        <Footer></Footer>    
        </div>
    </div>
    
    </> );
}

export default SelectedPage;