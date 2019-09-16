import React from "react";
import { Link, NavLink } from "react-router-dom";
import FooterSocial from "./common/FooterSocial";
import Const from "../data/Const";

function Footer() {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-12">
            <h5>CONNECT WITH US</h5>
            <FooterSocial
              link="tel:1800111936"
              action="Call Now"
              socialName="1800 111 936"
            />
            <FooterSocial
              link="mailto:blackdragonkai@gmail.com"
              action="Connect"
              socialName="Email"
            />
            <FooterSocial
              link="https://www.facebook.com/blackdragonkai/"
              action="Find Us"
              socialName="Facebook"
            />
            <FooterSocial
              link="http://youtube.com/blackdragonkai"
              action="Watch Us"
              socialName="YouTube"
            />
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <h5>PROGRAMS</h5>
            <h6>Adult Programs</h6>
            <ul>
              <li>
                <NavLink to={Const.MODERN_MARTIAL_ARTS}>
                  Modern Martial Arts
                </NavLink>
              </li>
              <li>
                <NavLink to={Const.BRAZILIAN_JIU_JITSU}>
                  Brazilian jiu-jitsu
                </NavLink>
              </li>
              <li>
                <NavLink to={Const.SPORT_MMA}>Sport MMA</NavLink>
              </li>
              <li>
                <NavLink to={Const.KUDO_DAIDO_JUKU}>Kudo - Daido Juku</NavLink>
              </li>
              <li>
                <NavLink to={Const.COMPETITION_TRAINING}>
                  Competition Training
                </NavLink>
              </li>
              <li>
                <NavLink to={Const.WRESTLING}>Wrestling</NavLink>
              </li>
              <li>
                <NavLink to={Const.ADULT_CLASSES}>Adult Classes</NavLink>
              </li>
              <li>
                <NavLink to={Const.MUAY_THAI}>Muay Thai</NavLink>
              </li>
            </ul>
            <h6>Junior Programs</h6>
            <ul>
              <li>
                <NavLink to={Const.PRE_JUNIOR_DRAGONS}>
                  Pre Junior Dragons
                </NavLink>
              </li>
              <li>
                <NavLink to={Const.JUNIOR_DRAGONS}>Junior Dragons</NavLink>
              </li>
              <li>
                <NavLink to={Const.KIDS_KARATE}>Kids Karate</NavLink>
              </li>
              <li>
                <NavLink to={Const.KIDS_MUAY_THAI}>Kids Muay Thai</NavLink>
              </li>
              <li>
                <NavLink to={Const.KIDS_MMA}>Kids MMA</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <h5>LOCATIONS &amp; TIMETABLES</h5>
            <h6>Queensland, Australia</h6>
            <ul>
              <li>
                <NavLink to={Const.BEAUDESERT}>Beaudesert [HQ]</NavLink>
              </li>
              <li>
                <NavLink to={Const.BOONAH}>Boonah</NavLink>
              </li>
              <li>
                <NavLink to={Const.BRIBIE_ISLAND}>Bribie Island</NavLink>
              </li>
              <li>
                <NavLink to={Const.HELENSVALE}>Helensvale</NavLink>
              </li>
              <li>
                <NavLink to={Const.HEMMEANT}>Hemmeant</NavLink>
              </li>
              <li>
                <NavLink to={Const.JIMBOOMBA}>Jimboobma</NavLink>
              </li>
              <li>
                <NavLink to={Const.MIAMI}>Miami</NavLink>
              </li>
              <li>
                <NavLink to={Const.MT_TAMBORINE}>Mt Tamborine</NavLink>
              </li>
              <li>
                <NavLink to={Const.NERANG}>Nerang</NavLink>
              </li>
              <li>
                <NavLink to={Const.ROCKHAMPTON}>Rockhampton</NavLink>
              </li>
              <li>
                <NavLink to={Const.TAMROOKUM}>Tamrookum</NavLink>
              </li>
              <li>
                <NavLink to={Const.WYNNUM}>Wynnum</NavLink>
              </li>
              <li>
                <NavLink to={Const.YATALA}>Yatala</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <h5>ABOUT US</h5>
            <p style={{ marginBottom: "30px" }}>
              Black Dragon Kai has been offering Martial Arts instruction for
              all ages since 1993, producing champions in life as well as in the
              Martial Arts. Our programs teach both modern and practical self
              defence as well as cutting edge combat sports in a positive and
              safe environment.
            </p>
            <Link to="/">
              <img
                src="/images/bdklogo.png"
                alt="Black Dragon Kai"
                className="mx-auto"
                style={{
                  height: "120px",
                  display: "block"
                }}
              />
            </Link>
          </div>
        </div>
        <div className="text-center pt-4 pb-5">
          <p style={{ color: "gray", textAlign: "center" }}>
            Copyright 2019 Black Dragon Kai.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
