import styles from './Skills.module.css';

const skillsByType = [
  {
    type: 'Linguagens',
    icon: '⌨',
    primary: ['Python', 'SQL'],
    secondary: ['JavaScript', 'C#'],
  },
  {
    type: 'Dados & Cloud',
    icon: '☁',
    primary: ['PySpark', 'Microsoft Fabric', 'Azure SQL'],
    secondary: ['Azure Data Lake', 'ETL'],
  },
  {
    type: 'BI & Analytics',
    icon: '◉',
    primary: ['Power BI', 'DAX'],
    secondary: ['Power Query', 'Power Platform'],
  },
  {
    type: 'Desenvolvimento',
    icon: '◇',
    primary: ['Next.js'],
    secondary: ['Angular', 'APIs REST'],
  },
  {
    type: 'Ferramentas',
    icon: '⚙',
    primary: ['Git', 'Azure DevOps'],
    secondary: ['Power Apps', 'Power Automate', 'Gherkin', 'Scrum'],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="habilidades">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <p className={styles.intro}>
          Stack que uso no dia a dia. <strong>Em destaque</strong> as ferramentas que aplico
          com mais profundidade; abaixo, as que complementam o ecossistema.
        </p>

        <div className={styles.grid}>
          {skillsByType.map((category, index) => (
            <article key={index} className={styles.category}>
              <header className={styles.categoryHeader}>
                <span className={styles.categoryIcon} aria-hidden="true">{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.type}</h3>
              </header>

              <div className={styles.skillGroup}>
                <span className={styles.groupLabel}>Principais</span>
                <ul className={styles.list}>
                  {category.primary.map((item, i) => (
                    <li key={i} className={styles.itemPrimary}>{item}</li>
                  ))}
                </ul>
              </div>

              {category.secondary.length > 0 && (
                <div className={styles.skillGroup}>
                  <span className={styles.groupLabel}>Complementares</span>
                  <ul className={styles.list}>
                    {category.secondary.map((item, i) => (
                      <li key={i} className={styles.itemSecondary}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
