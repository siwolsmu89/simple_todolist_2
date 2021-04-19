import React, { Component } from 'react';
import TodoItem from './todo-item/TodoItem.js'

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked, colorValue}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    colorValue={colorValue}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;