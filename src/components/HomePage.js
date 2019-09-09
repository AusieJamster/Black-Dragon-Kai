import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* import CustomCarousel from "./common/CustomCarousel"; */
import Jumbotron from "react-bootstrap/Jumbotron";

function HomePage() {
  /* const ABOUTUS = [
    "images/slider/00_slider.jpg",
    "images/slider/01_slider.jpg",
    "images/slider/02_slider.jpg",
    "images/slider/03_slider.jpg",
    "images/slider/04_slider.jpg",
    "images/slider/05_slider.jpg",
    "images/slider/06_slider.jpg",
    "images/slider/07_slider.jpg",
    "images/slider/08_slider.jpg",
    "images/slider/09_slider.jpg"
  ]; */

  return (
    <>
      <Jumbotron>
        <Container style={{ height: "100%", color: "white" }}>
          <div className="row">
            <div className="col-12 col-lg-10 justify-content-center">
              <h1 className="text-center text-sm-left d-block d-sm-inline">
                Black Dragon Kai
              </h1>
              <p className="text-center text-sm-left mt-4">
                Black Dragon Kai has been offering Martial Arts instruction for
                all ages since 1993, producing champions in life as well as in
                the Martial Arts. Our programs teach both modern and practical
                self defence as well as cutting edge combat sports in a positive
                and safe environment.
              </p>
              <a
                className="btn btn-primary d-block d-sm-none mx-auto"
                style={{ width: "150px" }}
                href="tel:1800111936"
              >
                Call Now
              </a>
            </div>
            <div className="col-2">
              <img
                className="d-none d-lg-block"
                src="images/bdklogo.png"
                alt="logo"
              ></img>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Container className="mb-5">
        <Row>
          <Col>
            <Row>
              <Col>Hello</Col>
            </Row>
            <Row>
              <Col>Hello</Col>
            </Row>
            <Row>
              <Col>Hello</Col>
            </Row>
          </Col>
          <Col md="auto" className="d-flex justify-content-center">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/blackdragonkai/"
              data-tabs="timeline"
              data-height="800"
              data-width="340"
              data-small-header="false"
              data-adapt-container-width="false"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/blackdragonkai/"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/blackdragonkai/">
                  Black Dragon Kai Martial Arts
                </a>
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
      {/*<CustomCarousel paths={ABOUTUS} />*/}
    </>
  );
}

export default HomePage;
