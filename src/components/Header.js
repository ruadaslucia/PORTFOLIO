import "../styles/layouts/header.scss";

function Header() {
    return (
      <div className="header">
      <h1 className='headerTitle'>portfolio ruadaslucia</h1>
      <ul className='headerList'>
        <li className='listItem'><a href="">me</a>
        </li>
        <li className='listItem'><a href="">Skills</a></li>
        <li className='listItem'><a href="">projects</a></li>
        <li className='listItem'><a href="">rrss</a></li>
      </ul>
      </div>
    );
  }
  
  export default Header;