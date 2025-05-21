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
      to_phone: data.phone,
      message: `Nuevo contacto desde el formulario de landing. Nombre: ${data.name}, Teléfono: ${data.phone}`,
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
          <input type="text" {...register("name", { required: true })} />
          <span className={`error-message ${errors.name ? "visible" : ""}`}>
            Por favor ingresa tu nombre
          </span>
        </InputWrapper>

        <InputWrapper>
          <label>Teléfono</label>
          <input
            type="tel"
            {...register("phone", { required: true, minLength: 12 })}
          />
          <span className={`error-message ${errors.phone ? "visible" : ""}`}>
            Por favor ingresa tu teléfono
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
