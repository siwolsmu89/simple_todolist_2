export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function checkTodo(id) {
    return { type: CHECK_TODO, id }
}

export function removeTodo(id) {
    return { type: REMOVE_TODO, id }
}