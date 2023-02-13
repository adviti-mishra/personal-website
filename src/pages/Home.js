import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Home.css"
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Adviti</h2>
        <div className="prompt"> 
        <p> An aspiring software engineer / product manager passionate about building tech products for impact </p>
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list"> 
        <li className="item">
          <h2> Front-end </h2>
          <span>
            ReactJS, HTML, CSS, React Native, Flutter, BootStrap, MaterialUI, Yarn
          </span>
        </li>
        <li className="item">
          <h2> Back-end </h2>
          <span>
            MySQL, MongoDB, AWS
          </span>
        </li>
        <li className="item">
          <h2> Languages </h2>
          <span>
            C++, Python, Java, JavaScript, C
          </span>
        </li>
        <li className="item">
          <h2> Data </h2>
          <span>
            Pytorch, TensorFlow, NumPy, Pandas, Jupyter Notebook, Google Collab, Matplotlib, Seaborn
          </span>
        </li>
        </ol>
      </div>
      </div>
  )
}

export default Home