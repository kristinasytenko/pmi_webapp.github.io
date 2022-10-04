import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { onClickAddToCart } from '../redux/actions/cart';
import { onClickFavorite, onClickRemoveFavorite } from '../redux/actions/favorites';

import { AppContext } from '../App';
import InfoModal from '../components/InfoModal';

function OpenedCard() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [product, setProduct] = React.useState({});
    const [activeMemory, setActiveMemory] = React.useState(null);
    const [memory, setMemory] = React.useState('');
    const [modalOpened, setModalOpened] = React.useState(false);
    const { cartItems, favoriteItems, correctedPrice } = React.useContext(AppContext);

    const addedProduct = {
        ...product,
        memory: memory,
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3001/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.error('Не удалось загрузить товар');
            }
        };
        fetchData();
    }, []);

    React.useEffect(() => {
        const itemMemory = () => {
            if (product.memory) {
                const memoryItem = product.memory[activeMemory];
                setMemory(memoryItem);
            } else {
                setMemory('-');
            }
        };
        itemMemory();
    }, [activeMemory]);

    const checkCartItems = () => {
        return cartItems.some((item) => item.id === product.id);
    };

    const addToCart = (e) => {
        e.preventDefault();

        if (product.memory) {
            activeMemory !== null ? onClickAddToCart(dispatch, addedProduct) : setModalOpened(true);
        } else {
            onClickAddToCart(dispatch, addedProduct);
        }
    };

    const checkFavoritesItems = () => {
        return favoriteItems.some((item) => item.id === product.id);
    };

    const onFavorite = () => {
        if (checkFavoritesItems()) {
            onClickRemoveFavorite(dispatch, product.id);
        } else {
            onClickFavorite(dispatch, product);
        }
    };

    return (
        <div className="opened-card">
            <div className="opened-card__body">
                <div className="opened-card__left-block left-block">
                    <div className="left-block__title">{product.name}</div>
                    <div className="left-block__image">
                        <img src={product.img} alt="Картинка" />
                    </div>
                </div>
                <div className="opened-card__right-block right-block">
                    
                        <div className="right-block__memory">
                            <span className="right-block__memory-title">Количество:</span>
                            
<div class="quantity_inner">        
    <button class="bt_minus">
        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
    <input type="text" value="1" size="2" class="quantity" data-max-count="20" />
    <button class="bt_plus">
        <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
</div>
                        </div>
                 
                    
                    <div className="right-block__price">{correctedPrice(product.price)} KZT</div>
                    <div className="right-block__buttons">
                        <button
                            className="right-block__button-green button"
                            disabled={checkCartItems() ? true : false}
                            onClick={(e) => addToCart(e)}>
                            {checkCartItems() ? 'Товар добавлен' : 'В корзину'}
                        </button>
                        <button
                            className="right-block__button-purple button"
                            onClick={() => onFavorite()}>
                            {checkFavoritesItems() ? 'В избранном' : 'В избранное'}
                        </button>
                    </div>
                </div>
            </div>
            <InfoModal
                open={modalOpened}
                setOpen={setModalOpened}
                text={'Пожалуйста, укажите количество товара'}
            />
        </div>
    );
}

export default OpenedCard;
