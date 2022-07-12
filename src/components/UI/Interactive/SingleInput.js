import React from "react";

const SingleInput = (props) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            value={props.value}
            onChange={props.onChange}
            className={`${props.isInvalid && "invalid"}`}
        />
    );
};

export default SingleInput;
