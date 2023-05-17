import React from 'react';
import './App.css';
import Canvas from './BabylonCanvas/CanvasBlock/Canvas';
import TextBlock from './TextBlock/TextBlock';
import BtnBlock from './BtnBlock/BtnBlock';

function App() {
    return (
        <div className="App">
            {/*<BtnBlock/>*/}
            {/*<button>start</button>*/}
            <Canvas/>
            <TextBlock/>
        </div>
    );
}

export default App;
