import React,{ useEffect, useState } from 'react';

const Screenshot = (props) => {

    const [loaded,setLoaded] = useState(false);
    const imageRef = React.createRef();
    const spinnerRef = React.createRef();

    useEffect(() => {
        if(loaded === true){
            spinnerRef.current.style.display = 'none';
            imageRef.current.style.display = 'block';
        }
    })

    const setLoadedState = () => {
        setLoaded(true);
    }

    const onScreenshotClick = () => {
        window.open(props.url);
    }

    return(
        <div className='screenshot' onClick = {onScreenshotClick}>
            <div className="spinner" ref = {spinnerRef} >Loading...</div>
            <img src = {`${props.url}?w=1280&h=720`} ref = {imageRef} alt = 'screenshot' className='screenshot-image' onLoad = {setLoadedState}></img>
        </div>
    )
}

export default Screenshot;