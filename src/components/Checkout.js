import React from 'react';
import {useState, useEffect} from 'react';
import './Checkout.css';

function Checkout() {
    let price = 0;
    const [data,setData] = useState([]);

    useEffect(() =>{
        let pushData = [];
        Object.keys(localStorage).forEach((item) => {
            console.log(item);
            let res = JSON.parse(localStorage.getItem(item));
            pushData.push(res);
       });
       setData(pushData);
    },[]);


    return (
        <div className="cart-flex">
            <div className="cart-container">
                {
                    data && data.map(arr => {
                        price += (arr[0].price * arr.length);
                        return <div key={arr[0].id} className="cart-box">
                            <img src={arr[0].preview} className="cart-img" alt="1" />
                            <div className="cart-details">
                                <div>
                                    <p className="cname">{arr[0].name}</p>
                                    <p className="cbrand">{arr[0].brand}</p>
                                    <p className="cprice">Rs.<span>{arr[0].price}</span></p>
                                </div>
                                <div className="cart-move">
                                    <p className="count">Quantity: <span>{arr.length}</span></p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="checkout-container">
                <div className="checkout-box">
                    <p className="ctitle">Total Amount</p>
                    <p></p>
                    <p className="checkout-price">Total Price: Rs. <span>{price}</span></p>
                    <button className="btn">Place Order</button>
                </div>
            </div>
        </div>
    )  
}

export default Checkout
