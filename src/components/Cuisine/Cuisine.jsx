import React from 'react';
import Styles from './Cuisine.module.css';

const Cuisine = ({title, link}) => {
  return (
    <section>
        <div className="col-12">
           <div className={Styles.topNav}>
                <h3 className={Styles.browse}>{title}</h3>
                <a href="" className={Styles.allRestraurant}>{link}</a>
           </div>
        </div>
    </section>
  )
}

export default Cuisine