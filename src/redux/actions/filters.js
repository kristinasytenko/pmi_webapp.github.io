export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    payload: category,
});

export const setSortBy = ({ type, order }) => ({
    type: 'SET_SORT_BY',
    payload: { type, order },
});
