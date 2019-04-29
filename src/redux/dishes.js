import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true, 
        errMessage: null,
        dishes: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return Object.assign({}, state, { isLoading: false, errMessage: null, dishes: action.payload });

        case ActionTypes.DISHES_LOADING:
            return Object.assign({}, state, { isLoading: true, errMessage: null, dishes: [] });

        case ActionTypes.DISHES_FAILED:
            return Object.assign({}, state, { isLoading: false, errMessage: action.payload, dishes: [] });

        default:
            return state;
    }
}