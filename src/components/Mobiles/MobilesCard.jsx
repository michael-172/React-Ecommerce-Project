import React from 'react'
import { useDispatch } from 'react-redux'
import productImg from "../../assets/images/flash/flash-2.png"

const MobilesCard = ({product, addToCart}) => {
  const dispatch = useDispatch();
  return (
    <div>
    <div className='product'>
      <div className="top-row">
        <span className="discount">50% off</span>
        <i className="fa-regular fa-heart addToFav"></i>
      </div>
      <div className="center-row">
        <img src={product.cover} alt="" />
      </div>
      <div className="bottom-row">
        <div className="text">
            <span className="productName">{product.name}</span>
                <div className="stars">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
            <span className="price">$100.00</span>
        </div>
        <button className="addBtn" onClick={() => {dispatch(addToCart(product))}}>
        <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
    </div>
  )
}

export default MobilesCard
