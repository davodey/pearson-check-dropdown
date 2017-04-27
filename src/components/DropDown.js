import React from "react";
import StickyButton from './StickyButton.js'
import DropDownList from './DropDownList';

const DropDown = (props) => {
    return (
        <div>
            <DropDownList
                labelCollection={props.labelCollection}
                checked={props.checked}
                onChange={props.onCheck}
                calculateHeight={props.calculateHeight}

            />
            <StickyButton
                labelChecked={props.labelChecked}
                openCreateForm={props.openCreateForm}
                calculateHeight={props.calculateHeight(60)}
            />
        </div>
    );
}

export default DropDown

