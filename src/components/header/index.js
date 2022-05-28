import React from 'react';
import './header.css';

class Header extends React.Component{
  render()
  {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="text-center">Bienvenido al sistema de valoración y contacto</h3>
            <p className="text-center">
              Desde aquí podrá valorar y calificar nuestros servicios, así como también contactarse con nosotros
              para resolver cualquier necesidad como cliente.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
