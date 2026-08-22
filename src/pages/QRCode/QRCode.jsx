import styles from './QRCode.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import qrCode from '../../data/qrCode';

function QRCode() {
  const { image, imageAlt, title, description } = qrCode;
  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <img className={styles.image} src={image} alt={imageAlt} />

          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        </article>
      </FadeIn>
    </main>
  );
}

export default QRCode;
