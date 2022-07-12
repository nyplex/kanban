import React from "react";

const Input = (props) => {
    return (
        <div className="text-field__idle">
            <label>{props.label}</label>
            <input
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={`${props.isInvalid && "invalid"}`}
            />
            {props.isInvalid && <span className="invalid">Can't be empty</span>}
        </div>
    );
};

export default Input;
