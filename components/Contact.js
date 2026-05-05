export default function Contact() {
  const contacts = [
    { id: 1, label: 'Github', link: 'https://github.com/Blzvini' },
    { id: 2, label: 'LinkedIn', link: 'https://www.linkedin.com/in/vinicius-marques-6b68b6113/' },
    { id: 3, label: 'Email', link: 'mailto:lopes.viniciusm99@gmail.com' }
  ];

  return (
    <section className="contact" id="contato">
      <div className="container">
        <h2 className="section-title">Contato</h2>

        <div className="contact-container">
          <div className="contact-links">
            {contacts.map(contact => (
              <a
                key={contact.id}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="btn btn-secondary"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}