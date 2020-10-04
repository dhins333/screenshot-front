import React, { useEffect,useState } from 'react';

const Card = (props) => {
    
    const imageRef = React.createRef();
    const spinnerRef = React.createRef();
    const [loaded,setLoadState] = useState(false);

    useEffect(() => {
        if (loaded === true)  {
            spinnerRef.current.style.display = 'none';
            imageRef.current.style.display = 'block';
        }
        else{
            spinnerRef.current.style.display = 'block';
            imageRef.current.style.display = 'none';
        }
    })
    
    const setLoad = () => {
        setLoadState(true);
    }

    return(
        <div className='card'>
            <img className = 'card-image' width = '258px' height = '315px' src = {props.src} alt = {props} ref = {imageRef} onLoad = {setLoad}></img>
            <div className="spinner" ref= {spinnerRef}>Loading...</div>
        </div>
    )
}

export default Card;