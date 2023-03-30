import React from "react";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

const VistaPrincipal = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Destino" />
              </Form.Group>
            </Form>
          </div>
          <div className="col-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="datetime-local" placeholder="Fechas" />
              </Form.Group>
            </Form>
          </div>
          <div className="col-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Huspedes" />
              </Form.Group>
            </Form>
          </div>
          <br />
          <button className="btn btn-danger">Buscar</button>
        </div>
        <br /> <br /> <br />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="hotel1.jpg"
              alt="First slide"
              width={50}
              height={600}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="hotel2.jpg"
              alt="Second slide"
              width={50}
              height={600}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="hotel3.jpg"
              alt="Third slide"
              width={50}
              height={600}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default VistaPrincipal;
