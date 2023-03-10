import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import blog1 from "../logos/banner/blog1.png";
import blog from "../logos/banner/blog.png";

const Aboutus = () => {
  const styles = {
    // marginTop: "30px",
    boxSizing: "border-box",
    color: "gray",

    fontFamily: " sans-serif",
    textAlign: "justify",
  };
  const style_width = {
    // width: "550px",
  };

  const mainheader = {
    // backgroundColor: "red",

    marginRight: "10px",
    width: "420px",
    height: "150px",
    textAlign: "center",
    marginTop: "72px",
    fontSize: "55px ",
    lineHeight: "1.0",
    fontFamily: "Source Sans Pro', sans-serif",
    // fontFamily: "Raleway' sans-serif",

    fontWeight: "200",
    fontWidth: "200",
    display: "block",
    boxSizing: "border-box",
    padding: "0",
    color: "#1783D3",
  };
  const titalheader = {
    marginTop: "70px",
    fontSize: "25px ",
    lineHeight: "1.0",
    fontFamily: "Raleway, sans-serif",
    display: "inline-block",
    padding: "0",
    color: "#1783D3",
  };
  return (
    <>
      <div>
        <Container>
          <img
            style={{
              height: "210px",
              width: "1150px",
            }}
            src={blog1}
            as="a"
            href="#"
          />
          <h2 className="tt" style={titalheader}>
            πΈππππππ π·πππππ π²πππ
          </h2>
          <Container style={style_width}>
            <p style={styles}>
              Welcome to Intimus Health Care, a state of the art practice that
              offers comprehensive dental care with an emphasis on Painless
              Cosmetic Dentistry and Dental Implants.
            </p>
            <p style={styles}>
              Dr. Khushbu Priyadarshiniβs dental institute is more than just a
              dental practice in Noida. Itβs rather a place where perfection
              meets passion, talent meets technology and quality meets savings.
            </p>

            <p style={styles}>
              It is our honour and privilege to serve you. We have focused on
              perfecting our practice to make the experience totally painfree
              and as enjoyable as it can be, while delivering the best dental
              health care possible.
            </p>

            <p style={styles}>
              Our clinic is spearheaded by Dr. PRIYADARSHINI and a team of
              highly committed professionals where you and your family will be
              treated with the utmost care and respect helping to ensure a
              rewarding and successful dental experience. From the moment you
              walk in the door, youβll find every aspect of the atmosphere and
              the service to be focused on your comfort and health. Enjoy the
              soothing music and a complimentary drink in the reception area.
            </p>
            <p style={styles}>
              Relax and pamper yourself during the visit. We also have stereo
              headsets and television monitors for your enjoyment. Your best
              interests are always our first priority. After all you are a
              valued and treasured guest.
            </p>
            <p style={styles}>
              The clinic itself highlights Dr. Priyadarshiniβs philosophy
              wherein the patientβs comfort is the utmost priority. βEverything
              right from the infrastructure, the soothing environment, latest
              state of the art machines, strict hygiene are all just necessary
              tools to make the patients comfortable and to give them the best.β
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                color: "gray",
                padding: "30px",
              }}
            >
              * * * *
            </p>
          </Container>
          <img
            style={{
              height: "500px",
              width: "1150px",
            }}
            src={blog}
            as="a"
            href="#"
          />
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              color: "gray",
              padding: "30px",
            }}
          >
            * * * *
          </p>
        </Container>
      </div>
    </>
  );
};

export default Aboutus;
