import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';
import Categories from '../components/Categories';
import SortBy from '../components/SortBy';

import { fetchProducts } from '../redux/actions/products';
import { setCategory, setSortBy } from '../redux/actions/filters';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(({ products }) => products.items);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    const onClickCategory = (category) => {
        dispatch(setCategory(category));
    };

    const onClickSortBy = (item) => {
        dispatch(setSortBy(item));
    };

    React.useEffect(() => {
        fetchProducts(dispatch, category, sortBy);
    }, [category, sortBy]);

    return (
        <div className="home">
            <div className="home__container">
                <h2 className="home__title">Товары</h2>
                <div className="home__filters">
                    <Categories activeCategory={category} onClickCategory={onClickCategory} />
                    <SortBy activeSortType={sortBy.type} onClickSortBy={onClickSortBy} />
                </div>
                <div className="home__products">
                    {products.map((item) => (
                        <Card {...item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
