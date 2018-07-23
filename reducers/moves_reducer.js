const initialState = {};

const movesReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};

export default movesReducer;