import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className = "footer--info"><h3>Built with ❤️ & 🌮 by <a href = "https://emilionajera.site" target = "_blank" rel = "noopener noreferrer">CodeWithEmil</a></h3></div>
        </div>
    );
}

const FooterMemo = React.memo(Footer);
export default FooterMemo;