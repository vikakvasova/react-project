import React, { useContext } from 'react';

import './MainPage.css';
import Header from '../../components/Header/Header';
import { myContext } from '../../providers/UIContext';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { books } from '../../data';
import Tabs from '../../components/Tabs/Tabs';


function MainPage() {
    const [color, setColor] = useContext (myContext)

    return (
        <>
        <div className={`all-posts ${color}-background`}>
            <Header></Header>
            <Tabs></Tabs>
            <Map books={books}></Map>
            <Footer></Footer>
        </div>
            
        </>
    );
}

export default MainPage;