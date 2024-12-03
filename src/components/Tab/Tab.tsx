import './Tab.css';
import { ITab } from '../../data';
import { useContext } from 'react';
import { myContext } from '../../providers/UIContext';



function Tab({content, tabState, changeActive }: ITab){
    const [color, setColor] = useContext(myContext);
    return (
        < >
        <button 
            onClick={changeActive}
            role = 'tab' 
            disabled = {tabState} 
            className = {`${color}-tab`}>
                {content}
        </button>
        </>
    )
}

export default Tab;