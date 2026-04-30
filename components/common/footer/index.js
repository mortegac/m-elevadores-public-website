import Link from "next/link";
import styled from "styled-components";

// ─── Styled Components ────────────────────────────────────────────────────────

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #1a2236;
  padding-top: 64px;
`;

const Inner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const BrandCol = styled.div`
  @media (max-width: 960px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    grid-column: auto;
  }
`;

const BrandLogo = styled.img`
  max-width: 160px;
  width: 100%;
  display: block;
  filter: brightness(0) invert(1);
  margin-bottom: 20px;
`;

const BrandDescription = styled.p`
  font-size: 14px;
  && { color: rgba(255, 255, 255, 0.8); }
  line-height: 1.7;
  max-width: 280px;
  margin: 0;
  font-family: "Quicksand", sans-serif;
`;

const Col = styled.div``;

const ColHeading = styled.h4`
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 16px 0;
  font-family: "Quicksand", sans-serif;
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding: 4px 0;
  font-family: "Quicksand", sans-serif;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const BoldLink = styled(NavLink)`
  font-weight: 700;
  color: #0066cc;

  &:hover {
    color: #3385d6;
  }
`;

const ContactItem = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  display: block;
  padding: 4px 0;
  font-family: "Quicksand", sans-serif;
  line-height: 1.5;
`;

const LegalBar = styled.div`
  margin-top: 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
`;

const LegalInner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LegalText = styled.span`
  color: rgba(255, 255, 255, 0.65);
  font-size: 13px;
  font-family: "Quicksand", sans-serif;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;
  flex-shrink: 0;
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
  font-size: 13px;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

const Footer = ({ items }) => {
  return (
    <FooterWrapper>
      <Inner>
        <Grid>
          {/* Column 1 — Brand */}
          <BrandCol>
            <BrandLogo src="/logo.png" alt="M-Elevadores" />
            <BrandDescription>
              Expertos en soluciones integrales de ascensores y accesibilidad.
              Certificados Ley 20.296 MINVU. Comprometidos con la dignidad y
              autonomía de cada persona.
            </BrandDescription>
          </BrandCol>

          {/* Column 2 — Productos */}
          <Col>
            <ColHeading>Productos</ColHeading>
            <Link href="/catalogo/salvaescaleras" passHref>
              <NavLink>Salvaescaleras rectos</NavLink>
            </Link>
            <Link href="/catalogo" passHref>
              <NavLink>Plataformas elevadoras</NavLink>
            </Link>
            <Link href="/catalogo" passHref>
              <NavLink>Ascensores</NavLink>
            </Link>
            <Link href="/catalogo" passHref>
              <NavLink>Modernización</NavLink>
            </Link>
            <Link href="/catalogo" passHref>
              <BoldLink>Ver catálogo completo</BoldLink>
            </Link>
          </Col>

          {/* Column 3 — Empresa */}
          <Col>
            <ColHeading>Empresa</ColHeading>
            <Link href="/nosotros" passHref>
              <NavLink>Nosotros</NavLink>
            </Link>
            <Link href="/testimonios" passHref>
              <NavLink>Testimonios</NavLink>
            </Link>
            <Link href="/guia-de-compra" passHref>
              <NavLink>Guía de compra</NavLink>
            </Link>
            <Link href="#" passHref>
              <NavLink>Certificaciones</NavLink>
            </Link>
            <Link href="#" passHref>
              <NavLink>Blog</NavLink>
            </Link>
          </Col>

          {/* Column 4 — Contacto */}
          <Col>
            <ColHeading>Contacto</ColHeading>
            <ContactItem>
              📍 Marchant Pereira 150, of. 1002, Providencia
            </ContactItem>
            <ContactItem>✉️ contacto@melevadores.cl</ContactItem>
            <ContactItem>📞 +56 9 5938 2761</ContactItem>
            <ContactItem>🕑 Lun–Vie 9:00–18:30</ContactItem>
          </Col>
        </Grid>
      </Inner>

      {/* Legal bar */}
      <LegalBar>
        <LegalInner>
          <LegalText>
            M-Elevadores © 2026 SpA. Todos los derechos reservados. Certificado
            Ley 20.296 MINVU.
          </LegalText>
          <LegalLinks>
            <Link href="/politica-de-privacidad" passHref>
              <LegalLink>Política de privacidad</LegalLink>
            </Link>
            <Link href="/terminos-de-uso" passHref>
              <LegalLink>Términos de uso</LegalLink>
            </Link>
          </LegalLinks>
        </LegalInner>
      </LegalBar>
    </FooterWrapper>
  );
};

export default Footer;
