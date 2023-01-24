import React from "react";
import { DivRepository, InfoContainer, InfoContent, TecInfos } from "./styles";

const Repository = ({ repository }) => {
  return (
    <DivRepository>
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
      <InfoContainer>
        <InfoContent>
          Forks: <span>{repository.forks_count}</span> | Stars:
          <span>{repository.stargazers_count}</span>
        </InfoContent>
        <TecInfos>
          {repository.topics.length > 0 && (
            <>
              <p>Tecnologias</p>
              <span>
                {repository.topics.map((topic) => (
                  <span key={topic}> {topic} </span>
                ))}
              </span>
            </>
          )}
        </TecInfos>
        <a href={repository.html_url} target="_blank">
          Acessar
        </a>
      </InfoContainer>
    </DivRepository>
  );
};

export default Repository;
