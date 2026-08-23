import styles from './SocialLinks.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import socialLinks from '../../data/socialLinks';

function SocialLinks() {
  const { profile, links } = socialLinks;

  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <img className={styles.avatar} src={profile.avatar} alt="" />
          <div className={styles.profile}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.location}>{profile.location}</p>
          </div>
          <p className={styles.bio}>"{profile.bio}"</p>

          <nav className={styles.links} aria-label="Social links">
            {links.map((link) => (
              <a className={styles.link} href={link.url} key={link.id}>
                {link.name}
              </a>
            ))}
          </nav>
        </article>
      </FadeIn>
    </main>
  );
}

export default SocialLinks;
