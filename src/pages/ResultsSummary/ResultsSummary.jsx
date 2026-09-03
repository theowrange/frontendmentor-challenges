import styles from './ResultsSummary.module.css';
import results from '../../data/resultsSummary';
import FadeIn from '../../components/FadeIn/FadeIn';

function ResultsSummary() {
  const average = Math.round(
    results.reduce((sum, item) => sum + item.score, 0) / results.length
  );

  return (
    <main className={styles.page}>
      <FadeIn>
        <div className={styles.card}>
          <section className={styles.result}>
            <h1 className={styles.resultTitle}>Your Result</h1>

            <div className={styles.resultScore}>
              <span className={styles.averageScore}>{average}</span>
              <span>of 100</span>
            </div>

            <div className={styles.description}>
              <strong>Great</strong>
              <p>
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </section>

          <section className={styles.summary}>
            <h2>Summary</h2>

            <ul className={styles.summaryList}>
              {results.map((item) => (
                <li
                  key={item.category}
                  className={`${styles.item} ${styles[item.color]}`}>
                  <div className={styles.label}>
                    <img src={item.icon} alt="" />
                    <span>{item.category}</span>
                  </div>

                  <div className={styles.score}>
                    <span className={styles.scoreValue}>{item.score}</span>
                    <span className={styles.totalScore}>/ 100</span>
                  </div>
                </li>
              ))}
            </ul>

            <button type="button">Continue</button>
          </section>
        </div>
      </FadeIn>
    </main>
  );
}

export default ResultsSummary;
