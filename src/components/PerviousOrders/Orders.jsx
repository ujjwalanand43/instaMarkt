import React from 'react';
import Styles from './Orders.module.css';

const Orders = ({image, title , text}) => {
  return (
    <>
    <div className={`col-lg-3 col-md-6 col-sm-6 mt-2 ${Styles.col}`}>
        <div className={`card ${Styles.card}`}  style={{width: '16rem'}}>
     
    <img className={`card-img-top`} src={image} alt="Card image cap"/>
    <div className={`card-body`}>
      <h5 className={`card-title`}>{title}</h5>
      <p className={`card-text`}>{text}.</p>
      <a href="#" className={`btn btn-outline-danger btn-lg btn-block ${Styles.btnBlock}`}>Track Order</a>
    </div>
  </div>
  </div>
    </>
  )
}

export default Orders