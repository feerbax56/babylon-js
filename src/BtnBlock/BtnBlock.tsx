import React from 'react';
import s from './Btn.module.css'
// import axios from 'axios';


// const LoadCache = async () => {
//     let result = await axios.get(
//         `https://speed.hetzner.de/1GB.bin`, {
//             headers: {
//                 'Access-Control-Allow-Origin': '*'
//             },
//             responseType: 'blob',
//         }
//     )
//     if (result.status === 200) {
//         console.log('200')

//         // localStorage.setItem('cache', JSON.stringify(result.data))
//     }
// }


const BtnBlock = () => {

    return (
        <div className={s.btnBlock}>
            <button className={s.glowOnHover}
            // onClick={LoadCache}
            >
                {/*<a href="https://speed.hetzner.de/1GB.bin">*/}
                    загрузка
                {/*</a>*/}
            </button>
        </div>
    );
};

export default BtnBlock;