import {ADD_TODO, CHECK_TODO, REMOVE_TODO} from "../actions/todoActions";
import {SELECT_COLOR} from "../actions/colorActions";

// 초기 state 세팅
const initialState = {
    todos: [
        { id: 0, text: '리액트 소개', checked: false, color: '#343a40' },
        { id: 1, text: '리덕스 사용', checked: true, color: '#343a40' },
        { id: 2, text: '리덕스 사용', checked: false, color: '#343a40' }
    ],
    colors: [
        { id: 0, colorValue: '#343a40', selected: true },
        { id: 1, colorValue: '#f03e3e', selected: false },
        { id: 2, colorValue: '#228ae6', selected: false },
        { id: 3, colorValue: '#12b886', selected: false }
    ]
}

// to-do 액션과 관련된 처리를 담당하는 리듀서
function todos(state, action) {
    const { todos, colors } = state;
    switch (action.type) {
        case ADD_TODO:
            let lastId = -1;
            for (const todo of todos) {
                lastId = todo.id >= lastId ? todo.id : lastId;
            }
            
            const colorIndex = colors.findIndex(color => color.selected) !== -1 ? colors.findIndex(color => color.selected) : 0;
            const selectedColor = colors[colorIndex];

            const newTodo = { id: lastId + 1, text: action.text, checked: false, color: selectedColor };
            return [...todos, newTodo];
        case CHECK_TODO:
            const checkedIndex = todos.findIndex(todo => todo.id === action.id);
            const checkedTodo = todos[checkedIndex];
            const todosAfterCheck = [...todos];
            todosAfterCheck[checkedIndex] = {
                ...checkedTodo,
                checked: !checkedTodo.checked
            };
            return todosAfterCheck;
        case REMOVE_TODO:
            return todos.filter(todo => todo.id !== action.id);
        default:
            return todos;
    }
}

// color 액션과 관련된 처리를 담당하는 리듀서
function colors(state, action) {
    const { colors } = state;
    switch (action.type) {
        case SELECT_COLOR:
            const selectedIndex = colors.findIndex(color => color.id === action.id);
            const selectedColor = colors[selectedIndex];
            const colorsAfterSelect = [...colors];
            for (const color of colorsAfterSelect) {
                color.selected = false;
            }

            colorsAfterSelect[selectedIndex] = {
                ...selectedColor,
                selected: true
            }
            return colorsAfterSelect;
        default:
            return colors;
    }
}

// 파라미터로 넘겨받은 state 없으면 initialState 사용
// to-do 리듀서와 color 리듀서를 통합한 루트 리듀서
// state 객체를 조각화하여 필요한 하위 리듀서에게 처리 위임
export default function todoApp(state = initialState, action) {
    return {
        todos: todos(state, action),
        colors: colors(state, action)
    };
}
