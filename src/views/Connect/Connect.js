import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Connect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_123nfvi', 'template_lrkbu8w', form.current, 'fgzW0Ll-D-EWG9ESn')
      .then((result) => {
        e.target.reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}