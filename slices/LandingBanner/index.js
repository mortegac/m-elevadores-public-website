import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { useForm } from "react-hook-form";
import {
  Section,
  Title,
  Form,
  InputWrapper,
  ButtonWrapper,
  KeywordWrapper,
  Keyword,
  TextArea,
} from "./style";
import { asText } from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.LandingBannerSlice} LandingBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingBannerSlice>} LandingBannerProps
 * @param {LandingBannerProps} props
 */


const LandingBanner = ({ slice }) => {
  const { title, subtitle, formtitle, formsubtitle, bgimage, ctatext } =
    slice.primary;
  const items = slice.items || [];
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
    const { name, phone, email, message } = data;

    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre:   name,
          email:    email,
          telefono: phone,
          producto: currentLandingPage || "Landing page",
          mensaje:  message || "",
        }),
      });
      const result = await res.json();
      console.log("[LandingBanner] API response:", result);

      if (res.ok && result.ok) {
        setStatus({ sent: true, success: true, message: "¡Gracias! Te contactaremos pronto." });
        reset();
      } else {
        setStatus({ sent: true, success: false, message: result.message || "Ocurrió un error. Intenta nuevamente." });
        console.error("[LandingBanner] API error:", result.message);
      }
    } catch (err) {
      console.error("[LandingBanner] Network error:", err.message);
      setStatus({ sent: true, success: false, message: "Ocurrió un error al enviar el formulario. Intenta nuevamente." });
    }
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

          <InputWrapper>
            <label htmlFor="message">Mensaje (opcional)</label>
            <TextArea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              {...register("message")}
              rows={4}
            ></TextArea>
            <span className="error-message hidden">&nbsp;</span>
          </InputWrapper>

          <ButtonWrapper>
            <button type="submit">{asText(ctatext) || "Enviar"}</button>
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
