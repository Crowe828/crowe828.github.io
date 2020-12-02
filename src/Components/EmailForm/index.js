import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import "./style.css";

init("user_hFEfDrP7mPGJTWuXupG14");

const EmailForm = () => {
  const [statusMessage, setStatusMessage] = useState("Message");
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const statusMessage = document.querySelector(".status-message");
    const form = document.querySelector("#contact-form");
    generateContactNumber();

    sendForm("default_service", "template_r5n8c2l", "#contact-form").then(
      function (response) {
        console.log("success", response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message-success";
        setTimeout(() => {
          statusMessage.className = "status-message success";
        }, 5000);
      },
      function (error) {
        console.log("Failed", error);
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    );
  };

  const message = watch("message") || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <div className="contact">
      <h1>Contact</h1>
      <p className="status-message">{statusMessage}</p>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="contact_number" value={contactNumber} />
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
        {errors.user_email && errors.user_email.type === "required" && (
          <div role="alert">
            Email is required
            <br />
          </div>
        )}
        <input
          type="email"
          name="user_email"
          maxLength="30"
          aria-invalid={errors.user_email ? "true" : "false"}
          ref={register({ required: true })}
          placeholder="Email"
        />
        <br />
        {errors.message && errors.message.type === "required" && (
          <div role="alert">
            Message is required
            <br />
          </div>
        )}
        <textarea
          name="message"
          maxLength="1500"
          aria-invalid={errors.message ? "true" : "false"}
          ref={register({ required: true })}
          placeholder="Message"
        />
        <br />
        <input type="submit" value="Send" />
        <p className="message-chars-left">{messageCharsLeft}</p>
      </form>
    </div>
  );
};

export default EmailForm;

//         "service_a9qchwf",
//         "template_r5n8c2l",
//         "user_hFEfDrP7mPGJTWuXupG14"
