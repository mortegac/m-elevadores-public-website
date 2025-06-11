import { PrismicRichText } from "@prismicio/react";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import { useState } from "react";
import {
  Button,
  ButtonWrapper,
  Form,
  InputWrapper,
  Section,
  Subtitle,
  Title,
} from "./style";

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

    const templateParams = {
      from_name: data.name,
      to_name: data.name,
      to_phone: data.phone,
      to_email: "",
      reply_to: "",
      service: "",
      budget: "",
      message: `Nuevo contacto desde el formulario "Nosotros te contactamos".\n\nNombre: ${data.name}\nTeléfono: ${data.phone}`,
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
