import { Component } from 'react';
import styles from './Footer.module.css'
import heart from './icons/heart.svg'
import home from './icons/home.svg'
import search from './icons/search.svg'
import add from './icons/add.svg'
import user from './icons/user.svg'


export class Footer extends Component {
  render () {
    return (
      <div className={styles.container}>
      <div className={styles.footer}>
        <img height={'48px'} src={home}/>
        <img height={'48px'} src={search}/>
        <img height={'48px'} src={add}/>
        <img height={'48px'} src={heart}/>
        <img height={'48px'} src={user}/>

      </div>
      </div>
    )
  }
}