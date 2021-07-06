import React, {useState} from "react"
import Error from './Error'
import { nanoid } from 'nanoid'

function Form({ createList }){
  const [patient, setPatient] = useState({
    name: "",
    family: "",
    date: "",
    time: "",
    diagnosis: "",
  })

  const [error, setError] = useState(false)

  const { name, family, date, time, diagnosis } = patient

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      name.trim() === "" ||
      family.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      diagnosis.trim() === ""
    ) {
      setError(true)
      return
    }

    setError(false)

    patient.id = nanoid()

    createList(patient)

    setPatient({
      name: "",
      family: "",
      date: "",
      time: "",
      diagnosis: "",
    })
  }

  return(
    <>
      <h2>Ingreso</h2>

      { error && <Error /> }

      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Nombre del Paciente</label>
        <input
          className="u-full-width"
          id="name"
          type="text"
          name="name"
          placeholder="Nombre del paciente"
          value={ name }
          onChange={ handleChange }
        />
        <label htmlFor="family">Nombre del Familiar</label>
        <input
          className="u-full-width"
          id="family"
          type="text"
          name="family"
          placeholder="Nombre del familiar"
          value={ family }
          onChange={ handleChange }
        />
        <label htmlFor="date">Fecha de Ingreso</label>
        <input
          className="u-full-width"
          id="date"
          type="date"
          name="date"
          value={ date }
          onChange={ handleChange }
        />
        <label htmlFor="time">Hora de Ingreso</label>
        <input
          className="u-full-width"
          id="time"
          type="time"
          name="time"
          value={ time }
          onChange={ handleChange }
        />
        <label htmlFor="diagnosis">Diagnostico</label>
        <textarea
          className="u-full-width"
          id="diagnosis"
          name="diagnosis"
          value={ diagnosis }
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
