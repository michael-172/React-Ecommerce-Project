import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/SlideCard/slide-1.png";
import img2 from "../../assets/images/SlideCard/slide-2.png";
import img3 from "../../assets/images/SlideCard/slide-3.png";
import img4 from "../../assets/images/SlideCard/slide-3.png";

const Sdata = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: img1,
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: img2,
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: img3,
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: img4,
  },
];

const SliderComponent = () => {

  return (
    <div className='slider'>

<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
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
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable
>


        {Sdata.map((value, idx) => {
          return (
              <div className='box' key={idx}>
                <div className='left'>
                  <h1 className='homeSliderH1'>{value.title}</h1>
                  <p className='homeSliderP'>{value.desc}</p>
                  <button className='btn-primary homeSliderBtn'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
          )
        })}

</Carousel>
    </div>
  )
}

export default SliderComponent
