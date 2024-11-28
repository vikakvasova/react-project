import React, { useContext } from 'react';

import './MainPage.css';
import Header from '../../components/Header/Header';
import { myContext } from '../../providers/UIContext';


function MainPage() {
    const [color, setColor] = useContext (myContext)

    return (
        <>
        <div className={`all-posts ${color}-background`}>
            <Header></Header>
        </div>
            
        </>
    );
}

export default MainPage;