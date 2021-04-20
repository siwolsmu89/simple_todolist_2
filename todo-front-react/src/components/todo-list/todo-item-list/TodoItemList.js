import React, { Component } from 'react';
import TodoItem from './todo-item/TodoItem.js'

// dumb component
class TodoItemList extends Component {

    // to-do 목록이 변경될 때만 업데이트
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