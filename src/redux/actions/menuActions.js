import axios from "axios"
import { ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/menu"

export const getMenu = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST })
    try {
        const { data } = await axios.get('https://myqa.fleksa.com/pyapi/5/menu')
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })

    }

}
export const addToCart = (qty, product) => async (dispatch) => {
    dispatch({ type: ADD_TO_CART_REQUEST })
    try {

        dispatch({ type: ADD_TO_CART_SUCCESS, payload: product })


    } catch (error) {
        dispatch({
            type: ADD_TO_CART_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })

    }


}
