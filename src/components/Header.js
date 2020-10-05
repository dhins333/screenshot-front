import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className = 'header-container'>
            <div className = 'header'>
                <Link className = 'header-title' to='/'>Screenshots</Link>
            </div>
        </div>
    )
}

export default Header;