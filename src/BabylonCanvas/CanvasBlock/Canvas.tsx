import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import BasicScene from '../BasicScene'
import s from './Canvas.module.css'

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