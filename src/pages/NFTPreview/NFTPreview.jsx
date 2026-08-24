import styles from './NFTPreview.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import { differenceInCalendarDays } from 'date-fns';
import ethereumIcon from '../../assets/solutions/nft-preview/icon-ethereum.svg';
import clockIcon from '../../assets/solutions/nft-preview/icon-clock.svg';
import viewIcon from '../../assets/solutions/nft-preview/icon-view.svg';
import nftPreview from '../../data/nftPreview';

function NFTPreview() {
  const { nft, price, expiresAt, creator } = nftPreview;

  const daysRemaining = differenceInCalendarDays(
    new Date(expiresAt),
    new Date('2026-08-24T23:59:59')
  );
  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <a href={nft.url} className={styles.imageLink}>
            <img className={styles.image} src={nft.image} alt="" />
            <span className={styles.imageOverlay}>
              <img src={viewIcon} alt="" />
            </span>
          </a>

          <div className={styles.content}>
            <h1 className={styles.title}>
              <a href={nft.url}>{nft.name}</a>
            </h1>
            <p className={styles.description}>{nft.description}</p>
          </div>

          <div className={styles.details}>
            <span className={styles.price}>
              <img src={ethereumIcon} alt="" />
              {price.amount} {price.currency}
            </span>

            <span className={styles.time}>
              <img src={clockIcon} alt="" />
              {daysRemaining} {daysRemaining > 1 ? 'days' : 'day'} left
            </span>
          </div>

          <hr className={styles.divider} />

          <div className={styles.creator}>
            <img className={styles.avatar} src={creator.avatar} alt="" />
            <p>
              Creation of
              <a className={styles.name} href="#">
                {creator.name}
              </a>
            </p>
          </div>
        </article>
      </FadeIn>
    </main>
  );
}

export default NFTPreview;
