import axios from 'axios';

export const setFavorites = (items) => ({
    type: 'SET_FAVORITES',
    payload: items,
});

const addToFavorites = (item) => ({
    type: 'ADD_TO_FAVORITES',
    payload: item,
});

const removeFromFavorites = (id) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: id,
});

export const onClickFavorite = async (dispatch, item) => {
    try {
        const { data } = await axios.post('http://localhost:3001/favorites', item);
        dispatch(addToFavorites(data));
    } catch (error) {
        console.error('Не удалось добавить этот товар в избранные');
    }
};

export const onClickRemoveFavorite = async (dispatch, id) => {
    await axios.delete(`http://localhost:3001/favorites/${id}`);
    dispatch(removeFromFavorites(id));
};
