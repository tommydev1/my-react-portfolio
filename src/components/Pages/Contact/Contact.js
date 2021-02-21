import React, { useState } from "react";
import {
  ContactContainer,
  Form,
  EmailNameWrapper,
  NameInput,
  EmailInput,
  TitleInput,
  MessageBox,
  SubmitButton,
  FormContainer,
  WorldImage,
} from "./ContactElements";

import world from "../../../img/world.svg";
import { pageAnimation } from "../../../animation";
import { motion } from "framer-motion";

const Contact = ({ isOpen }) => {
  const [status, setStatus] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <ContactContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      isOpen={isOpen}
    >
      <FormContainer>
        <motion.h1
          whileHover={{
            y: -10,
            color: "rgb(255,255,255)",
            transition: { duration: 0.2 },
          }}
        >
          Contact Me
        </motion.h1>
        <p>
          Are you interested in working with me? Any other Questions?
          <br /> Let me know!
        </p>
        <Form
          onSubmit={submitForm}
          action="https://formspree.io/f/maylzarb"
          method="POST"
        >
          <EmailNameWrapper>
            <NameInput placeholder="Name" type="text" name="name" />
            <EmailInput type="email" name="email" placeholder="Email" />
          </EmailNameWrapper>
          <TitleInput type="text" name="subject" placeholder="Subject" />
          <MessageBox name="message" placeholder="Message" />
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <SubmitButton>Send</SubmitButton>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </Form>
      </FormContainer>
      <WorldImage src={world} alt="world map" />
    </ContactContainer>
  );
};

export default Contact;
