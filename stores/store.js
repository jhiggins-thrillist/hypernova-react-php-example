import {createStore} from 'redux';

const initialState = {
    count: 0,
    header: 'Hello',
    videos: [
        {'title': 'This is a fancy title!', 'id': 1},
        {'title': 'You won\'t believe what this monkey will do!', 'id': 2},
        {'title': 'Stinky kitty brushes his teeth', 'id': 3},
    ]
};

function counterReducer(state = initialState, action) {

    switch (action.type) {

        case 'INCREMENT':
            return Object.assign({}, state, {
                count: state.count + 1
            });

        case 'DECREMENT':
            return Object.assign({}, state, {
                count: state.count - 1
            });

        default:
            return state;

    }

}

function configureStore(preloadedState) {
    const storeState = counterReducer(undefined, {});

    return createStore(
        counterReducer,
        Object.assign({}, storeState, preloadedState)
    );

}

export default configureStore;