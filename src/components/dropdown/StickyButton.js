import React from "react";
import _ from 'lodash';

const StickyButton = (props) => {
    const buttonPosition={top:props.calculateHeight};
    const areChecked = _.find(props.labelCollection, { "checked": true });
    if (areChecked === false  || areChecked === undefined) {
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
