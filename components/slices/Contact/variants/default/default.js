import React, { useState, useEffect, useRef, useReducer } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import emailjs, { init } from "emailjs-com";

import { SliceFactory } from "../../../../common/Containers";
import {
  PageContainer,
  ButtonContainer,
  SectionContainer,
  FormContainer,
} from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const SERVICE = "service_q11ht56";
const TEMPLATE = "template_wn0oacf";
init("qn8t4Q--1S8ntkmL4"); // Public Key

const Base = (slice) => {
  const { title, subtitle, email, message, name } = slice.primary;
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Página no encontrada 😭",
    text: "Parece que no podemos encontrar la página que estás buscando",
  });
  const [emailValue, setEmailValue] = useState("");

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

  const onSubmit = (data) => {
    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Espera por un momento ⌛",
      text: "Estamos enviando su solicitud.",
    });

    const templateParams = {
      from_name: data.firstname,
      to_email: data.email,
      to_phone: data.phone,
      to_name: data.firstname,
      message: data.message,
      reply_to: data.email,
      service: data.service,
      budget: data.budget,
    };

    emailjs
      .send(SERVICE, TEMPLATE, { ...templateParams })
      .then(
        // emailjs.send("service_1ufc0ju", "template_vk47fc7", templateParams).then(
        function (response) {
          setIsSentEmail({
            sentEmail: true,
            isFailure: false,
            title: "Gracias 🎉",
            text: "Nos pondremos en contacto lo antes posible.",
            response: response || "",
          });
        },
        function (error) {
          setIsSentEmail({
            sentEmail: true,
            isFailure: true,
            title: "Página no encontrada 😭",
            text: "Parece que no podemos encontrar la página que estás buscando",
            response: response || "",
          });
          console.log("FAILED...", error);
        }
      )
      .catch((err) =>
        setIsSentEmail({
          sentEmail: true,
          isFailure: true,
          title: "Página no encontrada 😭",
          text: "Parece que no podemos encontrar la página que estás buscando",
          response: response || "",
        })
      );
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
            <label htmlFor="phone">{name[0].text || "Teléfono"}</label>
            <input
              {...register("phone", {
                required: true,
                minLength: 12,
              })}
              type="text"
              name="phone"
              id="phone"
              className={errors.phone && "error"}
            />
            <span className="error">
              {errors.phone && "Por favor ingrese su teléfono"}
            </span>

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
