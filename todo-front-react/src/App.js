import React, { Component } from 'react';
import TodoListTemplate from "./components/todo-list/todo-list-template/TodoListTemplate";
import Form from "./components/todo-list/form/Form.js";
import TodoItemList from "./components/todo-list/todo-item-list/TodoItemList.js";
import {checkTodo, removeTodo} from "./components/actions/todoActions";
import { connect } from "react-redux";
import Palette from "./components/todo-list/palette/Palette";
import {selectColor} from "./components/actions/colorActions";

class App extends Component {

    render() {
        const { dispatch, todos, colors } = this.props;
        return (
            <div>
                <TodoListTemplate form={(<Form />)}
                                  palette={(<Palette
                                                colors={colors}
                                                onSelect={id => dispatch(selectColor(id))}
                                            />)}>
                    <TodoItemList
                        todos={todos}
                        onToggle={id => dispatch(checkTodo(id))}
                        onRemove={id => dispatch(removeTodo(id))}
                    />
                </TodoListTemplate>
            </div>
        );
    }
}

function select(state) {
    return {
        todos: state.todos,
        colors: state.colors
    }
}

export default connect(select)(App);