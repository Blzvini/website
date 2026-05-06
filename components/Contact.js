import styles from './Contact.module.css';

const contacts = [
  {
    id: 1,
    label: 'GitHub',
    value: 'github.com/Blzvini',
    link: 'https://github.com/Blzvini',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vinicius-marques',
    link: 'https://www.linkedin.com/in/vinicius-marques-6b68b6113/',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.7c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.49-.6-2-1.5-2-.94 0-1.5.64-1.5 2V19h-3V8h3v1.4c.5-.78 1.5-1.4 2.7-1.4 2.1 0 3.3 1.4 3.3 4V19z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'E-mail',
    value: 'lopes.viniciusm99@gmail.com',
    link: 'mailto:lopes.viniciusm99@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className={styles.contact} id="contato">
      <div className="container">
        <h2 className="section-title on-dark">Contato</h2>

        <p className={styles.intro}>
          Aberto a oportunidades como Engenheiro de Dados Jr. — manda mensagem que respondo
          rápido. Vamos conversar sobre dados, pipelines ou só trocar uma ideia.
        </p>

        <ul className={styles.links}>
          {contacts.map((contact) => {
            const isExternal = contact.link.startsWith('http');
            return (
              <li key={contact.id}>
                <a
                  href={contact.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={styles.link}
                >
                  <span className={styles.icon}>{contact.icon}</span>
                  <span className={styles.body}>
                    <span className={styles.label}>{contact.label}</span>
                    <span className={styles.value}>{contact.value}</span>
                  </span>
                  {isExternal && <span className="sr-only"> (abre em nova aba)</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
