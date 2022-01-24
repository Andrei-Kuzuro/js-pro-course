import styles from './Onliner.module.css';

export const Onliner = ( {title, backgroundImageUrl, category, commentCount, onClick} ) => {
  return (
    <div className={styles.onlinerPost} style={{backgroundImage: `url(${backgroundImageUrl})`}} onClick={onClick}>
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <p className={styles.commentCount}>{commentCount}</p>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};