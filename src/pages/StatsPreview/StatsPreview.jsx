import styles from './StatsPreview.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import statsPreview from '../../data/statsPreview';

function StatsPreview() {
  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <div className={styles.content}>
            <header className={styles.header}>
              <h1 className={styles.title}>
                Get <span className={styles.highlight}>insights</span> that help
                your business grow.
              </h1>
              <p>{statsPreview.description}</p>
            </header>

            <ul className={styles.stats}>
              {statsPreview.stats.map(({ value, label }) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <picture className={styles.picture}>
            <source
              media="(min-width: 72rem)"
              srcSet={statsPreview.images.desktop}
            />
            <img
              src={statsPreview.images.mobile}
              alt=""
              className={styles.image}
            />
          </picture>
        </article>
      </FadeIn>
    </main>
  );
}

export default StatsPreview;
