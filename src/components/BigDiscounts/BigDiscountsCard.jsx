import React from 'react'

const BigDiscountsCard = ({product}) => {
  return (
    <div className='product'>
        <img src={product.cover} alt="" />
        <span className="name">Makeup</span>
        <span className="price">$150</span>
    </div>
  )
}

export default BigDiscountsCard

