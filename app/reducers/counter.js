/**
 * Created by poype on 16/8/25.
 */

const initialState = {
    num:100
};

function counter(state=initialState, action) {
    if (action.type === 'ADD') {
        let increase = action.data;
        if(!increase){
            increase = 1;
        }
        let newNum = state.num+increase;
        return {
            num:newNum
        };
    }
    if (action.type === 'SUB') {
        let reduce = action.data;
        if(!reduce) {
            reduce = 1;
        }
        let newNum = state.num - reduce;
        return {
            num:newNum
        };
    }
    return state;
}

module.exports = counter;
