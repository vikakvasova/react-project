import { myContext } from '../../providers/UIContext';
import Burger from '../Burger/Burger';
import './Header.css';
import { useContext, useState } from 'react';





function Header () {
    const [inputText, setInputText] = useState('')
    const [isDropDownOpen, setIsDropDownOpen] = useState (false)
    const [isSearchOpen, setIsSearchOpen] = useState (false)
    const [color, setColor] = useContext(myContext);

    return ( 
        <>
        <header className='header'>
            <div onClick={() => setIsDropDownOpen(!isDropDownOpen)} className='header-left'>
                <button className={`logo ${color}-icon`}>
                {isDropDownOpen ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-solid fa-water "></i>}
                </button>
            </div>
            <div className='header-midl'>
                <button className={`logo ${color}-text`}>
                LIBROGO
                </button>
            </div>
            <div className='header-right'>
            <div className='search'>
                {isSearchOpen ?  <input className='search-input' placeholder='Search' value={inputText} onChange={(e) => setInputText(e.target.value)}/> : null}   
            </div>
            <div onClick={() => setIsSearchOpen(!isSearchOpen)} className='search-button'>
                <i className="fa-solid fa-magnifying-glass my-icon" ></i>
            </div>
            <i className="fa-solid fa-ghost my-icon"></i>
            </div>
            </header>
            {isDropDownOpen ? <Burger></Burger> : null}
        </>
    );
}

export default Header;