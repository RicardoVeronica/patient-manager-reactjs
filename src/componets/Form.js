import React, {useState} from "react"

function Form(){
  return(
    <>
      <h2>Ingreso</h2>
      <form>
        <label htmlFor="name">Nombre del Paciente</label>
        <input
          className="u-full-width"
          id="name"
          type="text"
          name="paciente"
          placeholder="Nombre del paciente"
        />
        <label htmlFor="familiar">Nombre del Familiar</label>
        <input
          className="u-full-width"
          id="familiar"
          type="text"
          name="familiar"
          placeholder="Nombre del familiar"
        />
        <label htmlFor="date">Fecha de Ingreso</label>
        <input
          className="u-full-width"
          id="date"
          type="date"
          name="data"
        />
        <label htmlFor="time">Hora de Ingreso</label>
        <input
          className="u-full-width"
          id="time"
          type="time"
          name="time"
        />
        <label htmlFor="diagnosis">Diasnoctico</label>
        <textarea
          className="u-full-width"
          id="diagnosis"
          name="diagnosis"
        ></textarea>
        <button
          className="u-full-widht button-primary"
          type="submit"
        >Agregar Paciente</button>
      </form>
    </>
    )
}

export default Form
