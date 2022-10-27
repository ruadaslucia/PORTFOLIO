import "../styles/layouts/header.scss";

function Header() {
    return (
      <div className="header">
      <h1 className='headerTitle'>portfolio ruadaslucia</h1>
      <ul className='headerList'>
        <li className='listItem'><a href="www.marca.es">me</a>
        </li>
        <li className='listItem'><a href="www.youtube.es">Skills</a></li>
        <li className='listItem'><a href="www.github.es">projects</a></li>
        <li className='listItem'><a href="www.twitter.es">rrss</a></li>
      </ul>
      </div>
    );
  }
  
  export default Header;