import React from "react";

const Info = (props) => {
    return (
        <div className="code--info">
            <div className="title">
                <h2>
                    {props.one} — {props.two}
                </h2>
            </div>
            <button className="clipboard">
                <i className="fa-solid fa-clipboard"></i>
                <div className="clipboard--hover"></div>
            </button>
        </div>
    );
}

const Section = (props) => {
    let one = props.one;
    let two = props.two;
    let fallback = props.fallback;

    let direction = props.direction;

    let getBrightness = (color) => {
        color = color.replace("#", "");
        var r = parseInt(color.substr(0, 2), 16);
        var g = parseInt(color.substr(2, 2), 16);
        var b = parseInt(color.substr(4, 2), 16);
        var yiq = (r * 299 + g * 587 + b * 114) / 1000;

        return yiq >= 128 ? "black" : "white";
    };

    let stylesColorOne = {
        backgroundColor: `${one}`,
        color: getBrightness(`${one}`),
        borderRradius: "10px"
    }

    let stylesColorTwo = {
        backgroundColor: `${two}`,
        color: getBrightness(`${two}`),
        borderRradius: "10px"
    };

    let stylesColorFallback = {
        backgroundColor: `${fallback}`,
        color: getBrightness(`${fallback}`),
        borderRradius: "10px"
    };

    return (
        <div className = "code--wrapper">
            <div className = "code--section">
                <ol className = "text">
                    <li>
                        <span className = "property">background</span>: <span style={stylesColorFallback}>{fallback}</span>;
                    </li>
                    <li>
                        <span className = "property">background</span>: <span className = "input">-webkit</span><span className = "value">-linear-gradient</span><span className = "media">(</span>to {direction}, <span style={stylesColorOne}>{one}</span>, <span style={stylesColorTwo}>{two}</span><span className = "media">)</span>;
                    </li>
                    <li>
                        <span className = "property">background</span>: <span className = "value">linear-gradient</span><span className = "media">(</span>to {direction}, <span style={stylesColorOne}>{one}</span>, <span style={stylesColorTwo}>{two}</span><span className = "media">)</span>;
                    </li>
                </ol>
            </div>
        </div>
    )
}

const Media = (props) => {
    return (
        <div>hello</div>
    )
}

const Code = (props) => {
    let one = props.one;
    let two = props.two;
    let fallback = props.fallback
    let direction = props.direction

    return (
        <div className="code--container">
            <Info one={one} two={two} />
            <Section one = {one} two = {two} fallback = {fallback} direction = {direction} />
            <Media />
        </div>
    );
}

const Whole = (props) => {
    let wholeStyles = {
        backgroundImage: `linear-gradient(to ${props.direction}, ${props.one}, ${props.two})`,
    }

    return (
        <div className = "whole" style={wholeStyles}>
            <Code one = {props.one} two = {props.two} fallback={props.fallback} direction={props.direction}/>
        </div>
    )

}

const CodeMemo = React.memo(Whole);
export default CodeMemo;