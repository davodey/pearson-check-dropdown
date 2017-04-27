import React from "react";

const Button = (props) => {
    const useTag = '<use xlink:href="#pivot-open-24">';
    return (
        <button id="menuBtn2"
                role="button"
                type="button"
                className="pe-btn--btn_large"
                aria-haspopup="true"
                aria-controls="popup"
                aria-expanded="true"
                onClick={props.onClick}
                >

            <div className="flex">
                <span className="fa fa-tags" aria-hidden="true"></span>
                <span>
                 <svg role="img" aria-labelledby="b1" className="pe-icon--pivot-open-24">
                    <title id="b1">dropdown menu</title>
                     <svg dangerouslySetInnerHTML={{__html: useTag }} />
                 </svg>
              </span>
            </div>
        </button>
    )
};

export default Button

