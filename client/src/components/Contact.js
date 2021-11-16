import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
const Contact = () => {
  const [sent, setsent] = useState(false);

  const [text, settext] = useState("");

  const handleSend = async () => {
    setsent(true);
    try {
      await axios.post("http://localhost:5000/contact", text);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <img
        src="https://us.123rf.com/450wm/artursz/artursz1808/artursz180808277/106616584-handwriting-text-get-in-touch-concept-meaning-stay-in-contact-constant-communication-interaction-bon.jpg?ver=6"
        width="80%"
        alt="html"
        className="html"
      />
      {!sent ? (
        <Form className="form" onSubmit={handleSend}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                settext({ ...text, name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              //   onChange={(e) => {
              //     settext({ ...text, email: e.target.value });
              //   }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"

              // onChange={(e) => {
              //   settext({ ...text, phone: e.target.value });
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            />
          </Form.Group>
          <button
            type="submit"
            // onClick={() => {
            //   handleSend();
            // }}
          >
            Send
          </button>
        </Form>
      ) : (
        Swal.fire({
          title: "Sweet!",
          text: "Message is sent !!",
          imageUrl: "https://unsplash.it/400/200",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        })
      )}
    </div>
  );
};

export default Contact;
