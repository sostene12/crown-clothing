import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({title,imageUrl,size,linkUrl}) => {
    const navigate = useNavigate();
    return ( 
        <div  className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`) }>
            <div style={{ backgroundImage:`url(${imageUrl})`}} className="background-image" />
            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
     );
}
 
export default MenuItem;