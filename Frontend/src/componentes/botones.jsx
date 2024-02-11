import React from "react";
import "./botones.css";
import fondo from "../assets/city-background.png";
import Modal from "./modal.jsx";

class Botones extends React.Component {
  state = {
    mostrarModal: false,
    lenguajeSeleccionado: null,
    contenidoLenguaje: "",
  };
  handleImageClick = () => {
    this.setState({ mostrarModal: true });
  };
  botonClic = (lenguaje) => {
    this.setState({ mostrarModal: true, lenguajeSeleccionado: lenguaje });
  };
  cerrarModal = () => {
    this.setState({ mostrarModal: false, lenguajeSeleccionado: null });
  };
  agregarContenido = (nuevoContenido) => {
    this.setState((prevState) => ({
      contenidoLenguaje: `${prevState.contenidoLenguaje}${nuevoContenido}`,
    }));
  };
  render() {
    const { mostrarModal, lenguajeSeleccionado, contenidoLenguaje } =
      this.state;
    return (
      <div className="contenedor">
        <img src={fondo} alt="fondo" onClick={this.handleImageClick} />
        <button
          className="boton-html"
          style={{ top: "50px", left: "100px" }}
          onClick={() => this.botonClic("html")}
        ></button>

        <button
          className="boton-css"
          style={{ top: "150px", left: "200px" }}
          onClick={() => this.botonClic("css")}
        ></button>

        <button
          className="boton-javascript"
          style={{ top: "150px", left: "200px" }}
          onClick={() => this.botonClic("javascript")}
        ></button>

        <button
          className="boton-react"
          onClick={() => this.botonClic("react")}
        ></button>

        <button
          className="boton-java"
          style={{ top: "150px", left: "200px" }}
          onClick={() => this.botonClic("java")}
        ></button>

        <button
          className="boton-github"
          style={{ top: "150px", left: "200px" }}
          onClick={() => this.botonClic("github")}
        ></button>
        <Modal
          mostrar={mostrarModal}
          lenguaje={lenguajeSeleccionado}
          contenido={`Contenido del modal para ${lenguajeSeleccionado}:${contenidoLenguaje}`}
          cerrarModal={this.cerrarModal}
          agregarContenido={this.agregarContenido}
        />
      </div>
    );
  }
}
export default Botones;
