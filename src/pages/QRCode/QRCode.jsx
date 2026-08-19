import QRImage from '../../assets/solutions/qr-code/image-qr-code.png';
import styles from './QRCode.module.css';

function QRCode() {
  return (
    <main className={styles.page}>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={QRImage}
          alt="QR code linking to Frontend Mentor"
        />

        <div className={styles.content}>
          <h1 className={styles.title}>
            Improve your front-end skills by building projects
          </h1>
          <p className={styles.description}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level.
          </p>
        </div>
      </article>
    </main>
  );
}

export default QRCode;
