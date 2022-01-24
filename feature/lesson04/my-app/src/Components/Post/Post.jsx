import styles from './Post.module.css';

export const Post = ( {title, subtitle, author} ) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className={styles.author}>
        <p>Author: <a href="#">{author}</a></p>
      </div>
    </div>
  );
};