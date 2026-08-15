import styles from './QRCard.module.css';

function QRCard({ qrImage, title, description, alt = 'QR code' }) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={qrImage} alt={alt} />

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

export default QRCard;
