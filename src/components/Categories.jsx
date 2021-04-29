import { memo } from 'react'

const Categories = memo(({ catIndex, items, onClickItem }) => {
    return (
        <div className='categories'>
            <ul>
                <li
                    className={catIndex === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>
                    Все
                </li>

                {items &&
                    items.map((name, index) => (
                        <li
                            className={catIndex === index ? 'active' : ''}
                            key={`${name}_${index}`}
                            onClick={() => onClickItem(index)}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    )
})

export default Categories
