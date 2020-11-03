import './Header.css';

function Header() {
  return (
    <div className="background-header">
      <div className="bloc">
        <img src="/logo.png" className="logo" alt="Logo voltasic" />
        <input placeholder="Search" className="search-bar" />
      </div>
    </div>
  );
}
export default Header;
