import React from 'react';
import Styles from './ThirdPopular.module.css'
import ShopImg1 from '../../assets/Images/shop-23.jpg';
import ShopImg2 from '../../assets/Images/shop-2.jpg';
import ShopImg3 from '../../assets/Images/shop-3.jpg';
import ShopImg4 from '../../assets/Images/shop-4.jpg';
import ShopImg5 from '../../assets/Images/shop-5.jpg';
import ShopImg6 from '../../assets/Images/shop-6.jpg';

import Card from '../CardPopular/Card';
const ThirdPopular = () => {
    const cardTop = {
        marginTop: '1rem'
      }
      return (
        <section className={Styles.mainExplore}>
           
            <div className={`row`}>
           
            <div className={`col-lg-3 col-md-4 mt-2 ${Styles.sidebar}`}>
        <div className={Styles.header}>
            <button className={`btn ${Styles.btn1} ${Styles.commonBtn}`}>Most popular near you</button>
        </div>
        <div className={Styles.fotter}>
         <button className={`btn btn-danger ${Styles.commonBtn}`}>See all</button>
        </div>
 
     
    </div>
         
            <div className={`col-lg-9 col-md-8 ${Styles.mainCards}`}>
              <div className="row">
            <Card title="Great Burger" area="American, Fast Food" image={ShopImg1}/>
              <Card title="Flavor Town" area="Breakfast, Lunch & Dinner" image={ShopImg2}/>
              <Card title="Big Bites" area="Pizzas, Fast Food" image={ShopImg3}/>
        
              <Card  title="Smile N’ Delight" area="Desserts, Beverages" image={ShopImg4}/>
              <Card title="Lil Johnny’s" area="Continental & Mexican" image={ShopImg5}/>
              <Card title="Choice Foods" area="Indian,Chinese,Tandoor" image={ShopImg6}/>
            </div>
            </div>
            
            </div>
        </section>
      )
}

export default ThirdPopular