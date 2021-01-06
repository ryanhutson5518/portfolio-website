import React, { Component } from 'react';
import Input from './input';
import SelectOption from './selectOption';
import AlienButton from '../common/alienButton';
import Joi from 'joi-browser';


// Completely reusable ... make class extend this class
// Go to loginForm.jsx and especially registerForm.jsx to know what to change


class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const result = Joi.validate(this.state.data, this.schema, { abortEarly: false });

        if (!result.error) return null;   // if there is no error, return null

        const errors = {};
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();   // This gets rid of the form auto submitting to the server and having to make an HTTP request to reload

        const errors = this.validate();
        this.setState({ errors: errors || {} });   // errors object was setting to null and getting an error, it needs to be set to an object so that is why the || statement is there
        if (errors) return;   // if there are errors, the server will not be called

        console.log(e)   // create a function to change needs
        console.log(e.target[0].value)
        console.log(e.target[1].value)

        this.redirect(e.target[0].value, e.target[1].value);   // (email of user, message they typed)
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;   // Handles multiple input values so that the state can be set dynamically ... it's binded
        this.setState({ data, errors });
    };

    renderButton = label => {
        return (
            <AlienButton
                disabled={this.validate()}
                name={label}

            />
        );

    };

    renderInput = (name, label, type = 'text') => {   // type is set to the default value of 'text'
        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                label={label}
                error={errors[name]}
                // The rest of the values will be passed to the ...rest parameter
                type={type}
                value={data[name]}   // Dot notation does not work
                onChange={this.handleChange}
            />
        );
    };

    renderSelectOption = (name, label, numOfOptions) => {   // numOfOptions is really all of the genre objects
        const { data, errors } = this.state;

        return (
            <SelectOption 
                name={name}
                value={data[name]}
                label={label}
                numOfOptions={numOfOptions}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    };
} // end of Form

export default Form;







































