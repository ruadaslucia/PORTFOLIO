


function Menu() {
  function handleButton(){
    console.log("este es el boton del header")
  }

    return (
     <div className='menu'>
      <ul className="menuList">
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
  export default Menu;