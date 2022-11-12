import React from 'react';

const FlashDealsCard = ({product, dispatch, addToCart}) => {
  return (
    <div className='product'>
      <div className="top-row">
        <span className="discount">{product.discount}% off</span>
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
            <span className="price">${product.price}.00</span>
        </div>
        <button className="addBtn" onClick={() => {dispatch(addToCart(product))}}>
        <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default FlashDealsCard
