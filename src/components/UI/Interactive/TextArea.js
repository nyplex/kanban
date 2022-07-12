const TextArea = (props) => {
    return (
        <div className="text-field__idle">
            <label>{props.label}</label>
            <textarea
                name={props.a}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={`${props.isInvalid && "invalid"}`}
            ></textarea>
        </div>
    );
};

export default TextArea;