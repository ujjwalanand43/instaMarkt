import React from 'react';
import Styles from './Download.module.css';
import DownloadImg from '../../assets/Images/847c749fecdee1cd71bb6b06b9a626f5.jpg'

const Download = () => {
  return (
    <div className={`row ${Styles.main}`}>
        <div className={`col-md-12 ${Styles.img}`}>
            <img src={DownloadImg} alt="" className='img-fluid' />
        </div >
        <div className='col-md-12'>
            <button className="btn btn-outline-danger btn-lg btn-block">Download Now</button>
        </div>
    </div>
  )
}

export default Download