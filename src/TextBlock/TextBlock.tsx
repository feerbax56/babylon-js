import React, {useState} from 'react';
import s from './TextBlock.module.css'
import Typed from 'typed.js';

const TextBlock = () => {

    const text: string[] =
        [
            '1 Кстати, некоторые особенности внутренней политики обнародованы. Лишь представители современных социальных резервов представлены в исключительно положительном свете.',
            '2 Безусловно, современная методология разработки предполагает независимые способы реализации дальнейших направлений развития.',
            '3 В целом, конечно, укрепление и развитие внутренней структуры требует анализа укрепления моральных ценностей.',
            '4 Равным образом, семантический разбор внешних противодействий является качественно новой ступенью распределения внутренних резервов и ресурсов.',
            '5 Следует отметить, что курс на социально-ориентированный национальный проект не даёт нам иного выбора, кроме определения форм воздействия.'
        ]
    let [coin, setCoin] = useState(0)
    const [activeText, setActiveText] = useState<string>(text[coin])
    const changeCoin = (arg: string) => {
        if (arg === 'next' && coin < 4) {
            setCoin(coin + 1)
        } else if (arg === 'prev' && coin > 0) {
            setCoin(coin - 1)
        }
        setActiveText(text[coin])
    }

    //эффект печантной машинки
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [activeText],
            typeSpeed: 50,
        });
        return () => {
            typed.destroy();
        };
    }, [activeText]);


    return (
        <div className={s.block}>
            <span className={s.textBlock}>
                <span ref={el}/>
            </span>
            <div>
                <button className={s.btnText} onClick={() => changeCoin('prev')}>назад</button>
                <button className={s.btnText} onClick={() => changeCoin('next')}>дальше</button>
            </div>
        </div>
    );
};

export default TextBlock;