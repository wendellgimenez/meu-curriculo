import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <section id="personal">
          <h2>Informações Pessoais</h2>
          <div className="personal-info">
            <p><strong>Nome:</strong> Wendell Gimenez Lander</p>
            <p>
              <strong>📞 Telefone:</strong> +55 (51) 99698-7983 |{' '}
              <strong>✉️ Email:</strong>{' '}
              <a href="mailto:wendellgimenez2001@outlook.com">
                wendellgimenez2001@outlook.com
              </a>
            </p>
            <p>
              <strong>💻 GitHub:</strong>{' '}
              <a
                href="https://github.com/wendellgimenez"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/wendellgimenez
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/wendell-gimenez-lander-102474182"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/wendell-gimenez-lander-102474182
              </a>
            </p>
            <p><strong>Idade:</strong> 23 anos</p>
            <p><strong>Estado Civil:</strong> Casado</p>
          </div>
        </section>
        <section id="academic">
          <h2>Informações Acadêmicas</h2>
          {/* Conteúdo aqui */}
        </section>
        <section id="professional">
          <h2>Informações Profissionais</h2>
          {/* Conteúdo aqui */}
        </section>
        <section id="extracurricular">
          <h2>Informações Extracurriculares</h2>
          {/* Conteúdo aqui */}
        </section>
        <section id="portfolio">
          <h2>Portfólios</h2>
          {/* Conteúdo aqui */}
        </section>
      </div>
    </div>
  );
};

export default App;