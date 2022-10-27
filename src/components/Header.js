import "../styles/layouts/header.scss";

function Header() {
    return (
      <div className="header">
      <h1 className='headerTitle'>portfolio ruadaslucia</h1>
      <ul className='headerList'>
        <li className='listItem'><a href="https://www.marca.com">me</a>
        </li>
        <li className='listItem'><a href="https://youtube.es">Skills</a></li>
        <li className='listItem'><a href="https://www.github.es">projects</a></li>
        <li className='listItem'><a href="https://www.twitter.es">rrss</a></li>
      </ul>
      </div>
    );
  }
  
  export default Header;