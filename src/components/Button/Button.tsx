import { IButton } from '../../data';
import './Button.css';



function Button({content, typeButton}: IButton){

    return (
        <>
        <button  className={typeButton} type='button'>{content}</button>
        </>
    )
}

export default Button;