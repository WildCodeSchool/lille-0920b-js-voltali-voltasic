import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-desk">
        <a href="CGU">CGU</a>

        <a href="Contact">Contact</a>
        <a href="Parametres">Parametres</a>
      </div>
      <div className="footer-responsive">
        <a href="home">
          <i className="fas fa-home" />
        </a>
        <a href="contact">
          <i className="fas fa-at" />
        </a>
        <a href="settings">
          <i className="fas fa-cog" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
