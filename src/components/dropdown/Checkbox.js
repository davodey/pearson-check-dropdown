import React from "react";

const CheckBox = (props) => {
    const useTag = '<use xlink:href="#check-sm-18">';
    return (
        <div className="pe-checkbox">
            <input
                type="checkbox"
                name={props.value}
                id={props.index} value={props.value}
                onChange={()=>{props.onChange(props.obj)}}
                disabled={props.disabled}
            />
            <label htmlFor={props.index}>{props.value}</label>
            <span>
              <svg aria-hidden="true" className="pe-icon--check-sm-18">
                  <svg dangerouslySetInnerHTML={{__html: useTag }} />
              </svg>
           </span>
        </div>
    );
};

export default CheckBox

