import React, { Component } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a
            className="social-github"
            href=""
            target="blank"
          >
            <GitHub
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a
            className="social-linkedin"
            href=""
            target="blank"
          >
            <LinkedIn
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2023 Copyright
          <a href="" target="blank">
            {" "}
            
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
