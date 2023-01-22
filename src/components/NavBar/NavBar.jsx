import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

import { Aside, MenuIconContainerStyled, MenuStyled } from "./styles";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Aside>
      <nav>
        <NavLink to="/">Home</NavLink>
        <MenuStyled showMenu={showMenu}>
          <li>
            <NavLink onClick={toogleMenu} to="/about">
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toogleMenu} to="/contact">
              Contact
            </NavLink>
          </li>
        </MenuStyled>
        <MenuIconContainerStyled>
          <HiOutlineMenu size={30} onClick={toogleMenu} />
        </MenuIconContainerStyled>
      </nav>
    </Aside>
  );
};

export default NavBar;
