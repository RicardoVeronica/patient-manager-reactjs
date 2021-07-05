import Form from './componets/Form'

function App() {
  return (
    <>
      <h1>Hello world</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            <h1>Second column</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
