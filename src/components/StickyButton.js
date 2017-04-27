import React from "react";

const StickyButton = (props) => {
    const buttonPosition={top:props.calculateHeight};
    if (props.labelChecked === false) {
        return (
            <button role="menuitem"
                    className="create-new apply"
                    onClick={props.openCreateForm}
                    style={buttonPosition}>Create New</button>
        );
    } else {
        return (
            <button role="menuitem" className="create-new apply" style={buttonPosition}>Apply</button>
        );
    }

}

export default StickyButton
