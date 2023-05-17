import React from 'react';
import s from './Btn.module.css'
import axios from 'axios';


const LoadCache = async () => {
    let result = await axios.get(
        `https://speed.hetzner.de/1GB.bin`,
    )
    if (result.status === 200 && result.data.length > 0) {
        console.log(result)
        // localStorage.setItem('cache', JSON.stringify(result.data))
    }
}


const BtnBlock = () => {

    return (
        <div className={s.btnBlock}>
            <button className={s.glowOnHover} onClick={LoadCache}>загрузка в кэш</button>
        </div>
    );
};

export default BtnBlock;