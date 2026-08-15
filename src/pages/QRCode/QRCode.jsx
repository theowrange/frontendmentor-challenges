import QRCard from '../../components/QRCard/QRCard';
import QRCodeImg from '../../assets/image-qr-code.png';
import styles from './QRCode.module.css';

function QRCode() {
  return (
    <main className={styles.page}>
      <QRCard
        qrImage={QRCodeImg}
        title="Improve your front-end skills by building projects"
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level."
        alt="QR code linking to Frontend Mentor"
      />
    </main>
  );
}

export default QRCode;
