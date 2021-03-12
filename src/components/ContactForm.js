import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  const submitEmail = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: {
        name: name,
        email: email,
        number: number,
        message: message,
      },
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Form
      className="contact-form-wrapper w-50"
      onSubmit={submitEmail}
      method="POST"
    >
      <Form.Label>
        Interested in our office spaces? <br /> Having any thoughts, doubts or
        questions? <br /> Let us know!
      </Form.Label>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          placeholder="Full name*"
          required
          onChange={onNameChange}
          value={name}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="E-mail address*"
          required
          onChange={onEmailChange}
          value={email}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          placeholder="Phone number"
          value={number}
          onChange={onNumberChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Message*"
          required
          onChange={onMessageChange}
          value={message}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check>
          <Form.Check.Label>
            <Form.Check.Input type="checkbox" required />I agree to{" "}
            <a href="">terms and conditions</a> regarding personal data
          </Form.Check.Label>
        </Form.Check>
      </Form.Group>
      <Button type="submit" className="btn dark-variant float-right">
        Send message
      </Button>
    </Form>
  );
};

export default ContactForm;
