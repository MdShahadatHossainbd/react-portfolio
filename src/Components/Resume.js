import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import "./Assets/Css/Resume.css";
import ProfilePic from "./Assets/img/M-183735.JPG";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div className={{ textAlign: "center" }}>
              <img
                src={ProfilePic}
                alt="avatar"
                style={{ height: "100%", width: "100%"}}
              />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, veniam pariatur dolor omnis nostrum ullam, consequuntur fugiat aliquam, fugit recusandae sint quisquam. Eveniet esse commodi nam eum autem omnis fugit.</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}
