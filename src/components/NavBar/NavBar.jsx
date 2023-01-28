import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";

import {
  Aside,
  MenuIconContainerStyled,
  MenuStyled,
  BackToTopStyled,
} from "./styles";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Aside id="nav">
      <nav>
        <NavLink to="/">FindRepository</NavLink>
        <MenuStyled showMenu={showMenu}>
          <li>
            <NavLink onClick={toogleMenu} to="/favorites">
              Favoritos
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toogleMenu} to="/about">
              Sobre
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/iarlen-reis/FetchGitHub"
              target="_blank"
            >
              <AiFillGithub size={30} color="white" />
            </a>
          </li>
        </MenuStyled>
        <MenuIconContainerStyled>
          {!showMenu ? (
            <HiOutlineMenu size={30} onClick={toogleMenu} />
          ) : (
            <RiCloseFill size={30} onClick={toogleMenu} />
          )}
        </MenuIconContainerStyled>
      </nav>
      <BackToTopStyled>
        <BiArrowToTop size={35} color="#FFF" onClick={handleTop} />
      </BackToTopStyled>
    </Aside>
  );
};

export default NavBar;
