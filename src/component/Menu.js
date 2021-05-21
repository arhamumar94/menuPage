import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getMenu } from '../redux/actions/menuActions';
import MessageBox from '../component/MessageBox'
import LoadingBox from "../component/LoadingBox"


export default function Menu(props) {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMenu());

  }, [])
  const menu = useSelector(state => state.menu)
  const { data, loading, error } = menu;

  const clickHandler = (product) => {
    dispatch(addToCart(1, product));


  }
  const searchTerm = props.searchEle;

  return (
    <div className="itemsConatiner">
      {loading ? <LoadingBox></LoadingBox> :
        error ? <MessageBox></MessageBox> :
          data.categories.map((ele) => (
            <>
              <div className="flexmaking" id={`${ele.name_json.english}`}>

                {ele.products.filter((v) => {
                  if (searchTerm === "") {
                    return v;
                  }
                  else if (v.name_json.english.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return v;
                  }
                }).map((product, index) => (
                  <>

                    {index === 0 ? <h2 className="textCenter">{ele.name_json.english}</h2> : ""}

                    <div className="flexrow">
                      <div className="col7">
                        <div><h5>{product.name_json.english}</h5></div>
                        <div><h6>{product.description_json.english}</h6></div>
                        {/* <p className="smallP">{product.description_json.english}</p> */}
                        {/* <p className="smallP"><b>{product.price}</b></p> */}
                        <div><h5><b>$ {product.price}</b></h5></div>

                      </div>
                      <div className="col3">
                        <button className="addTocart" onClick={() => clickHandler(product)}>CART</button>
                      </div>
                    </div>


                  </>
                ))}




              </div>
            </>


          ))
      }





    </div>
  )
}
