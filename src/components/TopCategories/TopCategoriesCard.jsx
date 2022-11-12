import React from 'react';

const TopCategoriesCard = ({product}) => {
  return (
    <div className='TopCat-Card'>

        <div className="image-holder">
            <img src={product.cover} alt="" />
        </div>
        
        <div className="productName">{product.para}</div>
        <div className="productSales">{product.desc}</div>
    </div>
  )
}

export default TopCategoriesCard
