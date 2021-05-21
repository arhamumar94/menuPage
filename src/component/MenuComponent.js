import React, { useState } from 'react'
import Menu from '../component/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/menuActions'
import SearchBar from './SearchBar'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-scroll'
import LoadingBox from './LoadingBox'


export default function MenuComponent() {
    const dispatch = useDispatch()



    const qtyChangeHandler = (qty, ele) => {
        ele.qty = qty;
        dispatch(addToCart(qty, ele))



    }

    const itemS = useSelector(state => state.itemS)
    const { item } = itemS
    const menu = useSelector(state => state.menu)
    const { data, loading, error } = menu
    const getCartSubTotal = () => {
        return item
            .reduce((price, item) => price + item.price * (item.qty ? item.qty : 1), 0)
            .toFixed(2);
    };
    const getTotal = (ele) => {
        return (ele.price * (ele.qty ? ele.qty : 1)).toFixed(2)
    }

    
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>


            <div className="containerMenu">
                <div className="col1">
                    <div className="fixed fixedMobile1">



                        <div >
                            <div className="searchComp">

                                <i className="magni"><SearchIcon></SearchIcon></i>
                                <input type="text" className="searchbox" id="search" placeholder="Search.." name="search" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}>



                                </input>
                            </div>

                            <div className="searchRow">
                                {loading ? <LoadingBox></LoadingBox> :
                                    data.categories.map((ele) => (
                                        <>
                                            <Link duration={500} smooth={true} offset={-130} to={`${ele.name_json.english}`}><button><h5>{ele.name_json.english}</h5></button></Link>

                                        </>
                                    ))}
                            </div>




                        </div>

                    </div>

                </div>
                <div className="col2">
                    <Menu searchEle={searchTerm}></Menu>
                </div>
                <div className="col1">
                    <div id="cart" className="fixed flexboxcol fixedMobile2">
                        <div>
                            <h3 className="textCenter">Your Cart</h3>
                        </div>

                        {item.length === 0 ? "" :
                            item.map((ele) => (
                                <>
                                    <div className="flexboxrow">
                                        <div className="flexboxrow2"><h5><b>{ele.name_json.english}</b></h5></div>
                                        <div className="flexboxrow2">
                                            <select
                                                value={ele.qty}
                                                onChange={(e) => qtyChangeHandler(e.target.value, ele)}
                                            >

                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>

                                            </select>

                                            <div> <h5><b>${getTotal(ele)}</b></h5></div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        <div className="flexboxrow">
                            <div className="flexboxrow3"><h5><b>Subtotal:</b></h5></div>
                            <div className="flexboxrow4"><h5><b>${getCartSubTotal()}</b></h5></div>
                        </div>
                        <button><h4 className="orderbutton">Order</h4></button>






                    </div>
                </div>
            </div>
        </>
    )
}
