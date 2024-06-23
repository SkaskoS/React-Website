import React, { useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NeonLink from './NeonLink'; 
import coolPNG from './cool.png';

const metaTag = document.createElement('meta');
metaTag.setAttribute('name', 'viewport');
metaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(metaTag);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const ProjectBox = ({ repo }) => (
  <div className='glow-box'>
    <div className='glow-box-content'>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-fingerprint fa-4x blue-white-icon"></i>
      </a>
      <h1 className="neon-text">{repo.name}</h1>
      <p>{repo.description}</p>
    </div>
  </div>
);

const EmailIcon = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="email-container" onClick={handleEmailClick}>
      <i className="fas fa-envelope fa-lg"></i>
      {showEmail && <span className="email-text">stephenskaskoo@gmail.com</span>}
    </div>
  );
};




function App() {
  const [repos, setRepos] = useState([]);
  const [vizUrl, setVizUrl] = useState('');
  

  useEffect(() => {
    fetch('https://api.github.com/users/SkaskoS/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching GitHub repositories:', error));
  }, []);


  return (
    <div className="App">
      <nav>
        <ul>
          <li><NeonLink href="#home">Home</NeonLink></li>
          <li><NeonLink href="#about">About</NeonLink></li>
          <li><NeonLink href="#skills">Skills</NeonLink></li>
          <li><NeonLink href="#tools">Tools</NeonLink></li>
          <li><NeonLink href="#portfolio">Portfolio</NeonLink></li>
          <li><NeonLink href="#tableau">Tableau</NeonLink></li>
        </ul>
      </nav>


      <section id = "home" className="home-section">
        <h1 className="neon-text-welcome">Welcome</h1>
        <div className="falling-boxes">
          <div className="box"><i className=""></i></div>
          <div className="box"><i className=""></i></div>
          <div className="box"><i className=""></i></div>
          <div className="box"><i className=""></i></div>
        </div>
      </section>

      <section id="about" className="about-section">
      <div className="about-container">
        <div className="profile-picture">
          <img src={coolPNG} alt="Profile" className="cool-png" />
        </div>
        <div className="about-content">
          <h1 className="about-heading neon-text">About Me</h1>
          <ul className="about-bullets">
            <li>Bachelor's of Science in Data Science</li>
            <li>Graduate from the University Of Pittsburgh - Main</li>
            <li>Currently working as a Enterprise Data Analysis</li>
            <li>Strong interests in Development and Analsyis</li>
          </ul>
        </div>
      </div>
    </section>

      

      <section id="skills">
        <h1 className="skills-heading neon-text">Skills</h1>
        <div className='glow-box' id="HTMLImage">
          <div className='glow-box-content'>
            <i className="fab fa-html5 fa-lg neon-text"></i>
            <h1 className="neon-text">HTML</h1>
          </div>
        </div>

        <div className='glow-box' id="CSSHTMLImage">
          <div className='glow-box-content'>
            <i className="fab fa-css3-alt fa-lg neon-text"></i>
            <h1 className="neon-text">CSS</h1>
          </div>
        </div>

        <div className='glow-box' id="JSImage">
          <div className='glow-box-content'>
            <i className="fab fa-js-square fa-lg neon-text"></i>
            <h1 className="neon-text">JavaScript</h1>
          </div>
        </div>
        <div className='glow-box' id="SQLImage">
          <div className='glow-box-content'>
            <i className="fas fa-database fa-lg neon-text"></i>
            <h1 className="neon-text">SQL</h1>
          </div>
        </div>
        <div className='glow-box' id="RImage">
          <div className='glow-box-content'>
            <i className="fab fa-r-project fa-lg neon-text"></i>
            <h1 className="neon-text">R</h1>
          </div>
        </div>
        <div className='glow-box' id="JavaImage">
          <div className='glow-box-content'>
            <i className="fab fa-java fa-lg neon-text"></i>
            <h1 className="neon-text">Java</h1>
          </div>
        </div>
        <div className='glow-box' id="PythonImage">
          <div className='glow-box-content'>
            <i className="fab fa-python fa-lg neon-text"></i>
            <h1 className="neon-text">Python</h1>
          </div>
        </div>
        <div className='glow-box' id="ExcelImage">
          <div className='glow-box-content'>
            <i className="fas fa-file-excel fa-lg neon-text"></i>
            <h1 className="neon-text">Excel</h1>
          </div>
        </div>
      </section>

      <section id="tools">
        <h1 className="tools-heading neon-text">Tools</h1>
        <div className='glow-box' id="SQLMSImage">
          <div className='glow-box-content'>
          <i className="fas fa-gears fa-lg neon-text"></i>
          <h1 className="neon-text">SQL Management Studio</h1>
          </div>
        </div>
        <div className='glow-box' id="MySQLImage">
          <div className='glow-box-content'>
            <i className="fas fa-gears fa-lg neon-text"></i>
            <h1 className="neon-text">MySQL</h1>
          </div>
        </div>
        <div className='glow-box' id="SSRSImage">
          <div className='glow-box-content'>
          <i className="fas fa-gears fa-lg neon-text"></i>
          <h1 className="neon-text">SSRS</h1>
          </div>
        </div>
        <div className='glow-box' id="TableauImage">
          <div className='glow-box-content'>
          <i className="fas fa-gears fa-lg neon-text"></i>
          <h1 className="neon-text">Tableau</h1>
          </div>
        </div>
        <div className='glow-box' id="JupyterImage">
          <div className='glow-box-content'>
          <i className="fas fa-gears fa-lg neon-text"></i>
          <h1 className="neon-text">Jupyter Notebook</h1>
          </div>
        </div>
        <div className='glow-box' id="VSImage">
          <div className='glow-box-content'>
          <i className="fas fa-gears fa-lg neon-text"></i>
          <h1 className="neon-text">Visual Studio</h1>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <h1 className="project-heading neon-text">Projects</h1>
        <div className="portfolio-container">
          {repos.map(repo => (
            <ProjectBox key={repo.id} repo={repo} />
          ))}
        </div>
      </section>
   
      <section id="tableau">
  <h1 className="project-heading neon-text">Tableau</h1>
  <div className="portfolio-container">
    <div className='glow-box' id="LACrime">
      <div className='glow-box-content'>
        <a href="https://public.tableau.com/app/profile/s.s8790/viz/LACrime_17052034296410/Dashboard1" target="_blank" rel="noopener noreferrer" className="tableau-link">
          <i className="fas fa-palette fa-lg neon-text"></i>
          <h1 className="neon-text">LA Crime</h1>
        </a>
      </div>
    </div>
    <div className='glow-box' id="COVID19">
      <div className='glow-box-content'>
        <a href="https://public.tableau.com/app/profile/s.s8790/viz/ProjectCovid_16917979884640/Dashboard1" target="_blank" rel="noopener noreferrer" className="tableau-link">
          <i className="fas fa-palette fa-lg neon-text"></i>
          <h1 className="neon-text">COVID-19</h1>
        </a>
      </div>
    </div>
  </div>
</section>


      <footer>
        <div className="footer-content">
          <a className="footer-link" href="https://www.linkedin.com/in/stephen-skasko/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-lg"></i> 
          </a>
          <a className="footer-link" href="https://github.com/SkaskoS" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-lg"></i> 
          </a>
          <div className="email-container">
            <i className="fas fa-envelope fa-lg"></i>
            <span className="email-text">stephenskaskoo@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;