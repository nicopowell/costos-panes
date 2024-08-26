import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import "../css/Card.css";

const CardC = () => {
  const [precios, setPrecios] = useState({});
  const [costos, setCostos] = useState({
    clasico: 0,
    conSemillas: 0,
    focaccia: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrecios({ ...precios, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCostos({
      clasico: Math.round((precios.harina / 2) + (precios.levadura/4) + (precios.bolsas * 0.01)),
      semillas: Math.round((precios.harina / 2) + (precios.levadura/4) + (precios.semillas*0.04) + (precios.bolsas * 0.01)),
      focaccia: Math.round((precios.harina * 0.56) + (precios.levadura/4) + (precios.aceite*0.05) + (precios.bolsas * 0.01)),
    });
  };

  return (
    <Container>
      <Form className="rounded p-3 mb-5" onSubmit={handleSubmit}>
        <Container className="d-flex flex-column flex-lg-row justify-content-between mb-3">
          <Form.Group>
            <Form.Label className="fw-bold text-light">Precio Harina (1Kg)</Form.Label>
            <Form.Control
              type="number"
              min={0}
              defaultValue={0}
              name="harina"
              required
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group  className="fw-bold text-light">
            <Form.Label>Precio levadura (sobre)</Form.Label>
            <Form.Control
              type="number"
              min={0}
              defaultValue={0}
              name="levadura"
              required
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group  className="fw-bold text-light">
            <Form.Label>Precio semillas (1Kg)</Form.Label>
            <Form.Control
              type="number"
              min={0}
              defaultValue={0}
              name="semillas"
              required
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group  className="fw-bold text-light">
            <Form.Label>Precio Aceite de oliva (1Lt)</Form.Label>
            <Form.Control
              type="number"
              min={0}
              defaultValue={0}
              name="aceite"
              required
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group  className="fw-bold text-light">
            <Form.Label>Precio bolsas (100u)</Form.Label>
            <Form.Control
              type="number"
              min={0}
              defaultValue={0}
              name="bolsas"
              required
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
        </Container>

        <Button variant="warning" type="submit" className="w-100 py-3 fw-bold">
          Calcular
        </Button>
      </Form>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-2">
            <Card.Body className="text-center cardsBody">
              <Card.Title>Pan clásico</Card.Title>
              <Card.Text className="fs-4">${costos.clasico}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-2">
            <Card.Body className="text-center cardsBody">
              <Card.Title>Pan con semillas</Card.Title>
              <Card.Text className="fs-4">${costos.semillas}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-2">
            <Card.Body className="text-center cardsBody">
              <Card.Title>Focaccia</Card.Title>
              <Card.Text className="fs-4">${costos.focaccia}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardC;
