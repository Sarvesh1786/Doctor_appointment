import React, { useState } from "react";
import { Menu, Header, Input, Dropdown, Icon } from "semantic-ui-react";
import health from "../logos/health.png";
import dentistry from "../logos/dentistry.png";
import overviwe from "../logos/Overview.png";
import nephrologo from "../logos/nephrologo.png";
import { useNavigate } from "react-router";

const Menumain = () => {
  const initialState = { activeItem: "home" };
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = state;
  const trigger = (
    <span>
      <Icon name="settings" /> All Services
    </span>
  );

  return (
    <div style={{ margin: "5px" }}>
      <Menu secondary>
        <Menu.Item>
          <Header size="tiny">
            {/* <Icon name='settings' /> */}
            <img alt="logos" src={health} />
            𝙸𝚗𝚝𝚒𝚖𝚞𝚜 𝙷𝚎𝚊𝚕𝚝𝚑 𝙲𝚊𝚛𝚎
            {/* 𝐇𝐞𝐚𝐥𝐭𝐡 */}
            {/* <Header.Subheader style={{color:"black"}}></Header.Subheader> */}
          </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={() => handleItemClick(navigate("/"))}
          />

          <Dropdown
            item
            text="About Us"
            name="aboutus"
            active={activeItem === "aboutus"}
            // onClick={() => handleItemClick(navigate("/overviwe"))}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                text=" Overview"
                onClick={() => handleItemClick(navigate("/overviwe"))}
                icon={
                  <img alt="logos" src={overviwe} style={{ width: "15px" }} />
                }
              />
              <Dropdown.Item
                text=" Dr.Khushbu Priyadarshini"
                onClick={() => handleItemClick(navigate("/profile"))}
                icon={
                  <img alt="logos" src={nephrologo} style={{ width: "15px" }} />
                }
              />
              {/* <Dropdown.Item
                icon={
                  <img alt="logos" src={nephrologo} style={{ width: "15px" }} />
                }
                text="..."
              /> */}
            </Dropdown.Menu>
          </Dropdown>
          {/* ******************************************************************* */}

          <Dropdown
            item
            text="Services"
            name="services"
            active={activeItem === "Services"}
            onClick={handleItemClick}
          >
            <Dropdown.Menu>
              <Dropdown
                trigger={trigger}
                item
                text="All Services"
                name="All services"
                active={activeItem === "All Services"}
                onClick={handleItemClick}
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="OPG/Digital X-Ray"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Immediate Implants	"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Painless Dentistry	"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Cosmetic Dentistry"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Mouthguards/Splints"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Cosmetic Tooth Fillings	"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Wisdom Tooth Extraction"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="All on 4 Implant Denture"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Sensitive Teeth Treatment"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Cavity  prevention treatment	"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Digital Impression Kids Dentistry	"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Laser Treatment (Surgeris/RCT/TMJ Pain)"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                  <Dropdown.Item
                    text="Single Sitting Root Canal Treatment (RCT)/Filling	"
                    onClick={() => handleItemClick(navigate("/xray"))}
                  />
                </Dropdown.Menu>
              </Dropdown>
              {/* ******************************************************************* */}

              <Dropdown.Item
                onClick={() => handleItemClick(navigate("/xray"))}
                icon={
                  <img alt="logos" src={dentistry} style={{ width: "15px" }} />
                }
                text=" Dentistry"
              />
              <Dropdown.Item
                text="Aligners	"
                onClick={() => handleItemClick(navigate("/xray"))}
              />
              <Dropdown.Item
                text="Braces"
                onClick={() => handleItemClick(navigate("/xray"))}
              />
              <Dropdown.Item
                text="Denture	"
                onClick={() => handleItemClick(navigate("/xray"))}
              />
              <Dropdown.Item
                text="Smile Design"
                onClick={() => handleItemClick(navigate("/xray"))}
              />
              <Dropdown.Item
                text="Gum Surgeries"
                onClick={() => handleItemClick(navigate("/xray"))}
              />
              <Dropdown.Item
                text="Tooth Whitening"
                onClick={() => handleItemClick(navigate("/xray"))}
              />
              <Dropdown.Item
                text="Crowns & Bridge"
                onClick={() => handleItemClick(navigate("/xray"))}
              />
              <Dropdown.Item
                onClick={() => handleItemClick(navigate("/xray"))}
                icon={
                  <img alt="logos" src={nephrologo} style={{ width: "15px" }} />
                }
                text="Scaling & Periodental Care"
              />
              <Dropdown.Item
                onClick={() => handleItemClick(navigate("/xray"))}
                icon={
                  <img alt="logos" src={nephrologo} style={{ width: "15px" }} />
                }
                text=" Preventive Oral Health Care"
              />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name="contact"
            active={activeItem === "Contact"}
            onClick={() => handleItemClick(navigate("/contactus"))}
          />
          <Menu.Item
            name="blog"
            active={activeItem === "blog"}
            onClick={() => handleItemClick(navigate("/blog"))}
          />
          <Menu.Item>
            <Input icon="search" size="mini" placeholder="Search..." />
          </Menu.Item>
          {/* ******************************************************************* */}
          <Menu.Item>
            <Icon disabled name="sidebar" size="large" />
          </Menu.Item>
          {/* <Grid>

          </Grid> */}
          {/* ******************************************************************* */}
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Menumain;
