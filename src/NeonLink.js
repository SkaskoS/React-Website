import React from 'react';

const NeonLink = ({ children, href }) => {
  const handleClick = (event) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      scrollToSection(href);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={href} className="footer-link" onClick={handleClick}>
      {typeof children === 'string' ? (
        children.split('').map((char, index) => (
          <span key={index} style={{ '--index': index }}>{char}</span>
        ))
      ) : (
        children
      )}
    </a>
  );
};

export default NeonLink;