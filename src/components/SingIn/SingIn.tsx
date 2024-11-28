import { useContext } from 'react';
import './SingIn.css'
import { myContext } from '../../providers/UIContext';



function SingIn() {


    
    const [color, setColor] = useContext(myContext);
    



    return ( 
        <>
        <div className= {`sing ${color}-background`}>
            <button className={`singin-button ${color}-button`}>Sing In</button>
        </div>
        </>
    );
}

export default SingIn;