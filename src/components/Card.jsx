import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../App';

import { onClickFavorite, onClickRemoveFavorite } from '../redux/actions/favorites';

function Card({ id, img, name, price, memory, category }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { favoriteItems, correctedPrice } = React.useContext(AppContext);

    const checkFavoritesItems = () => {
        return favoriteItems.some((item) => item.id === id);
    };

    const onFavorite = (e) => {
        e.stopPropagation();

        if (checkFavoritesItems()) {
            onClickRemoveFavorite(dispatch, id);
        } else {
            onClickFavorite(dispatch, { id, img, name, price, memory, category });
        }
    };

    return (
        <div className="home__card card" onClick={() => navigate(`/product/${id}`)}>
            <button
                className={checkFavoritesItems() ? 'card__favorite added' : 'card__favorite'}
                onClick={(e) => onFavorite(e)}>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 28 28">
                    <title>heart-o</title>
                    <path d="M26 9.312c0-4.391-2.969-5.313-5.469-5.313-2.328 0-4.953 2.516-5.766 3.484-0.375 0.453-1.156 0.453-1.531 0-0.812-0.969-3.437-3.484-5.766-3.484-2.5 0-5.469 0.922-5.469 5.313 0 2.859 2.891 5.516 2.922 5.547l9.078 8.75 9.063-8.734c0.047-0.047 2.938-2.703 2.938-5.563zM28 9.312c0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281s-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313z"></path>
                </svg>
            </button>
            <div className="card__image">
                <img src={img} alt="Картинка" />
            </div>
            <div className="card__info">
                <div className="card__title">{name}</div>
                <div className="card__footer">
                
                    <span className="card__sum">{correctedPrice(price)} KZT</span>

                </div>
            </div>
        </div>
    );
}

export default Card;
