import React from "react";
import CodeMemo from "../snippet/snippet";

const Body = () => {
    return (
        <CodeMemo one="#F6B796" two="#B03B63" fallback="#000" direction="left" />
    )
}

const BodyMemo = React.memo(Body);
export default BodyMemo;