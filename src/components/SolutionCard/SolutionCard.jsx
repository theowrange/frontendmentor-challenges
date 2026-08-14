import { Link } from 'react-router';
import styles from './SolutionCard.module.css';

function SolutionCard({ solution }) {
  return (
    <article className={styles.card}>
      <Link to={solution.path} className={styles.link}>
        <img src={solution.thumbnail} alt="" className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.title}>{solution.title}</h2>
        </div>
      </Link>
    </article>
  );
}

export default SolutionCard;
