import React, { useState } from "react";

const initState = {
  nombre: "",
  email: "",
};



const Formulario = () => {
  const [usuario, setUsuario] = useState(initState);

  const sendData = (e) => {
      console.log(usuario);
      e.preventDefault()
  }

  return (
    <>
      <form >
        <input
          type="text"
          value={usuario.nombre}
          onChange={(e) =>
            setUsuario({
              ...usuario,
              nombre: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={usuario.email}
          onChange={(e) =>
            setUsuario({
              ...usuario,
              email: e.target.value,
            })
          }
        />
        <button onClick={sendData} type="submit">Send</button>
      </form>
    </>
  );
};

export default Formulario;
