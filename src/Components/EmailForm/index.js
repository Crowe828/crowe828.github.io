import React from "react";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";
import "./style.css";

const EmailForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {errors.user_name && errors.user_name.type === "required" && (
          <div role="alert">
            Name is required
            <br />
          </div>
        )}
        <input
          type="text"
          name="user_name"
          maxLength="30"
          aria-invalid={errors.user_name ? "true" : "false"}
          ref={register({ required: true })}
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="user_email"
          ref={register}
          placeholder="Email"
        />
        <br />
        <textarea name="message" ref={register} placeholder="Message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default EmailForm;

//         "service_a9qchwf",
//         "template_r5n8c2l",
//         "user_hFEfDrP7mPGJTWuXupG14"
