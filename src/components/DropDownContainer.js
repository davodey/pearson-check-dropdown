import React from "react";
import CreateNewLabelForm from './CreateNewLabelForm.js'
import DropDown from './DropDown'

const DropDownContainer = (props) => {
    const dropdownHeight = {height:180};
    const createNewRight={right:-148, top:props.calculateHeight(60)};

    if (props.isOpen === false) {
        return (
            false
        )
    } else if (props.isOpen === true) {
        if (props.hasLabels === false) {
            return (
                <div className="dropdown-container" style={dropdownHeight}>
                   <CreateNewLabelForm
                       value={props.value}
                       onChange={props.onChange}
                       onClick={props.onClick}
                   />
                </div>
            )
        } else  {
            if (props.createLabelOpen === false) {
                return (
                    <DropDown
                        labelCollection={props.labelCollection}
                        checked={props.checked}
                        onChange={props.onCheck}
                        calculateHeight={props.calculateHeight}
                        labelChecked={props.labelChecked}
                        openCreateForm={props.openCreateForm}
                    />
                )
            } else {
                return (
                    <div>
                        <DropDown
                            labelCollection={props.labelCollection}
                            checked={props.checked}
                            onChange={props.onCheck}
                            calculateHeight={props.calculateHeight}
                            labelChecked={props.labelChecked}
                            openCreateForm={props.openCreateForm}
                        />
                        <CreateNewLabelForm
                            value={props.value}
                            onChange={props.onChange}
                            onClick={props.onClick}
                            style={createNewRight}
                        />
                    </div>
                )
            }
        }
    }
}

export default DropDownContainer

