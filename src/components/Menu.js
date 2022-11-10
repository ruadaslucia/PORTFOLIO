import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <ul className="menuList">
        <li className="menuList__listItem">
          <button className="menuList__listItem--listButton">
            <Link className="menuList__listItem--link" to="/PORTFOLIO">
              me
            </Link>
          </button>
        </li>

        <li className="menuList__listItem">
          <button className="menuList__listItem--listButton">
            <Link className="menuList__listItem--link" to="/skills">
              skills
            </Link>
          </button>
        </li>

        <li className="menuList__listItem">
          <button className="menuList__listItem--listButton">
            <Link className="menuList__listItem--link" to="/projects">
              projects
            </Link>
          </button>
        </li>

        <li className="menuList__listItem">
          <button className="menuList__listItem--listButton">
            <Link className="menuList__listItem--link" to="/rrss">
              rrss
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
