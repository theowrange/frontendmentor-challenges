import styles from './ProfileCard.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import cardPattern from '../../assets/solutions/profile-card/bg-pattern-card.svg';
import profile from '../../data/profileCard';

function ProfileCard() {
  const { name, age, location, avatar, stats } = profile;

  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <img className={styles.cardPattern} src={cardPattern} alt="" />
          <div className={styles.profile}>
            <div className={styles.avatarWrapper}>
              <img
                src={avatar}
                alt={`${name}'s profile`}
                className={styles.avatar}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.details}>
                <h1 className={styles.name}>
                  {name}
                  <span className={styles.age}>{age}</span>
                </h1>
                <p className={styles.location}>{location}</p>
              </div>

              <hr className={styles.divider} />

              <ul className={styles.stats}>
                {stats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </FadeIn>
    </main>
  );
}

export default ProfileCard;
