import React from 'react'
import Categories from './Categories'
import SliderComponent from './SliderComponent'
import "./landing.scss"

const Landing = () => {
  return (
    <section className='landing'>
        <div className="container">
            <Categories />
            <SliderComponent />
        </div>
    </section>
  )
}

export default Landing
