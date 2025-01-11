import React from 'react'

// creates the buttons 
// takes properties argument and returns element 
function Button (props) {
    return ( 
        <button className={props.buttonClass} onClick={props.onClick}>
            { props.isIcon ? <React.Fragment><i className={props.isIcon}></i></React.Fragment> : props.textValue }
        </button>
     );
}
 
export default Button;