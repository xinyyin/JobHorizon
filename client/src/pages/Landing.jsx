import styled from 'styled-components'
import Wrapper from "../assets/wrappers/LandingPage"
import main from "../assets/images/main.svg"
// import logo from "../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import {Logo} from '../components'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            This is a job tracking app that allows you to keep track of your job
            applications and interviews. You can add new jobs, view your
            application status, and keep track of your interview dates and
            times. The app also allows you to add notes and attachments to your
            job applications, so you can keep all of your information in one
            place.
          </p>
          <Link to="/Register" className="btn register-link">
            Register
          </Link>
          <Link to="/Login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing;
