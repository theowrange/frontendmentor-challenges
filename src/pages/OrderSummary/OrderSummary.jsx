import styles from './OrderSummary.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import orderSummary from '../../data/orderSummary';

function OrderSummary() {
  const { heroImage, musicIcon, title, description, plan } = orderSummary;

  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <img className={styles.hero} src={heroImage} alt="" />
          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
              </header>
              <div className={styles.plan}>
                <div className={styles.planDetailsWrapper}>
                  <img className={styles.musicIcon} src={musicIcon} alt="" />
                  <div className={styles.planDetails}>
                    <strong className={styles.planName}>{plan.name}</strong>
                    <span className={styles.price}>{plan.price}</span>
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
