import { useDispatch, useSelector } from "react-redux"
import Footer from "../Footer/Footer"
import Header from "../Heading/Header"
import { deleteFromCart, increaseQuantity, decreaseQuantity } from "../../ReduxToolkit/cartSlice"
import "./Cart.scss"

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    let totalPrice = 0;
    (cart.length > 0) && (totalPrice = cart.reduce((acc, product) => {
        acc+= product.price * product.quantity
        return acc;
    }, 0));


  return (
    <>
    <Header />
        <div className="cart">
            <div className="container">
                <div className="items">

                    {
                        (cart.length > 0) ? 
                         (
                            cart.map((item) => (
                                <div className="item" key={item.id}>
                                <div className="left">
                                    <div className="img"><img src={item.cover} alt="" /></div>
                                    <div className="text">
                                        <span className="title">{item.name}</span>
                                        <div className="price-quantity">
                                            <span>{item.price} * <span>{item.quantity}</span> </span>
                                            <span className="finalPrice">{item.price * item.quantity}$</span>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="right">
                                    <div className="closeBtn">
                                        <button onClick={() => {dispatch(deleteFromCart(item))}}>
                                            <i className="fa-solid fa-x"></i>
                                        </button>
                                    </div>
                                    <div className="control">
                                        <button className="plus" onClick={() => {dispatch(increaseQuantity(item))}}>
                                        <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <button className="minus"  onClick={() => {dispatch(decreaseQuantity(item))}}>
                                        <i className="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            ))
                         )
                        :  
                        (<div className="item">
                            <span>Your Cart is Empty</span>
                        </div>)
                    }

                </div>

                
                <div className="summary cart-box">
                    <h2>Cart Summary</h2>
                    {
                        (cart.length > 0) ? (
                            <div className="totalPrice">
                            <span>Total Price: </span>
                            <span>{totalPrice}$</span>
                            </div>
                        ) : (
                            <div className="totalPrice">
                            <span>Total Price: </span>
                            <span>0.00$</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default Cart
