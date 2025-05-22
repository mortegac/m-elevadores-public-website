import Link from "next/link";
import { useState } from "react";
import {
  ContactButtons,
  Logo,
  Nav,
  NavLinks,
  MobileMenuIcon,
  MobileMenu,
  MobileNavLinks,
  CloseIcon,
} from "./LandingNavStyles";
import { FiMenu, FiX } from "react-icons/fi";
import { PrismicRichText } from "@prismicio/react";

const LandingNav = ({ landingNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = landingNav?.data?.logo?.url;
  const logourl = landingNav?.data?.logourl?.url || "/";
  const navlinks = landingNav?.data?.navlink || [];
  const contactButtons = landingNav?.data?.contanctbtn || [];

  return (
    <Nav>
      {/* Logo */}
      <Logo>
        <Link href={logourl}>
          <a>{logo && <img src={logo} alt="Logo" />}</a>
        </Link>
      </Logo>

      {/* Desktop Navigation Links */}
      <NavLinks>
        {navlinks.map((item, index) => {
          const name = item.name?.[0]?.text || "Link";
          const href = item.link?.url || "#";
          return (
            <li key={index}>
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </NavLinks>

      {/* Contact Buttons */}
      <ContactButtons>
        {contactButtons.map((btn, index) => (
          <Link href={btn.link?.url || "#"} key={index}>
            <a className="contact-btn">
              {btn.icon?.url && <img src={btn.icon.url} alt="Icon" />}
              <PrismicRichText field={btn.label} />
            </a>
          </Link>
        ))}
      </ContactButtons>

      {/* Mobile Menu Toggle Icon */}
      <MobileMenuIcon onClick={() => setIsMenuOpen(true)}>
        <FiMenu size={28} color="white" />
      </MobileMenuIcon>

      {/* Mobile Slide-in Menu */}
      <MobileMenu isOpen={isMenuOpen}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo>
            <Link href={logourl}>
              <a>{logo && <img src={logo} alt="Logo" />}</a>
            </Link>
          </Logo>
          <CloseIcon onClick={() => setIsMenuOpen(false)}>
            <FiX size={28} color="white" />
          </CloseIcon>
        </div>
        <MobileNavLinks>
          {navlinks.map((item, index) => {
            const name = item.name?.[0]?.text || "Link";
            const href = item.link?.url || "#";
            return (
              <li key={index} onClick={() => setIsMenuOpen(false)}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            );
          })}
        </MobileNavLinks>
      </MobileMenu>
    </Nav>
  );
};

export default LandingNav;
