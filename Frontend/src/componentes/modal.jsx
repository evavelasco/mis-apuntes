import React from "react";

import "./Modal.css";

class Modal extends React.Component {
  state = {
    nuevoContenido: "",
  };
  handleInputChange = (e) => {
    this.setState({ nuevoContenido: e.target.value });
  };
  handleAgregarContenido = () => {
    const { agregarContenido, cerrarModal } = this.props;
    agregarContenido(this.state.nuevoContenido);
    cerrarModal();
  };
  render() {
    const { mostrar, titulo, contenido, cerrarModal, lenguaje } = this.props;
    if (!mostrar) {
      return null;
    }

    return (
      <div className="modal-fondo" onClick={cerrarModal}>
        <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
          <h2>{titulo}</h2>
          <p>Contenido del modal para {contenido}</p>
          <form>
            <label htmlFor="nuevoContenido">Nuevocontenido</label>
            <input
              type="text"
              id="nuevoContenido"
              value={this.state.nuevoContenido}
              onChange={this.handleInputChange}
            />
            <button type="button" onClick={this.handleAgregarContenido}>
              Agregar contenido
            </button>
          </form>
          <button onClick={cerrarModal}>CerrarModal</button>
        </div>
      </div>
    );
  }
}

export default Modal;
