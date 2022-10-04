import React from 'react';

function Categories({ activeCategory, onClickCategory }) {
    const categories = ['Kazakhstan', 'L&M', 'Marlboro', 'Philip Morris'];

    return (
        <div className="home__categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {categories.map((item, index) => (
                    <li
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)}
                        key={`${item}_${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
