import React, { useState } from "react";
import { FormStyled, HeaderStyled } from "./styles";

import { useFetchUser } from "../../hooks/useFetchUser";

import Profile from "../Profile/Profile";

const Form = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userResponse = await useFetchUser(user);

    setUserData(userResponse);

    setUser("");
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
        <button>Procurar</button>
      </FormStyled>
      {userData && <Profile User={userData.data} />}
    </>
  );
};

export default Form;
