import React, { useEffect } from 'react';

const Microfrontend = ( {name,host,history} ) => {

    const init = () => {
        const scriptId = `micro-frontend-script-${name}`;
        
        const renderMicroFrontend = () => {
            console.log(window)
            window[`rendercpo`](`${name}-container`,history);
        }

        if(document.getElementById(scriptId)){
            renderMicroFrontend();
            return;
        }

        fetch(`http://localhost:3001/asset-manifest.json`)
        .then((res)=>res.json())
        .then((manifest)=>{
            const script = document.createElement("script");
            script.id = scriptId;
            script.crossOrigin = "";
            document.head.appendChild(script);
            script.onload = ( result ) => {
                console.log(result);
                console.log(script);
                renderMicroFrontend();
            };
            script.onerror = ( error ) => {
                console.log(error);
            }
            script.src = `http://localhost:3001${manifest.files["main.js"]}`;
        })

        return() => {
            window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`) 
        };
    }

    useEffect( init );

    return <main id={`${name}-container`}/>
}

Microfrontend.defaultProps = {
    document,
    window,
}

export default Microfrontend;