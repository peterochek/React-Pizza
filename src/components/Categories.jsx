import { useState } from 'react'

const Categories = ({ items }) => {

    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <div className="categories">
            <ul>
                <li>Все</li>

                {items && items.map((name, index) => (
                    <li className={selectedItem === index ? 'active' : ''}
                        key={`${name}_${index}`} onClick={() => setSelectedItem(index)}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Categories