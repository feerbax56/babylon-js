import React from 'react';
import './App.css';
import Canvas from './BabylonCanvas/CanvasBlock/Canvas';
import TextBlock from "./TextBlock/TextBlock";

function App() {
    return (
        <div className="App">
            {/*<button>start</button>*/}
            <Canvas/>
            <TextBlock/>
        </div>
    );
}

export default App;
