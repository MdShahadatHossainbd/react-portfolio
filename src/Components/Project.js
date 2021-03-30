import React, { Component } from "react";
import reactlogo from "./Assets/img/react.png";
import "./Assets/Css/project.css";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardActions,
  Button,
  CardTitle,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*project #1 */}
          <Card shadow={5} style={{ width: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "gray",
                height: "176px",
                background:
                  "url{https://w0.pngwave.com/png/856/564/react-logo-javascript-front-and-back-ends-user-interface-others-png-clip-art.png}center/cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              sDGadsgasdgADSGASGASGASGADSGADSGASGASGASGdwgaSDHDFGJSFHJAFHsdfjdsfjsdfghstyusgfhstu
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>codePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*project #2 */}
          <Card shadow={5} style={{ width: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "gray",
                height: "176px",
                background:
                  "url{https://w0.pngwave.com/png/856/564/react-logo-javascript-front-and-back-ends-user-interface-others-png-clip-art.png}center/cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              sDGadsgasdgADSGASGASGASGADSGADSGASGASGASGdwgaSDHDFGJSFHJAFHsdfjdsfjsdfghstyusgfhstu
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>codePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*project #3 */}
          <Card shadow={5} style={{ width: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "gray",
                height: "176px",
                background:
                  "url{https://w0.pngwave.com/png/856/564/react-logo-javascript-front-and-back-ends-user-interface-others-png-clip-art.png}center/cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              sDGadsgasdgADSGASGASGASGADSGADSGASGASGASGdwgaSDHDFGJSFHJAFHsdfjdsfjsdfghstyusgfhstu
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>codePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*project #4 */}
          <Card shadow={5} style={{ width: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "gray",
                height: "176px",
                background:
                  "url{https://w0.pngwave.com/png/856/564/react-logo-javascript-front-and-back-ends-user-interface-others-png-clip-art.png}center/cover",
              }}
            >
              React Project #4
            </CardTitle>
            <CardText>
              sDGadsgasdgADSGASGASGASGADSGADSGASGASGASGdwgaSDHDFGJSFHJAFHsdfjdsfjsdfghstyusgfhstu
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>codePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*project #5 */}
          <Card shadow={5} style={{ width: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "gray",
                height: "176px",
                background:
                  "url{https://w0.pngwave.com/png/856/564/react-logo-javascript-front-and-back-ends-user-interface-others-png-clip-art.png}center/cover",
              }}
            >
              React Project #5
            </CardTitle>
            <CardText>
              sDGadsgasdgADSGASGASGASGADSGADSGASGASGASGdwgaSDHDFGJSFHJAFHsdfjdsfjsdfghstyusgfhstu
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>codePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*project #6 */}
          <Card shadow={5} style={{ width: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "gray",
                height: "176px",
                background:
                  "url{https://w0.pngwave.com/png/856/564/react-logo-javascript-front-and-back-ends-user-interface-others-png-clip-art.png}center/cover",
              }}
            >
              React Project #6
            </CardTitle>
            <CardText>
              sDGadsgasdgADSGASGASGASGADSGADSGASGASGASGdwgaSDHDFGJSFHJAFHsdfjdsfjsdfghstyusgfhstu
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>codePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>this is flutter</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>this is python</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
          className="navigation"
        >
          <Tab>React</Tab>
          <Tab>Flutter</Tab>
          <Tab>Python</Tab>
        </Tabs>
        <section>
          {this.toggleCategories()}>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
