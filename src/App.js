import Form from './componets/Form'
import Appointment from './componets/Appointment'
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])

  const createList = (newPatient) => {
    setList([
      ...list,
      newPatient
    ])
  }

  return (
    <>
      <h1>administrador de citas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createList={createList}
            />
          </div>
          <div className="one-half column">
            <h2>administra tus citas</h2>
            { list.map(patient => (
              <Appointment
                key={ patient.id }
                patient={ patient }
              />
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
