import { solutions } from '../../data/solutions';
import SolutionCard from '../../components/SolutionCard/SolutionCard';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.page}>
      <h1>Frontend Mentor Challenges</h1>

      <div className={styles.grid}>
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </main>
  );
}

export default Home;
