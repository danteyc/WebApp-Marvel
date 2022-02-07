import Characters from "./components/Characters";
import "./styles/PageHome.css"
import { NavLink } from "react-router-dom";


export default function PageHome() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/" className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png" alt="" /></NavLink>
      </header>
      <div className="App-content">
        <Characters />
      </div>
    </div>
  );
}
