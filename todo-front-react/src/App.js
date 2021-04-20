import React, { Component } from 'react';
import TodoListTemplate from "./components/todo-list/todo-list-template/TodoListTemplate";
import Form from "./components/todo-list/form/Form.js";
import TodoItemList from "./components/todo-list/todo-item-list/TodoItemList.js";
import {checkTodo, removeTodo} from "./components/actions/todoActions";
import { connect } from "react-redux";
import Palette from "./components/todo-list/palette/Palette";
import {selectColor} from "./components/actions/colorActions";

// smart component
class App extends Component {

    render() {
        const { dispatch, todos, colors } = this.props;
        return (
            <div>
                <TodoListTemplate form={(<Form />)}
                                  palette={(<Palette
                                                colors={colors}
                                                // 액션 생성자 함수로 생성된 액션을 dispatch() 함수로 스토어에 전달
                                                onSelect={id => dispatch(selectColor(id))}
                                            />)}>
                    <TodoItemList
                        todos={todos}
                        // 액션 생성자 함수로 생성된 액션을 dispatch() 함수로 스토어에 전달
                        onToggle={id => dispatch(checkTodo(id))}
                        // 액션 생성자 함수로 생성된 액션을 dispatch() 함수로 스토어에 전달
                        onRemove={id => dispatch(removeTodo(id))}
                    />
                </TodoListTemplate>
            </div>
        );
    }

}

// 셀렉터 함수
// 애플리케이션 state 내의 어떤 부분이 컴포넌트에서 props 값으로 필요한지 지정
function select(state) {
    return {
        todos: state.todos,
        colors: state.colors
    }
}

// 뷰 레이어 바인딩 (Store, View 연결)
// index.js 내에서 공급 컴포넌트(Provider)로부터 주입받은 스토어와 연결하기 위해 connect() 함수 사용
// connect() 함수는 react-redux 내에서 제공되는 함수로, 셀렉터 함수를 이용해 필요한 연결을 생성한다.
// 리덕스에서는 스토어가 디스패처의 역할을 겸한다.
export default connect(select)(App);