import React from "react";
import {
  Grid,
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Segment,
  Icon,
} from "semantic-ui-react";

import contactus from "./logos/images/contactus.webp";
const Contactus = () => {
  const genderOptions = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];
  

  return (
    <>
      <div>
        <div
          style={{ position: "relative", textAlign: "center", color: "black" }}
        >
          <img
            alt="logos"
            src={contactus}
            style={{ width: "100%", height: "270px" }}
          />
          <div style={{ position: "absolute", top: " 8px", left: "16px" , }}>
            <h1 style={{fontSize: "60px" }}>Contact Info </h1>
          </div>
        </div>
      </div>
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Container>
                <h1
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "40px",
                  }}
                >
                  <strong>Appointment</strong>
                </h1>
                <Segment
                  style={{ height: "590px", width: "490px", margin: "70px" }}
                >
                  <Form size="large" style={{ width: "450px" }}>
                    <Form.Group widths="equal">
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="First name"
                        placeholder="First name"
                      />
                      <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        label="Last name"
                        placeholder="Last name"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{
                          children: "Gender",
                          htmlFor: "form-select-control-gender",
                        }}
                        placeholder="Gender"
                        search
                        searchInput={{ id: "form-select-control-gender" }}
                      />
                      <Form.Field
                        id="form-input-control-error-email"
                        control={Input}
                        label="Email"
                        placeholder="joe@schmoe.com"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        type="date"
                        control={Input}
                        label=" Appointment Date"
                        placeholder="Date"
                      />
                      <Form.Field
                        type="phone"
                        control={Input}
                        label="Contact"
                        placeholder="Enter Your Contact"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        control={TextArea}
                        label="Message"
                        placeholder="Message"
                      />
                    </Form.Group>
                    <Form.Field
                      control={Button}
                      content="Submit"
                      label="Please check your form *"
                    />
                  </Form>
                </Segment>
              </Container>
            </Grid.Column>

            {/* **************************************************************************************** */}
            <Grid.Column width={8}>
              <Container>
                <h1
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "40px",
                  }}
                >
                  <strong>Enquiry </strong>
                </h1>
                <Segment
                  style={{ height: "590px", width: "490px", margin: "70px" }}
                >
                  <Form size="large" style={{ width: "450px" }}>
                    <Form.Field
                      id="form-input-control-first-name"
                      control={Input}
                      label="Full Name"
                      placeholder="Enter Your Full Name"
                    />
                    <Form.Field
                      id="form-input-control-first-name"
                      control={Input}
                      label="Email "
                      placeholder="Email Address"
                    />
                    <Form.Field
                      id="form-input-control-first-name"
                      control={Input}
                      label="Contact "
                      placeholder="Enter Your Contact"
                    />
                    <Form.Group widths="equal">
                      <Form.Field
                        control={TextArea}
                        label="Message"
                        placeholder="Message"
                      />
                    </Form.Group>
                    <Form.Field
                      control={Button}
                      content="Send"
                      label="Please check your form *"
                    />
                  </Form>
                </Segment>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div>
        <Container>
          <Grid columns={4} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <h3>
                  <strong> Contact information </strong>

                  <h4>
                    E-76, Jain Rd, Block E, Sector 41, Noida Uttar Pradesh
                    201303
                  </h4>
                  <h4>
                    <Icon size="large" color="blue" name="mobile alternate" />
                    1800-1800-1800
                  </h4>
                  <h4>
                    <Icon size="large" color="blue" name="mobile alternate" />
                    1800-1800-1800
                  </h4>
                  <h4>
                    <Icon size="large" color="red" name="mail" />
                    info@intimushealthcare.com
                  </h4>
                </h3>
              </Grid.Column>
              <Grid.Column>
                <h3>
                  <strong> Dentistry </strong>
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
              </Grid.Column>
              <Grid.Column textAlign="">
                <h3>
                  <strong>Nephrology </strong>
                  <h5>
                    <a href="#">Orthopaedic</a>
                  </h5>
                  <h5>
                    <a href="#">Dental Service</a>
                  </h5>
                  <h5>
                    <a href="#">Lung Diseases</a>
                  </h5>
                  <h5>
                    <a href="#">Heart Attact</a>
                  </h5>
                  <h5>
                    <a href="#">Sport Injury</a>
                  </h5>
                </h3>
              </Grid.Column>
              <Grid.Column>
                <h3>
                  <strong>Clinic hours </strong>

                  <h4>
                    <Icon size="large" color="blue" name=" clock outline" />
                    Monday To Saturday : 10:00AM - 7:30PM
                  </h4>
                  <h4>
                    <Icon size="large" color="blue" name=" clock outline" />
                    Sunday : Closed
                  </h4>
                </h3>
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

export default Contactus;
