import React, {useState} from "react"
import Error from './Error'
import { nanoid } from 'nanoid'

function Form(){
  const [admission, setAdmission] = useState({
    patient: "",
    family: "",
    date: "",
    time: "",
    diagnosis: "",
  })

  const [error, setError] = useState(false)

  const { patient, family, date, time, diagnosis } = admission

  const handleChange = (e) => {
    setAdmission({
      ...admission,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      patient.trim() === "" ||
      family.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      diagnosis.trim() === ""
    ) {
      setError(true)
      return
    }

    setError(false)

    admission.id = nanoid()

    console.log(admission.id);
  }

  return(
    <>
      <h2>Ingreso</h2>

      { error && <Error /> }

      <form onSubmit={ handleSubmit }>
        <label htmlFor="patient">Nombre del Paciente</label>
        <input
          className="u-full-width"
          id="patient"
          type="text"
          name="patient"
          placeholder="Nombre del paciente"
          onChange={ handleChange }
        />
        <label htmlFor="family">Nombre del Familiar</label>
        <input
          className="u-full-width"
          id="family"
          type="text"
          name="family"
          placeholder="Nombre del familiar"
          onChange={ handleChange }
        />
        <label htmlFor="date">Fecha de Ingreso</label>
        <input
          className="u-full-width"
          id="date"
          type="date"
          name="date"
          onChange={ handleChange }
        />
        <label htmlFor="time">Hora de Ingreso</label>
        <input
          className="u-full-width"
          id="time"
          type="time"
          name="time"
          onChange={ handleChange }
        />
        <label htmlFor="diagnosis">Diasnoctico</label>
        <textarea
          className="u-full-width"
          id="diagnosis"
          name="diagnosis"
          onChange={ handleChange }
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
