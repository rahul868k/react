import React,{useState,useEffect} from 'react'
import './Cart.css'
import Arrow from './images/arrow.png'
import CartImg from './images/cart.png'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './items';

const Cart = () => {
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        setLoading(true)
    },[])
    return (
        <div>
            <header>
                <div className="continue-shopping">
                    <img src={Arrow} alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src={CartImg} alt="cart" />
                    <p>7</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>Shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">7</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                           {loading ? <Items/> 
                           :<div className="text-primary display-4 text-center">"loading...."</div>}                      
                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Card total : <span>22000rs</span> </h3>
                    <button>checkout</button>
                </div>
            </section>
        </div>
    )
}

export default Cart
