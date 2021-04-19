import React from 'react';
import './Form.css';
import { addTodo } from "../../actions/todoActions";
import { connect } from "react-redux";

let Form = ({ dispatch}) => {
    let input

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onCreate();
        }
    }

    const onCreate = () => {
        dispatch(addTodo(input.value));
        input.value = '';
    }

    return (
        <div className="form">
            <input ref={node => { input = node }} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

Form = connect()(Form);

export default Form;