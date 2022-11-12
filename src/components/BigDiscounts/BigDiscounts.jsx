import "./BigDiscounts.scss"
import "../BigDiscounts/BigDiscountsCard"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {DiscountData} from '../dummyData';
import BigDiscountsCard from "../BigDiscounts/BigDiscountsCard";


const BigDiscounts = () => {
  return (

    <div className='BigDiscounts'>
        <div className="container">
        <div className="heading">
        <i className="fa-solid fa-gift"></i>
        <h2>Big Discounts</h2>
        </div>

<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
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
      items: 6,
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
  rewind
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>

        {
        DiscountData.map( (item, index) => (
            <BigDiscountsCard key={index} product={item}/>
        ))
        }

</Carousel>


        </div>
    </div>
  )
}







export default BigDiscounts;