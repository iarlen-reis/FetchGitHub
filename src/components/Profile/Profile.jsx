import React from "react";
import { useNavigate } from "react-router-dom";

import { SectionStyled, InfoStyled, UserContainer } from "./styles";

const Profile = ({ User }) => {
  const navigate = useNavigate();

  const handleRespository = async (event) => {
    event.preventDefault();

    navigate("/repositories");
  };

  return (
    <SectionStyled>
      <UserContainer>
        <h2>{User.name}</h2>
        <div>
          <img src={User.avatar_url} alt={User.name} />
        </div>
        <InfoStyled>
          <p>{User.bio}</p>
          <div>
            <span>Seguidores: {User.followers}</span>
            <span>Seguindo: {User.following}</span>
          </div>
          {User.location && <div>localização: {User.location}</div>}
        </InfoStyled>
        <button onClick={handleRespository}>Repositórios</button>
      </UserContainer>
    </SectionStyled>
  );
};

export default Profile;
