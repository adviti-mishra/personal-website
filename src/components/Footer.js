import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon />
            <GitHubIcon />
            <TwitterIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2023 adviti-mishra.com</p>
    </div>
  )
}

export default Footer