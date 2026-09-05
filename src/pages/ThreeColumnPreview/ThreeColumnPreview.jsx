import styles from './ThreeColumnPreview.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import cars from '../../data/threeColumnPreview';
import VisuallyHidden from '../../components/VisuallyHidden/VisuallyHidden';

function CarCard({ type, title, description, icon }) {
  return (
    <article className={`${styles.card} ${styles[type]}`}>
      <div className={styles.container}>
        <img src={icon} alt="" />
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <a
            className={styles.button}
            href={`/${type}`}
            aria-label={`Learn more about ${title}`}>
            Learn More
          </a>
        </div>
      </div>
    </article>
  );
}

function ThreeColumnPreview() {
  return (
    <main className={styles.page}>
      <VisuallyHidden>
        <h1>Car rental options</h1>
      </VisuallyHidden>
      <FadeIn>
        <div className={styles.cards}>
          {cars.map((car) => (
            <CarCard key={car.type} {...car} />
          ))}
        </div>
      </FadeIn>
    </main>
  );
}

export default ThreeColumnPreview;
