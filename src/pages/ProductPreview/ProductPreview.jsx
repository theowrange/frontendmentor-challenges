import styles from './ProductPreview.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import cartIcon from '../../assets/solutions/product-preview/icon-cart.svg';
import product from '../../data/productPreview';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: product.price.currency,
});

function ProductPreview() {
  return (
    <main className={styles.page}>
      <FadeIn>
        <div className={styles.card}>
          <picture className={styles.productImage}>
            <source
              media="(min-width: 40rem)"
              srcSet={product.images.desktop}
            />
            <img
              src={product.images.mobile}
              alt={`${product.name} perfume bottle`}
            />
          </picture>

          <section className={styles.content}>
            <header className={styles.header}>
              <span className={styles.category}>{product.category}</span>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.description}>{product.description}</p>
            </header>

            <div className={styles.price}>
              <strong className={styles.currentPrice}>
                {formatter.format(product.price.current)}
              </strong>
              <del className={styles.originalPrice}>
                {formatter.format(product.price.original)}
              </del>
            </div>

            <button className={styles.addToCart}>
              <img src={cartIcon} alt="" />
              Add to Cart
            </button>
          </section>
        </div>
      </FadeIn>
    </main>
  );
}

export default ProductPreview;
