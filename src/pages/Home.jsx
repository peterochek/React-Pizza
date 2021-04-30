import { Categories, Index, SortPopup } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSortBy } from '../redux/action/filters'
import { useCallback, useEffect } from 'react'
import { fetchPizzas } from '../redux/action/pizzas'
import Loading from '../components/PizzaBlock/Loading'
import { addPizzaToCart } from '../redux/action/cart'

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const itemsCat = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'asc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
]

const Home = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector(({ cart }) => cart.items)

    const items = useSelector(({ pizzas }) => pizzas.items)

    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { sortBy, category } = useSelector(({ filters }) => filters)

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [sortBy, category])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    catIndex={category}
                    onClickItem={onSelectCategory}
                    items={categories}
                />
                <SortPopup
                    onClickSortType={onSelectSortType}
                    activeSortType={sortBy.type}
                    items={itemsCat}
                />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {isLoaded
                    ? items.map((item) => (
                          <Index
                              onClickAddPizza={handleAddPizzaToCart}
                              key={item.id}
                              addedCount={
                                  cartItems[item.id] &&
                                  cartItems[item.id].items.length
                              }
                              {...item}
                          />
                      ))
                    : Array(12)
                          .fill(0)
                          .map((_, i) => <Loading key={i} />)}
            </div>
        </div>
    )
}

export default Home
