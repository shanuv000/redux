import * as actionTypes from './actions';


const initialState = {
    counter: 0,
    result: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1

            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1

            }
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.value

            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value

            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULTS:
            const updatedArray = state.result.filter(result => result.id !== action.resultElid)
            return {
                ...state,
                result: updatedArray

            }
    }

    return state;

}
export default reducer;