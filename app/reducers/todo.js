/**
 * Created by poype on 16/8/25.
 */
const initialState = {
    todos:[]
};

function todo(state=initialState, action) {
    if (action.type === 'todo_add') {
        // state.todos.push(action.data);
        return {todos:[
            ...state.todos,
            action.data
        ]};
    }
    return state;
}

module.exports = todo;