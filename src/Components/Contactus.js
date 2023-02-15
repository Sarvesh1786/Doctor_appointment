import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Grid,
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Segment,
} from "semantic-ui-react";
import Contact from "../logos/contacts/tag.png";

const Contactus = () => {
  const genderOptions = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];

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
  const initialstate = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    message: "",
    date: "",
  };
  const initialstate1 = {
    fname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [state, setState] = useState(initialstate);
  const [state1, setState1] = useState(initialstate1);

  // const dataform = useRef();

  const onChangemethod = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e, { name, value }) =>
    setState((prevState) => ({ ...prevState, [name]: value }));
  const onClickMethod = (e) => {
    console.log(state);
    e.preventDefault();
    // console.log( dataform.current)
    console.log(e.target);

    emailjs
      .sendForm(
        "service_vwfh2pj",
        "Health1_99cgj4s",
        e.target,
        "cVQ_yZxAn2LoDrZjP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setState(initialstate);
  };

  // *****************************************************************************
  const onChangemethod1 = (e) => {
    e.preventDefault();
    setState1((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onClickMethod1 = (e) => {
    console.log(state);
    e.preventDefault();
    // console.log( dataform.current)
    console.log(e.target);

    emailjs
      .sendForm(
        "service_vwfh2pj",
        "Health1_99cgj4s",
        e.target,
        "cVQ_yZxAn2LoDrZjP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setState(initialstate1);
  };

  const { fname, lname, email, phone, gender, message, date } = state;
  console.log(state);
  return (
    <>
      <div>
        <div>
          <img
            style={{
              // borderRadius: "20px",
              height: "125px",
              width: "1390px",
            }}
            src={Contact}
            as="a"
            href="#"
          />
          {/* <h3 style={mainheader}> 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐔𝐬</h3> */}
        </div>
        <div>
          <Container>
            <Grid columns={2} padded>
              {/* ******************************************************************************* */}
              <Grid.Column>
                {/* <div style={{ marginLeft: "50px" }}>
                <img
                  style={{
                    // borderRadius: "20px",
                    height: "330px",
                    width: "450px",
                    marginRight: "50px",
                  }}
                  src={imgg1}
                  as="a"
                  href="#"
                />
              </div> */}
                <h2 className="tt" style={titalheader}>
                  𝐀𝐩𝐩𝐨𝐢𝐧𝐭𝐦𝐞𝐧𝐭 𝐒𝐥𝐨𝐭
                </h2>
                <Container style={style_width}>
                  <p style={styles}>
                    If you need a doctor's appointment, you can book an
                    appointment slot, which will give you the appointment date
                    or doctor's name, so that you can get quick services from
                    the hospital.
                  </p>
                  <Container
                    style={{ height: "590px", width: "495px", margin: "30px" }}
                  >
                    <Segment>
                      {/* <Segment
                //   style={{ height: "590px", width: "490px", margin: "70px" }}
                > */}
                      <Form
                        size="large"
                        style={{ width: "450px", margin: "9px" }}
                        // ref={dataform}
                        onSubmit={onClickMethod}
                      >
                        <Form.Group widths="equal">
                          <Form.Field
                            name="fname"
                            value={fname}
                            control={Input}
                            label="First name"
                            placeholder="First name"
                            onChange={onChangemethod}
                            required
                          />
                          <Form.Field
                            name="lname"
                            value={lname}
                            control={Input}
                            label="Last name"
                            placeholder="Last name"
                            onChange={onChangemethod}
                            required
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Field
                            control={Select}
                            options={genderOptions}
                            label="Gender"
                            name="gender"
                            value={gender}
                            placeholder="Gender"
                            search
                            searchInput={{ id: "form-select-control-gender" }}
                            onChange={(e, value) => handleChange(e, value)}
                            required
                          />
                          <Form.Field
                            name="email"
                            value={email}
                            control={Input}
                            label="Email"
                            placeholder="joe@schmoe.com"
                            onChange={onChangemethod}
                            required
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Field
                            name="date"
                            value={date}
                            type="date"
                            control={Input}
                            label=" Appointment Date"
                            placeholder="Date"
                            onChange={onChangemethod}
                            required
                          />
                          <Form.Field
                            name="phone"
                            value={phone}
                            type="phone"
                            control={Input}
                            label="Contact"
                            placeholder="Enter Your Contact"
                            onChange={onChangemethod}
                            required
                          />
                        </Form.Group>
                        <Form.Group widths="equal">
                          <Form.Field
                            name="message"
                            value={message}
                            control={TextArea}
                            label="Message"
                            placeholder="Your Problem"
                            onChange={onChangemethod}
                            required
                          />
                        </Form.Group>
                        <Form.Field
                          control={Button}
                          color="blue"
                          content="Submit"

                          // onClick={onClickMethod}
                        />
                      </Form>
                    </Segment>
                  </Container>
                </Container>
              </Grid.Column>
              {/* ******************************************************************************* */}

              <Grid.Column>
                {/* <div style={{ marginLeft: "50px" }}>
                <img
                  style={{
                      // borderRadius: "20px",
                    height: "330px",
                    width: "450px",
                    marginRight: "50px",
                  }}
                  src={imgg2}
                  as="a"
                  href="#"
                />
              </div> */}
                <h2 className="tt" style={titalheader}>
                  𝐄𝐧𝐪𝐮𝐢𝐫𝐲 𝐒𝐥𝐨𝐭
                </h2>
                <Container style={style_width}>
                  <p style={styles}>
                    If any information required then you can book inquiry slot
                    you will get hospital information very soon in an email so
                    that you can get prompt services from the hospital.
                  </p>
                  <Container
                    style={{ height: "590px", width: "495px", margin: "30px" }}
                  >
                    <Segment>
                      {/* <Segment
                //   style={{ height: "590px", width: "490px", margin: "70px" }}
                > */}

                      <Form
                        size="large"
                        style={{ width: "450px" }}
                        onSubmit={onClickMethod1}
                      >
                        <Form.Field
                          name="fname"
                          value={state1.fname}
                          control={Input}
                          label="Full name"
                          placeholder="Full name"
                          onChange={onChangemethod1}
                          required
                        />
                        <Form.Field
                          name="email"
                          value={state1.email}
                          control={Input}
                          label="Email"
                          placeholder="Email Address"
                          onChange={onChangemethod1}
                          required
                        />
                        <Form.Field
                          name="phone"
                          value={state1.phone}
                          type="phone"
                          control={Input}
                          label="Contact"
                          placeholder="Enter Your Contact"
                          onChange={onChangemethod1}
                          required
                        />
                        <Form.Group widths="equal">
                          <Form.Field
                            name="message"
                            value={state1.message}
                            control={TextArea}
                            label="Message"
                            placeholder="Your Problem"
                            onChange={onChangemethod1}
                            required
                          />
                        </Form.Group>
                        <Form.Field
                          control={Button}
                          color="blue"
                          content="Send"
                        />
                      </Form>
                    </Segment>
                  </Container>
                </Container>
              </Grid.Column>
              {/* ******************************************************************************* */}
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Contactus;
