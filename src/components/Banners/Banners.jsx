import "./Banners.scss";
import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-2.png";

const Banners = () => {
  return (
    <div className="Banners">
      <div className="container">
      <img src={Banner1} alt="" className="first"/>
      <img src={Banner2} alt="" className="last"/>
      </div>
    </div>
  )
}

export default Banners
