const activeSortType = 'price'

const items = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
]

const activeItem = items.find((obj) => obj.type === activeSortType)

const activeLabel = activeItem.name

console.log(activeLabel)
