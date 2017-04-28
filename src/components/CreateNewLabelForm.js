import React from "react";
import Button from "./Button";

const CreateNewLabel = (props) => {
    return (
        <ul id="#popup" className="pe-list pe-list--unstyled  " role="menu" aria-labelledby="menuBtn2" style={props.style}>
            <span className="padding">Create New Label</span>
            <li id="#popup2" role="menu" aria-labelledby="createLabelBtn">
                <div>
                    <label className="pe-textLabelInput__label" htmlFor="z">New label name</label>
                    <input type="text"
                           className="pe-textInput--basic"
                           id="z"
                           value={props.value}
                           onChange={props.onChange}
                    />
                </div>
                <div className="actions">
                    <Button
                        value={props.value}
                        onClick={props.onClick}
                    />
                </div>
            </li>
        </ul>

    );
}

export default CreateNewLabel


