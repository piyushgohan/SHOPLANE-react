import axios from 'axios';
import React from 'react'
import {useState , useEffect} from 'react';
import style from './styles.module.css';
import {useHistory} from 'react-router-dom';

function Clothing() {
    const history = useHistory();
    const [data,setData] = useState([]);
    
    useEffect(() => {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    function load(id){
       history.push(`./product/${id}`);
    }

    return (
        <div className={style.dummy} id="cloth">
            <h2 className={style.head}>Clothing For Men & Women</h2>
        <div className={style.cardflex}>
            {
                data.map(item => {
                    return item.id <=5 && <div key={item.id} className={style.box} onClick={() => load(item.id)}>
                        <img src={item.preview} className={style.img} alt={item.name} />
                        <div>
                            <p className={style.name}>{item.name}</p>
                            <p className={style.brand}>{item.brand}</p>
                            <p>Rs.<span className={style.price}> {item.price}</span></p>
                        </div>
                    </div>;
                })
            }
        </div>
        </div>
    )
}

export default Clothing
