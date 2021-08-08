import React from 'react'
import style from './styles.module.css';
function Footer() {
    return (
        <div className={style.footerflex}>
            <div>
                <h2 className={style.foothead}>ONLINE STORE</h2>
                <p className={style.footname}> MEN CLOTHING</p>
                <p className={style.footname}>WOMEN CLOTHING</p>
                <p className={style.footname}>MEN ACCESSORIES</p>
                <p className={style.footname}>WOMEN ACCESSORIES</p>
            </div>
            <div>
                <h2 className={style.foothead}>HELPFUL LINKS</h2>
                <p className={style.footname}>HOME</p>
                <p className={style.footname}>ABOUT</p>
                <p className={style.footname}>CONTACT</p>
            </div>
            <div>
                <h2 className={style.foothead}>PATNERS</h2>
                <p className={style.footname}>ZARA</p>
                <p className={style.footname}>PANTALOONS</p>
                <p className={style.footname}>LEVIS</p>
                <p className={style.footname}>UCB</p>
                <p className={style.footname}>+ MANY MORE</p>
            </div>
            <div>
                <h2 className={style.foothead}>ADDRESS</h2>
                <p className={style.footadd}>BUILDING 101<br/><br/>
                    CENTRAL AVENUE<br/><br/>
                    LA - 902722<br/><br/>
                    UNITED STATES</p>
            </div>
        </div>
    )
}

export default Footer
