import React, { useState } from "react";
import { FormStyled, HeaderStyled, ErrorMessage } from "./styles";

import { useFetchUser } from "../../hooks/useFetchUser";

import Profile from "../Profile/Profile";

const Form = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorServer, setErrorServer] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserData(null);
    setErrorServer("");

    if (!user) return;

    try {
      setLoading(true);
      const userResponse = await useFetchUser(user);

      setUserData(userResponse.data);
      setLoading(false);
    } catch (error) {
      setErrorServer("Nenhum usuário encontrado!");
      setLoading(false);
    }

    // setUser("");
  };

  return (
    <>
      <HeaderStyled>
        <h1>Encontre respositorios no github!</h1>
        <p>Armazene os seus repositórios favoritos!</p>
      </HeaderStyled>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          <span>Digite o nome do usuário:</span>
          <input
            type="text"
            value={user}
            onChange={({ target }) => setUser(target.value)}
          />
        </label>
        {loading ? <button>Aguarde..</button> : <button>Procurar</button>}
      </FormStyled>
      {errorServer && <ErrorMessage>Nenhum usuário encontrado.</ErrorMessage>}
      {userData && <Profile User={userData} />}
    </>
  );
};

export default Form;
