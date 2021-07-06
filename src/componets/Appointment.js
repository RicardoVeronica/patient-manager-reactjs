const Appointment = ({ patient, deletePatient }) => {
  return (
    <div className="cita">
      <h5>Información del paciente</h5>
      <p>
        Paciente: <span>{ patient.name }</span>
      </p>
      <p>
        Familiar: <span>{ patient.family }</span>
      </p>
      <p>
        Fecha de ingreso: <span>{ patient.date }</span>
      </p>
      <p>
        Hora de ingreso: <span>{ patient.time }</span>
      </p>
      <p>
        Diagnostico: <span>{ patient.diagnosis }</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={ () => deletePatient(patient.id) }
      >Eliminar &times;</button>
    </div>
  );
};

export default Appointment
