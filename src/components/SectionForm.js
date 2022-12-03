import BackButton from './BackButton';
import { useForm } from '@formspree/react';

function SectionForm() {
  const [state, handleSubmit] = useForm('mbjbvbgg');
  if (state.succeeded) {
    return (
      <div className="returnText">
        Thanks! Your message was send. I'll contact you in no time!
        <BackButton />
      </div>
    );
  }

  return (
    <>
      <div className="sectionForm">
        <h2 className="sectionForm__title"> Contact with me</h2>

        <form className="sectionForm__form" onSubmit={handleSubmit}>
          <label className="sectionForm__form--label">
            <span className="sectionForm__form--span">Name:</span>
            <input
              className="sectionForm__form--inputLabel"
              htmlFor="name"
              id="name"
              type="text"
              name="name"
              placeholder="Ej: Pepita Pérez"
              required
            />
          </label>
          <label className="sectionForm__form--label">
            <span className="sectionForm__form--span">Company:</span>
            <input
              className="sectionForm__form--inputLabel"
              htmlFor="company"
              id="company"
              type="text"
              name="company"
              placeholder="Ej: Google"
              required
            />
          </label>
          <label className="sectionForm__form--label" htmlFor="email">
            <span className="sectionForm__form--span">Email:</span>
            <input
              className="sectionForm__form--inputLabel"
              htmlFor="email"
              id="email"
              type="email"
              name="email"
              placeholder="Ej: pepita.perez@gmail.com"
              required
            />
          </label>
          <label className="sectionForm__form--label">
            <span className="sectionForm__form--span">Coment:</span>

            <input
              className="sectionForm__form--inputLabel comentTextInput"
              htmlFor="coment"
              type="textarea"
              maxLength={140}
              name="coment"
              placeholder="Short coment (140 letters)"
              required
            />
          </label>

          <button
            className="sectionForm__form--submit"
            type="submit"
            disabled={state.submitting}
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default SectionForm;
