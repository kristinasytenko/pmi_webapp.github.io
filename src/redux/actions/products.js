import axios from 'axios';

const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

export const fetchProducts = async (dispatch, category, sortBy) => {
    try {
        const { data } = await axios.get(
            `http://localhost:3001/products?${
                category === null ? `` : `category=${category}`
            }&_sort=${sortBy.type}&_order=${sortBy.order}`,
        );
        dispatch(setProducts(data));
    } catch (error) {
        console.error('Не удалось загрузить товары');
    }
};
