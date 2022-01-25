import { Component } from 'react';
import styles from './Body.module.css'
import grid from './icons/grid.svg'
import play from './icons/play.svg'
import userMark from './icons/usermark.svg'

export class Body extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.icons}>
          <img height={'48px'} src={grid}/>
          <img height={'48px'} src={play}/>
          <img height={'48px'} src={userMark}/>
        </div>
        <div className={styles.photo}>

          <img src={'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg'}/>
          <img src={'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg'}/>
          <img src={'https://www.telegraph.co.uk/content/dam/news/2021/07/27/TELEMMGLPICT000265840617_trans_NvBQzQNjv4BqN8SpgT_1U1dhQgFeh6VyTjlaTMTxUhlzF8Rkw038U-A.jpeg?imwidth=680'}/>
          <img src={'https://cdn.britannica.com/q:60/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg'}/>
          <img src={'https://d2zp5xs5cp8zlg.cloudfront.net/image-31454-800.jpg'}/>
          <img src={'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg'}/>
          <img src={'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg'}/>
          <img src={'https://www.telegraph.co.uk/content/dam/news/2021/07/27/TELEMMGLPICT000265840617_trans_NvBQzQNjv4BqN8SpgT_1U1dhQgFeh6VyTjlaTMTxUhlzF8Rkw038U-A.jpeg?imwidth=680'}/>
          <img src={'https://cdn.britannica.com/q:60/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg'}/>
          <img src={'https://d2zp5xs5cp8zlg.cloudfront.net/image-31454-800.jpg'}/>
          <img src={'./assets/image/cat.png'}/>

        </div>
      </div>
    )
  }
}