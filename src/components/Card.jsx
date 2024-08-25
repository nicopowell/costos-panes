import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../css/Card.css";

const Card = () => {
  return (
    <Container>
      <Form className="d-flex flex-column flex-lg-row justify-content-evenly">
        <Form.Group>
          <Form.Label>Precio Harina (1Kg)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio levadura (sobre)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio Aceite de oliva (1Lt)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio bolsas (100u)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0}></Form.Control>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Card;
