
function Menu() {
  function handleButton(){
    console.log("este es el boton del header")
  }

    return (
     <div className='menu'>
      <ul className="menuList">
        <li className='menuList__listItem'>          
          <button className="menuList__listItem--listButton"onClick={handleButton}>
            me
          </button>
        </li>

        <li className='menuList__listItem'>          
          <button className="menuList__listItem--listButton"onClick={handleButton}>
            skills
          </button>
        </li>

        <li className='menuList__listItem'>          
          <button className="menuList__listItem--listButton"onClick={handleButton}>
            projects
          </button>
        </li>

        <li className='menuList__listItem'>          
          <button className="menuList__listItem--listButton"onClick={handleButton}>
            rrss
          </button>
        </li>

      </ul>
      </div>
    );
  }
  export default Menu;