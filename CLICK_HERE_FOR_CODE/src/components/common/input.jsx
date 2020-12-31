import React from 'react';








const Input = ({ name, label, error, ...rest }) => {   // This is desctructuring props ... do not have to use props.name
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                id={name}
                className="form-control"
            />
            { error && <div className="alert alert-danger">{error}</div>}   {/* if error is truthy ... it will return this markup */}
        </div>
    );
};

export default Input;







































