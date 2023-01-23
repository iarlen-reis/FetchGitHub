import React from "react";
import { SectionStyled, InfoStyled, UserContainer } from "./styles";

const Profile = ({ User }) => {
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
        <button>Repositórios</button>
      </UserContainer>
    </SectionStyled>
  );
};

export default Profile;
