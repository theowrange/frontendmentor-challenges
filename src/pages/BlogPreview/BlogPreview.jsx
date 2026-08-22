import styles from './BlogPreview.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import format from 'date-fns/format';
import blogPreview from '../../data/blogPreview';

function BlogPreview() {
  const { category, published, title, description, author, image } =
    blogPreview;

  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <div className={styles.blogImageWrapper}>
            <img className={styles.blogImage} src={image} alt="" />
          </div>
          <div className={styles.content}>
            <p className={styles.category}>{category}</p>
            <time className={styles.publishDate} dateTime={published}>
              {format(new Date(published), "'Published' dd MMMM yyyy")}
            </time>
            <h1 className={styles.title}>
              <a href="#">{title}</a>
            </h1>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.author}>
            <img className={styles.authorImage} src={author.image} alt="" />
            <p className={styles.authorName}>{author.name}</p>
          </div>
        </article>
      </FadeIn>
    </main>
  );
}

export default BlogPreview;
