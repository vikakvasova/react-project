import { useContext } from 'react';
import './Burger.css'
import { myContext } from '../../providers/UIContext';



function Burger() {


    
    const [color, setColor] = useContext(myContext);
    
    function changeColor(){
        setColor(color === 'light' ? 'dark' : 'light')
    }


    return ( 
        <>
        <div className= {`dropdown ${color}-background`}>
            <div className='dropdown-item-buttom'>
                <button onClick={changeColor} className= {`dropdown-item_left ${color}-item-border`}>
                    <i className="fa-regular fa-sun"></i>
                </button>
                
                <button onClick={changeColor} className= {`dropdown-item_right ${color}-item-border`}>
                <i className="fa-regular fa-moon"></i>
                </button>
            </div>
        </div>
        </>
    );
}

export default Burger;