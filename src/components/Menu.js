import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menuList">
        <li className="menuList__listItem">
          <Link className="menuList__listItem--link" to="/portfolio">
            me
          </Link>
        </li>

        <li className="menuList__listItem">
          <Link className="menuList__listItem--link" to="/skills">
            skills
          </Link>
        </li>

        <li className="menuList__listItem">
          <Link className="menuList__listItem--link" to="/projects">
            projects
          </Link>
        </li>

        <li className="menuList__listItem">
          <Link className="menuList__listItem--link" to="/rrss">
            rrss
          </Link>
        </li>
        <li className="menuList__listItem">
          <Link className="menuList__listItem--link" to="/form">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
