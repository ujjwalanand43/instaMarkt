import React from 'react'
import Styles from './Footer.module.css'
const Footer = () => {
  return (
    <div class={`row ${Styles.row}`}>
    <footer class={`col-md-6 ${Styles.footer}`}>
        <p class={Styles.copyright}>Copyright © 2023 <a href="#" class={Styles.copyrighta}>InstaMarkt</a>.</p>
    </footer>               
</div>
  )
}

export default Footer