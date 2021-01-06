import React from 'react';








const SelectOption = ({ name, label, numOfOptions, error, ...rest }) => {   // numOfOptions is all the genre objects
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select className="form-control" name={name} id={name} {...rest}>
                <option value="" />
                {numOfOptions.map(option => {
                    return (
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    );

                })}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default SelectOption;

















