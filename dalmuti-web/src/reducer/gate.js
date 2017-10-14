import {ENTER} from "../action/gate";

const initialState = '';

export function enter(state = initialState, action) {
    const {type, name} = action;

    switch (type) {
        case ENTER:
            return Object.assign({}, state, {name: name});
        default:
            return state;
    }
}