import React from 'react';
import { useDispatch } from 'react-redux';

import { removeItem } from '../redux/actions/cart';

import { AppContext } from '../App';

function CartItem({ id, img, name, memory, price }) {
    const dispatch = useDispatch();

    const { correctedPrice } = React.useContext(AppContext);

    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src={img} alt="Картинка" />
            </div>
            <div className="cart-item__title">{name}</div>
            <div className="cart-item__memory">{memory}</div>
            <div className="cart-item__price">{correctedPrice(price)} руб.</div>
            <div className="cart-item__close" onClick={() => removeItem(dispatch, id)}>
                <span></span>
            </div>
        </div>
    );
}

export default CartItem;