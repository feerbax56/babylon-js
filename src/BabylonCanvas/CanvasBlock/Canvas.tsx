import React, {useEffect, useRef, useState} from 'react';
import BasicScene from '../BasicScene'
import s from './Canvas.module.css'
import TextBlock from "../../TextBlock/TextBlock";


const Canvas: React.FC = () => {
    const babylonCanvas = useRef(null)
    const [basicScene] = useState<BasicScene>(new BasicScene())


    useEffect(() => {
        const canvas = babylonCanvas.current
        basicScene.start(canvas!)
    })

    return (
        <>
            <canvas ref={babylonCanvas} className={s.canvas}></canvas>
        </>
    );
};

export default Canvas;