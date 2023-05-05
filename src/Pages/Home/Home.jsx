import React from 'react'
import Hero from '../../components/Hero/Hero';
import Styles from './Home.module.css';
import Cuisine from '../../components/Cuisine/Cuisine';
import SwiperCuisine from '../../components/SwiperCuisine/SwiperCuisine';
import Orders from '../../components/PerviousOrders/Orders';
import OrderImage1 from '../../assets/Images/order-1.3c938fb8.jpg';
import OrderImage2 from '../../assets/Images/order-2.93954f2e.jpg';
import OrderImage3 from '../../assets/Images/order-3.84c1dc96.jpg';
import OrderImage4 from '../../assets/Images/order-4.c6436376.jpg';
import Popular from '../../components/PopularNearYou/Popular';
import Banner from '../../components/Smallbanner/Banner';
import SecondPopular from '../../components/SecondPopular/SecondPopular';
import ThirdPopular from '../../components/ThirdPopular/ThirdPopular';
import Download from '../../components/DownloadOurApp/Download';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <>
      <Hero/>
      <div className={Styles.centerDiv}>
      <Cuisine title="Browse by cuisine" link="See all restaurant"/>
      <SwiperCuisine/>
      <hr style={{marginTop:'2rem'}}/>
      <Cuisine title="Your previous orders" link="See all past orders"/>
 
      <div className={'row'}>
      <Orders  image={OrderImage1} title="Chilli Chicken Pizza" text="Big Bites, Brooklyn"/>
      <Orders   image={OrderImage2} title="Hakka Noodles" text="Flavor Town, Brooklyn"/>
      <Orders   image={OrderImage3} title="Vegan Burger" text="Great Burger, Brooklyn"/>
      <Orders  image={OrderImage4} title="Sticky Date Cake" text="Smile N’ Delight, Brooklyn"/>
      </div>
     
      <div className={Styles.populars}>
      <Cuisine  title="Explore our collections"/>
      <div className={Styles.insidePopulars}>

     
         <Popular/>
        <Banner/>
        <SecondPopular/>
        <Banner/>
        <ThirdPopular/>
        </div>
        </div>

        {/* <Download/> */}
      </div>
      <Footer/>
    </>


  )
}

export default Home