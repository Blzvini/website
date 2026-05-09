import styles from './Skills.module.css';
import { TECH_DESCRIPTIONS } from '../lib/techDescriptions';

const skillsByType = [
  {
    type: 'Linguagens',
    icon: '⌨',
    primary: ['Python', 'SQL'],
    secondary: ['JavaScript', 'C#', 'HTML', 'CSS'],
  },
  {
    type: 'Dados & Cloud',
    icon: '☁',
    primary: ['PySpark', 'Microsoft Fabric', 'Data Factory'],
    secondary: ['Azure SQL', 'MSSQL', 'Azure Data Lake', 'ETL'],
  },
  {
    type: 'BI & Analytics',
    icon: '◉',
    primary: ['Power BI', 'DAX'],
    secondary: ['Power Query', 'Power Platform', 'Excel'],
  },
  {
    type: 'Power Platform',
    icon: '⚡',
    primary: ['Power Apps', 'Power Automate'],
    secondary: ['SharePoint', 'Make', 'APIs REST'],
  },
  {
    type: 'Ferramentas',
    icon: '⚙',
    primary: ['Git', 'Azure DevOps'],
    secondary: ['Postman', 'Jira', 'Gherkin', 'Scrum'],
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
            <article key={category.type} className={styles.category}>
              <header className={styles.categoryHeader}>
                <span className={styles.categoryIcon} aria-hidden="true">{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.type}</h3>
              </header>

              <div className={styles.skillGroup}>
                <span className={styles.groupLabel}>Principais</span>
                <ul className={styles.list}>
                  {category.primary.map((item, i) => (
                    <li key={item} className={styles.stackTagWrapper}>
                      <span
                        className={styles.itemPrimary}
                        tabIndex="0"
                        aria-describedby={`tip-skill-${index}-p-${i}`}
                      >
                        {item}
                      </span>
                      {TECH_DESCRIPTIONS[item] && (
                        <span
                          role="tooltip"
                          id={`tip-skill-${index}-p-${i}`}
                          className={styles.tooltip}
                        >
                          {TECH_DESCRIPTIONS[item]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {category.secondary.length > 0 && (
                <div className={styles.skillGroup}>
                  <span className={styles.groupLabel}>Complementares</span>
                  <ul className={styles.list}>
                    {category.secondary.map((item, i) => (
                      <li key={item} className={styles.stackTagWrapper}>
                        <span
                          className={styles.itemSecondary}
                          tabIndex="0"
                          aria-describedby={`tip-skill-${index}-s-${i}`}
                        >
                          {item}
                        </span>
                        {TECH_DESCRIPTIONS[item] && (
                          <span
                            role="tooltip"
                            id={`tip-skill-${index}-s-${i}`}
                            className={styles.tooltip}
                          >
                            {TECH_DESCRIPTIONS[item]}
                          </span>
                        )}
                      </li>
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
