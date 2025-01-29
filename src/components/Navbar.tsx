import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('personal');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Atualiza a aba ativa
    }
  };

  return (
    <div className="navbar">
      <div className="profile-pic">
        <img src="/path/to/your/photo.jpg" alt="Profile" />
      </div>
      <ul>
        <li>
          <a
            href="#personal"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('personal');
            }}
            className={activeSection === 'personal' ? 'active' : ''}
          >
            Informações Pessoais
          </a>
        </li>
        <li>
          <a
            href="#academic"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('academic');
            }}
            className={activeSection === 'academic' ? 'active' : ''}
          >
            Informações Acadêmicas
          </a>
        </li>
        <li>
          <a
            href="#professional"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('professional');
            }}
            className={activeSection === 'professional' ? 'active' : ''}
          >
            Informações Profissionais
          </a>
        </li>
        <li>
          <a
            href="#extracurricular"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('extracurricular');
            }}
            className={activeSection === 'extracurricular' ? 'active' : ''}
          >
            Informações Extracurriculares
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('portfolio');
            }}
            className={activeSection === 'portfolio' ? 'active' : ''}
          >
            Portfólios
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;