import React from 'react'
import HeroImage from '../../assets/Images/banner-6.a30bc2ce.jpg';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <div className={styles.main}>
        <div className={styles.text}>
            <h1 className={styles.h1}>Insta Markt.</h1>
            <h3 className={styles.h3}>Find your nearest Location.</h3>
            <form action="">
            <input type="text" className={styles.input} placeholder='Eating....'/>
            <button className={`btn btn-outline-danger ${styles.btn}`}>Find</button>
            </form>
           
            <button className={`btn btn-danger ${styles.button}`}>Download Our App.</button>
        </div>
    </div>
  )
}

export default Hero