import React from 'react';

import { AppContext } from '../App';

import Card from '../components/Card';

function Favorites() {
    const { favoriteItems } = React.useContext(AppContext);

    return (
        <div className="favorites">
            <div className="favorites__container">
                <div className="favorites__title">Избранное</div>
                {favoriteItems.length > 0 ? (
                    <div className="favorites__products">
                        {favoriteItems.map((item) => (
                            <Card {...item} key={item.id} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 400 }}>
                        Ни один товар не добавлен в избранное
                    </div>
                )}
            </div>
        </div>
    );
}

export default Favorites;
