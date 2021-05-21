import { ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/menu";

export const menuReducer = (state = { loading: true, data: {} }, action) => {
    switch (action.type) {

        case GET_PRODUCTS_REQUEST:

            return {
                loading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                data: action.payload,
                loading: false
            }
        case GET_PRODUCTS_FAIL:
            return {
                error: action.payload
            }
        default:
            return state;
    }

}

export const addToCartReducer = (state = { item: [] }, action) => {

    switch (action.type) {

        case ADD_TO_CART_REQUEST:

            return {
                ...state,

            }


        case ADD_TO_CART_SUCCESS:
            const element = action.payload;
            const existItem = state.item.find((x) => x.id === element.id);
            if (existItem) {
                return {
                    ...state,
                    item: state.item.map((x) =>
                        x.id === existItem.id ? element : x
                    ),
                };
            }
            else {
                return {
                    ...state,
                    item: [...state.item, action.payload]
                }

            }






        case ADD_TO_CART_FAIL:
            return {
                error: action.payload
            }
        default:
            return state;
    }
}