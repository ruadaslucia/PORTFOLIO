import { Link } from 'react-router-dom';
function BackButton() {
  return (
    <div className="backButton">
      <button className="backButton__button">
        <Link className="backButton__button--link" to="/portfolio">
          <i className="fa-solid fa-arrow-left-long backButton__button--icon"></i>
        </Link>
      </button>
    </div>
  );
}

export default BackButton;
