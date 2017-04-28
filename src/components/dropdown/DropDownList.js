import React from "react";
import CheckBox from './Checkbox'
const DropDownList = (props) => {
    const labelCollection = props.labelCollection;
    let height={height: props.calculateHeight, maxHeight:props.calculateHeight};
    const ulHeight = {height: props.dropdownListHeight};


    function handleChange (obj) {
        if (obj.checked === false) {
            obj.checked = true;
        } else if (obj.checked === true) {
            obj.checked = false;
        }
        props.onChange(event, obj);
    }

    return (
        <div className="dropdown-container" style={height}>
            <ul id="#popup" className="pe-list pe-list--unstyled  scroll" role="menu" aria-labelledby="menuBtn2" style={ulHeight}>
                {
                    labelCollection.map((item, i) => (
                        <li key={i} role="menuitem">
                            <CheckBox
                            index={i}
                            obj={item}
                            value={item.value}
                            onChange={handleChange}
                            disabled={props.disabled}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DropDownList


