import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import { useNavigate } from "react-router";

import a1 from "../logos/banner/t/a1.jpg";
import a9 from "../logos/banner/t/a9.jpg";
import a3 from "../logos/banner/t/a3.jpg";
import a4 from "../logos/banner/t/a4.jpg";
import a5 from "../logos/banner/t/a5.jpg";
import a6 from "../logos/banner/t/a6.jpg";
import a7 from "../logos/banner/t/a7.jpg";
import a10 from "../logos/banner/t/a10.jpg";

const Overserviecs = () => {
  const navigate = useNavigate();
  const handleItemClick = (e) => {
    e.preventDefault();
    navigate("/xray");
  };

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
    // backgroundColor: "red",

    marginRight: "10px",
    width: "1420px",
    height: "150px",
    textAlign: "center",
    marginTop: "72px",
    fontSize: "45px ",
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
          <Grid columns={4} padded>
            <h3 style={mainheader}>We Provide High Quality Services</h3>
            <Grid.Column>
              <div
                style={{
                  //  backgroundColor:"gray",
                  //  textAlign:"center"
                  marginLeft: "70px",
                }}
              >
                <h1>
                  <Image
                    src={a1}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    marginLeft: "20px",
                    color: "blue",
                  }}
                  onClick={handleItemClick}
                >
                  Dental Implants
                </p>

                <h1>
                  <Image
                    src={a5}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    marginLeft: "10px",
                    color: "blue",
                  }}
                  onClick={handleItemClick}
                >
                  Cosmetic Dentistry
                </p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  //  backgroundColor:"gray",
                  //  textAlign:"center"
                  marginLeft: "60px",
                }}
              >
                <h1>
                  <Image
                    src={a6}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    marginLeft: "20px",
                    color: "blue",
                  }}
                  onClick={handleItemClick}
                >
                  {" "}
                  Prosthodontics
                </p>

                <h1>
                  <Image
                    src={a9}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{ fontSize: "16px", marginLeft: "0px", color: "blue" }}
                  onClick={handleItemClick}
                >
                  Crowns and Bridges{" "}
                </p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  //  backgroundColor:"gray",
                  //  textAlign:"center"
                  marginLeft: "40px",
                }}
              >
                <h1>
                  <Image
                    src={a7}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    marginLeft: "50px",
                    color: "blue",
                  }}
                  onClick={handleItemClick}
                >
                  {" "}
                  Laser
                </p>

                <h1>
                  <Image
                    src={a10}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{ fontSize: "16px", marginLeft: "0px", color: "blue" }}
                  onClick={handleItemClick}
                >
                  Preventive Dentistry{" "}
                </p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  //  backgroundColor:"gray",
                  //  textAlign:"center"
                  marginLeft: "10px",
                }}
              >
                <h1>
                  <Image
                    src={a3}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{ fontSize: "16px", marginLeft: "0px", color: "blue" }}
                  onClick={handleItemClick}
                >
                  {" "}
                  Root Canal Treatment
                </p>

                <h1>
                  <Image
                    src={a4}
                    as="a"
                    size="small"
                    href="#"
                    verticalAlign="top"
                    circular
                    onClick={handleItemClick}
                  />
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    marginLeft: "30px",
                    color: "blue",
                  }}
                  onClick={handleItemClick}
                >
                  Orthodontics{" "}
                </p>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
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
      </div>
    </>
  );
};

export default Overserviecs;
