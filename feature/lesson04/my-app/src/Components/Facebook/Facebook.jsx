import styles from './Facebook.module.css';

export const Facebook = ( {name, backgroundImageUrl, postDescription, location, timeText, onClickLike, onClickReply} ) => {

  return (
    <div className={styles.facebook}>
      <div className={styles.user}>
        <img src={backgroundImageUrl} alt={'user'}/>
      </div>
      <div className={styles.info}>
        <div className={styles.post}>
          <h4><a href="#">{name}</a></h4>
          <p>{location}</p>
        </div>
        <p className={styles.postDescription}>{postDescription}</p>
        <div className={styles.likes}>
          <p className={styles.like} onClick={onClickLike}><a href="#">Like</a></p>
          <p className={styles.reply} onClick={onClickReply}><a href="#">Reply</a></p>
          <p className={styles.timeText}>{timeText}</p>
        </div>
      </div>
    </div>
  );
};