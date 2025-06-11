import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import {
  Section,
  Title,
  Form,
  InputWrapper,
  ButtonWrapper,
  KeywordWrapper,
  Keyword,
} from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingBannerSlice} LandingBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingBannerSlice>} LandingBannerProps
 * @param {LandingBannerProps} props
 */

// EmailJS configuration
const SERVICE_ID = "service_q11ht56";
const TEMPLATE_ID = "template_wn0oacf";
const PUBLIC_KEY = "qn8t4Q--1S8ntkmL4";
init(PUBLIC_KEY);

const LandingBanner = ({ slice }) => {
  const { title, subtitle, formtitle, formsubtitle, bgimage } = slice.primary;
  const items = slice.items || [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState({
    sent: false,
    success: null,
    message: "",
  });

  const onSubmit = (data) => {
    setStatus({ sent: true, success: null, message: "Enviando..." });

    const { name, phone, email } = data;

    const templateParams = {
      from_name: name,
      to_phone: phone,
      to_email: email,
      message: `Nuevo contacto desde el formulario de landing. Nombre: ${name}, Teléfono: ${phone}, Email: ${email}`,
      service: "",
      budget: "",
      reply_to: email,
      to_name: name,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus({
          sent: true,
          success: true,
          message: "¡Gracias! Te contactaremos pronto.",
        });
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          sent: true,
          success: false,
          message:
            "Ocurrió un error al enviar el formulario. Intenta nuevamente.",
        });
      });
  };

  return (
    <Section id="banner" bgimage={bgimage.url}>
      <div>
        <Title>
          <PrismicRichText field={title} />
          <PrismicRichText field={subtitle} />
        </Title>
        <KeywordWrapper>
          {items.map((i, idx) => (
            <Keyword key={idx}>
              <img src={i.icon.url} alt={i.icon.alt} />
              <PrismicRichText field={i.keyword} />
            </Keyword>
          ))}
        </KeywordWrapper>
      </div>

      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "10px" }}>
            <PrismicRichText field={formtitle} />
            <PrismicRichText field={formsubtitle} />
          </div>

          <InputWrapper>
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Ej. Juan Pérez"
              {...register("name", { required: true })}
            />
            <span className={`error-message ${errors.name ? "visible" : ""}`}>
              Por favor ingresa tu nombre
            </span>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Ej. juan@email.com"
              {...register("email", {
                required: "Por favor ingresa tu email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Por favor ingresa un email válido",
                },
              })}
              className={errors.email ? "input-error" : ""}
            />
            <span
              className={`error-message ${errors.email ? "visible" : "hidden"}`}
            >
              {errors.email?.message || "\u00A0"}
            </span>
          </InputWrapper>

          <InputWrapper>
            <label>Teléfono</label>
            <input
              type="tel"
              placeholder="Ej. +521234567890"
              {...register("phone", {
                required: "Por favor ingresa tu teléfono",
                minLength: {
                  value: 7, // Incluye el "+" más al menos 6 dígitos
                  message:
                    "El número debe tener al menos 6 dígitos después del '+'",
                },
                maxLength: {
                  value: 13, // "+" más 12 dígitos
                  message:
                    "El número no puede tener más de 12 dígitos después del '+'",
                },
                pattern: {
                  value: /^\+\d+$/,
                  message: "Debe comenzar con '+' seguido solo de números",
                },
              })}
            />
            <span
              className={`error-message ${errors.phone ? "visible" : "hidden"}`}
            >
              {errors.phone?.message || " "}
            </span>
          </InputWrapper>

          <ButtonWrapper>
            <button type="submit">Enviar</button>
          </ButtonWrapper>
        </Form>
        {status.sent && (
          <p
            style={{ color: "white" }}
            className={status.success ? "success" : "error"}
          >
            {status.message}
          </p>
        )}
      </div>
    </Section>
  );
};

export default LandingBanner;
