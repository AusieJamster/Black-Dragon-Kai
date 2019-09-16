import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* import CustomCarousel from "./common/CustomCarousel"; */
import Jumbotron from "react-bootstrap/Jumbotron";
import InfoCard from "./common/InfoCard";
import Const from "../data/Const";

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
            <InfoCard
              header="Home of Champions"
              text="4 World Titles, 47 International Titles, 37 National Titles, 
              44 State Titles, 59 Regional Titles. Competing in Muay Thai, 
              Brazilian Jiu Jitsu, Boxing, Mixed Martial Arts, Judo, Full Contact 
              Karate, Kudo"
              img="images/home-of-champions.jpg"
              alt=""
              link="/"
            />
            <InfoCard
              header="Our Instructors"
              text="Our Black Dragon Kai Instructors have not only spent many
                  years devoted to training in Martial arts but they must also
                  go through a very extensive selection process to insure we
                  have only the best and most talented instructors in the
                  country. Once selected, they are put through an intense and
                  rigorous series of testing and government recognized training
                  courses to guarantee the highest quality of instruction. Once
                  a Black Dragon Kai Instructor is certified to teach our unique
                  and effective systems, they are then required to continue in
                  their martial arts and instructor education weekly, with
                  yearly goals to reach individually."
              img="images/instructors.jpg"
              alt="instructors in a lineup"
              link={Const.INSTRUCTORS}
            />
            <InfoCard
              header="Super Summer Deals"
              text="Black Dragon Kai Martial Arts is a full time Martial Arts 
              school based in Beaudesert, with a world class training centre 
              on Hart St in Beaudesert. Our Martial Arts programs teach modern 
              practical self defense as well as cutting edge combat sports 
              performance in a positive and safe environment. With 6 different 
              classes we have styles to suit everyone. No matter if its just 
              for fun &amp; fitness, self defense or to push yourself to compete 
              in combat sports."
              img="images/summer-deals.jpg"
              alt=""
              link={Const.INSTRUCTORS}
            />
          </Col>
          <Col md="auto" className="d-flex justify-content-center">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/blackdragonkai/"
              data-tabs="timeline"
              data-height="650"
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
