import axios from 'axios';

export const setCartItems = (items) => ({
    type: 'SET_CART_ITEMS',
    payload: items,
});

const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
});

export const onClickAddToCart = async (dispatch, item) => {
    try {
        const { data } = await axios.post('http://localhost:3001/cart', item);
        dispatch(addToCart(data));
    } catch (error) {
        console.error('Не удалось добавить этот товар в корзину');
    }
};

const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});

export const removeItem = (dispatch, id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    dispatch(removeFromCart(id));
};
