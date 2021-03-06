import React, { Component } from 'react';
import './TodoItem.css';

// dumb component
class TodoItem extends Component {

    // checked 상태가 변경될 때만 업데이트
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, colorValue, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" id={id} onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);}
                }>&times;</div>
                <div className={`todo-text ${checked ? 'checked' : ''}`}>
                    <div style={{color: colorValue}}>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        );
    }
}

export default TodoItem;