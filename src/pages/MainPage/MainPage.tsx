import React, { useContext } from 'react';

import './MainPage.css';
import Header from '../../components/Header/Header';
import { myContext } from '../../providers/UIContext';
import Footer from '../../components/Footer/Footer';


function MainPage() {
    const [color, setColor] = useContext (myContext)

    return (
        <>
        <div className={`all-posts ${color}-background`}>
            <Header></Header>
            <Footer></Footer>
        </div>
            
        </>
    );
}

export default MainPage;