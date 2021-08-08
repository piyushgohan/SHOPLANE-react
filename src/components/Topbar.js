import React from 'react';
import {
    HomeIcon,
    ShoppingBagIcon,
    ChipIcon,
    LoginIcon,
    ShoppingCartIcon,
    SearchIcon,
} from '@heroicons/react/outline';
import Icon from '../addedCompoents/Icon';
import "./Topbar.css";
import logo from './SHOPLANE.gif';
import {useHistory} from 'react-router-dom';
import style from './styles.module.css';
import {useState, useEffect} from 'react';

function Topbar() {

    const history = useHistory();

    const [count, setCount] = useState(0);

    useEffect(() => {
        let length = 0;
        Object.keys(localStorage).map(arr =>{
            let item = JSON.parse(localStorage.getItem(arr));
            length += item.length;
            return null
        })
        setCount(length);
    },[])



    function home(e){
        history.push('/');
    }

    async function move1(e){
        await history.push('/');
        let node =await document.getElementById('cloth');
        node&&node.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
    async function move2(e){
        await history.push('/');
        let node = await document.getElementById('access');
        node&&node.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    function cart(e){
        history.push('/cart');
    }

    return (
        <div className="topbar">
            <div className="flex">
                <div style={{cursor : "pointer",textDecoration: "none"}} className={style.point} onClick={(e) => home(e)}><Icon title="Home" Icon={HomeIcon} /></div>
                <div style={{cursor : "pointer",textDecoration: "none"}} className={style.point} onClick={(e) => move1(e)}><Icon title="Clothing" Icon={ShoppingBagIcon} /></div>
                <div style={{cursor : "pointer",textDecoration: "none"}} className={style.point} onClick={(e) => move2(e)}><Icon title="Accessories" Icon={ChipIcon} /></div>
            </div>
            <div>
                <div style={{cursor : "pointer",textDecoration: "none"}} className={style.point} onClick={(e) => home(e)}><img src={logo} className="logo" alt="logo"/></div>
            </div>
            <div className="flex">
            <a className={style.point}><Icon title="Search" Icon={SearchIcon} /></a>
            <div className={style.rel} style={{cursor : "pointer",textDecoration: "none"}} onClick={(e) => cart(e)}><Icon title="Cart" Icon={ShoppingCartIcon} /><div className={style.abs}>{count}</div></div>
            <a className={style.point}><Icon title="Login" Icon={LoginIcon} /></a>
            </div>
        </div>
    )
}

export default Topbar

