import logo from "../../assets/logo/logo.png";
import "./index.css";
import FormMensagem from "../../components/form";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div id="main">
        {!localStorage.getItem("access") && (
          <Link to="/login">
            <button className="btn btn-form login-button">login</button>
          </Link>
        )}
        {localStorage.getItem("access") && (
          <Link to="/perguntas">
            <button className="btn btn-form login-button">Ver perguntas</button>
          </Link>
        )}
        <div className="container">
          <img className="logo-rodela" src={logo}></img>
          <FormMensagem />
        </div>
      </div>
    </>
  );
}
