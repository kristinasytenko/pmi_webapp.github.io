const initialState = {
    items: [],
    isLoaded: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};

export default products;
