import React from "react";
import { Row } from "reactstrap";
import { withRouter } from "react-router";

import "./head.css";
import Logo from "../assets/loire-en-vert.png";
import retourFleche from "../assets/retourFleche.png";

// import Media from "react-media";

// const Media = require("react-media");
const styleBack = {
  goBack: {
    background: `url(${retourFleche})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    left:"10px",
    height: "25vmin",
    width: "10vmin",
  }
};
class HeadBack extends React.Component {
  // fonction Anaële qui rappelle la page précédement visitée
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="header">
        <Row className="headerRow">
          <div className="headerLogoBack" >
              <div style={styleBack.goBack} onClick={this.goBack} />
          </div>
          <div className="headerPhrase">
            Toutes les activités nature <br />
            dans la Loire
          </div>
        </Row>
      </div>
    );
  }
}

export default withRouter(HeadBack);
