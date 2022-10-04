import React from 'react';

function SortBy({ activeSortType, onClickSortBy }) {
    const sorts = [
        { name: 'Популярности', type: 'popular', order: 'desc' },
        { name: 'Цене', type: 'price', order: 'asc' },
        { name: 'Алфавиту', type: 'name', order: 'asc' },
    ];

    const activeSort = sorts.find((obj) => obj.type === activeSortType).name;
    const sortRef = React.useRef(null);
    const [popupOpen, setPopupOpen] = React.useState(false);

    const onClickSort = (item) => {
        onClickSortBy(item);
        setPopupOpen(false);
    };

    React.useEffect(() => {
        document.addEventListener('click', (e) => {
            if (!e.path.includes(sortRef.current)) {
                setPopupOpen(false);
            }
        });
    });

    return (
        <div className="home__sortby sortby" ref={sortRef}>
            <div className="sortby__title" onClick={() => setPopupOpen(!popupOpen)}>
                Сортировка по: <span>{activeSort}</span>
            </div>
            <div className={popupOpen ? 'sortby__popup opened' : 'sortby__popup'}>
                <ul>
                    {sorts.map((item, index) => (
                        <li
                            className={activeSort === item.name ? 'active' : ''}
                            onClick={() => onClickSort(item)}
                            key={`${item.name}_${index}`}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SortBy;
