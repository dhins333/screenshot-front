import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScreenshots } from '../actions/actions';
import Screenshot from './Screenshot';

const ScreenshotsPage = (props) => {

    const screenshots = useSelector((state) => {
        return state.screenshots;
    } )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScreenshots(props.match.params.id));
        return(() => {
            dispatch({type:'set_screenshots',data:[]});
        })
    },[dispatch,props.match.params.id])

    const renderScreenshots = () => {
        return(
            <div className = 'screenshots-container'>
                {screenshots.map((screenshot,index) => {
                    return(
                        <Screenshot url = {screenshot.url} key = {index} />
                    )
                })}
            </div>
        )
    }

    return(
        <div className = 'screenshots-page'>
            {screenshots.length === 0 ? <div className = 'loader'>Loading...</div> : renderScreenshots()}
        </div>
    )
}

export default ScreenshotsPage;