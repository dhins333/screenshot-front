import React, { useEffect,useState } from 'react';
import { withRouter } from 'react-router-dom';

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

    const onCardClick = () => {
        props.history.push(`/games/${props.id}`)
    }

    return(
        <div className='card' onClick = {onCardClick}>
            <div className = 'card-overlay'>
                <div className = 'card-overlay-text'>{props.name}</div>
            </div>
            <img className = 'card-image' width = '258px' height = '315px' src = {props.src} alt = {props} ref = {imageRef} onLoad = {setLoad}></img>
            <div className="spinner" ref= {spinnerRef}>Loading...</div>
        </div>
    )
}

export default withRouter(Card);