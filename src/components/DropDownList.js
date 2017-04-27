import React from "react";
const DropDownList = (props) => {
    const labelCollection = props.labelCollection;
    const height={height: props.calculateHeight(55)};
    const ulHeight = {height: props.calculateHeight(0)};
    const useTag = '<use xlink:href="#check-sm-18">';
    return (
        <div className="dropdown-container" style={height}>
            <ul id="#popup" className="pe-list pe-list--unstyled  scroll" role="menu" aria-labelledby="menuBtn2" style={ulHeight}>
                {
                    labelCollection.map((item, i) => (
                        <li key={i} role="menuitem">
                            <div className="pe-checkbox">
                                <input
                                    type="checkbox"
                                    name={item}
                                    id={i} value={item}
                                    checked={props.checked}
                                    onChange={props.onChange}
                                />
                                <label htmlFor={i}>{item}</label>
                                <span>
                                  <svg aria-hidden="true" className="pe-icon--check-sm-18">
                                      <svg dangerouslySetInnerHTML={{__html: useTag }} />
                                  </svg>
                               </span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DropDownList


