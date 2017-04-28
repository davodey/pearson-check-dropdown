import React from "react";
import CreateNewLabelForm from '../CreateNewLabelForm.js'
import DropDown from './DropDown'

const DropDownContainer = (props) => {
    const dropdownContainerHeight = {height:180};
    let dropdownOpenHeight = (props.calculateDropdownHeight(185));
    let dropdownClosedHeight = (props.calculateDropdownHeight(55));
    let labelFormPosition = {right:-148, top:props.calculateHeight(60)};
    let stickyButtonPosition = props.calculateHeight(60);
    const dropdownListHeight = props.calculateHeight(0);

    if (props.calculateHeight(60) <= 400) {
        stickyButtonPosition = props.calculateHeight(60);
        labelFormPosition = {right:-148, top:props.calculateHeight(60)};
    } else  if (props.calculateHeight(60) >= 400) {
        stickyButtonPosition = 400;
        labelFormPosition = {right:-148, top:400};
    }

    if (props.isOpen === false) {
        return (
            false
        )
    } else if (props.isOpen === true) {
        if (props.labelCollection.length <= 0) {
            return (
                <div className="dropdown-container" style={dropdownContainerHeight}>
                   <CreateNewLabelForm
                       value={props.value}
                       onChange={props.onChange}
                       onClick={props.onClick}
                   />
                </div>
            )
        } else  {
            if (props.createLabelOpen === false) {
                if (dropdownClosedHeight >= 385) {
                    dropdownClosedHeight = 390;
                }
                return (
                    <DropDown
                        labelCollection={props.labelCollection}
                        checked={props.checked}
                        onChange={props.onCheck}
                        calculateHeight={dropdownClosedHeight}
                        closedHeight={dropdownClosedHeight}
                        labelChecked={props.labelChecked}
                        openCreateForm={props.openCreateForm}
                        stickyButtonPosition={stickyButtonPosition}
                        dropdownListHeight = {dropdownListHeight}
                    />
                )
            } else {
                console.log('open', dropdownOpenHeight);
                if (dropdownOpenHeight >= 515) {
                    dropdownOpenHeight = 525;
                }
                return (
                    <div>
                        <DropDown
                            labelCollection={props.labelCollection}
                            onChange={props.onCheck}
                            calculateHeight={dropdownOpenHeight}
                            openHeight={dropdownOpenHeight}
                            labelChecked={props.labelChecked}
                            openCreateForm={props.openCreateForm}
                            stickyButtonPosition={stickyButtonPosition}
                            dropdownListHeight = {dropdownListHeight}
                            disabled={true}
                        />
                        <CreateNewLabelForm
                            value={props.value}
                            onChange={props.onChange}
                            onClick={props.onClick}
                            style={labelFormPosition}
                        />
                    </div>
                )
            }
        }
    }
}

export default DropDownContainer

