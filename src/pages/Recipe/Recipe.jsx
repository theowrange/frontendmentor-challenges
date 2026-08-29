import styles from './Recipe.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import recipe from '../../data/recipe';

function Recipe() {
  const {
    image,
    title,
    description,
    preparationTime,
    ingredients,
    instructions,
    nutrition,
  } = recipe;

  return (
    <main className={styles.page}>
      <FadeIn>
        <article className={styles.card}>
          <img src={image} alt="" className={styles.image} />
          <div className={styles.content}>
            <header className={styles.header}>
              <h1 className={styles.title}>{title}</h1>
              <p>{description}</p>
            </header>

            <section className={styles.preparation}>
              <h2>Preparation time</h2>
              <ul className={styles.bulletList}>
                {preparationTime.map(({ label, value }) => (
                  <li key={label}>
                    <span>
                      <strong>{label}:</strong> {value}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Ingredients</h2>
              <ul className={styles.bulletList}>
                {ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Instructions</h2>
              <ol className={styles.numberList}>
                {instructions.map((instruction) => (
                  <li key={instruction.title}>
                    <strong>{instruction.title}: </strong>
                    {instruction.description}
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Nutrition</h2>
              <p>{nutrition.description}</p>
              <table className={styles.nutritionTable}>
                <tbody>
                  {nutrition.values.map(({ label, value }) => (
                    <tr key={label} className={styles.nutritionRow}>
                      <td className={styles.nutritionLabel}>{label}</td>
                      <td className={styles.nutritionValue}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </article>
      </FadeIn>
    </main>
  );
}

export default Recipe;
