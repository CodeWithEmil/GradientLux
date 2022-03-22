import React from "react";

const Section = (props) => {
    let one = props.one;
    let two = props.two;
    let three = props.three;

    let stylesColorOne = {
        backgroundColor: `${three}`
    }


    let getBrightness = (color) => {
        color = color.replace("#", "");
        var r = parseInt(color.substr(0, 2), 16);
        var g = parseInt(color.substr(2, 2), 16);
        var b = parseInt(color.substr(4, 2), 16);
        var yiq = (r * 299 + g * 587 + b * 114) / 1000;

        return yiq >= 128 ? "black" : "white";
    };

    return (
        <div className = "code--section">
            <ol className = "text">
                <li><span className = "property">background</span>: <span style={{backgroundColor: `${three}`}}>{three}</span>;</li>
                <li><span className = "property">background</span>: <span className = "input">-webkit</span><span className = "value">-linear-gradient</span><span className = "media">(</span>to left, <span style={{backgroundColor: `${one}`}}>{one}</span>, <span style={{backgroundColor: `${two}`}}>{two}</span><span className = "media">)</span>;</li>
                <li><span className = "property">background</span>: <span className = "value">linear-gradient</span><span className = "media">(</span>to left, <span style={{backgroundColor: `${one}`}}>{one}</span>, <span style={{backgroundColor: `${two}`}}>{two}</span><span className = "media">)</span>;</li>
            </ol>
        </div>
    )
}

const Code = (props) => {
    let one = props.one;
    let two = props.two;
    let three = props.three

    return (
        <div className="code--container">
            <div className = "title">{one} — {two}</div>
            <Section one = {one} two = {two} three = {three} />
        </div>
    );
}

const CodeMemo = React.memo(Code);
export default CodeMemo;