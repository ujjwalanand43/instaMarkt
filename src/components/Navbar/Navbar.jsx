import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../assets/Images/Insta Markt_Logo_FF-01.jpg';
import styles from './Navbar.module.css';
import Image from '../../assets/Images/download.png'
const Navbar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img className={styles.iconWidth} src={Icon} alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link aria-current="page" className={`nav-link active ${styles.link}`} style={{color: 'red'}} to='/home'>Home</Link>
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li class="nav-item">
        <Link aria-current="page" className='nav-link active' style={{color: 'red'}} to='/privacy-policy'>Privacy Policy</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/terms-and-condition' style={{color: 'red'}}>Terms And Condtion</Link>
          {/* <a class="nav-link">Terms And Condition</a> */}
        </li>
        <li className={`nav-item dropdown ${styles.image}`}>
            <img src={Image} alt="" />
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hi, Ujjwal
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
   
   </>
  )
}

export default Navbar