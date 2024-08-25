import React, { useState } from "react";
import { Col, Container, Form, Row, Card } from "react-bootstrap";
import "../css/Card.css";

const CardC = () => {
  const [precios, setPrecios] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setPrecios({...precios, [name]: value})
  }
  return (
    <Container>
      <Form className="d-flex flex-column flex-lg-row justify-content-around bg-secondary p-3 rounded mb-5">
        <Form.Group>
          <Form.Label>Precio Harina (1Kg)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0} name="harina" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio levadura (sobre)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0} name="levadura" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio semillas (1Kg)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0} name="semillas" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio Aceite de oliva (1Lt)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0} name="aceite" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio bolsas (100u)</Form.Label>
          <Form.Control type="number" min={0} defaultValue={0} name="bolsas" onChange={handleChange}></Form.Control>
        </Form.Group>
      </Form>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-2">
            <Card.Body className="text-center">
              <Card.Title>Pan clásico</Card.Title>
              <Card.Text className="fs-4">$</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-2">
            <Card.Body className="text-center">
              <Card.Title>Pan con semillas</Card.Title>
              <Card.Text className="fs-4">$</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-2">
            <Card.Body className="text-center">
              <Card.Title>Focaccia</Card.Title>
              <Card.Text className="fs-4">$</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardC;
