import React from "react";

const Header = () => {

    //Variables
    let Logo = require("../../logo.png");

    //JSX
    return (
        <div className = "header">
            <div className = "header--info">
                <img src={Logo} alt="logo" />
                <h1>Gradient<span>Lux</span></h1>
            </div>
        </div>
    )
}

const HeaderMemo = React.memo(Header);
export default HeaderMemo;