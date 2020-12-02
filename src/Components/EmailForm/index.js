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
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      },
      function (error) {
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
    <div className="contact container rounded">
      <div className="row" />
      <h1 className="form-header">Contact Me Anytime.</h1>
      <hr />
      <div className="row forms">
        <div className="col-md-6 col-lg-7 col-xl-8">
          <p>
            Alternatively, feel free to email me from this convenient little
            box.
          </p>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="hidden"
                name="contact_number"
                value={contactNumber}
              />
              {errors.user_name && errors.user_name.type === "required" && (
                <div role="alert">
                  "Name" is required.
                  <br />
                </div>
              )}
              <input
                className="form-control"
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
                  "Email" is required.
                  <br />
                </div>
              )}
              <input
                className="form-control"
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
                  You must write a message to send.
                  <br />
                </div>
              )}
              <textarea
                className="form-control"
                name="message"
                rows="6"
                maxLength="1500"
                aria-invalid={errors.message ? "true" : "false"}
                ref={register({ required: true })}
                placeholder="Wow, Christian, I'd love to work together!"
              />
              <p className="message-chars-left">
                Characters left: {messageCharsLeft}
              </p>
              <br />
              <button type="submit" className="btn btn-success btn-lg">
                Send.
              </button>

              <p className="status-message">{statusMessage}</p>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-lg-5 col-xl-4" align="center">
          <div
            className="LI-profile-badge"
            data-version="v1"
            data-size="large"
            data-locale="en_US"
            data-type="vertical"
            data-theme="dark"
            data-vanity="christiantrowe"
          >
            <a
              className="LI-simple-link"
              href="https://www.linkedin.com/in/christiantrowe?trk=profile-badge"
            >
              Christian Rowe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
