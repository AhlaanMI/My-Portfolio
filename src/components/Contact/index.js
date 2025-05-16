import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

// Styled Components
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Gradient background similar to your button */
  ackground: #f5f5f5; /* Default light gray background */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(213, 199, 233); /* Updated to your requested color */
  padding: 32px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(23, 92, 230, 0.15);
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 24px;
  text-align: center;
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #222;
`;

const ContactInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
`;

const ContactInputMessage = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
`;

const ContactButton = styled.input`
  background: linear-gradient(225deg, #7b2ff2 0%, #f357a8 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  cursor: pointer;
  margin-top: 8px;
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  // Use EmailJS to send the form
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ag6be6s", // Your Service ID
        "template_fasqe0m", // Your Template ID
        form.current,
        "Lgbpbr4eCYwUhQV2s" // Your Public Key
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
