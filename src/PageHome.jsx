import Characters from "./components/Characters";

export default function PageHome() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Personajes Marvel</h2>
      </header>
      <div className="App-content">
        <Characters />
      </div>
    </div>
  );
}
