import './Tabs.css';
import Tab from '../Tab/Tab';
import { useContext } from 'react';
import { myContext } from '../../providers/UIContext';
import { useDispatch } from 'react-redux';
import { changeActiveTab } from '../../slice/app';


function Tabs(){

    const [color, setColor] = useContext (myContext)
    const dispatch = useDispatch();

    return (
        <>
        <div className='tabs-container'> 
        <Tab changeActive={() => dispatch(changeActiveTab('all'))}  tabState={false} content={<i className="fa-solid fa-circle"></i>}></Tab>
        <Tab changeActive={() => dispatch(changeActiveTab('favorites'))}   tabState={false} content= {<i className="fa-solid fa-heart"></i>}></Tab>
        </div>
        
        </>
    )
}

export default Tabs;