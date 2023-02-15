import React from "react";
import { Grid, Container, Icon, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div style={{ color: "gray", textDecoration: "none" }}>
        <Container>
          <Grid columns={4} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment>
                  -----------------------------------------------
                  <h3>
                    <span style={{ color: "black" }}>
                      <strong> Contact information </strong>
                    </span>

                    <h4>
                      E-76, Jain Rd, Block E, Sector 41, Noida Uttar Pradesh
                      201303
                    </h4>
                    <h4>
                      <Icon size="large" color="blue" name="mobile alternate" />
                      +91-1204213426
                    </h4>
                    <h4>
                      <Icon size="large" color="blue" name="mobile alternate" />
                      +91-9810384836
                    </h4>
                    <h4 style={{ fontSize: "14px" }}>
                      <Icon size="large" color="red" name="mail" />
                      drkhushbuintimus@gmail.com
                    </h4>
                  </h3>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  -----------------------------------------------
                  <h3>
                    <span style={{ color: "black" }}>
                      <strong> Dentistry </strong>
                    </span>

                    {/* <Segment> */}
                    <h5>
                      <a href="#">Dental Implants</a>
                    </h5>
                    <h5>
                      <a href="#">Pediatric/Children Dentistry</a>
                    </h5>
                    <h5>
                      <a href="#">Oral Surgery</a>
                    </h5>
                    <h5>
                      <a href="#">Maxillofacial Prosthetics</a>
                    </h5>
                    <h5>
                      <a href="#">Full Mouth Rehabilitation</a>
                    </h5>
                    {/* </Segment> */}
                  </h3>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  -----------------------------------------------
                  <h3>
                    <span style={{ color: "black" }}>
                      {" "}
                      <strong>Clinic hours </strong>
                    </span>

                    <h4>
                      <Icon size="large" color="blue" name=" clock outline" />
                      Monday To Saturday : 10:00AM - 7:30PM
                    </h4>
                    <h4>
                      <Icon size="large" color="blue" name=" clock outline" />
                      Sunday : Closed
                    </h4>
                  </h3>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  -----------------------------------------------
                  <h3>
                    <span style={{ color: "black" }}>
                      <strong>Get in Touch </strong>
                    </span>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448522.0240746324!2d77.363394!3d28.567411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf92efa98a1e603a3!2sIntimus%20Healthcare!5e0!3m2!1sen!2sin!4v1676304791523!5m2!1sen!2sin"
                      // width="270"
                      // height="292"
                      // marginTop="20px"
                      width="239"
                      height="239"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </h3>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>

      <div
        style={{
          marginTop: "190px",
          paddingBottom: "120px",
          textAlign: "center",
          color: "grey",
        }}
      >
        <h4>© 2023 Intimus Health Care. All Rights Reserved.</h4>
      </div>
    </>
  );
};

export default Footer;
