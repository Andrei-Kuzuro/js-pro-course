import { Component } from 'react';
import styles from './Header.module.css';
import HeaderLogo from './icons/headerLogo.JPG';

export class Header extends Component {
  render() {
    const { name, surname } = this.props;
    const onClick = () => {
      alert('Button pressed');
    };
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.headerLogo}>
              <img src={HeaderLogo} alt={'headerLogo'} />
            </div>
            <p>
              {name} {surname}
            </p>
          </div>
          <div className={styles.followers}>
            <div className={styles.followersCount}>
              <p>25</p>
              <p>Публткации</p>
            </div>
            <div className={styles.followersCount}>
              <p>151</p>
              <p>Подптсчики</p>
            </div>
            <div className={styles.followersCount}>
              <p>277</p>
              <p>Подписки</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            tempore, velit.
          </p>
          <p>Lorem ipsum dolor.</p>
          <p>
            Followed by <b>User</b>
          </p>
        </div>

        <div className={styles.button}>
          <button onClick={onClick}>Редактировать профиль</button>
        </div>
      </div>
    );
  }
}
