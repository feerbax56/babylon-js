import React, {useState} from 'react';
import s from './TextBlock.module.css'
import {loremIpsum} from 'lorem-ipsum';
import ReactTypingEffect from 'react-typing-effect';


const TextBlock = () => {
    const [text, setText] = useState<string>('')


    const getText = () => {
        setText(loremIpsum())
    }

    return (
        <div className={s.block}>
            <ReactTypingEffect text={text}/>
            <button onClick={getText}>старт</button>
        </div>
    );
};

export default TextBlock;