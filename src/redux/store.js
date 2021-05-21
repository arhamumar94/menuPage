import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { addToCartReducer, menuReducer } from "./reducers/menuReducer";



const reducer = combineReducers({
  menu: menuReducer,
  itemS: addToCartReducer

});


const middleware = [thunk];



const initialState = {
  itemS: {
    item: []
  }
}


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;