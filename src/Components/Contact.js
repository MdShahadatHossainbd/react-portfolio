import React, { Component } from "react";
import { Cell, Grid, List, ListItem, ListItemContent } from "react-mdl";
import "./Assets/Css/contact.css";
import ProfilePic from "./Assets/img/M-183735.JPG";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shahadat</h2>
            <img
              src={ProfilePic}
              style={{ height: "250px" }}
            />
            <p style={{ width: "85%", margin: "auto", paddingTop: "1em" }}>
            I have been passionate about Web development since I began my university second year. I have been working with Front-End Development for more than 2+ years. Also, I have experience with building JavaScript and ReactJS applications.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Ubuntu" }}
                  >
                    <i clasName="fa fa-phone" aria-hidden="true" />
                    >(+880) 1719517974
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="address">Monipuripara, Dhaka, 1215</ListItemContent>
                </ListItem>
                {/* <ListItem>
                  <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                </ListItem> */}
                <ListItem>
                  <ListItemContent icon="email">shahadatbd1464@gmail.com</ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
