const initialState = {
    items: [],
};

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return {
                items: action.payload,
            };
        case 'ADD_TO_FAVORITES':
            return {
                items: [...state.items, action.payload],
            };
        case 'REMOVE_FROM_FAVORITES':
            return {
                items: state.items.filter((item) => item.id !== action.payload),
            };

        default:
            return state;
    }
};

export default favorites;
