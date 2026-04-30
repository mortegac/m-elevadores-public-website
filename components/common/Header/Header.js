import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { LinkLogo } from "./utils";

import {
  LeftWrap,
  NavContainer,
  SectionContainer,
  Anchor,
  ButtonContainer,
  MobileNavContainer,
} from "./HeaderStyles";

const NAV_ITEMS = [
  { slug: "home",               label: "Inicio",        href: "/" },
  { slug: "catalogo",           label: "Catálogo",      href: "/catalogo" },
  { slug: "salvaescaleras",     label: "Salvaescaleras",href: "/catalogo/salvaescaleras" },
  { slug: "guia-de-compra",     label: "Guía",          href: "/guia-de-compra" },
  { slug: "testimonios",        label: "Testimonios",   href: "/testimonios" },
  { slug: "nosotros",           label: "Nosotros",      href: "/nosotros" },
];

export const Header = ({ header, activeDocMeta }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  if (activeDocMeta && header) activeDocMeta.lang = header.lang;

  const calltoactiontext = header?.data?.calltoactiontext || [];
  const calltoactionUri  = header?.data?.calltoactionurl?.uid || "";

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  return (
    <NavContainer>
      <SectionContainer>
        <LinkLogo />
        <LeftWrap>
          <ul>
            {NAV_ITEMS.map((item) => (
              <Link key={item.slug} href={item.href} passHref>
                <a className={isActive(item.href) ? "selected" : ""}>
                  <li className="nav-item">
                    {item.label}
                    <div className="underline"></div>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
          <Anchor href={calltoactionUri ? `/${calltoactionUri}` : "https://wa.me/56959382761"}>
            <ButtonContainer fullwidth={true}>
              {calltoactiontext[0]?.text || "Cotiza aquí"}
            </ButtonContainer>
          </Anchor>
        </LeftWrap>

        <svg
          className={`ham hamRotate ham8 ${open && "active"}`}
          viewBox="0 0 100 100"
          width="50"
          onClick={() => setOpen(!open)}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>

        <MobileNavContainer className={open && "on"}>
          {open && (
            <>
              <div style={{ padding: "10px 10px" }}>
                <LinkLogo />
              </div>
              <ul>
                {NAV_ITEMS.map((item) => (
                  <Link key={item.slug} href={item.href} passHref>
                    <a className={isActive(item.href) ? "selected" : ""}>
                      <li>{item.label}</li>
                    </a>
                  </Link>
                ))}
              </ul>
              <Anchor href={calltoactionUri ? `/${calltoactionUri}` : "https://wa.me/56959382761"}>
                <ButtonContainer fullwidth={true}>
                  {calltoactiontext[0]?.text || "Cotiza aquí"}
                </ButtonContainer>
              </Anchor>
            </>
          )}
        </MobileNavContainer>
      </SectionContainer>
    </NavContainer>
  );
};
