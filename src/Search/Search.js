import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Search({ onSearchUpdate }) {
  const [city, setCity] = useState("Seattle");

  function handleOnChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchUpdate(e.target[0].value);
  };

  useEffect(() => {
    if (city.length) {
      onSearchUpdate(city);
    }
  }, []);

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3">
        <Row className="justify-content-center">
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Search City..."
              value={city}
              onChange={handleOnChange}
            />
          </Col>
          <Col md="auto">
            <Button variant="primary" type="submit" value="Search">
              Search
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}
