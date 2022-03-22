import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//Components
import CodeMemo from "./components/body/body";

//Styles
import "./general.css";

ReactDOM.render(
    <React.StrictMode>
        <CodeMemo one="#F6B796" two="#B03B63" fallback="#000" direction="right" />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
