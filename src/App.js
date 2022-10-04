import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import OpenedCard from './pages/OpenedCard';

import { setCartItems } from './redux/actions/cart';
import { setFavorites } from './redux/actions/favorites';

import './scss/style.scss';

export const AppContext = React.createContext();

function App() {
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cart }) => cart.items);
    const favoriteItems = useSelector(({ favorites }) => favorites.items);

    const correctedPrice = (price) => {
        if (price === undefined) {
            return null;
        } else {
            const n = price.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const cart = await axios.get('http://localhost:3001/cart');
                const favorites = await axios.get('http://localhost:3001/favorites');

                dispatch(setCartItems(cart.data));
                dispatch(setFavorites(favorites.data));
            } catch (error) {
                console.error('Не удалось загрузить товары из корзины и избранного');
            }
        };
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ cartItems, favoriteItems, correctedPrice }}>
            <div className="App">
                <div className="wrapper">
                    <Header />

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} exact />
                            <Route path="/cart" element={<Cart />} exact />
                            <Route path="/favorites" element={<Favorites />} exact />
                            <Route path="/product/:id" element={<OpenedCard />} exact />
                        </Routes>
                    </div>

                    <footer className="footer"></footer>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
