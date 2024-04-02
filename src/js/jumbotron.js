import React from "react";



//create your first component
const JumboTrom = () => {
  return (
    <div className="container bg-secondary mt-3 mb-3 pt-5 pb-5 ps-5 pe-5">
      <div className="text-start bg-body-tertiary rounded-3">
        <h1 className="display-1">A Warm Welcome!</h1>
        <p className="fs-4 text-dark text-start text-dark">
          Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded mt-3" type="button">
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
};



export default JumboTrom;
