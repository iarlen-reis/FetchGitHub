import React, { useEffect, useState } from "react";
import { FormStyled, HeaderStyled, ErrorMessage } from "./styles";

import Profile from "../Profile/Profile";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import { useRepositoryContext } from "../../contexts/RepositoryContext";

const Form = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorServer, setErrorServer] = useState("");

  const { setRepository, setUserRepository } = useRepositoryContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) return;

    setUserData(null);
    setErrorServer("");

    try {
      setErrorServer("");
      setLoading(true);
      const response = await axios(`https://api.github.com/users/${user}`);
      const reponseRepositories = await axios(
        `https://api.github.com/users/${user}/repos`
      );
      setUserRepository(response.data.name);
      setRepository(reponseRepositories.data);
      setUserData(response.data);

      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("username", JSON.stringify(response.data.name));
      localStorage.setItem(
        "repository",
        JSON.stringify(reponseRepositories.data)
      );
      setLoading(false);
    } catch (error) {
      setErrorServer("");

      setErrorServer("Nenhum usuário foi encontrado.");
      setLoading(false);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    const repositoryData = localStorage.getItem("repository");
    const username = localStorage.getItem("username");

    if (data) {
      setUserData(JSON.parse(data));
      setRepository(JSON.parse(repositoryData));
      setUserRepository(JSON.parse(username));
    }
  }, []);

  return (
    <>
      <HeaderStyled>
        <h1>Encontre respositorios no github!</h1>
        <p>Armazene os seus repositórios favoritos!</p>
      </HeaderStyled>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          <span>Digite o nome do usuário (Github):</span>
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
