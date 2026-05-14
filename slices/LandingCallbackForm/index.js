import { PrismicRichText } from "@prismicio/react";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonWrapper,
  Form,
  InputWrapper,
  Section,
  Subtitle,
  Title,
} from "./style";
import { useRouter } from "next/router";

/**
 * @typedef {import("@prismicio/client").Content.LandingCallbackSlice} LandingCallbackSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingCallbackSlice>} LandingCallbackProps
 * @param { LandingCallbackProps }
 */

// EmailJS configuration
const SERVICE_ID = "service_q11ht56";
const TEMPLATE_ID = "template_wn0oacf";
const PUBLIC_KEY = "qn8t4Q--1S8ntkmL4";
init(PUBLIC_KEY);

const LandingCallbackForm = ({ slice }) => {
  const { title, description } = slice.primary;
  const router = useRouter();
  const [currentLandingPage, setCurrentLandingPage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLandingPage(`${window.location.origin}${router.asPath}`);
    }
  }, [router.asPath]);

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
      to_name: name,
      to_phone: phone,
      to_email: email,
      reply_to: email,
      service: "",
      budget: "",
      message: `Nuevo contacto desde el formulario "Nosotros te contactamos" en landing.

      📍 Página: ${currentLandingPage}
      🧑 Nombre: ${name}
      📧 Email: ${email}
      📱 Teléfono: ${phone}`,
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
    <Section>
      <Title>
        <PrismicRichText field={title} />
      </Title>
      <Subtitle>
        <PrismicRichText field={description} />
      </Subtitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ej. Juan Pérez"
            {...register("name", {
              required: "Por favor ingresa tu nombre",
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres",
              },
            })}
          />
          <span className={`error-message ${errors.name ? "visible" : ""}`}>
            {errors.name?.message || "\u00A0"}
          </span>
        </InputWrapper>

        <InputWrapper>
          <label>Email</label>
          <input
            type="email"
            placeholder="Ej. juan@email.com"
            {...register("email", {
              required: "Por favor ingresa tu email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Por favor ingresa un email válido",
              },
            })}
          />
          <span
            className={`error-message ${errors.email ? "visible" : "hidden"}`}
          >
            {errors.email?.message || " "}
          </span>
        </InputWrapper>

        <InputWrapper>
          <label>Teléfono</label>
          <input
            type="tel"
            placeholder="Ej. +56912345678"
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
          <Button type="submit">Enviar</Button>
          <div className="error-message">&nbsp;</div>
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
    </Section>
  );
};

export default LandingCallbackForm;
