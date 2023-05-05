import React from 'react';
import Styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className='row'>
        <div className={`col-12 ${Styles.bigBanner}`}>
            <button className="btn btn-danger">Download Our App</button>
        </div>
    </div>
  )
}

export default Banner