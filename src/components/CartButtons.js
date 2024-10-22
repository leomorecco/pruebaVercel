import React from 'react';

const CartButtons = ({ onCatalog }) => {
  return (
    <div className="buttones">
      <button className="button_success" onClick={onCatalog}>
        Seguir comprando
      </button>
      <button className="button_success">{/* Agrega la lógica para pasar a pagar */}Pasar a pagar</button>
    </div>
  );
};

export default CartButtons;