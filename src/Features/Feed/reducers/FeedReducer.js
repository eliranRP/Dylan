import { ADD_POST } from '../types';

const INITIAL_STATE = {
    posts: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            return { ...state };
        default:
            return state;
    }
};
