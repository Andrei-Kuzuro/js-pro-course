import { Component } from 'react';
import styles from './Memories.module.css';

export class Memories extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.memories}>
          <img
            src={
              'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg'
            }
          />
        </div>
        <div className={styles.memories}>
          <img
            src={
              'https://nypost.com/wp-content/uploads/sites/2/2021/12/cat-mad_13.jpg?quality=80&strip=all'
            }
          />
        </div>
        <div className={styles.memories}>
          <img
            src={
              'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg'
            }
          />
        </div>
        <div className={styles.memories}>
          <img
            src={
              'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg'
            }
          />
        </div>
      </div>
    );
  }
}
