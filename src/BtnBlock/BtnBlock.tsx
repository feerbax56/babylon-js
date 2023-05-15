import React from 'react';
import s from './Btn.module.css'
// import axios from 'axios';


// const areaDataCache = {};
// const postcode = 'filename=ooo-cab-war-for-galaxy-mobile-warforgalaxy-windows-402.zip'
//
// const getAreaData = async (postcode: any) => {
//     // if cache doesn't contain data
//     if (!areaDataCache[postcode]) {
//         // load data and add it to cache
//         const { data } = await axios.get(`https://api.zippopotam.us/GB/${postcode}`);
//         areaDataCache[postcode] = data.places
//     }
//     // cached data
//     return areaDataCache[postcode];
// };




const BtnBlock = () => {

    return (
        <div className={s.btnBlock}>
            <button className={s.glowOnHover} >загрузка в кэш</button>
        </div>
    );
};

export default BtnBlock;