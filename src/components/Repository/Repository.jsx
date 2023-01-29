import React, { useEffect } from "react";
import { DivRepository, InfoContainer, InfoContent, TecInfos } from "./styles";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";

const Repository = ({ repository }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DivRepository>
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
      <InfoContainer>
        <InfoContent>
          <AiOutlineFork title="Forks" />: <span>{repository.forks_count}</span>{" "}
          |
          <AiFillStar title="Star" />:<span>{repository.stargazers_count}</span>
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
