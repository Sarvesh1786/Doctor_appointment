import React from "react";
import { Container, Grid } from "semantic-ui-react";

import Drpeofile from "../logos/banner/profile.png";
import machine from "../logos/banner/m1.jpg";

const Profile = () => {
  const styles = {
    marginTop: "30px",
    boxSizing: "border-box",
    color: "gray",

    fontFamily: " sans-serif",
    textAlign: "justify",
  };
  const style_width = {
    width: "550px",
  };

  const mainheader = {
    // backgroundColor: "gray",

    marginRight: "10px",
    width: "420px",
    height: "150px",
    textAlign: "center",
    marginTop: "72px",
    fontSize: "50px ",
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
    fontSize: "24px ",
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
          <Grid columns={2} padded>
            <Grid.Column>
              <h3 style={mainheader}> 𝐃𝐫.𝐊𝐡𝐮𝐬𝐡𝐛𝐮 𝐏𝐫𝐢𝐲𝐚𝐝𝐚𝐫𝐬𝐡𝐢𝐧𝐢</h3>
              <div style={{ marginLeft: "50px" }}>
                <img
                  style={{
                    borderRadius: "20px",
                    height: "410px",
                    width: "350px",
                  }}
                  src={Drpeofile}
                  as="a"
                  href="#"
                />
                <h3 style={{fontSize: "18px ", marginRight:"118px"}}>
                  Pedodontist, Implantologist, Laser Specialist & Dental Surgeon
                </h3>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <img
                  style={{
                    // borderRadius: "20px",
                    marginTop: "70px",
                    height: "330px",
                    width: "350px",
                  }}
                  src={machine}
                  as="a"
                  href="#"
                />
              </div>
            </Grid.Column>

            <Grid.Column>
              <h2 className="tt" style={titalheader}>
                Dr.Khushbu Priyadarshini
              </h2>
              <Container style={style_width}>
                <p style={styles}>
                  Dr. Khushbu Priyadarshini is a Pedodontist, implantologist,
                  surgeon and a person with a sublime touch. She follows the
                  latest research and integrates state of the art technology and
                  modern instruments into her practice She makes your dreaded
                  visit to the dentist a pleasure just by just being her assured
                  confident self. With her extensive training and indepth
                  experience she can sculpt a completely unique and a
                  beautifully looking smile for you. Over the years she has been
                  working with all kinds of patients and believes in giving
                  personal and individual attention to each patient.
                </p>
                <p style={styles}>
                  Dr. Khushbu Priyadarshini graduated from dental school in 2007
                  after which she went on to pursue her MDS (Master of Dental
                  Surgery) in PEDODONTICS & PREVENTIVE DENTISTRY from the
                  University of Health Sciences, West Bengal. Since the
                  completion of her masters, she has attended several advanced
                  courses in Implant & Cosmetic Dentistry. Apart from this she
                  has also taken advanced training in root canal treatment,
                  crown bridgework and laser dentistry. This makes her one of
                  the few dentists to be trained in various areas of dentistry.
                </p>

                <p style={styles}>
                  Dr. PRIYADARSHINI has special interest in ADVANCED DENTAL
                  TREATMENT with latest & trending treatment options . She has
                  cumulative experience of more than 15 years with a large
                  patient base in DELHI NCR AND ABROAD.
                </p>

                <p style={styles}>
                  Dr. Khushbu is also very popular with children who are
                  fascinated by her friendly and easy approach. Her pediatric
                  patients are a delight, and start from the age of 2 years
                  onwards. She has successfully been treating kids with
                  restorations, pulpotomies, extractions etc.
                </p>
                <p style={styles}>
                  She has already rehabilitated many patients by implanting the
                  teeth and giving them a fresh lease of lifestyle. Her patients
                  are not only the local residents of but from the various
                  embassies, visiting and resident foreigners. Her name has been
                  travelling far and wide on account of her very amicable and
                  patient style of working. Her work focuses primarily on
                  IMMEDIATE LOADING IMPLANT and COSMETIC Dentistry.
                </p>
                <h2 style={{ color: "#1783D3" }}>Strengths</h2>
                <ul style={styles}>
                  <li>
                    One of those few dentists in the Country to be trained in
                    various areas of dentistry.
                  </li>
                  <li>
                    A Pedodontist, implantologist, surgeon of high repute,
                    acclaim and recognition.
                  </li>
                  <li>Pediatric (child) dentist with high clinical prowess.</li>
                  <li>Dentist for special needs children.</li>
                  <li>
                    Comprehensive education in behaviour management,sedation and
                    anaesthesia techniques.
                  </li>
                  <li>Trained in advanced rotary single sitting root canal.</li>
                  <li>Trained in CPR.</li>
                </ul>
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
              <div></div>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Profile;
