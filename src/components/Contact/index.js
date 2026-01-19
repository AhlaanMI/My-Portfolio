import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Styled Components
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      1200px 600px at 10% 10%,
      rgba(124, 58, 237, 0.08),
      transparent 60%
    ),
    radial-gradient(
      900px 500px at 90% 0%,
      rgba(14, 165, 233, 0.08),
      transparent 55%
    ),
    linear-gradient(180deg, #f8fafc 0%, #f4f5fb 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px 300px at 70% 70%,
      rgba(99, 102, 241, 0.08),
      transparent 60%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      rgba(17, 24, 39, 0.04) 1px,
      transparent 1px
    );
    background-size: 36px 36px;
    opacity: 0.15;
    pointer-events: none;
  }

  @media (prefers-color-scheme: dark) {
    background:
      radial-gradient(
        1200px 600px at 10% 10%,
        rgba(124, 58, 237, 0.18),
        transparent 60%
      ),
      radial-gradient(
        900px 500px at 90% 0%,
        rgba(14, 165, 233, 0.18),
        transparent 55%
      ),
      linear-gradient(180deg, #0b0f1a 0%, #0f1222 100%);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Eyebrow = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7c3aed;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  line-height: 1.2;
  font-weight: 700;
  color: #111827;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #f9fafb;
  }
`;

const Desc = styled.p`
  font-size: 1.05rem;
  color: #4b5563;
  max-width: 520px;

  @media (prefers-color-scheme: dark) {
    color: #cbd5f5;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #111827;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #7c3aed;
  }

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: #111827;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 20px rgba(17, 24, 39, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(17, 24, 39, 0.12);
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(17, 24, 39, 0.6);
    border-color: rgba(255, 255, 255, 0.12);
    color: #f9fafb;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 12px;
  background: #e9f7ef;
  color: #1f7a3f;
  font-weight: 600;
  border: 1px solid #d1f3dd;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(31, 122, 63, 0.15);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 12px 30px rgba(17, 24, 39, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (prefers-color-scheme: dark) {
    background: rgba(17, 24, 39, 0.65);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

const FormTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 6px;

  @media (prefers-color-scheme: dark) {
    color: #f9fafb;
  }
`;

const FormDesc = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 18px;

  @media (prefers-color-scheme: dark) {
    color: #cbd5f5;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #374151;
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
  color: #111827;
  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(17, 24, 39, 0.7);
    border-color: rgba(255, 255, 255, 0.12);
    color: #f9fafb;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 120px;
  background: rgba(255, 255, 255, 0.9);
  color: #111827;
  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(17, 24, 39, 0.7);
    border-color: rgba(255, 255, 255, 0.12);
    color: #f9fafb;
  }
`;

const SubmitButton = styled.button`
  background: #111827;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(17, 24, 39, 0.18);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (prefers-color-scheme: dark) {
    background: #f9fafb;
    color: #111827;
  }
`;

const HelperText = styled.p`
  font-size: 0.85rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #cbd5f5;
  }
`;

const FloatingWhatsApp = styled.a`
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: #25d366;
  color: #ffffff;
  display: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.35);
  z-index: 1000;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const Contact = () => {
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isSending, setIsSending] = React.useState(false);
  const form = useRef();

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const whatsappNumber = "94777326274";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Use EmailJS to send the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      setSnackbar({
        open: true,
        message:
          "Email service not configured. Add EmailJS keys to your .env file.",
        severity: "error",
      });
      return;
    }
    setIsSending(true);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        form.current.reset();
        setIsSending(false);
      },
      (error) => {
        setSnackbar({
          open: true,
          message: "Failed to send. Please try again.",
          severity: "error",
        });
        setIsSending(false);
      },
    );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Eyebrow>Contact</Eyebrow>
          <Title>Let’s build something exceptional together.</Title>
          <Desc>
            Reach out for collaborations, freelance opportunities, or product
            partnerships. I respond quickly and keep communication clear and
            professional.
          </Desc>
          <InfoList>
            <InfoItem href="mailto:mohamedahlan58@gmail.com">
              <FaEnvelope /> mohamedahlan58@gmail.com
            </InfoItem>
            <InfoItem href={whatsappLink} target="_blank" rel="noreferrer">
              <FaWhatsapp /> +94 77 732 6274
            </InfoItem>
          </InfoList>
          <SocialRow>
            <SocialLink
              href="https://linkedin.com/in/ahlaan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com/AhlaanMI"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
          </SocialRow>
          <WhatsAppButton href={whatsappLink} target="_blank" rel="noreferrer">
            <FaWhatsapp /> Chat on WhatsApp
          </WhatsAppButton>
        </Left>

        <Right>
          <Card>
            <FormTitle>Send a message</FormTitle>
            <FormDesc>
              Tell me about your project and I’ll get back within 24 hours.
            </FormDesc>
            <ContactForm ref={form} onSubmit={handleSubmit}>
              <Field>
                <Label htmlFor="from_name">Full name</Label>
                <Input
                  id="from_name"
                  name="from_name"
                  placeholder="Your name"
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="from_email">Email</Label>
                <Input
                  id="from_email"
                  type="email"
                  name="from_email"
                  placeholder="you@email.com"
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can I help?"
                  required
                />
              </Field>
              <SubmitButton type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send message"}
              </SubmitButton>
              <HelperText>
                By submitting, you agree to be contacted about your request.
              </HelperText>
            </ContactForm>
          </Card>
        </Right>
      </Container>

      <FloatingWhatsApp href={whatsappLink} target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </FloatingWhatsApp>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Section>
  );
};

export default Contact;
