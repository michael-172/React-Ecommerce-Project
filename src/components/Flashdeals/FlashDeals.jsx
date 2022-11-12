import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FlashDealsCard from './FlashDealsCard';
import "./flashdeals.scss"
import {FlashDealsData} from "../dummyData"
import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../../ReduxToolkit/productsSlice';
import { addToCart } from '../../ReduxToolkit/cartSlice';


const FlashDeals = () => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [dispatch])

  // const {products} = useSelector((state) => state)

  return (
    <div className='flashdeals'>
        <div className="container">
        <div className="heading">
            <i className="fa-solid fa-bolt"></i>
            <h2>Flash Deals</h2>
        </div>
        
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
    {
        FlashDealsData.map( (item, index) => (
            <FlashDealsCard key={index} product={item} dispatch={dispatch} addToCart={addToCart}/>
        ))
    }
{/* <div>test</div> */}
</Carousel>

        </div>
    </div>
  )
}

export default FlashDeals


