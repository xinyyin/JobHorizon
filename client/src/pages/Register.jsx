import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components"
import {FormRow} from "../components"

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>register</h4>
        <FormRow type="text" name="name" defaultValue="vicky" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="smith"
        />
        <FormRow type="text" name="location" defaultValue="chicago" />
        <FormRow type="email" name="email" defaultValue="vicky@123" />
        <FormRow type="password" name="password" defaultValue="password123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register;

