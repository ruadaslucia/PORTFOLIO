import "../styles/layouts/header.scss";

function Header() {
  function handleButton(){
    console.log("este es el boton del header")
  }

    return (
      <div className="header">
      <h1 className='headerTitle'>portfolio ruadaslucia</h1>
      <ul className='headerList'>
        <li className='listItem'>          
          <button className="listItemButton"onClick={handleButton}>
            me
          </button>
        </li>

        <li className='listItem'>          
          <button className="listItemButton"onClick={handleButton}>
            skills
          </button>
        </li>

        <li className='listItem'>          
          <button className="listItemButton"onClick={handleButton}>
            projects
          </button>
        </li>

        <li className='listItem'>          
          <button className="listItemButton"onClick={handleButton}>
            rrss
          </button>
        </li>

      </ul>
      </div>
    );
  }
  
  export default Header;