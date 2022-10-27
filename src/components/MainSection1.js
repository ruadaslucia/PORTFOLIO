import "../styles/layouts/mainSection1.scss";

function MainSection1() {
    return (
      <fieldset className="stuffed-fieldset">
      <div
        className="stuffed js-stuffed-container"
        
      >
        <i className="fa-regular fa-keyboard keyboard"></i>
        <p className="stuffed__text-stuffed">Contacta conmigo</p>
        <i className={`fa-solid fa-angle-up js-arrow2 `}></i>
      </div>
      {/*NAME*/}
      <div
        className={`stuffed__stuffed-form js-stuffed js-stuffed-form js-reset-form `}
      >
        <label className="stuffed-titles" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forname js_reset-name"
          id="name"
          type="text"
          name="name"
          placeholder="Ej: Pepita Pérez"
          required
        />
      
        {/*EMAIL*/}
        <label className="stuffed-titles" htmlFor="email">
          Email
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-formail js_reset-mail"
          id="email"
          type="email"
          name="email"
          placeholder="Ej: pepita.perez@gmail.com"
          required
        />
        {/*PHONE*/}
        <label className="stuffed-titles" htmlFor="telef">
          Teléfono
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forphone js_reset-phone"
          id="phone"
          type="tel"
          name="phone"
          placeholder="Ej: 000-000-000"
          required
        />
        {/*SOCIAL MEDIA*/}
        <label className="stuffed-titles">
          Añade un comentario
        </label>
        <input
          className="stuffed-titles__stuffed-texts js-forlkdn js_reset-linkedin"
          type="text"
          placeholder="Escribe aquí"
        />
        
      </div>
    </fieldset>
    );
  }
  
  export default MainSection1;