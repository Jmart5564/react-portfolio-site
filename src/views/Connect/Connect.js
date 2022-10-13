import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import styled from 'styled-components';

export default function Connect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_123nfvi', 'template_lrkbu8w', form.current, 'fgzW0Ll-D-EWG9ESn')
      .then((result) => {
        e.target.reset();
        // eslint-disable-next-line no-console
        console.log(result.text);
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      });
  };


  return (
   
    <StyledContactForm>
      <h1>Send me a message</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    
  );
}

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-items: center;
  text-align: center;
  form {
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    input {
      width: 400px;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;