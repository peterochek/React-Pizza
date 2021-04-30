import axios from 'axios'

export const fetchPizzas = (sortBy, catIndex) => async (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    })
    const { data } = await axios.get(
        `/pizzas?${catIndex !== null ? `category=${catIndex}` : ''}&_sort=${
            sortBy.type
        }&_order=${sortBy.order}`
    )
    dispatch(setPizzas(data))
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})
