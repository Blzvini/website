import styles from './Projects.module.css';
import { TECH_DESCRIPTIONS } from '../lib/techDescriptions';

export default function Projects({ githubProjects }) {
  if (!githubProjects || githubProjects.length === 0) return null;
  const projects = githubProjects;
  return (
    <section className={styles.projects} id="projetos">
      <div className="container">
        <h2 className="section-title on-dark">Projetos</h2>

        <p className={styles.intro}>
          Uma seleção de projetos que melhor representam minha forma de trabalhar:
          dados ponta a ponta, automação e construção em público.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => {
            const isExternal = project.link && project.link.startsWith('http');
            const hasLink = project.link && project.link !== '#';
            return (
              <article
                key={project.id}
                className={styles.card}
              >
                <div className={styles.cardContent}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{project.title}</h3>
                    {project.stars != null && (
                      <span className={styles.stars} aria-label={`${project.stars} estrelas`}>★ {project.stars}</span>
                    )}
                  </div>
                  <p className={styles.description}>{project.description}</p>

                  <ul className={styles.stack}>
                    {project.stack.map((tech, i) => (
                      <li key={tech} className={styles.stackTagWrapper}>
                        <span
                          className={styles.stackTag}
                          tabIndex="0"
                          aria-describedby={`tip-proj-${project.id}-${i}`}
                        >
                          {tech}
                        </span>
                        {TECH_DESCRIPTIONS[tech] && (
                          <span
                            role="tooltip"
                            id={`tip-proj-${project.id}-${i}`}
                            className={styles.tooltip}
                          >
                            {TECH_DESCRIPTIONS[tech]}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.actions}>
                  {hasLink ? (
                    <a
                      href={project.link}
                      className="btn"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      Ver projeto →
                      {isExternal && <span className="sr-only"> (abre em nova aba)</span>}
                    </a>
                  ) : (
                    <span className={styles.soonTag}>Em breve</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
