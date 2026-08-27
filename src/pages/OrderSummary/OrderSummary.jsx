import styles from './OrderSummary.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import orderSummary from '../../data/orderSummary';

function OrderSummary() {
  const { heroImage, musicIcon, title, description, plan } = orderSummary;

  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <img src={heroImage} alt="" />
          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <p>{description}</p>
              </header>
              <div className={styles.plan}>
                <div className={styles.planInfo}>
                  <img className={styles.musicIcon} src={musicIcon} alt="" />
                  <div className={styles.planText}>
                    <strong className={styles.planName}>{plan.name}</strong>
                    <span>{plan.price}</span>
                  </div>
                </div>
                <a href="#change-plan" className={styles.changeLink}>
                  Change
                </a>
              </div>
            </div>
            <div className={styles.actions}>
              <a href="#payment" className={styles.paymentButton}>
                Proceed to Payment
              </a>
              <a href="#cancel" className={styles.cancelLink}>
                Cancel Order
              </a>
            </div>
          </div>
        </article>
      </FadeIn>
    </main>
  );
}

export default OrderSummary;
