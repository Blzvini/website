export default function Contact() {
  const contacts = [
    {
      id: 1,
      label: 'Email',
      value: 'lopes.viniciusm99@gmail.com',
      link: 'mailto:lopes.viniciusm99@gmail.com',
      icon: '✉'
    },
    {
      id: 2,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vinicius-marques',
      link: 'https://linkedin.com/in/vinicius-marques',
      icon: '💼'
    },
    {
      id: 3,
      label: 'Telefone',
      value: '+55 11 95173-1875',
      link: 'tel:+5511951731875',
      icon: '📞'
    },
    {
      id: 4,
      label: 'Localização',
      value: 'São Paulo – SP',
      link: '#',
      icon: '📍'
    }
  ];

  return (
    <section className="contact" id="contato">
      <div className="container">
        <span className="section-eyebrow">// contato</span>
        <h2 className="section-title">Contato</h2>

        <div className="contact-container">
          <p className="contact-intro">
            Estou aberto a oportunidades e conversas sobre projetos de dados, arquitetura de soluções e inovação em cloud. Se quiser falar sobre dados, natureza ou sobre a estética do seu próximo projeto, entre em contato.
          </p>
          
          <div className="contact-links">
            {contacts.map(contact => (
              <a 
                key={contact.id}
                href={contact.link} 
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-link"
              >
                <span className="contact-link-icon">
                  {contact.icon}
                </span>
                <span className="contact-link-label">{contact.label}</span>
                <span className="contact-link-value">{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}