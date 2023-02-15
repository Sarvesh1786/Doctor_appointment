import React from "react";
import {
  Checkbox,
  Grid,
  Header,
  Image,
  Menu,
  // Ref,
  Segment,
  Sidebar
} from "semantic-ui-react";

const SidebarExampleTarget = () => {
  // const segmentRef = React.useRef()
  const [visible, setVisible] = React.useState(false);

  return (
    <Grid columns={2}>
      <Checkbox
        checked={visible}
        label={{ children: <code>visible</code> }}
        onChange={(e, data) => setVisible(data.checked)}
      />

      <Sidebar.Pushable  raised>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">Home</Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
        


        </Sidebar>

        <Segment>
          <Header as="h3">Application Content</Header>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pushable>
    </Grid>
  );
};

export default SidebarExampleTarget;
