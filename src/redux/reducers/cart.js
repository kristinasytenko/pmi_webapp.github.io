const initialState = {
    items: [],
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART_ITEMS':
            return {
                items: action.payload,
            };
        case 'ADD_TO_CART':
            return {
                items: [...state.items, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                items: state.items.filter((item) => item.id !== action.payload),
            };

        default:
            return state;
    }
};
console.log(initialState);
export default cart;
