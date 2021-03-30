import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import "./Assets/Css/LandingPage.css";
import ProfilePic from "./Assets/img/M-183735.JPG";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage-wrap">
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="pp-div">
              {" "}
              <img
                src={ProfilePic}
                alt="profile-picture"
                className="ppicture"
              />
            </div>
            <div className="banner-text">
              <h1>Md Shahadat Hossain</h1>
              <p>CS Undergrade | Coder | React-DEV | AI/ML</p>

              <div className="social-links">
                {/*Linkedin*/}
                <a
                  href="https://www.linkedin.com/in/mdshahadathossain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-linkedin-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>

                {/*Github*/}
                <a
                  href="https://github.com/MdShahadatHossainbd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-github-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>

                {/*Twitter*/}
                <a
                  href="https://twitter.com/mdshahadat_bd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-twitter"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>

                {/*instagram*/}
                <a
                  href="https://www.instagram.com/mdshahadathossain.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-instagram"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
