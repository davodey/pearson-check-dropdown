import React from "react";

const Button = (props) => {
    if (props.value.length > 0) {
        return (
            <button
                className="pe-btn__primary pe-btn--btn_large margin-left"
                onClick={props.onClick}>Create
            </button>
        );
    } else {
        return (
            <button className="pe-btn__primary pe-btn--btn_large margin-left" disabled>Create</button>
        );
    }
};

export default Button
