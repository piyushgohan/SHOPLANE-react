import axios from 'axios';
import React from 'react';
import {useParams} from 'react-router-dom';
import { useState , useEffect , useRef } from 'react';
import './Product.css';

function Product() {
    const params = useParams();
    const [data,setData] = useState([]);
    let ref1 = useRef();
    let ref2= useRef();
    useEffect(() => {
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${params.id}`).then(res => {
            return setData(res.data)})
        .catch(err => console.log(err));
    },[]);

    function add(e){
        ref1.className = "images";
        e.target.className = 'images box';
        ref1 = e.target;
        ref2.current.src = ref1.src;
    }

    function first(e){
        if(data.preview === e.target.src){
            e.target.className ="images box"
            ref1 = e.target;
        }
    }

    function cart(e){
        let res =[];
        if(localStorage.getItem(data.id) == null){
            res.push(data);
            localStorage.setItem(data.id,JSON.stringify(res));
        }
        else{
            res = JSON.parse(localStorage.getItem(data.id));
            res.push(data);
            localStorage.setItem(data.id,JSON.stringify(res))
        }
    }

    return (
        <div className="flexbox">
            <div className="first">
                <img src={data.preview} className="preview" ref={ref2} alt="prod"/>
            </div>
            <div className="second">
                <h1 className="name">{data.name}</h1>
                <p className="brand">{data.brand}</p>
                <p className="price">Price: Rs. <span>{data.price}</span></p>
                <p className="same">Description:</p>
                <p className="desc">{data.description}</p>
                <p className="same">Product Preview:</p>
                <div className="img-flex">
                {
                    data.photos && data.photos.map((item,index) => {
                        return <div key={index} className="img-block" >
                            <img src={item} className="images" onClick={(e) => add(e)} onLoad={e => first(e)} alt="prev" />
                        </div>
                    })
                }
                </div>
                <button className="btn" onClick={(e) => cart(e)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product;
