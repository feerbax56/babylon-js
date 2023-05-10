import React, {useEffect} from 'react';
import {useRef} from 'react';
import BasicScene from '../BasicScene'
import s from "./Canvas.module.css"

const Canvas: React.FC = () => {
    const babylonCanvas = useRef(null)

    useEffect(() => {
        const canvas = babylonCanvas.current
        if (canvas) {
            new BasicScene(canvas)
        }

    })

    return (
        <>
            <canvas ref={babylonCanvas} className={s.canvas}></canvas>
        </>
    );
};

export default Canvas;