import styles from './QRCard.module.css';
import qrCode from '../../assets/image-qr-code.png';

function QRCard() {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={qrCode}
        alt="QR code linking to Frontend Mentor"
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles.description}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level.
        </p>
      </div>
    </article>
  );
}

export default QRCard;
