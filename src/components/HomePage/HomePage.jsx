import React from 'react'
import FlashDeals from '../Flashdeals/FlashDeals.jsx';
import Header from '../Heading/Header.jsx';
import Landing from '../landing/Landing.jsx';
import NewArrivals from '../NewArrivals/NewArrivals.jsx';
import TopCategories from "../TopCategories/TopCategories.jsx";
import BigDiscounts from '../BigDiscounts/BigDiscounts.jsx';
import Mobiles from '../Mobiles/Mobiles.jsx';
import Banners from '../Banners/Banners.jsx';
import Advantages from '../Advantages/Advantages.jsx';
import Footer from '../Footer/Footer.jsx';

const HomePage = () => {
  return (
    <div className='Home'>
        <Header />
        <Landing />
        <FlashDeals />
        <TopCategories />
        <NewArrivals />
        <BigDiscounts />
        <Mobiles />
        <Banners />
        <Advantages/>
        <Footer />
    </div>
  )
}

export default HomePage
