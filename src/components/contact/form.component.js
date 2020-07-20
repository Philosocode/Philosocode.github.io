import React, { useState } from "react";
import Reaptcha from 'reaptcha';

import { useForm } from "../../hooks/use-form.hook";
import { useMobileChecker } from "../../hooks/use-mobile-checker.hook";
import FormGroup from "./form-group.component";

const Form = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const { name, email, message } = values;

  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [recaptchaValid, setRecaptchaValid] = useState(false);
  const [error, setError] = useState("");
  const isMobile = useMobileChecker();

  const recaptchaError = "ERROR: Please complete the reCAPTCHA.";

  function handleBlur(ev) {
    const inputName = ev.target.name;
    if (touched[inputName]) return;

    setTouched({
      ...touched,
      [inputName]: true
    });
  }

  function handleSubmit(ev) {
    if (!name || !email || !message) {
      ev.preventDefault();
    }

    else if (!recaptchaValid) {
      ev.preventDefault();
      setError(recaptchaError);
    }
  }

  function recaptchaLoaded() {
    setCaptchaLoaded(true);
  }

  function verifyRecaptcha() {
    setRecaptchaValid(true);
    setError("");
  }

  function expiredRecaptcha() {
    setRecaptchaValid(false);
    setError(recaptchaError);
  }

  return (
    <form 
      data-aos="fade-up"
      data-aos-offset={300}
      data-aos-delay={300}
      acceptCharset="UTF-8" 
      action="https://usebasin.com/f/62a47c131769"
      onSubmit={handleSubmit}
      name="contact" 
      className="c-form__container" 
      method="POST"
      autoComplete="off"
    >
      <FormGroup
        name="name"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Your name"
        touched={touched["name"]}
        value={name}
      />
      <FormGroup
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Your email"
        touched={touched["email"]}
        value={email}
      />

      <FormGroup
        name="message"
        type="textarea"
        placeholder="What do you need help with?"
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched["message"]}
        value={message}
      />
      
      <div className="c-form__group">
        <p className={`c-form__error ${error && "is-visible"}`}>{error}</p>
        {
          // Display an empty div until captcha loaded
          !captchaLoaded && <div className="c-form__empty-div"></div>
        }
        <Reaptcha
          sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
          className="c-form__recaptcha"
          onVerify={verifyRecaptcha}
          onError={expiredRecaptcha}
          onLoad={recaptchaLoaded}
          inject={false}
          size={ isMobile ? "compact" : "normal" }
          theme="dark"
        />
        
        <button className="c-button c-button--black c-form__submit" type="submit">SUBMIT</button>
      </div>
      
      <input type="hidden" name="hero_net"></input>
    </form>
  )
};

export default Form;