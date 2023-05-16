import React, {useState} from 'react';
import s from './TextBlock.module.css'
import Typed from 'typed.js';

const TextBlock = () => {

    const text: string[] =
        [
            '1 Кстати, некоторые особенности внутренней политики обнародованы. Лишь представители современных социальных резервов представлены в исключительно положительном свете.',
            '2 Безусловно, современная методология разработки предполагает независимые способы реализации дальнейших направлений развития. Приятно, граждане, наблюдать, как многие известные личности объявлены нарушающими общечеловеческие нормы этики и морали.',
            '3 В целом, конечно, укрепление и развитие внутренней структуры требует анализа укрепления моральных ценностей. И нет сомнений, что реплицированные с зарубежных источников, современные исследования и по сей день остаются уделом либералов, которые жаждут быть объективно рассмотрены соответствующими инстанциями.',
            '4 Равным образом, семантический разбор внешних противодействий является качественно новой ступенью распределения внутренних резервов и ресурсов.',
            '5 Следует отметить, что курс на социально-ориентированный национальный проект не даёт нам иного выбора, кроме определения форм воздействия.'
        ]
    let coin = 0

    // const el = React.useRef(null);
    const [activeText, setActiveText] = useState<string>(text[coin])

    const nextPage = () => {
            setActiveText(text[(coin + 1)])
            coin++
            console.log(coin)
    }
    const previousPage = () => {
            setActiveText(text[(coin - 1)])
            coin--
            console.log(coin)
    }

    // React.useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings: [activeText],
    //         typeSpeed: 50,
    //     });
    //     return () => {
    //         // Destroy Typed instance during cleanup to stop animation
    //         typed.destroy();
    //     };
    // }, text);


    return (
        <div className={s.block}>
            <span className={s.textBlock}>
                {/*<span ref={el}/>*/}
                <div>
                    {activeText}
                </div>

            </span>
            <div>
                <button className={s.btnText} onClick={previousPage} disabled={coin === 0}>назад</button>
                <button className={s.btnText} onClick={nextPage} disabled={coin === 4}>дальше</button>
            </div>
        </div>
    );
};

export default TextBlock;