 import "./NewArrivals.scss";
 import productImg1 from "../../assets/images/arrivals/arrivals1.png"
 import productImg2 from "../../assets/images/arrivals/arrivals2.png"
 import productImg3 from "../../assets/images/arrivals/arrivals3.png"
 import productImg4 from "../../assets/images/arrivals/arrivals4.png"
 import productImg5 from "../../assets/images/arrivals/arrivals5.png"
 import productImg6 from "../../assets/images/arrivals/arrivals6.png"
 
 const NewArrivals = () => {
   return (
     <div className='new-arrivals'>
        <div className="container">
        <div className="heading">
            <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" />
            <h2>New Arrivals</h2>
        </div>

        <div className="products-wrapper">
            <div className="product">
            <img src={productImg1} alt="" />
            <span className="name">Sunglass</span>
            <span className="price">$150</span>
            </div>

            <div className="product">
            <img src={productImg2} alt="" />
            <span className="name">Makeup</span>
            <span className="price">$150</span>
            </div>

            <div className="product">
            <img src={productImg3} alt="" />
            <span className="name">Smart Watches</span>
            <span className="price">$150</span>
            </div>

            <div className="product">
            <img src={productImg4} alt="" />
            <span className="name">Makeup</span>
            <span className="price">$150</span>
            </div>

            <div className="product">
            <img src={productImg5} alt="" />
            <span className="name">Grass</span>
            <span className="price">$150</span>
            </div>

            <div className="product">
            <img src={productImg6} alt="" />
            <span className="name">Sunglass</span>
            <span className="price">$150</span>
            </div>
        </div>
        </div>
     </div>
   )
 }
 
 export default NewArrivals
 