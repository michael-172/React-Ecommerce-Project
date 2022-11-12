import React from 'react';
import {categoriesData} from "../dummyData";

const Categories = () => {
  return (
    <div className='categories'>
      <ul className='items'>
        {
          categoriesData.map((cat, idx) => (
            <li className="item" key={idx}>
            <img src={cat.cateImg} alt="itemImg" />
            <span>{cat.cateName}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories
