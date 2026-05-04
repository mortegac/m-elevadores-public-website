import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import { SliceFactory } from "../../../../common/Containers";
import {
  PageContainer,
  ButtonContainer,
  SectionContainer,
  FormContainer,
} from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";


const Base = (slice) => {
  const { title, subtitle, email, message, name } = slice.primary;
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Página no encontrada 😭",
    text: "Parece que no podemos encontrar la página que estás buscando",
  });
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // Observar el valor del select de servicio
  const selectedService = watch("service");

  const onSubmit = async (data) => {
    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Espera por un momento ⌛",
      text: "Estamos enviando su solicitud.",
    });

    if (phoneValue && !isValidPhoneNumber(phoneValue)) {
      console.warn("[Contact] Invalid phone number:", phoneValue);
    }

    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre:   data.firstname,
          email:    data.email,
          telefono: phoneValue || data.phone || "",
          producto: data.service || "No especificado",
          mensaje:  data.message || "",
        }),
      });

      const result = await res.json();
      console.log("[Contact] API response:", result);

      if (res.ok && result.ok) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: false,
          title: "Gracias 🎉",
          text: "Nos pondremos en contacto lo antes posible.",
        });
        setPhoneValue("");
      } else {
        setIsSentEmail({
          sentEmail: true,
          isFailure: true,
          title: "Error al enviar 😭",
          text: result.message || "No pudimos enviar su solicitud. Intente de nuevo.",
        });
        console.error("[Contact] API error:", result.message);
      }
    } catch (err) {
      console.error("[Contact] Network error:", err.message);
      setIsSentEmail({
        sentEmail: true,
        isFailure: true,
        title: "Error de conexión 😭",
        text: "No pudimos conectarnos. Por favor intente más tarde.",
      });
    }
  };

  const emailValidation = (e, errors) => {
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        e.target.value
      );
    setEmailValue(e.target.value);
    if (emailPattern) {
      delete errors?.email;
    } else {
    }
  };

  return (
    <PageContainer bgColor={"white"}>
      {isSentEmail.sentEmail ? (
        <>
          <SectionContainer>
            <h2>{isSentEmail.title}</h2>
            <p> {isSentEmail.text}</p>
            <Link key={`top-nav-contactButton`} href={"/"} passHref prefetch>
              <ButtonContainer fullwidth={true}>
                {"Ir al Inicio"}
              </ButtonContainer>
            </Link>
          </SectionContainer>
        </>
      ) : (
        <SectionContainer>
          {/* {console.log('>>>>contact>>>', slice)} */}

          <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
            <h2>{(title[0]?.text && title[0]?.text) || "Contactanos"}</h2>
            <p>
              {(subtitle[0]?.text && subtitle[0]?.text) ||
                "Cuéntenos sobre usted y lo conectaremos con nuestros expertos para responder cualquier pregunta que tenga."}
            </p>

            {/* --------  NAME --------- */}
            <label htmlFor="firstname">{name[0].text || "Nombre"}</label>
            <input
              {...register("firstname", {
                required: true,
                minLength: 2,
              })}
              type="text"
              name="firstname"
              id="firstname"
              className={errors.firstname && "error"}
            />
            <span className="error">
              {errors.firstname && "Por favor ingrese su nombre"}
            </span>

            {/* --------  EMAIl --------- */}
            <label htmlFor="email">{email[0].text || "Email"}</label>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                minLenght: {
                  value: 2,
                },
              })}
              type="email"
              name="email"
              id="email"
              value={emailValue}
              onChange={(e) => emailValidation(e, errors)}
              className={errors.email && "error"}
            />
            <span className="error">
              {errors.email && "Por favor ingrese su email"}
            </span>

            {/* --------  PHONE --------- */}
            <div>
              <label htmlFor="cotizacion-contact-phone">
                {name[0].text || "Teléfono"}
              </label>
              <PhoneInput
                id="cotizacion-contact-phone"
                defaultCountry="CL"
                value={phoneValue}
                onChange={(value) => {
                  setPhoneValue(value || "");
                  setValue("phone", value || "");
                }}
                placeholder="+56 9 1234 5678"
                international
                countryCallingCodeEditable={false}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  height: "48px",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "0 14px",
                  background: "#ffffff",
                  boxSizing: "border-box",
                }}
              />
              {errors.phone && <span className="error-msg">Por favor ingrese su teléfono válido</span>}
            </div>

            {/* --------  SERVICE --------- */}
            <label htmlFor="service">
              {name[0].text || "Servicio a cotizar"}
            </label>
            <select
              {...register("service", {
                required: true,
                minLength: 1,
              })}
              id="service"
              name="service"
              className={`dropdown ${errors.service && "error"}`}
            >
              <option value="Mantención">Mantención</option>
              <option value="Instalación">Instalación</option>
              <option value="Reparación">Reparación</option>
            </select>
            <span className="error">
              {errors.service && "Por favor ingrese el servicio a cotizar"}
            </span>

            {/* --------  amount --------- */}
            {selectedService === "Instalación" && (
              <>
                <label htmlFor="budget">{name[0].text || "Presupuesto"}</label>
                <select
                  {...register("budget", {
                    required: selectedService === "Instalación",
                    minLength: 1,
                  })}
                  id="budget"
                  name="budget"
                  className={`dropdown ${errors.budget && "error"}`}
                >
                  <option value="">Seleccione un presupuesto</option>
                  <option value="$5.000.000 - $10.000.000">
                    $5.000.000 - $10.000.000
                  </option>
                  <option value="$10.000.000 - $20.000.000">
                    $10.000.000 - $20.000.000
                  </option>
                  <option value="Más de $20.000.000">Más de $20.000.000</option>
                </select>
                <span className="error">
                  {errors.budget && "Por favor seleccione un presupuesto"}
                </span>
              </>
            )}

            {/* --------  MESSAGE --------- */}
            <label htmlFor="message">
              {message[0].text || "En que podemos ayudarlo?"}
            </label>
            <textarea
              {...register("message", {
                required: true,
                minLength: 5,
              })}
              rows="4"
              cols="50"
              type="text"
              name="message"
              defaultValue=""
              id="message"
              className={errors.message && "error"}
            />
            <span className="error">
              {errors.message && "Por favor ingrese su inquietud"}
            </span>

            <input
              type="submit"
              name="Contact Us"
              value="Enviar"
              // value={contactCtaText[0].text || "Contact us"}
            />
          </FormContainer>
        </SectionContainer>
      )}
    </PageContainer>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#F4F4F4",
    },
  },
});
