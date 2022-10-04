import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../App';

import CartItem from '../components/CartItem';



function Cart() {
    const navigate = useNavigate();

    const { cartItems, correctedPrice } = React.useContext(AppContext);
    const sumCartItems = cartItems.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);

    return (
        <div className="cart">
            <div className="cart__container">
                <h1 className="cart__title">Корзина</h1>
                {cartItems.length > 0 ? (
                    <div className="cart__products">
                        <div className="cart__products-header">
                            <div className="cart__products-image"></div>
                            <div className="cart__products-title">Наименование товара</div>
                            <div className="cart__products-memory">Количество</div>
                            
                            <div className="cart__products-price">Цена</div>
                        </div>
                        {cartItems.map((item) => (
                            <CartItem {...item} key={item.id} />
                        ))}
                        <div className="cart__info">
                            <div className="cart__info-number">
                                Кол-во товаров: <span>{cartItems.length}</span>
                            </div>
                            <div className="cart__info-sum">
                                Итого: <span>{correctedPrice(sumCartItems)} руб.</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cart__offer">
                        <h2>Ваша корзина пуста</h2>
                        <p>Самое время добавить в нее что-нибудь</p>
                        <button className="button" onClick={() => navigate('/')}>
                            Перейти в каталог
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
