import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/UnityLoader.js",
    jsonUrl: "build/build.json"
});

const Header = () => {
return <Unity unityContext={unityContext} />;
};
export default Header;