"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon } from "./MenuIcon";
import { navLinks } from "./navLinks";
import { colors } from "Constants";

const NavMobile = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setTimeout(() => {
      setNavOpen(!navOpen);
    }, 150);
  };

  return (
    <>
      <Button onClick={toggleNav}>
        <MenuIcon isOpen={navOpen} />
      </Button>

      {navOpen && (
        <Background>
          <Nav>
            {navLinks.map((nav) => {
              const isActive = pathname === nav.url;

              return (
                <Link
                  className="flex justify-center text-slate-900 font-bold text-sm opacity-40 hover:opacity-90 px-2 py-5 transition-opacity"
                  onClick={() => toggleNav()}
                  href={nav.url}
                  key={nav.url}
                  style={{ opacity: isActive ? 1 : null }}
                >
                  {nav.label}
                </Link>
              );
            })}
          </Nav>
        </Background>
      )}
    </>
  );
};

export default NavMobile;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  border: none;
  background: transparent;
  z-index: 100;
  transition: all 200ms;
  font-size: 24px;
  margin-right: -24px;
`;

const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding-bottom: 20px;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.99;
  background-color: ${colors.offWhiteBG};
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const Nav = styled.nav`
  margin-bottom: 100px;
`;
