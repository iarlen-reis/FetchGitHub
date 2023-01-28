import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SectionStyled,
  InfoStyled,
  UserContainer,
  ContainerFavoriteStyled,
} from "./styles";

import { ImLocation2 } from "react-icons/im";
import { RiUserFollowFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

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
        <InfoStyled title="Biografia">
          <p>{User.bio}</p>
          <div>
            <span title="Seguindo">
              <RiUserFollowFill />: {User.following}
            </span>
            <span title="Seguidores">
              <BsFillPersonFill />: {User.followers}
            </span>
          </div>
          {User.location && (
            <div title="localização">
              <ImLocation2 />: {User.location}
            </div>
          )}
        </InfoStyled>
        <button onClick={handleRespository}>Repositórios</button>
      </UserContainer>
    </SectionStyled>
  );
};

export default Profile;
