import React from "react";
import HeaderMemo from "../header/header";
import CodeMemo from "../snippet/snippet";

const Body = () => {
    return (
        <>
            <HeaderMemo />
            <CodeMemo one="#F6B796" two="#B03B63" fallback="#000" direction="left" />
        </>
    )
    //<CodeMemo one="#6CD4FF" two="#8B80F9" fallback="#000" direction="right" />
}

const BodyMemo = React.memo(Body);
export default BodyMemo;