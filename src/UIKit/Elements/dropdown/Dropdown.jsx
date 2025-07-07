import { Icon } from '../Icon';
import './dropdown.css';

export const Dropdown = () => {
    return (
        <div className="dropdown">
            <div className="trigger">
                <div className="selected_value">please selected</div>
                <Icon i="keyboard_arrow_down" />
            </div>
            <ul className='list'>
                <li className='list_item'>item1</li>
                <li className='list_item'>item2</li>
                <li className='list_item'>item3</li>
                <li className='list_item'>item4</li>
            </ul>
        </div>
    )
}