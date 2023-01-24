import React, { useContext } from "react";

import { RepositoryContext } from "../../contexts/RepositoryContext";

import Repository from "../../components/Repository/Repository";
import { SectionStyled } from "./styles";

const Repositories = () => {
  const { repository, userRepository } = useContext(RepositoryContext);

  return (
    <SectionStyled>
      {repository && <h1>Repositório de: {userRepository}</h1>}
      {!repository && <h1>Nenhum repositório encontrado.</h1>}
      <ul>
        {repository &&
          repository.map((repo) => (
            <li key={repo.name}>
              <Repository repository={repo} />
            </li>
          ))}
      </ul>
    </SectionStyled>
  );
};

export default Repositories;
