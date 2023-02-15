import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import teeth from "../../logos/banner/teeth.jpg";
import Diagnosisimg from "../../logos/banner/services/Diagnosis.jpg";
import xray from "../../logos/banner/services/xray.jpg";
import opg from "../../logos/banner/services/opg.jpg";
import ceph from "../../logos/banner/services/ceph.jpg";
import smile from "../../logos/banner/services/smile.jpg";
import dentures from "../../logos/banner/services/dentures.jpg";
import crowns from "../../logos/banner/services/crowns.jpg";
import gum from "../../logos/banner/services/gum.jpg";

const Xraysservies1 = () => {
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
    width: "420px",
    height: "100px",
    textAlign: "center",
    marginTop: "72px",
    fontSize: "40px ",
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
    color: "#CD5C5C",
  };
  return (
    <>
      <div>
        <Container>
          <Grid columns={2} padded>
            <Grid.Column>
              <h3 style={mainheader}>Intimus health care services</h3>
              {/* *************************************************************************************** */}

              <h2 className="tt" style={titalheader}>
                Smile Designing
              </h2>
              <Container style={style_width}>
                <p style={styles}>
                  <img
                    src={smile}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  Smile design is a cosmetic dental procedure that corrects
                  teeth imperfections and restores your dental health and
                  appearance. It involves a customized treatment and
                  long-lasting results for a straighter, whiter, and
                  natural-looking smile. Our teeth wear down, chip, or discolour
                  over time.
                </p>
                {/* *************************************************************************************** */}
                <h2 className="tt" style={titalheader}>
                  Dentures
                </h2>
                <p style={styles}>
                  <img
                    src={dentures}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  A denture is a removable replacement for missing teeth and
                  surrounding tissues. Two types of dentures are available --
                  complete and partial dentures. Complete dentures are used when
                  all the teeth are missing, while partial dentures are used
                  when some natural teeth remain.
                </p>

                <p style={styles}>
                  It can take a few weeks to adjust to dentures, but once your
                  mouth is strong, you can eat just about any food. There will
                  always be some foods that aren't denture-friendly, like
                  chewing gum, popcorn, whole nuts, steak, and sticky candy.
                </p>
                {/* *************************************************************************************** */}
                {/* *************************************************************************************** */}
                <h2 className="tt" style={titalheader}>
                  Crowns and bridges
                </h2>
                <p style={styles}>
                  <img
                    src={crowns}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  Crowns- Dental crowns are caps placed on top of damaged teeth.
                  Crowns are used to protect, cover and restore the shape of
                  your teeth when fillings don’t solve the problem. Dental
                  crowns can be made out of metals, porcelain, resin and
                  ceramics. They typically don’t require special care over time
                  other than regular good oral hygiene.
                </p>

                {/* *************************************************************************************** */}
                {/* *************************************************************************************** */}
                <h2 className="tt" style={titalheader}>
                  Gum Surgery
                </h2>
                <p style={styles}>
                  <img
                    src={gum}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  GUM SURGERY - Sometimes, periodontal surgery may be needed to
                  treat certain gum diseases and conditions, such as gingivitis
                  or periodontitis. This type of surgery is commonly known as
                  gum surgery. Gum diseases such as gingivitis and periodontitis
                  may require surgical treatment. Gingivitis is a mild form of
                  gum disease that can cause gum redness, swelling, and
                  bleeding. Most often, gingivitis occurs due to poor oral
                  hygiene, plaque, and tartar buildup. Professional treatment
                  can reverse the condition.
                </p>
                <p style={styles}>
                  Periodontitis is a more severe form of gum disease in which
                  gingivitis has worsened and advanced, leading to an
                  inflammatory response that destroys bone and tissues. During
                  this inflammatory process, the gums begin to separate from the
                  teeth. This causes spaces called pockets to develop, which in
                  turn trap bacteria and lead to infection.
                </p>

                {/* *************************************************************************************** */}

                {/* *************************************************************************************** */}
              </Container>
            </Grid.Column>

            <Grid.Column>
              <h2 className="tt" style={titalheader}>
                Diagnosis
              </h2>
              <Container style={style_width}>
                <p style={styles}>
                  <img
                    src={Diagnosisimg}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  It involves an in-depth examination of the patient's teeth,
                  gums, jaw and muscles. A comprehensive diagnostic exam isn't
                  just regular teeth cleaning or evaluation, but involves an
                  overall view of the health of your mouth and jaw. One of the
                  most common diseases that impact our oral health
                  include cavities (tooth decay), gum (periodontal) disease, and
                  oral cancer. It is important to note that when you provide a
                  diagnosis for a tooth, you have to give both a pulpal
                  diagnosis and a periapical diagnosis.
                </p>

                {/* *************************************************************************************** */}
                <h2 className="tt" style={titalheader}>
                  Digital X-rays
                </h2>
                <p style={styles}>
                  <img
                    src={xray}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  In digital radiography, a sensor is inserted into your mouth
                  which aids in capturing the images of your teeth. Here lies
                  the difference between old school X-rays and digital X- rays.
                  Although it looks like the film used for traditional X-rays,
                  the digital sensor is an electronic device connected to a
                  computer. Digital X-rays expose patients to 90 percent less
                  radiation in comparison to conventional X-ray machines. While
                  both are considered relatively safe, digital radiography
                  X-rays are the perfect option for patients who are concerned
                  with the amount of radiation to which they or their loved ones
                  are being exposed. It is easy & paperless, therefore records
                  can be saved in Laptops/Computers.
                </p>
                {/* *************************************************************************************** */}
                <h2 className="tt" style={titalheader}>
                  OPG
                </h2>
                <p style={styles}>
                  <img
                    src={opg}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  An orthopantomogram (OPG) is a common radiograph used to
                  identify the hard tissues of the oral cavity and surrounding
                  skeletal structures. An OPG X-ray helps to detect teeth
                  cavities, fractures, jaw dislocation, infection, tumours,
                  sinuses, tooth impaction, etc
                </p>
                <p style={styles}>
                  Procedure: The scan procedure involves you resting your chin
                  on a small chin rest in front of the x-ray machine and biting
                  softly on a sterile mouthpiece while pressing your tongue
                  against the hard palate. You will be asked to maintain maximum
                  stillness during the scan for ensuring clear images.
                </p>
                {/* *************************************************************************************** */}
                <h2 className="tt" style={titalheader}>
                  Lateral Ceph
                </h2>
                <p style={styles}>
                  <img
                    src={ceph}
                    style={{
                      height: "130px",
                      width: "180px",
                      float: "right",
                      marginLeft: "15px",
                    }}
                  />
                  A Lat Ceph is a lateral or side view x-ray of the face, which
                  demonstrates the bones and facial contours in profile on a
                  single film. These x-rays are usually used in the diagnosis
                  and treatment of orthodontic problems. A Lateral Cephalogram
                  (or Lat Ceph) is an x-ray taken of the side of the face with
                  very precise positioning so that various measurements can be
                  made to determine the current and future relationship of the
                  top and bottom jaw (maxilla and mandible) and therefore assess
                  the nature of a patient's bite. It is a standardised,
                  reproducible radiograph used primarily for orthodontic
                  diagnosis and treatment planning.
                </p>

                <p style={styles}>
                  Procedure- It is taken from a distance of 1.5m with the head
                  at a right angle to the X-ray beam at a distance of 30cm,
                  (although this has been found to vary slightly).
                </p>
                {/* *************************************************************************************** */}
              </Container>
              <div></div>
            </Grid.Column>
          </Grid>
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

export default Xraysservies1;
