import { PrismicRichText } from "@prismicio/react";
import { useForm } from "react-hook-form";
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

const getLandingOrigen = (path) => {
  if (path.includes("accesibilidad-residencial")) return "Accesibilidad";
  if (path.includes("mantencion-reparacion"))     return "Instalación";
  if (path.includes("instalacion-ascensores"))    return "instalacion-ascensores-montacargas";
  return "WEB-FORM";
};

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

  const onSubmit = async (data) => {
    setStatus({ sent: true, success: null, message: "Enviando..." });
    const { name, phone, email } = data;

    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre:   name,
          email:    email,
          telefono: phone,
          producto: currentLandingPage || "Solicitud de llamada",
          mensaje:  `Solicitud de contacto desde: ${currentLandingPage}`,
          origen:   getLandingOrigen(router.asPath),
        }),
      });

      const result = await res.json();
      console.log("[LandingCallback] API response:", result);

      if (res.ok && result.ok) {
        setStatus({ sent: true, success: true, message: "¡Gracias! Te contactaremos pronto." });
        reset();
      } else {
        setStatus({ sent: true, success: false, message: result.message || "Ocurrió un error. Intenta nuevamente." });
        console.error("[LandingCallback] API error:", result.message);
      }
    } catch (err) {
      console.error("[LandingCallback] Network error:", err.message);
      setStatus({ sent: true, success: false, message: "Ocurrió un error al enviar. Intenta nuevamente." });
    }
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
