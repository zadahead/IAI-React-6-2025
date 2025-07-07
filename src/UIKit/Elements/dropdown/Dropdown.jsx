import { useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import './dropdown.css';

export const Dropdown = ({ list, selected, onChange }) => {
    const [isOpen, setIsOpen] = useState(true);
    const wrapRef = useRef();

    useEffect(() => {
        document.body.addEventListener("click", handleClose);

        return () => {
            document.body.removeEventListener("click", handleClose);
        }
    }, [])

    const handleClose = (e) => {
        if (!wrapRef.current) return;

        if (wrapRef.current.contains(e.target)) {
            return;
        }

        setIsOpen(false);
    }

    const handleToggle = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

    const renderTitle = () => {
        if (selected) {
            const item = list.find(item => item.key === selected);
            if (item) {
                return item.value;
            }
        }

        return "please select"
    }

    const handleSelect = (item) => {
        onChange(item.key);
        setIsOpen(false);
    }

    const getItemStyle = (item) => {
        if (item.key === selected) {
            return "list_item selected"
        }
        return "list_item"
    }

    return (
        <div className="dropdown" ref={wrapRef}>
            <div className="trigger" onClick={handleToggle}>
                <div className="selected_value">{renderTitle()}</div>
                <Icon i="keyboard_arrow_down" />
            </div>
            {isOpen && (
                <ul className='list'>
                    {list.map((item) => (
                        <li
                            key={item.key}
                            className={getItemStyle(item)}
                            onClick={() => handleSelect(item)}
                        >{item.value}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}