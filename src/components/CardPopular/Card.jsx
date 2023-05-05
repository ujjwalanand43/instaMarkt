import React from 'react'

import Styles from './Card.module.css';
import {AiFillStar} from 'react-icons/ai';
import Leaf from '../../assets/Images/leaf.svg';
import Chilli from '../../assets/Images/chili.svg';
import Chef from '../../assets/Images/chef.svg';
import Egg from '../../assets/Images/protein.svg';
import Lemon from '../../assets/Images/lemon.svg'
const Card = ({title, image, area }) => {
  return (
    <div className={`col-lg-4 col-md-6 col-sm-6 ${Styles.mainCard}`}>
    <div className={`card mt-2  ${Styles.card}`} style={{width: "16rem"}}>
  <img className="card-img-top" src={image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className={`card-title ${Styles.textLightBlack}`}>{title}</h5>
    <p className={`card-text ${Styles.textLightWhite}`}>{area}</p>
  </div>

  <div className={`card-body ${Styles.cardBody}`}>
    <div className={Styles.leftCardBody}>
      <span className={Styles.textLightWhite}>
      30-40 min

      </span>
      <span className={Styles.textLightBlack}>
      $10 min
      </span>
    </div>
     <div className={Styles.rightCardBody}>
        <span>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </span>
        <span className={Styles.textLightWhite}>
        4225 ratings
        </span>
    </div>
  </div>
  <div className={`card-body ${Styles.cardFooter}`}>
    <img src={Leaf} alt="" />
    <img src={Chilli} alt="" />
    <img src={Chef} alt="" />
    <img src={Egg} alt="" />
    <img src={Lemon} alt="" />

  </div>
</div>
</div>
  )
}

export default Card