import React, { useContext } from 'react';

import './MainPage.css';
import Header from '../../components/Header/Header';
import { myContext } from '../../providers/UIContext';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { books } from '../../data';


function MainPage() {
    const [color, setColor] = useContext (myContext)

    return (
        <>
        <div className={`all-posts ${color}-background`}>
            <Header></Header>
            <Map books={books}></Map>
            <Footer></Footer>
        </div>
            
        </>
    );
}

export default MainPage;