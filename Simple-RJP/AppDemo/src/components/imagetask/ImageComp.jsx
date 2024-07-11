import "./ImageComp.css";
import { useState } from "react";

function ImageComp(){
    var [title, setTitle] = useState("React");
    var [url, setUrl] =useState("https://www.patterns.dev/img/reactjs/react-logo@3x.svg");

    const changeToReact = () => {
        setUrl("https://www.patterns.dev/img/reactjs/react-logo@3x.svg");
        setTitle("React");

    };
    const changeToAngular = () => {
        setUrl("https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png");
        setTitle("Angular");
    };

    return(
        <div id="ImageComp">
            <h1 style={{color :"brown"}}>{title}</h1>
            <img src={url} width="500" height="300" />
            <br/>
            <br/>
            <button onClick={changeToReact}>React</button>
            <button onClick={changeToAngular}>Angular</button>
        </div>
    );
}

export default ImageComp;