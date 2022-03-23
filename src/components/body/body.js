import React from "react";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const Info = (props) => {
    let copy = () => {
        let gradient = `background: ${props.fallback};
        background: -webkit-linear-gradient(to ${props.direction}, ${props.one}, ${props.two});
        background: linear-gradient(to ${props.direction}, ${props.one}, ${props.two};`;
        navigator.clipboard.writeText(gradient);

        let notif = toast.success("Copied!", {
            duration: 5000
        });

        return notif;
    }

    return (
        <div className="code--info">
            <div className="title">
                <h1>
                    {props.one} — {props.two}
                </h1>
            </div>
            <button className="clipboard" onClick = {copy}>
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
    //References
    let heartButton = useRef(null);
    let bookmarkButton = useRef(null);

    //State Aid
        //Heart
        let [heartPressed, setHeartPressed] = useState(false);
        let [heartMessage, setHeartMessage] = useState("Hearted!");
        let [heartEmoji, setHeartEmoji] = useState("❤️");

        //Bookmark
        let [bookmarkPressed, setBookmarkPressed] = useState(false);
        let [bookmarkMessage, setBookmarkMessage] = useState("Bookmarked!");
        let [bookmarkEmoji, setBookmarkEmoji] = useState("📖");

    let hearted = () => {
        if (heartPressed) {
            setHeartMessage("Hearted!");
            setHeartEmoji("❤️");
        } else if (!heartPressed) {
            setHeartMessage("Un-hearted!");
            setHeartEmoji("💔");
        }

        let notif = toast(`${heartMessage}`, {
            icon: `${heartEmoji}`,
        });

        heartButton.current.classList.toggle("heart--checked");
        setHeartPressed(!heartPressed);

        return notif;
    }

    let bookmark = () => {
        if (bookmarkPressed) {
            setBookmarkMessage("Bookmarked!");
            setBookmarkEmoji("📖");
        } else if (!bookmarkPressed) {
            setBookmarkMessage("Un-bookmarked!");
            setBookmarkEmoji("📙");
        }

        let notif = toast(`${bookmarkMessage}`, {
            icon: `${bookmarkEmoji}`,
        });

        bookmarkButton.current.classList.toggle("bookmark--checked");
        setBookmarkPressed(!bookmarkPressed);

        return notif;
    };

    return (
        <div className="code--buttons">
            <div className="button" ref = {heartButton}>
                <button onClick = {hearted}>
                    <i className="fa-solid fa-heart" /> I like it!
                </button>
                <div className="button--hover"></div>
            </div>
            <div className="button embed">
                <button>
                    <i className="fa-solid fa-code" /> Embed
                </button>
                <div className="button--hover"></div>
            </div>
            <div className="button" ref = {bookmarkButton}>
                <button onClick = {bookmark}>
                    <i className="fa-solid fa-bookmark" /> Bookmark
                </button>
                <div className="button--hover"></div>
            </div>
            <div className="button share">
                <button>
                    <i className="fa-solid fa-share" /> Share
                </button>
                <div className="button--hover"></div>
            </div>
        </div>
    );
}

const Code = (props) => {
    let one = props.one;
    let two = props.two;
    let fallback = props.fallback
    let direction = props.direction

    return (
        <div className="code--container">
            <Info one = {one} two = {two} fallback = {fallback} direction = {direction} />
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
            <Toaster />
            <Code one = {props.one} two = {props.two} fallback={props.fallback} direction={props.direction}/>
        </div>
    )

}

const CodeMemo = React.memo(Whole);
export default CodeMemo;