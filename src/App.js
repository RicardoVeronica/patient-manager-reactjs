import Form from './componets/Form'
import Appointment from './componets/Appointment'
import { useState, useEffect } from 'react';

let initialStorage = JSON.parse(localStorage.getItem("patients"))

if(!initialStorage) { initialStorage = [] }

function App() {
  const [list, setList] = useState(initialStorage)

  useEffect(() => {
    if(initialStorage) localStorage.setItem("patients", JSON.stringify(list))
  })

  const createList = (newPatient) => {
    setList([
      ...list,
      newPatient
    ])
  }

  const deletePatient = (id) => {
    const newList = list.filter(patient => patient.id !== id)
    setList(newList)
  }

  const title = list.length === 0 ? "No hay pacientes" : "Administrador"

  return (
    <>
      <h1>ingresos hospitalarios</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createList={createList}
            />
          </div>
          <div className="one-half column">
            <h2>{ title }</h2>
            { list.map(patient => (
              <Appointment
                key={ patient.id }
                patient={ patient }
                deletePatient={ deletePatient }
              />
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
