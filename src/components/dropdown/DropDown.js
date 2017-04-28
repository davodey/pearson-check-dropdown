import React from "react";
import StickyButton from './StickyButton.js'
import DropDownList from './DropDownList';

const DropDown = (props) => {
    return (
        <div>
            <DropDownList
                labelCollection={props.labelCollection}
                onChange={props.onChange}
                calculateHeight={props.calculateHeight}
                dropdownListHeight = {props.dropdownListHeight}
                disabled={props.disabled}
            />
            <StickyButton
                labelCollection={props.labelCollection}
                labelChecked={props.labelChecked}
                openCreateForm={props.openCreateForm}
                calculateHeight={props.stickyButtonPosition}
                disabled={props.disabled}
            />
        </div>
    );
}

export default DropDown

